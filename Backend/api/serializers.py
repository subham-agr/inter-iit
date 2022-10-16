from dataclasses import field, fields
from operator import mod
from pyexpat import model
from rest_framework import serializers
from .models import StudentForm

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = StudentForm
        fields = '__all__'