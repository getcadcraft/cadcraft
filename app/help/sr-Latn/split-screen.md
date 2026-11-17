---
title: Podeli ekran
summary: Prikaži crtež u dva, tri ili četiri okna sa sopstvenim zumom, stavi list pored modela i otvori više crteža jedan pored drugog.
keywords: podela, podeli ekran, okna, vports, viewports, poređano, poredaj, jedan pored drugog, složeno, dva crteža, kartice, kartice dokumenata, poređenje, razdelnik, model i list, više crteža, otvoreni crteži
from: ee2f034b
---

## Šta ćeš naučiti

Kako da gledaš jedan crtež u više okana odjednom, svako sa sopstvenim zumom, i kako da otvoriš više crteža i vidiš ih jedan pored drugog.

## Podeli jedan crtež na okna

1. Otvori crtež ili nacrtaj nekoliko linija i krugova.
2. Otvori {{ui:View}} › {{ui:More}} i izaberi {{ui:Split side by side}} (ili ukucaj {{cmd:VPORTS}}, pa `2`, pa {{key:Enter}}).

Površina za crtanje se deli na dva okna, a oba prikazuju isti pogled. Aktivno okno ima plav okvir i dobija ukršteni kursor.

3. Klikni u drugo okno. Ono postaje aktivno. (Prvi klik samo menja okno; klikni ponovo da izabereš.)
4. Zumiraj točkićem miša. Zumira samo to okno.
5. Prevuci liniju između okana da jedno bude šire. {{key:Home}} na izabranom razdelniku vraća ga u sredinu.

{{cmd:VPORTS}} takođe prihvata `3` (dva okna s jedne strane i jedno veliko s druge: `L` ili `R`), `4`, i `SI` da se ponovo dobije jedno okno. Pogled aktivnog okna tada ispunjava površinu. Na listu {{cmd:VPORTS}} umesto toga dodaje prozor pogleda listu (kao u AutoCAD-u); tamo ukucaj {{cmd:SPLIT}} ili koristi meni Pogled.

## Crtaj iz jednog okna u drugo

1. Podeli jedno pored drugog i zumiraj svako okno na različit ugao crteža.
2. Ukucaj `L` i pritisni {{key:Enter}}, pa klikni prvu tačku u levom oknu.
3. Klikni jednom u desno okno da ga učiniš aktivnim, pa klikni drugu tačku tamo.

Linija ide između dva mesta. Komanda se nastavlja dok menjaš okna, a gumena traka se vidi u svakom oknu.

## Model pored lista

1. Podeli jedno pored drugog.
2. Klikni desno okno, pa klikni karticu lista ispod crteža.

Desno okno prikazuje list, a levo i dalje prikazuje model. Svako okno zadržava svoj prostor, pa možeš da crtaš na modelu i gledaš kako se prozor pogleda na listu prilagođava.

## Više crteža u jednom prozoru

1. Otvori crtež. Zatim otvori drugi (ili pritisni {{ui:New}}).

Svaki crtež se otvara u sopstvenoj kartici iznad površine za crtanje. Klikni karticu da prebaciš; komandna linija, paneli i opozivanje prate crtež na koji prebaciš. {{key:Mod+C}} u jednom crtežu i {{key:Mod+V}} u drugom kopiraju objekte između njih.

2. Klikni {{ui:Tile the open drawings side by side}} (ikona podele na kraju kartica), ili ikonu složenog prikaza pored nje.

Svako okno sada prikazuje jedan od otvorenih crteža, do četiri. Klikni okno da radiš u tom crtežu.

3. Klikni {{ui:×}} na kartici da zatvoriš taj crtež. Ako ima nesačuvanih promena, CadCraft prvo pita.

:::tip
Otvaranje crteža dok prozor sadrži samo novi, neizmenjen crtež koristi tu karticu umesto da dodaje novu.
:::

## Pomeri i zumiraj zajedno

Da uporediš dve revizije, poredaj ih jedan pored drugog, pa klikni {{ui:Link the panes' views}} (ikona veze na kraju kartica), ili to izaberi u {{ui:View}} › {{ui:More}}, ili ukucaj {{cmd:LINKVIEWS}} i `ON`. Sada pomeranje ili zum u jednom oknu premešta svako okno koje prikazuje model (ili svako okno koje prikazuje list) na isto mesto, pa dva crteža ostaju poravnata. {{cmd:LINKVIEWS}} `OFF` ponovo dozvoljava da se svako okno pomera samo.

## Česte greške

- **Klik kao da ništa nije uradio.** Aktivirao je to okno. Klikni ponovo da izabereš ili nacrtaš.
- **Točkić je zumirao pogrešno okno.** Točkić zumira okno pod pokazivačem i čini ga aktivnim.
- **Okna su se vratila na jedno.** Otvaranje crteža prikazuje ga onako kako je sačuvan; crtež sačuvan bez okana otvara se u jednom.
- **Napuštanje stranice upozorava na nesačuvane promene koje ne vidim.** Druga kartica sadrži crtež sa promenama. Prebaci se na nju i sačuvaj, ili napusti bez čuvanja.
