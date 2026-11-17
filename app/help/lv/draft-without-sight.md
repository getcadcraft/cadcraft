---
title: Zīmēšana bez redzes
summary: Ieslēdziet piekļuvi, un CadCraft caur jūsu ekrāna lasītāju nolasa katru komandu un rezultātu, apraksta rasējumu un to, kas atrodas tuvu kursoram, ļauj pārvietot kursoru ar tastatūru, atskaņo skaņu katrai piesaistei un satvērējam un pieņem komandas balsī, ja jūsu pārlūkprogramma to var darīt jūsu datorā.
keywords: pieejamība, ekrāna lasītājs, neredzīgs, vāja redze, NVDA, VoiceOver, JAWS, Orca, tastatūras kursors, balss komandas, runa, skaņas, piesaistes skaņas, aprakstīt rasējumu, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Piekļuve** ļauj zīmēt, neredzot ekrānu. Tā ir izslēgta, līdz to ieslēdzat, lai to neiegūtu nejauši.

## Ieslēgt

Atveriet **Iestatījumi** (zobrats vai Ctrl+,), atrodiet **Zīmēšana bez redzes** un izvēlieties **Ieslēgts**. Vai komandrindā ierakstiet `ACCESS` un atbildiet `Ieslēgts`. Iestatījums tiek atcerēts šajā datorā.

Ar ieslēgtu Piekļuvi:

- **Viss, ko rāda komandrinda, tiek nolasīts** caur jūsu ekrāna lasītāju: ko ierakstījāt, uzvedni, atbildi un katru kļūdu. CadCraft izmanto savus pieklājīgos un steidzamos dzīvos reģionus, tāpēc ekrāna lasītājam, kas lasa dzīvos reģionus, nekas nav jāiestata. Kļūdas un atcelšanas pārtrauc, pārējais gaida savu kārtu.
- **Rasējuma apgabals ir sasniedzams.** Nospiediet Tab, līdz dzirdat "Rasējums", vai nospiediet Shift+Tab no komandrindas. Tas ir reģions, kas taustiņus nodod CadCraft.

## Taustiņi uz rasējuma

| Taustiņš | Ko tas dara |
|---|---|
| Bultiņu taustiņi | Pārvieto tastatūras kursoru. Solis ir aptuveni simtdaļa no tā, ko rāda ekrāns, noapaļots līdz 1, 2 vai 5. Shift pārvieto desmit reizes tālāk, Ctrl – desmitdaļu. |
| Enter | Izvēlas punktu zem kursora, tieši kā klikšķis. |
| Space | Komandrindā nospiediet Enter: pabeidz LINE, pieņem noklusējumu. |
| Tab, Shift+Tab | Pāriet uz nākamo vai iepriekšējo piesaistes punktu tuvu kursoram, vispirms tuvāko. |
| G | Pārlūko izvēlēto objektu satvērējus. |
| D | Apraksta rasējumu: cik objektu, kāda veida, cik lieli, kas ir izvēlēts. |
| W | Pasaka, kur atrodas kursors un cik tālu tas ir no pēdējā punkta. |
| N | Pasaka, kas atrodas tuvu kursoram, vispirms tuvākais, ar attālumu un pusi. |
| S | Apraksta izvēlētos objektus. |
| R | Vēlreiz pasaka pēdējo teikto. |
| V | Balss ieslēgta vai izslēgta. |
| / | Pāriet uz komandrindu. |
| ? | Uzskaita šos taustiņus. |

Pārvietojoties ar taustiņiem, tiek pateikts, kur esat nonācis. Kad komanda gaida punktu, tiek pateikts arī, cik tālu un kurā virzienā esat no pēdējā punkta, piemēram, "2400 no pēdējā punkta, pa labi, 0 grādi".

## Komandas

- {{cmd:ACCESS}} ieslēdz vai izslēdz Piekļuvi, piesaistes skaņas un balsi un pasaka stāvokli.
- {{cmd:DESCRIBE}} pasaka, ko satur rasējums.
- {{cmd:WHEREAMI}} pasaka, kur atrodas kursors.
- {{cmd:NEARBY}} pasaka, kas atrodas tuvu kursoram.
- {{cmd:SAYSEL}} pasaka, kas ir izvēlēts, pa vienam teikumam katram objektam.
- {{cmd:VOICE}} ieslēdz vai izslēdz runātas komandas.

Šīs piecas komandas nolasa rasējumu un izdrukā atbildi; tās neko nemaina.

## Skaņas piesaistēm un satvērējiem

Iestatījumos ieslēdziet **Piesaistes un satvērēju skaņas**. Katram piesaistes veidam ir sava augstuma un skaņas īpašība, tāpēc galapunktu var atšķirt no vidus punkta, centra, krustpunkta un pārējiem, un satvērējam ir dubultsitiens. Skaņa pārvietojas pa kreisi vai pa labi, sekojot kursoram pa ekrānu. Skaņas tiek veidotas jūsu datorā; neko nelejupielādē.

## Komandas balsī

Iestatījumos ieslēdziet **Komandas balsī**. Pasakiet komandas nosaukumu ("line", "circle", "move"), tad pasakiet skaitļus tā, kā tos lasītu: "point three hundred comma four hundred", "distance twelve hundred", "angle forty five". "Enter", "cancel", "undo" un "redo" dara to, ko saka. Dzirdētais tiek atkārtots, un frāze, kas nav komanda, tiek ziņota, nevis minēta.

**Kur tiek atpazīta runa.** CadCraft pati nav runas pakalpojuma un nenosūta audio nekur. Tā lūdz jūsu pārlūkprogrammu atpazīt runu šajā datorā. Ja pārlūkprogramma to var, izvēle ir **Šajā datorā**, un audio neiziet ārā. Ja nevar, balss paliek izslēgta, ja vien neizvēlaties **Pārlūkprogrammas tiešsaistes pakalpojums**, kas ļauj pārlūkprogrammai sūtīt audio tās ražotāja runas pakalpojumam. Iestatījumi pirms lēmuma pasaka, kas attiecas.

## Ko tas vēl nedara

- Piekļuvi ir tikai CadCraft. Pārējās astoņas programmas seko ar tiem pašiem taustiņiem un skaņām.
- Teksts rasējumā (piezīme, bloka nosaukums) tiek nolasīts tā, kā tas rakstīts; to nekad neuztver kā norādījumu.
- To pārbaudīja ar sintētiskām pārbaudēm un pārlūkprogrammas testiem; roku pārbaudes ar NVDA, VoiceOver un neredzīgu vai vājredzīgu testētāju vēl ir priekšā. Ja to izmēģināt, lūdzu, pastāstiet, kas trūkst.
