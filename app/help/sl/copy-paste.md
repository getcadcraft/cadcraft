---
title: "Kopiraj, prilepi in podvoji"
summary: "Kopirajte objekte v odložišče CadCraft, prilepite jih tja, kamor kliknete, ali na isto mesto, podvojite jih s kazalcem in prenesite delo iz druge risbe ali zavihka."
keywords: kopiraj, izreži, prilepi, prilepi na isto mesto, podvoji, odložišče, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, med risbami, drug zavihek, izhodiščna točka
from: 4b9f29d3
---

## Kaj se boste naučili

Kako kopirate objekte v odložišče, jih prilepite tja, kamor kliknete, jih prilepite na njihove lastne koordinate, jih podvojite s kazalcem, jih izrežete in jih prenesete v drugo risbo. Vse to je tudi v skupini {{ui:Urejanje}} na orodni vrstici: {{ui:Kopiraj}}, {{ui:Prilepi}} in meni {{ui:Več}}.

## Kopirajte in prilepite tja, kamor kliknete

1. Izberite objekte: kliknite nanje ali povlecite okno.
2. Pritisnite {{key:Mod+C}} ali kliknite {{ui:Kopiraj}} v skupini {{ui:Urejanje}}. Ukazna vrstica pove, koliko objektov je kopiranih. Ostanejo izbrani.
3. Pritisnite {{key:Mod+V}} ali kliknite {{ui:Prilepi}}. Kopija se pojavi na kazalcu, obešena od spodnjega levega oglišča kopiranih objektov.
4. Kliknite, kamor naj gre to oglišče, ali vnesite točko, kot je `2000,500`, in pritisnite {{key:Enter}}. Lovljenje objektov in Orto delujeta kot običajno.

Prilepljeni objekti so izbrani, zato jih lahko takoj premaknete ali spremenite. En {{key:Mod+Z}} odstrani celoten prilepek.

:::tip
Želite, da kopija visi s točke, ki jo izberete, na primer z oglišča zidu? Vnesite `COPYBASE`, kliknite izhodiščno točko, izberite objekte in pritisnite {{key:Enter}}. Prilepljanje nato postavi to točko tja, kamor kliknete. Če želite vsako kopijo obesiti od njenega središča namesto od spodnjega levega oglišča, spremenite {{ui:Točka lepljenja}} v [nastavitvah CadCraft](topic:settings).
:::

## Prilepi na isto mesto

Pritisnite {{key:Mod+Shift+V}} ali izberite {{ui:Prilepi na isto mesto}} v meniju {{ui:Več}}. Kopija se vstavi natanko na koordinate, s katerih je bila kopirana, brez klika. Uporabite za prenos objektov v drugo risbo na isto mesto ali iz lista v drug list.

## Podvoji in premakni

1. Izberite objekte.
2. Pritisnite {{key:Mod+D}} ali izberite {{ui:Podvoji in premakni}} v meniju {{ui:Več}}.
3. Kopija leži na izvirniku in se premika s kazalcem. Kliknite, kamor naj gre. Lahko tudi vnesete premik, kot je `@0,-600`, ali razdaljo proti kazalki.

{{key:Esc}} pred klikom ne pusti ničesar za sabo. Podvojitev je en korak razveljavitve in se ne dotakne odložišča.

## Izreži

Pritisnite {{key:Mod+X}} ali izberite {{ui:Izreži}} v meniju {{ui:Več}}. Objekti gredo v odložišče in so izbrisani iz risbe, v enem koraku razveljavitve. Vrnete jih s {{key:Mod+V}} ali {{key:Mod+Shift+V}}.

## Med risbami in zavihki

Odložišče ohrani kopijo, ko odprete drugo risbo, in si jo delijo vsi zavihki CadCraft v tem brskalniku. Kopirajte v enem zavihku, nato pritisnite {{key:Mod+V}} v drugem.

- Bloki, ki jih objekti uporabljajo, pridejo z njimi. Če risba, v katero prilepite, že ima blok z istim imenom, se uporabi njegova lastna definicija, kot v AutoCADu.
- Sloji, ki jih objekti uporabljajo, se dodajo, z barvo in nastavitvami, ki so jih imeli.
- Kopija se ne preračuna na novo merilo, če imata risbi različne enote: CadCraft to pove, nato lahko uporabite {{cmd:SCALE}}.
- Pogledna okna ostanejo na svojem listu; pri kopiranju se izpustijo.

:::note
Odložišče je lastno odložišče CadCraft. Objektov CadCraft ne morete prilepiti v drug program ali prilepiti iz drugega programa v CadCraft: shranite kot DWG ali DXF. Zelo velika kopija je morda prevelika za deljenje med zavihki; ukazna vrstica tedaj pove, da lahko prilepi samo ta zavihek.
:::

## Pogoste napake

- **{{key:Mod+V}} je v ukazno vrstico prilepil besedilo.** Tja ste nekaj vnesli, zato so tipke delovale na besedilu. Pritisnite {{key:Esc}}, da počistite, nato znova {{key:Mod+V}}.
- **Nič se ni zgodilo, vrstica stanja pa pravi, naj dokončate trenutni ukaz.** Teče drug ukaz. Najprej pritisnite {{key:Esc}}.
- **Prilepek je pristal daleč.** Visi od spodnjega levega oglišča tistega, kar ste kopirali, kar je lahko oddaljen objekt, ki ste ga po nesreči izbrali. Uporabite {{ui:Prilepi na isto mesto}} ali kopirajte z `COPYBASE`.
- **„Nič ni prilepljeno“ z razlogom.** Kar je drug zavihek pustil v odložišču, ni bilo mogoče prebrati (bilo je poškodovano ali ročno spremenjeno). Ponovno kopirajte objekte.

Celoten seznam tipk najdete v [Tipkovnica in miška](topic:keyboard), vsak poziv pa v [Referenca ukazov](topic:commands#clipboard).
