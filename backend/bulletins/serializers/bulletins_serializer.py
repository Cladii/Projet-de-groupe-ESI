from rest_framework import serializers

from bulletins.models.bulletins import Bulletins

class BulletinsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bulletins
        fields = ('numbers', 'UE', 'acquis')