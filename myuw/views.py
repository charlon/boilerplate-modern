from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.http import JsonResponse
import requests
import ujson

def home(request):
    template = loader.get_template('myuw/home.html')
    context = {
        'hello': "sandbox",
    }
    return HttpResponse(template.render(context, request))


def teaching(request):
    template = loader.get_template('myuw/teaching.html')
    context = {
        'hello': "react demo",
    }
    return HttpResponse(template.render(context, request))


def accounts(request):
    template = loader.get_template('myuw/accounts.html')
    context = {
        'hello': "vue demo",
    }
    return HttpResponse(template.render(context, request))


def calendar_json(request):

    # query the trumba seattle sea_acad calendar json
    # https://www.trumba.com/calendars/sea_acad-cal.json
    url = 'https://www.trumba.com/calendars/sea_acad-cal.json'
    req = requests.get(url)
    events = req.json()

    return JsonResponse(events, safe=False)
