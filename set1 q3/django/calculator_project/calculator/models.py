from django.db import models
from django.contrib.auth.models import AbstractUser

# Custom User Model
class CustomUser(AbstractUser):
    OPERATOR_CHOICES = [
        ('add', 'Addition'),
        ('subtract', 'Subtraction'),
        ('multiply', 'Multiplication'),
    ]
    operator = models.CharField(max_length=10, choices=OPERATOR_CHOICES)
