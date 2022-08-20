from django.shortcuts import render
from django.http import HttpResponse
import datetime


from urllib import response
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# from rest_framework.permissions import isAuthenticated
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.db.models import Q
from django.utils import timezone
from .models import *
from .serializers import *
from django.contrib.auth.models import User

from django.views.generic import TemplateView, ListView
from rest_framework import generics


def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)

class CategorisView(APIView):
    def get(self, request):
        categoris_obj = Ecom_item_type.objects.all()
        category_serializer = sellItemSerializers(
            categoris_obj, many=True).data
        return Response(category_serializer)
class UnitisView(APIView):
    def get(self, request):
        unit_obj = Products_Unit.objects.all()
        unit_serializer = ProductUnitSerializer(
            unit_obj, many=True).data
        return Response(unit_serializer)

class SubcategorisView(APIView):
    def get(self, request):
        sub_cat_obj = Ecom_Product_Sub_Categories.objects.all()
        unit_serializer = sellsubcategorySerializers(
            sub_cat_obj, many=True).data
        return Response(unit_serializer)


class ProductisView(APIView):
    def get(self, request):
        product_obj = Ecom_Products.objects.all()
        product_serializer = ProductSerializer(
            product_obj, many=True).data
        return Response(product_serializer)


class CreateProductisView(APIView):
    def post(self, request):
        category=request.data['item']
        print(category,'category id name')

        product = Ecom_Products()
        product.product_name=request.data['item']
        product.save()
        # product_serializer = ProductSerializer(
        #     product_obj, many=True).data
        return Response(category)