from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import citySerializer
from .models import city
# import requests
# import json
# import logging

# Create your views here.

class cityView(viewsets.ModelViewSet):
    serializer_class = citySerializer
    queryset = city.objects.all()

# def home(request):
#     response = requests.get('https://re.jrc.ec.europa.eu/api/DRcalc?lat=45&lon=8&month=3&global=1&localtime=1&outputformat=json')
#     geodata = response.json()
#     return render(request, 'saa/home.html', {
#         'lati': geodata['inputs.location.latitude'],
#         'longi': geodata['inputs.location.longitude'],
        
#     })