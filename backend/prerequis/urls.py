from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .api import prerequis_view

router =DefaultRouter()
router.register('', prerequis_view.PrerequisViewSet)

urlpatterns=[
    url(r'^', include(router.urls)),
]