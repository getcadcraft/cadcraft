---
title: Konstrukcijas līnijas un stari
summary: Zīmējiet līnijas, kas turpinās bez gala (XLINE) vai no punkta vienā virzienā (RAY), lai izlīdzinātu lietas, un apgrieziet tās par parastām līnijām.
keywords: xline, ray, konstrukcijas līnija, konstrukcijas līnijas, bezgalīga līnija, vadlīnija, atsauces līnija, dalīšana uz pusēm, nobīdes līnija, izkārtojuma līnijas, xl
from: b6c398bc
---

## Ko jūs iemācīsieties

Kā zīmēt konstrukcijas līnijas, lai izlīdzinātu lietas, kamēr zīmējat: caur diviem punktiem, horizontāli vai vertikāli, leņķī, pusceļā starp diviem virzieniem vai noteiktā attālumā no līnijas. Un kā tās apgriezt par parastām līnijām, kad tās ir paveikušas savu darbu.

## Divi veidi

- **Konstrukcijas līnija** ({{cmd:XLINE}}) turpinās bez gala abos virzienos.
- **Stars** ({{cmd:RAY}}) sākas punktā un turpinās bez gala vienā virzienā.

Abi tiek zīmēti pa visu zīmējuma laukumu neatkarīgi no tālummaiņas, sadalītajā ekrānā un skata logos lapā. {{ui:Extents}} (Robežas) tos neiekļauj, tāpēc tālummaiņa līdz zīmējumam joprojām ietver to, ko esat zīmējis.

## Zīmējiet konstrukcijas līnijas

1. Noklikšķiniet {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}, vai ierakstiet `XL` un nospiediet {{key:Enter}}.
2. Noklikšķiniet punktu. Katrs nākamais klikšķis pievieno konstrukcijas līniju caur pirmo punktu un to punktu, uz kura noklikšķiniet.
3. Nospiediet {{key:Enter}}, lai pabeigtu.

Pirmā punkta vietā var ierakstīt opciju:

| Opcija | Ko tā dara |
|---|---|
| `H` (horizontāli) | Horizontālas līnijas, pa vienai caur katru noklikšķināto punktu. |
| `V` (vertikāli) | Vertikālas līnijas caur katru punktu. |
| `A` (leņķis) | Līnijas leņķī, kuru ierakstāt (grādos, pretēji pulksteņa rādītājam no X ass), caur katru punktu. `R` (atsauce) mēra leņķi no līnijas, kuru izvēlaties. |
| `B` (bisektrise) | Noklikšķiniet stūri, tad punktu gar vienu malu: katrs punkts gar otru malu pievieno līniju pusceļā starp abām. |
| `O` (nobīde) | Ierakstiet attālumu, izvēlieties līniju, tad noklikšķiniet pusi: konstrukcijas līnija tik tālu no tās, paralēli. `T` (caur) to tā vietā novieto caur noklikšķinātu punktu. Attālums tiek atcerēts nākamajai reizei. |

## Zīmējiet starus

1. Noklikšķiniet {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}, vai ierakstiet `RAY` un nospiediet {{key:Enter}}.
2. Noklikšķiniet, kur stari sākas.
3. Noklikšķiniet punktu katram staram, caur kuru tam jāiet. Nospiediet {{key:Enter}}, lai pabeigtu.

## Piesaistīšana un apgriešana

Konstrukcijas līnijām un stariem darbojas piesaiste Tuvākais, Perpendikulārs un Krustpunkts. Tiem nav galu un vidus, tāpēc Galapunkts un Viduspunkts uz tiem neko neatrod.

Tās griež un tiek griezti kā citas līnijas komandās {{cmd:TRIM}} un {{cmd:BREAK}}:

- Ja nogriežat vienu galu no konstrukcijas līnijas, tā kļūst par staru, kas sākas griezuma vietā.
- Ja nogriežat tālo daļu no stara, tas kļūst par parastu līniju.
- Ja konstrukcijas līniju pārtrauc vienā punktā, iegūstat divus starus.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} un {{cmd:STRETCH}} darbojas arī ar tiem. Loga atlase tos nekad neatlasa, jo neviens logs nevar ietvert visu bezgalīgo līniju; krustojošs logs vai klikšķis to dara.

:::note
DWG (visas versijas) un DXF 2000 tās saglabā kā konstrukcijas līnijas. DXF R12 tādu nav, tāpēc tur tās kļūst par līnijām pa visu zīmējumu, un saglabāšana to pasaka. Drukāšana vai PDF tās zīmē tikai pa to, kas tiek izdrukāts.
:::
