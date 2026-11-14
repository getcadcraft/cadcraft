---
title: Tuyauterie : vannes et symboles P&ID
summary: Placez des vannes, filtres, brides et raccords union sur les tronçons, et posez un jeu de symboles de type P&ID de façon indépendante.
keywords: vanne, opercule, soupape, boisseau, clapet, papillon, tournant, régulation, filtre en Y, bride, union, p&id, schéma, symbole, pompe, soupape de sûreté, instrument, bulle
from: d3ad5259
---

## Vannes sur les tronçons

Tapez {{cmd:VALVE}} et cliquez sur un tronçon de tuyau ; la vanne se place à l'endroit du clic, dimensionnée au tronçon (sur un tronçon à double trait, assez grande pour dépasser du tuyau). {{ui:Nature}} choisit une vanne à opercule, à soupape, à boisseau sphérique, clapet, papillon, à tournant ou de régulation, un filtre en Y, un joint à brides ou un raccord union. {{ui:Supprimer}} retire la plus proche. La ligne du tronçon est interrompue sous chaque vanne, et chaque vanne est comptée dans le tableau par nature et taille.

## Symboles isolés

{{cmd:PIDSYM}} place des symboles schématiques pour un schéma de procédé et d'instrumentation (P&ID) ou un schéma de colonne montante : les vannes ci-dessus, une vanne trois voies, une soupape de sûreté, une réduction, un bouchon, une pompe centrifuge, des bulles d'instrument (montées sur site, ou montées en tableau, la ligne passant au travers) avec leur repère — des lettres suivies du numéro, comme dans `PI 101` — et une flèche de sens d'écoulement. {{ui:Angle}} oriente les symboles suivants. Leur taille se règle dans {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Tuyauterie}}.

Les formes suivent les conventions courantes de ces schémas (ANSI/ISA-5.1 pour les bulles d'instrument, ISO 10628-2 pour les vannes et équipements) ; les dessins sont ceux de CadCraft.
