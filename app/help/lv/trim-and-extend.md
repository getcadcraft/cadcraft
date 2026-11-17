---
title: Apgriešana un pagarināšana
summary: Nogrieziet līnijas atpakaļ tur, kur tās krusto citas, un pagariniet tās, lai tās sasniegtu citas — pa vienam gabalam vai daudzus uzreiz, velkot ceļu cauri tiem.
keywords: trimextendmode, loga vilkšana, apgriest, pagarināt, tr, ex, ātrā apgriešana, vilkšana, brīvroku, ceļš, žogs, krustošanās, shift, griešanas malas, robežmalas, edgemode, režīms, standarta, ātrais, dzēst, priekšskatījums, sienas, tīrīšana
from: 25fbc5bd
---

## Ko jūs iemācīsieties

Kā darbojas {{cmd:TRIM}} un {{cmd:EXTEND}} un ātrie veidi, kā tos izmantot: velciet cauri daudziem gabaliem uzreiz, turiet {{key:Shift}}, lai pārslēgtos starp apgriešanu un pagarināšanu, un redziet, kas tiks noņemts, pirms noklikšķināt.

## Apgriezt vienu gabalu

1. Uzzīmējiet garu horizontālu līniju un divas īsas līnijas, kas to šķērso.
2. Ierakstiet `TR` un nospiediet {{key:Enter}}. Vēsture saka `Current settings: Quick mode, edges: No extend`.
3. Novietojiet rādītāju uz garās līnijas starp abām īsajām. Šis gabals kļūst pelēks un punktēts: tas ir tas, kas tiks noņemts.
4. Noklikšķiniet. Gabals pazūd.
5. Nospiediet {{key:Enter}}, lai beigtu komandu.

Ātrajā režīmā (noklusējums) katrs redzamais objekts ir griešanas mala, tāpēc malas nav jāizvēlas iepriekš. Noklikšķiniet gabalu, kuru vēlaties noņemt. Objekts, ko nekas nekrusto, tiek dzēsts veselā gabalā, un vēsture to saka.

## Apgriezt daudzus gabalus vienā vilkšanā

1. Uzzīmējiet garu horizontālu līniju un desmit īsas vertikālas līnijas, kas to šķērso.
2. Ierakstiet `TR` un nospiediet {{key:Enter}}.
3. Nospiediet peles pogu virs garās līnijas, pa kreisi no pirmās vertikālās līnijas, un velciet pāri visām desmit virs garās līnijas.

Kamēr velkat, ceļš redzams kā punktēta līnija, un katrs krustotais gabals kļūst pelēks. Atlaidiet: visi desmit augšējie gabali tiek apgriezti vienā solī. Ierakstiet `U` un nospiediet {{key:Enter}}, lai visus atjaunotu uzreiz.

:::tip
Varat arī noklikšķināt divos tukšos punktos: līnija starp tiem darbojas kā vilkts ceļš. Ierakstiet `F` (Fence), lai tā vietā noklikšķinātu punktu virkni, un pēc tam nospiediet {{key:Enter}}.
:::

:::touch
Velciet pirkstu tāpat. Pieskaršanās gabalam to apgriež.
:::

## Pagarināt, izmantojot Shift

1. Uzzīmējiet vertikālu līniju un pa kreisi no tās piecas īsas horizontālas līnijas, kas apstājas pirms tās.
2. Ierakstiet `TR` un nospiediet {{key:Enter}}.
3. Turiet {{key:Shift}}. Novietojiet rādītāju uz īsas līnijas: daļa, par kādu tā pieaugtu, parādās pelēka un punktēta.
4. Joprojām turot {{key:Shift}}, velciet uz leju pāri pieciem īsajiem.

Visas piecas tagad sasniedz vertikālo līniju. {{key:Shift}} darbojas pretēji {{cmd:EXTEND}} (`EX`): klikšķis pagarina, {{key:Shift}}+klikšķis apgriež. Pagarināšana pagarina galu, kas atrodas tuvāk vietai, kur noklikšķināt vai kur ceļš krustojas.

## Apgriezt logā

