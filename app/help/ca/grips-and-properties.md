---
title: Edita amb nanses i Propietats
summary: Estira, mou i redimensiona objectes per les seves nanses, i escriu longituds, radis, angles i coordenades exactes al tauler Propietats.
keywords: nanses, propietats, estira, longitud, radi, coordenades, edita, propietats ràpides, paleta de propietats, canvia, capa, color
from: f22541ba
---

## Què aprendreu

Dues maneres ràpides de canviar un objecte sense cap ordre: arrossegar-ne les **nanses**, o escriure valors nous al tauler **Propietats** de la dreta.

## Nanses

Quan seleccioneu objectes (fins a 200 alhora) sense cap ordre en curs, hi apareixen petits quadrats. Són les nanses:

| Objecte | Nanses |
|---|---|
| Línia | Els dos extrems i el centre (mou tota la línia) |
| Cercle | El centre (el mou) i quatre punts de la circumferència (canvien el radi) |
| Arc | El centre i els dos extrems (canvien on comença i on acaba) |
| Polilínia | Cada vèrtex |
| Text, punt, referència de bloc | El punt d'inserció |
| El·lipse | El centre |
| Cota | Els seus punts de definició i la posició de la línia de cota |
| Finestra gràfica | El centre (la mou) i els quatre cantons (la redimensionen) |

### Mou una nansa

1. Dibuixeu una línia i feu-hi clic. Hi apareixen tres nanses.
2. Feu clic a la nansa d'un extrem. La barra d'estat diu: "Feu clic on ha d'anar aquesta nansa (Esc per cancel·lar). Les referències a objectes i l'orto s'hi apliquen."
3. Mogueu el punt de mira. Una vista prèvia us segueix.
4. Feu clic a la nova posició, o agafeu un punt d'un altre objecte i feu-hi clic.

L'extrem es mou i la resta de la línia es queda on és. També podeu prémer una nansa i arrossegar-la, i després deixar-la anar on ha d'anar.

:::note
No podeu escriure una coordenada per a una nansa. Per a una posició exacta, useu una referència a un punt, o escriviu el valor al tauler Propietats.
:::

Premeu {{key:Esc}} o feu clic dret per cancel·lar un desplaçament de nansa.

## Propietats

El tauler de la dreta mostra les propietats del que hi ha seleccionat.

1. Feu clic a una línia. La capçalera del tauler diu "Línia".
2. Feu clic al camp {{ui:Longitud}}, escriviu `2500` i premeu {{key:Enter}}.

La línia ara fa exactament 2500 de llargada, i manté el punt inicial i l'angle. {{key:Enter}} o fer clic en un altre lloc aplica un valor; {{key:Esc}} hi torna a posar el valor antic. Cada canvi és un sol pas de desfer, també quan canvien molts objectes alhora.

Els camps admeten expressions (`=2*45`) i longituds amb unitats (`3'6"`, `900mm`); cada punt té X, Y i Z, i es poden canviar diversos objectes junts. Tot això és a [El tauler Propietats](topic:properties-panel).

## Errors habituals

- **No apareixen nanses.** Hi ha una ordre en curs (premeu {{key:Esc}}), o hi ha més de 200 objectes seleccionats, o l'objecte és en una capa bloquejada.
- **La nansa ha anat a un lloc incorrecte.** Una referència l'ha agafada. Manteniu premut {{key:Shift}} mentre feu clic per ignorar les referències.
- **Escriure al tauler Propietats no ha fet res.** Premeu {{key:Enter}} o feu clic en un altre lloc per aplicar-ho. Una entrada no admesa (longituds o radis zero o negatius, text que no és un valor) torna vermell el camp i diu per què.
- **Les lletres escrites han anat a un camp del tauler Propietats.** Mentre un camp té el cursor, les tecles s'escriuen allà. Premeu {{key:Enter}} o {{key:Esc}}, i després escriviu l'ordre.
