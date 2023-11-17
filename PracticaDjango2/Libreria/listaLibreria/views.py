from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from django.views import View
from .forms import TaskForm
from .models import Libreria

# Create your views here.

class BookList(View):
    nombre_template = 'home.html'
    
    
    def actualizaBook(self):
        books = Libreria.objects.all()
        return books
    
    def get(self, request):
        books = self.actualizaBook()
        form = TaskForm()
        return render(request, self.nombre_template, {'books': books, 'form': TaskForm()})
    
    
class Book_description(View):
    template_description = 'description.html'
    
    def get(self, request, pk):
        books_ = get_object_or_404(Libreria, pk=pk)
        return render(request, self.template_description, {'books': books_})
    
class Book_edit(View):
    template_description = 'editar.html'
    
    def get(self, request, pk):
        books_ = get_object_or_404(Libreria, pk=pk)
        return render(request, self.template_description, {'books': books_})    
    
    
class Book_new(View):
    template_new = 'new.html'
    
    def get(self, request):
        form = TaskForm()
        book_object_instance = BookList()
        books = book_object_instance.actualizaBook()
        return render(request, self.template_new, {'books': books, 'form': form})
    
    def post(self, request):
        form = TaskForm(request.POST)
        if form.is_valid():
            author = form.cleaned_data['author']
            title = form.cleaned_data['title']
            rating = form.cleaned_data['rating']
            sinopsis = form.cleaned_data['sinopsis']
            
            Libreria.objects.create(author=author, title=title, rating=rating, sinopsis=sinopsis)
            return redirect('home')
        
        book_object_instance = BookList()
        books = book_object_instance.actualizaBook()
        return render(request, self.template_description, {'books': books, 'form': form})  