from django.shortcuts import render
from base.models import Portfolio
from django.contrib.auth.decorators import login_required


@login_required
def HomeView(request, *args, **kwargs):
    user = request.user
    obj = Portfolio.objects.get(user=user)
    template = "home.html"
    context = {
       'obj' : obj
    }

    return render(request, template, context)