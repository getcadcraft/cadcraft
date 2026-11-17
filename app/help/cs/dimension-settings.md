---
title: Nastavení velikostí kót, desetinných míst a měřítka
summary: Zvolte výšku textu, velikost šipek, desetinná místa a celkové měřítko pro nové kóty, změňte existující a pochopte, jak v CadCraftu fungují styly kót.
keywords: styl kóty, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, celkové měřítko, desetinná místa, velikost šipky, měřítko anotace, dimtextunit, jednotky v textu, mm, cm, m, km, milimetry, metry, dimlfac, dimpost
from: 8ec82a07
---

## Co se naučíte

Jak velký je text a šipky kót, jak je nastavit pro výkres vykreslený v měřítku 1:50 nebo 1:100, a jak změnit kóty, které už jste vytvořili.

## Jak fungují velikosti kót

Každá kóta nese vlastní sadu velikostí: výška textu, velikost šipky, desetinná místa, mezera kolem textu, jak daleko pomocné čáry přesahují kótovací čáru a jak daleko začínají od objektu. Výchozí hodnoty se blíží běžnému stylu ISO:

| Nastavení | Výchozí | Příkaz |
|---|---|---|
| Výška textu | 2.5 | {{cmd:DIMTXT}} |
| Velikost šipky | 2.5 | {{cmd:DIMASZ}} |
| Desetinná místa | 2 (koncové nuly se vynechají) | {{cmd:DIMDEC}} |
| Mezera kolem textu | 0.625 | {{cmd:DIMGAP}} |
| Přesah pomocné čáry za kótovací čáru | 1.25 | {{cmd:DIMEXE}} |
| Odsazení od objektu | 0.625 | {{cmd:DIMEXO}} |
| Celkové měřítko | 1 | {{cmd:DIMSCALE}} |

Každá velikost se násobí **celkovým měřítkem**. Nastavte velikosti tak, jak je chcete na papíře (text 2.5 mm), a celkové měřítko na měřítko vykreslení (50 pro 1:50). Text je pak vysoký 2.5 × 50 = 125 jednotek výkresu, což se vykreslí na 2.5 mm.

:::note
Pojmenované styly kót se spravují pomocí {{cmd:DIMSTYLE}}: viz sekce níže. Každá kóta si také ponechá nastavení, se kterým vznikla, takže můžete jednu kótu změnit samostatně v {{ui:Vlastnosti}}.
:::

## Nastavení velikostí nových kót

Obě níže uvedené cesty mění jen kóty, které vytvoříte potom.

### V panelu Aktuální nastavení

1. Stiskněte {{key:Esc}}, aby nic nebylo vybráno. Na kartě {{ui:Model}} pravý panel ukazuje {{ui:Aktuální nastavení}}.
2. Posuňte panel dolů k {{ui:Nové kóty}}, za řádky vrstvy, barvy, jednotek a {{ui:Vrstva 0}} (na malé obrazovce začíná pod spodním okrajem). Klikněte do {{ui:Celkové měřítko}}, napište `50` a stiskněte {{key:Enter}}.
3. Stejným způsobem nastavte {{ui:Výška textu}}, {{ui:Velikost šipky}} a {{ui:Desetinná místa}}, pokud chcete jiné hodnoty.

Stavový řádek potvrdí každou z nich, například "Celkové měřítko pro nové kóty: 50".

### U příkazového řádku

1. Napište `DIMSCALE` a stiskněte {{key:Enter}}.
2. U výzvy `Enter new value for DIMSCALE <1>` napište `50` a stiskněte {{key:Enter}}.

Historie potvrdí "DIMSCALE = 50. Nové kóty jej použijí; chcete-li změnit existující, vyberte je." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} a {{cmd:DIMEXO}} fungují stejně. Na výzvě stiskněte {{key:Enter}}, chcete-li zachovat aktuální hodnotu.

### Stopy a palce v kótách

