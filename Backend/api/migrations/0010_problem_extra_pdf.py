# Generated by Django 4.0.4 on 2022-12-21 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_registration_deadline_registration_mobile_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='problem',
            name='extra_pdf',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
