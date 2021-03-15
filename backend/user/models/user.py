from django.db import models

class User(models.Model):
    username = models.CharField(max_length=200, unique=True)
    isStaff = models.BooleanField(default=False, null=True)
    isDirector = models.BooleanField(default=False, null=True)
    password = models.CharField(max_length=200)
