from base.models import Portfolio, Cryptocurrency
from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')

class CryptocurrencySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Cryptocurrency
        fields = ('id', 'user', 'name', 'price')

class PortFolio(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    assets = CryptocurrencySerializer(read_only=True)
    class Meta:
        model = Portfolio
        fields = ('id', 'user', 'assets')
