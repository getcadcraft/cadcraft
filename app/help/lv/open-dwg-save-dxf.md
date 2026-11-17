---
title: Atvērt DWG, rediģēt to un saglabāt kopiju
summary: Atveriet no konsultanta saņemtu rasējumu, pārbaudiet, kas ienāca, veiciet izmaiņu un nosūtiet atpakaļ kopiju kā DWG vai DXF.
keywords: dwg, dxf, atvērt, imports, eksports, saglabāt, r12, apaļā pārbaude, konsultants, xref, pārbaudīt rasējumu, saglabāt kā, dwg saglabāšana, formāts
from: 49de4bf6
---

## Ko jūs darīsiet

Atveriet DWG no konsultanta, pārbaudiet, ko CadCraft varēja un nevarēja parādīt, pievienojiet piezīmi, izdrukājiet lapu PDF un saglabājiet kopiju, ko nosūtīt atpakaļ, kā DWG vai DXF.

## Atvērt failu

1. Nospiediet {{key:Mod+O}} vai noklikšķiniet {{ui:Atvērt}}.
2. Izvēlieties `.dwg` failu.

Statusa rindā tiek rādīts "Notiek lasīšana …", kamēr rasējums tiek nolasīts. Kad tas ir pabeigts, rasējums aizpilda ekrānu, un vēsturē ir rakstīts, piemēram, "Atvērts plan.dwg: 18,240 objekti 64 slāņos", kopā ar laiku, cik ilgi tas prasīja.

:::offline
Jūs esat bezsaistē. Ja poga {{ui:Saglabāt bezsaistei}} rāda "Gatavs darbam bezsaistē", DWG faili atveras parasti. Ja nē, un šajā cilnē vēl nav atvērts neviens DWG, DWG atvēršana var neizdoties, jo CadCraft DWG lasītājs tiek ielādēts ar pirmo DWG: atveriet DXF vai, nākamreiz esot tiešsaistē, saglabājiet CadCraft bezsaistes lietošanai. Skatiet [Darbs bezsaistē](common:offline).
:::

## Pārbaudiet, kas ienāca

1. Paskatieties uz {{ui:Rasējums}} sadaļu kreisajā panelī: formāts un versija, vienības, objektu un slāņu skaits un lapas.
2. Izlasiet lodziņu "Par šo failu" zem tās, ja tāds ir.

Lodziņā ir uzskaitīts:

- **Vēl nav rādīts:** objekti, ko CadCraft vēl nevar zīmēt, pēc veida un skaita. Tie ir izlaisti, nevis minēti.
- **Lapas (lapas) ienāca:** atveriet tās ar cilnēm zem rasējuma.
- **Izmēri, ko varēja nolasīt tikai tā, kā tie zīmēti.**

3. Noklikšķiniet cauri cilnēm zem rasējuma, lai redzētu katru lapu.
4. Pārbaudiet {{ui:Vienības}} sadaļā {{ui:Pašreizējie iestatījumi}} (nekas nav atlasīts, cilne {{ui:Modelis}}). Ja tur ir rakstīts {{ui:Bez vienībām}}, bet zināt, ka rasējums ir milimetros, iestatiet to, lai lapas un drukas mērogi tiktu nolasīti pareizi.

:::tip
Ja gaidījāt kādu rasējuma daļu un to nevarat redzēt, pārbaudiet {{ui:Slāņi}} paneli: slānis failā var būt izslēgts vai sasaldēts. Noklikšķiniet uz tā nosaukuma, lai to padarītu pašreizējo; tas to ieslēdz.
:::

## Veiciet izmaiņu

1. Izveidojiet slāni savām piezīmēm: noklikšķiniet {{ui:Jauns slānis}}, ierakstiet `NOTES` un nospiediet {{key:Enter}}.
2. Ierakstiet `DT` un nospiediet {{key:Enter}}.
3. Noklikšķiniet, kur jāiet piezīmei.
4. Ierakstiet teksta augstumu, kas atbilst rasējumam (skatiet [Pievienot tekstu un uzrakstus](topic:text)) un nospiediet {{key:Enter}}.
5. Nospiediet {{key:Enter}}, lai saglabātu pagriezumu 0.
6. Ierakstiet savu piezīmi un nospiediet {{key:Enter}}.
7. Vēlreiz nospiediet {{key:Enter}}, lai pabeigtu.

Izmaiņas importētajos izmēros ir atļautas: tiklīdz maināt vienu, CadCraft to pārzīmē savā stilā.

## Izdrukājiet lapu pārskatam

1. Noklikšķiniet lapas cilni.
2. Nospiediet {{key:Mod+P}}.
3. Noklikšķiniet {{ui:Lejupielādēt PDF}}.

Skatiet [Drukāt PDF](topic:plot-pdf).

## Saglabājiet kopiju

1. Nospiediet {{key:Mod+S}} vai noklikšķiniet {{ui:Saglabāt}}.

Jūs atvērāt DWG, tāpēc pārlūkprogramma lejupielādē `<name>.dwg` versijā, kādā DWG bija. Vēsturē ir rakstīts, piemēram, "Saglabāta kopija kā Plan.dwg (DWG (AutoCAD 2018))." un zem tā uzskaitītas līnijas ar visu, kas mainījās ceļā.

