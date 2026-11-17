---
title: Pele, skārienpaliktnis un skārienekrāns
summary: Kā tuvināt, panoramēt, noklikšķināt ar labo pogu un izvēlēties punktus CadCraft ar riteņa peli, Mac vai PC skārienpaliktni vai skārienekrānu un kas atšķiras pārlūkprogrammās.
keywords: skārienpaliktnis, Magic Mouse, skāriens, planšete, iPad, panoramēt, tālummaiņa, savilkt, labā poga, divi pirksti, vidējā poga, pārlūkprogramma, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft ir paredzēts darbam ar peli ar riteni. Viss darbojas arī ar skārienpaliktni, ar dažiem paradumiem, kas jāiemācās. Skārienekrāni darbojas punktu izvēlei, ar ierobežojumiem.

## Peles ar riteni

- **Tālummaiņa:** pagriezt riteni. Zīmējums tiek tuvināts vai tālināts ap krustiņu, tāpēc norādiet to, ko vēlaties redzēt.
- **Panoramēšana:** turiet riteni nospiestu un velciet vai velciet ar labo pogu.
- **Tālummaiņa uz visu:** divreiz noklikšķiniet uz riteņa vai noklikšķiniet {{ui:Robežas}}.
- **Atpakaļ uz iepriekšējo skatu:** noklikšķiniet {{ui:Iepriekšējais}} grupā Skats vai ierakstiet `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Vairāki riteņa soļi pēc kārtas skaitās kā viens skats, tāpēc viens {{ui:Iepriekšējais}} atsauc tos visus. Skatus, uz kuriem atgriezīsieties, saglabājiet ar {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** labais klikšķis.

## Skārienpaliktnis

:::mac
- **Panoramēšana:** pārvietojiet divus pirkstus pa skārienpaliktni jebkurā virzienā: zīmējums seko jūsu pirkstiem. Varat arī vilkt ar divu pirkstu klikšķi, turot to nospiestu (vilkšana ar labo pogu).
- **Tālummaiņa:** savelciet divus pirkstus. Tālummaiņa seko krustiņam.
- **Labais klikšķis (Enter):** noklikšķiniet ar diviem pirkstiem. Ieslēdziet "Secondary click" sadaļā **System Settings**, pēc tam **Trackpad**, ja nekas nenotiek. Control-klikšķis CadCraft var tikt uzskatīts par parastu klikšķi, nevis labo klikšķi, tāpēc izmantojiet divu pirkstu klikšķi.
- **Tālummaiņa uz apgabalu:** noklikšķiniet {{ui:Logs}} grupā Skats un noklikšķiniet divus stūrus.
:::

:::windows linux
- **Panoramēšana:** pārvietojiet divus pirkstus pa skārienpaliktni jebkurā virzienā: zīmējums seko jūsu pirkstiem. Varat arī vilkt, turot nospiestu labo pogu.
- **Tālummaiņa:** savelciet divus pirkstus. Tālummaiņa seko krustiņam.
- **Labais klikšķis (Enter):** noklikšķiniet ar diviem pirkstiem vai noklikšķiniet skārienpaliktņa apakšējo labo stūri, atkarībā no skārienpaliktņa iestatījumiem.
- **Tālummaiņa uz apgabalu:** noklikšķiniet {{ui:Logs}} grupā Skats un noklikšķiniet divus stūrus.
:::

Turot {{key:Space}} un velkot, CadCraft **nepanoramē**: {{key:Space}} ir Enter.

Peles ritenis joprojām tālumina pa vienam solim. Skārienpaliktnis, kas ritināšanu sūta veselos soļos, kā to dara ritenis, tālina ar divu pirkstu ritināšanu, nevis panoramē: tālummaiņu samaziniet, norādiet vēlamo apgabalu un tuviniet atpakaļ. Cilnē 3D saglabājas savas skārienpaliktņa kustības (skatiet [Modelēšana 3D](topic:3d-solids#look-around)).

## Skārienekrāni un planšetes

CadCraft uztver pirkstu kā peles klikšķi:

- Pieskaršanās izvēlas punktu vai objektu vai atlasa.
- Pirksta vilkšana pa tukšu vietu zīmē lasso (pa labi vispirms — logs, pa kreisi vispirms — šķērsojums; skatiet [Lasso atlase](topic:lasso-selection)).
- {{cmd:TRIM}} un {{cmd:EXTEND}}: pirksta vilkšana pāri gabaliem apgriež vai pagarina tos visus.
- Vilkšana ar pirkstu pa atlasīta objekta satveres punktu pārvieto šo punktu (satveres punkti un izvēles kvadrāts ir lielāki pirkstam).
- **Savilkšana** ar diviem pirkstiem tuvina ap punktu starp tiem; kopā pārvietoti divi pirksti **panoramē**. Otrs pirksts atceļ to, ko sāka pirmais, tāpēc savilkšana nekad neatstāj pēdas.
- **Ilgs nospiediens** (turiet mierīgi apmēram pusi sekundes) ir labais klikšķis: {{key:Enter}}. Tas beidz komandu, pabeidz atlasi vai atkārto pēdējo komandu.

Zem komandrindas parādās **taustiņu rinda**: {{ui:Esc}}, {{ui:Atsaukt}}, {{ui:Atkārtot}}, rakstzīmes, ko planšetes tastatūra slēpj (`@` `,` `<` `'` `"` `-`), {{ui:Piesaiste}}, {{ui:Ortogonāli}}, tastatūras poga un liela {{ui:Enter}}. Pieskarieties tastatūras pogai (vai komandrindai), lai ierakstītu komandu vai skaitli.

Rādītājs nekur nepeld, tāpēc piesaistes marķieri rādās tikai tur, kur atrodas jūsu pirksts.

:::touch
Jūs izmantojat skārienekrānu. Lai strādātu ilgāk par ātru apskati, pievienota tastatūra un pele vai skārienpaliktnis padara CadCraft daudz ērtāku.
:::

## Pārlūkprogrammas

CadCraft darbojas vienādi Chrome, Edge, Firefox un Safari, Mac, Windows un Linux. Atšķirības ir nelielas:

| Tēma | Ko vajag zināt |
|---|---|
| Lielu DWG atvēršana | Lieli zīmējumi katrā pārlūkprogrammā nolasās dažas sekundes; statusa rindā tikmēr rādās "Lasa …" |
| Lejupielādes | Katra pārlūkprogramma izlemj, kur lejupielādes tiek saglabātas un vai jautāt pirms tam; skatiet [Pārlūkprogrammas un datori](common:browsers) |
| Atvērt drukāšanai | Atver PDF jaunā cilnē. Ja pārlūkprogramma bloķē uznirstošos logus, CadCraft lejupielādē PDF |
| F7 | Firefox var piedāvāt karetes pārlūkošanu; izvēlieties Nē |
| Aiziešana ar nesaglabātām izmaiņām | Katra pārlūkprogramma rāda savu jautājumu "Atstāt vietni?", ko CadCraft nevar mainīt |

:::safari
Safari PDF, kas atvērts ar {{ui:Atvērt drukāšanai}}, var tikt rādīts cilnē, bet netikt izdrukāts: izmantojiet **File** un pēc tam **Print**.
:::

:::firefox
Firefox var jautāt, ko darīt ar katru lejupielādi. Izvēlieties saglabāt failu vai vienreiz mainiet to Firefox iestatījumos sadaļā Downloads.
:::
