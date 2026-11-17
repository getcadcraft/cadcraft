---
title: Flet to personers redigeringer af én tegning
summary: Lad git, Fossil eller Mercurial flette to kopier af en DWG- eller DXF-fil objekt for objekt, ved hjælp af den nøgle CadCraft gemmer på hvert objekt.
keywords: flet, merge, git, fossil, mercurial, versionskontrol, diff, konflikt, tre-vejs, cadcraft merge, nøgle, gitattributes, DWG, DXF
from: 71482bf9
---

To personer redigerer den samme tegning. Hvis de har ændret forskellige objekter, kan fletningen ske automatisk: der er intet at gøre om i hånden.

## Hvad der gør det muligt

CadCraft giver hvert objekt, du tegner, en kort **nøgle**, som aldrig ændres, og som aldrig gives til to objekter. Den gemmes med objektet i DWG- eller DXF-filen (som ekstra data, andre programmer beholder). Fletningen slår objekter op via nøglen, ikke via deres position i filen, fordi hvert program nummererer positionerne om, når det gemmer. Slå det fra i {{ui:Indstillinger}} › CadCraft › Fletningsvenlige filer, hvis du aldrig flettes; filerne bliver så omkring 10 procent mindre.

En tegning gemt, før nøgler fandtes, kan stadig flettes: dens objekter får en nøgle ud fra deres plads i filen, den samme for alle, der åbner den.

## Opsætning

Git kræver to linjer én gang pr. repository:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# én gang, på hver computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Uden git køres det manuelt: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil og Mercurial tager de samme tre filer i deres egen indstilling for flettevværktøj.

## Reglerne

- Et objekt, der kun er ændret på den ene side, tages med. Den samme ændring på begge sider tages med én gang.
- Den samme egenskab ændret på to måder er en **konflikt**: din side bliver, og rapporten lister begge værdier. Åbn resultatet, kig på objektet, og ret det i hånden.
- Et objekt tilføjet på den ene side bevares. Et objekt fjernet på den ene side og urørt på den anden fjernes. Fjernet på den ene side og ændret på den anden: fjernet og rapporteret.
- Lag, blokke, tekst- og målsætningsstile, ark og navngivne visninger flettes på samme måde. Begrænsninger følger de objekter, de navngiver.
- Resultatet skrives i samme filformat og version som din.

Ikke flettet: den rækkefølge, objekterne tegnes i, er din, og derefter de objekter, den anden side tilføjede. Ændringer af den samme blokdefinition på begge sider er en konflikt, og de blandes aldrig. Intet uploades; alt kører på din computer.
