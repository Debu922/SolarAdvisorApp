from django.contrib import admin
from .models import city

class cityAdmin(admin.ModelAdmin):
    list_display = ('name', 'lat', 'long')

# Register your models here.

admin.site.register(city, cityAdmin)