---
title: Skapa blad automatiskt
summary: Lägg ritningens delar på blad automatiskt: CadCraft väljer ett pappersformat och en standardskala som passar, placerar varje del med en rubrik och skalan under, och allt går fortfarande att redigera.
keywords: blad, layout, layouter, papper, skala, automatisk, AUTOSHEET, ritningshuvud, vyportar, namngivna vyer
from: 7f315dff
---

Välj **Vy › Mer › Skapa blad automatiskt** (eller skriv {{cmd:AUTOSHEET}}). CadCraft hittar delarna i din ritning (dina namngivna vyer, eller de separata grupperna i modellen), väljer ett pappersformat och en standardskala där de ryms, och lägger dem på nya blad med ritningshuvud, en bildtext och skalan under varje.

Innan det körs kan du ändra vad det gör: **Delar** (namngivna vyer, grupper, hela ritningen, eller låt den välja), **Papper** (automatiskt eller ett format som `iso-a1`), **Skala** (en skala för alla, eller varje del med sin egen) och **Blad** (hur många delar som delar på ett blad).

Bladen är vanliga blad: flytta en vyport, ändra dess skala eller ta bort ett blad som vanligt. Tryck {{key:Ctrl+Z}} en gång för att ta tillbaka alla nya blad.

## Nyckelnoter

I {{cmd:AUTOSHEET}} väljer du **Nyckelnoter** för att lägga till en numrerad teckenförklaring under vyerna på varje blad. Den listar lagren som ritats i vyerna, en numrerad rad för varje, som vanlig text som du kan redigera som all annan text. Välj **Fil** för att läsa in din egen nyckelnotlista (ett nummer och dess ord per rad, åtskilda med tabb, kommatecken eller semikolon): ett lager vars namn matchar ett nummer i din lista får dess ord. Ingen nyckelnotlista följer med programmet.
