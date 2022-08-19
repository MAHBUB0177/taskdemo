from django.db import models

# Create your models here.


class Products_Unit(models.Model):
    unit_id = models.CharField(max_length=20, blank=True, primary_key=True)
    unit_name = models.CharField(max_length=200, null=False)
    is_active = models.BooleanField(blank=True, default=True)
    is_deleted = models.BooleanField(blank=True, default=False)
    app_user_id = models.CharField(max_length=20, null=False)
    app_data_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.unit_name)

class Ecom_item_type(models.Model):
    categories_id = models.CharField(
        max_length=20,  blank=True, primary_key=True)
    categories_name = models.CharField(max_length=200, null=False)
    app_user_id = models.CharField(max_length=20, null=True, blank=True)
    app_data_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.categories_name


class Ecom_Product_Sub_Categories(models.Model):
    categories_id = models.ForeignKey(Ecom_item_type, on_delete=models.PROTECT,
                                      related_name='sub_categories_id', db_column='categories_id', blank=True, null=True)
    subcategories_id = models.CharField(
        max_length=20,  blank=True, primary_key=True)
    subcategories_name = models.CharField(max_length=200, null=False)
    app_user_id = models.CharField(max_length=20, null=True, blank=True)
    app_data_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.subcategories_name



class Ecom_Products(models.Model):
    
    product_id = models.CharField(
        max_length=20, null=False, blank=True, primary_key=True)
    category_id = models.ForeignKey(Ecom_item_type, on_delete=models.PROTECT,
                                    related_name='product_category', db_column='category_id')
    unit_id=models.ForeignKey(Products_Unit, on_delete=models.PROTECT,
                                    related_name='product_unit', db_column='unit_id')
    sub_category_id = models.ForeignKey(Ecom_Product_Sub_Categories, on_delete=models.PROTECT,
                                        related_name='sub_product_category', db_column='sub_category_id')

    product_name = models.CharField(max_length=200)
    product_model = models.CharField(max_length=200, blank=True, null=True)
    product_group = models.CharField(max_length=200, blank=True, null=True)
    product_price = models.DecimalField(
        max_digits=22, decimal_places=2, default=0.00, blank=True, null=True)
    discount_amount = models.DecimalField(
        max_digits=22, decimal_places=2, default=0.00, blank=True, null=True)
    product_old_price = models.DecimalField(
        max_digits=22, decimal_places=2, default=0.00, blank=True, null=True)
    product_feature = models.CharField(max_length=500, blank=True, null=True)
    #product_specification=models.JSONField(blank=True, null=True)
    product_specification = models.CharField(
        max_length=1000, blank=True, null=True)
    product_keyword = models.CharField(max_length=400, blank=True, null=True)
    product_viewcount = models.IntegerField(blank=True, null=True)
    app_user_id = models.CharField(max_length=20, null=True, blank=True)
    app_data_time = models.DateTimeField(auto_now_add=True)