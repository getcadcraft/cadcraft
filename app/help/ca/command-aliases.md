---
title: Edita els àlies d'ordres
summary: Mantén els teus propis àlies d'ordres en un sol fitxer de text en el format familiar, importa i exporta un fitxer .pgp, i torna'l a carregar amb REINIT.
keywords: àlies, aliases, aliasedit, pgp, drecera, nom curt, reinit, teclat, personalitza, edita àlies
from: 6ab6fa0e
---

## Què aprendràs

Com afegir els teus propis noms curts per a les ordres, per exemple `LL` per a {{cmd:LINE}}, tot en un sol fitxer de text.

## Afegeix un àlies

1. Obre {{ui:Vista}} › {{ui:Més}} › {{ui:Edita àlies…}}, o escriu {{cmd:ALIASEDIT}} i prem {{key:Enter}}.
2. Afegeix una línia amb l'àlies, una coma i l'ordre després d'un asterisc:

```
LL,     *LINE
```

3. Fes clic a {{ui:Desa}}. La línia d'ordres indica quants dels teus àlies estan en ús.
4. Escriu `LL` i prem {{key:Enter}}: LINE s'inicia.

Els teus àlies es posen per sobre dels de CadCraft. Una línia teva guanya a un àlies integrat amb el mateix nom; si elimines la teva línia, l'integrat torna.

## Línies que CadCraft rebutja

L'editor enumera cada problema amb el seu número de línia mentre escrius:

- l'ordre no existeix;
- l'àlies és el nom d'una ordre (`LINE, *CIRCLE` amagaria LINE);
- la línia no és `ALIES, *ORDRE`;
- el mateix àlies és en dues línies (guanya la posterior).

Les línies que inicien un programa del teu ordinador, com `NOTEPAD, START, 1, *File to edit: ,`, s'ignoren amb un avís: una aplicació del navegador no pot iniciar programes.

## Porta els teus àlies des d'un altre programa

1. A l'editor d'àlies, fes clic a {{ui:Importa .pgp…}} i tria el fitxer. També pots deixar anar un fitxer `.pgp` sobre el dibuix.
2. Revisa els problemes enumerats (les ordres que CadCraft no té es rebutgen; la resta funciona).
3. Fes clic a {{ui:Desa}}.

{{ui:Exporta .pgp}} desa els àlies de CadCraft i els teus com un sol fitxer en el mateix format.

## Torna a carregar el fitxer

Escriu {{cmd:REINIT}} i prem {{key:Enter}} per aplicar de nou el teu fitxer d'àlies. Es guarda en aquest navegador; l'aplicació d'escriptori el guardarà a la seva pròpia carpeta, i el servei al núvol el sincronitzarà.

## Dreceres de teclat per a qualsevol ordre

Un àlies s'escriu; una drecera és una tecla. Per donar a una ordre una tecla pròpia:

1. Fes clic a {{ui:Vista}} › {{ui:Més}} › {{ui:Dreceres de teclat…}}, o escriu `KEYS` i prem {{key:Enter}}.
2. Fes clic a la casella {{ui:Tecla}} i prem les tecles, per exemple {{key:Alt+Shift+C}}.
3. A {{ui:Executa}}, escriu l'ordre, i si vols, el que cal escriure després: `CIRCLE`, o `ZOOM E`.
4. Fes clic a {{ui:Afegeix}}.

Una tecla necessita {{key:Mod}} o {{key:Alt}} amb una lletra o un dígit, o una tecla de funció lliure ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Les tecles que ja usen CadCraft, l'aplicació o el navegador, i les que té un botó Les meves eines (consulta [Botons propis](topic:my-tools)), es rebutgen, i la casella n'indica el motiu. Les dreceres es guarden en aquest navegador (o en l'aplicació d'escriptori); {{ui:Elimina}} n'elimina una.
