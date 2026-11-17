---
title: Odabir lasom
summary: Pritisnite i povucite slobodnoručno ocrtan obrub oko objekata da biste ih odabrali kao prozor, križanje ili ogradu; prebacite se razmakom dok povlačite.
keywords: laso, lassomode, povlačenje, slobodnoručno, odaberi, odabir, prozor, križanje, ograda, Space, poligon, dodir, olovka, pravokutnik
from: 9ec6154d
---

## Što ćete naučiti

Kako odabrati objekte crtanjem oko njih i kako vratiti pravokutnik kada ga želite.

## Nacrtajte laso

1. Nacrtajte nekoliko linija i kružnica blizu jedne drugima.
2. Kad nijedna naredba nije pokrenuta, pritisnite tipku miša na praznom mjestu i povucite oko nekih od njih, pomičući se najprije **udesno**.
3. Otpustite.

Odabiru se samo objekti koji su potpuno unutar obruba. Obrub se dok povlačite crta punom linijom: ovo je laso prozor.

## Prozor, križanje i ograda

Koje objekte dobivate ovisi o prvom pomaku povlačenja i o {{key:Space}}:

| Povučete | Laso | Odabire |
|---|---|---|
| Najprije udesno | Prozor (puni obrub) | Samo objekte **potpuno unutar** |
| Najprije ulijevo | Križanje (isprekidano, zeleno) | Objekte unutar **i** objekte koje obrub dodiruje |
| Pritisnete {{key:Space}} dok povlačite | Prozor, zatim križanje, zatim ograda | Ogradu (isprekidana putanja, nezatvorena): samo objekte koje putanja siječe |

1. Pritisnite na praznom mjestu i povucite oko nekih objekata, pomičući se najprije **ulijevo**. Odabire se i sve što obrub dodiruje.
2. Pritisnite {{key:Esc}}.
3. Ponovno pritisnite i povucite; dok još držite tipku, jednom pritisnite {{key:Space}}. Obrub se pretvara u križanje; pritisnite {{key:Space}} još jednom za ogradu.

{{key:Shift}} dok otpuštate uklanja objekte iz odabira umjesto toga (uz „Klik na objekte: Dodaje“ u postavkama).

## Unutar naredbe

Laso radi svugdje gdje CadCraft traži `Odaberite objekte`: nacrtajte ga, zatim pritisnite {{key:Enter}} za završetak. {{cmd:STRETCH}} uzima laso križanje kao svoj prozor, pa možete rastegnuti dio crteža u obliku slova L u jednom potezu.

{{cmd:TRIM}} i {{cmd:EXTEND}} povlačenje koriste drugačije: tamo skraćuju (ili produžuju) svaki dio koji putanja siječe. Vidi [Skrati i produži](topic:trim-and-extend).

## Pravokutnik

Klik na prazan prostor, pomak i drugi klik uvijek crtaju pravokutni prozor (slijeva udesno) ili križanje (zdesna ulijevo).

Da povlačenje ponovno crta pravokutnik, otvorite {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Povlačenje za odabir}} i odaberite {{ui:Pravokutnik}}, ili upišite {{cmd:LASSOMODE}}, zatim `0`. Upišite {{cmd:LASSOMODE}}, zatim `1` za laso. Izbor se pamti u ovom pregledniku.

:::touch
Povucite prstom ili olovkom na isti način. Dodir i dalje odabire jedan objekt.
:::

## Česte pogreške

- **Ništa nije odabrano.** Laso je bio prozor i ništa nije bilo potpuno unutra. Započnite povlačenje ulijevo ili pritisnite {{key:Space}} dok povlačite.
- **Povlačenje je pomaknulo ručku.** Pritisak na ručku odabranog objekta pomiče ručku. Započnite laso na praznom mjestu.
- **Space je završio naredbu.** {{key:Space}} mijenja laso samo dok je tipka miša pritisnuta; inače je to Enter.
