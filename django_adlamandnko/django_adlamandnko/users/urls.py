from django.urls import path
from django.contrib.auth import views as auth_views
from .views import register, profile, custom_logout

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html', success_url='users/profile/'), name='login'),
    path('logout/', custom_logout, name='logout'), 
    path('profile/', profile, name='profile')
]
