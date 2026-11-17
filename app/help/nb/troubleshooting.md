---
title: Feilsøking
summary: Meldinger CadCraft viser, og problemer du kan møte, hver med årsak og løsning.
keywords: problem, feil, fungerer ikke, melding, kan ikke åpne, ukjent kommando, skjer ingenting, fastlåst, taster fungerer ikke, tom, mangler, løs
from: 8299b222
---

## Åpne filer

| Melding eller symptom | Årsak | Løsning |
|---|---|---|
| «CadCraft åpner DWG- og DXF-tegninger. "…" er verken.» | Filen er ikke en `.dwg` eller `.dxf`. | Åpne selve tegningsfilen. En PDF kan hentes inn (Åpne spør: importer eller legg ved, se [PDF-underlag](topic:pdf-underlay)); bilder legges inn med `IMAGEATTACH`. |
| «Denne binære DXF-en slutter midt i et objekt: filen er kuttet av eller skadet.» | Den binære DXF-en stopper før sin slutt. | Skriv RECOVER for å åpne det som kan leses, eller be om filen på nytt. |
| «Dette er ikke en lesbar DXF (feil gruppekode på linje …).» | DXF-en er skadet eller er egentlig ikke en DXF. | Be om filen på nytt, eller om en DWG. |
| «Denne tegningen kunne ikke leses. Den kan være skadet, eller lagret i en versjon leseren ikke håndterer ennå (…).» | DWG-leseren kunne ikke lese den. | Be om DWG-filen lagret i en eldre versjon, eller en DXF. |
| «Denne tegningen er fra AutoCAD R11 / R12 (DWG AC1009), eldre enn det CadCraft leser …» | DWG-filer fra Release 12 og eldre bruker et format CadCraft ikke leser. | I programmet som laget den, lagre den som DXF (hvilken versjon som helst) eller som en nyere DWG, og åpne den. CadCraft sitt eget Lagre som tilbyr DXF R12 for programmer som vil ha det gamle formatet. |
| «Kunne ikke åpne …» etterfulgt av en nettverksmelding, ved første DWG | DWG-leseren kunne ikke lastes ned: du er frakoblet, og CadCraft er ikke lagret for frakoblet bruk, eller tilkoblingen brøt. | Gå tilkoblet og prøv igjen, eller åpne en DXF. Klikk {{ui:Save for offline}} og vent på «Offline ready», slik at DWG-filer åpnes frakoblet neste gang. Se [Arbeid frakoblet](common:offline). |
| Knappen for frakoblet bruk sier «Could not save» | Noen filer ble ikke lastet ned. | Sjekk tilkoblingen og klikk knappen for å prøve igjen. |
| Knappen for frakoblet bruk sier «Offline not available» | Private vinduer og noen administrerte datamaskiner kan ikke ta vare på en frakoblet kopi. | Bruk et vanlig vindu, eller hold deg tilkoblet. |
| CadCraft åpner seg ikke uten forbindelse | Den ble ikke lagret for frakoblet bruk i denne nettleseren, eller nettleseren tømte den. | Neste gang du er tilkoblet, klikk {{ui:Save for offline}} og vent på «Offline ready». |
| Tegningen åpnes, men deler mangler | Objekter CadCraft ikke kan tegne ennå, eller layer som er av eller frosset i filen. | Les «About this file» i venstre panel. Sjekk panelet {{ui:Layers}}. |
| Tekst brytes over to linjer | CadCraft tegner tekst i en skrift i Helvetica-stil, som er bredere enn noen CAD-skrifter. | Forkort teksten under Egenskaper, eller leve med den ekstra linjen. |
| En sirkel vises som en ellipse, eller speilvendt tekst leses riktig vei | Objektet ble tegnet i et skrådd plan, eller sett nedenfra, i programmet som laget filen. CadCraft viser det slik det sees ovenfra, slik planvisningen i det programmet gjør; tekst holdes lesbar. | Ingenting å fikse. For å se det slik det andre programmet gjør, be om at tegningen flates ut, eller at objektene tegnes ovenfra. |
| En blokk, sirkel eller måltilsetting står et annet sted enn i programmet som laget filen | Et tilfelle i tegningen som CadCraft leser feil. | Si ifra på Discord, med filen hvis du kan dele den. |

