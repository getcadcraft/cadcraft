---
title: Skannade ritningar och spårning
summary: Ta in ett skannat blad, skala och räta upp det, rensa det, sudda bort delar av det, fånga dess linjer och spåra det till linjer och bågar.
keywords: skanning, skannad ritning, raster, tiff, jpeg, png, skala, justera, räta upp, ta bort prickar, tröskel, svartvit, beskär, sudda, spåra, vektorisera, fångst, bågar, skraffering, pappersritningar, gamla ritningar, scanattach, scantrace
from: 36227e5b
---

## Från ett pappersblad till ritningsobjekt

En skannad ritning är en bild. CadCraft behåller bilden du gav den och ändrar den aldrig: varje rensningssteg skapar en ny bild, ett ångra-steg var, och {{cmd:SCANINFO}} listar originalfilen och de steg som tagits sedan dess. Ingenting skickas någonstans och ingenting gissas av en tränad modell: rensningen och spårningen är vanlig bildbehandling och körs på din dator.

1. **Infoga den.** {{cmd:SCANATTACH}} läser en PNG, en JPEG, en TIFF (en sida, eller alla sidor i en flersidig fil) eller en PDF-sida som är en bild. Den frågar efter sidan, nedre vänstra hörnet och bredden. För en PDF-sida frågar den också hur många pixlar per tum sidan ska ritas med.
2. **Skala den.** {{cmd:SCANSCALE}}: välj två punkter på skanningen och skriv sedan det verkliga avståndet mellan dem. Bladet skalas kring den första punkten.
3. **Justera den.** {{cmd:SCANALIGN}}: välj två punkter på skanningen och de två platser de hör hemma på; bladet flyttas och vrids för att passa, och skalas också om du inte svarar Nej.
4. **Räta upp den.** {{cmd:SCANDESKEW}} mäter vinkeln som bladets långa linjer ligger i och visar den, med hur säker den är. Godkänn den, eller skriv in din egen, så vrids bladet. Ett blad med få långa linjer får en varning: kontrollera vinkeln innan du godkänner den.
5. **Rensa den.** {{cmd:SCANCLEAN}} gör bladet svartvitt (Auto jämnar först ut papperet; Adaptive följer papperets förändringar närmare; Level är ett tal för hela bladet) och tar bort fläckar upp till den storlek du angav.
6. **Beskär och sudda.** {{cmd:SCANCROP}} behåller ett fönster. {{cmd:SCANERASE}} suddar ut en rektangel, en polygon eller ett lasso (tryck och dra): stämplar, anteckningar, en kaffering.

Den rensade bilden är det en sparad DWG innehåller (en IMAGE och dess IMAGEDEF, med bildens fil bredvid ritningen, som för vilken bild som helst).

## Fångst mot skanningens linjer

Med {{cmd:RASTERSNAP}} på (standard) hittar objektfångsterna även linjerna i en svartvit skanning: linjeändar, deras mittpunkter, hörn och korsningar, visade med vanliga fångstmarkeringar. Den del av bladet under pekaren spåras när du rör dig; zooma in tillräckligt så att en pixel är några skärmpixlar. En linje som är längre än den spårade delen följs till sina ändar.

## Spårningen

{{cmd:SCANTRACE}} gör om bladets linjer till linjer och bågar på ett nytt lager (SCAN-TRACE), som ett ångra-steg, med skanningen kvar under dem. Du ställer in:

- **Tolerans:** hur långt en spårad linje eller båge får ligga från linjerna på skanningen, i ritningsenheter (rapporten anger också pixlar). En snäv tolerans följer varje ojämnhet; en vid ger färre, rakare delar.
- **Fönster:** ett hörn av bladet, eller hela bladet.
- **Bågar:** av ger bara linjer.
- **Rester:** det spårningen lämnade orört ritas som rutor på ett lager du kan stänga av, eller ritas inte.

Spårningen hittar mitten av varje streck, följer den, anpassar räta linjer och cirkelbågar till den, sammanfogar sträckor som klipptes där en annan linje korsade, gör nästan vågräta och nästan lodräta linjer exakt vågräta och lodräta, och stänger hörn. **Text och skraffering förblir som raster:** delar i bokstävernas storlek läggs åt sidan, och buntar av korta parallella linjer tas för skraffering och läggs åt sidan.

När den är klar anger den hur många linjer och bågar den gjort, toleransen, och hur många delar den lämnade kvar som raster. **Det är vad pixlarna gav, med den toleransen, och det är inget påstående om att resultatet är rätt.** Jämför med bladet: en spårning kan missa en svag linje, sammanfoga två linjer som ligger mycket nära varandra, eller rita en linje där det bara finns en fläck. Rensa skanningen först (uppriktad, svartvit, fläckar borta) så blir resultatet mycket bättre.

## Vad den inte läser

TIFF-filer lagrade i brickor, BigTIFF, TIFF med JPEG- eller deflate-komprimering, Group 3-faxkodning och färger lagrade i separata färgplan avvisas med ett meddelande; spara dem igen som strimlor med LZW, PackBits, Group 4 eller utan komprimering. Interlacerade PNG-filer avvisas också. Filer över 128 MB eller 100 miljoner pixlar avvisas, och ett spårningsfönster kan innehålla högst 64 miljoner pixlar.
