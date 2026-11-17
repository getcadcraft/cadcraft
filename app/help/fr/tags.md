---
title: "Étiquettes : attributs alimentant les nomenclatures"
summary: Définissez une étiquette (son type, les valeurs admises, les blocs concernés), affectez-la aux références de blocs, puis listez les références sous forme de nomenclature enregistrable en CSV.
keywords: étiquettes, étiquette, attribut, nomenclature, extraction de données, propriété, résistance au feu, liste de choix, référence de bloc, TAGS, csv
from: 9b90bacc
---

Une **étiquette** est un attribut de bloc accompagné d'une définition : le type de valeur qu'il contient, les valeurs autorisées et les blocs auxquels il s'applique. Les valeurs sont des attributs de bloc ordinaires : tout autre programme les lit, et {{cmd:ATTEDIT}} les affiche. Seules les définitions sont nouvelles, et elles sont conservées dans le dessin.

## Définir et affecter

Saisissez {{cmd:TAGS}} et choisissez :

- {{ui:Définir}} : un nom (lettres, chiffres, espace, `_ . -`), un type (`text`, `number`, `integer`, `yesno`, `length`, `angle`), les valeurs admises séparées par `;` (laissez vide pour toute valeur), et les noms de blocs concernés (`DOOR*` correspond à chaque bloc commençant par DOOR ; vide signifie tous les blocs).
- {{ui:Jeu}} : avec des références de blocs sélectionnées, saisissez `FireRating=60 min; Width=850`. Une valeur hors de la liste admise, ou une valeur non numérique pour une étiquette numérique, est refusée et signalée. Une seule étape d'annulation. Un bloc qui ne possède pas l'attribut le reçoit sous forme d'attribut masqué.
- {{ui:Nomenclature}} : toutes les références à un bloc auquel s'applique une étiquette, éventuellement regroupées par étiquette ou par nom de bloc, imprimées et enregistrées en CSV.
- {{ui:Retirer}} : oublie une définition ; les valeurs restent sur les références.

Renommer une étiquette renomme ses valeurs sur chaque référence. Les noms d'étiquettes ne sont pas sensibles à la casse, pas plus que les noms d'attributs.
