---
title: Primers passos amb CadCraft
summary: Què fa l'aplicació de dibuix CadCraft, on funciona i el vostre primer dibuix, des d'una pantalla en blanc fins a un fitxer desat.
keywords: inici, primer dibuix, nou, obre, desa, anomena i desa, començar, tutorial, introducció, inici ràpid
from: 1a56c575
---

CadCraft és una aplicació de dibuix 2D. Dibuixeu i editeu línies, arcs, polilínies, text, cotes i blocs, prepareu fulls amb caixetins i finestres gràfiques, i els traceu a PDF. Obre dibuixos DWG i DXF i els desa com a DWG o DXF.

Funciona al navegador web. No cal instal·lar res: el lloc us dona l'adreça i tota l'aplicació es carrega a la pàgina. Els dibuixos s'obren des del vostre propi ordinador i es tornen a desar allà. **No es puja res.**

Si ja heu dibuixat abans, llegiu [Venint d'altres programes de dibuix](topic:coming-from) després d'aquesta pàgina. La majoria d'hàbits es mantenen, i els pocs que no es mantenen hi són enumerats.

## Preferiu que us guiï?

Escriviu `TOUR` (o feu clic a {{ui:Feu la guia}} a la targeta d'inici, o bé a {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Torneu a fer la guia}}). Sis passos curts en un quadre sobre el dibuix: dibuixar una línia i un cercle, moure'l, retallar-lo, esborrar alguna cosa i acotar-lo. Cada pas acaba quan el feu, i podeu saltar-vos un pas o tota la guia. S'inicia sola només la primera vegada. El [full de referència ràpida](topic:cheat-sheet) té les 40 ordres que fareu servir més, i el [mapa d'ordres](topic:command-map) totes les ordres que hi ha.

## Què necessiteu

- Un Chrome, Edge, Firefox o Safari recent en un ordinador Mac, Windows o Linux. Vegeu [Navegadors i plataformes](common:browsers).
- Un ratolí amb roda és el més còmode. Un touchpad també funciona; vegeu [Ratolí, touchpad i tàctil](topic:mouse-trackpad-touch).
- Un teclat. CadCraft es controla amb ordres escrites, com la majoria de programes de dibuix.

## La idea en un paràgraf

Escriviu una ordre (o feu clic al seu botó), i la línia d'ordres de baix us fa preguntes una a una: "Especifiqueu el primer punt", "Especifiqueu el següent punt". Responeu a cada pregunta fent clic al dibuix o escrivint un valor, i després premeu {{key:Enter}}. {{key:Esc}} cancel·la. Això és tot el model d'interacció; la resta són detalls.

## El vostre primer dibuix

Dibuixareu un rectangle de 4000 per 3000 fet de línies, hi posareu un cercle al mig, i desareu el fitxer.

1. Obriu CadCraft. La línia d'ordres de baix mostra `Ordre:` i l'àrea de dibuix mostra una targeta curta "Comença a dibuixar".
2. Escriviu `L` i premeu {{key:Enter}}. No cal que feu clic a la línia d'ordres abans: escriure en qualsevol lloc hi va.
3. La petició canvia a `Especifiqueu el primer punt:`. Escriviu `0,0` i premeu {{key:Enter}}.
4. Escriviu `@4000,0` i premeu {{key:Enter}}. Apareix una línia que va cap a la dreta. El `@` vol dir "des de l'últim punt".
5. Escriviu `@0,3000` i premeu {{key:Enter}}.
6. Escriviu `@-4000,0` i premeu {{key:Enter}}.
7. Escriviu `C` i premeu {{key:Enter}}. `C` és l'opció Tanca: l'última línia torna al primer punt i l'ordre acaba.
8. Feu clic a {{ui:Extensió}} al grup Vista de la barra d'eines. El rectangle omple la pantalla.

Ara hauríeu de veure quatre línies que formen un rectangle, i l'historial de sobre la línia d'ordres enumera el que heu escrit.

9. Escriviu `C` i premeu {{key:Enter}} per iniciar l'ordre del cercle.
10. Escriviu `2000,1500` i premeu {{key:Enter}} per al centre.
11. Escriviu `500` i premeu {{key:Enter}} per al radi.

Apareix un cercle al mig del rectangle.

12. Premeu {{key:Mod+S}}, o feu clic a {{ui:Desa}} al grup Fitxer.

El navegador baixa `Drawing1.dwg` a la vostra carpeta de baixades habitual, i l'historial diu que ha desat una còpia com a DWG. Aquest fitxer es torna a obrir a CadCraft, i en la majoria d'altres programes CAD. (Si abans heu triat DXF a {{ui:Anomena i desa}} en aquest navegador, un dibuix nou es desa com a `Drawing1.dxf` en lloc d'això.)

:::tip
Premeu {{key:Enter}} en una línia d'ordres buida per repetir l'última ordre. Premeu {{key:Space}} en lloc d'{{key:Enter}} si ho preferiu: fora del text, fa el mateix.
:::

## Obre un dibuix existent

1. Premeu {{key:Mod+O}}, o feu clic a {{ui:Obre}}.
2. Trieu un fitxer `.dwg` o `.dxf` al selector de fitxers.

També podeu arrossegar un fitxer DWG o DXF des de {{pick:mac=Finder|windows=File Explorer|linux=el gestor de fitxers}} i deixar-lo anar a l'àrea de dibuix. El fitxer es llegeix a la pàgina; mai no surt del vostre ordinador.

Vegeu [Fitxers: què s'obre, què es desa](topic:files) per saber què es conserva i què es converteix.

## Desar: què cal esperar

Desar en un navegador funciona diferent d'un programa d'escriptori:

- {{ui:Desa}} sempre **baixa una còpia nova**. No sobreescriu el fitxer que heu obert. Si ja hi ha un fitxer amb el mateix nom a la vostra carpeta de baixades, el navegador normalment hi afegeix un número, com `Drawing1 (1).dwg`.
- {{ui:Desa}} fa servir el format del dibuix: DWG si heu obert un DWG, DXF si heu obert un DXF. Per triar, premeu {{key:Mod+Shift+S}} o feu clic a {{ui:Anomena i desa}}, i després trieu {{ui:DWG}} (i la seva versió), {{ui:DXF R12}} o {{ui:DXF 2000}}. Vegeu [Desar](topic:files#saving).
- El fitxer que heu obert mai no es modifica.
- Obrir un altre fitxer, o {{ui:Nova}}, el posa en la seva pròpia pestanya sobre el dibuix, de manera que no es tanca res del que teniu obert. Si tanqueu la pestanya d'un dibuix o abandoneu la pàgina amb canvis sense desar, CadCraft pregunta primer: {{ui:Desa una còpia primer}}, descartar o {{ui:Cancel·la}}. Si tanqueu la pestanya del navegador, en canvi, es mostra la pregunta del mateix navegador "Surt del lloc?".

El desament al núvol encara no està disponible. On van els vostres fitxers i per què es mantenen privats s'explica a [Els vostres fitxers i la privadesa](common:your-files).

## On anar després

Premeu {{key:F1}} o feu clic a {{ui:Ajuda}} a la barra de dalt per obrir aquesta ajuda al costat del dibuix en qualsevol moment. Funciona sense connexió.

- [La pantalla de CadCraft](topic:workspace) enumera cada barra i cada panell.
- [Dibuixa amb coordenades](topic:draw-with-coordinates) és el millor primer pas a pas.
- [Teclat i ratolí](topic:keyboard) enumera totes les tecles.
- Escriviu `HELP` a la línia d'ordres per veure una llista de totes les ordres, o llegiu la [Referència d'ordres](topic:commands).
