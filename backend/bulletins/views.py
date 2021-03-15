
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from bulletins.models.bulletins import Bulletins
import json

@csrf_exempt
def create (request):
    delete = Bulletins.objects.all()
    delete.delete()
    uploaded_file = request.FILES['file']
    str_text = ''
    for line in uploaded_file:
        str_text = str_text + line.decode()
    data = json.loads(str_text)

    i=0
    while i < len(data['students']):
        j=0
        while j < len(data['students'][i]['bulletin']):
            bulletin = Bulletins.objects.create(numbers=data['students'][i]['numbers'],
                       UE=data['students'][i]['bulletin'][j]['UE'],
                       acquis=data['students'][i]['bulletin'][j]['acquis'])
            j+=1
        i+=1
    return HttpResponse("FINISHED")
