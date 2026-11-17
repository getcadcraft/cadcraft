---
title: Méretszöveg méretének módosítása
summary: Méretszöveg nagyobbá vagy kisebbé tétele, az újonnan készített méretekhez és a rajzon már meglévőkhöz egyaránt.
keywords: méretszöveg mérete, szövegmagasság, dimtxt, dimscale, túl kicsi méretszöveg, túl nagy méretszöveg, nagyobb méretszöveg, jegyzetelési lépték
from: 30e40633
---

## Az ezután készítendő méretekhez

1. Nyomja meg az {{key:Esc}}-et, hogy semmi ne legyen kijelölve: a jobb panel a {{ui:Jelenlegi beállítások}} részt mutatja.
2. Görgessen le a panelen az {{ui:Új méretek}} részig. Írja be a {{ui:Szövegmagasság}} mezőbe a papíron kívánt magasságot (például `2.5` 2,5 mm-hez, vagy `3/32"`), majd nyomja meg az Entert.
3. Állítsa be az {{ui:Általános lépték}} értéket a kinyomtatási léptékre (`50` az 1:50-hez, `48` az 1/4" = 1'-0"-hez): minden méret ezzel szorzódik.

A parancssoron a {{cmd:DIMTXT}} állítja be a magasságot, a {{cmd:DIMSCALE}} pedig az általános léptéket.

## A rajzon már meglévő méretekhez

1. Jelölje ki a méreteket (egyet vagy többet: válassza a {{ui:Méret}} elemet a Tulajdonságok tetején lévő listából).
2. Írja be az új {{ui:Szövegmagasság}} értéket (a {{ui:Szöveg}} részben), vagy új {{ui:Általános lépték}} értéket (a lentebbi {{ui:Illesztés}} részben), majd nyomja meg az Entert.

Azonnal újrarajzolódnak, egy visszavonási lépésben. Más program fájljából származó méretet a CadCraft saját stílusában rajzol újra, amint módosítja.

:::tip
A képernyőn helyesnek, de a kinyomtatott lapon aprónak tűnő szöveg általában azt jelenti, hogy az általános lépték 1: állítsa be a lap léptékére.
:::

Minden beállításért lásd: [Méretezés méretei, tizedesjegyei és léptéke](topic:dimension-settings).
