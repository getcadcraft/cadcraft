---
title: Slå sammen to personers endringer i én tegning
summary: La git, Fossil eller Mercurial slå sammen to kopier av en DWG- eller DXF-fil objekt for objekt, ved hjelp av nøkkelen CadCraft beholder på hvert objekt.
keywords: slå sammen, merge, git, fossil, mercurial, versjonskontroll, diff, konflikt, tre-veis, cadcraft merge, nøkkel, gitattributes, DWG, DXF
from: 71482bf9
---

To personer redigerer den samme tegningen. Hvis de endret ulike objekter, kan sammenslåingen skje automatisk: ingenting må gjøres om for hånd.

## Hva som gjør det mulig

CadCraft gir hvert objekt du tegner en kort **nøkkel** som aldri endres, og som aldri gis til to objekter. Den lagres sammen med objektet i DWG- eller DXF-filen (som ekstra data andre programmer beholder). Sammenslåingen finner objekter via den nøkkelen, ikke via plasseringen i filen, fordi hvert program nummererer posisjonene på nytt når det lagrer. Slå det av i {{ui:Innstillinger}} › CadCraft › Sammenslåingsvennlige filer hvis du aldri slår sammen; filene blir da omtrent 10 prosent mindre.

En tegning lagret før nøkler fantes, kan fortsatt slås sammen: objektene får en nøkkel ut fra plasseringen i filen, den samme for alle som åpner den.

## Sett det opp

Git trenger to linjer én gang per repositorium:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# én gang, på hver maskin
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Uten git kjører du det for hånd: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil og Mercurial tar de samme tre filene i sin egen innstilling for sammenslåingsverktøy.

## Reglene

- En endring av et objekt på bare den ene siden tas med. Den samme endringen på begge sider tas med én gang.
- Den samme egenskapen endret på to måter er en **konflikt**: din side beholdes, og rapporten lister begge verdiene. Åpne resultatet, se på objektet og rett det for hånd.
- Et objekt lagt til på en av sidene beholdes. Et objekt fjernet på den ene siden og urørt på den andre, fjernes. Fjernet på den ene siden og endret på den andre: fjernet og rapportert.
- Layere, blokker, tekst- og måltilsettingsstiler, ark og navngitte visninger slås sammen på samme måte. Betingelser følger objektene de nevner.
- Resultatet skrives i samme filformat og versjon som din.

Ikke slått sammen: rekkefølgen objektene tegnes i, er din, deretter objektene den andre siden la til. Endringer av samme blokkdefinisjon på begge sider er en konflikt, og blandes aldri. Ingenting lastes opp; alt kjører på datamaskinen din.
