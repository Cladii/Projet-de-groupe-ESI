from django.http import HttpResponse
from rest_framework import permissions, viewsets
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from groupe.models.groupe import Groupe
from groupe.serializers.groupe_serializer import GroupeSerializer

class GroupeViewSet(viewsets.ModelViewSet):
    queryset= Groupe.objects.all()
    serializer_class= GroupeSerializer
    permission_classes= (permissions.IsAuthenticated,)