2. Pirms nosūtīšanas izlasiet šīs līnijas. [Ko DWG saglabā un maina](topic:files#what-a-dwg-keeps-and-changes) paskaidro katru no tām.

Jūsu oriģinālais DWG nekad netiek mainīts. Katra saglabāšana ir jauna lejupielāde.

## Saglabāt kā DWG vai DXF

Lai izvēlētos formātu pašam:

1. Nospiediet {{key:Mod+Shift+S}} vai noklikšķiniet {{ui:Saglabāt kā}}.

Dialogs {{ui:Saglabāt kopiju kā}} atveras ar četrām izvēlēm, katrai ar faila nosaukumu, ko tā dos: {{ui:DWG}} ar tā {{ui:Versija}} sarakstu, {{ui:DXF R12}}, {{ui:DXF 2000}} un {{ui:DXF 2000 (binary)}}. Rasējuma pašreizējais formāts un versija jau ir izvēlēti.

2. Noklikšķiniet formātu, kādu vēlaties. DWG gadījumā izvēlieties versiju, ko izmanto cits birojs, vai vecāku: AutoCAD 2018, 2013, 2010, 2007, 2004 vai 2000.
3. Noklikšķiniet {{ui:Saglabāt}}.

Kopija tiek lejupielādēta. Turpmāk {{key:Mod+S}} saglabā šo rasējumu šajā formātā, un jauni rasējumi arī sākas ar to šajā pārlūkprogrammā. {{ui:Atcelt}} vai {{key:Esc}} nesaglabā neko, un vēsturē ir rakstīts "Nav saglabāts."

Izvēle:

- **DWG** saglabā visvairāk: lapas ar to skata logiem, īstos izmērus, svītrojumu rakstus, slāņu un bloku nosaukumus tā, kā tos ierakstījāt, un daudzrindu tekstu kā daudzrindu tekstu. AutoCAD 2000 versija atveras vairumā programmu; 2004 un jaunākās saglabā arī īstās krāsas.
- **DXF 2000** ir teksta fails, kas saglabā gandrīz to pašu, ko saglabā DWG: katru lapu kā izkārtojumu ar tās skata logiem, īstos izmērus, svītrojumu rakstus, īstās krāsas, līniju biezumus, līnijtipus un nosaukumus tā, kā tos ierakstījāt. Tas atveras AutoCAD 2000 un jaunākos, kā arī vairumā CAD programmu. Multileaderi kļūst par līnijām, bultiņām un tekstu, ko tie zīmē. DXF, kas atvērts 2000. vai jaunākā versijā, saglabājas kā DXF 2000.
- **DXF 2000 (binary)** satur to pašu saturu kā DXF 2000 bināro formātu: mazāku failu, kas saglabā katru skaitli precīzi. Bināri DXF faili no citām programmām atveras kā teksta faili, un rasējums, kas atvērts no bināra DXF, saglabājas atpakaļ kā binārs.
- **DXF R12** atveras gandrīz jebkurā CAD programmā. Tas saglabā pirmo lapu ar tās skata logiem un CadCraft pārējās lapas. Tas vienkāršo jaunākas lietas, piemēram, daudzrindu tekstu un svītrojumus.

## Ko redzēs cits birojs

DWG:

- Līnijas, lokus, riņķus, elipses, polilīnijas, tekstu, daudzrindu tekstu, blokus ar to atribūtiem, cietus aizpildījumus, svītrojumu rakstus un slāņus tā, kā jūs tos redzat.
- Īstie izmēri: cita programma tos pārmēra, kad tie tiek stiepti.
- Katra lapa ar tās papīru un skata logiem.
- Multileaderi kā multileaderi. AutoCAD 2000 versijā īstās krāsas kļūst par tuvāko standarta krāsu.

DXF R12:

- Līnijas, lokus, riņķus, polilīnijas, tekstu, bloku atsauces un izmērus tā, kā jūs tos redzat. Izmēri paliek īsti izmēri.
- Slāņu nosaukumi lielajiem burtiem, ar atstarpēm pārvērstām par `_`.
- Pirmā lapa kā rasējuma papīra telpa ar tās skata logiem. Tālākās lapas ierodas kā bloki ar nosaukumiem `CCLAYOUT_1` un tā tālāk; ja tām vajag katru lapu kā izkārtojumu, izdrukājiet arī katras lapas PDF.
- Daudzrindu teksts kā atsevišķas rindas, elipses kā polilīnijas, svītrojumi kā kontūras.

Jebkurā gadījumā viss, kas bija uzskaitīts kā "Vēl nav rādīts", kad atvērāt DWG, **nav** kopijā, ja vien vēsture nerāda, ka tas tika saglabāts: DWG OLE objekti un tā 3D cietie ķermeņi modeļa telpā tiek ierakstīti atpakaļ, kad saglabājat kā DWG. Pastāstiet to saņēmējiem un nosūtiet arī PDF.

## Biežākās kļūdas

- **"CadCraft atver DWG un DXF rasējumus."** Failam ir cits paplašinājums. Pārbaudiet, ka tas ir `.dwg` vai `.dxf`.
- **"Šo rasējumu nevarēja nolasīt."** DWG ir bojāts vai versijā, ko lasītājs neapstrādā. Lūdziet DXF vai DWG, kas saglabāts vecākā versijā.
- **"Šis bināras DXF beidzas objekta vidū."** Fails ir saīsināts vai bojāts. Ierakstiet RECOVER, lai atvērtu to, kas var tikt nolasīts, vai lūdziet failu vēlreiz.
- **Saglabātais fails ir nosaukts `name (1).dwg` vai `name (1).dxf`.** Pārlūkprogramma to dara, kad mapē jau ir fails ar tādu pašu nosaukumu.
- **Viņiem ir vecāka programma, kas nevar atvērt DWG.** Saglabājiet kā DWG ar {{ui:Versija}} {{ui:AutoCAD 2000}} vai kā {{ui:DXF R12}}: gandrīz jebkura CAD programma to atver.
- **Trūkst rasējuma daļu.** Saistītie rasējumi (xref) netiek ielādēti, kamēr neizvēlaties to failus ({{cmd:XREF}}, `R`), un attēli tiek rādīti kā rāmji ar to faila nosaukumiem.
