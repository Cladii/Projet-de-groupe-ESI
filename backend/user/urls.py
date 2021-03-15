from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from .api import user_view

router =DefaultRouter()
router.register('', user_view.UserViewSet)

urlpatterns=[
    url(r'^', include(router.urls))
]