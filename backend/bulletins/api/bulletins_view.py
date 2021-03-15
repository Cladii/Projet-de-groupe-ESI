from django.http import HttpResponse
from rest_framework import permissions, viewsets

from bulletins.models.bulletins import Bulletins
from bulletins.serializers.bulletins_serializer import BulletinsSerializer

class BulletinsViewSet(viewsets.ModelViewSet):
    queryset = Bulletins.objects.all()
    serializer_class = BulletinsSerializer
    permission_classes = (permissions.IsAuthenticated,)
