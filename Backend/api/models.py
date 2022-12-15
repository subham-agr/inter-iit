from django.db import models

# Create your models here.

class StudentForm(models.Model):
    roll_number = models.CharField(max_length=2000,blank=True,null=True)
    topskills = models.CharField(max_length=2000,blank=True,null=True)
    skills = models.CharField(max_length=2000,blank=True,null=True)
    resume = models.FileField(blank=True,null=True)

    class Meta:
        db_table = "student"

class Problem(models.Model):
    ps_id = models.CharField(max_length=2000,blank=True,null=True)
    ps_name = models.CharField(max_length=2000,blank=True,null=True)
    ps_pdf = models.FileField(blank=True,null=True)

class Registration(models.Model):
    roll_number = models.CharField(max_length=2000,blank=True,null=True)
    ps_id = models.CharField(max_length=2000,blank=True,null=True)
    understanding = models.CharField(max_length=2000,blank=True,null=True)
    approach = models.CharField(max_length=2000,blank=True,null=True)
    commitments = models.CharField(max_length=2000,blank=True,null=True)
    topskills = models.CharField(max_length=2000,blank=True,null=True)
    skills = models.CharField(max_length=2000,blank=True,null=True)
    resume = models.FileField(blank=True,null=True)
