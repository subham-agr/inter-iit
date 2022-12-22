from django.db import models
# Create your models here.

class StudentForm(models.Model):
    roll_number = models.CharField(max_length=2000,blank=True,null=True,unique=True)
    name = models.CharField(max_length=2000,blank=True,null=True)
    topskills = models.CharField(max_length=2000,blank=True,null=True)
    skills = models.CharField(max_length=2000,blank=True,null=True)
    resume = models.FileField(blank=True,null=True)
    mobile = models.CharField(max_length=2000,blank=True,null=True)
    ldapid = models.EmailField(blank=True,null=True)
    def __str__(self):
        return f"{self.roll_number}"
class Problem(models.Model):
    ps_id = models.CharField(max_length=2000,blank=True,null=True,unique=True)
    ps_name = models.CharField(max_length=2000,blank=True,null=True)
    ps_pdf = models.FileField(blank=True,null=True)
    extra_pdf = models.FileField(blank=True,null=True)
    deadline = models.BooleanField(blank=True, null=True)
    date_dead = models.DateField(null=True, blank=True)
    def __str__(self):
        return f"{self.ps_id}"
class Registration(models.Model):
    roll_number = models.CharField(max_length=2000,blank=True,null=True)
    name = models.CharField(max_length=2000,blank=True,null=True)
    mobile = models.CharField(max_length=2000,blank=True,null=True)
    ps_id = models.CharField(max_length=2000,blank=True,null=True)
    understanding = models.CharField(max_length=2000,blank=True,null=True)
    approach = models.CharField(max_length=2000,blank=True,null=True)
    commitments = models.CharField(max_length=2000,blank=True,null=True)
    topskills = models.CharField(max_length=2000,blank=True,null=True)
    skills = models.CharField(max_length=2000,blank=True,null=True)
    resume = models.FileField(blank=True,null=True)
    comment = models.TextField(blank =True, null = True)
    def __str__(self):
        return f"{self.roll_number} - {self.ps_id}"