# Generated by Django 4.2.7 on 2023-11-16 12:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listaLibreria', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='libreria',
            name='sinopsis',
            field=models.CharField(default=' ', max_length=500),
            preserve_default=False,
        ),
    ]