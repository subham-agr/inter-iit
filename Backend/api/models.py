from django.db import models

# Create your models here.

class StudentForm(models.Model):
    roll_number = models.CharField(max_length=2000,blank=True,null=True)
    topskills = models.CharField(max_length=2000,blank=True,null=True)
    skills = models.CharField(max_length=2000,blank=True,null=True)
    file = models.FileField(blank=True,null=True)

    class Meta:
        db_table = "student"