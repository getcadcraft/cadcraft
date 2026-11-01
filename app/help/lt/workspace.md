---
title: CadCraft ekranas
summary: Brėžimo programos kiekvienos juostos, skydelio ir skirtuko apžvalga pagal pavadinimą, kurį jis turi ekrane.
keywords: ekranas, sąsaja, įrankių juosta, juosta, skydeliai, komandų eilutė, būsenos juosta, skirtukai, maketų skirtukai, ypatybės, sluoksnių skydelis, apžvalga
from: b5a33388
---

Ekranas turi septynias dalis. Iš viršaus į apačią: programos juosta, įrankių juosta, brėžinio sritis su skydeliu kiekvienoje pusėje, skirtukai po brėžiniu, komandų eilutė ir būsenos juosta.

## Programos juosta

Plona juosta viršuje priklauso svetainei, o ne brėžiniui. Joje rodomas CadCraft ženklas, programos pavadinimas, kuri versiją naudojate, nuoroda į programos puslapį, mygtukas {{ui:Help}} (arba {{key:F1}}), mygtukas {{ui:Save for offline}}, mygtukas {{ui:Full screen}} ir du temos mygtukai, {{ui:Paper}} ir {{ui:Model}}.

Mygtukas {{ui:Settings}} (krumpliaratis) laiko CadCraft savuosius nustatymus ir tuos, kuriuos turi visos programos: žr. [CadCraft nustatymai](topic:settings).

{{ui:Save for offline}} išlaiko CadCraft kopiją, įskaitant jo DWG skaitiklį, šioje naršyklėje, kad jis atsidarytų be ryšio. Jo etiketė rodo būseną: „Įrašoma N iš M“, „Paruošta neprisijungus“, „Nepavyko įrašyti“ arba „Neprisijungus nepasiekiama“. Žr. [Darbas neprisijungus](common:offline).

:::note
Mygtukai {{ui:Paper}} ir {{ui:Model}} programos juostoje keičia tik ekrano spalvas: {{ui:Paper}} yra šviesi tema, {{ui:Model}} – tamsi. Jie neturi nieko bendra su skirtuku {{ui:Model}} po brėžiniu, kuris perjungia tarp brėžinio ir jo lapų.
:::

Mygtukas {{ui:Full screen}} arba {{key:Ctrl+Shift+F}} (Control klavišas bet kuriame kompiuteryje, įskaitant Mac) perjungia tris ekrano režimus: įprastą, visą ekraną ir visą ekraną su paslėptomis juostomis. Kai juostos paslėptos, perkelkite žymeklį į viršutinį ekrano kraštą, kad jos vėl pasirodytų.

## Įrankių juosta

Po programos juosta yra įrankių juosta. Kiekvienas mygtukas paleidžia komandą, lygiai taip, lyg būtumėte ją įvedę, todėl komandų eilutė užduoda tuos pačius klausimus abiem būdais. Užvedę pelę ant mygtuko, pamatysite jo komandos pseudonimą. Grupės yra:

