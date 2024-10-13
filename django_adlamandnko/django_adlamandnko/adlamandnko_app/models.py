from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Annotation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    language = models.CharField(max_length=10)
    direction = models.CharField(max_length=20)
    original_text = models.TextField()
    latin_text = models.TextField(blank=True, null=True)
    translated_text = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.user.username} - {self.language} - {self.direction}'
