from django.conf.urls import include, url 
from rest_framework.routers import DefaultRouter
from . import views

from .api import students_view

router = DefaultRouter()
router.register('', students_view.StudentViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^upload', views.create, name='students'),
]
