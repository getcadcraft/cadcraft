---
title: Darba sākšana ar CadCraft
summary: Ko dara CadCraft zīmēšanas lietotne, kur tā darbojas un jūsu pirmais rasējums no tukša ekrāna līdz saglabātam failam.
keywords: sākums, pirmais rasējums, jauns, atvērt, saglabāt, saglabāt kā, sākt, apmācība, ievads, ātrais sākums
from: 1a56c575
---

CadCraft ir 2D zīmēšanas lietotne. Jūs zīmējat un rediģējat līnijas, lokus, polilīnijas, tekstu, izmērus un blokus, iekārtojat lapas ar titulblokiem un skatlogiem un drukājat tās PDF formātā. Tā atver DWG un DXF rasējumus un saglabā tos kā DWG vai DXF.

Tā darbojas jūsu tīmekļa pārlūkprogrammā. Nekas nav jāinstalē: vietne dod adresi, un visa lietotne ielādējas lapā. Jūsu rasējumi tiek atvērti no jūsu datora un saglabāti atpakaļ tajā. **Nekas netiek augšupielādēts.**

Ja esat jau zīmējis, pēc šīs lapas izlasiet [Pārejot no citas zīmēšanas programmatūras](topic:coming-from). Vairums ieradumu saglabājas, un tie nedaudzie, kas nesaglabājas, ir tur uzskaitīti.

## Vai vēlaties vadītu apmācību?

Ierakstiet `TOUR` (vai noklikšķiniet uz {{ui:Doties ekskursijā}} sākuma kartītē, vai {{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Doties ekskursijā vēlreiz}}). Sešas īsas darbības lodziņā virs rasējuma: uzzīmējiet līniju un riņķi, pārvietojiet to, apgrieziet, dzēsiet kaut ko un izmēriet. Katra darbība noslēdzas, kad to izpildāt, un varat izlaist vienu darbību vai visu ekskursiju. Tā sākas pati tikai pirmo reizi. [Īsā atsauce](topic:cheat-sheet) satur 40 komandas, ko lietosiet visbiežāk, un [komandu karte](topic:command-map) — katru komandu.

## Kas jums vajadzīgs

- Jaunākais Chrome, Edge, Firefox vai Safari Mac, Windows vai Linux datorā. Skatiet [Pārlūkprogrammas un platformas](common:browsers).
- Visērtākā ir pele ar ritenīti. Skārienpaliktnis darbojas; skatiet [Pele, skārienpaliktnis un skārienekrāns](topic:mouse-trackpad-touch).
- Tastatūra. CadCraft vada ierakstītas komandas, tāpat kā vairums zīmēšanas programmu.

## Ideja vienā rindkopā

Jūs ierakstāt komandu (vai noklikšķiniet uz tās pogas), un apakšējā komandrinda uzdod jums jautājumus pa vienam: "Norādiet pirmo punktu", "Norādiet nākamo punktu". Uz katru jautājumu atbildat, noklikšķinot rasējumā vai ierakstot vērtību, un pēc tam nospiežot {{key:Enter}}. Nospiežot {{key:Esc}}, atceļat. Tā ir visa mijiedarbības shēma; viss pārējais ir detaļas.

## Jūsu pirmais rasējums

Jūs uzzīmēsiet 4000 x 3000 taisnstūri no līnijām, ievietosiet riņķi vidū un saglabāsiet failu.

1. Atveriet CadCraft. Apakšējā komandrindā ir redzams `Komanda:`, un rasējuma laukumā ir īsa kartīte "Sākt rasējumu".
2. Ierakstiet `L` un nospiediet {{key:Enter}}. Komandrindu nav vajadzīgs vispirms noklikšķināt: rakstot jebkur, teksts nonāk tur.
3. Uzvedne mainās uz `Norādiet pirmo punktu:`. Ierakstiet `0,0` un nospiediet {{key:Enter}}.
4. Ierakstiet `@4000,0` un nospiediet {{key:Enter}}. Parādās līnija, kas iet pa labi. `@` nozīmē "no pēdējā punkta".
5. Ierakstiet `@0,3000` un nospiediet {{key:Enter}}.
6. Ierakstiet `@-4000,0` un nospiediet {{key:Enter}}.
7. Ierakstiet `C` un nospiediet {{key:Enter}}. `C` ir opcija Aizvērt (C): pēdējā līnija atgriežas pie pirmā punkta, un komanda beidzas.
8. Noklikšķiniet uz {{ui:Robežas}} grupā {{ui:Skats}} rīkjoslā. Taisnstūris aizpilda ekrānu.

