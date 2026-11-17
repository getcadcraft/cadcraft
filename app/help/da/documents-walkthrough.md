---
title: "Dokumenter og revisioner (arkivet)"
summary: "En trin-for-trin-guide til ét rigtigt job: sæt en projektmappe under kontrol, tjek en tegning ud, ændr den, tjek den ind med en note, send den til gennemgang, godkend og udgiv den, se historikken og hvad der bruger den, og hvad en anden ser, mens den er låst, samt hvordan det virker med skymapper."
keywords: arkiv, dokumenter, trin-for-trin-guide, vejledning, tjek ud, tjek ind, revision, udgivelse, godkend, lås, historik, hvor brugt, skymappe, projektmappe, dokumenthåndtering, pdm, to personer, delt mappe
from: 3829528d
---

## Hvad du gør

Du er Ana og arbejder på Riverside Clinic sammen med en kollega, Ben. Projektets tegninger ligger i én mappe, som I begge kan nå (et delt drev, en synkroniseret mappe eller en skymappe). Når du er færdig, er én fil gået fra sin første kopi til en udgivet revision **A**, er blevet ændret igen som **B.1**, du har set, hvem der gjorde hvad, og du har set, hvad Ben ser, når du holder filen.

Alt gemmes i en skjult `.ccvault`-mappe ved siden af dine filer: ingen server, intet uploadet (en skymappe er undtagelsen, se det sidste trin). For alle knapper og regler samlet ét sted, se emnet *Dokumenter: tjek ud, revisioner og udgivelse*, hvor din app har det.

## 1. Opsæt projektmappen

1. Vælg {{ui:Dokumenter…}} i menuen **Mere** på fanen **Vis**, eller skriv `DOCUMENTS` (eller `DOCS`) og tryk {{key:Enter}}.
2. Vælg {{ui:Vælg projektmappen}} og vælg den mappe, der indeholder projektets tegninger. (Projektmapper virker i Studio og i browsere, der kan åbne en mappe, såsom Chrome og Edge. I andre browsere siger panelet det.)
3. Vælg {{ui:Ændr}} ved **Du:** og skriv dit navn, `Ana` (hvis den spørger, også navnet på denne computer). Panelet siger nu *Du: Ana på* og din computer. Dit navn står på alt, du gør.
4. Vælg {{ui:Start et arkiv i denne mappe}} og skriv projektets navn, `Riverside clinic`. Panelet siger *Arkiv startet for Riverside clinic.*

## 2. Bring en fil under kontrol

1. Åbn **Filer, der ikke er i arkivet**, og vælg {{ui:Tilføj}} ved `plans/A-101.dxf`.
2. Den vises under **Filer i arkivet** som revision **A.1**, status **Arbejde i gang**. A.1 er dens første kopi; arkivet gemmer en kopi af hver revision.

## 3. Tjek ud, ændr, tjek ind

1. Vælg {{ui:Åbn}} ved `plans/A-101.dxf`. Tegningen åbnes i CadCraft, og panelet lukkes, så du kan se den. Panelet er stadig én kommando væk: `DOCUMENTS`.
2. Åbn panelet igen og vælg {{ui:Tjek ud}}. Rækken siger nu **Udtjekket til dig**. Der er lavet en låsefil i `.ccvault/locks`; ingen andre kan tjekke filen ud, før du tjekker den ind.
3. Tegn noget: tilføj en linje, flyt en væg. Intet, du gør, kan gemmes over arkivets fil, medmindre tegningen er udtjekket til dig; {{ui:Gem som}} virker altid for en kopi af din egen.
4. Åbn panelet, vælg {{ui:Tjek ind}} og skriv, hvad der ændrede sig (`Flyttede døren`). Panelet siger *indtjekket som A.2*. Filen i projektmappen er nu den tegning, du havde åben, og låsen er væk. Indtjekning uden ændring beholder revisionen.

Hvis du skifter mening, giver {{ui:Fortryd udtjekning}} filen tilbage uden en ny revision.

## 4. Gennemgang og udgivelse

1. Vælg {{ui:Send til gennemgang}}. Status bliver **Til gennemgang**, og filen bliver skrivebeskyttet.
2. Inden du godkender, vælg {{ui:Projektindstillinger}} og list, hvem der må godkende (ét navn pr. linje), for eksempel `Ben` og `Carla`, og sæt flueben i reglen om, at godkenderen skal være en anden end forfatteren. Vælg {{ui:Gem indstillinger}}. Nu afviser selve arkivet alle andre.
3. Ben (eller Carla) vælger {{ui:Godkend}} og skriver godkenderens navn. Status bliver **Udgivet**, og revisionen bliver **A**, med *godkendt af* og navnet. En udgivet fil er skrivebeskyttet. {{ui:Send tilbage}} ville have sendt den tilbage til Arbejde i gang, med en grund.

