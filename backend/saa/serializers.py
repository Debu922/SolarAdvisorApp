from rest_framework import serializers
from .models import city

class citySerializer(serializers.ModelSerializer):
    class Meta:
        model = city
        fields = ('id','name', 'lat', 'long')