Nové kóty používají formát délek výkresu: nastavte ho pomocí {{ui:Formát délek}} v {{ui:Aktuální nastavení}} nebo {{cmd:UNITS}} (viz [Stopy a palce](topic:units-papers-scales#feet-and-inches-and-fractions)), a další kóta přečte `12'-6 1/2"`. {{cmd:DIMLUNIT}} nastaví jen formát kót (2 desetinná, 3 inženýrský, 4 stavební, 5 zlomkový). U kóty, kterou jste už vytvořili, ji vyberte a zvolte {{ui:Formát}} v {{ui:Vlastnosti}}; u zlomkového formátu pole {{ui:Zlomek}} udává mocninu dvou (4 = 1/16).

## Kóty v mm, cm, m nebo km

Kóta měří v jednotkách výkresu. Tu délku může místo toho zapsat v milimetrech, centimetrech, metrech nebo kilometrech, s jednotkou za číslem: stěna 1250 mm se přečte `1250 mm`, `125 cm`, `1.25 m` nebo `0.00125 km`.

1. Nejprve nastavte {{ui:Jednotky}} výkresu v {{ui:Aktuální nastavení}} (viz [Jednotky, formáty papíru a měřítka](topic:units-papers-scales#drawing-units)), aby CadCraft věděl, co je jedna jednotka výkresu. Výkres bez jednotek se čte jako milimetry a {{cmd:DIMTEXTUNIT}} to oznámí.
2. U nových kót: stiskněte {{key:Esc}}, aby nic nebylo vybráno, a pod {{ui:Nové kóty}} zvolte {{ui:Jednotky v textu}}: {{ui:Jednotky výkresu}}, `mm`, `cm`, `m` nebo `km`.
3. U kót, které jste už vytvořili: vyberte je a v {{ui:Vlastnosti}} › {{ui:Hlavní jednotky}} zvolte {{ui:Jednotky v textu}}.

Nebo napište {{cmd:DIMTEXTUNIT}} (`DTU`) a odpovězte `D`, `MM`, `CM`, `M` nebo `KM`: při vybraných kótách je změní (jeden krok zpět), při nevybraném nic nastaví nové kóty.

{{ui:Desetinná místa}} ({{cmd:DIMDEC}}) pořád určuje, kolik desetinných míst se zobrazí: u metrů s 3 desetinnými místy se 1234 mm přečte `1.234 m`. Text je zapsán jako desetinné číslo. Na listu se kóty měří v papírové jednotce listu (milimetry nebo palce).

Uložený DWG nebo DXF si volbu uchová jako měřítko měření kóty (DIMLFAC) a příponu (DIMPOST, ` m`), aby ji ostatní programy zobrazily stejně. Změníte-li později {{ui:Jednotky}} výkresu, kóty zapsané v mm, cm, m nebo km se přepočítají, takže dál udávají správnou délku. {{ui:Nastaveno ručně (měřítko nebo přípona)}} znamená, že {{ui:Měřítko měření}} nebo přípona kóty byly nastaveny jiným způsobem; zvolte jednotku, abyste je nahradili.

## Změna kót, které jste už vytvořili

1. Klikněte na jednu kótu. Nadpis pravého panelu zní {{ui:Kóta}}.
2. Nastavení jsou v sekcích; posuňte panel dolů k dalším:
   - {{ui:Obecné}}: {{ui:Styl kóty}}
   - {{ui:Geometrie}}: {{ui:Druh}} a {{ui:Měření}} (jen pro čtení)
   - {{ui:Text}}: {{ui:Přepsání textu}} a {{ui:Výška textu}}
   - {{ui:Čáry a šipky}}: {{ui:Velikost šipky}}
   - {{ui:Umístění}}: {{ui:Celkové měřítko}}
   - {{ui:Hlavní jednotky}}: {{ui:Desetinná místa}}
3. Napište novou hodnotu a stiskněte {{key:Enter}}.

Kóta se hned překreslí. U úhlových kót nastaví {{ui:Desetinná místa (°)}} desetinná místa úhlu.

:::note
Je-li vybráno více kót, panel ukazuje řádky, které mají společné, a hodnota, která se mezi nimi liší, se ukáže jako {{ui:Proměnné}}. Hodnota, kterou napíšete, změní každou vybranou kótu v jednom kroku, takže jedno {{key:Mod+Z}} je vrátí všechny zpět.
:::

## Kóty z otevřených výkresů

Kóta z otevřeného DWG nebo DXF se zobrazí přesně tak, jak ji nakreslil jiný program. Její panel říká "Zobrazeno tak, jak ji nakreslil program, který ji vytvořil. Změňte ji a CadCraft ji nakreslí znovu ve svém stylu." Jakmile změníte jakoukoli hodnotu, přesunete úchyt, nebo přesunete kótu, CadCraft ji překreslí se svými šipkami a písmem, s velikostmi, které přečetl ze souboru.

Některé kóty lze jen přečíst tak, jak byly nakresleny, ne jako upravitelné kóty; panel pak ukazuje "Nakresleno z" a název bloku, a pole "O tomto souboru" je počítá.

## Časté chyby

- **Změna DIMSCALE na obrazovce nic nezměnila.** Nastavení platí pro nové kóty. Vyberte existující a změňte {{ui:Celkové měřítko}} v panelu.
- **Desetinná místa ukazují méně číslic, než je nastaveno.** Koncové nuly se vynechají: 2 desetinná místa ukážou `1250` a `1250.5`, ne `1250.00`.
- **Text má správnou výšku na papíře ve výřezu, ale špatnou při tisku modelu.** Celkové měřítko musí odpovídat měřítku, ve kterém tisknete. Tisk na Přizpůsobit papíru dá zvláštní měřítko; v dialogu tisku zvolte standardní měřítko.
- **Jednotky jako mm nebo m v textu.** Zvolte {{ui:Jednotky v textu}} (viz [Kóty v mm, cm, m nebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Pro jakékoli jiné slovo za číslem ho napište do přepsání: `<> TYP.`.

## Pojmenované styly kót

Napište `DIMSTYLE` (`D`), otevřete {{ui:Správce stylů kót}}. Vypisuje styly výkresu, kolik kót každý používá, a který je aktuální. **Standard** tam vždy je.

- {{ui:Nastavit aktuální}}: nové kóty použijí nastavení tohoto stylu a ponesou jeho název.
- {{ui:Nový…}}: nový styl, který začíná jako kopie vámi zvoleného.
- {{ui:Změnit…}}: stejná pole jako sekce kót v {{ui:Vlastnosti}} (čáry a šipky, text, umístění, jednotky, alternativní jednotky, tolerance). Stiskněte {{ui:OK}} a styl se změní **a každá kóta, která ho používá, se změní s ním**, nastavení po nastavení. Nastavení, které jste změnili jen u jedné kóty, zůstane, jak je, pokud styl tohle nastavení nemění.
- {{ui:Přejmenovat…}} a {{ui:Smazat}}: Standard nelze přejmenovat ani smazat, stejně jako aktuální styl nebo styl, který kóty používají.
- {{ui:Porovnat…}}: co se liší mezi dvěma styly.
- {{ui:Použít na vybrané}}: nejprve vyberte kóty; převezmou nastavení stylu a jeho název.

`-DIMSTYLE` dělá totéž na příkazovém řádku: `Restore`, `Save` (aktuální nastavení, včetně toho, co jste napsali pomocí {{cmd:DIMTXT}} a ostatních, pod názvem), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Styly se ukládají do DWG nebo DXF (do jeho tabulky stylů kót) a načítají se ze souborů, které otevřete. *Aktuální* styl se neukládá: výkres se otevře s aktuálním stylem Standard. Standard si ponechá vlastní nastavení, zatímco je aktuální jiný styl.

## Změna textu kóty a pomocných čar

{{cmd:DIMEDIT}} (`DED`) pracuje s vybranými kótami: **Home** vrátí text tam, kam ho umístí styl, **New** napíše jiný text (`<>` značí naměřenou hodnotu), **Rotate** text natočí, **Oblique** nakloní pomocné čáry délkových a zarovnaných kót pod úhel, který napíšete (pro žádný stiskněte {{key:Enter}}). {{cmd:DIMTEDIT}} přesune text doleva (**Left**), doprava (**Right**) nebo na střed (**Center**) kótovací čáry, nebo ho natočí (**Angle**), nebo ho pošle na **Home**. Text vždy leží na kótovací čáře: nelze ho přetáhnout na volné místo.
