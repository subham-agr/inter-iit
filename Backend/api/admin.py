from django.contrib import admin
from api.models import StudentForm
from api.models import *

# Register your models here.
admin.site.register(StudentForm)
admin.site.register(Problem)
admin.site.register(Registration)