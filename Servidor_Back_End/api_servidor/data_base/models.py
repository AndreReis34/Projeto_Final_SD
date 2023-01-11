from django.db import models

# Create your models here.
class Usuario(models.Model):
    nome = models.CharField(max_length=50, null=False, blank=False)
    senha = models.PositiveIntegerField(null=False, blank=False)
    cep = models.CharField(max_length=9, null=False, blank=False)
    cpf = models.CharField(max_length=14, null= False, blank=False)
    pergunta = models.CharField(max_length=50, null=False, blank=False)
    resposta = models.CharField(max_length=20, null=False, blank=False)
    
    
class Produto(models.Model):
    CATEGORIAS = [
        ('quarto', 'Quarto'), ('cozinha', 'Cozinha'),
        ('banheiro', 'Banheiro'), ('sala', 'Sala'),
   ]
    
    vendedor = models.ForeignKey('Usuario', on_delete=models.CASCADE)
    categoria = models.CharField(max_length=30, null=False, blank=False, choices=CATEGORIAS, default='Quarto')
    nome = models.CharField(max_length=50, null=False, blank=False)
    preco = models.DecimalField(null=False, blank=False, max_digits=5, decimal_places=2)
    marca = models.CharField(null=False, blank=False, max_length=20)
    modelo = models.CharField(null=False, blank=False, max_length=20)
    descricao = models.TextField(max_length=1000)