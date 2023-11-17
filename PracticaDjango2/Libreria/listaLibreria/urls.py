from django.urls import path
from . import views
from .views import Book_description, Book_new, BookList, Book_edit

urlpatterns = [
    path('', BookList.as_view() , name='home'),
    path('<int:pk>', Book_description.as_view(), name='description'),
    path('new', Book_new.as_view(), name='new'),
    path('editar/<int:pk>/', Book_edit.as_view(), name='edit')
]