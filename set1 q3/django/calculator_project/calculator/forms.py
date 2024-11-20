from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    operator = forms.ChoiceField(choices=CustomUser.OPERATOR_CHOICES, required=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'password1', 'password2', 'operator']

class CustomLoginForm(AuthenticationForm):
    class Meta:
        model = CustomUser
        fields = ['username', 'password']
