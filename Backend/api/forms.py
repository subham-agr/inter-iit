from socket import fromshare
from django import forms
from api.models import StudentForm #models.py

class StudentForms(forms.ModelForm):
    class Meta:
        model = StudentForm
        fields = "__all__"

    def __init__(self, *args, **kwargs):
            super(StudentForm, self).__init__(*args, **kwargs)
            for field_name, field in self.fields.items():
                field.widget.attrs['class'] = 'form-control' 