from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.calc_list, name='list'),
    path('plasterboard', views.board_breakdown, name='plasterboard')
]