from django.contrib import admin

# Register your models here.
from .models import Profile, RidePosting

admin.site.register(Profile)
admin.site.register(RidePosting)
