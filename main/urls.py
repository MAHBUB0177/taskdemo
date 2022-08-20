from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
   path('admin/', admin.site.urls),
#    path('account/',include('account.urls')),
   path('api/', include('sell.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
#     urlpatterns += [
#         re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
#     ]

# if not settings.DEBUG:
#     urlpatterns += [
#         re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
#     ]