## Kommandolinjen

| Melding eller symptom | Årsak | Løsning |
|---|---|---|
| «Ukjent kommando "…". Skriv HELP for listen.» | Ingen kommando eller alias med det navnet. | Skriv `HELP`, eller se [Kommandoreferanse](topic:commands). Noen kjente kommandoer er [ikke bygget ennå](topic:not-built-yet). |
| «Ingen slik kommando» ved siden av kommandolinjen mens du skriver | Det du skriver, samsvarer ikke med noe ennå. | Fortsett å skrive, eller sjekk stavemåten. |
| «Punkt- eller alternativnøkkelord kreves.» | Det du skrev er ikke et punkt eller et alternativ. | Sjekk formatet: `x,y`, `@dx,dy`, `@d<a`, eller et enkelt tall. Se [Inntasting av koordinater og avstander](topic:coordinate-entry). |
| «Krever et positivt tall eller to punkter.» | En avstand var negativ eller ikke et tall. | Skriv et positivt tall, eller klikk to punkter. |
| «Krever en vinkel i grader eller to punkter.» | Vinkelen var ikke et tall. | Skriv grader som et vanlig tall. |
| «Krever et tall.» | Et tall var forventet. | Skriv bare sifre. |
| «Ugyldig alternativnøkkelord.» | Bokstavene samsvarer ikke med et alternativ. | Skriv de store bokstavene som vises i hakeparentesene. |
| `*Cancel*` | Du trykket {{key:Esc}}, eller {{key:Enter}} der et punkt var påkrevd. | Start kommandoen på nytt. |
| Skriving når ikke kommandolinjen | En boks i et panel eller en dialog har markøren. | Trykk {{key:Enter}} eller {{key:Esc}}, eller klikk på tegningen. |
| Kommandoen bruker objekter du ikke valgte | De var valgt før du startet den. | Trykk {{key:Esc}} før kommandoen. |
| En linje gikk et uventet sted | `x,y` er absolutt. | Bruk `@dx,dy` for relative punkter. |
| «Fullfør eller avbryt den gjeldende kommandoen først (Esc).» | Du trykket {{key:Mod+S}} mens en kommando kjørte. | Trykk {{key:Esc}}, og lagre deretter. |
| «Kunne ikke lagre som DWG (AutoCAD 2000): … Prøv Lagre som, og deretter DXF.» | Noe i tegningen kunne ikke skrives som DWG. | Trykk {{key:Mod+Shift+S}}, velg {{ui:DXF R12}} og klikk {{ui:Save}}. |
| «Ikke lagret.» | Du lukket dialogen {{ui:Save a copy as}} med {{ui:Cancel}} eller {{key:Esc}}. | Trykk {{key:Mod+Shift+S}} igjen og klikk {{ui:Save}}. |

## Redigering

