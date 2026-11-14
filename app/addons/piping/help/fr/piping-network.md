---
title: Tuyauterie : débit et pression dans une alimentation en eau
summary: PIPENET suit les tuyaux d'alimentation dessinés depuis la source, additionne les unités d'appareil que vous indiquez à chaque extrémité libre, et calcule le débit, la vitesse et la perte de pression jusqu'à chaque appareil.
keywords: alimentation, eau, unités d'appareil, demande, débit, vitesse, perte de pression, hazen-williams, PIPENET, PNET, pression statique, chaud, froid
from: ece38a8e
---

Tapez {{cmd:PIPENET}} (`PNET`) puis cliquez sur l'extrémité d'un tronçon par laquelle arrive l'alimentation.

Pour chaque extrémité libre, il demande ce qui s'y trouve : un type d'appareil (`wc`, `lav`, `sink`, `shower`, `laundry`, `bath`, `dishwasher`) ou un nombre d'unités d'appareil (0 pour rien). Les réponses sont mémorisées pour cet emplacement ; {{ui:Réinitialiser les appareils}} les oublie. {{ui:Pression}} définit la pression d'alimentation à la source et la pression requise par un appareil, en kPa.

Il affiche, pour chaque appareil, les unités d'appareil qu'il porte, la pression perdue depuis la source (frottement selon Hazen–Williams, raccords, et montée ou descente de la conduite : une conduite qui descend dans le sens où elle est dessinée gagne de la pression lorsqu'elle est alimentée par son extrémité basse) et la pression restante de l'alimentation. Les tronçons trop petits pour leur débit (vitesse trop élevée) sont listés.

**Demande** utilise une courbe par défaut, qui relie les unités d'appareil au débit, et qui sert d'exemple signalé comme tel. Saisissez la courbe du code en vigueur dans les paramètres du moteur avant de vous fier aux débits. Les pertes dans les raccords sont des valeurs par défaut arrondies. Les boucles sont ignorées. Vérifiez les résultats avec votre ingénieur. {{ui:Exporter}} › Réseau d'alimentation écrit chaque tronçon dans un fichier CSV.
