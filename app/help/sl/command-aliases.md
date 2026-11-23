---
title: Uredite aliase ukazov
summary: Lastna kratka imena ukazov hranite v eni besedilni datoteki v znani obliki, uvozite in izvozite datoteko .pgp ter jo znova naložite z REINIT.
keywords: alias, aliases, aliasedit, pgp, bližnjica, kratko ime, reinit, tipkovnica, prilagodi, uredi aliase
from: 2282d36f
---

## Kaj se boste naučili

Kako dodati lastna kratka imena za ukaze, na primer `LL` za {{cmd:LINE}}, vse v eni besedilni datoteki.

## Dodajte alias

1. Odprite {{ui:Pogled}} › {{ui:Več}} › {{ui:Uredi aliase …}}, ali vnesite {{cmd:ALIASEDIT}} in pritisnite {{key:Enter}}.
2. Dodajte vrstico z aliasom, vejico in ukazom za zvezdico:

```
LL,     *LINE
```

3. Kliknite {{ui:Shrani}}. Ukazna vrstica pove, koliko vaših aliasov je v uporabi.
4. Vnesite `LL` in pritisnite {{key:Enter}}: zažene se LINE.

Vaši aliasi so nad CadCraftovimi. Vaša vrstica zmaga nad vgrajenim aliasom z istim imenom; če jo odstranite, se vgrajeni alias vrne.

## Vrstice, ki jih CadCraft zavrne

Urejevalnik med tipkanjem navede vsako težavo s številko vrstice:

- ukaz ne obstaja;
- alias je sam ime ukaza (`LINE, *CIRCLE` bi skril LINE);
- vrstica ni oblike `ALIAS, *COMMAND`;
- isti alias je v dveh vrsticah (poznejša zmaga).

Vrstice, ki zaženejo program v vašem računalniku, na primer `NOTEPAD, START, 1, *File to edit: ,`, se preskočijo z opombo: aplikacija v brskalniku ne more zagnati programov.

## Prenesite aliase iz drugega programa

1. V urejevalniku aliasov kliknite {{ui:Uvozi .pgp …}} in izberite datoteko. Datoteko `.pgp` lahko tudi spustite na risbo.
2. Preglejte navedene težave (ukazi, ki jih CadCraft nima, so zavrnjeni, ostali delujejo).
3. Kliknite {{ui:Shrani}}.

{{ui:Izvozi .pgp}} shrani CadCraftove aliase in vaše kot eno datoteko v isti obliki.

## Znova naložite datoteko

Vnesite {{cmd:REINIT}} in pritisnite {{key:Enter}}, da znova uporabite datoteko z aliasi. Hrani se v tem brskalniku; namizna aplikacija jo bo hranila v svoji mapi, storitev v oblaku pa jo bo sinhronizirala.

## Črke za možnosti ukaza

Alias poimenuje ukaz. Če želite spremeniti črke, ki odgovarjajo na možnosti ukaza (`P` za Polarno v {{cmd:ARRAY}}), glejte [Dajte možnostim ukazov lastne črke](topic:option-letters).

## Bližnjične tipke za poljuben ukaz

Alias vnesete; bližnjica je tipka. Če želite ukazu dati lastno tipko:

1. Kliknite {{ui:Pogled}} › {{ui:Več}} › {{ui:Bližnjične tipke …}}, ali vnesite `KEYS` in pritisnite {{key:Enter}}.
2. Kliknite polje {{ui:Tipka}} in pritisnite tipke, na primer {{key:Alt+Shift+C}}.
3. V polje {{ui:Požene}} zapišite ukaz in, če želite, kaj vnesti za njim: `CIRCLE` ali `ZOOM E`.
4. Kliknite {{ui:Dodaj (A)}}.

Tipka potrebuje {{key:Mod}} ali {{key:Alt}} s črko ali številko, ali prosto funkcijsko tipko ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tipke, ki jih že uporabljajo CadCraft, aplikacija ali brskalnik, in tipke, ki jih ima gumb Moja orodja (glejte [Lastni gumbi](topic:my-tools)), so zavrnjene, okence pa pove, zakaj. Bližnjice se hranijo v tem brskalniku (ali namizni aplikaciji); {{ui:Odstrani (R)}} jo odvzame.
