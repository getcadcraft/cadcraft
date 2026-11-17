---
title: Zīmēšana ar koordinātēm
summary: Uzzīmējiet precīzu grīdas kontūru, ierakstot absolūtās, relatīvās un polārās koordinātas, kā arī tiešo attālumu.
keywords: līnija, pline, polilīnija, koordinātas, relatīvās, polārās, absolūtās, tiešais attālums, @, punktu ievade, precīzi, ortogonāli
from: 19e82350
---

## Ko jūs izveidosiet

L formas telpas kontūru, 6000 uz 4500 ar 2000 uz 1500 izgriezumu, zīmētu precīzi, un sienu 30 grādu leņķī. Jūs izmantosiet visus četrus punkta ievades veidus. Strādājiet milimetros: viena rasējuma vienība ir viens milimetrs.

Visu formātu ātrā atsauce ir [Koordinātu un attāluma ievade](topic:coordinate-entry).

## Pirms sākat

1. Atveriet CadCraft. Ja rasējums ir atvērts, vispirms noklikšķiniet {{ui:Jauna}}.
2. Nospiediet {{key:Esc}}, lai nekas nebūtu atlasīts. Labajā panelī ir {{ui:Pašreizējie iestatījumi}}.
3. Iestatiet {{ui:Vienības}} uz {{ui:Milimetri}}. Nekas netiek izmērā mainīts; tas tikai nosaka, ko vienība nozīmē lapām un drukām.

## Absolūtās koordinātas: pirmais punkts

Absolūtā koordināta ir pozīcija, kas mērīta no sākumpunkta, ierakstīta kā `x,y`.

1. Ierakstiet `L` un nospiediet {{key:Enter}}. Uzvedne ir `Specify first point:`.
2. Ierakstiet `0,0` un nospiediet {{key:Enter}}.

Līnija tagad stiepjas no sākumpunkta līdz krustiņam. Statusa joslā koordinātas rāda attālumu un leņķi no sākuma punkta, kamēr kustaties.

## Relatīvās koordinātas: @dx,dy

Relatīvā koordināta tiek ierakstīta kā `@dx,dy`: tik tālu pa labi, tik augstu uz augšu, no pēdējā punkta. Negatīvi skaitļi iet pa kreisi vai uz leju.

3. Ierakstiet `@6000,0` un nospiediet {{key:Enter}}. 6000 garā līnija iet pa labi.
4. Ierakstiet `@0,3000` un nospiediet {{key:Enter}}.
5. Ierakstiet `@-2000,0` un nospiediet {{key:Enter}}.
6. Ierakstiet `@0,1500` un nospiediet {{key:Enter}}.

Jums vajadzētu redzēt četras savienotas līnijas, kas kāpj augšup telpas labajā pusē.

## Tiešā attāluma ievade: viens skaitlis

Kad ierakstāt vienu skaitli, CadCraft iet šo attālumu krustiņa virzienā. Ieslēdziet {{ui:Ortogonāli}}, lai virziens piesaistītos horizontālam vai vertikālam.

7. Nospiediet {{key:F8}} vai noklikšķiniet {{ui:Ortogonāli}} statusa joslā. Statusa joslā ir teksts "Ortogonāli ieslēgts".
8. Pārvietojiet krustiņu pa kreisi no pēdējā punkta. Stiepjamā līnija paliek horizontāla.
9. Ierakstiet `4000` un nospiediet {{key:Enter}}. Līnija iet 4000 pa kreisi.
10. Pārvietojiet krustiņu zem pēdējā punkta.
11. Ierakstiet `4500` un nospiediet {{key:Enter}}. Jūs esat atpakaļ sākuma punktā.
12. Nospiediet {{key:Enter}} tukšajā uzvednē, lai beigtu komandu.

:::mac
F8 var vadīt multividi Mac tastatūrā. Turiet **fn** un nospiediet F8 vai noklikšķiniet {{ui:Ortogonāli}}. Skatiet [Taustiņi, peles un skārienpaliktņi](common:keys).
:::

Tagad jums ir slēgta L formas kontūra, kas sastāv no sešām atsevišķām līnijām.

13. Noklikšķiniet {{ui:Robežas}}, lai redzētu visu.

## Polārās koordinātas: @attālums<leņķis

