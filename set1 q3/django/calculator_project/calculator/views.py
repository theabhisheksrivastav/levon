from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from .forms import CustomUserCreationForm, CustomLoginForm
from django.contrib.auth.decorators import login_required

def signup_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('calculator')
    else:
        form = CustomUserCreationForm()
    return render(request, 'calculator/signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = CustomLoginForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('calculator')
    else:
        form = CustomLoginForm()
    return render(request, 'calculator/login.html', {'form': form})

@login_required
def calculator_view(request):
    result = None
    if request.method == 'POST':
        num1 = float(request.POST['num1'])
        num2 = float(request.POST['num2'])
        operator = request.user.operator

        if operator == 'add':
            result = num1 + num2
        elif operator == 'subtract':
            result = num1 - num2
        elif operator == 'multiply':
            result = num1 * num2

    return render(request, 'calculator/calculator.html', {'result': result})

def logout_view(request):
    logout(request)
    return redirect('login')
