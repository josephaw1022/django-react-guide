from django.contrib import admin
from django.urls import path

from myapp import views as myapp_views
from rest_framework import routers
from buttons import views
from django.urls.conf import include

router = routers.DefaultRouter()

router.register(r"buttons", views.ButtonView, "buttons")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", myapp_views.index),
    path("api/", include(router.urls))
]
