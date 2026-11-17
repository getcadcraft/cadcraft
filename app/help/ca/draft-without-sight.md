---
title: Dibuixa sense veure
summary: Activeu l'Accés i CadCraft diu cada ordre i resultat a través del lector de pantalla, descriu el dibuix i el que hi ha prop del cursor, us deixa moure el cursor amb el teclat, reprodueix un so per a cada referència a objectes i cada nansa, i accepta ordres per veu quan el navegador ho pot fer en el vostre ordinador.
keywords: accessibilitat, lector de pantalla, cec, baixa visió, NVDA, VoiceOver, JAWS, Orca, cursor de teclat, ordres per veu, parla, sons, sons de referència, descriu el dibuix, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Accés** us permet dibuixar sense veure la pantalla. Està desactivat fins que l'activeu, perquè ningú no l'obtingui per accident.

## Activa-ho

Obriu **Configuració** (la roda dentada, o Ctrl+,), trobeu **Dibuix sense veure** i trieu **Activa**. O escriviu `ACCESS` a la línia d'ordres i respongueu `On`. Es recorda en aquest ordinador.

Mentre l'Accés estigui activat:

- **Tot el que diu la línia d'ordres es llegeix** a través del lector de pantalla: el que heu escrit, la indicació que demana, la resposta i cada error. CadCraft fa servir les seves pròpies regions en directe, educades i urgents, de manera que un lector de pantalla que llegeix regions en directe no necessita configuració. Els errors i les cancel·lacions interrompen; la resta espera el seu torn.
- **La zona de dibuix és accessible.** Premeu Tab fins que sentiu "Dibuix", o premeu Shift+Tab des de la línia d'ordres. És una regió que passa les tecles a CadCraft.

## Tecles al dibuix

| Tecla | Què fa |
|---|---|
| Tecles de fletxa | Mouen el cursor del teclat. Un pas és aproximadament la centèssima part del que mostra la pantalla, arrodonit a 1, 2 o 5. Shift el mou deu vegades més lluny, i Ctrl una desena part. |
| Enter | Escull el punt sota el cursor, exactament com ho faria un clic. |
| Espai | Prem Enter a la línia d'ordres: acaba LINE, accepta el valor per defecte. |
| Tab, Shift+Tab | Salta a la referència a objectes següent o anterior prop del cursor, la més propera primer. |
| G | Recorre les nanses dels objectes seleccionats. |
| D | Descriu el dibuix: quants objectes hi ha, de quin tipus, de quina mida, què està seleccionat. |
| W | Diu on és el cursor i a quina distància es troba de l'últim punt. |
| N | Diu què hi ha prop del cursor, el més proper primer, amb la distància i el costat. |
| S | Descriu els objectes seleccionats. |
| R | Repeteix l'última cosa. |
| V | Activa o desactiva la veu. |
| / | Va a la línia d'ordres. |
| ? | Enumera aquestes tecles. |

Quan us moveu amb les tecles, diu on heu arribat. Quan una ordre espera un punt, també diu a quina distància i en quina direcció esteu de l'últim punt, per exemple "2400 des de l'últim punt, cap a la dreta, a 0 graus".

## Ordres

- {{cmd:ACCESS}} activa o desactiva l'Accés, els sons de referència i la veu, i diu l'estat.
- {{cmd:DESCRIBE}} diu què conté el dibuix.
- {{cmd:WHEREAMI}} diu on és el cursor.
- {{cmd:NEARBY}} diu què hi ha prop del cursor.
- {{cmd:SAYSEL}} diu què està seleccionat, una frase per objecte.
- {{cmd:VOICE}} activa o desactiva les ordres parlades.

Aquestes cinc ordres llegeixen el dibuix i donen una resposta; no canvien res.

## Sons per a referències a objectes i nanses

Activeu **Sons de referència i nanses** a Configuració. Cada tipus de referència té el seu to i so propi, de manera que podeu distingir un punt final d'un punt mitjà, un centre, una intersecció i la resta, i una nansa té un doble toc. El so es desplaça cap a l'esquerra o cap a la dreta per seguir el cursor per la pantalla. Els sons es generen al vostre ordinador; no es descarrega res.

## Ordres per veu

Activeu **Ordres per veu** a Configuració. Digueu el nom d'una ordre ("line", "circle", "move"), i després digueu els números tal com els llegiríeu: "punt tres-cents coma quatre-cents", "distància dos-cents", "angle quaranta-cinc". "Enter", "cancel·la", "desfés" i "refés" fan el que diuen. Es repeteix en veu alta el que s'ha sentit, i una frase que no és una ordre s'informa, no s'endevina.

**On es reconeix la veu.** CadCraft no té un servei de veu propi i no envia àudio enlloc. Demana al navegador que reconegui la veu en aquest ordinador. Si el navegador ho pot fer, l'opció és **En aquest ordinador** i cap àudio en surt. Si no ho pot fer, la veu queda desactivada tret que trieu **Servei en línia del navegador**, que permet al navegador enviar l'àudio al servei de veu del seu fabricant. Configuració indica quin cas s'aplica abans que decidiu.

## Què encara no fa

- Només CadCraft té Accés. Les altres set aplicacions el seguiran, amb les mateixes tecles i sons.
- El text d'un dibuix (una nota, el nom d'un bloc) es llegeix tal com està escrit; mai no es pren com una instrucció.
- S'ha provat amb comprovacions sintètiques i les proves del navegador; les comprovacions manuals amb NVDA, VoiceOver i una persona cega o amb baixa visió encara estan pendents. Si ho proveu, digueu-nos què falta.