| Grupė | Mygtukai |
|---|---|
| File | {{ui:New}}, {{ui:Open}}, {{ui:Save}}, {{ui:Save as}}, {{ui:Plot}} |
| Draw | {{ui:Line}}, {{ui:Polyline}}, {{ui:Circle}}, {{ui:Arc}}, {{ui:Rectangle}}, {{ui:Polygon}}, {{ui:Ellipse}}, {{ui:Text}}, {{ui:Paragraph}}, {{ui:Hatch}}, ir {{ui:More}}: {{ui:Point}}, {{ui:Construction line}} ir {{ui:Ray}} (žr. [Konstrukcinės linijos ir spinduliai](topic:construction-lines)) |
| Modify | {{ui:Move}}, {{ui:Copy}}, {{ui:Rotate}}, {{ui:Scale}}, {{ui:Mirror}}, {{ui:Stretch}}, {{ui:Offset}}, {{ui:Trim}}, {{ui:Extend}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Explode}}, {{ui:Erase}}, ir {{ui:More}}: {{ui:Array}}, {{ui:Join}}, {{ui:Match properties}}, {{ui:Break}} ir {{ui:Lengthen}} |
| Annotate | {{ui:Linear}}, {{ui:Aligned}}, {{ui:Angle}}, {{ui:Radius}}, {{ui:Diameter}} (matmenys), {{ui:Leader}} (daugiakryptė nuoroda), ir {{ui:More}}: {{ui:Continue dimension}}, {{ui:Baseline dimension}} ir {{ui:Revision cloud}} |
| Parametric | {{ui:Auto}}, {{ui:Constrain}}, {{ui:Dimension}}, {{ui:Parameters}}, ir {{ui:More}} su kiekvienu apribojimu (žr. [Apriboti brėžinį](topic:constraints)) |
| Blocks | {{ui:Make}}, {{ui:Insert}}, {{ui:Library}}, ir {{ui:More}}: {{ui:Edit block}} ir {{ui:Define attribute}} |
| Sheets | {{ui:New sheet}}, {{ui:Viewport}} |
| Edit | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} (į iškarpinę), {{ui:Paste}}, ir {{ui:More}}: meniu su {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate and move}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}}, {{ui:Quick select}}, {{ui:Select similar}} ir {{ui:Find and replace}}, kiekvienas su savo klavišu |
| View | {{ui:Extents}}, {{ui:Window}}, {{ui:Previous}}, ir {{ui:More}}: {{ui:Measure distance}}, {{ui:Area}}, {{ui:Measure (radius, angle …)}}, ir padalintas ekranas: {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} (žr. [Padalinti ekraną](topic:split-screen)), ir {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}} (žr. [Pasukti vaizdą](topic:ucs-and-turned-view)) |

{{ui:Copy}} grupėje {{ui:Modify}} yra {{cmd:COPY}} komanda (bazinis taškas, tada kur eina kiekviena kopija); {{ui:Copy}} grupėje {{ui:Edit}} deda objektus į iškarpinę, kad {{ui:Paste}} juos įdėtų. Žr. [Kopijuoti, įklijuoti ir dubliuoti](topic:copy-paste). Mygtukas veikiančios komandos lieka paryškintas, kol komanda baigiasi. Patarimai nurodo Windows spartieji klavišus („Ctrl+O“); Mac kompiuteryje veikia ir {{key:Mod+O}}.

Trumpame lange (pavyzdžiui, nešiojamajame kompiuteryje, kurio ekranas padidintas iki 125 % ar daugiau) įrankių juosta niekada neužima brėžinio vietos: kai brėžiniui liktų per mažai aukščio, mygtukai nustoja rodyti žodžius po piktogramomis ir grupių pavadinimus (užveskite pelę ant mygtuko, kad pamatytumėte jo pavadinimą), o jei to dar nepakanka, įrankių juosta tampa viena eilute, kuri slenka į šonus. Aukštesnis langas grąžina žodžius.

## Kairysis skydelis

Skydelis kairėje turi tris skiltis.

- **{{ui:Layers}}.** Kiekvienas brėžinio sluoksnis, su užpildytu taškeliu ties dabartiniu. Spustelėkite pavadinimą, kad padarytumėte tą sluoksnį dabartiniu. Kiekvienoje eilutėje yra spalvos pavyzdys (spustelėkite jį, kad pasirinktumėte spalvą) ir keturi mygtukai: įjungti/išjungti (akis), įšaldyti (snaigė), užrakinti (spyna) ir spausdinti (spausdintuvas). {{ui:New layer}} atveria langelį naujam pridėti. Žr. [Brėžinio tvarkymas sluoksniais](topic:layers).
- **{{ui:Blocks}}.** Brėžinyje apibrėžti blokai, kiek kartų kiekvienas naudojamas, ir mygtukas {{ui:Insert}} kiekvienam. Žr. [Kurti ir įterpti blokus](topic:blocks).
- **{{ui:Drawing}}.** Atidaryto failo faktai: pavadinimas (su „(changed)“, kai yra neįrašytų pakeitimų), formatas, dydis, vienetai, objektų, sluoksnių, blokų ir lapų skaičius. Atidarius failą, langelis „Apie šį failą“ išvardija viską, ko CadCraft negalėjo parodyti ar turėjo konvertuoti.