Polārā koordināta tiek ierakstīta kā `@attālums<leņķis`. Leņķi ir grādos, mērīti pretēji pulksteņrādītāja virzienam no pozitīvā X virziena: 0 ir pa labi, 90 ir uz augšu, 180 ir pa kreisi, 270 (vai -90) ir uz leju.

14. Ierakstiet `L` un nospiediet {{key:Enter}}.
15. Ierakstiet `6000,0` un nospiediet {{key:Enter}}, lai sāktu apakšējā labajā stūrī.
16. Ierakstiet `@2500<-30` un nospiediet {{key:Enter}}. 2500 garā līnija iziet no stūra, virzoties pa labi un uz leju 30 grādu leņķī zem horizontāles.
17. Nospiediet {{key:Enter}}, lai beigtu komandu.

Polārā koordināta bez `@`, piemēram, `2500<30`, tiek mērīta no sākumpunkta, nevis no pēdējā punkta.

## Tā pati kontūra kā viena polilīnija

Seši atsevišķas līnijas ir labas daudziem darbiem, bet polilīnija ir viens objekts: to var nobīdīt, izmērīt un atlasīt kopumā. Izmantojiet {{cmd:PLINE}} ar to pašu ievadi.

1. Ierakstiet `PL` un nospiediet {{key:Enter}}.
2. Ierakstiet `0,-6000` un nospiediet {{key:Enter}}, lai sāktu zem pirmās kontūras.
3. Ierakstiet `@6000,0` un nospiediet {{key:Enter}}.
4. Ierakstiet `@0,3000` un nospiediet {{key:Enter}}.
5. Ierakstiet `@-2000,0` un nospiediet {{key:Enter}}.
6. Ierakstiet `@0,1500` un nospiediet {{key:Enter}}.
7. Ierakstiet `@-4000,0` un nospiediet {{key:Enter}}.
8. Ierakstiet `C` un nospiediet {{key:Enter}}. Polilīnija tiek aizvērta un komanda beidzas.
9. Noklikšķiniet uz jaunās kontūras. Labajā panelī ir rādīts "Polilīnija", tās {{ui:Virsotnes}}, {{ui:Garums}} un, tā kā tā ir slēgta, tās {{ui:Laukums}}.

Laukumam jābūt 24000000 (kvadrātmilimetri, kas ir 24 kvadrātmetri).

## Iespējas zīmēšanas laikā

- {{cmd:LINE}} un {{cmd:PLINE}} laikā ierakstiet `U` un nospiediet {{key:Enter}}, lai atsauktu pēdējo segmentu, neizejot no komandas.
- {{cmd:LINE}} laikā `C` aizver līniju atpakaļ līdz pirmajam punktam, kad ir vismaz divi segmenti.
- {{cmd:PLINE}} laikā `A` pārslēdz uz loku segmentiem (katrs loks turpinās vienmērīgi no iepriekšējā segmenta), un `L` atgriež līnijās. Loku režīmā slēgšanas iespēja ir `CL`.
- Nospiežot {{key:Enter}} pie `Specify first point:` komandā {{cmd:LINE}}, sākas no pēdējā punkta, ko norādījāt, tātad varat turpināt tur, kur apstājāties.

## Biežākās kļūdas

- **Ierakstīt `6000,0`, kad domājāt `@6000,0`.** Bez `@` punkts tiek mērīts no sākumpunkta, nevis no pēdējā punkta, tāpēc līnija aizlido uz negaidītu vietu. CadCraft `x,y` vienmēr ir absolūts. Lai to atsauktu, nospiediet `U` un {{key:Enter}}.
- **Komats ierakstīts kā decimālzīme.** Decimāldaļām izmanto punktu: `1250.5`. Komats vienmēr atdala X no Y.
- **Tiešais attālums gāja nepareizā virzienā.** Viens skaitlis seko krustiņam. Pirms nospiežat {{key:Enter}}, pārvietojiet krustiņu uz vēlamo pusi, un taisnām līnijām ieslēdziet {{ui:Ortogonāli}}.
- **"Point or option keyword required."** CadCraft nesaprata, ko ierakstījāt. Pārbaudiet, vai skaitlī nav atstarpju vai trūkst komats, un ierakstiet vēlreiz.
- **Pēdas un collas.** CadCraft nolasa tikai vienkāršus skaitļus. Ierakstiet `150` 12'-6" collu rasējumā vai `12.5` pēdu rasējumā.
