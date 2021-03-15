from django.db import models

class Students(models.Model):
    number = models.IntegerField(unique = True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
