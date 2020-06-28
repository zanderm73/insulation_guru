from django.shortcuts import render, redirect, reverse, get_object_or_404

# Create your views here.
def calc_list(request):
    """ A view to return the calculator list """
    return render(request, 'list.html')

def board_breakdown(request):
    """ Displays board information """
    return render(request, 'board.html')

def insulation(request):
    """ Displays insulation information """
    return render(request, 'insulation.html')

def ceilings(request):
    """ Displays ceiling information """
    return render(request, 'ceilings.html')

def margin(request):
    """ Displays margin calculators """
    return render(request, 'margin.html')

def alternatives(request):
    """ Displays product alternatives """
    return render(request, 'alternatives.html')