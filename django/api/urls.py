from django.urls import include, path, re_path
from . import views

urlpatterns = [
    # /api/calendar.json
    path('calendar.json', views.calendar_json, name='calendar_json'),
]
