---
title: Vēsture: versijas un izmaiņas
summary: Skatiet rasējuma versijas (kopijas, ko Studio saglabā, kad saglabājat, un mākoņa versijas), atveriet vai atjaunojiet kādu no tām un salīdziniet divas, izmaiņas rādot krāsā.
keywords: vēsture, versijas, versiju vēsture, atjaunot, iepriekšējā versija, atsaukt saglabāšanu, salīdzināt, salīdzināt rasējumus, dwgcompare, izmaiņas, pievienots, noņemts, mainīts, momentuzņēmums, dublējums, mākoņa versijas
from: 141d37b3
---

## Ko jūs izveidosiet

Skatu uz iepriekšēju rasējuma versiju un sarakstu ar tā atšķirībām no pašreizējā: kas pievienots, kas noņemts un kas mainīts, atzīmēts krāsā uz rasējuma.

## Vēstures atvēršana

Ierakstiet `HISTORY` (vai `HIST`) un nospiediet {{key:Enter}}, vai izvēlieties {{ui:Vēsture…}} izvēlnē {{ui:Vairāk}} grupā {{ui:Skats}}. Panelis atveras blakus rasējumam un paliek atvērts, kamēr strādājat, tāpēc varat pārvietoties un tālummainīt rasējumu ar krāsām uz tā.

Vēsture darbojas CadCraft Studio. Pārlūkprogrammā panelis tikai to paziņo.

## No kurienes nāk versijas

- **Šajā datorā.** Katru reizi, kad atverat rasējumu no faila Studio, un katru reizi, kad to saglabājat, Studio glabā faila kopiju savā krātuvē šajā datorā. Pirmā kopija ir {{ui:Kā atvērts}}: fails, kāds tas bija pirms jūsu pirmās saglabāšanas pāri tam. Studio glabā katra rasējuma jaunākās 25 kopijas, un vecākās tiek dzēstas pirmās, kad visas kopijas kopā pārsniedz 400 MB. Saglabāšana, kas neko nemaina, nesaglabā nevienu kopiju. Nekas netiek augšupielādēts.
- **Mākonī.** Kad atverat rasējumu no saviem mākoņa failiem Studio, panelī ir arī {{ui:Mākonī}}: katra versija, ko glabā mākonis, ar tās numuru, to, kas to saglabāja, un piezīmi. Panelis tikai nolasa tās. CadCraft vēl nesūta savas saglabāšanas uz mākoni, tāpēc šīs ir versijas, kas saglabātas citās ierīcēs un tīmeklī. Ja Studio paziņo, ka pierakstīšanās laiks ir beidzies, pierakstieties vēlreiz.

Rasējumam, ko vēl neesat saglabājis, kopiju nav: vispirms saglabājiet to.

## Versijas atvēršana vai atjaunošana

- {{ui:Atvērt}} ievieto šo versiju savā cilnē. Jūsu rasējums netiek aizskarts.
- {{ui:Atjaunot}} aizstāj šo rasējumu ar šo versiju. Vispirms tiek jautāts. Pirms tam Studio vēsturē saglabā rasējuma kopiju tādu, kāds tas ir tagad (atzīmētu kā {{ui:Pirms atjaunošanas}}), un nekas netiek ierakstīts failā, kamēr neesat saglabājis. Atjaunošanu nevar atsaukt ar {{key:Mod+Z}}; izmantojiet šo kopiju.

## Salīdzināšana

1. Noklikšķiniet uz {{ui:Salīdzināt}} kādā versijā. To salīdzina ar {{ui:Rasējums tāds, kāds tas ir tagad}}; lai salīdzinātu to ar citu versiju, vispirms izvēlieties to laukā {{ui:Salīdzināt ar}}.
2. Izlasiet rezultātu zem saraksta: cik objektu pievienoti, noņemti un mainīti, un to saraksts. Noklikšķiniet uz vienuma sarakstā, lai pārvietotu skatu uz to.
3. Uz rasējuma:
   - **zaļi** objekti ir pievienoti,
   - **sarkani** objekti ir noņemti (tie ir tikai vecākajā versijā),
   - **oranži** objekti ir mainīti: jaunā forma ir cieta, vecā — punktēta.
4. {{ui:Rādīt uz rasējuma}} ieslēdz vai izslēdz krāsas; {{ui:Notīrīt krāsas}} noņem rezultātu. Aizverot paneli, krāsas arī tiek notīrītas.

Saraksts norāda, kas mainījās mainītā objektā: tā tekstu, to, ka tas pārvietots, tā formu, slāni, krāsu, līnijas tipu vai līnijas platumu. Katra lapa tiek salīdzināta atsevišķi; krāsas redzamas atvērtajā lapā.

:::note
Rasējumam nav pastāvīga numura katram objektam, tāpēc CadCraft saskaņo objektus pēc to veida: tas pats objekts abās pusēs nav mainīts; objekts tajā pašā tipā un slānī, kas atrodas savā izmērā no vecā objekta, ir tas pats objekts, mainīts; viss pārējais ir pievienots vai noņemts. Objekts, kas pārvietots tālu no sākotnējās vietas, parādās kā noņemts vienā vietā un kā pievienots otrā. Bloka atsauce tiek skaitīta pēc tās bloka satura.
:::

## Biežākās kļūdas

- **„No copies yet.”** Studio glabā kopiju katrā rasējuma atvēršanā un saglabāšanā, ja rasējumam ir fails šajā datorā. Rasējumam, kas atvērts pārlūkprogrammas cilnē, vai rasējumam, kas nekad nav saglabāts, kopiju nav.
- **Mākoņa saraksts trūkst.** Tas parādās rasējumam, kas atvērts no mākoņa Studio; fails, kas atvērts no diska, nav mākoņa rasējums.
- **Viss izskatās mainīts.** Divas versijas, ko saglabājušas dažādas programmas, raksta vienu un to pašu rasējumu dažādos veidos (anonīmu bloku nosaukumi, noapaļošana). Salīdziniet versijas, ko saglabājis CadCraft.
