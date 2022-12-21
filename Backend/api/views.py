from django.shortcuts import render
from .serializers import StudentSerializer
from .models import *
# from api.forms import StudentForms #forms.py
from django.http import HttpResponse  
from api.functions import handle_uploaded_file  #functions.py
from rest_framework import viewsets
from typing import OrderedDict
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
import requests
from django.views.decorators.csrf import csrf_exempt
import base64
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
import datetime

@csrf_exempt
def posts(request):
    headers = { "Authorization": "Basic "
                + base64.b64encode(
                    f"MmuuRsRfMQaYJc2V8ABVq9CHcTvFC0GwCn7Mh5OZ:VijxQY2jXxzveKVhyfT0ZOiwIgcFxeUPLKhMSUzYLZZbjbTsr0xopWJVUKLlDSlvQFFH7M8wHVtd9xVq6XODHjOk4OA7y2iFc8DfLyDfq1yazIj4ds0G9YUTKSf3biX6".encode("utf-8")
                ).decode("utf-8"),
                "Content-Type": "application/x-www-form-urlencoded",
    }
    x=base64.b64encode(
                    f"MmuuRsRfMQaYJc2V8ABVq9CHcTvFC0GwCn7Mh5OZ:VijxQY2jXxzveKVhyfT0ZOiwIgcFxeUPLKhMSUzYLZZbjbTsr0xopWJVUKLlDSlvQFFH7M8wHVtd9xVq6XODHjOk4OA7y2iFc8DfLyDfq1yazIj4ds0G9YUTKSf3biX6".encode("utf-8")
                ).decode("utf-8")
    data = JSONParser().parse(request)
    print(data.get('code'))
    r = requests.post('https://gymkhana.iitb.ac.in/profiles/oauth/token/', data='code='+data.get('code')+'&grant_type=authorization_code', headers=headers) 
    b = requests.get('https://gymkhana.iitb.ac.in/profiles/user/api/user/?fields=first_name,last_name,profile_picture,mobile,roll_number,contacts,program', headers={'Authorization':'Bearer '+r.json()['access_token']})
    data=b.json()
    print(data)
    if data['contacts'] is None:
        data['contacts'] = [{'number':None}]
    if data['program'] is None:
        data['program']={'department_name':'','join_year':'','degree':''}
    year = datetime.datetime.now().year - data['program']['join_year']
    if datetime.datetime.now().month>6:
        year+= 1
    users = User.objects.filter(username = data['roll_number'])
    if len(users)==0:
        user = User.objects.create_user(username=data['roll_number'], password='techpoints')
        user.save()
    else:
        user = users[0]
    token,created = Token.objects.get_or_create(user = user)
    user_data=OrderedDict([('name',data['first_name'] + ' ' + data['last_name']),('picture',data['profile_picture']),('roll_number',data['roll_number']),('phone',data['mobile']),('contacts',data['contacts'][0]['number']),('token',token.key),('branch',data['program']['department_name']),('programme',data['program']['degree']),('batch',year)])
    print(user_data)
    return JsonResponse(user_data)

@api_view(['GET', 'POST', 'PUT'])
def index(request):
    if request.method == 'POST':
        if len(StudentForm.objects.filter(roll_number = request.POST['roll_number'])) == 0:
            handle_uploaded_file(request.FILES['file'])
            student = StudentForm(name=request.POST['name'],roll_number = request.POST['roll_number'],mobile = request.POST["phonenumber"],topskills = request.POST['skills'],skills=request.POST['otherskills'],resume = request.FILES['file'].name)
            student.save()
            return JsonResponse({'success':True})
        return JsonResponse({'success':False})
    # else:
    #     student = StudentForms()
    #     return render(request, "index.html", {'form':student})

@api_view(['POST'])
def check_reg(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        user = StudentForm.objects.filter(roll_number = data['roll_number'])
        if len(user) == 0:
            return JsonResponse({'success':False})
        return JsonResponse({'success':True})

@api_view(['POST'])
def ps(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        ps = Problem.objects.all().order_by('-id')
        p = []
        for i in ps:
            reg = Registration.objects.filter(ps_id = i.ps_id, roll_number = data['roll_number'])
            signed = len(reg)!=0
            p.append({'id':i.ps_id,'name':i.ps_name,'link':request.build_absolute_uri(i.ps_pdf.url),'extra_link':request.build_absolute_uri(i.extra_pdf.url),'signed':signed,'deadline':i.deadline})
        return JsonResponse(p,safe=False)

@api_view(['POST','PUT'])
def sign(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        user = StudentForm.objects.get(roll_number = data['roll_number'])
        reg = Registration(roll_number = data['roll_number'],ps_id = data['ps_id'],understanding = data['understanding'], approach = data['approach'], commitments = data['commitments'], name=user.name, mobile = user.mobile, topskills = user.topskills, skills = user.skills, resume = user.resume)
        reg.save()
        return JsonResponse({'success':True})
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        reg = Registration.objects.filter(roll_number = data['roll_number'],ps_id = data['ps_id'])[0]
        reg.understanding = data['understanding']
        reg.approach = data['approach']
        reg.commitments = data['commitments']
        reg.save()
        return JsonResponse({'success':True})

@api_view(['POST','PUT'])
def admin(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        users = User.objects.filter(username=data['username'])
        if len(users)==0:
            return JsonResponse({"success":False},safe=False)
        user = users[0]
        if not user.check_password(data['password']):
            return JsonResponse({"success":False},safe=False)
        if not user.is_superuser:
            return JsonResponse({"success":False},safe=False)
        pids = Problem.objects.all().order_by('-ps_id').values_list('ps_id').distinct()
        result = {}
        for p in pids:
            regs = Registration.objects.filter(ps_id = p[0])
            p_name = Problem.objects.get(ps_id = p[0]).ps_name
            user_list = []
            for reg in regs:
                user = [p_name, reg.roll_number,reg.name,reg.mobile,reg.topskills,reg.skills,reg.resume.url,reg.understanding,reg.approach,reg.commitments,reg.comment]
                user_list.append(user)
            result[p[0]] = user_list
        result['success'] = True
        return JsonResponse(result)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        users = User.objects.filter(username=data['username'])
        if len(users)==0:
            return JsonResponse({"success":False},safe=False)
        user = users[0]
        if not user.check_password(data['password']):
            return JsonResponse({"success":False},safe=False)
        if not user.is_superuser:
            return JsonResponse({"success":False},safe=False)
        reg = Registration.objects.filter(ps_id = data['ps_id'], roll_number = data['roll_number'])[0]
        reg.comment = data['comment']
        reg.save()
        return JsonResponse({'success':True})

class StudentViewSet(viewsets.ModelViewSet):
    queryset=StudentForm.objects.all()
    serializer_class=StudentSerializer