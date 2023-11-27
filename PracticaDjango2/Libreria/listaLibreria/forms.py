from django import forms
from .models import Libreria

class TaskForm(forms.ModelForm):
    class Meta:
        model = Libreria
        fields = ['title', 'author', 'rating', 'sinopsis']
    
    

    