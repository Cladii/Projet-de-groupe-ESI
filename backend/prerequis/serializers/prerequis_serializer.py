from rest_framework import serializers
from prerequis.models.prerequis import Prerequis

class PrerequisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prerequis
        fields=('selected', 'prerequis')