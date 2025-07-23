from django.urls import path
from . import views

app_name = 'bible_study'

urlpatterns = [
    path('', views.biblestudy_view, name="biblestudy"),
    path('ask-gpt/', views.ask_gpt_view, name="ask_gpt"),
]