## Brėžinio sritis

Ekrano vidurys yra brėžinys. Žymeklis yra kryžminis. Kai CadCraft nori taško, mažas žymeklis ir etiketė („Endpoint“, „Midpoint“) rodo, kur objektų fiksavimas nukris. Kai reikia objektų, kryžminis turi pasirinkimo langelį, o objektai po juo šviečia.

Kai brėžinys tuščias, kortelė „Pradėti brėžinį“ rodo kelias pirmąsias komandas. Ji dingsta, kai tik paleidžiate komandą arba atidarote failą. DWG ar DXF failą galite numesti bet kur šioje srityje, kad jį atidarytumėte.

## Skirtukai po brėžiniu

Po brėžiniu yra skirtukai: pirmiausia {{ui:Model}}, tada {{ui:3D}}, tada po vieną skirtuką kiekvienam lapui (maketui), o paskui mygtukas {{ui:+}}.

- {{ui:Model}} yra pats brėžinys, visu dydžiu, brėžinio vienetais.
- {{ui:3D}} rodo brėžinį, gulintį ant žemės, ir iš jo sukurtus kietuosius kūnus. Kol jis rodomas, įrankių juostoje vietoj brėžimo grupių yra grupė {{ui:3D}}. Žr. [Modelis 3D](topic:3d-solids).
- Kiekvienas lapo skirtukas yra popieriaus lapas su antraštės bloku ir vaizdo langais į modelį. Tai, ką piešiate ten, yra popieriaus vienetais (milimetrais ar coliais). Dukart spustelėkite vaizdo lango viduje, kad dirbtumėte su modeliu per jį (žr. [Dirbti su modeliu per vaizdo langą](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Ilgas lapo pavadinimas skirtuke sutrumpinamas; užveskite pelę ant skirtuko, kad pamatytumėte visą pavadinimą. Kai lapų daug, {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Sheet tabs}} › {{ui:Sheet numbers only}} skirtuke rodo tik kiekvieno lapo numerį (A-101).
- {{ui:+}} sukuria naują lapą su rėmu, antraštės bloku ir vienu vaizdo langu. Tai tas pats kaip komanda {{cmd:LAYOUT}}.
- Dukart spustelėkite lapo skirtuką, kad jį pervadintumėte. Kai skirtukas pažymėtas, {{key:Left}} ir {{key:Right}} perkelia tarp skirtukų.

Kiekvienas skirtukas išlaiko savo mastelį ir slinkimą. Žr. [Paruošti lapą](topic:sheets-and-viewports).

## Dešinysis skydelis: Ypatybės

Skydelis dešinėje keičiasi pagal tai, kas pažymėta.

- **Nieko nepažymėta, skirtuke {{ui:Model}}:** antraštėje rašoma {{ui:Current settings}}. Čia nustatote naujų objektų {{ui:Layer}}, {{ui:Colour}} ir {{ui:Text height}}, brėžinio {{ui:Units}} ir naujų matmenų dydžius ({{ui:Text height}}, {{ui:Arrow size}}, {{ui:Decimals}}, {{ui:Overall scale}}).
- **Nieko nepažymėta, ant lapo:** antraštėje rašoma „Sheet:“ ir lapo pavadinimas. Galite pervadinti lapą, pakeisti jo {{ui:Paper}} ir {{ui:Orientation}}, {{ui:Plot this sheet}} arba {{ui:Delete this sheet}}. Žemiau seka naujų objektų nustatymai.
- **Pažymėtas vienas objektas:** jo tipas kaip antraštė (Line, Circle, Text, Dimension, Viewport …), tada jo sluoksnis, spalva ir geometrija. Įveskite naują reikšmę ir paspauskite {{key:Enter}}, kad pakeistumėte.
- **Pažymėta keli objektai:** kiek jų yra ir jų bendras {{ui:Layer}} bei {{ui:Colour}}. Pakeitus bet kurį, pakinta visi. „Varies“ reiškia, kad jie skiriasi.

Žr. [Redaguoti rankenomis ir Ypatybėmis](topic:grips-and-properties).

Žemiau jo atsiveria skydelis {{ui:Parameters}}, kai pasirenkate {{ui:Parameters}} arba įvedate {{cmd:PARAMETERS}}: kiekvienas parametras ir matmenų apribojimas vienoje lentelėje. Žr. [Naudoti parametrus ir lygtis](topic:parameters).

## Komandų eilutė

Apačioje yra komandų eilutė: visa, ką dariote, istorija, o po ja – eilutė, kurioje rašoma komanda.

- Eilutės žymė rodo `Komanda:`, kai nieko nevyksta. Kai komanda veikia, rodomas klausimas, jo parinktys laužtiniuose skliaustuose ir numatytoji reikšmė kampiniuose skliaustuose, pavyzdžiui, `Nurodykite apskritimo spindulį [Skersmuo (D)] <500>:`.
- Rašant komandos pavadinimą, dešinėje pasirodo užuomina su atitinkamomis komandomis. Paspauskite {{key:Tab}}, kad priimtumėte pirmąją. „No such command“ reiškia, kad niekas neatitinka.
- {{key:Up}} ir {{key:Down}} grąžina eilutes, kurias įvedėte anksčiau.
- Istorija išlaiko paskutines 400 eilučių. Komandų pranešimai, {{cmd:DIST}} ir {{cmd:LIST}} matavimai bei įrašymo ir spausdinimo ataskaitos rodomi čia.

## Būsenos juosta

Pati apatinė eilutė yra būsenos juosta.

- **Koordinatės** kairėje: X ir Y žymeklio. Kai komanda turi bazinį tašką, rodomas ir atstumas bei kampas nuo jo, pavyzdžiui, `Δ 1200 < 90°`.
- **Pranešimai** viduryje, pavyzdžiui, „Ortho on“ arba „Current layer: Walls“. Po kelių sekundžių jie išnyksta.
- **{{ui:Grid}}**, **{{ui:Ortho}}**, **{{ui:Polar}}**, **{{ui:Snap}}**, **{{ui:Track}}**, **{{ui:Dyn}}** ir **{{ui:LWT}}** dešinėje. Kiekvienas yra jungiklis; paspaustas mygtukas yra įjungtas. {{ui:LWT}} rodo linijų storius ekrane (žr. [Linijų storiai ir linijų tipai](topic:units-papers-scales#line-weights-and-linetypes)). Mažoji rodyklė šalia {{ui:Snap}} atveria {{ui:Object snaps}}, kur pažymite, kurie fiksavimai aktyvūs. Žr. [Fiksuoti prie objektų taškų](topic:object-snaps).

## Spausdinimo į PDF dialogas

{{ui:Plot}} (arba {{key:Mod+P}}) atveria dialogą {{ui:Plot to PDF}}, kurio nustatymai kairėje, o tiesioginė peržiūra dešinėje. Žr. [Spausdinti į PDF](topic:plot-pdf).

## Žinynas

{{key:F1}} arba mygtukas {{ui:Help}} atveria šį žinyną kaip šoninį skydelį; brėžinys lieka naudojamas šalia jo. Jis veikia be jokio ryšio. Dar kartą {{key:F1}} arba {{key:Esc}} skydelio viduje jį uždaro. Žr. [Naudojant šį žinyną](common:help).
