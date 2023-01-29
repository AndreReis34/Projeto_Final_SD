# Projeto_Final_SD
Projeto Final de Sistemas Distribuídos.

## Cliente
A parte do cliente só tem acesso pelo navegador local, baixando o arquivo e rodando localmente.
Só precisa se lembrar de mudar o URL de requisição dependendo se é executado localmente ou online.

## Servidor
O servidor precisa de alguns comandos para rodar localmente.
1. Primeiro entre no prompt e vá para o diretorio Servidor_Back_End, entrando digite os seguintes comandos:
```
sala_virtual\Scripts\Activate
```
2.Depois precisar instalar alguns pacotes:
```
pip install Django
pip install djangorestframework
pip install django-cors-headers 
```
3. Entra na pasta api_servidor e digita:
```
python manage.py runserver
```
e depois e só fazer os teste de comunicação entre o servidor e cliente.

### Vale resaltar que precisa fazer as mudanças na url de destino no cliente na pasta de javascript, Local:"http://127.0.0.1:8000/api" | Online: "https://servidor.andrereis3498.repl.co/api"
### Link para executar o codigo online(onde está hospedado pausa a execução do codigo depois de um tempo): ​https://replit.com/@AndreReis3498/servidor?s=app