| Melding eller symptom | Årsak | Løsning |
|---|---|---|
| Et objekt vil ikke velges | Layeret er låst, av eller frosset; eller du er på et ark og det er modellen inne i et visningsområde. | Lås opp layeret, eller gå til fanen {{ui:Model}}. |
| «Fant ingenting der.» | Ingen objekter under klikket. | Zoom inn og klikk på selve linjen. |
| «Ingenting krysser det objektet der.» | {{cmd:TRIM}} fant ingen objekter som krysser delen du valgte. | Sjekk at skjærelinjen virkelig krysser det. |
| «Kan ikke trimme det objektet.» | Trim virker på linjer, buer, sirkler og polylinjer. | Eksploder blokker først, eller slett og tegn på nytt. |
| «Ingen grense i den retningen.» | {{cmd:EXTEND}} fant ingenting å møte. | Velg nærmere enden som skal vokse. |
| «Kan ikke forskyve det objektet.» | Forskyv virker på linjer, buer, sirkler og polylinjer. | Eksploder det først, eller tegn en parallell linje. |
| «Kan ikke forskyve så langt.» | Forskyvningen ville vende formen innside ut. | Bruk en mindre avstand. |
| «Radiusen er for stor.» eller «Avstanden er for stor.» | Avrundingen eller fasingen ville gå forbi enden av en linje. | Sett en mindre radius med `R`, eller mindre avstander med `D`. |
| «Bare første eller siste segment i en åpen polylinje kan kuttes tilbake.» | Hjørnet ville kutte inn i midten av en polylinje. | Velg to segmenter i polylinjen ved siden av hverandre, eller bruk `P` for hvert hjørne. |
| «Velg en andre, annen linje.» | Det andre valget var samme linje, eller ikke en linje. | Velg en annen linje. |
| «Bare polylinjer, blokkreferanser og mål eksploderes.» | Utvalget hadde ingenting å eksplodere. | Velg en polylinje, blokkreferanse eller måltilsetting. |
| «Dette er det aktive layeret. Gjør et annet layer aktivt først.» | Du prøvde å slå av det aktive layeret. | Klikk navnet på et annet layer, og slå deretter av dette. |
| «Det finnes allerede et layer kalt …» | Layernavn må være unike. | Velg et annet navn. |
| «Ingenting å angre.» | Det er ingenting igjen å angre, eller du åpnet eller startet en tegning (det tømmer historikken). | — |

## Måltilsettinger og blokker

| Melding eller symptom | Årsak | Løsning |
|---|---|---|
| Måltekst og piler er svært små eller store | Størrelsene er i tegningsenheter; den samlede skalaen passer ikke til tegningen. | Sett {{cmd:DIMSCALE}} til plottmålestokken; se [Sett måltilsettingsstørrelser](topic:dimension-settings). |
| «Velg et punkt inne i vinkelen du vil måle.» | Vinkelmålets plassering ligger på et ben. | Klikk inne i vinkelen. |
| «Disse linjene er parallelle.» | Parallelle linjer har ingen vinkel mellom seg. | Velg to linjer som møtes. |
| «Velg en lineær eller innrettet måltilsetting.» | {{cmd:DIMCONTINUE}} eller {{cmd:DIMBASELINE}} trenger en å starte fra. | Velg en lineær eller innrettet måltilsetting. |
| «Denne tegningen har ingen blokker ennå: F setter inn en fra en fil, L fra biblioteket …» | Tegningen har ingen egne blokker. | Skriv `F` eller `L`, eller lag en blokk med {{cmd:BLOCK}}. |
| «Ingen blokk kalt "…".» | Navnet er feil. | Meldingen lister opp blokkene som finnes. |
| «Et blokknavn kan ikke starte med * eller bruke …» etterfulgt av en liste med tegn | Navnet har et tegn blokker ikke kan bruke. | Bruk bokstaver, sifre, `-` og `_`. |
| «En blokk kan ikke inneholde seg selv.» | Utvalget har en referanse til blokken som lages. | Utelat den referansen. |
| «Ingen objekter valgt; ingenting laget.» | Du trykket {{key:Enter}} før du valgte. | Kjør {{cmd:BLOCK}} igjen og velg objektene. |

## Ark og utskrift

