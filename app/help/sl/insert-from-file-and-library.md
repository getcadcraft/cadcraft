---
title: Vstavite iz datoteke ali knjižnice
summary: Blok ali celotno risbo prinesite iz druge datoteke DWG ali DXF, elemente postavite iz Knjižnice, datoteke ali druge knjižnice, z njihovimi zaslužki in posodobitvami.
keywords: vstavi, datoteka, knjižnica, librarycraft, element, oprema, blok iz druge risbe, wblock, design center, zasluge, navedba avtorja, licenca, posodobitev, vir, item.json
from: f6e4e452
---

## Vstavite blok iz druge risbe

1. Vnesite `I` in pritisnite {{key:Enter}}, ali kliknite {{ui:Vstavi}} v skupini Bloki.
2. Ukazna vrstica na dnu okna vpraša `Enter block name or [File/Library]`. Tam vnesite `F` in pritisnite {{key:Enter}}.
3. Izberite DWG ali DXF na tem računalniku. Prebere se tukaj; ne odpre se in nič se ne naloži.
4. V pogovornem oknu {{ui:Vstavi iz}} izberite blok s seznama (v {{ui:Filtriraj bloke}} vnesite, da ga najdete), ali pustite celotno risbo. Kliknite {{ui:Vstavi}}.
5. Kliknite, kamor gre, in izpolnite atribute, če jih zahteva.

Začnete lahko tudi v podoknu {{ui:Bloki}}: v njegovem polju {{ui:Filtriraj bloke}} vnesite `F` in pritisnite {{key:Enter}}, ali vnesite nekaj, kar se ne ujema z nobenim blokom, in kliknite {{ui:Iz datoteke…}}. `L` in {{ui:Knjižnica …}} odprejo knjižnico na enak način. Pred različico 0.10.1 je črka, vnesena v {{ui:Filtriraj bloke}}, iskala samo bloke te risbe in odgovorila "No block matches the filter."

Če želite imeti pri roki risbo lastnih blokov, kliknite {{ui:Dodaj risbo}} pod {{ui:Knjižnice}} v podoknu {{ui:Bloki}} in izberite DWG ali DXF. Njeni bloki so navedeni s slikami; kliknite enega, da ga postavite.

Cela risba se vstavi kot en blok, ki dobi ime po datoteki. Vstavijo se tudi bloki znotraj izbranega bloka. Sloji, ki jih uporabljajo, se dodajo tej risbi.

Če je druga risba v drugih enotah (na primer palci in milimetri), CadCraft sklic ustrezno skalira in to zapiše v zgodovini.

### Ko je ime že v uporabi

Če ima ta risba že blok z enakim imenom, vas CadCraft vpraša:

- {{ui:Ohrani obstoječe}} uporabi blok te risbe s tem imenom.
- {{ui:Preimenuj}} vstavi novega kot `Name (2)`.

Celotno vstavljanje je en korak: {{key:Mod+Z}} odstrani sklic in kopirane definicije.

## Odprite knjižnico

Kliknite {{ui:Knjižnica …}} v podoknu {{ui:Bloki}}, ali {{ui:Knjižnica}} v skupini Bloki, ali vnesite `LIB`. Pri pozivu `INSERT` tudi `L` odpre knjižnico.

Knjižnica ima štiri vire, kot zavihke:

- {{ui:Knjižnica}}: knjižnica CadCraft. Iščite po imenu, proizvajalcu ali modelu in filtrirajte po kategoriji.
- {{ui:Datoteke …}}: datoteka elementa (`item.json`) iz katere koli knjižnice ali risba, preglednica ali 3D model, iz katerih naredite elemente: DWG ali DXF (vsak blok postane element), CSV s stolpcema ime in velikost ali model glTF ali OBJ. Ničesar se ne naloži.
- {{ui:Standardno}}: jeklene profile (kot prereze, poglede ali 3D elemente) in standardne dele, kot so vijaki, matice in ležaji, narejene tukaj iz objavljenih tabel. Glejte [Postavitev jeklenih profilov in standardnih delov](topic:steel-and-standard-parts).
- {{ui:Drugi viri}}: druge knjižnice, ki odgovarjajo enako kot Knjižnica. Naslov dodate enkrat; ta brskalnik si ga zapomni.

Vsaka kartica prikaže predogled, ime, proizvajalca in model, licenco ter različico. Umaknjen element je označen z {{ui:Umaknjeno}} in razlogom; CadCraft vas vpraša, preden postavite enega.

## Postavite element

1. Kliknite {{ui:Postavi}} na kartici.
2. Kliknite, kamor gre element. Najprej vnesite `R`, da ga zasukate, ali `S`, da ga skalirate.
3. Pri `Enter Item number (CC-ITEM)` pritisnite {{key:Enter}} za naslednjo prosto številko ali vnesite svojo.

