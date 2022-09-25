from django.urls import path
from .views import (
    APIBaseView
)

urlpatterns = [
    path('', APIBaseView, name="api-base"),
]
