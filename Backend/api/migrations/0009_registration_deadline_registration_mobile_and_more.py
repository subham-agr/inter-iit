# Generated by Django 4.0.4 on 2022-12-21 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_problem_id_alter_registration_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='registration',
            name='deadline',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='registration',
            name='mobile',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
        migrations.AddField(
            model_name='registration',
            name='name',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
        migrations.AddField(
            model_name='studentform',
            name='mobile',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
    ]
