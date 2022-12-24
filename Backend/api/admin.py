from django.contrib import admin

from api.models import Problem, Registration, StudentForm

# Register your models here.
admin.site.register(StudentForm)
admin.site.register(Problem)
admin.site.register(Registration)
