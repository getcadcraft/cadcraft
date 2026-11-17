---
title: Žemėlapio sluoksniai po brėžiniu
summary: Rodykite gatvių žemėlapius, oro nuotraukas ar paveikslėlį su pasaulio failu po modelio erdve, išdėstytus pagal brėžinio koordinačių sistemą.
keywords: žemėlapis, žemėlapio sluoksniai, maplayers, ml, geomap, pagrindinis žemėlapis, oro nuotrauka, palydovinė nuotrauka, plytelės, xyz, wms, wmts, žemėlapio paslauga, pasaulio failas, koordinačių sistema, epsg, valstybinė plokštumos sistema, utm, georeferencija, situacijos planas, geolokacija, geografinė vieta, geoduomenys, išsaugota, dwg, dxf
from: f103045f
---

## Ką sukursite

Situacijos planą, nubraižytą virš oro nuotraukos ar gatvių žemėlapio, kiekvieną tinkamoje vietoje.

## Nurodykite CadCraft, kur yra brėžinys

1. Nustatykite brėžinio vienetus {{ui:Ypatybės}} › {{ui:Vienetai}} (pavyzdžiui, pėdos arba metrai).
2. Įveskite {{cmd:MAPLAYERS}} (arba `ML`) ir paspauskite {{key:Enter}}.
3. Skiltyje {{ui:Kur yra brėžinys}} įveskite pavadinimą arba EPSG kodą laukelyje {{ui:Rasti sistemą}} (pavyzdžiui, `2277` arba `Texas Central`) ir pasirinkite jį {{ui:Sistema}}.
4. Jei brėžinys nubraižytas pagal tos sistemos koordinates, palikite išdėstymą 0. Jei ne, nurodykite vieną brėžinio tašką ({{ui:Brėžinio X}}, {{ui:Brėžinio Y}}), kur tas taškas yra žemėlapio tinklelyje ({{ui:Rytai}}, {{ui:Šiaurė}}), ir kiek brėžinys pasuktas nuo rytų ({{ui:Pasukta (°)}}).
5. Spustelėkite {{ui:Naudoti šią sistemą}}.

## Pridėkite sluoksnį

1. Įjunkite {{ui:Žemėlapių sluoksniai iš interneto}} viršuje, dialogo pradžioje. Kol jis neįjungtas, joks serveris nieko neprašoma; įjungus, pridėti serveriai mato ekrane matomą plotą ir jūsų interneto adresą, bet niekada ne jūsų brėžinį.
2. Skiltyje {{ui:Pridėti sluoksnį}} pasirinkite, iš kur jis gaunamas:
   - **Plytelės (XYZ)**: plytelės adresas su `{z}`, `{x}` ir `{y}`, pavadinimas ir teikėjo reikalaujamas šaltinio nurodymas.
   - **WMS**, **WMTS** arba **ArcGIS**: paslaugos adresas, tada {{ui:Gauti sluoksnius}} ir pasirinkite vieną.
   - **Paveikslėlis**: PNG arba JPEG su jo pasaulio failu (ir `.prj`, jei jis yra).
3. Sluoksnis rodomas po brėžiniu. Jo šaltinio nurodymas rodomas apatiniame dešiniajame brėžinio kampe.

Kiekvieną sąrašo sluoksnį galima paslėpti, padaryti labiau ar mažiau permatomą, perkelti aukštyn arba žemyn arba pašalinti.

Kiekvienas koordinačių sistemos ar sluoksnių pakeitimas yra vienas {{cmd:UNDO}} žingsnis.

## Išsaugoma kartu su brėžiniu

Koordinačių sistema ir sluoksnių sąrašas išsaugomi brėžinyje, kai įrašote jį kaip DWG arba DXF, ir grįžta, kai jį vėl atidarote bet kuriame kompiuteryje. Paveikslėliai iš failų neišsaugomi: atidarę įdėkite juos iš naujo. Jungiklis {{ui:Žemėlapių sluoksniai iš interneto}} brėžinyje neišsaugomas: jis priklauso šiai naršyklei, todėl brėžinys, kurį kas nors jums atsiunčia, jokiam serveriui nieko neprašo, kol pats jo neįjungsite.

Ką mato kitos programos:

| Įrašyta kaip | Brėžinio vieta | Žemėlapio sluoksniai |
|---|---|---|
| DWG 2010, 2013 arba 2018, DXF 2000 | Įrašoma standartiniu būdu, kuriuo programos skaito brėžinio geografinę vietą: sistemos EPSG kodas, vienas brėžinio taškas ir jo vieta žemėlapio tinklelyje, vienetai ir šiaurė. | Tik CadCraft |
| DWG 2000, 2004 arba 2007, DXF R12 | Tik CadCraft (CadCraft tai praneša įrašydama) | Tik CadCraft |

- **Patikrinta:** ODA File Converter nuskaito vietą be klaidų, o DXF biblioteka (ezdxf) tiksliai nuskaito EPSG kodą ir išdėstymą.
- **Dar nepatikrinta:** ar kitos braižymo programos atpažįsta sistemą pagal jos EPSG kodą. Programa, kuri saugo savo sąrašą su kitais sistemų pavadinimais, gali rodyti brėžinį be vietos.
- Kitos programos bloko sąraše rodo bloką pavadinimu `CADCRAFT_GEO`. Tai CadCraft savo sistemos ir sluoksnių kopija; ji niekada nededama į brėžinį. Palikite jį ten.

## Brėžiniai iš kitų programų

Kai brėžinys iš kitos programos turi geografinę vietą, CadCraft ją nuskaito:

- Jei nurodytas EPSG kodas, {{ui:Kur yra brėžinys}} rodo tą sistemą, o žemėlapio sluoksniai išdėstomi pagal ją.
- Jei CadCraft nežino sistemos (kitos programos savas jos pavadinimas, vietinis tinklelis ar mastelio koeficientas), vieta nenaudojama, bet ji išlaikoma ir įrašoma atgal tokia, kokia buvo, todėl kita programa ją vis tiek randa. Norėdami ją pakeisti, pasirinkite sistemą skiltyje {{ui:Kur yra brėžinys}}.

:::note
Žemėlapio sluoksniai rodomi tik ekrane: jie nespausdinami. Naudokite tik tokias žemėlapių paslaugas, kurių sąlygos tai leidžia, ir išlaikykite jų šaltinio nurodymą matomą.
:::
