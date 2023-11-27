from django.db import models
from django.conf import settings
from django.utils import timezone
from django import forms
# Create your models here.

class Libreria(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=500)
    rating = models.IntegerField()
    sinopsis = models.CharField(max_length=500)
    
    
    def __str__(self):
        return self.title