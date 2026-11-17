---
title: Tegn uten syn
summary: Slå på Tilgang, så leser CadCraft opp hver kommando og resultat gjennom skjermleseren din, beskriver tegningen og det som er nær markøren, lar deg flytte markøren med tastaturet, spiller en lyd for hvert fang og håndtak, og tar imot kommandoer med stemmen der nettleseren din kan det på datamaskinen din.
keywords: tilgjengelighet, skjermleser, blind, svaksynt, NVDA, VoiceOver, JAWS, Orca, tastaturmarkør, stemmekommandoer, tale, lyder, fanglyder, beskriv tegning, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Tilgang** lar deg tegne uten å se skjermen. Den er av til du slår den på, så ingen får den ved et uhell.

## Slå den på

Åpne **Innstillinger** (tannhjulet, eller Ctrl+,), finn **Tegn uten syn** og velg **På**. Eller skriv `ACCESS` på kommandolinjen og svar `On`. Den huskes på denne datamaskinen.

Når Tilgang er på:

- **Alt kommandolinjen sier, leses opp** gjennom skjermleseren din: det du skrev, spørsmålet den stiller, svaret og hver feil. CadCraft bruker sine egne høflige og påtrengende direktesoner, så en skjermleser som leser direktesoner, trenger ingen oppsett. Feil og avbrudd avbryter; alt annet venter på tur.
- **Tegneområdet er tilgjengelig.** Trykk Tab til du hører «Tegning», eller trykk Shift+Tab fra kommandolinjen. Det er et område som sender taster videre til CadCraft.

## Taster på tegningen

| Tast | Hva den gjør |
|---|---|
| Piltaster | Flytter tastaturmarkøren. Et steg er omtrent en hundredel av det skjermen viser, avrundet til 1, 2 eller 5. Shift flytter ti ganger så langt, Ctrl en tidel. |
| Enter | Velger punktet under markøren, akkurat som et klikk ville gjort. |
| Space | Trykker Enter på kommandolinjen: avslutter LINE, tar standardvalget. |
| Tab, Shift+Tab | Hopper til neste eller forrige fangepunkt nær markøren, nærmeste først. |
| G | Går gjennom håndtakene på de valgte objektene. |
| D | Beskriv tegningen: hvor mange objekter, av hvilken type, hvor store, hva som er valgt. |
| W | Si hvor markøren er og hvor langt den er fra det siste punktet. |
| N | Si hva som er nær markøren, nærmeste først, med avstand og side. |
| S | Beskriv de valgte objektene. |
| R | Si det siste igjen. |
| V | Stemme på eller av. |
| / | Gå til kommandolinjen. |
| ? | List opp disse tastene. |

Når du beveger deg med tastene, sier den hvor du landet. Når en kommando venter på et punkt, sier den også hvor langt og i hvilken retning du er fra det siste punktet, for eksempel «2400 fra det siste punktet, til høyre, i 0 grader».

## Kommandoer

- {{cmd:ACCESS}} slår Tilgang, fanglyder og stemme på eller av og sier tilstanden.
- {{cmd:DESCRIBE}} sier hva tegningen inneholder.
- {{cmd:WHEREAMI}} sier hvor markøren er.
- {{cmd:NEARBY}} sier hva som ligger nær markøren.
- {{cmd:SAYSEL}} sier hva som er valgt, én setning per objekt.
- {{cmd:VOICE}} slår opplesing av kommandoer på eller av.

Disse fem leser tegningen og skriver ut et svar; de endrer ingenting.

## Lyder for fang og håndtak

Slå på **Lyder for fang og håndtak** i Innstillinger. Hver fangtype har sin egen tonehøyde og lyd, så du kan skille et endepunkt fra et midtpunkt, et senter, et skjæringspunkt og resten, og et håndtak har et dobbelt tikk. Lyden panorerer til venstre eller høyre etter markøren over skjermen. Lydene lages på datamaskinen din; ingenting lastes ned.

## Kommandoer med stemme

Slå på **Kommandoer med stemme** i Innstillinger. Si et kommandonavn («line», «circle», «move»), og si deretter tall slik du ville lest dem: «punkt tre hundre komma fire hundre», «avstand tolv hundre», «vinkel førtifem». «Enter», «cancel», «undo» og «redo» gjør det de sier. Det som ble hørt, leses opp tilbake, og en frase som ikke er en kommando, meldes fra om i stedet for å bli gjettet.

**Der talen gjenkjennes.** CadCraft har ingen egen talegjenkjenningstjeneste og sender ikke lyd noe sted. Den ber nettleseren din gjenkjenne tale på denne datamaskinen. Hvis nettleseren din kan det, er valget **På denne datamaskinen**, og ingen lyd forlater den. Hvis den ikke kan det, er stemme av med mindre du velger **Nettleserens nettjeneste**, som lar nettleseren sende lyd til produsentens talegjenkjenning. Innstillinger sier hvilken som gjelder før du bestemmer deg.

## Det den ikke gjør ennå

- Bare CadCraft har Tilgang. De andre åtte appene følger, med de samme tastene og lydene.
- Tekst i en tegning (en merknad, et blokknavn) leses opp slik den er skrevet; den tas aldri som en instruksjon.
- Den er prøvd med syntetiske kontroller og nettleserens tester; kontroller for hånd med NVDA, VoiceOver og en blind eller svaksynt tester gjenstår. Hvis du prøver den, si fra om hva som mangler.
