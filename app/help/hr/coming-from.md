---
title: Dolazak iz drugog programa za crtanje
summary: Kako poznate naredbe, tipke i navike preslikavaju se u CadCraft te razlike koje zbunjuju iskusne crtače.
keywords: prebacivanje, razlike, migracija, navike, aliasi, dinamički unos, pickfirst, pickadd, qsave, saveas, spremi kao, mtext, ctb, polarno praćenje, xref, tipkovnički prečaci, poznato, copyclip, pasteclip, pasteorig, copybase, međuspremnik
from: b58688e7
---

Ako ste koristili AutoCAD ili program izgrađen na istom modelu, većina onoga što znate radi i ovdje: naredbeni redak, aliasi poput `L`, `C`, `TR` i `O`, Enter ili Space za ponavljanje, odabir prozorom i križanjem, hvatanje objekata na F3, Ortho na F8, prostor modela s layoutima i viewportima. Ova stranica navodi što se izravno preslikava, a zatim razlike koje ljude zbunjuju. Pročitajte drugu polovicu čak i ako prvu samo prelistate.

## Što se izravno preslikava

| Navika | U CadCraftu |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Iste naredbe, isti aliasi |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Isto |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Iste naredbe za kotiranje |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` upisane u naredbeni redak | Isto, za nove kote |
| `B` za stvaranje bloka, `I` za umetanje, `PU` za čišćenje | Isto (čišćenje uklanja samo nekorištene blokove) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` pa `E` ili `W` | Isto |
| Upisivanje `_LINE` ili `-LAYER` iz skripte ili navike | Vodeći `_`, `-`, `.` ili `'` se zanemaruje |
| Enter ili Space na praznom upitu ponavlja zadnju naredbu | Isto |
| Esc otkazuje; Esc ponovno briše odabir | Isto |
| `@dx,dy`, `@d<a`, upisani kutovi suprotno od smjera kazaljke na satu, od istoka | Isto |
| Prozor s lijeva na desno, križanje s desna na lijevo, klik-klik; pritisak i povlačenje za laso, Space mijenja prozor / križanje / ogradu (LASSOMODE) | Isto |
| Prvo odaberite, zatim naredba (imenica-glagol) | Isto; završena naredba briše odabir |
| `ALL` i `L` pri Odaberi objekte | Isto |
| Shift+klik uklanja iz odabira | Isto. Postavke mogu učiniti da klik zamijeni odabir, kao PICKADD 0: pogledajte [Postavke CadCrafta](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Iste naredbe i tipke; lijepljenje postavlja kopiju po njezinom donjem lijevom kutu, kao PASTECLIP |
| F3 hvatanje objekata, F7 mreža, F8 Ortho | Iste tipke |
| Dvostruki klik na kotačić za zumiranje na sve | Isto |
| Zrcaljeni tekst ostaje čitljiv | Isto (kao s MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Isto; na Macu radi i Command |

[Referenca naredbi](topic:commands) navodi svaku naredbu i alias.

:::tip
Ako volite vrpcu AutoCADa, odaberite stil izbornika {{ui:Klasično crtanje}} u {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Izbornici, tipke i miš}}: kartice Home, Insert, Annotate, Parametric, View, Manage i Output iznad istog naredbenog retka, a srednja tipka pomiče prikaz dok je desni klik Enter. Pogledajte [Izbornici, tipke i miš](topic:menus-keys-and-mouse).
:::

[Karta naredbi](topic:command-map) navodi svaku naredbu CadCrafta s njezinim kratkim nazivima, a [podsjetnik](topic:cheat-sheet) 40 naredbi koje ćete najčešće koristiti (također kao jednostranični PDF).

## Razlike koje zbunjuju ljude

### Upisane točke su apsolutne

Uz uključen dinamički unos, drugi program tretira upisani `100,0` za drugu točku kao relativnu. **Naredbeni redak CadCrafta to ne čini:** tamo je `x,y` uvijek mjeren od ishodišta. Uz uključen {{ui:Dyn}} ({{key:F12}}) koristite njegova polja: udaljenost, {{key:Tab}}, kut. Upišite `@100,0` za „100 desno od zadnje točke“ ili pomaknite nitni križ u pravom smjeru i upišite samo `100`.

### Shift preskače hvatanje; ne uključuje Ortho

Držanje Shifta tijekom klika zanemaruje hvatanje objekata za taj klik. Ne prebacuje privremeno Ortho. Koristite F8 ili gumb {{ui:Orto}}.

### Desni klik je uvijek Enter

Nema izbornika desnog klika. Desni klik u crtežu je Enter: završava naredbu, završava odabir ili ponavlja zadnju naredbu. Tijekom pomicanja ručke ili okvira za odabir umjesto toga otkazuje. Povucite desnom tipkom za pomicanje prikaza.

### Nema pomicanja razmakom

Space je Enter, pa držanje Spacea i povlačenje ne pomiču prikaz. Pomičite srednjom ili desnom tipkom ili kotačićem smanjite prikaz pa ga ponovno uvećajte na drugom mjestu.

### Skrati i Produži

Skrati i Produži počinju u brzom načinu: svaki vidljivi objekt je rubna linija ili granica, komad ispod pokazivača pokazuje što će otići, povučena putanja skraćuje svaki komad koji prelazi, a objekt koji ništa ne prelazi se briše. {{key:Shift}} prebacuje između skraćivanja i produživanja. `O` prebacuje u standardni način (prvo odaberite rubove), `F` i `C` su ograda i križanje, `E` je EDGEMODE, `R` briše. Nema opcije `P` (Project): CadCraft skraćuje u ravnini crteža.

### Zaobljenje i skošenje

{{cmd:FILLET}} i {{cmd:CHAMFER}} imaju opcije koje poznajete: Poništi (U), Polilinija, Radijus (ili Udaljenost (D), Kut (A) i Način (E)), Skrati (T) i Višestruko (M), a {{key:Shift}}+klik za oštar kut. Zaobljenje između polilinije i linije dodaje luk kao vlastiti objekt, umjesto da ga spoji s polilinijom, a kutovi polilinije uz segment luka ostaju kakvi jesu.

### Tekst odlomka i jednoredni tekst

`T`, `MT` i `MTEXT` su odlomci teksta upisani na mjestu, sa širinom, razmakom redaka i poravnanjem; `DT` i `DTEXT` su jednoredni tekst, kakav poznajete. Nema stilova teksta ni stupaca, a formatiranje unutar teksta (podebljano, složeni razlomci) još ne možete upisati. Formatiranje koje dolazi iz datoteke čuva se, crta i sprema (pogledajte [Dodavanje teksta i oznaka](topic:text#formatting-inside-paragraph-text-from-other-programs)). Sve se crta fontom u stilu Helvetice.

### Spremanje znači „preuzmi kopiju“

{{key:Mod+S}}, `SAVE` i `QSAVE` preuzimaju kopiju u formatu crteža: DWG koji ste otvorili sprema se kao DWG, DXF kao DXF. U pregledniku se ništa ne prepisuje na mjestu, a otvorene datoteke se nikada ne mijenjaju. U CadCraft Studiju {{key:Mod+S}} zapisuje natrag u datoteku koju ste otvorili.

`SAVEAS` ({{key:Mod+Shift+S}}) je mali dijaloški okvir, a ne preglednik datoteka: odaberite {{ui:DWG}} (s njegovom {{ui:Verzija}}, AutoCAD 2000 do 2018), {{ui:DXF R12}} ili {{ui:DXF 2000}} i kliknite {{ui:Spremi}}. Preglednik odlučuje gdje ide preuzimanje. `DXFOUT` uvijek preuzima DXF R12.

DWG koji ste otvorili sprema se u verziji u kojoj je došao; novi crtež sprema se u formatu AutoCAD 2000, osim ako ne odaberete drugi. Listovi, kote i uzorci šrafura se čuvaju. Pogledajte [Datoteke: što se otvara, što se sprema](topic:files#saving).

### Slojevi: jednostavnije

- Svaka promjena sloja (uključivanje, zamrzavanje, zaključavanje, boja, ispis, tip linije, debljina, aktivni sloj) jedan je korak poništavanja.
- Isključivanje i zamrzavanje u CadCraftu imaju isti učinak.
- Slojevi koje crtež zamrzava u jednom viewportu ostaju zamrznuti tamo: na zaslonu, u ispisima i kada ga spremite kao DWG ili DXF.
- Viewport koji prikazuje sloj u vlastitoj boji, tipu linije, debljini ili prozirnosti to zadržava na zaslonu, u ispisima i u spremljenom DWG-u (DXF zadržava vlastite postavke sloja; spremanje to navodi). Mijenjanje tih postavki po viewportu još nije izrađeno.
- Nema upravitelja svojstvima slojeva ni stanja slojeva. {{cmd:RENAME}}, {{cmd:LAYMRG}} i {{cmd:LAYDEL}} preimenuju, spajaju i brišu slojeve. Tipovi linija i debljine postavljaju se u desnom oknu (pogledajte [Debljine linija i tipovi linija](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} i {{cmd:LAYMCUR}} rade odabirom.
- Spremanje u DXF R12 zapisuje nazive slojeva velikim slovima. DWG ih čuva onako kako ste ih upisali.

### Stilovi kotiranja

`DIMSTYLE` otvara upravitelja za imenovane stilove (novi, izmijeni, postavi aktivni, usporedi, primijeni). `DIMSCALE` i ostale postavke i dalje mijenjaju ono što koriste nove kote, a svaka kota zadržava vlastite veličine, koje možete promijeniti i na panelu Svojstva. Aktivni stil nije spremljen u datoteci. Kote slijede oblik duljine crteža (decimalno, ili stope i inči s {{cmd:UNITS}}) ili vlastiti {{ui:Oblik}}. Pogledajte [Postavljanje veličina kota](topic:dimension-settings).

### Ispis je jednostavniji

Tablice stilova ispisa rade po boji, kao CTB datoteke: Monochrome, Colour i Grayscale su ugrađene, možete napraviti vlastite, a svaki list zadržava svoju tablicu. Čitanje CTB datoteka izrađeno je prema objavljenom opisu i isprobano je samo na datotekama koje smo sami napravili; imenovane tablice stilova ispisa (STB) i postavke stranice još nisu izrađene. Linije se ispisuju svojom debljinom, ostalo jednom debljinom pera. Listovi se ispisuju u mjerilu 1:1 na vlastitom papiru; model se ispisuje u odabranom ili prilagođenom mjerilu. Pogledajte [Ispis u PDF](topic:plot-pdf).

### Rad unutar viewporta

Kao što poznajete: dvostruki klik unutar viewporta (ili upišite {{cmd:MSPACE}}) radi na modelu kroz njega, a dvostruki klik izvan njega (ili {{cmd:PSPACE}}) vraća na list. Unutar viewporta pomicanje i zumiranje mijenjaju prikaz koji viewport pokazuje, osim ako mu je prikaz zaključan; tada pomiču list. Klik na karticu ispod crteža također napušta viewport. Pogledajte [Rad na modelu kroz viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Praćenje i dinamički unos da, hvatanje na mrežu još ne

Mreža služi samo za gledanje; točke se ne hvataju na nju (nema načina hvatanja F9). Polarno praćenje ({{key:F10}}, korak postavljen s {{cmd:POLARANG}}) i praćenje hvatanja objekata ({{key:F11}}: zadržite se na točki hvatanja da je prihvatite) rade kako poznajete; pogledajte [Hvatanje za objekte](topic:object-snaps#polar-tracking). Dinamički unos ({{key:F12}}) pokazuje udaljenost i kut (ili X i Y) uz nitni križ; pogledajte [Unos koordinata i udaljenosti](topic:coordinate-entry#dynamic-input).

### Stope i inči

Odaberite {{ui:Oblik duljine}} {{ui:Arhitektonsko}} ili {{ui:Inženjersko}} (ili upišite {{cmd:UNITS}}) i upisujte duljine kao što poznajete: `12'6"`, `12'6-1/2"`. Prije razlomka upotrijebite crticu, a ne razmak: {{key:Space}} je {{key:Enter}}. Postavite i {{ui:Jedinice}} na {{ui:Inči}}, tako da listovi i ispisi nude arhitektonska mjerila. Oblik se čuva u spremljenim DWG i DXF datotekama. Pogledajte [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopiranje i lijepljenje ostaju unutar CadCrafta

{{key:Mod+C}}, {{key:Mod+X}} i {{key:Mod+V}} kopiraju, izrezuju i lijepe objekte unutar crteža, između crteža i između CadCraft kartica u istom pregledniku. Međuspremnik je CadCraftov vlastiti: ne možete zalijepiti CadCraft objekte u drugi program niti objekte iz drugog programa u CadCraft. Lijepljenje iz crteža u drugim jedinicama ne mijenja mjerilo: poslije upotrijebite {{cmd:SCALE}}. {{key:Mod+D}} je dupliciranje koje se pomiče s pokazivačem, dodatak CadCrafta. Pogledajte [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste).

### Tipke preglednika koje ne možete koristiti

Web stranica ne može preuzeti {{key:Mod+N}}, {{key:Mod+W}} ili {{key:Mod+T}} od preglednika: one otvaraju i zatvaraju prozore i kartice. Upotrijebite gumb {{ui:Nova}} ili upišite `NEW`. Pogledajte [Tipke, miševi i dodirne podloge](common:keys).

## Naredbe koje možda tražite, a ovdje još nisu

{{cmd:TABLE}} nije izrađena. Upisivanje javlja „Nepoznata naredba“. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} i {{cmd:XREF}} su izrađene.) [Još nije izrađeno](topic:not-built-yet) navodi što umjesto toga raditi danas.
