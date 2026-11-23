---
title: Edita els àlies de les ordres
summary: Mantén els teus propis àlies de les ordres en un fitxer de text, en el format habitual; importa i exporta un fitxer .pgp i torna'l a carregar amb REINIT.
keywords: àlies, àlies, aliasedit, pgp, drecera, nom curt, reinit, teclat, personalitza, edita àlies
from: 2282d36f
---

## Què aprendreu

Com afegir els teus propis noms curts per a les ordres, per exemple `LL` per a {{cmd:LINE}}, tot en un sol fitxer de text.

## Afegeix un àlies

1. Obre {{ui:Vista}} › {{ui:Més}} › {{ui:Edita àlies…}}, o escriu {{cmd:ALIASEDIT}} i prem {{key:Enter}}.
2. Afegeix una línia amb l'àlies, una coma i l'ordre després d'un asterisc:

```
LL,     *LINE
```

3. Fes clic a {{ui:Desa}}. La línia d'ordres indica quants dels teus àlies s'estan usant.
4. Escriu `LL` i prem {{key:Enter}}: s'inicia LINE.

Els teus àlies es posen per sobre dels de CadCraft. Una línia teva té prioritat sobre un àlies integrat amb el mateix nom; si l'elimines, torna a funcionar l'integrat.

## Línies que CadCraft rebutja

L'editor enumera cada problema amb el número de línia mentre escrius:

- l'ordre no existeix;
- l'àlies és el nom d'una ordre (`LINE, *CIRCLE` amagaria LINE);
- la línia no és `ALIAS, *COMMAND`;
- el mateix àlies és en dues línies (la darrera té prioritat).

Les línies que inicien un programa de l'ordinador, com `NOTEPAD, START, 1, *File to edit: ,`, s'ometen amb una nota: una aplicació al navegador no pot iniciar programes.

## Porta els teus àlies des d'un altre programa

1. A l'editor d'àlies, fes clic a {{ui:Importa .pgp…}} i tria el fitxer. També pots arrossegar un fitxer `.pgp` sobre el dibuix.
2. Revisa els problemes que es llisten (les ordres que CadCraft no té es rebutgen; la resta funciona).
3. Fes clic a {{ui:Desa}}.

{{ui:Exporta .pgp}} desa els àlies de CadCraft i els teus en un sol fitxer amb el mateix format.

## Torna a carregar el fitxer

Escriu {{cmd:REINIT}} i prem {{key:Enter}} per aplicar de nou el teu fitxer d'àlies. Es guarda en aquest navegador; l'aplicació d'escriptori la guardarà a la seva pròpia carpeta, i el servei al núvol la sincronitzarà.

## Lletres per a les opcions d'una ordre

Un àlies dóna nom a una ordre. Per canviar les lletres que responen a les opcions d'una ordre (`P` per a Polar a {{cmd:ARRAY}}), consulta [Doneu a les opcions de les ordres les vostres pròpies lletres](topic:option-letters).

## Dreceres de teclat per a qualsevol ordre

Un àlies s'escriu; una drecera és una tecla. Per donar a una ordre una tecla pròpia:

1. Fes clic a {{ui:Vista}} › {{ui:Més}} › {{ui:Dreceres de teclat…}}, o escriu `KEYS` i prem {{key:Enter}}.
2. Fes clic a la casella {{ui:Tecla}} i prem les tecles, per exemple {{key:Alt+Shift+C}}.
3. A {{ui:Executa}}, escriu l'ordre i, si vols, el que cal escriure després: `CIRCLE`, o `ZOOM E`.
4. Fes clic a {{ui:Afegeix}}.

Una tecla necessita {{key:Mod}} o {{key:Alt}} amb una lletra o un dígit, o bé una tecla de funció lliure ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Les tecles que ja usen CadCraft, l'aplicació o el navegador, i les que té un botó d'Eines pròpies (vegeu [Botons propis](topic:my-tools)), es rebutgen, i el quadre indica el motiu. Les dreceres es guarden en aquest navegador (o en l'aplicació d'escriptori); {{ui:Elimina (R)}} n'elimina una.
