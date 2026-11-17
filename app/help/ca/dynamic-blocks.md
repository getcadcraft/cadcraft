---
title: Blocs dinàmics
summary: Què fa CadCraft amb els blocs dinàmics d'un DWG: mantenen els seus noms reals, mostren l'estat en què es van desar, canvien d'estat de visibilitat, mostren els altres valors i continuen sent dinàmics en desar-se.
keywords: bloc dinàmic, blocs dinàmics, visibilitat, estat de visibilitat, inverteix, estira, cerca, paràmetres, personalitzat, propietats del bloc, *u blocs, dinàmic
from: 26b6aa80
---

## Què funciona

Un DWG fet amb blocs dinàmics s'obre amb ells funcionant fins aquí:

- **Els seus noms reals.** Un bloc dinàmic apareix al tauler {{ui:Blocs}} amb el seu propi nom ("Receptacle", "Sink"), i no com un bloc `*U` sense nom.
- **L'estat en què es van desar.** Cada referència mostra exactament el que mostrava l'altre programa: l'estat de visibilitat en què estava, estirada o invertida tal com es va desar.
- **Canvi d'estat de visibilitat.** Seleccioneu una referència (o diverses del mateix bloc), obriu {{ui:Propietats}}, i a la secció {{ui:Personalitzat}} trieu un altre estat de la llista {{ui:Visibilitat}}. La referència mostra aquell estat de seguida, i també els seus atributs: els que l'estat amaga desapareixen, els que mostra apareixen amb els seus valors. Una referència conserva tots els valors, de manera que res no torna buit; {{ui:Propietats}} enumera els ocults marcats com a "amagat". {{key:Mod+Z}} torna a posar l'estat anterior en un sol pas.
- **Nanses.** Un bloc dinàmic seleccionat mostra les seves pròpies nanses on hi ha els seus paràmetres: un petit triangle per a l'estat de visibilitat (feu-hi clic per veure la llista d'estats), fletxes als extrems d'una distància, una doble fletxa per a una inversió. Avui només actua la nansa de visibilitat; les altres ho indiquen a la barra d'estat.
- **Els altres valors, només de lectura.** Sota la llista de visibilitat, {{ui:Personalitzat}} mostra també les distàncies, els angles d'alineació, els estats d'inversió i els punts del bloc tal com els té el dibuix.
- **Edició dels estats de visibilitat.** Obriu el bloc amb {{cmd:BEDIT}}: l'editor mostra un estat, indicat a la barra sobre el dibuix (en trieu un altre allà). Escriviu {{cmd:BVSTATE}} per canviar, afegir (amagant-ho tot, mostrant-ho tot o conservant el que es mostra), reanomenar o suprimir un estat; {{cmd:BVHIDE}} amaga els objectes seleccionats en l'estat que es mostra; {{cmd:BVSHOW}} mostra els ocults esvaïts perquè pugueu fer clic als que voleu recuperar. Deseu el bloc: les referències que apuntaven a un estat reanomenat el mantenen amb el nou nom, i les que apuntaven a un estat suprimit mostren el primer estat.
- **Continuen dinàmics.** Desats com a DWG en la versió amb què ha arribat el dibuix, els blocs continuen dinàmics, amb l'estat que heu triat: l'altre programa els obre com els mateixos blocs dinàmics. També es desen els estats de visibilitat que heu editat: els seus noms nous, els estats que heu afegit i el que mostra cadascun.

## Què és només de lectura o encara no hi és

| Encara no hi és | En lloc d'això, avui |
|---|---|
| Canviar distàncies, angles o inversions (accions d'estirar, moure, invertir) | Es mostren només de lectura a {{ui:Personalitzat}}; editeu-les al programa que ha fet el bloc. |
| Paràmetres de cerca, XY, rotació i polars | Encara no es llegeixen: la referència es mostra tal com es va desar. |
| Arrossegar les nanses de distància, d'inversió i de punt | Mostren on són els paràmetres; la nansa de visibilitat i la llista {{ui:Visibilitat}} de Propietats canvien d'estat. |
| Crear blocs dinàmics (afegir paràmetres, o estats de visibilitat a un bloc que no en té) | Els blocs que feu a CadCraft són blocs simples; {{cmd:BPARAMETER}} ho indica. |
| Afegir o esborrar objectes d'un bloc amb estats de visibilitat a l'editor de blocs | Aleshores el bloc es desa com a bloc simple (l'editor ho indica en tancar-se). |
| Mantenir-los dinàmics en una altra versió de DWG o en DXF | Es desen com a blocs simples que mostren l'estat que heu triat, i el desament ho indica. |

:::note
Moure o canviar objectes a {{cmd:BEDIT}} manté dinàmic un bloc amb estats de visibilitat. Un bloc sense estats, o un en què s'han afegit o esborrat objectes a l'editor, es converteix en un bloc simple.
:::
