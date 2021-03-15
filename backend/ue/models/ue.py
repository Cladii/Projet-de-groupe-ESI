from django.db import models
from django.core.validators import MinLengthValidator

# Create your models here.
class UE(models.Model):
    libelle=models.CharField(max_length=50, validators=[MinLengthValidator(3)])
    acronyme=models.CharField(max_length=5, validators=[MinLengthValidator(3)])
    credits=models.PositiveIntegerField()

