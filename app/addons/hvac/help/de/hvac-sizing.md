---
title: RLT: Kanäle bemessen
summary: Bemessung nach gleicher Reibung aus dem Volumenstrom, die Formeln des Add-ons und ihre Herkunft sowie der Kanalrechner.
keywords: Bemessung, gleiche Reibung, Reibungsrate, Volumenstrom, cfm, Geschwindigkeit, Colebrook, Darcy, Äquivalentdurchmesser, Huebscher, flachoval, ASHRAE, Rechner
from: c739aec8
---

## Gleiche Reibung

Jeder Abschnitt wird auf denselben Druckverlust je Länge bemessen, die Reibungsrate. Stellen Sie die Rate in {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:RLT}} ein: 0.1 in. w.g. per 100 ft oder 0.8 Pa/m als Ausgangswert (eine übliche Ausgangsrate, keine Vorschrift). Geben Sie einem Abschnitt seinen Volumenstrom ({{cmd:DUCT}} › {{ui:Volumenstrom}} oder {{cmd:DUCTSIZE}}), dann:

1. ermittelt das Add-on den runden Durchmesser, der bei diesem Volumenstrom genau diese Rate verliert;
2. rundet es **auf** eine lieferbare Größe auf, damit der Kanal nicht mehr als die Rate verliert: runde Kanäle in 1-in-Schritten bis 10 in, danach in 2-in-Schritten; metrisch 63, 80, 100, 125, 160, 200, 250, 315, 355, 400 mm und weiter;
3. bei einem rechteckigen oder flachovalen Kanal behält es die Höhe, die Sie eingestellt haben (12 in oder 300 mm, sofern Sie sie nicht ändern), und verbreitert ihn in 2-in- oder 50-mm-Schritten, bis sein Äquivalentdurchmesser mindestens dem runden entspricht.

Danach nennt es die Größe, die Geschwindigkeit und die Reibungsrate, die er tatsächlich hat. Ein rechteckiger Kanal mit Seiten über 4 zu 1 wird markiert.

## Die Formeln

Das Verfahren und die Zahlen sind die öffentlich zugänglichen aus dem Kapitel Kanalbemessung des ASHRAE Handbook—Fundamentals (2021):

- Reibungsverlust (Darcy–Weisbach): Δp/L = (f / D) × ρV²/2.
- Der Reibungsbeiwert aus der Colebrook-Gleichung: 1/√f = −2 log₁₀(ε / 3.7D + 2.51 / (Re √f)), iterativ gelöst.
- Normluft: Dichte 1.204 kg/m³ und kinematische Viskosität 1.51 × 10⁻⁵ m²/s (20 °C, Meereshöhe); Re = V × D / ν.
- Rauheit: glatt 0.03 mm (Aluminium, PVC, Edelstahl), mittelglatt 0.09 mm (verzinkter Stahl), mittelrau 0.9 mm (Glasfaser-Kanalplatte), rau 3.0 mm (flexibler Kanal, voll ausgezogen). Wählen Sie das Material in {{ui:Einstellungen}} oder {{ui:Eigenschaften}}.
- Rechteckige Kanäle: der kreisförmige Äquivalentdurchmesser bei gleicher Reibung und gleichem Volumenstrom, Huebscher (1948): De = 1.30 (a × b)^0.625 / (a + b)^0.25.
- Flachovale Kanäle: Heyt und Diaz (1975): De = 1.55 A^0.625 / P^0.25, mit A = πb²/4 + b(a − b) und P = πb + 2(a − b).

Rechenbeispiele, mit denen das Add-on geprüft wird: 1000 cfm in einem runden Kanal von 12 in bewegen sich mit 1273 fpm und verlieren 0.189 in. w.g. per 100 ft; 24 × 12 in entspricht 18.3 in rund; 1000 cfm bei 0.1 in. w.g. per 100 ft benötigen genau 13.66 in, also 14 in rund oder 14 × 12 in rechteckig.

## Der Kanalrechner

{{cmd:DUCTCALC}} fragt nach einem Volumenstrom und einer Reibungsrate und listet den genauen runden Durchmesser auf, dann die lieferbaren runden, rechteckigen und flachovalen Größen mit ihrer Geschwindigkeit und Reibung. Er verändert nichts in der Zeichnung.

## Was die Bemessung nicht leistet

Sie addiert keine Formstückverluste, gleicht keine Abzweige aus und prüft den Ventilator nicht: Sie bemisst jeden Abschnitt für sich nach der Reibungsrate. Prüfen Sie die Geschwindigkeiten gegen die Lärmgrenzwerte Ihres Projekts.