| Melding eller symptom | Årsak | Løsning |
|---|---|---|
| «Visningsområder legges på et layout. Åpne en layoutfane (eller lag en med LAYOUT) først.» | {{cmd:MVIEW}} på fanen {{ui:Model}}. | Klikk en arkfane først. |
| «Åpne layoutet med visningsområdet først.» | {{cmd:VPVIEW}} på fanen {{ui:Model}}. | Klikk arkfanen først. |
| En visningsområdemålestokk ser ti ganger feil ut | Tegningsenhetene er feil. | Sett {{ui:Units}} under {{ui:Current settings}}. |
| «Det er ingenting å plotte ennå.» | Modellen er tom. | Tegn noe, eller åpne en tegning. |
| «Velg vinduet som skal plottes.» | {{ui:A window…}} er valgt, og ingen ramme ble valgt. | Klikk {{ui:Pick}} og velg to hjørner. |
| «… større enn papiret: kantene er avskåret.» | Området passer ikke i den målestokken. | Velg en mindre målestokk, et større papir, eller {{ui:Fit to paper}}. |
| «Nettleseren blokkerte den nye fanen, så PDF-en ble lastet ned i stedet.» | Popup-vinduer er blokkert for nettstedet. | Åpne den nedlastede PDF-en, eller tillat popup-vinduer for nettstedet. |
| Tegn skrives ut som «?» | PDF-ens skrifter har ingen bokstav for dem (sjeldne ideogrammer, hindi og andre skrifter som krever kompleks formgivning, …), eller den større skriften kunne ikke hentes (frakoblet). Europeisk skrift, kyrillisk, gresk, hebraisk, arabisk, persisk, urdu, thai, kinesisk, japansk og koreansk skrives ut som seg selv. | For arabisk skrift, thai, kinesisk, japansk eller koreansk, plott på nytt med tilkobling. Andre skrifter er ikke bygget ennå. |
| Konstruksjonslinjer vises i PDF-en | Layeret deres plottes. | Klikk layerets skriverknapp. |
| Alle linjer er like tykke | Linjevekten deres er {{ui:Default}}, så de skrives ut med pennbredden i dialogen. | Gi layerne eller objektene en {{ui:Lineweight}} i høyre panel, eller velg en {{ui:Line weight}} i dialogen. For å se linjevekter på skjermen, trykk {{ui:LWT}} i statuslinjen. |

## Taster og skjermen

| Symptom | Årsak | Løsning |
|---|---|---|
| F3, F7 eller F8 endrer volum eller åpner Mission Control | Funksjonstaster på Mac. | Hold nede **fn**, eller bruk knappene i statuslinjen. Se [Taster, mus og styreflater](common:keys). |
| F7 spør om caret browsing | Firefox sin egen bruk av F7. | Velg Nei; bruk knappen {{ui:Grid}}. |
| {{key:Mod+N}} åpnet et nettleservindu | Nettleseren beholder den tasten. | Klikk {{ui:New}} eller skriv `NEW`. |
| {{key:Mod+A}} valgte teksten i kommandolinjen | Kommandolinjen hadde markøren. | Klikk et objekt først, eller skriv `ALL` ved ledeteksten `Select objects`. |
| {{key:Delete}} sletter ikke | Kommandolinjen hadde markøren. | Skriv `E` og trykk {{key:Enter}}. |
| Høyreklikk gjør ingenting på en Mac-styreflate | Control-klikk kan telles som et vanlig klikk. | Klikk med to fingre. |
| Ingenting panorerer på en styreflate | Det finnes ingen midtknapp, og mellomrom panorerer ikke. | Dra med to fingre: 2D-visningen panorerer (klype og musehjulet zoomer). Eller dra med høyreklikk holdt nede. |
| Den første {{key:Esc}} forlot fullskjerm | Nettleseren bruker Esc til å forlate fullskjerm. | Trykk {{key:Esc}} igjen for å avbryte kommandoen. |
| {{key:F1}} gjør ingenting på en Mac | F1 er en lysstyrketast. | Hold nede **fn**, eller klikk {{ui:Help}}. |
| Skriving går inn i hjelpens søkefelt | Hjelpepanelet har markøren. | Klikk på tegningen. |
| Tegningen ble tom | Du zoomet langt bort. | Klikk {{ui:Extents}}, eller dobbeltklikk hjulet. |
| «Forlate siden?» når du lukker fanen | Det finnes ulagrede endringer. | Bli, lagre med {{key:Mod+S}}, og lukk deretter. |
