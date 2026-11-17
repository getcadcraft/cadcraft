---
title: Slå ihop två personers ändringar i en ritning
summary: Låt git, Fossil eller Mercurial slå ihop två kopior av ett DWG- eller DXF-objekt objekt för objekt, med hjälp av nyckeln som CadCraft håller på varje objekt.
keywords: slå ihop, sammanslagning, git, fossil, mercurial, versionshantering, diff, konflikt, trevägs, cadcraft merge, nyckel, gitattributes, DWG, DXF
from: 71482bf9
---

Två personer redigerar samma ritning. Om de ändrade olika objekt kan sammanslagningen ske automatiskt: inget behöver göras om för hand.

## Vad som gör det möjligt

CadCraft ger varje objekt du ritar en kort **nyckel** som aldrig ändras och aldrig ges till två objekt. Den sparas med objektet i DWG- eller DXF-filen (som extra data som andra program behåller). Sammanslagningen söker upp objekt med den nyckeln, inte med deras position i filen, eftersom varje program numrerar om positionerna när det sparar. Stäng av detta i {{ui:Inställningar}} › CadCraft › Sammanslagningsvänliga filer om du aldrig slår ihop; filerna blir ungefär 10 procent mindre.

En ritning som sparades innan nycklar fanns slås fortfarande ihop: dess objekt får en nyckel från deras plats i filen, samma för alla som öppnar den.

## Så ställer du in det

Git behöver två rader en gång per arkiv:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# en gång, på varje dator
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Utan git kör du det för hand: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil och Mercurial tar samma tre filer i sin egen inställning för sammanslagningsverktyg.

## Reglerna

- Ett objekt som ändrats på endast ena sidan tas med. Samma ändring på båda sidorna tas med en gång.
- Samma egenskap ändrad på två sätt är en **konflikt**: din sida behålls och rapporten listar båda värdena. Öppna resultatet, titta på objektet och rätta det för hand.
- Ett objekt som lagts till på någondera sidan behålls. Ett objekt som tagits bort på ena sidan och orört på den andra tas bort. Borttaget på ena sidan och ändrat på den andra: borttaget, och rapporterat.
- Lager, block, text- och måttstilar, blad och namngivna vyer slås ihop på samma sätt. Villkor följer de objekt de anger.
- Resultatet skrivs i samma filformat och version som din.

Ej sammanslaget: ordningen objekten ritas i är din, följt av de objekt den andra sidan lagt till. Ändringar i samma blockdefinition på båda sidorna är en konflikt, aldrig blandade. Inget laddas upp; allt körs på din dator.
