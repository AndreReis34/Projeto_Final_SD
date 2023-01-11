from django.shortcuts import render

from data_base.serializers import UsuarioSerializer, ProdutoSerializer
from rest_framework import viewsets, permissions
from data_base.models import Usuario, Produto

class UsuarioViewSet(viewsets.ModelViewSet):
  queryset = Usuario.objects.all()
  serializer_class = UsuarioSerializer

class ProdutoViewSet(viewsets.ModelViewSet):
  queryset = Produto.objects.all()
  serializer_class = ProdutoSerializer