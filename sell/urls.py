from django.contrib import admin
from django.urls import path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),
#     path('',current_datetime),
    path('categoris/', CategorisView.as_view()),
    path('product-unit/', UnitisView.as_view()),
    path('product-subcategories/', SubcategorisView.as_view()),
    path('products/', ProductisView.as_view()),
    path('createproducts/', CreateProductisView.as_view()),
    path('updateproducts/', UpdateProductisView.as_view()),
]