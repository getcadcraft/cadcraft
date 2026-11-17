---
title: Esbossar amb un llapis i obtenir una geometria precisa
summary: Dibuixar a mà alçada amb un llapis, ratolí o dit, i cada traç es converteix en una línia, cercle, arc, rectangle o polilínia nets en aixecar el llapis, ajustats al que ja està dibuixat, amb la mida a punt per escriure-hi a sobre.
keywords: esbós, llapis, llapis òptic, a mà alçada, dit, netejar, precís, ajust a referències, SKETCHLIVE, SKETCHFIX, mida, escriure a sobre
from: cd87eb75
---

Inicieu {{cmd:SKETCHLIVE}} (o trieu **Dibuix › Més › Esbossar amb un llapis**) i dibuixeu un traç prement i arrossegant. En aixecar el llapis, CadCraft interpreta el que volíeu i ho posa al dibuix:

| El vostre traç | Què obteniu |
|---|---|
| Gairebé recte | Una línia. Una línia gairebé horitzontal o vertical es fa exactament horitzontal o vertical. |
| Tancat i rodó | Un cercle |
| Part d'una forma rodona | Un arc |
| Tancat amb quatre cantonades en angle recte | Un rectangle |
| Qualsevol altra cosa | Una polilínia amb costats quadrats |

Els extrems d'un traç s'estiren fins a l'extrem més proper del que ja està dibuixat, de manera que un mur esbossat s'uneix al mur del costat.

## Escriure a sobre la mida

Després de cada traç, la línia d'ordres mostra la seva mida (la **longitud** d'una línia, el **radi** d'un cercle o d'un arc, l'**amplada** d'un rectangle) com a valor per defecte. Premeu {{key:Enter}} per mantenir-la, o escriviu un nombre o una longitud com `12'6"` per substituir-la. Una línia conserva el seu primer extrem, un cercle el seu centre i un rectangle la seva primera cantonada.

Premeu {{key:Enter}} en una línia d'ordres buida per acabar, o escriviu `U` per desfer l'últim traç. Tota la sessió és un sol pas de desfer.

## Netejar diversos traços alhora

{{cmd:SKETCHFIX}} recull traços i els fa tots precisos en premer {{key:Enter}}, cosa que va bé per a un plànol aproximat dibuixat ràpidament.

:::note
Tot es calcula al vostre ordinador mitjançant regles, sense cap model i sense enviar res enlloc.
:::
