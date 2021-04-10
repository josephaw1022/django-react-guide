from django.db import models

# Create your models here.


class Button(models.Model):
    count = models.IntegerField()

    def _str_(self):
        return self.count
