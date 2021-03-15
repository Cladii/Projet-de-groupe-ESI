from django.http import HttpResponse
from rest_framework import permissions, viewsets
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from prerequis.models.prerequis import Prerequis
from prerequis.serializers.prerequis_serializer import  PrerequisSerializer

class PrerequisViewSet(viewsets.ModelViewSet):
    queryset = Prerequis.objects.all()
    serializer_class = PrerequisSerializer
    permission_classes= (permissions.IsAuthenticated,)