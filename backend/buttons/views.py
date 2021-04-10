from django.shortcuts import render
from rest_framework import viewsets
from .models import Button
from .serializers import ButtonSerializer

# Create your views here.


class ButtonView(viewsets.ModelViewSet):

    serializer_class = ButtonSerializer
    queryset = Button.objects.all()
