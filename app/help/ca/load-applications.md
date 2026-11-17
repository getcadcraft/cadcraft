---
title: Carrega aplicacions (APPLOAD)
summary: Carregueu rutines LISP i els seus fitxers de diàleg, descarregueu-les, torneu-les a carregar des de l'historial i deseu les que useu al Conjunt d'inici.
keywords: appload, ap, carrega aplicació, lisp, lsp, dcl, rutina, conjunt d'inici, descarrega, historial, deixa anar, carrega, personalitza, gestiona
from: 89e0ee95
---

## Què aprendreu

Com carregar una rutina LISP (un fitxer `.lsp`) perquè les seves ordres funcionin a CadCraft, com descarregar-la i com fer que es carregui cada vegada que s'inicia CadCraft.

## Carregueu una rutina

1. Obriu {{ui:Vista}} › {{ui:Més}} › {{ui:Carrega l'aplicació…}}, o escriviu {{cmd:APPLOAD}} (o `AP`) i premeu {{key:Enter}}.
2. Feu clic a {{ui:Carrega un fitxer…}} i trieu un o més fitxers `.lsp`. Una rutina que obre un diàleg sol venir amb un fitxer `.dcl`: trieu-lo també.
3. El diàleg diu què ha creat cada fitxer, per exemple "S'ha carregat delblocks.lsp: 1 ordre, DELBLOCKS."
4. Feu clic a {{ui:Tanca (C)}}, escriviu l'ordre de la rutina i premeu {{key:Enter}}.

També podeu deixar anar fitxers `.lsp` i `.dcl` sobre el dibuix, o sobre el diàleg Carrega aplicacions: es carreguen de seguida.

El fitxer es llegeix aquí, al vostre navegador. No es puja res.

:::tip
Premeu {{key:Enter}} en una línia d'ordres buida per tornar a executar l'ordre de la rutina, igual que amb qualsevol altra ordre. Els vostres àlies d'ordre hi poden arribar també: vegeu "Edita els àlies d'ordre".
:::

## Descarregueu una rutina

A {{ui:Carrega aplicacions}}, sota {{ui:Aplicacions carregades}}, feu clic a {{ui:Descarrega}} al costat del fitxer. Les ordres que va crear desapareixen fins que la torneu a carregar.

## Carregueu una rutina cada vegada que s'inicia CadCraft

1. Carregueu la rutina.
2. Sota {{ui:Aplicacions carregades}}, feu clic a {{ui:Afegeix al Conjunt d'inici}} al costat.

Des d'aquí es carrega sola cada vegada que CadCraft s'inicia en aquest navegador. Per aturar-ho, feu clic a {{ui:Elimina (R)}} al costat, sota {{ui:Conjunt d'inici}}.

El Conjunt d'inici guarda una còpia de cada fitxer a l'emmagatzematge d'aquest navegador. Si canvieu la rutina, carregueu el fitxer nou i afegiu-lo de nou.

## Carregueu acad.lsp i acaddoc.lsp d'una carpeta de suport (Studio)

A CadCraft Studio, {{ui:Carpeta de suport}} al diàleg {{ui:Carrega aplicacions}} pren una carpeta del vostre ordinador. Feu clic a {{ui:Tria la carpeta…}}. Quan CadCraft s'inicia, llegeix `acad.lsp` i després `acaddoc.lsp` d'aquesta carpeta (sigui quina sigui la majúscula dels noms), els carrega i després carrega el Conjunt d'inici. `acaddoc.lsp` es torna a llegir cada vegada que s'obre una pestanya de dibuix nova. No es llegeix res més de la carpeta, i un fitxer de més de 2 MB s'omet amb un missatge.

Si un fitxer defineix una funció anomenada `S::STARTUP`, s'executa una vegada després que s'hagin carregat els fitxers (també després del Conjunt d'inici). {{ui:Carrega ara}} fa el mateix a petició; {{ui:Neteja}} oblida la carpeta.

Al navegador una pàgina no pot guardar una carpeta, de manera que no hi ha carpeta de suport: useu el Conjunt d'inici de més amunt. Els fitxers `.fas` i `.vlx` compilats i els programes natius continuen rebutjats.

## Torneu a carregar un fitxer des de l'historial

{{ui:Historial}} llista els fitxers que heu carregat en aquest navegador, dels més recents als més antics. Feu clic a {{ui:Carrega}} al costat d'un per carregar-lo de nou, sense haver-lo de buscar al vostre ordinador.

## Fitxers que CadCraft no pot carregar

| Fitxer | Què és | Què fer |
|---|---|---|
| `.fas`, `.vlx` | LISP compilat o protegit | carregueu el codi font `.lsp` en lloc seu |
| `.arx`, `.crx`, `.dbx` | programes natius de Windows | no hi ha manera d'executar-los a CadCraft |
| `.dvb` | un projecte VBA | no hi ha manera d'executar-los a CadCraft |
| `.craft`, `.lua`, `.py` | scripts de CraftScript | obriu-los a l'espai de treball Script de PartCraft |

El diàleg Carrega aplicacions indica de quin tipus és un fitxer quan el trieu.

## Atureu una rutina

Premeu {{key:Esc}}. En un dels avisos de la rutina, Esc la cancel·la de la manera que la rutina espera (s'executa la seva pròpia neteja). Si està ocupada i no demana res, Esc la para del tot i ho indica; les rutines carregades continuen carregades.

:::note
Tot el que una rutina canvia al dibuix és un sol pas: un sol {{key:Mod+Z}} ho desfà tot.
:::
