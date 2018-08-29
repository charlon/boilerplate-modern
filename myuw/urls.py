from django.urls import include, path, re_path
from . import views

urlpatterns = [
    # ex: /
    re_path(r'^$', views.home, name='home'),
    path('teaching/', views.teaching, name='teaching'),
    path('accounts/', views.accounts, name='accounts'),
]
