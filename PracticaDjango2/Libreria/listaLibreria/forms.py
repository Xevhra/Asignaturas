from django import forms

class TaskForm(forms.Form):
    title = forms.CharField(label="title", max_length=100)
    author = forms.CharField(label="author")
    rating = forms.IntegerField()
    sinopsis = forms.CharField(label = "sinopsis")
    