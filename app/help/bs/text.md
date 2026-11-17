---
title: Dodavanje teksta i oznaka
summary: Postavi oznake prostorija jednorednim tekstom, napiši napomene koje se prelamaju pasus-tekstom upisanim direktno na crtež, i kasnije uređuj tekst.
keywords: tekst, dtext, mtext, mleader, multileader, vodilica, revcloud, revizioni oblak, oblak, pronađi, zamijeni, pronađi i zamijeni, pasus, prelamanje, razmak redova, oznaka, napomena, anotacija, visina, poravnanje, textmask, maska pozadine, maska, wipeout, rotacija, uredi tekst, ddedit, textedit, font
from: 4b76be99
---

## Šta ćeš napraviti

Dvije oznake prostorija, centrirane u svojim prostorijama, napomenu koja se prelama po svojoj širini, pa ispravku jedne od oznaka.

## Visina teksta i razmjera crteža

Visina teksta je u jedinicama crteža. U crtežu u milimetrima koji će se štampati u razmjeri 1:50, tekst visine 2.5 mm na papiru mora biti 2.5 × 50 = 125 jedinica visok u modelu. Na kartici lista crtaš u jedinicama papira, pa je tamo 2.5 zaista 2.5 mm na papiru.

## Postavi oznaku na sredinu

1. Upiši `DT` i pritisni {{key:Enter}} (ili klikni {{ui:Text}} na traci). Upit glasi `Specify start point of text [Justify]:`.
2. Upiši `J` i pritisni {{key:Enter}}.
3. Kod `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:` upiši `MC` i pritisni {{key:Enter}}.
4. Kod `Specify insertion point of text` klikni sredinu prostorije.
5. Kod `Specify height` upiši `250` i pritisni {{key:Enter}}.
6. Kod `Specify rotation angle of text <0>` pritisni {{key:Enter}}.
7. Kod `Enter text` upiši `KUHINJA` i pritisni {{key:Enter}}.

Oznaka se pojavi, centrirana na tačku na koju si kliknuo.

8. Na praznom upitu `Enter text` pritisni {{key:Enter}} da završiš komandu.

## Napiši napomenu koja se prelama

Pasus-tekst ({{cmd:MTEXT}}) se prelama po zadanoj širini i upisuje se direktno na crtež.

1. Upiši `T` i pritisni {{key:Enter}}, ili klikni {{ui:Paragraph}} na traci.
2. Kod `Specify first corner` klikni mjesto gdje ide gornji lijevi ugao napomene.
3. Ako prvo želiš promijeniti visinu, upiši `H`, pritisni {{key:Enter}}, upiši `250` i pritisni {{key:Enter}}.
4. Kod `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]` klikni desno od prvog ugla. Razmak između njih je širina po kojoj se tekst prelama; koliko dolje klikneš, to ga ne ograničava.
5. Otvara se okvir preko crteža s kursorom u njemu. Upiši `SVE KOTE SU U MILIMETRIMA OSIM AKO NIJE NAZNAČENO`. Riječi se prelamaju po širini dok kucaš.
6. Pritisni {{key:Enter}} da započneš novi pasus i upiši `PROVJERITI NA LICU MJESTA`.
7. Pritisni {{key:Mod+Enter}}, klikni {{ui:OK}} ili klikni bilo gdje van okvira. Napomena je jedan objekat.

Traka iznad okvira mijenja {{ui:Visina}}, {{ui:Razmak redova}} (1 je normalno, 1.5 je za polovinu više), {{ui:Širina}} (0 = bez prelamanja) i {{ui:Poravnanje}} dok kucaš. {{key:Esc}} ili {{ui:Otkaži}} zatvara okvir bez dodavanja ičega.

Opcije u drugom uglu: `H` visina, `J` poravnanje (`TL` gore lijevo … `BR` dolje desno: ugao ili sredina okvira koji ostaje na mjestu), `L` razmak redova, `R` rotacija, `W` upisana širina umjesto drugog ugla.

:::note
Dok je okvir otvoren, {{key:Space}} upisuje razmak, a {{key:Enter}} počinje novi pasus. Sačuvani DWG čuva pasus-tekst kao MTEXT; DXF R12 nema pasus-tekst, pa se svaki red čuva kao zaseban tekst.
:::

### Nekoliko pojedinačnih redova umjesto toga

{{cmd:TEXT}} (`DT`) traži jedan red po red: svaki {{key:Enter}} počinje sljedeći red, 1.667 puta visine teksta niže, i svaki red je zaseban objekat. Pritisni {{key:Enter}} na praznom redu da završiš.

## Opcije poravnanja

| Opcija | Tačka na koju klikneš je |
|---|---|
| Lijevo (zadano) | Lijevi kraj osnovne linije |
| Centar | Sredina osnovne linije |
| Desno | Desni kraj osnovne linije |
| Sredina, MC | Sredina teksta, i po širini i gore-dolje |
| TL | Gornji lijevi ugao |

## Uredi tekst

