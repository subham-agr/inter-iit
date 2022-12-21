from django.urls import path,include
from . import views 
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet

# router = DefaultRouter()
# router.register(r'student',StudentViewSet)
# router = DefaultRouter()
# router.register(r'student',StudentViewSet)

urlpatterns = [
    path("userdata", views.posts, name="auth"),
    # path('', include(router.urls)),
    path("student", views.index),
    path('check_reg',views.check_reg),
    path('ps',views.ps),
    path('sign',views.sign),
    path('ps_admin',views.admin)
    # path('', include(router.urls)),
    # path("files", views.index, name="files"),
]