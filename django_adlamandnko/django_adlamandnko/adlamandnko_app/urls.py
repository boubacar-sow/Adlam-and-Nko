from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("about_adlam/", views.about_adlam, name="about_adlam"),
    path("about_nko/", views.about_nko, name="about_nko"),
    path("annotate/", views.annotate, name="annotate")
]