1. Dvaput klikni tekstualni objekat. Otvara se u istom okviru kao novi pasus-tekst, s kursorom na kraju.
2. Promijeni riječi.
3. Pritisni {{key:Mod+Enter}} ili klikni van okvira. Tekst na crtežu se mijenja; {{key:Esc}} ga ostavlja kakav je bio.

{{cmd:TEXTEDIT}} (`ED`) radi isto: biraš jedan tekst za drugim, i pritisneš {{key:Enter}} kad završiš.

Odaberi tekst da ga promijeniš u desnom panelu: {{ui:Tekst}}, {{ui:Visina}}, {{ui:Širina prelamanja}} (0 = bez prelamanja), {{ui:Razmak redova}}, {{ui:Rotacija}}, X i Y položaj i {{ui:Poravnanje}}. Lista {{ui:Poravnanje}} nudi i Dolje lijevo, koje tekst iz drugih programa ponekad koristi.

## Formatiranje unutar pasus-teksta iz drugih programa

Pasus-tekst u DWG ili DXF može sadržavati kodove unutar sebe: boje po riječima, podebljano i kurziv, podvučeno, nadvučeno i precrtano, složene razlomke kao 1/2, i drugu visinu za pojedinu riječ. CadCraft zadržava te kodove, crta ih (na ekranu i u štampanom PDF-u) i vraća ih pri snimanju nepromijenjene.

Kad mijenjaš takav tekst (dvostrukim klikom, {{cmd:TEXTEDIT}}, poljem Tekst u desnom panelu ili {{cmd:FIND}} sa zamjenom), mijenjaš njegove obične riječi. Riječ koju upišeš ide u dio uz nju i preuzima njenu boju i stil; ostali kodovi ostaju gdje jesu. Ako ponovo upišeš brojeve složenog razlomka, taj razlomak postaje običan tekst. Postavljanje cijelog teksta iz polja Tekst zadržava kodove samo tamo gdje može prepoznati koje su riječi ostale.

Imena fontova (`\F`) se zadržavaju i snimaju, ali se sve crta jednim fontom u stilu Helvetica. Još nema trake za upisivanje kodova.

## Pokaži na nešto: višestruke vodilice

{{ui:Vodilica}} u grupi {{ui:Anotacije}} ({{cmd:MLEADER}}, `MLD`) crta strelicu, vodilicu, kratak ispust i napomenu, kao jedan objekat.

1. Klikni {{ui:Vodilica}}. Kod `Specify leader arrowhead location` klikni ono na šta se napomena odnosi.
2. Kod `Specify leader landing location` klikni gdje ide napomena. Ispust se okreće prema strani na koju si kliknuo.
3. Upiši napomenu u okvir koji se otvori i pritisni {{key:Mod+Enter}}.

`A` i `L` na prvo pitanje postavljaju veličinu strelice i dužinu ispusta; visina teksta dolazi iz {{ui:Visina teksta}} za nove kote, pomnožena s {{ui:Opšta razmjera}}. Dvaput klikni višestruku vodilicu da promijeniš riječi. Hvatišta pomjeraju strelicu i ispust; napomena prati ispust. U {{ui:Svojstva}}: {{ui:Tekst}}, {{ui:Visina}}, {{ui:Širina prelamanja}}, {{ui:Veličina strelice}} i {{ui:Dužina ispusta}}.

:::note
Višestruke vodilice se snimaju kao prave višestruke vodilice u DWG. DXF nema višestruku vodilicu u R12 ili 2000, pa se tamo snimaju kao linije, strelica i tekst koje crtaju.
:::

## Označi promjene revizionim oblakom

{{ui:Anotacije}} › {{ui:Više}} › {{ui:Revizioni oblak}} ({{cmd:REVCLOUD}}, `RC`) crta oblak lukova oko onoga što se promijenilo. Historija pokazuje dužinu luka i vrstu koju će koristiti.

- **Pravougaoni** (prvi put): klikni dva ugla.
- `P` **Poligonalni**: klikni uglove, {{key:Enter}} zatvara oblak.
- `F` **Slobodnoruki**: klikni gdje počinje i pomjeraj pokazivač oko područja bez klikanja; dodaje se luk na svaku dužinu luka. Klikni ili pritisni {{key:Enter}} da zatvoriš.
- `O` **Objekat**: odaberi zatvorenu poliliniju, krug ili elipsu (ili liniju, luk ili otvorenu poliliniju); on postaje oblak. `Reverse direction?` `Y` okreće lukove prema unutra.
- `A` **Dužina luka**: dužina svakog luka. Odaberi onu koja odgovara razmjeri štampe.

Oblak je zatvorena polilinija lukova, pa se snima u svakom formatu.

## Pronađi i zamijeni riječi

{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Pronađi i zamijeni}} ({{cmd:FIND}}) pretražuje tekst, vrijednosti atributa blokova i tekst kota na otvorenoj kartici (ili samo u odabranim objektima).

