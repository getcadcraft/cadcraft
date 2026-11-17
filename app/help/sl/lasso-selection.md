---
title: Izbor z lassom
summary: Pritisnite in povlecite prosto obrobo okoli objektov, da jih izberete kot okno, sekanje ali ograjo; med vlečenjem preklopite s tipko Space.
keywords: lasso, lassomode, vlečenje, prosto, izberi, izbor, okno, sekanje, ograja, Space, mnogokotnik, dotik, pisalo, pravokotnik
from: 9ec6154d
---

## Kaj se boste naučili

Kako izbrati objekte z risanjem obrobe okoli njih in kako po želji dobiti nazaj pravokotnik.

## Narišite lasso

1. Narišite nekaj črt in krožnic, blizu skupaj.
2. Brez zagnanega ukaza pritisnite gumb miške na prazno mesto in povlecite okoli nekaterih od njih, najprej **desno**.
3. Spustite.

Izbrani so samo objekti, ki so v celoti znotraj obrobe. Obroba je med vlečenjem polna: to je lasso okno.

## Okno, sekanje in ograja

Kateri objekti bodo izbrani, je odvisno od prvega premika vlečenja in od {{key:Space}}:

| Povlečete | Lasso | Izbere |
|---|---|---|
| Najprej desno | Okno (polna obroba) | Samo objekte **v celoti znotraj** |
| Najprej levo | Sekanje (črtkano, zeleno) | Objekte znotraj **in** objekte, ki jih obroba dotika |
| Med vlečenjem pritisnite {{key:Space}} | Okno, nato sekanje, nato ograja | Ograja (črtkana pot, ni zaprta): samo objekte, ki jih pot seka |

1. Pritisnite na prazno mesto in povlecite okoli nekaterih objektov, najprej **levo**. Izbran je tudi vse, kar obroba dotika.
2. Pritisnite {{key:Esc}}.
3. Ponovno pritisnite in povlecite; med držanjem gumba enkrat pritisnite {{key:Space}}. Obroba se spremeni v sekanje; ponovno pritisnite {{key:Space}} za ograjo.

{{key:Shift}} med spuščanjem odstrani objekte iz izbora (z „Klik na objekte: Doda“ v {{ui:Nastavitve}}).

## Znotraj ukaza

Lasso deluje povsod, kjer CadCraft zahteva `Izberite objekte`: narišite ga in nato pritisnite {{key:Enter}}, da končate. {{cmd:STRETCH}} vzame lasso sekanja kot svoje okno, tako da lahko v enem koraku raztegnete L-oblikan del risbe.

{{cmd:TRIM}} in {{cmd:EXTEND}} uporabljata vlečenje drugače: tam prireže (ali podaljša) vsak kos, ki ga pot seka. Glejte [Prirezovanje in podaljševanje](topic:trim-and-extend).

## Pravokotnik

Klik na prazen prostor, premik in drugi klik vedno narišeta pravokotno okno (od leve proti desni) ali sekanje (od desne proti levi).

Če želite, da vlečenje spet riše pravokotnik, odprite {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Vlečenje za izbiro}} in izberite {{ui:Pravokotnik}}, ali vnesite {{cmd:LASSOMODE}}, nato `0`. Za lasso vnesite {{cmd:LASSOMODE}}, nato `1`. Izbira ostane shranjena v tem brskalniku.

:::touch
Povlecite s prstom ali s pisalom na enak način. Kratek dotik še vedno izbere en objekt.
:::

## Pogoste napake

- **Nič ni izbrano.** Lasso je bil okno in nič ni bilo v celoti znotraj. Začnite vleči levo ali med vlečenjem pritisnite {{key:Space}}.
- **Vlečenje je premaknilo ročico.** Pritisk na ročico izbranega objekta premakne ročico. Začnite lasso na prazni točki.
- **Space je končal ukaz.** {{key:Space}} preklopi lasso samo, dokler je gumb pritisnjen; sicer deluje kot {{key:Enter}}.
