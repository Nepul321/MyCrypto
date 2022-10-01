from django.db import models
from django.contrib.auth.models import User

class Cryptocurrency(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, default='')
    amount = models.DecimalField(max_digits=9, decimal_places=2)
    price = models.DecimalField(max_digits=9, decimal_places=2)

class Portfolio(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    assets = models.ManyToManyField(Cryptocurrency, related_name="portfolio_assets", blank=True)

