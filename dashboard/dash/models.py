from django.db import models

from django.contrib.auth.models import User

class Dashboards(models.Model):
    raw = models.TextField(default='[]')
    user = models.ForeignKey(User, unique=True)
