from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.calc_list, name='list'),
    path('plasterboard', views.board_breakdown, name='plasterboard'),
    path('insulation', views.insulation, name='insulation'),
    path('ceilings', views.ceilings, name='ceilings'),
    path('margin', views.margin, name='margin'),
    path('alternatives', views.alternatives, name='alternatives')
]