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
from rest_framework.parsers import JSONParser

import requests
from django.views.decorators.csrf import csrf_exempt
import base64

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
    b = requests.get('https://gymkhana.iitb.ac.in/profiles/user/api/user/?fields=first_name,last_name,profile_picture', headers={'Authorization':'Bearer '+r.json()['access_token']})
    data=b.json()
    print(data)
    user_data=OrderedDict([('name',data['first_name'] + ' ' + data['last_name']),('picture',data['profile_picture'])])
    return JsonResponse(user_data)

def index(request):
    if request.method == 'POST':  
        student = StudentForms(request.POST, request.FILES)  
        if student.is_valid():  
            handle_uploaded_file(request.FILES['file'])  
            model_instance = student.save(commit=False)
            model_instance.save()
            return HttpResponse("File uploaded successfuly") 
    else:
        student = StudentForms()
        return render(request, "index.html", {'form':student})

class StudentViewSet(viewsets.ModelViewSet):
    queryset=StudentForm.objects.all()
    serializer_class=StudentSerializer
