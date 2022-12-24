from django.db import models


# Create your models here.
class StudentForm(models.Model):
    roll_number = models.CharField(max_length=20, unique=True, blank=False, null=False)
    name = models.CharField(max_length=200, blank=False, null=False)
    top_skills = models.CharField(max_length=2000, blank=False, null=False)
    other_skills = models.CharField(max_length=2000, blank=True, null=True)
    resume = models.URLField(max_length=2000, blank=False, null=False)
    mobile = models.CharField(max_length=20, blank=False, null=False)
    ldap_email = models.EmailField(max_length=200, blank=False, null=False)
    is_admin = models.BooleanField(default=False, blank=False, null=False)

    def __str__(self):
        return f'{self.roll_number}'


class Problem(models.Model):
    ps_id = models.CharField(max_length=20, unique=True, blank=False, null=False)
    ps_name = models.CharField(max_length=2000, blank=False, null=False)
    ps_pdf = models.FileField(blank=False, null=False)
    addon_pdf = models.FileField(blank=False, null=False)
    deadline = models.DateField(blank=False, null=True)
    signable = models.BooleanField(default=False, blank=False)

    def __str__(self):
        return f'{self.ps_id}'


class Registration(models.Model):
    student = models.ForeignKey(StudentForm, on_delete=models.CASCADE)
    ps_id = models.CharField(max_length=20, blank=False, null=False)
    understanding = models.CharField(max_length=20000, blank=True, null=False)
    approach = models.CharField(max_length=20000, blank=True, null=False)
    commitments = models.CharField(max_length=20000, blank=True, null=False)
    comment = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.student.roll_number} - {self.ps_id}'
