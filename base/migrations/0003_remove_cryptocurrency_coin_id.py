# Generated by Django 4.1.1 on 2022-09-25 18:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_cryptocurrency_coin_id_cryptocurrency_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cryptocurrency',
            name='coin_id',
        ),
    ]
