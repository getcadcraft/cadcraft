---
title: Pomoćne linije i zrake
summary: Crtajte linije koje se protežu bez kraja (XLINE) ili od tačke u jednom smjeru (RAY) da poravnate stvari, pa ih obrežite u obične linije.
keywords: xline, zraka, pomoćna linija, pomoćne linije, beskonačna linija, vodilica, referentna linija, simetrala, linija pomaka, linije rasporeda, xl
from: b6c398bc
---

## Šta ćete naučiti

Kako crtati pomoćne linije da poravnate stvari dok crtate: kroz dvije tačke, vodoravno ili uspravno, pod uglom, na pola puta između dva smjera, ili na zadatoj udaljenosti od linije. I kako ih obrezati u obične linije kada završe svoj posao.

## Dvije vrste

- **Pomoćna linija** ({{cmd:XLINE}}) proteže se bez kraja na obje strane.
- **Zraka** ({{cmd:RAY}}) počinje u tački i proteže se bez kraja u jednom smjeru.

Obje se crtaju preko cijelog područja crteža, bez obzira na zumiranje, u podijeljenom ekranu i u prozorima prikaza na listu. {{ui:Granice}} ih izostavlja, pa zumiranje na crtež i dalje uklapa ono što ste nacrtali.

## Crtanje pomoćnih linija

1. Kliknite {{ui:Crtanje}} › {{ui:Više}} › {{ui:Pomoćna linija}}, ili upišite `XL` i pritisnite {{key:Enter}}.
2. Kliknite tačku. Svaki sljedeći klik dodaje pomoćnu liniju kroz prvu tačku i tačku na koju kliknete.
3. Pritisnite {{key:Enter}} da završite.

Umjesto prve tačke možete upisati opciju:

| Opcija | Šta radi |
|---|---|
| `H` (Vodoravno) | Vodoravne linije, po jedna kroz svaku tačku na koju kliknete. |
| `V` (Vertikalno) | Uspravne linije kroz svaku tačku. |
| `A` (Ugao) | Linije pod uglom koji upišete (stepeni, suprotno kazaljci na satu od X ose), kroz svaku tačku. `R` (Referenca) mjeri ugao od linije koju izaberete. |
| `B` (Simetrala) | Kliknite ugao, pa tačku duž jedne strane: svaka tačka na koju kliknete duž druge strane dodaje liniju na pola puta između njih. |
| `O` (Pomak) | Upišite udaljenost, izaberite liniju, pa kliknite stranu: pomoćna linija toliko udaljena od nje, paralelna. `T` (Kroz) umjesto toga stavlja je kroz tačku na koju kliknete. Udaljenost se pamti za sljedeći put. |

## Crtanje zraka

1. Kliknite {{ui:Crtanje}} › {{ui:Više}} › {{ui:Zraka}}, ili upišite `RAY` i pritisnite {{key:Enter}}.
2. Kliknite gdje zrake počinju.
3. Kliknite tačku kroz koju svaka zraka prolazi. Pritisnite {{key:Enter}} da završite.

## Hvatanje za njih i obrezivanje

Pomoćne linije i zrake koriste hvatanja Najbliže, Normalno i Presjek. Nemaju krajeve ni sredinu, pa Kraj i Sredina na njima ništa ne nalaze.

Režu i bivaju rezane kao druge linije u {{cmd:TRIM}} i {{cmd:BREAK}}:

- Odsjecite jedan kraj pomoćne linije i ona postaje zraka koja počinje na rezu.
- Odsjecite udaljeni dio zrake i ona postaje obična linija.
- Prelomite pomoćnu liniju u jednoj tački i dobijete dvije zrake.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} i {{cmd:STRETCH}} rade i na njima. Izbor prozorom ih nikad ne bira, jer nijedan prozor ne može obuhvatiti cijelu beskonačnu liniju; prelazni prozor ili klik to mogu.

:::note
DWG (svaka verzija) i DXF 2000 čuvaju ih kao pomoćne linije. DXF R12 ih nema, pa tamo postaju linije preko crteža, a snimanje to kaže. Štampa ili PDF crta ih samo preko onoga što se štampa.
:::