Element postane blok z imenom `LIB_<name>_v<version>`, narisan v enotah te risbe. Če risba nima enot, element pride v milimetrih in zgodovina to pove; najprej nastavite {{ui:Enote}} v desnem podoknu.

Njegovi podatki potujejo z njim kot nevidni atributi: id elementa in različica, licenca in navedba avtorja, proizvajalec, model, kategorija in velikosti. Glejte [Atributi blokov](topic:attributes).

## Elementi v vašem jeziku

Element lahko nosi svoje ime in opis v drugih jezikih. Ko jih ima v jeziku, na katerega je nastavljen CadCraft (Nastavitve › Splošno › Jezik), kartica in ime elementa postavljenega bloka uporabita te. Sam blok ohrani ime, narejeno iz imena elementa, zato ima risba en blok na element, ne glede na to, kateri jezik ga je postavil.

## Preverite posodobitve

1. Odprite knjižnico.
2. Kliknite {{ui:Preveri posodobitve}}.

Vsak element knjižnice v risbi je naveden s številkami elementov in tem, ali je posodobljen, ima novejšo različico (in kaj se je spremenilo) ali je bil umaknjen. Kliknite {{ui:Posodobi}} v vrstici ali {{ui:Posodobi vse}}. Vsak sklic preide na blok nove različice in ohrani svojo številko elementa, količino, mesto, kot in sloj. {{key:Mod+Z}} razveljavi posodobitev.

## Navedite, kar ste uporabili

Kliknite {{ui:Zasluge knjižnice}}. Vsak element je naveden z vrstico navedbe avtorja in licenco.

- {{ui:Kopiraj navedbo avtorja}} kopira vrstico enega elementa; {{ui:Kopiraj vse}} kopira vsako vrstico.
- {{ui:Prenesi CSV}} shrani seznam s številkami elementov, proizvajalci, modeli, licencami in navedbami avtorjev. Odpre se v katerem koli preglednicah.

Licence, kot je CC BY, zahtevajo, da navedete avtorja, kjer uporabljate delo. Vrstice postavite na risbo, v specifikacijo ali v projektne zapiske.

## Simboli in sredstva

Knjižnica ima tri vrste elementov: Simboli (risarske konvencije, 2D), Tipi (iz česa je element narejen) in Sredstva (fizični predmeti). V zavihku {{ui:Knjižnica}} seznam {{ui:Vrsta elementa}} prikaže Simbole in sredstva skupaj, samo Simbole ali samo Sredstva. Tipi so tisto, iz česa je zgrajen projekt BimCraft, zato jih CadCraft ne navaja.

## Prijava v knjižnico

Kliknite {{ui:Prijava v knjižnico}}. Odpre se majhno okno na spletnem mestu; ko se tam prijavite, lahko CadCraft prikaže elemente vaše ekipe in zabeleži, kar postavite, da izveste, ko se element, ki ste ga uporabili, spremeni. Prijava velja za ta zavihek brskalnika. Kadar koli jo lahko prekličete na strani varnosti vašega računa.

## Hranite lastne objekte v {{ui:Moji objekti}}

{{ui:Moji objekti}} je zasebni seznam v Knjižnici, ki ga vidite samo vi. Ni v javni knjižnici, ni v iskanju in ga ekipa ne vidi; sledi vašemu računu na vsakem računalniku, kjer se prijavite v knjižnico.

1. V podoknu Knjižnica kliknite {{ui:Datoteke …}} in preberite datoteko.
2. Pri elementu, ki ga želite znova, kliknite {{ui:Shrani v moje objekte}}.
3. Pozneje kliknite {{ui:Moji objekti}} in kliknite {{ui:Postavi}}. Postavi se kot kateri koli element knjižnice, in {{ui:Preveri posodobitve}} ga zajame.
4. {{ui:Odstrani iz mojih objektov}} ga vzame s seznama. Kopije, že postavljene v risbe, ostanejo.

Morate biti prijavljeni v knjižnico. Branje datoteke ničesar ne naloži; shranjevanje elementa pošlje samo ta element na vaš račun.

:::note
Moji objekti se preizkušajo in morda še niso odprti za vaš račun. Če piše "My objects is not open for this account yet" (Moji objekti še niso odprti za ta račun), lahko še vedno postavite elemente iz svojih datotek z {{ui:Datoteke …}}.
:::

## Pogoste napake

- **"Making items from IFC types is in BimCraft."** Datoteke IFC in družin so prebrane v aplikaciji BimCraft. Element naredite tam ali v Knjižnici, nato tukaj uporabite njegov `item.json`.
- **"The library could not be reached."** Ste brez povezave ali knjižnica ne deluje. Elementi, ki so že v risbi, niso prizadeti.
- **Element je zelo prevelik ali premajhen.** Enote risbe so napačne ali niso nastavljene. Razveljavite, nastavite {{ui:Enote}} in ga znova postavite.
