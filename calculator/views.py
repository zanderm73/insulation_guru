from django.shortcuts import render, redirect, reverse, get_object_or_404

# Create your views here.
def calc_list(request):
    """ A view to return the calculator list """
    return render(request, 'list.html')

def board_breakdown(request):
    """ Displays board information """
    return render(request, 'board.html')