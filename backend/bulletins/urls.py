from django.conf.urls import include, url 
from rest_framework.routers import DefaultRouter
from . import views

from .api import bulletins_view

router = DefaultRouter()
router.register('', bulletins_view.BulletinsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^upload', views.create, name='bulletins'),
]
