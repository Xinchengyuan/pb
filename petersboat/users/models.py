from django.db import models

# Create your models here.
class SiteVisit(models.Model):
    count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"Visits: {self.count}"