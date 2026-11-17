---
title: Exporter le modèle 3D en USD
summary: Écrire les solides de l'onglet 3D en USD pour les logiciels de rendu et les autres logiciels 3D.
keywords: usd, usda, usdc, usdz, openusd, exporter, 3d, solides, usdout, export3d
from: 68748934
---

Les solides de l'onglet 3D peuvent être écrits en USD.

- Tapez {{cmd:USDOUT}} et choisissez `.usda` (texte), `.usdc` (binaire) ou `.usdz` (un seul fichier de paquet), ou
- tapez {{cmd:EXPORT3D}} et choisissez {{ui:USD}} pour un paquet `.usdz`.

Chaque solide devient un objet unique, ses faces formant un maillage et sa couleur un matériau, en mètres avec Z vers le haut. Un solide utilisé plusieurs fois est écrit une seule fois, et placé à l'endroit de chaque copie.
