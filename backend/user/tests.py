from django.test import TestCase
from user.models.user import User
from sqlite3 import IntegrityError
from django.core.exceptions import FieldError, ValidationError

class UserTest(TestCase) :
    def setUp(self):
        self.userDefault = User.objects.create(password="admin", isDirector=True, isStaff=True, username="admin")
    
    def test_constructor(self):
        self.assertIs(self.userDefault.username, "admin")
        self.assertIs(self.userDefault.isDirector, True)
        self.assertIs(self.userDefault.isStaff, True)
        self.assertIs(self.userDefault.password, "admin")

        
