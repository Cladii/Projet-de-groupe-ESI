from django.test import TestCase
from groupe.models.groupe import Groupe
from sqlite3 import IntegrityError
from django.core.exceptions import FieldError, ValidationError

class GroupeTest(TestCase):

    def setUp(self):
        self.GroupeDefault = Groupe.objects.create(
           nom='E11',
           bloc=3)

    def test_constructor(self):
        self.assertIs(self.GroupeDefault.nom, 'E11')
        self.assertIs(self.GroupeDefault.bloc, 3)
