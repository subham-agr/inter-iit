from django.urls import path

import api.views as views

urlpatterns = [
    path("user_data", views.posts),
    path("student", views.index),
    path('check_reg', views.check_reg),
    path('ps', views.ps),
    path('sign', views.sign),
    path('ps_admin', views.admin),
    path('ps_data', views.ps_data),
    path('check_admin', views.check_admin)
]
