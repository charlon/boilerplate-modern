from django.urls import include, path, re_path
from . import views
from boilerplate.views import IndexTemplateView

urlpatterns = [
    # ex: /
    re_path(r'^$', IndexTemplateView.as_view(), {"template_name": "boilerplate/index.html"}),
]
