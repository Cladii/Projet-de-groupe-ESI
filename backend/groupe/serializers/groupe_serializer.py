from rest_framework import serializers
from groupe.models.groupe import Groupe

class GroupeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Groupe
        fields=('nom', 'bloc')
