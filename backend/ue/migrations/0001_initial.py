# Generated by Django 3.1.1 on 2020-12-06 14:17

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UE',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('libelle', models.CharField(max_length=50, validators=[django.core.validators.MinLengthValidator(3)])),
                ('acronyme', models.CharField(max_length=5, validators=[django.core.validators.MinLengthValidator(3)])),
                ('credits', models.PositiveIntegerField()),
            ],
        ),
    ]
