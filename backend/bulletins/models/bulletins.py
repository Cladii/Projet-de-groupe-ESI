from django.db import models

class Bulletins(models.Model):
    numbers = models.IntegerField(unique=False)
    UE = models.CharField(max_length=200, default="")
    acquis = models.CharField(max_length=200, default="")