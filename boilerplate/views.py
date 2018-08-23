from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.generic.base import TemplateView, TemplateResponse


class IndexTemplateView(TemplateView):
    build_path = 'boilerplate/index.html'

    def get_context_data(self, **kwargs):
        self.template_name = kwargs['template_name']
        context = {}
        return context
