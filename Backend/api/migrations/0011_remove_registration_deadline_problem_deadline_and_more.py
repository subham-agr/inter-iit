# Generated by Django 4.0.4 on 2022-12-21 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_problem_extra_pdf'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registration',
            name='deadline',
        ),
        migrations.AddField(
            model_name='problem',
            name='deadline',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='registration',
            name='comment',
            field=models.TextField(blank=True, null=True),
        ),
    ]