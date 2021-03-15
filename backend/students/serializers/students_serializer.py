from rest_framework import serializers

from students.models.students import Students

class StudentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Students
        fields = ('number', 'first_name', 'last_name')