from django.shortcuts import render
from base.models import Portfolio

def HomeView(request, *args, **kwargs):
    user = request.user
    obj = Portfolio.objects.get(user=user)
    template = "home.html"
    context = {
       'obj' : obj
    }

    return render(request, template, context)