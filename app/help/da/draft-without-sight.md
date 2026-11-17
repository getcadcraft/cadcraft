---
title: Tegn uden syn
summary: Slå Adgang til, og CadCraft siger hver kommando og hvert resultat op via din skærmlæser, beskriver tegningen og det, der er nær markøren, lader dig flytte markøren med tastaturet, afspiller en lyd for hvert objektfang og greb og tager kommandoer med stemmen, hvor din browser kan det på din computer.
keywords: tilgængelighed, skærmlæser, blind, svagtseende, NVDA, VoiceOver, JAWS, Orca, tastaturmarkør, stemmekommandoer, tale, lyde, objektfangslyde, beskriv tegning, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Adgang** lader dig tegne uden at se skærmen. Den er slået fra, indtil du slår den til, så ingen får den ved et uheld.

## Slå den til

Åbn **Indstillinger** (tandhjulet, eller Ctrl+,), find **Tegn uden syn** og vælg **Til**. Eller skriv `ACCESS` i kommandolinjen og svar `Til`. Det huskes på denne computer.

Med Adgang til:

- **Alt, kommandolinjen viser, læses op** via din skærmlæser: det du skrev, den prompt den stiller, svaret og hver fejl. CadCraft bruger sine egne høflige og hastende live-områder, så en skærmlæser, der læser live-områder, kræver ingen opsætning. Fejl og annulleringer afbryder; alt andet venter på sin tur.
- **Tegneområdet kan nås.** Tryk Tab, indtil du hører »Tegning«, eller tryk Shift+Tab fra kommandolinjen. Det er et område, der sender taster videre til CadCraft.

## Taster på tegningen

| Tast | Hvad den gør |
|---|---|
| Piletaster | Flytter tastaturmarkøren. Et trin er cirka en hundredel af det, skærmen viser, afrundet til 1, 2 eller 5. Shift flytter ti gange så langt, Ctrl en tiendedel. |
| Enter | Vælger punktet under markøren, præcis som et klik ville. |
| Space | Trykker Enter i kommandolinjen: afslutter LINE, tager standarden. |
| Tab, Shift+Tab | Hopper til det næste eller forrige objektfangspunkt nær markøren, nærmeste først. |
| G | Går igennem grebene på de valgte objekter. |
| D | Beskriver tegningen: hvor mange objekter, af hvilken slags, hvor store, hvad der er valgt. |
| W | Siger, hvor markøren er, og hvor langt den er fra det sidste punkt. |
| N | Siger, hvad der er nær markøren, nærmeste først, med afstand og side. |
| S | Beskriver de valgte objekter. |
| R | Siger det sidste igen. |
| V | Stemme til eller fra. |
| / | Går til kommandolinjen. |
| ? | Lister disse taster. |

Når du flytter med tasterne, siger den, hvor du landede. Når en kommando venter på et punkt, siger den også, hvor langt og i hvilken retning du er fra det sidste punkt, fx "2400 fra det sidste punkt, til højre, i 0 grader".

## Kommandoer

- {{cmd:ACCESS}} slår Adgang, objektfangslyde og stemme til eller fra og siger status.
- {{cmd:DESCRIBE}} siger, hvad tegningen indeholder.
- {{cmd:WHEREAMI}} siger, hvor markøren er.
- {{cmd:NEARBY}} siger, hvad der ligger tæt på markøren.
- {{cmd:SAYSEL}} siger, hvad der er valgt, én sætning pr. objekt.
- {{cmd:VOICE}} slår oplæste kommandoer til eller fra.

Disse fem læser tegningen og skriver et svar; de ændrer intet.

## Lyde for objektfang og greb

Slå **Lyde for objektfang og greb** til i Indstillinger. Hver type objektfang har sin egen tonehøjde og lyd, så du kan skelne et endepunkt fra et midtpunkt, et centrum, et skæringspunkt og de andre, og et greb har et dobbelt tik. Lyden panorerer til venstre eller højre, så den følger markøren hen over skærmen. Lydene laves på din computer; intet hentes.

## Kommandoer med stemme

Slå **Kommandoer med stemme** til i Indstillinger. Sig et kommandonavn ("line", "circle", "move") og sig derefter tal, som du ville læse dem op: "punkt tre hundrede komma fire hundrede", "afstand tolv hundrede", "vinkel femogfyrre". "Enter", "annuller", "fortryd" og "gentag" gør, hvad de siger. Det du blev hørt sige, læses op igen, og en vending, der ikke er en kommando, meldes, og gættes ikke.

**Hvor talen genkendes.** CadCraft har ingen taletjeneste selv og sender ingen lyd nogen steder. Den beder din browser om at genkende tale på denne computer. Hvis din browser kan det, er valget **På denne computer**, og ingen lyd forlader den. Hvis den ikke kan, forbliver stemmen slået fra, medmindre du vælger **Browsertjeneste online**, som lader browseren sende lyd til dens producents taletjeneste. Indstillinger siger, hvilken der gælder, før du beslutter dig.

## Hvad den ikke gør endnu

- Kun CadCraft har Adgang. De andre syv apps følger med de samme taster og lyde.
- Tekst i en tegning (en note, et bloknavn) læses op, som den er skrevet; den tages aldrig som en instruktion.
- Den er prøvet med syntetiske kontroller og browsertestene; håndtests med NVDA, VoiceOver og en blind eller svagtseende tester mangler stadig. Hvis du prøver den, så fortæl os, hvad der mangler.
