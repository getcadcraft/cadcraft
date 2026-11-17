---
title: Konstrukcijske linije i zrake
summary: Crtajte linije koje se protežu bez kraja (XLINE) ili od točke u jednom smjeru (RAY) da poravnate stvari, a zatim ih skratite u obične linije.
keywords: xline, ray, konstrukcijska linija, konstrukcijske linije, beskonačna linija, pomoćna linija, referentna linija, raspolovi, odmaknuta linija, linije rasporeda, xl
from: b6c398bc
---

## Što ćete naučiti

Kako crtati konstrukcijske linije za poravnanje dok crtate: kroz dvije točke, vodoravno ili uspravno, pod kutom, na pola puta između dva smjera ili na zadanoj udaljenosti od linije. I kako ih skratiti u obične linije kad odrade svoj posao.

## Dvije vrste

- **Konstrukcijska linija** ({{cmd:XLINE}}) proteže se bez kraja u oba smjera.
- **Zraka** ({{cmd:RAY}}) počinje u točki i proteže se bez kraja u jednom smjeru.

Obje se crtaju preko cijelog područja crteža, bez obzira na zumiranje, u podijeljenom zaslonu i u viewportima na listu. {{ui:Opseg}} ih izostavlja, pa zumiranje na crtež i dalje prikazuje ono što ste nacrtali.

## Crtanje konstrukcijskih linija

1. Kliknite {{ui:Crtanje}} › {{ui:Više}} › {{ui:Konstrukcijska linija}}, ili upišite `XL` i pritisnite {{key:Enter}}.
2. Kliknite točku. Svaki sljedeći klik dodaje konstrukcijsku liniju kroz prvu točku i onu koju kliknete.
3. Pritisnite {{key:Enter}} za završetak.

Umjesto prve točke možete upisati opciju:

| Opcija | Što čini |
|---|---|
| `H` (Vod) | Vodoravne linije, po jedna kroz svaku točku koju kliknete. |
| `V` (Okom) | Uspravne linije kroz svaku točku. |
| `A` (Kut) | Linije pod kutom koji upišete (u stupnjevima, suprotno kazaljci na satu od osi X), kroz svaku točku. `R` (Reference) mjeri kut od linije koju odaberete. |
| `B` (Raspol) | Kliknite kut, zatim točku duž jedne stranice: svaka točka koju kliknete duž druge stranice dodaje liniju na pola puta između njih. |
| `O` (Odmak) | Upišite udaljenost, odaberite liniju, zatim kliknite stranu: konstrukcijska linija toliko udaljena od nje, paralelna. `T` (Kroz) umjesto toga stavlja je kroz točku koju kliknete. Udaljenost se pamti za sljedeći put. |

## Crtanje zraka

1. Kliknite {{ui:Crtanje}} › {{ui:Više}} › {{ui:Zraka}}, ili upišite `RAY` i pritisnite {{key:Enter}}.
2. Kliknite gdje zrake počinju.
3. Kliknite točku kroz koju svaka zraka prolazi. Pritisnite {{key:Enter}} za završetak.

## Hvatanje za njih i skraćivanje

Konstrukcijske linije i zrake hvataju se za Najbliže, Okomito i Sjecište. Nemaju krajeva ni sredine, pa Krajnja točka i Polovište na njima ništa ne nalaze.

Režu se i reže ih se kao i druge linije u {{cmd:TRIM}} i {{cmd:BREAK}}:

- Odrežite jedan kraj konstrukcijske linije i ona postaje zraka koja počinje na rezu.
- Odrežite daleki dio zrake i ona postaje obična linija.
- Prelomite konstrukcijsku liniju u jednoj točki i dobijete dvije zrake.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} i {{cmd:STRETCH}} rade i s njima. Prozorski odabir ih nikad ne uzima, jer nijedan prozor ne može obuhvatiti cijelu beskonačnu liniju; križni prozor ili klik to mogu.

:::note
DWG (svaka verzija) i DXF 2000 čuvaju ih kao konstrukcijske linije. DXF R12 ih nema, pa se tamo pretvaraju u linije preko cijelog crteža, a spremanje to kaže. Ispis ili PDF crtaju ih samo preko onoga što se ispisuje.
:::
