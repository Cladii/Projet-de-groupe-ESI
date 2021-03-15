from django.db import models

class Prerequis(models.Model):
    selected = models.CharField(max_length=50, unique=False)
    prerequis = models.CharField(max_length=50, unique=False)
