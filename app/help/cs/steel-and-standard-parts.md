---
title: Vložení ocelových profilů a normalizovaných dílů
summary: Nakreslete ocelové profily, pohledy a 3D prvky z publikovaných tabulek profilů, vložte šrouby, matice, podložky, kolíky, ložiska, pera a ozubená kola podle jejich norem a vypište je do seznamu dílů.
keywords: ocel, profil, průřez, tvar, tvar W, široká příruba, I-nosník, U-profil, úhelník, HSS, trubka, potrubí, IPE, HEA, HEB, UPN, nosník, sloup, prvek, pohled, aisc, en 10365, šroub, matice, podložka, kolík, čep, ložisko, pero, drážka pro pero, ozubené kolo, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, normalizované díly, seznam dílů, kusovník, bom, steelmember, partslist
from: 547c1048
---

Karta {{ui:Standardní}} v knihovně obsahuje dva druhy položek, vytvořené přímo zde z publikovaných tabulek (nic se nestahuje):

- **Ocelové profily**: 1,335 velikostí. W, S, C, L, HSS a Pipe z AISC Shapes Database v16.0; IPE, HEA, HEB a UPN z EN 10365:2017. DetailCraft používá stejnou tabulku.
- **Normalizované díly**: šrouby se šestihrannou hlavou (ISO 4017), šestihranné šrouby (ISO 4014), šestihranné matice (ISO 4032), ploché podložky (ISO 7089), palcové šestihranné šrouby a matice (ASME B18.2.1 a B18.2.2), válcové kolíky (ISO 2338), hluboká drážková kuličková ložiska (ISO 15), rovnoběžná pera (DIN 6885-1) a čelní ozubená kola (moduly z ISO 54).

Vše zde je sdíleno pod licencí CC0: použijte to k čemukoli, uvedení autora není potřeba.

## Vložení ocelového profilu

1. Otevřete knihovnu ({{ui:Knihovna}} ve skupině Bloky, nebo napište `LIB`) a klikněte na kartu {{ui:Standardní}}.
2. V prvním seznamu vyberte rodinu, například {{ui:Profily W}}. Chcete-li zúžit velikosti, napište do vyhledávacího pole, například `W12` ukáže všechny W12.
3. V {{ui:Umístit jako}} zvolte:
   - {{ui:Řez}}: průřez se středem v bodě vložení.
   - {{ui:Kóta výšky}}: prvek pohledem ze strany, dlouhý podle {{ui:Délka (mm)}}, od středu jeho levého konce.
   - {{ui:3D prvek}}: těleso na kartě 3D (níže).
4. Klikněte na {{ui:Umístit}} na kartě velikosti a pak klikněte, kam má jít, jako u každé položky knihovny.

Řez nebo pohled se stane blokem. Jeho atributy nesou velikost, tabulku, odkud pochází, délku (u pohledu) a materiál, který můžete doplnit.

:::note
S profily, C profily a UPN se kreslí s rovnoběžnými přírubami o průměrné tloušťce a úhelníky s pravými rohy: skutečné příruby jsou šikmé a rohy zaoblené. W, IPE, HEA a HEB mají patní zaoblení a HSS rohové poloměry.
:::

## Vytvoření 3D prvku

Zvolte {{ui:3D prvek}} a klikněte na {{ui:Umístit}}, nebo napište {{cmd:STEELMEMBER}} (`SMEMBER`) na řádku příkazů:

1. U `Velikost průřezu` stiskněte {{key:Enter}} pro zobrazenou velikost, nebo napište jinou, například `HSS6x6x1/4` nebo `IPE300`.
2. Klikněte na počáteční bod, pak na koncový bod. Prvek vede mezi nimi a stojí na zemi.
3. Pro sloup napište `C`, klikněte na jeho patu a napište jeho výšku.

Prvek je uzavřené těleso na kartě 3D. Přesuňte nebo zkopírujte jej tam jako každé jiné těleso. {{key:Mod+Z}} jej odstraní.

## Vložení normalizovaného dílu

1. Na kartě {{ui:Standardní}} vyberte rodinu, například {{ui:Šrouby se šestihrannou hlavou}}.
2. U šroubu, šroubu, kolíku nebo pera napište jeho {{ui:Délka (mm)}} (palce u palcových rodin). U ozubeného kola napište {{ui:Zuby}}, {{ui:Šířka čela (mm)}} a {{ui:Vrtání (mm)}}. Ponechte pole prázdné pro obvyklou hodnotu, která je v něm uvedena.
3. Klikněte na {{ui:Umístit}} u velikosti a klikněte, kam má jít.

Šrouby, šrouby a kolíky se kreslí z boku, s nosnou plochou hlavy v bodě vložení; matice, podložky, ložiska a ozubená kola se kreslí čelně; pera shora. Závity se kreslí obvyklým způsobem: kořen tenkou čarou, konec závitu tlustou. Ozubená kola se kreslí jako hlavová, roztečná a patní kružnice, ne zub po zubu.

Blok každého dílu nese jako atributy svůj typ, normu, velikost, délku a materiál a jeho hmotnost z nominálního tvaru z oceli. Materiál změníte v panelu {{ui:Vlastnosti}}.

Stejné díly jsou v knihovně také jako položky a PartCraft je otevírá jako parametrické díly ({{ui:Normalizovaný díl}} ve skupině Soubor).

## Vytvoření seznamu dílů

- V knihovně klikněte na {{ui:Seznam dílů}}: každý normalizovaný díl a ocelový profil ve výkresu, seskupené podle typu, normy, velikosti, délky a materiálu, s množstvím a čísly položek. {{ui:Stáhnout CSV}} jej uloží pro tabulkový procesor.
- Chcete-li jej nakreslit, napište {{cmd:PARTSLIST}} (`PLIST`), klikněte na levý horní roh tabulky a stiskněte {{key:Enter}} pro obvyklou výšku textu, nebo napište jinou.

Seznam se čte z atributů bloků, takže je správný i po uložení výkresu do DWG nebo DXF a jeho novém otevření.

## Časté chyby

- **„Žádný ocelový profil se takto nejmenuje …“**: napište velikost tak, jak ji karta {{ui:Standardní}} uvádí: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Prvek je na kartě 3D, ne v půdorysu.** {{cmd:STEELMEMBER}} vytvoří těleso; otevřete kartu 3D, abyste je viděli. Chcete-li ocel ukázat v půdorysu, vložte také {{ui:Řez}} nebo {{ui:Kóta výšky}}.
- **Délka mimo rozsah.** Šroub musí být delší než jeho hlava a pero delší, než je široké. Čára pod kartami říká, která hodnota byla odmítnuta.
