from django.urls import path,include
from . import views 
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet

router = DefaultRouter()
router.register(r'student',StudentViewSet)

urlpatterns = [
    path("userdata", views.posts, name="auth"),
    path('', include(router.urls)),
    # path("files", views.index, name="files"),
]