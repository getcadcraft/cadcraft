---
title: Iestatiet teksta fontu un izmēru ar teksta stiliem
summary: Izveidojiet nosauktus teksta stilus ar fontu, augstumu, platumu un slīpumu, iestatiet vienu pašreizējo jaunam tekstam un mainiet stilu, lai mainītos visu tekstu, kas to izmanto.
keywords: teksta stils, stils, STYLE, ST, TEXTSTYLE, -STYLE, fonts, teksta augstums, platuma koeficients, slīpums, slīpuma leņķis, mainīt fontu, standarta stils, lietot stilu, DDSTYLE
from: bd5a4883
---

## Ko jūs darīsiet

Izveidosiet teksta stilu ar nosaukumu `Notes` ar savu fontu un augstumu, izmantosiet to jaunam tekstam un vēlāk mainīsiet stilu, lai katra piezīme, kas to izmanto, mainītos uzreiz.

## Soļi

1. Ierakstiet {{cmd:STYLE}} (`ST`) un nospiediet {{key:Enter}}, vai noklikšķiniet {{ui:Teksta stils}} rīkjoslā {{ui:Zīmēšana}}. Dialogs {{ui:Teksta stils}} uzskaita rasējumā esošos stilus. Katrā rasējumā ir `Standard`.
2. Noklikšķiniet {{ui:Jauns…}}, ierakstiet `Notes` kā jaunā stila nosaukumu un noklikšķiniet {{ui:Labi}}. Statusa rindā rādās „Teksta stils Notes izveidots un iestatīts kā pašreizējais.”
3. {{ui:Fonts}}: izvēlieties vai ierakstiet fonta nosaukumu. Iestatiet {{ui:Augstums (0 = jautāt katru reizi)}} uz skaitli, piemēram, `2.5`, lai katrs jaunais teksts iegūtu šo augstumu. Atstājiet `0`, ja vēlaties, lai jums katru reizi jautātu.
4. Iestatiet {{ui:Platuma koeficients}} un {{ui:Slīpuma leņķis (°)}}, ja vēlaties šaurākus, platākus vai slīpus burtus. Paraugrinda parāda rezultātu.
5. Noklikšķiniet {{ui:Aizvērt}}. Zīmējiet tekstu ar {{cmd:TEXT}} vai {{cmd:MTEXT}}: jaunais teksts iegūst pašreizējo stilu.
6. Lai izmantotu jau izveidotu stilu, atveriet dialogu vēlreiz, izvēlieties to sarakstā un noklikšķiniet {{ui:Iestatīt pašreizējo}}.
7. Lai uzliktu stilu jau uzzīmētam tekstam, atlasiet tekstu, atveriet dialogu, izvēlieties stilu un noklikšķiniet {{ui:Lietot atlasītajam tekstam}}.

## Vēlāk mainīt stilu

Mainiet stila fontu, augstumu, platumu vai slīpumu dialogā, un katrs teksts, kas to izmanto, seko vienā atsaukšanas solī ({{key:Mod+Z}}). Statusa rindā rādās, cik tekstu sekoja.

## Piezīmes

- {{ui:Dzēst}} noraida `Standard` un stilu, ko vēl izmanto kāds teksts: vispirms mainiet šo tekstu uz citu stilu.
- Stili tiek glabāti rasējuma STYLE tabulā, tāpēc DXF un DWG faili tos saglabā.
- Komandrindā `-STYLE` dara to pašu ar opcijām: [Pašreizējais (C)], [Jauns (N)], Fonts, [Augstums (H)], [Platums (W)], [Slīpums (O)], Dzēst, [Saraksts (L)].
- Fonts, kas nav datorā, kurā tiek atvērts rasējums, tiek parādīts citā veidā.
