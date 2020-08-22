from django import forms
from .models import PlasterboardCoverage, PlasterboardPrice

class PlasterboardPriceInput(forms.ModelForm):

    class Meta:
        model = PlasterboardPrice
        fields = ('boardm2cost', 'boardsize')