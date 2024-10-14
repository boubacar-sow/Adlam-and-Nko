from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UserRegisterForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout, login



def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()  # Save the new user
            login(request, user)
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')

            return redirect('profile')
    else:
        form = UserRegisterForm()
    
    return render(request, 'users/register.html', {'form': form})

@login_required
def profile(request):
    return render(request, 'users/profile.html')

@login_required  # Only allow access to logged-in users
def custom_logout(request):
    logout(request)
    return redirect('home')