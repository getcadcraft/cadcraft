---
title: Menús, tecles i ratolí
summary: Trieu un estil de menú que encaixi amb la manera en què ja treballeu, doneu a qualsevol ordre la vostra pròpia tecla o una tecla que escriu una ordre, moveu ordres entre pestanyes de la cinta, i definiu què fan la roda i els botons del ratolí.
keywords: estil de menú, menús, cinta, barra d'eines, línia d'ordres, dreceres de teclat, dreceres, tecles, personalitza, reassigna, tecles de text, ratolí, roda, inverteix, direcció del zoom, botó central, botó dret, desplaça, exporta, importa, canvi, familiar, dibuix clàssic
from: 8bbf4f88
---

Les ordres de CadCraft són les mateixes sigui quina sigui la manera d'arribar-hi, i la línia d'ordres hi és sempre amb els seus àlies (`L`, `C`, `TR` …). Un **estil de menú** només decideix on són els botons a la pantalla, com es diuen allà i quines tecles les executen. Trieu-ne un a {{ui:Configuració}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menús, tecles i ratolí}}; el canvi és immediat, i aquest navegador el recorda.

## Els tres estils

| Estil | Què obteniu |
|---|---|
| {{ui:CadCraft}} | La barra d'eines pròpia de CadCraft: Fitxer, Dibuix, Modifica, Anota, Paramètric, Blocs, Fulls, Edita i Vista, cadascun amb un menú {{ui:Més}}. És l'inici. |
| {{ui:Dibuix clàssic}} | Una cinta disposada com la disposen els programes clàssics de dibuix 2D: un menú {{ui:Fitxer}} i botons ràpids, i després les pestanyes {{ui:Inici}} (Dibuix, Modifica, Anotació, Capes, Bloc, Propietats, Utilitats, Porta-retalls), {{ui:Insereix}}, {{ui:Anota}}, {{ui:Paramètric}}, {{ui:Vista}}, {{ui:Gestiona}}, {{ui:Sortida}} i {{ui:3D}}. Escriviu les ordres com sempre. El botó central desplaça; un clic dret és {{key:Enter}}, i arrossegar amb el botó dret no fa res. |
| {{ui:Cinta}} | Una cinta de pestanyes de tasques simples: {{ui:Dibuix}}, {{ui:Modifica}}, {{ui:Anota}}, {{ui:Paramètric}}, {{ui:Blocs}}, {{ui:Fulls}}, {{ui:Vista}}, {{ui:3D}} i {{ui:Eines}}, amb un menú {{ui:Fitxer}} i botons ràpids a la dreta. El botó central i el dret desplacen, com en l'estil propi de CadCraft. |

Cada estil manté les tecles de CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, i {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} per als ajuts de dibuix. Les lletres mai no són tecles: CadCraft les escriu a la línia d'ordres.

Les cintes també contenen les eines del panell {{ui:Capes}} i els ajuts de dibuix de la barra d'estat. La pestanya {{ui:3D}} s'omple quan s'ha obert la pestanya 3D sota el dibuix; una eina 3D triada a la pestanya Model obre primer la pestanya 3D, i una eina 2D triada a la pestanya 3D torna primer a la pestanya Model.

:::tip
Una tecla que pertany al disseny propi de CadCraft però que el vostre estil ha donat a una altra ordre no fa res, i la barra d'estat indica on ha anat la seva ordre ("A Les meves tecles, Orto és Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i les fletxes sempre mantenen el seu significat. Mentre s'executa una ordre, o mentre s'escriuen lletres a la línia d'ordres, les tecles pertanyen a la línia d'ordres.
:::

## Feu-ho vostre

1. Trieu l'estil més proper al que voleu i feu clic a {{ui:Personalitza…}}.
2. A {{ui:Tecles i menús}}, trobeu una ordre (el quadre de cerca ajuda). Feu clic a {{ui:Afegeix una tecla}} i premeu la tecla. Feu clic a una tecla per treure-la.
3. Amb una cinta, {{ui:On es troba}} mou l'ordre a una altra pestanya i panell, al menú {{ui:Fitxer}}, o a {{ui:Només tecles}}.
4. A {{ui:Ratolí}}, definiu la roda i els botons que desplacen el dibuix.
5. Doneu-li un nom i feu clic a {{ui:Desa}}.

Desar un estil integrat en fa una còpia pròpia ("El meu Dibuix clàssic"); l'integrat mai no canvia. Una tecla donada a dues ordres es mostra en vermell i cal corregir-la abans de desar.

## Tecles que escriuen una ordre

{{cmd:SHORTCUTS}} ({{ui:Vista}} › {{ui:Més}} › {{ui:Dreceres de teclat…}}) dóna a una tecla una línia d'ordres sencera, com {{key:Ctrl+Alt+L}} per a `LINE` o {{key:F9}} per a `ZOOM E`. Aquestes tecles pertanyen a l'estil en ús: la primera vegada que s'obre aquesta versió, les tecles que vau fer en una versió anterior es porten al vostre estil propi "Les meves tecles de CadCraft", una sola vegada, i funcionen com abans. Exportar l'estil les porta amb ell.

## Ratolí

- **Roda del ratolí**: {{ui:Desplaçar amunt apropa}} (l'inici) o {{ui:Desplaçar amunt allunya}}, i quant de ràpid. Un pinçament al pad tàctil sempre fa zoom com es mouen els dits.
- **Desplaça el dibuix amb**: el botó central, el botó dret, o tots dos. Un clic dret sense arrossegar és sempre {{key:Enter}}. El botó esquerre sempre tria i dibuixa a CadCraft, de manera que marcar-lo no canvia res aquí.
- **Arrossega a les vistes 3D**: la pestanya 3D manté els seus propis botons en cada estil (l'esquerre orbita, el central i el dret desplacen).

## Porteu-ho amb vosaltres

{{ui:Exporta}} desa l'estil en ús com a petit fitxer `.ccinput.json`; {{ui:Importa…}} n'afegeix un, des d'un altre ordinador o d'un company. Un fitxer importat només pot apuntar a les ordres pròpies de CadCraft: tot el que hi hagi a més queda fora i es compta a la barra d'estat. {{ui:Suprimeix aquest estil}} elimina un dels vostres.

:::note
Aquests paràmetres es queden en aquest navegador. {{ui:Usa aquest estil a totes les aplicacions}} sota les targetes d'estil fa que cada aplicació s'obri amb el seu estil corresponent (la seva barra d'eines, una cinta o Dibuix clàssic), amb els canvis que hi heu fet a cadascuna. CadCraft no té un estil de barra de menús: quan es tria per a totes les aplicacions la barra de menús d'una altra aplicació, CadCraft manté la seva pròpia barra d'eines.
:::

Relacionats: [Teclat i ratolí](topic:keyboard) · [Configuració de CadCraft](topic:settings) · [Si veniu d'altre programari de dibuix](topic:coming-from) · [Àlies d'ordres](topic:command-aliases)
