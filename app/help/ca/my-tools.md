---
title: Botons propis (Les meves eines)
summary: Afegiu botons a la barra d'eines que executen les vostres pròpies macros, assigneu-los tecles d'accés directe, compartiu-los com a fitxer i porteu-hi botons d'un fitxer de personalització CUIx.
keywords: les meves eines, botons personalitzats, botons de la barra d'eines, macro, macros, cui, cuix, personalitza, personalitzar, menú, tecles d'accés directe, dreceres de teclat, diesel, ^c^c, importa botons, exporta botons
from: 36618802
---

## Què aprendreu

Com posar botons propis a la barra d'eines, cadascun executant una macro escrita com les escriu AutoCAD, com donar-li una tecla, i com portar els botons d'un fitxer CUIx.

## Afegiu un botó

1. Obriu {{ui:Configuració}} ({{key:Mod+,}}) i quedeu-vos a la pestanya {{ui:CadCraft}}. Desplaceu-vos fins a {{ui:Les meves eines}}.
2. Feu clic a {{ui:Afegeix un botó…}}.
3. Ompliu el quadre:
   - {{ui:Grup}}: el grup de la barra d'eines on va, per exemple `Les meves eines`. Un nom nou crea un grup nou.
   - {{ui:Etiqueta}}: les paraules del botó.
   - {{ui:Macro}}: el que escriu, per exemple `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tecla d'accés directe}}: feu clic al quadre i premeu les tecles, per exemple {{key:Ctrl+Alt+B}}.
   - {{ui:Icona}}: una imatge PNG o SVG de com a màxim 64 KB, o cap (es mostra una estrella).
4. Feu clic a {{ui:Desa}}.

El botó apareix al final de la barra d'eines, dins del seu grup. Feu-hi clic, o premeu la seva tecla, per executar-lo. {{ui:Edita}} i {{ui:Suprimeix}} a la llista el canvien o el suprimeixen.

## Escriviu una macro

Una macro és el que escriuríeu a la línia d'ordres, amb alguns signes:

| Signe | Vol dir |
|---|---|
| `^C` | Cancel·la el que s'estigui executant (`^C^C` és l'inici habitual) |
| `;` o un espai | {{key:Enter}} |
| `\` | Espera que hi feu alguna cosa: un clic o una resposta escrita, després la macro continua |
| `_` o `.` abans d'una ordre | Acceptat i ignorat (noms internacionals i integrats) |
| `*` al principi de tot | Es torna a executar cada vegada que acaba, fins que premeu {{key:Esc}} |
| `^O`, `^G` | Activa o desactiva Orto i la quadrícula |
| `$M=` | La resta és DIESEL. Només es llegeixen `$(if,…)`, `$(getvar,…)`, `$(=,…)` i `$(eq,…)`; un botó que usa una altra cosa ho indica i no fa res |

Exemples:

- `^C^C_line;0,0;@100,0;;` dibuixa una línia de 100 des de l'origen.
- `^C^C_circle;\25;` us demana el centre, després dibuixa un cercle de radi 25 allà.
- `^C^C_turnright` gira la vista 90° a la dreta.

## Tecles d'accés directe

Una tecla necessita {{key:Mod}} (Ctrl, o Cmd en un Mac) o {{key:Alt}} amb una lletra o un dígit, o una de les tecles de funció lliures {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Les lletres soles van a la línia d'ordres. Les tecles que CadCraft, l'aplicació o el navegador ja fan servir (com {{key:Ctrl+S}} o {{key:Ctrl+Z}}) i les que ja té un altre botó es rebutgen, i el quadre n'explica el motiu.

## Compartiu els vostres botons

- {{ui:Exporta…}} desa tots els grups i botons (amb icones i tecles) com a `my-tools.json`.
- {{ui:Importa…}} afegeix els grups d'un fitxer així després dels vostres. Un nom de grup que ja useu rep «(2)»; una tecla que entraria en conflicte no s'importa, i el tauler ho indica.

## Porteu botons d'un fitxer CUIx

1. Feu clic a {{ui:Importa CUIx…}} i trieu el fitxer `.cuix`.

Les seves barres d'eines i els seus panells de la cinta esdevenen grups, cadascun amb el seu botó, la seva macro i la seva imatge (PNG, o BMP convertit a PNG). Les seves tecles d'accés directe arriben en un grup propi, cadascuna amb el seu botó; els àlies d'ordres que pugui portar arriben en un grup {{ui:Àlies}}. El tauler enumera el que s'ha importat.

:::note
El fitxer només es llegeix. Les ordres que CadCraft no té s'enumeren pel nom, no s'endevinen: els seus botons ho indiquen en fer-hi clic. DIESEL més enllà de les poques funcions de dalt, els menús, els botons del ratolí i els espais de treball no es llegeixen.
:::

## Bones coses a saber

- Els botons es guarden en aquest navegador (o en aquesta aplicació d'escriptori), no als dibuixos.
- Un botó s'executa per la línia d'ordres, així que es desfà com qualsevol cosa que escriviu: un {{key:Mod+Z}} per cada ordre que ha executat.
