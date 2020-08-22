from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from decimal import Decimal


# Create your models here.
class PlasterboardPrice(models.Model):
    boardm2cost = models.CharField(max_length=100, default='')
    boardsize = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True, default=2.4)

    def __str__(self):
        return self.boardM2Cost


class PlasterboardCoverage(models.Model):
    boardM2Required = models.CharField(max_length=100, default='')
    boardsize = models.ForeignKey(PlasterboardPrice, on_delete=models.CASCADE)

    def __str__(self):
        return self.boardM2Required

