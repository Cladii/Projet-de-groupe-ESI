from django.http import HttpResponse
from rest_framework import permissions, viewsets

from students.models.students import Students
from students.serializers.students_serializer import StudentsSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentsSerializer
    permission_classes = (permissions.IsAuthenticated,)
