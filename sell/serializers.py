from dataclasses import field
from pyexpat import model
from urllib import request, response
from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ecom_Products
        fields = "__all__"
        depth=1


class ProductUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products_Unit
        fields = "__all__"


class sellItemSerializers(serializers.ModelSerializer):
    class Meta:
        model = Ecom_item_type
        fields = "__all__"


class sellsubcategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Ecom_Product_Sub_Categories
        fields = "__all__"