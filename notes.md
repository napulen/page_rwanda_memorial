# NOTES ABOUT INTERACTING WITH MONGO

For listing all entries in the database

```
cd [project home]
mongo

use memorial

db.victimes.find().pretty()
```

To insert some default data via terminal

```
db.victimes.insert([{"Prénom de la personne que soumet le formulaire":"Jean-Paul","Nom de la personne que soumet le formulaire":"Nyilinkwaya","Email address soumeter":"","Relation avec la victime":"Fils","Prénom de la victime":"Stanislas","Nom de la victime":"Nyilinkwaya","Nom et prénom du père de la victime":"Joseph","Nom du pere de la victime":"Ruvili","Prénom de la mere de la victime":"","Nom de la mere de la victime":"Nyirandaruhutse","Date de naissance de la victime":"1939-09-27","Date de décès de la victime":"1994-04-07","Lieu de naissance de la victime":"Gishoma, Cyangugu","Lieu de résidence de la victime":"Rugenge, Nyarugenge, Kigali","Lieu de décès de la victime":"Rugenge, Nyarugenge, Kigali","Profession et lieu de travail":"Fonctionnaire de l'État","Témoignage sur la victime":"Blah blah blah blahhhhjhhhhhhhhhhhhhhhhhhğ","Circonstances de décès":"Fusillé"},{"Prénom de la personne que soumet le formulaire":"Jacques","Nom de la personne que soumet le formulaire":"Rwirangira","Email address soumeter":"","Relation avec la victime":"Neveu","Prénom de la victime":"Alexis","Nom de la victime":"Rwigamba","Nom et prénom du père de la victime":"Thadeo","Nom du pere de la victime":"??? Manque Nom","Prénom de la mere de la victime":"Verena","Nom de la mere de la victime":"Kalisana","Date de naissance de la victime":"1954-04-27","Date de décès de la victime":"1994-04-27","Lieu de naissance de la victime":"Ruhengeri/Nyamugari","Lieu de résidence de la victime":"Kigali / Rugunga","Lieu de décès de la victime":"Inconnu","Profession et lieu de travail":"Electrogaz","Témoignage sur la victime":"","Circonstances de décès":"Inconnu"},{"Prénom de la personne que soumet le formulaire":"verene","Nom de la personne que soumet le formulaire":"bamuhongayire","Email address soumeter":"verene@hotmail.com","Relation avec la victime":"frère","Prénom de la victime":"Charles","Nom de la victime":"Abimana","Nom et prénom du père de la victime":"Benoit","Nom du pere de la victime":"Nteziryayo","Prénom de la mere de la victime":"Domitille","Nom de la mere de la victime":"Mukarutabana","Date de naissance de la victime":"1973-11-04","Date de décès de la victime":"1973-11-04","Lieu de naissance de la victime":"Nyanza","Lieu de résidence de la victime":"Nyanza","Lieu de décès de la victime":"Ngoma","Profession et lieu de travail":"Étudiant Butare","Témoignage sur la victime":"C'était un garçon brillant: cultivé, intelligent; il était discret et aimait le karaté.\nIl me manque à chaque jour!","Circonstances de décès":"Inconnu"}])
```

```
db.victimes.insert({"Prénom de la personne que soumet le formulaire":"Jean-Paul","Nom de la personne que soumet le formulaire":"Nyilinkwaya","Email address soumeter":"","Relation avec la victime":"Fils","Prénom de la victime":"Stanislas","Nom de la victime":"Nyilinkwaya","Nom et prénom du père de la victime":"Joseph","Nom du pere de la victime":"Ruvili","Prénom de la mere de la victime":"","Nom de la mere de la victime":"Nyirandaruhutse","Date de naissance de la victime":"1939-09-27","Date de décès de la victime":"1994-04-07","Lieu de naissance de la victime":"Gishoma, Cyangugu","Lieu de résidence de la victime":"Rugenge, Nyarugenge, Kigali","Lieu de décès de la victime":"Rugenge, Nyarugenge, Kigali","Profession et lieu de travail":"Fonctionnaire de l'État","Témoignage sur la victime":"Blah blah blah blahhhhjhhhhhhhhhhhhhhhhhhğ","Circonstances de décès":"Fusillé"})
```


- To find some data:

```
db.victimes.find( { "Prénom de la personne que soumet le formulaire" : "Jean-Paul" } )```

To delete everything in the collection

```
db.victimes.remove ({})```
