from django.test import TestCase
from ue.models.ue import UE
from sqlite3 import IntegrityError
from django.core.exceptions import FieldError, ValidationError

class UeTest(TestCase):

    def setUp(self):
        self.ueDefault = UE.objects.create(
           libelle='Projet',
           acronyme='PRJ',
           credits='5')

    def test_constructor(self):
        self.assertIs(self.ueDefault.libelle, 'Projet')
        self.assertIs(self.ueDefault.acronyme, 'PRJ')
        self.assertIs(self.ueDefault.credits, '5')
