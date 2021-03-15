from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .api import ue_view

router =DefaultRouter()
router.register('', ue_view.UeViewSet)

urlpatterns=[
    url(r'^', include(router.urls)),
]