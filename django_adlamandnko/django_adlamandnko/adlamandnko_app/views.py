from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import AnnotationForm
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, "adlamandnko_app/base.html")

def home(request):
    return render(request, "adlamandnko_app/home.html")

def about_adlam(request):
    return render(request, "adlamandnko_app/about_adlam.html")

def about_nko(request):
    return render(request, "adlamandnko_app/about_nko.html")

@login_required
def annotate(request):
    return render(request, "adlamandnko_app/annotate.html")

@login_required
def annotate(request):
    if request.method == 'POST':
        form = AnnotationForm(request.POST)
        if form.is_valid():
            annotation = form.save(commit=False)
            annotation.user = request.user
            annotation.language = request.POST.get('language')
            annotation.direction = request.POST.get('direction')
            annotation.save()
            messages.success(request, 'Annotation saved successfully!')
            return redirect('profile')
    else:
        form = AnnotationForm()
    return render(request, 'adlamandnko_app/annotate.html', {'form': form})