Tagad jums vajadzētu redzēt četras līnijas, kas veido taisnstūri, un vēsture virs komandrindas uzskaita to, ko ierakstījāt.

9. Ierakstiet `C` un nospiediet {{key:Enter}}, lai sāktu riņķa komandu.
10. Ierakstiet `2000,1500` un nospiediet {{key:Enter}} centram.
11. Ierakstiet `500` un nospiediet {{key:Enter}} rādiusam.

Riņķis parādās taisnstūra vidū.

12. Nospiediet {{key:Mod+S}} vai noklikšķiniet uz {{ui:Saglabāt}} grupā {{ui:Fails}}.

Pārlūkprogramma lejupielādē `Drawing1.dwg` jūsu parastajā lejupielāžu mapē, un vēsturē ir teikts, ka kopija saglabāta kā DWG. Šo failu atkal var atvērt CadCraft un vairumā citu CAD programmu. (Ja iepriekš šajā pārlūkprogrammā sadaļā {{ui:Saglabāt kā}} izvēlējāties DXF, jauns rasējums tā vietā tiek saglabāts kā `Drawing1.dxf`.)

:::tip
Tukšā komandrindā nospiediet {{key:Enter}}, lai atkārtotu pēdējo komandu. Ja dodat priekšroku, nospiediet {{key:Space}} {{key:Enter}} vietā: ārpus teksta tas dara to pašu.
:::

## Atvērt esošu rasējumu

1. Nospiediet {{key:Mod+O}} vai noklikšķiniet uz {{ui:Atvērt}}.
2. Izvēlieties `.dwg` vai `.dxf` failu failu izvēlnē.

Varat arī vilkt DWG vai DXF failu no {{pick:mac=Finder|windows=File Explorer|linux=jūsu failu pārvaldnieka}} un nomest to rasējuma laukumā. Fails tiek nolasīts lapā; tas nekad neatstāj jūsu datoru.

Skatiet [Faili: kas atveras, kas saglabājas](topic:files), lai uzzinātu, kas tiek saglabāts un kas konvertēts.

## Saglabāšana: ko sagaidīt

Saglabāšana pārlūkprogrammā darbojas citādi nekā darbvirsmas programmā:

- {{ui:Saglabāt}} vienmēr **lejupielādē jaunu kopiju**. Tas nepārraksta atvērto failu. Ja lejupielāžu mapē jau ir fails ar tādu pašu nosaukumu, pārlūkprogramma parasti pievieno numuru, piemēram, `Drawing1 (1).dwg`.
- {{ui:Saglabāt}} izmanto rasējuma formātu: DWG, ja atvērāt DWG, DXF, ja atvērāt DXF. Lai izvēlētos, nospiediet {{key:Mod+Shift+S}} vai noklikšķiniet uz {{ui:Saglabāt kā}}, tad izvēlieties {{ui:DWG}} (un tā versiju), {{ui:DXF R12}} vai {{ui:DXF 2000}}. Skatiet [Saglabāšana](topic:files#saving).
- Atvērtais fails nekad netiek mainīts.
- Cita faila atvēršana vai {{ui:Jauna}} ievieto to savā cilnē virs rasējuma, tāpēc nekas no atvērtā netiek aizvērts. Ja aizverat rasējuma cilni vai atstājat lapu ar nesaglabātām izmaiņām, CadCraft vispirms jautā: {{ui:Vispirms saglabāt kopiju}}, atmest vai {{ui:Atcelt}}. Aizverot pārlūkprogrammas cilni, tiek rādīts pašas pārlūkprogrammas jautājums "Atstāt vietni?".

Saglabāšana mākonī vēl nav pieejama. Kur nonāk jūsu faili un kāpēc tie paliek privāti, skaidrots sadaļā [Jūsu faili un privātums](common:your-files).

## Kur doties tālāk

Jebkurā brīdī nospiediet {{key:F1}} vai augšējā joslā noklikšķiniet uz {{ui:Palīdzība}}, lai atvērtu šo palīdzību blakus rasējumam. Tā darbojas bez savienojuma.

- [CadCraft ekrāns](topic:workspace) nosauc katru joslu un paneli.
- [Zīmēšana ar koordinātām](topic:draw-with-coordinates) ir labākā pirmā pamācība.
- [Tastatūra un pele](topic:keyboard) uzskaita katru taustiņu.
- Komandrindā ierakstiet `HELP`, lai iegūtu katras komandas sarakstu, vai lasiet [Komandu uzziņu](topic:commands).
