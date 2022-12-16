from django.shortcuts import render
from .serializers import StudentSerializer
from .models import StudentForm
from api.forms import StudentForms #forms.py
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
    b = requests.get('https://gymkhana.iitb.ac.in/profiles/user/api/user/?fields=first_name,last_name,profile_picture,mobile,roll_number,contacts', headers={'Authorization':'Bearer '+r.json()['access_token']})
    data=b.json()
    print(data)
    user_data=OrderedDict([('name',data['first_name'] + ' ' + data['last_name']),('picture',data['profile_picture']),('roll_number',data['roll_number']),('phone',data['mobile']),('contacts',data['contacts'][0]['number'])])
    if data['contacts'] is None:
        data['contacts'] = [{'number':None}]
    users = User.objects.filter(username = data['roll_number'])
    if len(users)==0:
        user = User.objects.create_user(username=data['roll_number'], password='techpoints')
        user.save()
    else:
        user = users[0]
    token,created = Token.objects.get_or_create(user = user)
    user_data=OrderedDict([('name',data['first_name'] + ' ' + data['last_name']),('picture',data['profile_picture']),('roll_number',data['roll_number']),('phone',data['mobile']),('contacts',data['contacts'][0]['number']),('token',token.key)])
    print(user_data)
    return JsonResponse(user_data)

@api_view(['GET', 'POST', 'PUT'])
def index(request):
    if request.method == 'POST':
        handle_uploaded_file(request.FILES['file'])
        print(request.POST)
        student = StudentForms(request.POST, request.FILES)  
        print(student)
        # return HttpResponse("File uploaded successfully")
        if student.is_valid():  
            handle_uploaded_file(request.FILES['file'])  
            model_instance = student.save(commit=False)
            model_instance.save()
            return HttpResponse("File uploaded successfuly") 
        print(request.FILES['file'])
        student = StudentForm(name=request.POST['name'],roll_number = request.POST['roll_number'],topskills = request.POST['skills'],skills=request.POST['otherskills'],resume = request.FILES['file'].name)
        student.save()
        return HttpResponse("File uploaded successfuly") 
    # else:
    #     student = StudentForms()
    #     return render(request, "index.html", {'form':student})
class StudentViewSet(viewsets.ModelViewSet):
    queryset=StudentForm.objects.all()
    serializer_class=StudentSerializer