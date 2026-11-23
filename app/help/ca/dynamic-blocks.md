---
title: Blocs dinàmics
summary: Què fa CadCraft amb els blocs dinàmics d'un DWG: conserven els seus noms reals, mostren l'estat en què es van desar, canvien l'estat de visibilitat, mostren els seus altres valors i continuen sent dinàmics en desar-los.
keywords: bloc dinàmic, blocs dinàmics, visibilitat, estat de visibilitat, gira, estira, cerca, paràmetres, personalitzat, propietats del bloc, *u blocs, dinàmic
from: dea2ee7c
---

## Què funciona

Un DWG fet amb blocs dinàmics s'obre amb aquestes funcions que hi funcionen:

- **Els seus noms reals.** Un bloc dinàmic apareix al tauler {{ui:Blocs}} amb el seu propi nom («Receptacle», «Sink»), i no com un bloc sense nom `*U`.
- **L'estat en què es van desar.** Cada referència mostra exactament el que mostrava l'altre programa: l'estat de visibilitat en què estava, i estirada o girada tal com es va desar.
- **Canvi de l'estat de visibilitat.** Selecciona una referència (o diverses del mateix bloc), obre {{ui:Propietats}} i, a la secció {{ui:Personalitzat}}, tria un altre estat de la llista {{ui:Visibilitat}}. La referència mostra aquell estat de seguida, i també els seus atributs: els que l'estat amaga desapareixen, i els que mostra apareixen amb els seus valors. Una referència conserva tots els valors, així que no en queda cap de buit; {{ui:Propietats}} enumera els amagats marcats com a «amagat». {{key:Mod+Z}} torna a posar l'estat anterior en un sol pas.
- **Nanses.** Un bloc dinàmic seleccionat mostra les seves pròpies nanses on hi ha els seus paràmetres: un petit triangle per a l'estat de visibilitat (fes-hi clic per veure la llista d'estats), fletxes als extrems d'una distància, una doble fletxa per a un gir. Avui només actua la nansa de visibilitat; les altres ho indiquen a la barra d'estat.
- **Els altres valors, només de lectura.** Sota la llista de visibilitat, {{ui:Personalitzat}} mostra també les distàncies, els angles d'alineació, els estats de gir i els punts del bloc tal com els té el dibuix.
- **Edició dels estats de visibilitat.** Obre el bloc amb {{cmd:BEDIT}}: l'editor mostra un estat, amb el nom a la barra de sobre del dibuix (hi pots triar un altre). Escriu {{cmd:BVSTATE}} per canviar, afegir (amagant-ho tot, mostrant-ho tot o conservant el que es veu), reanomenar o suprimir un estat; {{cmd:BVHIDE}} amaga els objectes seleccionats a l'estat que es veu; {{cmd:BVSHOW}} mostra els amagats en esvaïts perquè puguis fer clic als que vols tornar a fer visibles. Desa el bloc: les referències que tenen un estat reanomenat el conserven amb el nou nom, i les que tenen un estat suprimit mostren el primer estat.
- **Continuen dinàmics.** En desar-los com a DWG en la versió en què va arribar el dibuix, els blocs continuen sent dinàmics, amb l'estat que has triat: l'altre programa els obre com els mateixos blocs dinàmics. Els estats de visibilitat que has editat també es desen: els seus noms nous, els estats que has afegit i què mostra cadascun.

## Què és només de lectura, o encara no hi és

| Encara no hi és | En lloc d'això, avui |
|---|---|
| Canviar distàncies, angles o girs (accions d'estirar, moure, girar) | Es mostren només de lectura a {{ui:Personalitzat}}; edita'ls al programa que ha fet el bloc. |
| Paràmetres de cerca, XY, de gir i polars | Encara no es llegeixen: la referència es mostra tal com es va desar. |
| Arrossegar les nanses de distància, de gir i de punt | Mostren on són els paràmetres; la nansa de visibilitat i la llista {{ui:Visibilitat}} de Propietats canvien els estats. |
| Fer blocs dinàmics del tipus de l'altre programa (estirar, girar, cerca) | Els blocs que fas a CadCraft són blocs normals; {{cmd:BPARAMETER}} ho indica. Els teus propis paràmetres i diversos paràmetres de visibilitat són al gestor de paràmetres (vegeu més avall «Els teus propis paràmetres i estats de visibilitat»). |
| Afegir o esborrar objectes d'un bloc amb estats de visibilitat a l'editor de blocs | El bloc es desa aleshores com a bloc normal (l'editor ho indica en tancar-se). |
| Mantenir-los dinàmics en una altra versió de DWG o en DXF | Es desen com a blocs normals que mostren l'estat triat, i el desament ho indica. |

:::note
Moure o canviar objectes a {{cmd:BEDIT}} manté dinàmic un bloc amb estats de visibilitat. Un bloc sense estats, o un en què s'han afegit o esborrat objectes a l'editor, es converteix en un bloc normal.
:::

## Els teus propis paràmetres i estats de visibilitat

Un bloc que fas a CadCraft pot portar els seus propis paràmetres i **diversos** paràmetres de visibilitat, cadascun amb els seus estats. Escriu {{cmd:BPARAMS}} (o `BPM`) per obrir el **Gestor de paràmetres** del bloc que edites a {{cmd:BEDIT}}, del bloc de la referència seleccionada, o del bloc que indiquis.

- **Paràmetres**: un nom, un tipus (nombre, longitud, angle, recompte, sí/no), i un valor o una fórmula sobre altres paràmetres (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Resulta}} mostra el resultat. Una fórmula que no funciona, o un valor que no encaixa amb el seu tipus (un recompte d'1,5), es rebutja i el gestor n'indica el motiu; no canvia res més.
- **Paràmetres de visibilitat**: {{ui:Afegeix un paràmetre de visibilitat}} en crea un amb un primer estat. Cada estat es pot reanomenar, suprimir (el darrer sempre queda) o assignar-li un número «es mostra quan». Una fórmula tria l'estat a partir dels paràmetres (l'estat el número del qual coincideix, o si no, l'estat en aquell lloc de la llista); sense fórmula, cada referència tria el seu.
- **Posar objectes en un estat**: a l'editor de blocs selecciona els objectes, escriu {{cmd:BPARAMS}} i fes clic a {{ui:Posa aquí els objectes seleccionats}} a l'estat. Els objectes que cap paràmetre de visibilitat no enumera es mostren sempre.
- **Aquesta referència**: iniciat amb una referència seleccionada, el gestor mostra també els valors i els estats propis d'aquella referència.

Fora de l'editor de blocs, cada canvi és un pas de desfer. A l'editor de blocs, els canvis són els de l'editor: {{ui:Desa el bloc}} els conserva. `-BPARAMS` fa el mateix a la línia d'ordres.

**Al fitxer.** El DWG i el DXF conserven els paràmetres, quins objectes hi ha a cada estat i els valors propis de cada referència, en els registres propis de CadCraft; si tornes a obrir el fitxer a CadCraft, tot torna a ser-hi. Un altre programa veu cada referència com el bloc amb tots els seus objectes, ja que un DWG només conté com a màxim un paràmetre de visibilitat per bloc del seu propi tipus. Una referència que un altre programa ha mogut, o un bloc els objectes del qual ha canviat, torna sense les parts que ja no encaixen (no s'endevina res).
