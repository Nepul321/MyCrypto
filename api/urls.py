from django.urls import path
from .views import (
    APIBaseView,
    PortfolioView
)

urlpatterns = [
    path('', APIBaseView, name="api-base"),
    path('portfolios/<int:id>/', PortfolioView, name="api-portfolio-view")
]
