---
title: Ge kommandoalternativ egna bokstäver
summary: Svara på ett kommandos alternativ med bokstäver du väljer, på vilket språk som helst, från en textfil du kan redigera, importera och exportera.
keywords: alternativbokstäver, optionkeys, optkeys, alternativnyckel, nyckelord, omkartläggning, mappning, anpassa, egna bokstäver, polar, matris, P, PO, språk, översätt alternativ, kort form, importera, exportera, tvetydig
from: 7c8328c6
---

## Vad du lär dig

Hur du ändrar de bokstäver du skriver för att svara på ett kommandos alternativ. Till exempel frågar {{cmd:ARRAY}} `[Rectangular/POlar]` och tar `PO` för Polär; du kan göra så att `P` eller andra bokstäver gör detsamma, på ditt eget språk om du vill.

## Så besvaras alternativ

När ett kommando visar alternativ inom hakparenteser är de versaler du ska skriva: `POlar` är `PO`, `eXit` är `X`.

Du kan också skriva färre bokstäver. Om det du skriver passar bara ett av de visade alternativen tar CadCraft det: med `[Rectangular/POlar]` är ett ensamt `P` Polär. Om det passar två nämner kommandoraden dem och frågar igen:

```
C could be COUnt, COLumns. Type more letters.
```

Tal tolkas aldrig gissningsvis, så ett skrivet avstånd eller antal läses alltid som ett tal.

## Lägg till egna bokstäver

Varje kommando behåller sina inbyggda bokstäver. Dina läggs ovanpå, så din lista innehåller bara det du ändrat.

1. Öppna {{ui:Inställningar}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Alternativbokstäver}} och klicka på {{ui:Redigera…}}. Eller skriv {{cmd:OPTIONKEYS}} och tryck på {{key:Enter}}.
2. Under {{ui:Kommando}} väljer du kommandot, till exempel `ARRAY`. Listan innehåller varje kommando som frågar efter alternativ, och den börjar på det kommando du använde senast.
3. Under {{ui:Alternativ}} väljer du alternativet. Varje alternativ visar sina inbyggda bokstäver inom hakparenteser, till exempel `POlar (PO)`.
4. I {{ui:Dina bokstäver}} skriver du de bokstäver du vill ha, till exempel `P`, och klickar på {{ui:Lägg till (A)}}.
5. Alternativet visas nu under {{ui:Dina bokstäver}} med sina inbyggda bokstäver och dina. Klicka på {{ui:Spara}}.

Starta {{cmd:ARRAY}}, markera ett objekt och tryck på {{key:Enter}}. Frågan visar dina bokstäver efter alternativet, `POlar (P)`, och `P` svarar på den.

För att ta bort en, klicka på x i slutet av dess rad och sedan på {{ui:Spara}}. Alternativet går tillbaka till sina inbyggda bokstäver.

## Bokstäver du inte kan använda

Redigeraren avvisar bokstäver som skulle dölja något kommandoraden redan läser, och säger varför:

- de inbyggda bokstäverna för ett annat alternativ i samma kommando (`R` för Polär i `ARRAY`, där `R` är Rektangulär);
- ett objektfångstord med tre bokstäver eller fler, till exempel `END`, `MID` eller `CEN`, och orden `ALL` och `LAST`;
- samma bokstäver för två olika alternativ i ett kommando.

Medan något visas i rött är {{ui:Spara}} avstängd: rätta raden eller ta bort den, så blir knappen tillgänglig igen. En frågas inbyggda bokstäver vinner alltid över dina, så din lista kan aldrig hindra ett inbyggt svar från att fungera. Bokstäver som råkar vara ett kommandos namn, som `L` eller `C`, är helt i sin ordning: vid en alternativfråga läser kommandoraden ett svar, inte startar ett kommando.

Listan över alternativ för ett kommando kommer från de kommandon som delar dess frågor, så ibland listar ett kommando ett alternativ som det bara frågar efter i vissa fall.

## Ett val för alla kommandon

Under {{ui:Kommando}} väljer du {{ui:Alla kommandon}}. Alternativen är då alla alternativ något kommando har, till exempel eXit eller Undo. Bokstäver du lägger till där svarar på det alternativet var ett kommando än erbjuder det. Bokstäver som lagts till för ett enskilt kommando vinner över dessa.

## Bokstäver på ditt eget språk

Bokstäverna kan komma från vilket alfabet som helst, så du kan svara på alternativ utan att byta tangentbordslayout: lägg till `З` för Close under {{ui:Alla kommandon}}, eller `П` för POlar i `ARRAY`.

CadCraft levereras bara med de engelska bokstäverna. Din egen lista är hur du, ditt kontor eller personer som delar ditt språk ställer in resten, och {{ui:Exportera}} gör en fil du kan skicka vidare.

## Redigera som text

{{ui:Redigera som text}} i redigeraren visar samma lista som rader av text, en per alternativ, vilket också är vad {{ui:Exportera}} sparar:

```
ARRAY.PO,  P
*.X,       Q
```

Varje rad är kommandot, en punkt, alternativets inbyggda bokstäver, ett kommatecken och dina bokstäver. En stjärna i stället för kommandot betyder alla kommandon. En rad som börjar med `;` är en notering.

## Det som förblir likadant

- De inbyggda bokstäverna fungerar kvar bredvid dina.
- Rutiner och verktygsfältsknappar använder fortfarande de inbyggda bokstäverna, så inget du läst in går sönder. För att skriva de inbyggda bokstäverna själv där dina skulle komma i vägen, sätt ett understreck först: `_PO`.
- Ett kommandos kortnamn är något annat: se [Redigera kommandoalias](topic:command-aliases).

## Rader CadCraft inte godkänner

När du redigerar som text eller importerar en fil listar redigeraren varje problem med radnummer:

- kommandot finns inte (ett kommandos alias är godkänt: `AR.PO` läses som `ARRAY.PO`);
- raden är inte `KOMMANDO.ALTERNATIV, BOKSTÄVER`;
- bokstäverna har ett mellanslag eller ett tecken i sig (bara bokstäver och siffror, högst 16);
- samma bokstäver svarar på två olika alternativ i ett kommando.

## Importera och exportera

{{ui:Exportera}} sparar dina bokstäver som en textfil, för att behålla eller ge till någon annan. {{ui:Importera…}} läser en sådan fil. Båda finns i redigeraren och under {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Alternativbokstäver}}.

I inställningarna ersätter {{ui:Importera…}} din fil med den du väljer. En fil med en rad som krockar eller inte kan användas tas inte emot; öppna redigeraren och importera den där för att se raderna. I redigeraren fyller den bara rutan: ingenting ändras förrän du klickar på {{ui:Spara}}.

## Läs in igen eller ta bort

Skriv {{cmd:REINIT}} och tryck på {{key:Enter}} för att tillämpa din fil igen. För att ta bort en bokstav, radera dess rad och klicka på {{ui:Spara}}.

## Dina bokstäver följer ditt konto

När du är inloggad på getcadcraft.com sparas dina bokstäver med ditt konto. Öppnar du CadCraft i en annan webbläsare eller på en annan dator med samma konto kommer de dit av sig själva; kommandoraden säger `Option letters from your account`. Har du ändrat dem på två ställen vinner den senaste kopian, och den den ersatte sparas en gång.

{{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Alternativbokstäver}} visar hur läget ser ut. Utloggad eller offline stannar de i den här webbläsaren och skickas till ditt konto nästa gång du sparar dem medan du är inloggad.

Relaterat: [Redigera kommandoalias](topic:command-aliases) · [CadCraft-inställningar](topic:settings) · [Kommandon](topic:commands)
