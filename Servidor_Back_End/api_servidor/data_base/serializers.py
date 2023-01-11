from rest_framework import serializers
from data_base.models import Usuario, Produto


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = [
            'nome',
            'senha',
            'cep',
            'cpf',
            'pergunta',
            'resposta',
        ]
    
class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = [
            'vendedor',
            'categoria',
            'nome',
            'preco',
            'marca',
            'modelo',
            'descricao',
        ]