from django.contrib import admin
from django.urls import path, include
from students.models.students import Students

urlpatterns = [
    path('students/', include('students.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('ue/',include('ue.urls')),
    path('user/', include('user.urls')),
    path('groupe/', include('groupe.urls')),
    path('bulletins/', include('bulletins.urls')),
    path('prerequis/', include('prerequis.urls')),
]