1. Upiši riječi u {{ui:Pronađi}}. Lista pokazuje svako mjesto gdje se nalaze, i broj.
2. Odaberi {{ui:Razlikuj velika i mala slova}}, {{ui:Samo cijele riječi}} ili {{ui:Koristi zamjenske znakove (* i ?)}} ako ti trebaju, i odštikliraj ono gdje ne treba tražiti.
3. Klikni {{ui:Odaberi pronađeno}} da odabereš te objekte, ili upiši nove riječi u {{ui:Zamijeni sa}} (lista pokazuje u šta se svaka pretvara) i klikni {{ui:Zamijeni sve}}. Jedno {{key:Mod+Z}} poništava svaku zamjenu.

Izmjerena vrijednost kote nije tekst, pa se nikad ne zamjenjuje: u `<> TYP.` može se zamijeniti samo `TYP.`.

## Sakrij linije iza oznake

1. Odaberi tekstove, upiši {{cmd:TEXTMASK}} i pritisni {{key:Enter}}.
2. `B` boji pozadinu crteža iza njih; `C` traži broj boje. `O` uklanja masku.
3. `Border offset factor`: {{key:Enter}} zadržava 1.5, pola visine teksta oko teksta.

Maska pokriva linije ispod teksta, na ekranu i kad štampaš. DWG 2004 ili noviji i DXF 2000 je zadržavaju; DWG format 2000 i DXF R12 ne mogu, i snimanje to kaže.

## Font

Sav tekst se crta fontom u stilu Helvetica, na ekranu i u PDF-ovima. Tekst iz otvorenih crteža zadržava svoje riječi, visinu i položaj, ali ne i originalni font (ime fonta unutar pasus-teksta se čuva u datoteci, vidi gore).

U štampanim PDF-ovima tekst bilo kojeg evropskog pisma, ćirilice ili grčkog se štampa kao on sam (PDF nosi slova koja su mu potrebna, a tekst i dalje možeš označiti i pretraživati). Kineski, japanski i korejski tekst se također štampa kao on sam (štampa pri prvom korištenju preuzme veći font). Arapski, perzijski, urdu i hebrejski tekst se također štampa kao on sam (vidi sljedeći odjeljak). Znakovi za koje nijedan font nema slovo štampaju se kao "?", a historija kaže koliko ih je bilo.

## Tekst zdesna ulijevo: arapski, perzijski, urdu, hebrejski

Upiši tekst kao i bilo gdje drugo: {{cmd:TEXT}} i {{cmd:MTEXT}} crtaju svaki red redoslijedom čitanja. Red čije je prvo slovo arapsko ili hebrejsko čita se zdesna ulijevo; brojevi i latinske riječi unutar njega zadržavaju svoj redoslijed slijeva nadesno, a slova arapskog pisma su spojena. Red koji počinje latiničnim slovom ostaje slijeva nadesno, s riječima zdesna ulijevo na svom mjestu unutar njega. Svaki pasus višeredovnog teksta ima svoj smjer, a prelomljeni pasus ga zadržava u svakom redu.

Tekst se čuva kako si ga upisao, pa DWG i DXF datoteke razmjenjuju ga s drugim programima nepromijenjen. Tačka umetanja i poravnanje ({{ui:Lijevo}}, {{ui:Centar}}, {{ui:Desno}}) znače istu stranu kao za bilo koji tekst: napomena zdesna ulijevo koja treba visjeti s desnog kraja treba {{ui:Desno}}.

Na ekranu slova dolaze iz fontova tvog sistema. U štampanom PDF-u hebrejski koristi isti ugrađeni font kao latinički tekst; tekst arapskog pisma učini da štampa preuzme još jedan font (manji od 1 MB, jednom), i cijeli PDF se tada štampa tim fontom. Taj font nema vlastiti oblik za tri urdu znaka (heh goal, yeh barree i urdu tačku): štampaju se kao oblik najbližeg arapskog slova. Crtež koji ima i tekst arapskog pisma i kineski, japanski ili korejski tekst štampa jedno od to dvoje kao "?", jer štampa nosi jedan font. Tekst u učitanom SHX fontu se poredi i spaja kad font ima slova na svojim Unicode mjestima; za stare fontove čija su slova već oblikovana koristi {{ui:Obrni (R)}} u {{cmd:SHXFONTS}} kao i ranije.

## Česte greške

- **Tekst je premali da bi se vidio.** Visina je u jedinicama crteža. U velikom crtežu koristi veliku visinu (vidi gore), ili uvećaj prikaz.
- **Komanda je završila nakon jednog reda.** Pritisnuo si {{key:Enter}} na praznom redu u {{cmd:TEXT}}. Pokreni je ponovo, ili koristi pasus-tekst (`T`), gdje {{key:Enter}} počinje novi pasus.
- **`T` je otvorilo okvir umjesto da traži red.** Kao u AutoCAD-u, `T` je pasus-tekst ({{cmd:MTEXT}}); tekst u jednom redu je `DT`.
- **Tekst se prelama na drugom mjestu nego u AutoCAD-u.** CadCraft prelama s širinama fonta Helvetica; drugi font može riječ staviti malo više ili malo manje u red.
- **Tekst u zrcalnoj kopiji.** Postavljen je zrcalno, ali ostaje čitljiv slijeva nadesno.