Godkenderens navn er det navn, der er skrevet i panelet; det er en registrering af, hvem der skrev under, ikke et bevis for identitet.

## 5. En ny revision

1. På den udgivne fil vælger du {{ui:Ny revision}}. Du holder den til næste bogstav.
2. Ændr den, og vælg {{ui:Tjek ind}}. Revisionen er **B.1**, arbejde i gang. Udgiv den på samme måde, så bliver den **B**. {{ui:Fortryd udtjekning}} før den første indtjekning lader den stå på **A**.

Revisionsbogstaver går A, B … Z, AA, AB. Hvis din standard springer nogle bogstaver over, springer projektindstillingen *Brug ASME Y14.35-sekvensen* I, O, Q, S, X og Z over for de næste revisioner.

## 6. Se hvad der skete

Vælg filens navn for at åbne dens detaljer:

- **{{ui:Historik}}**: hver hændelse, nyeste først, med hvem, hvilken computer og hvornår: *Indtjekket A.2* af Ana, *Udgivet* af Ben, og så videre.
- **{{ui:Revisioner}}**: revisionstabellen. {{ui:Åbn kopi}} åbner en revision som en almindelig kopi, der ikke kan overskrive arkivets fil; {{ui:Sammenlign med}} viser, hvad der blev tilføjet, fjernet og ændret i forhold til den forrige revision, eller en hvilken som helst anden.
- **{{ui:Bruger}}**: de tegninger, den linker til (xrefs).
- **{{ui:Bruges af}}**: Bruges af viser alle andre tegninger i arkivet, der linker til denne: ændrer du en basisplan, ved du, hvilke ark du skal tjekke.

## Revision på arket

Med tegningen åben (og et layout i den) vælger du {{ui:Revisionsfelt}}: en tabel over de udgivne revisioner tegnes øverst til højre på arket. Vælg {{ui:Udfyld tegningshoveder}} for at udfylde tegningshovedets attributter mærket `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` eller `APPROVED_BY` med filens revision, status, dato og godkender. Når du godkender næste udgivelse, ajourføres revisionsfeltet.

## 7. Hvad Ben ser, mens du holder filen

Tjek nu filen ud igen, og bed Ben om at åbne den samme projektmappe på sin computer og åbne panelet. På filens række ser han **Udtjekket af Ana på** din computer **siden** tidspunktet, og ingen {{ui:Tjek ud}}-knap. Hvis han alligevel prøver, afviser arkivet det: låsen er en fil, systemet ikke laver to gange, så to personer kan ikke begge holde filen, selv i samme brøkdel af et sekund, når mappen ligger på disken i Studio. (I en browser giver mappen kun et bedste forsøg, og panelet siger det under **Mappe**.)

Hvis Ana er væk, og Ben har brug for filen, frigør {{ui:Bryd udtjekning}} den. Han skal skrive en grund; den går i loggen sammen med, hvis udtjekning det var. Når projektet har angivet administratorer, kan kun de gøre det. En udtjekning ældre end forældelsesgrænsen (14 dage som standard) markeres *længe siden*. Efter brydningen afvises Anas sene indtjekning, så I to ikke kan overskrive hinanden.

## 8. Skymapper

En skymappe er en projektmappe, der ligger i dit teams skylager, så teamet ikke har brug for et delt drev. I Studio, logget ind på din CadCraft-konto, viser panelet {{ui:Åbn en mappe i skyen}} ved siden af {{ui:Vælg projektmappen}}. Vælg den og vælg mappen, der vises som arbejdsområde / mappe. En arbejdsområdeejer opretter mappen først, og teamets skylager skal være aktivt. Alt ovenfor virker på samme måde; serveren laver låsen, som er streng på tværs af personer. Er du ikke logget ind, siger panelet, at du skal logge ind. I et almindeligt browserfaneblad tilbydes skyknappen ikke; brug Studio.

## Prøv det

Gør de otte trin ovenfor med en kopi af en rigtig fil. Til de to-personers trin skal du bruge en anden person, eller to vinduer med to navne. Hvis du prøver det med en rigtig delt mappe, lister siden Community-test en kontrol, der spørger præcis det, og den tager imod resultater.
