from rest_framework import serializers
from ue.models.ue import UE

class UeSerializer(serializers.ModelSerializer):
    class Meta:
        model= UE
        fields= ('id','libelle','acronyme','credits')

