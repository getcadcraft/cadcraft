---
title: Vstavljanje iz datoteke ali knjižnice
summary: Uvozite blok ali celotno risbo iz drugega DWG ali DXF ter postavite elemente iz knjižnice, datoteke ali druge knjižnice, z njihovimi navedbami avtorjev in posodobitvami.
keywords: vstavi, datoteka, knjižnica, librarycraft, element, oprema, blok iz druge risbe, wblock, design center, navedba avtorja, zasluge, licenca, posodobitev, vir, item.json
from: 316188d2
---

## Vstavite blok iz druge risbe

1. Vtipkajte `I` in pritisnite {{key:Enter}}, ali kliknite {{ui:Vstavi}} v skupini {{ui:Bloki}}.
2. Pri `Vnesite ime bloka ali [Datoteka (F)/Knjižnica (L)]` vtipkajte `F` in pritisnite {{key:Enter}}.
3. Izberite DWG ali DXF na tem računalniku. Prebere se tukaj; ne odpre se in ničesar ne naložite.
4. V pogovornem oknu {{ui:Vstavi iz}} izberite blok s seznama (vtipkajte v {{ui:Filtriraj bloke}}, da ga najdete), ali pustite {{ui:Celotna risba}}. Kliknite {{ui:Vstavi}}.
5. Kliknite, kam naj gre, in izpolnite atribute, če jih zahteva.

Celotna risba pride kot en blok, poimenovan po datoteki. Pridejo tudi bloki znotraj izbranega bloka. Sloji, ki jih uporabljajo, se dodajo tej risbi.

Če je druga risba v drugih enotah (recimo palci in milimetri), CadCraft prilagodi merilo sklica in to zapiše v zgodovino.

### Ko je ime že v uporabi

Če ta risba že ima blok s istim imenom, CadCraft vpraša:

- {{ui:Ohrani obstoječe}} uporabi blok tega imena iz te risbe.
- {{ui:Preimenuj}} pripelje novega kot `Ime (2)`.

Celotno vstavljanje je en korak: {{key:Mod+Z}} odstrani sklic in kopirane definicije.

## Odprite knjižnico

Kliknite {{ui:Knjižnica …}} v podoknu {{ui:Bloki}}, ali {{ui:Knjižnica}} v skupini Bloki, ali vtipkajte `LIB`. Pri pozivu `INSERT` tudi `L` odpre knjižnico.

Knjižnica ima štiri vire, kot zavihke:

- {{ui:Knjižnica}}: knjižnica CadCraft. Iščite po imenu, proizvajalcu ali modelu in filtrirajte po kategoriji.
- {{ui:Datoteke …}}: datoteka elementa (`item.json`) iz katere koli knjižnice ali risba, preglednica ali 3D model, iz katerega naredite elemente: DWG ali DXF (vsak blok postane element), CSV s stolpcema ime in velikost, ali model glTF ali OBJ. Nič se ne naloži.
- {{ui:Standard}}: jekleni profili (kot prerezi, pogledi ali 3D elementi) in standardni deli, kot so vijaki, matice in ležaji, izdelani tukaj iz objavljenih tabel. Glejte [Postavitev jeklenih profilov in standardnih delov](topic:steel-and-standard-parts).
- {{ui:Drugi viri}}: druge knjižnice, ki odgovarjajo enako kot Knjižnica. Naslov dodajte enkrat; ta brskalnik si ga zapomni.

Vsaka kartica prikaže predogled, ime, proizvajalca in model, licenco ter različico. Umaknjen element je označen z {{ui:Umaknjeno}} in razlogom; CadCraft vpraša, preden ga postavite.

## Postavite element

1. Kliknite {{ui:Postavi}} na kartici.
2. Kliknite, kam naj gre element. Najprej vtipkajte `R`, da ga zasukate, ali `S`, da ga spremenite v merilu.
3. Pri `Vnesite številko elementa (CC-ITEM)` pritisnite {{key:Enter}} za naslednjo prosto številko ali vtipkajte svojo.

Element postane blok z imenom `LIB_<ime>_v<različica>` in je narisan v enotah te risbe. Če risba nima enot, element vstavi v milimetrih in to zapiše zgodovina; najprej nastavite {{ui:Enote}} v desnem podoknu.

Podatki se prenesejo kot nevidni atributi: številka in različica elementa, licenca in navedba avtorja, proizvajalec, model, kategorija in velikosti. Glejte [Atributi bloka](topic:attributes).

## Elementi v vašem jeziku

Element lahko nosi svoje ime in opis v drugih jezikih. Če jih ima v jeziku, na katerega je nastavljen CadCraft (Nastavitve › Splošno › Jezik), kartica in ime elementa na bloku uporabita te. Sam blok ima ime, narejeno iz lastnega imena elementa, zato ima risba en blok na element, ne glede na to, v katerem jeziku ga je kdo postavil.

## Preverite posodobitve

1. Odprite knjižnico.
2. Kliknite {{ui:Preveri posodobitve}}.

Vsak element knjižnice v risbi je naveden s svojimi številkami in s tem, ali je posodobljen, ima novejšo različico (in kaj se je spremenilo) ali je bil umaknjen. Kliknite {{ui:Posodobi}} pri vrstici ali {{ui:Posodobi vse}}. Vsak sklic se premakne na blok nove različice in ohrani svojo številko elementa, količino, mesto, kot in sloj. {{key:Mod+Z}} razveljavi posodobitev.

## Navedite, kar ste uporabili

Kliknite {{ui:Zasluge knjižnice}}. Vsak element je naveden z vrstico navedbe avtorja in licenco.

- {{ui:Kopiraj navedbo avtorja}} kopira vrstico enega elementa; {{ui:Kopiraj vse}} kopira vse vrstice.
- {{ui:Prenesi CSV}} shrani seznam s številkami elementov, proizvajalci, modeli, licencami in navedbami avtorjev. Odpre se v katerem koli preglednem programu.

Licence, kot je CC BY, zahtevajo, da navedete avtorja, kjer uporabite delo. Vrstice postavite na risbo, v specifikacijo ali v projektne opombe.

## Simboli in sredstva

Knjižnica ima tri vrste elementov: Simboli (risalne konvencije, 2D), Tipi (iz česa je element narejen) in Sredstva (fizični predmeti). V zavihku {{ui:Knjižnica}} seznam {{ui:Vrsta elementa}} prikaže Simbole in sredstva skupaj, samo Simbole ali samo Sredstva. Tipi so tisto, iz česa je zgrajen projekt BimCraft, zato jih CadCraft ne prikaže.

## Prijava v knjižnico

Kliknite {{ui:Prijava v knjižnico}}. Odpre se majhno okno na spletnem mestu; ko ste tam prijavljeni, lahko CadCraft prikaže elemente vaše ekipe in zabeleži, kar postavite, da izveste, kadar se spremeni element, ki ste ga uporabili. Prijava velja za ta zavihek brskalnika. Kadar koli jo prekličete na strani z varnostnimi nastavitvami vašega računa.

## Pogoste napake

- **„Izdelava elementov iz tipov IFC je v BimCraftu.“** Datoteke IFC in družin se berejo v programu BimCraft. Element tam izdelajte ali v Knjižnici, nato tukaj uporabite njegovo datoteko `item.json`.
- **„Knjižnice ni mogoče doseči.“** Ste brez povezave ali pa je knjižnica nedosegljiva. Elementi, ki so že v risbi, niso prizadeti.
- **Element je preveliko ali premajhen.** Enote risbe so napačne ali niso nastavljene. Razveljavite, nastavite {{ui:Enote}} in ga postavite znova.
