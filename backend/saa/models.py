from django.db import models

# Create your models here.
class city(models.Model):
    name = models.CharField(max_length=30)
    lat = models.FloatField()
    long = models.FloatField()
def _str_(self):
        return self.name


