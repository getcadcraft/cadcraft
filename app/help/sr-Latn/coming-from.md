---
title: Prelazak sa drugog softvera za crtanje
summary: Kako poznate komande, tasteri i navike odgovaraju u CadCraft-u, i razlike koje zbunjuju iskusne crtače.
keywords: prelazak, razlike, migracija, navike, skraćenice, dinamički unos, pickfirst, pickadd, qsave, saveas, sačuvaj kao, mtext, ctb, polarno praćenje, xref, prečice sa tastature, poznato, copyclip, pasteclip, pasteorig, copybase, klipbord
from: b58688e7
---

Ako ste koristili AutoCAD ili program zasnovan na istom modelu, većina onoga što znate radi i ovde: komandna linija, skraćenice kao što su `L`, `C`, `TR` i `O`, Enter ili Space za ponavljanje, izbor prozorom i ukrštanjem, hvatanje za objekte na F3, Ortogonalno na F8, prostor modela sa rasporedima i prozorima pogleda. Ova stranica navodi šta se direktno poklapa, a zatim razlike koje iznenade ljude. Pročitajte i drugu polovinu, čak i ako prvu samo preletite.

## Šta se direktno poklapa

| Navika | U CadCraft-u |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Iste komande, iste skraćenice |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Isto |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Iste komande za kote |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` ukucane u komandnoj liniji | Isto, za nove kote |
| `B` za pravljenje bloka, `I` za umetanje, `PU` za čišćenje | Isto (čišćenje uklanja samo neiskorišćene blokove) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` pa `E` ili `W` | Isto |
| Ukucavanje `_LINE` ili `-LAYER` iz skripte ili navike | Vodeći `_`, `-`, `.` ili `'` se ignoriše |
| Enter ili Space na praznom upitu ponavlja poslednju komandu | Isto |
| Esc otkazuje; još jedan Esc briše izbor | Isto |
| `@dx,dy`, `@d<a`, uneseni uglovi suprotno od smera kazaljke od istoka | Isto |
| Prozor sleva nadesno, ukrštanje sdesna nalevo, klik-klik; pritisni i prevuci za lasso, Space menja prozor / ukrštanje / ogradu (LASSOMODE) | Isto |
| Prvo izaberi, pa komandu (imenica-glagol) | Isto; završena komanda briše izbor |
| `ALL` i `L` na upitu Izaberi objekte | Isto |
| Shift+klik uklanja iz izbora | Isto. Podešavanja mogu da učine da klik zameni izbor, kao PICKADD 0: pogledajte [Podešavanja CadCraft-a](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Iste komande i tasteri; lepljenje postavlja kopiju po donjem levom uglu, kao PASTECLIP |
| F3 hvatanje za objekte, F7 mreža, F8 Ortogonalno | Isti tasteri |
| Dvostruki klik na točkić za zum na obuhvat | Isto |
| Ogledalski tekst ostaje čitljiv | Isto (kao MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Isto; na Mac-u radi i Command |

[Referenca komandi](topic:commands) navodi svaku komandu i skraćenicu.

:::tip
Ako vam se sviđa traka AutoCAD-a, izaberite stil menija {{ui:Klasičan crtački}} u {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Meniji, tasteri i miš}}: kartice Početak, Umetanje, Anotacija, Parametarski, Pogled, Upravljanje i Izlaz iznad iste komandne linije, srednje dugme pomera pogled, a desni klik je Enter. Pogledajte [Meniji, tasteri i miš](topic:menus-keys-and-mouse).
:::

[Mapa komandi](topic:command-map) navodi svaku komandu CadCraft-a sa kratkim imenima, a [kratki pregled](topic:cheat-sheet) 40 koje ćete najviše koristiti (i kao PDF na jednoj strani).

## Razlike koje zbunjuju ljude

### Uneseni pokazivači su apsolutni

Kada je dinamički unos uključen, drugi program tretira uneseno `100,0` za drugu tačku kao relativno. **Komandna linija CadCraft-a to ne radi:** tu se `x,y` uvek meri od koordinatnog početka. Kada je {{ui:Dinam}} ({{key:F12}}) uključeno, koristite njegova polja: rastojanje, {{key:Tab}}, ugao. Koristite `@100,0` za „100 desno od poslednje tačke“, ili pomerite ukrštanje na pravu stranu i ukucajte samo `100`.

### Shift preskače hvatanje; ne uključuje Ortogonalno

Držanje Shift-a dok kliknete ignoriše hvatanje za objekte za taj klik. Ne uključuje privremeno Ortogonalno. Koristite F8 ili taster {{ui:Ortogonalno}}.

### Desni klik je uvek Enter

Nema kontekstnog menija desnim klikom. Desni klik u crtežu je Enter: završava komandu, završava izbor ili ponavlja poslednju komandu. Tokom pomeranja hvatišta ili okvira za izbor, umesto toga otkazuje. Prevucite desnim dugmetom da pomerate pogled.

### Nema pomeranja razmaknicom

Space je Enter, pa držanje Space-a i prevlačenje ne pomera pogled. Pomerajte srednjim ili desnim dugmetom, ili umanjite pa ponovo uvećajte na drugom mestu točkićem.

### Skraćivanje i produživanje

Skraćivanje i Produživanje počinju u brzom režimu: svaki vidljivi objekat je rezna ivica ili granica, deo ispod pokazivača pokazuje šta će nestati, prevučena putanja skraćuje svaki deo koji prelazi, a objekat koji ništa ne prelazi se briše. Space prebacuje između skraćivanja i produživanja. `O` prelazi na standardni režim (prvo izaberite ivice), `F` i `C` su ograda i ukrštanje, `E` je EDGEMODE, `R` briše. Nema opcije `P` (Projekcija): CadCraft skraćuje u ravni crteža.

### Zaobljenje i obaranje ivice

{{cmd:FILLET}} i {{cmd:CHAMFER}} imaju opcije koje poznajete: Opozovi (U), Polilinija (P), Poluprečnik (R) (ili Rastojanje (D), Ugao (A) i Metoda (E)), Skraćivanje (T) i Više (M), a {{key:Shift}}+klik daje oštar ugao. Zaobljenje između polilinije i linije dodaje luk kao zaseban objekat umesto da ga spoji u poliliniju, a uglovi polilinije uz segment luka ostaju kakvi jesu.

### Paragraf teksta i jednoredni tekst

`T`, `MT` i `MTEXT` su paragrafski tekst unet na mestu, sa širinom, proredom i poravnanjem; `DT` i `DTEXT` su jednoredni tekst, kako ga poznajete. Nema stilova teksta ni kolona, i još uvek ne možete da unosite formatiranje unutar teksta (podebljano, složeni razlomci); formatiranje koje dolazi iz datoteke se čuva, crta i snima (pogledajte [Dodavanje teksta i oznaka](topic:text#formatting-inside-paragraph-text-from-other-programs)). Sve se crta fontom u stilu Helvetica.

### Sačuvaj znači „preuzmi kopiju“

{{key:Mod+S}}, `SAVE` i `QSAVE` preuzimaju kopiju u formatu crteža: DWG koji ste otvorili čuva se kao DWG, DXF kao DXF. U pregledaču ništa se ne prepisuje na mestu, a otvorene datoteke se nikad ne menjaju. U CadCraft Studio-u {{key:Mod+S}} upisuje nazad u datoteku koju ste otvorili.

`SAVEAS` ({{key:Mod+Shift+S}}) je mali dijalog, a ne pregledač datoteka: izaberite {{ui:DWG}} (sa poljem {{ui:Verzija}}, AutoCAD 2000 do 2018), {{ui:DXF R12}} ili {{ui:DXF 2000}} i kliknite {{ui:Sačuvaj}}. Pregledač odlučuje gde ide preuzimanje. `DXFOUT` uvek preuzima DXF R12.

DWG koji ste otvorili čuva se u verziji u kojoj je stigao; novi crtež se čuva u formatu AutoCAD 2000, osim ako izaberete drugi. Listovi, kote i šablone šrafure se čuvaju. Pogledajte [Datoteke: šta se otvara, šta se čuva](topic:files#saving).

### Slojevi: jednostavnije

- Svaka promena sloja (uključi, zamrzni, zaključaj, boja, štampanje, tip linije, debljina, tekući sloj) je jedan korak opozivanja.
- Isključivanje i zamrzavanje imaju isti efekat u CadCraft-u.
- Slojevi koje crtež zamrzava u jednom prozoru pogleda ostaju zamrznuti tamo: na ekranu, u štampanjima i kada ga sačuvate kao DWG ili DXF.
- Prozor pogleda koji prikazuje sloj sopstvenom bojom, tipom linije, debljinom ili providnošću to zadržava na ekranu, u štampanjima i u sačuvanom DWG-u (DXF čuva sopstvena podešavanja sloja; čuvanje to kaže). Menjanje po prozoru pogleda još nije napravljeno.
- Nema upravljača svojstvima slojeva ni stanja slojeva; {{cmd:RENAME}}, {{cmd:LAYMRG}} i {{cmd:LAYDEL}} preimenuju, spajaju i brišu slojeve. Tipovi linija i debljine se podešavaju u desnom panelu (pogledajte [Debljine linija i tipovi linija](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} i {{cmd:LAYMCUR}} rade biranjem.
- Čuvanje u DXF R12 upisuje nazive slojeva velikim slovima. DWG ih čuva onako kako ste ukucali.

### Stilovi kota

`DIMSTYLE` otvara upravljač za imenovane stilove (novi, izmeni, postavi tekući, uporedi, primeni). `DIMSCALE` i ostala podešavanja i dalje menjaju ono što nove kote koriste, a svaka kota zadržava sopstvene veličine, koje možete promeniti i u panelu Svojstva. Tekući stil se ne čuva u datoteci. Kote prate format dužine crteža (decimalno, ili stope i inči sa {{cmd:UNITS}}), ili sopstveni {{ui:Format}}. Pogledajte [Podešavanje veličina kota](topic:dimension-settings).

### Štampanje je jednostavnije

Tabele stilova štampanja rade po boji, kao CTB datoteke: Monohromatska, Boja i Sive nijanse su ugrađene, možete napraviti sopstvenu, a svaki list zadržava svoju tabelu. Čitanje CTB datoteka napravljeno je prema objavljenom opisu i isprobano je samo na datotekama koje smo mi napravili; imenovane tabele stilova štampanja (STB) i podešavanja stranice još nisu napravljeni. Linije se štampaju svojom debljinom, ostalo jednom debljinom pera. Listovi se štampaju u razmeri 1:1 na sopstvenom papiru; model se štampa u izabranoj ili prilagođenoj razmeri. Pogledajte [Štampaj u PDF](topic:plot-pdf).

### Rad unutar prozora pogleda

Kao što poznajete: dvaput kliknite unutar prozora pogleda (ili ukucajte {{cmd:MSPACE}}) da radite na modelu kroz njega, a dvaput kliknite van njega (ili {{cmd:PSPACE}}) da se vratite na list. Unutra pomeranje i zum menjaju ono što prozor prikazuje, osim ako mu je prikaz zaključan; tada pomeraju list. Klik na karticu ispod crteža takođe napušta prozor pogleda. Pogledajte [Rad na modelu kroz prozor pogleda](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Praćenje i dinamički unos da, hvatanje za mrežu još ne

Mreža služi samo za gledanje; tačke se ne hvataju za nju (nema režima hvatanja na F9). Polarno praćenje ({{key:F10}}, korak podešen sa {{cmd:POLARANG}}) i praćenje hvatanja za objekte ({{key:F11}}: zadržite se na tački hvatanja da je preuzmete) rade kao što poznajete; pogledajte [Hvatanje za objekte](topic:object-snaps#polar-tracking). Dinamički unos ({{key:F12}}) pored ukrštanja prikazuje rastojanje i ugao (ili X i Y); pogledajte [Unos koordinata i rastojanja](topic:coordinate-entry#dynamic-input).

### Stope i inči

Izaberite {{ui:Format dužine}} {{ui:Arhitektonski}} ili {{ui:Inženjerski}} (ili ukucajte {{cmd:UNITS}}) i unosite dužine kako ih poznajete: `12'6"`, `12'6-1/2"`. Pre razlomka koristite crticu, a ne razmak: Space je Enter. Postavite i {{ui:Jedinice}} na {{ui:Inči}}, da bi listovi i štampanja nudili arhitektonske razmere. Format se čuva u sačuvanim DWG i DXF datotekama. Pogledajte [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopiranje i lepljenje ostaju unutar CadCraft-a

{{key:Mod+C}}, {{key:Mod+X}} i {{key:Mod+V}} kopiraju, seku i lepe objekte unutar crteža, između crteža i između CadCraft kartica u istom pregledaču. Privremena memorija (klipbord) je CadCraft-ova: ne možete nalepiti CadCraft objekte u drugi program, niti objekte iz drugog programa u CadCraft. Lepljenje iz crteža u drugim jedinicama ne menja razmeru: zatim koristite {{cmd:SCALE}}. {{key:Mod+D}} je dupliranje koje se pomera sa pokazivačem, dodatak CadCraft-a. Pogledajte [Kopiranje, lepljenje i dupliranje](topic:copy-paste).

### Tasteri pregledača koje ne možete koristiti

Veb stranica ne može da preuzme {{key:Mod+N}}, {{key:Mod+W}} ili {{key:Mod+T}} od pregledača: oni otvaraju i zatvaraju prozore i kartice. Koristite taster {{ui:Novo}} ili ukucajte `NEW`. Pogledajte [Tasteri, miševi i tačpedovi](common:keys).

## Komande koje možda tražite, a ovde ih još nema

{{cmd:TABLE}} nije napravljena. Ukucavanje javlja „Nepoznata komanda“. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} i {{cmd:XREF}} su napravljene.) [Još nije napravljeno](topic:not-built-yet) navodi šta da radite umesto toga.
