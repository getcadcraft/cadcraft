---
title: Podijeli ekran
summary: Prikaži crtež u dva, tri ili četiri okna sa sopstvenim zumom, stavi list pored modela i otvori više crteža jedan pored drugog.
keywords: podjela, podjela ekrana, okna, vports, viewports, poredano, jedan pored drugog, složeno, dva crteža, kartice, kartice dokumenta, poređenje, razdjelnik, model i list, više crteža, otvoreni crteži
from: ee2f034b
---

## Šta ćeš naučiti

Kako da gledaš jedan crtež u više okana istovremeno, svako sa svojim zumom, i kako da otvoriš više crteža i vidiš ih jedan pored drugog.

## Podijeli jedan crtež na okna

1. Otvori crtež, ili nacrtaj nekoliko linija i krugova.
2. Otvori {{ui:Pogled}} › {{ui:Više}} i izaberi {{ui:Podijeli jedno pored drugog}} (ili upiši {{cmd:VPORTS}}, pa `2`, pa {{key:Enter}}).

Prostor za crtanje dijeli se na dva okna, oba prikazuju isti pogled. Aktivno okno ima plavi okvir i dobija nišan.

3. Klikni u drugo okno. Ono postaje aktivno. (Prvi klik samo mijenja okno; klikni ponovo da odabereš.)
4. Zumiraj točkićem miša. Zumira samo to okno.
5. Prevuci liniju između okana da jedno bude šire. {{key:Home}} na fokusiranom razdjelniku vraća ga u sredinu.

{{cmd:VPORTS}} prihvata i `3` (dva okna s jedne strane i veliko s druge: `L` ili `R`), `4`, i `SI` da se opet vrati jedno okno. Aktivni pogled tada popunjava površinu. Na listu, {{cmd:VPORTS}} umjesto toga dodaje prozor pogleda na list (kao u AutoCAD-u); tamo upiši {{cmd:SPLIT}}, ili koristi meni Pogled.

## Crtaj iz jednog okna u drugo

1. Podijeli jedno pored drugog, i zumiraj svako okno na različit ugao crteža.
2. Upiši `L` i pritisni {{key:Enter}}, pa klikni prvu tačku u lijevom oknu.
3. Klikni jednom u desnom oknu da ga aktiviraš, pa klikni drugu tačku tamo.

Linija ide između dva mjesta. Naredba se nastavlja dok mijenjaš okna, a gumena traka se prikazuje u svakom oknu.

## Model pored lista

1. Podijeli jedno pored drugog.
2. Klikni desno okno, pa klikni karticu lista ispod crteža.

Desno okno prikazuje list; lijevo i dalje prikazuje model. Svako okno zadržava svoj prostor, pa možeš crtati na modelu i gledati kako prozor pogleda na listu prati.

## Više crteža u jednom prozoru

1. Otvori crtež. Zatim otvori drugi (ili pritisni {{ui:Nova}}).

Svaki crtež se otvara u svojoj kartici iznad površine za crtanje. Klikni karticu da se prebaciš; komandna linija, paneli i poništavanje prate crtež na koji prelaziš. {{key:Mod+C}} u jednom crtežu i {{key:Mod+V}} u drugom kopira objekte između njih.

2. Klikni {{ui:Poredaj otvorene crteže jedan pored drugog}} (ikona podjele na kraju kartica), ili složenu ikonu pored nje.

Svako okno sada prikazuje jedan od otvorenih crteža, do četiri. Klikni okno da radiš u tom crtežu.

3. Klikni {{ui:×}} na kartici da zatvoriš taj crtež. Ako ima nesačuvane promjene, CadCraft prvo pita.

:::tip
Otvaranje crteža dok prozor sadrži samo novi, netaknuti crtež koristi tu karticu umjesto da dodaje novu.
:::

## Zumiraj i pomjeraj zajedno

Da uporediš dvije revizije, poredaj ih jedno pored drugog, pa klikni {{ui:Poveži poglede okana}} (ikona veze na kraju kartica), ili je izaberi u {{ui:Pogled}} › {{ui:Više}}, ili upiši {{cmd:LINKVIEWS}} i `ON`. Sad pomjeranje ili zumiranje u jednom oknu pomjera svako okno koje prikazuje model (ili svako okno koje prikazuje list) na isto mjesto, pa dva crteža ostaju poravnata. {{cmd:LINKVIEWS}} `OFF` ponovo dozvoljava da se svako okno pomjera samostalno.

## Česte greške

- **Moj klik ništa nije uradio.** Samo je aktivirao to okno. Klikni ponovo da odabereš ili crtaš.
- **Točkić je zumirao pogrešno okno.** Točkić zumira okno pod pokazivačem i čini ga aktivnim.
- **Okna su se vratila na jedno.** Otvaranje crteža prikazuje ga onako kako je sačuvan; crtež sačuvan bez okana otvara se u jednom.
- **Napuštanje stranice upozorava na nesačuvane promjene koje ne vidim.** Druga kartica sadrži crtež sa promjenama. Prebaci se na nju i sačuvaj, ili napusti bez čuvanja.
