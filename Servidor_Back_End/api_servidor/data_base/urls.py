from rest_framework.routers import DefaultRouter
from data_base.views import UsuarioViewSet, ProdutoViewSet
from django.urls import include, path


app_name = 'data_base'

router = DefaultRouter(trailing_slash=False)
router.register(r'usuarios', UsuarioViewSet)
router.register(r'produtos', ProdutoViewSet)


urlpatterns = router.urls
