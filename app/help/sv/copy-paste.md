---
title: Kopiera, klistra in och duplicera
summary: Kopiera objekt till CadCraft:s urklipp, klistra in dem där du klickar eller på deras egna platser, duplicera med pekaren, och ta med arbete från en annan ritning eller flik.
keywords: kopiera, klipp ut, klistra in, klistra in på plats, duplicera, urklipp, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, mellan ritningar, annan flik, baspunkt
from: 4b9f29d3
---

## Vad du ska lära dig

Hur du kopierar objekt till urklippet, klistrar in dem där du klickar eller på deras egna koordinater, duplicerar dem med pekaren, klipper ut dem och tar med dem till en annan ritning. Allt här finns också i verktygsfältets grupp {{ui:Redigera}}: {{ui:Kopiera}}, {{ui:Klistra in}} och menyn {{ui:Mer}}.

## Kopiera och klistra in där du klickar

1. Markera objekten: klicka på dem, eller dra ett fönster.
2. Tryck på {{key:Mod+C}}, eller klicka på {{ui:Kopiera}} i gruppen {{ui:Redigera}}. Kommandoraden säger hur många objekt som kopierades. De förblir markerade.
3. Tryck på {{key:Mod+V}}, eller klicka på {{ui:Klistra in}}. Kopian visas vid markören och hänger från det nedre vänstra hörnet av de kopierade objekten.
4. Klicka där det hörnet ska ligga, eller skriv en punkt som `2000,500` och tryck på {{key:Enter}}. Objektfångst och ortogonalt läge fungerar som vanligt.

De inklistrade objekten är markerade, så att du kan flytta eller ändra dem direkt. Ett {{key:Mod+Z}} tar bort hela inklistringen.

:::tip
Vill du att kopian ska hänga från en punkt du väljer, till exempel hörnet på en vägg? Skriv `COPYBASE`, klicka på baspunkten, markera objekten och tryck på {{key:Enter}}. Inklistring placerar då den punkten där du klickar. För att hänga varje kopia från dess mitt i stället för det nedre vänstra hörnet, ändra {{ui:Inklistringspunkt}} i [CadCraft-inställningar](topic:settings).
:::

## Klistra in på plats

Tryck på {{key:Mod+Shift+V}}, eller välj {{ui:Klistra in på plats}} i menyn {{ui:Mer}}. Kopian går in exakt på de koordinater den kopierades från, utan något klick. Använd det för att ta objekt till en annan ritning på samma plats, eller från ett blad till ett annat blad.

## Duplicera och flytta

1. Markera objekten.
2. Tryck på {{key:Mod+D}}, eller välj {{ui:Duplicera och flytta}} i menyn {{ui:Mer}}.
3. En kopia ligger ovanpå originalet och följer pekaren. Klicka där den ska ligga. Du kan också skriva en förflyttning som `@0,-600`, eller ett avstånd mot markören.

{{key:Esc}} före klicket lämnar inget kvar. Duplikatet är ett steg som går att ångra och rör inte urklippet.

## Klipp ut

Tryck på {{key:Mod+X}}, eller välj {{ui:Klipp ut}} i menyn {{ui:Mer}}. Objekten läggs på urklippet och raderas från ritningen, i ett steg som går att ångra. Klistra in dem igen med {{key:Mod+V}} eller {{key:Mod+Shift+V}}.

## Mellan ritningar och flikar

Urklippet behåller sin kopia när du öppnar en annan ritning, och det delas av alla CadCraft-flikar i den här webbläsaren. Kopiera i en flik, tryck sedan på {{key:Mod+V}} i en annan.

- Block som objekten använder följer med. Om ritningen du klistrar in i redan har ett block med samma namn, används dess egen definition, precis som i AutoCAD.
- Lager som objekten använder läggs till, med de färger och inställningar de hade.
- Kopian skalas inte om när de två ritningarna använder olika enheter: CadCraft säger det, och du kan använda {{cmd:SCALE}} efteråt.
- Vyportar stannar på sitt blad; de utelämnas från en kopia.

:::note
Urklippet är CadCrafts eget. Du kan inte klistra in CadCraft-objekt i ett annat program, eller klistra in från ett annat program i CadCraft: spara som DWG eller DXF i stället. En mycket stor kopia kanske inte kan delas mellan flikar; kommandoraden säger då bara att den här fliken kan klistra in den.
:::

## Vanliga misstag

- **{{key:Mod+V}} klistrade in text på kommandoraden.** Du hade skrivit något där, så tangenterna påverkade texten. Tryck på {{key:Esc}} för att rensa den, och tryck sedan på {{key:Mod+V}} igen.
- **Inget hände, och statusfältet säger att du ska avsluta det aktuella kommandot.** Ett annat kommando körs. Tryck på {{key:Esc}} först.
- **Inklistringen hamnade långt bort.** Den hänger från det nedre vänstra hörnet av det du kopierade, som kan vara ett avlägset objekt du markerade av misstag. Använd {{ui:Klistra in på plats}}, eller kopiera med `COPYBASE`.
- **”Inget klistrades in” med en orsak.** Det en annan flik lämnade på urklippet kunde inte läsas (det var skadat, eller ändrat för hand). Kopiera objekten igen.

Se hela listan över tangenter i [Tangentbord och mus](topic:keyboard), och varje fråga i [Kommandoreferensen](topic:commands#clipboard).
