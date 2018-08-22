from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.http import JsonResponse

def index(request):
    template = loader.get_template('boilerplate/index.html')
    context = {
        'hello': "sandbox",
    }
    return HttpResponse(template.render(context, request))
