from django.test import TestCase
from sqlite3 import IntegrityError
from students.models import Student

# Create your tests here.
class StudentModelTest(TestCase):

        def setUp(self):
            self.ueDefault = Student.objects.create(
                number='50000',
                first_name='Lourson',
                last_name='Winnie')

        def test_constructor(self):
            self.assertIs(self.student.number, 3000)
            self.assertIs(self.student.first_name, 'Jeanmichel')
            self.assertIs(self.student.last_name, 'Crapaud')

        

