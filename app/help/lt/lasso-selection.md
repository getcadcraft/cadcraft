---
title: Lasso pasirinkimas
summary: Paspauskite ir vilkite laisvos formos kontūrą aplink objektus, kad juos pasirinktumėte kaip langą, kryžminę atranką ar pasirinkimo liniją; vilkdami perjunkite klavišu Space.
keywords: lasas, lassomode, vilkti, laisvai, pasirinkti, pasirinkimas, langas, kryžminė atranka, linija, space, daugiakampis, lietimas, rašiklis, stačiakampis
from: 9ec6154d
---

## Ką sužinosite

Kaip pasirinkti objektus juos apibraukiant ir kaip, kai reikia, vėl gauti stačiakampį.

## Nubraižykite lasą

1. Nubraižykite kelias linijas ir apskritimus, esančius arti vienas kito.
2. Be vykdomos komandos paspauskite pelės mygtuką tuščioje vietoje ir vilkite aplink kai kuriuos iš jų, pirmiausia judindami **į dešinę**.
3. Atleiskite.

Pasirenkami tik tie objektai, kurie visiškai yra kontūro viduje. Vilkdami kontūras rodomas ištisine linija: tai langinis lasas.

## Langas, kryžminė atranka ir linija

Kurie objektai bus pasirinkti, priklauso nuo pirmo vilkimo judesio ir nuo {{key:Space}}:

| Vilkiate | Lasas | Pasirenka |
|---|---|---|
| Pirmiausia į dešinę | Langas (ištisinis kontūras) | Tik objektus, **visiškai esančius viduje** |
| Pirmiausia į kairę | Kryžminė atranka (brūkšninis, žalias) | Objektus viduje **ir** objektus, kuriuos liečia kontūras |
| Vilkdami paspauskite {{key:Space}} | Langas, tada kryžminė atranka, tada linija | Linija (brūkšninis, neuždarytas kelias): tik objektus, kuriuos kelias kerta |

1. Paspauskite tuščioje vietoje ir vilkite aplink kai kuriuos objektus, pirmiausia judindami **į kairę**. Pasirenkami ir visi objektai, kuriuos liečia kontūras.
2. Paspauskite {{key:Esc}}.
3. Vėl paspauskite ir vilkite; vis dar laikydami mygtuką, vieną kartą paspauskite {{key:Space}}. Kontūras virsta kryžmine atranka; paspauskite {{key:Space}} dar kartą – gausite liniją.

Atleisdami {{key:Shift}} objektus pašalinate iš pasirinkimo (su nustatymu „Spustelint objektus: Prideda“ {{ui:Parametrai}}).

## Komandos viduje

Lasas veikia visur, kur CadCraft prašo `Select objects`: nubraižykite jį, tada baikite paspausdami {{key:Enter}}. {{cmd:STRETCH}} kryžminį lasą naudoja kaip langą, todėl galite vienu kartu ištempti L formos brėžinio dalį.

{{cmd:TRIM}} ir {{cmd:EXTEND}} vilkimą naudoja kitaip: ten kelias nukerpa (arba pratęsia) kiekvieną kertamą atkarpą. Žr. [Apkirpimas ir pratęsimas](topic:trim-and-extend).

## Stačiakampis

Spustelėjimas tuščioje vietoje, judesys ir antras spustelėjimas visada nubraižo stačiakampį langą (iš kairės į dešinę) arba kryžminę atranką (iš dešinės į kairę).

Kad vilkimas vėl nubraižytų stačiakampį, atidarykite {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Pasirinkimas vilkiant}} ir pasirinkite {{ui:Stačiakampis}}, arba įveskite {{cmd:LASSOMODE}}, tada `0`. Įveskite {{cmd:LASSOMODE}}, tada `1` – lasui. Pasirinkimas išsaugomas šioje naršyklėje.

:::touch
Vilkite pirštu ar rašikliu taip pat. Trumpas palietimas vis tiek pasirenka vieną objektą.
:::

## Dažnos klaidos

- **Nieko nepasirinkta.** Lasas buvo langas, o nieko nebuvo visiškai viduje. Vilkite pirmiausia į kairę arba vilkdami paspauskite {{key:Space}}.
- **Vilkimas perkėlė rankenėlę.** Paspaudus pasirinkto objekto rankenėlę, perkeliama rankenėlė. Lasą pradėkite tuščioje vietoje.
- **Klavišas Space nutraukė komandą.** {{key:Space}} perjungia lasą tik tada, kai mygtukas laikomas nuspaustas; kitu atveju tai {{key:Enter}}.