1. Ierakstiet `TR` un nospiediet {{key:Enter}}.
2. Ierakstiet `C` un nospiediet {{key:Enter}}.
3. Noklikšķiniet divus stūrus ap gabaliem, ko noņemt.

Katrs gabals, kas atrodas vismaz daļēji logā, tiek apgriezts.

Lai iegūtu logu tikai velkot, bez `C` ierakstīšanas: {{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Vilkšana apgriešanai un pagarināšanai}} ›
{{ui:Logs}}. Tad, nospiežot tukšā vietā un velkot, tiek zīmēta kaste, un katrs gabals, ko tā skar, tiek apgriezts (vai pagarināts {{cmd:EXTEND}} komandā vai ar {{key:Shift}}). {{ui:Ceļš}} (sākotnējā) atgriež brīvroku ceļu. Iestatījumu rinda TRIM sākumā saka, kurš ir ieslēgts.

## Izvēlēties griešanas malas (standarta režīms)

Dažreiz griež tikai viena līnija, piemēram, sienas virsma, ko krusto daudzas citas līnijas.

1. Ierakstiet `TR` un nospiediet {{key:Enter}}.
2. Ierakstiet `O` (mOde) un nospiediet {{key:Enter}}, tad ierakstiet `S` (Standard) un nospiediet {{key:Enter}}.
3. Uzvednē `Select cutting edges` noklikšķiniet malu līnijas (vai velciet logu), tad nospiediet {{key:Enter}}. Nospiežot {{key:Enter}}, kad nekas nav atlasīts, katrs objekts kļūst par malu.
4. Noklikšķiniet vai velciet cauri gabaliem, ko noņemt.

Griež tikai izvēlētās malas, un objekts, ko neviena mala nekrusto, paliek nepieskarts. Režīms paliek spēkā, līdz aizverat lapu; ierakstiet `O`, tad `Q}`, lai atgrieztos ātrajā režīmā. {{cmd:TRIMEXTENDMODE}} iestata to pirms sākšanas, tāpat kā citur darbojas mainīgais ar tādu pašu nosaukumu: `0` Standard, `1` Quick. `T` (cuTting edges) izvēlas jaunas malas jebkurā laikā; {{cmd:EXTEND}} komandā tā ir `B` (Boundary edges).

## Malas, kas sasniegtu

1. Ierakstiet `TR` un nospiediet {{key:Enter}}.
2. Ierakstiet `E` (Edge) un nospiediet {{key:Enter}}, tad `E` (Extend) un nospiediet {{key:Enter}}.

Tagad griešanas līnija vai loks, kas apstājas īsi, tiek skaitīts tā, it kā turpinātos: īsa līnija griež tur, kur tā krustotos, ja būtu garāka. Ierakstiet `E`, tad `N` (No extend), lai atgrieztos. Tas ir tas pats, kas EDGEMODE 1 un 0.

## Dzēst, nepametot komandu

Ierakstiet `R` (eRase) un nospiediet {{key:Enter}}, izvēlieties dzēšamos objektus un nospiediet {{key:Enter}}. TRIM turpina darbu.

## Biežākās kļūdas

- **Viss līnija pazuda.** Ātrajā režīmā objekts, ko nekas nekrusto, tiek dzēsts. Ierakstiet `U`, lai to atjaunotu, vai pārslēdzieties uz standarta režīmu (`O`, `S`).
- **"Nothing to trim there: no chosen edge crosses that object."** Standarta režīms griež tikai pie izvēlētajām malām. Ierakstiet `T`, lai tās izvēlētos vēlreiz.
- **"No boundary in that direction."** Pagarināšana uz priekšu neatrada neko. Noklikšķiniet tuvāk galam, kuram jāpieaug, vai ieslēdziet `E` (Edge, Extend) robežām, kas apstājas īsi.
- **Vilkšana uzzīmēja lasso.** Vilkšana apgriež tikai tad, kad TRIM vai EXTEND pieprasa objektu. Ja neviena komanda nedarbojas, vilkšana atlasa (sk. [Lasso atlase](topic:lasso-selection)).
- **Apgriezt var tikai līnijas, lokus, apļus un polilīnijas.** Vispirms sadaliet bloku, lai apgrieztu tā līnijas.
