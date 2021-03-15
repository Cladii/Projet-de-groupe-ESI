from django.http import HttpResponse
from rest_framework import permissions, viewsets

from user.models.user import User
from user.serializers.user_serializer import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)
