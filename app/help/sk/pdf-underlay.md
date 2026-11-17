---
title: Podklady PDF a import PDF
summary: Umiestnite stranu PDF pod výkres, aby ste ju mohli obkresliť a vykresliť, alebo premeňte čiary a text strany na objekty výkresu.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, podklad, obkresliť, importovať pdf, sken, pôdorys, vyblednutie, orezanie, hladiny, uchopenie, otvoriť pdf
from: aa301d0f
---

## Dva spôsoby, ako vložiť stranu PDF

- **Pripojiť** ({{cmd:PDFATTACH}}) ponechá PDF ako obrázok pod výkresom. Obkreslíte ho, uchopíte na jeho čiary, zosvetlíte ho, orežete a vytlačí sa spolu s listom. Výkres si ponechá iba názov súboru.
- **Importovať** ({{cmd:PDFIMPORT}}) premení čiary, krivky, výplne a text strany na bežné objekty výkresu na hladinách pomenovaných podľa PDF. Môžete ich upravovať a PDF potom nie je potrebné.

Otvorenie PDF tlačidlom {{ui:Otvoriť}} sa opýta, ktorý zo dvoch spôsobov chcete.

## Pripojenie strany

1. Napíšte `PDFATTACH` (alebo `PDFATT`) a vyberte PDF. Ak má viac strán, napíšte číslo strany.
2. Kliknite na vložný bod (ľavý dolný roh strany).
3. Stlačte {{key:Enter}} pre skutočnú veľkosť strany alebo napíšte mierku: jednotky výkresu na bod PDF (bod je 1/72 palca, takže vo výkrese v milimetroch je to 0.3528).
4. Stlačte {{key:Enter}} pre žiadne otočenie, alebo napíšte uhol.

Strana je objekt ako odkaz na blok: presúvajte, otáčajte, meňte mierku, kopírujte, mažte a dávajte na hladinu. Vypnite jej hladinu a zmizne. Priblížte a strana sa znova vykreslí ostro.

## Obkreslenie

S {{ui:Uchopenie}} zapnutým sa kurzor prichytáva na vlastné čiary PDF: koncové body, stredy a priesečníky (a {{ui:Najbližšie}}, keď je toto uchopenie zapnuté). Text nakreslený ako písmená na strane sa neprichytáva.

## Úprava

- `PDFADJUST`: **Vyblednutie** (0 až 80 percent), **Kontrast** (0 až 100), **Monochromaticky** a **Zap/vyp** (O), aby ste ju skryli bez zmazania.
- `PDFCLIP`: zobrazí iba obdĺžnik alebo mnohouholník strany; **Zmazať** odstráni orezanie.
- `PDFLAYERS`: PDF môže mať vlastné hladiny. Príkaz ich vypíše; napíšte číslo a hladinu pre tento podklad zapnete alebo vypnete. Hladiny, ktoré má súbor vypnuté, sa spustia vypnuté.

## Vykreslenie a uloženie

PLOT vykreslí stranu ako jej čiary, výplne a text (zostane ostrá a dá sa v nej vyhľadávať). Obrázky vnútri PDF sa zobrazia na obrazovke, ale zatiaľ sa netlačia.

DWG alebo DXF 2000 ponechá podklad ako odkaz: názov súboru, stranu, miesto, mierku, otočenie, orezanie, vyblednutie a kontrast. Samotné PDF nie je vo výkrese. Znovu otvorte výkres, napíšte `PDF` a vyberte súbor znova; dovtedy sa strany zobrazujú ako rámy a skutočnú veľkosť získajú až vtedy. Starší DXF (R12) podklady nepozná: ponechá rám a názov. Ako iné programy čítajú uložené orezanie a mierku, sa zatiaľ v nich neoverilo.

## Import strany

1. Napíšte `PDFIMPORT` (alebo `PDFIM`) a vyberte PDF a stranu.
2. Kliknite, kam má prísť ľavý dolný roh strany.
3. Stlačte {{key:Enter}} pre skutočnú veľkosť, napíšte mierku alebo zvoľte **Dva body**: strana sa nakreslí v skutočnej veľkosti, potom kliknete na dva body vo vzdialenosti, ktorú poznáte, a napíšete skutočnú vzdialenosť; všetko sa podľa nej prepočíta.

Čiary sa stanú úsečkami a lomenými čiarami, kružnice a oblúky sa rozpoznajú, vyplnené tvary sa stanú plným šráfovaním a text sa stane textom na hladine, ktorej názov končí na `-TEXT`. Je to jeden krok späť. Obrázky v PDF sa neimportujú: stranu radšej pripojte. Sken (strana, ktorá je iba obrázok) nemá čiary na import.

PDF sa čítajú ako nedôveryhodné súbory: nespúšťajú sa žiadne skripty a veľmi veľká strana sa skráti, o čom sa vypíše správa.
