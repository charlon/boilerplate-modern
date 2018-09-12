from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.http import JsonResponse
import requests
import ujson


def calendar_json(request):

    # query the trumba seattle sea_acad calendar json
    # https://www.trumba.com/calendars/sea_acad-cal.json
    url = 'https://www.trumba.com/calendars/sea_acad-cal.json'
    req = requests.get(url)
    events = req.json()

    return JsonResponse(events, safe=False)
