from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from .api import groupe_view

router =DefaultRouter()
router.register('', groupe_view.GroupeViewSet)

urlpatterns=[
    url(r'^', include(router.urls))
]