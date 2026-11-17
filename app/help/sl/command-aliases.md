---
title: Urejanje aliasov ukazov
summary: Svoje kratice ukazov hranite v eni besedilni datoteki v znani obliki, uvozite in izvozite datoteko .pgp ter jo znova naložite z REINIT.
keywords: alias, aliasi, aliasedit, pgp, bližnjica, kratko ime, reinit, tipkovnica, prilagodi, uredi aliase
from: 6ab6fa0e
---

## Kaj se boste naučili

Kako dodati lastne kratke oblike za ukaze, na primer `LL` za {{cmd:LINE}}, vse v eni besedilni datoteki.

## Dodajanje aliasa

1. Odprite {{ui:Pogled}} › {{ui:Več}} › {{ui:Uredi aliase …}}, ali vnesite {{cmd:ALIASEDIT}} in pritisnite {{key:Enter}}.
2. Dodajte vrstico z aliasom, vejico in ukazom za zvezdico:

```
LL,     *LINE
```

3. Kliknite {{ui:Shrani}}. Ukazna vrstica pove, koliko vaših aliasov je v uporabi.
4. Vnesite `LL` in pritisnite {{key:Enter}}: LINE se zažene.

Vaši aliasi so nad vgrajenimi v CadCraft. Vaša vrstica zmaga nad vgrajenim aliasom z enakim imenom; odstranite svojo vrstico in vgrajeni se vrne.

## Vrstice, ki jih CadCraft zavrne

Urejevalnik med tipkanjem našteje vsako težavo z številko vrstice:

- ukaz ne obstaja;
- alias je sam ime ukaza (`LINE, *CIRCLE` bi skril LINE);
- vrstica ni oblike `ALIAS, *COMMAND`;
- isti alias je v dveh vrsticah (poznejša zmaga).

Vrstice, ki zaženejo program v vašem računalniku, kot je `NOTEPAD, START, 1, *File to edit: ,`, se preskočijo z opombo: aplikacija v brskalniku ne more zaganjati programov.

## Prenos aliasov iz drugega programa

1. V urejevalniku aliasov kliknite {{ui:Uvozi .pgp …}} in izberite datoteko. Lahko tudi spustite datoteko `.pgp` na risbo.
2. Preverite naštete težave (ukazi, ki jih CadCraft nima, so zavrnjeni, ostalo deluje).
3. Kliknite {{ui:Shrani}}.

{{ui:Izvozi .pgp}} shrani CadCraftove aliase in vaše kot eno datoteko v isti obliki.

## Ponovno nalaganje datoteke

Vnesite {{cmd:REINIT}} in pritisnite {{key:Enter}}, da znova uporabite datoteko aliasov. Shranjena je v tem brskalniku; namizna aplikacija jo bo hranila v svoji mapi, storitev v oblaku pa jo bo sinhronizirala.

## Bližnjične tipke za poljuben ukaz

Alias se vnese; bližnjica je tipka. Če želite ukazu dodeliti svojo tipko:

1. Kliknite {{ui:Pogled}} › {{ui:Več}} › {{ui:Bližnjične tipke …}}, ali vnesite `KEYS` in pritisnite {{key:Enter}}.
2. Kliknite polje {{ui:Tipka}} in pritisnite tipke, na primer {{key:Alt+Shift+C}}.
3. V {{ui:Požene}} napišite ukaz in, če želite, kaj vnesti za njim: `CIRCLE` ali `ZOOM E`.
4. Kliknite {{ui:Dodaj (A)}}.

Bližnjica potrebuje {{key:Mod}} ali {{key:Alt}} s črko ali številko ali prosto funkcijsko tipko ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tipke, ki jih že uporabljajo CadCraft, aplikacija ali brskalnik, ter tipke, ki jih ima gumb Moja orodja (glejte [Lastni gumbi](topic:my-tools)), so zavrnjene, polje pa pove zakaj. Bližnjice se hranijo v tem brskalniku (ali namizni aplikaciji); {{ui:Odstrani (R)}} jo odstrani.
