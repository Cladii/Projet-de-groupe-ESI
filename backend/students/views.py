from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from students.models.students import Students
import json

@csrf_exempt
def create (request):
    if (request.method == "POST"):
        delete = Students.objects.all();
        delete.delete()
        uploaded_file = request.FILES['file']
        str_text = ''
        for line in uploaded_file:
            str_text = str_text + line.decode()
        res = json.loads(str_text)
        for student_data in res['students']:
            student = Students.objects.create(**student_data)
    return HttpResponse("FINISHED")
