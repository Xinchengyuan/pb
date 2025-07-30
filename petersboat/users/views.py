from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
from .models import SiteVisit

# Create your views here.
def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            login(request,form.save())
            visit = SiteVisit.objects.get_or_create(id=1)[0]
            visit.count += 1
            visit.save()
            return redirect("bible_study:biblestudy")
    else:
        form = UserCreationForm()
    return render(request, 'users/register.html', {"form":form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            login(request, form.get_user())
            visit = SiteVisit.objects.get_or_create(id=1)[0]
            visit.count += 1
            visit.save()

            if "next" in request.POST:
                return redirect(request.POST.get('next'))
            else:
                return redirect("bible_study:biblestudy")
    else:
        form = AuthenticationForm()
    return render(request, 'users/login.html', {"form":form})

def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return redirect("home")