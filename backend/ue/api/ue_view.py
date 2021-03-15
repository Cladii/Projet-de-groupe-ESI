from django.http import HttpResponse
from rest_framework import permissions, viewsets
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from ue.models.ue import UE
from ue.serializers.ue_serializer import UeSerializer

class UeViewSet(viewsets.ModelViewSet):
    queryset= UE.objects.all()
    serializer_class= UeSerializer
    permission_classes= (permissions.IsAuthenticated,)
