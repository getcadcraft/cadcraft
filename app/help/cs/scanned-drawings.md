---
title: Naskenované výkresy a trasování
summary: Vložte naskenovaný list, nastavte mu měřítko a narovnejte jej, vyčistěte jej, smažte jeho části, přichytávejte k jeho čárám a přetrasujte jej na čáry a oblouky.
keywords: sken, naskenovaný výkres, rastr, tiff, jpeg, png, měřítko, zarovnat, narovnat, odstranit šum, prahování, černobíle, oříznout, smazat, trasovat, vektorizovat, přichytit, oblouky, šrafování, papírové výkresy, staré výkresy, scanattach, scantrace
from: 36227e5b
---

## Z papírového listu na objekty výkresu

Naskenovaný výkres je obrázek. CadCraft zachová obrázek, který jste mu dali, a nikdy jej nemění: každý krok čištění vytvoří nový obrázek, jeden krok zpět pro každý, a {{cmd:SCANINFO}} vypíše původní soubor a kroky provedené od té doby. Nic se neposílá nikam a nic se neodhaduje natrénovaným modelem: čištění a trasování jsou obyčejné zpracování obrazu a běží na vašem počítači.

1. **Vložte jej.** {{cmd:SCANATTACH}} načte PNG, JPEG, TIFF (jednu stránku, nebo všechny stránky vícestránkového souboru) nebo stránku PDF, která je obrázkem. Zeptá se na stránku, levý dolní roh a šířku. U stránky PDF se ještě zeptá, kolik pixelů na palec se má stránka vykreslit.
2. **Nastavte měřítko.** {{cmd:SCANSCALE}}: zadejte dva body na skenu, pak zadejte skutečnou vzdálenost mezi nimi. Měřítko se nastaví kolem prvního bodu.
3. **Zarovnejte jej.** {{cmd:SCANALIGN}}: zadejte dva body na skenu a dvě místa, kam patří; list se posune a otočí, aby seděl, a změní také měřítko, pokud neodpovíte Ne.
4. **Narovnejte jej.** {{cmd:SCANDESKEW}} změří úhel, pod kterým leží dlouhé čáry listu, a ukáže jej i s tím, jak si je jistý. Přijměte jej, nebo zadejte vlastní, a list se otočí. U listu s několika dlouhými čárami se objeví varování: před přijetím úhel zkontrolujte.
5. **Vyčistěte jej.** {{cmd:SCANCLEAN}} převede list na černobílý (Auto nejprve vyrovná papír; Adaptive sleduje změny papíru přesněji; Level je jedno číslo pro celý list) a odstraní skvrny až do velikosti, kterou nastavíte.
6. **Oříznout a mazat.** {{cmd:SCANCROP}} ponechá okno. {{cmd:SCANERASE}} smaže obdélník, mnohoúhelník nebo lasso (stiskněte a táhněte): razítka, poznámky, kroužek od kávy.

Očištěný obrázek je to, co uložené DWG drží (IMAGE a IMAGEDEF, se souborem obrázku vedle výkresu, jako u každého obrázku).

## Přichytávání k čarám skenu

S {{cmd:RASTERSNAP}} zapnutým (výchozí) přichytávají uchopení objektů také čáry černobílého skenu: konce čar, jejich středy, rohy a křížení, zobrazené obvyklými značkami přichycení. Část listu pod kurzorem se trasuje, jak se pohybujete; přibližte natolik, aby jeden pixel byl několik pixelů obrazovky. Čára delší než část, která se trasuje, se sleduje až ke svým koncům.

## Trasování

{{cmd:SCANTRACE}} promění čáry listu v čáry a oblouky na nové vrstvě (SCAN-TRACE), jako jeden krok zpět, se skenem stále pod nimi. Nastavíte:

- **Tolerance:** jak daleko může trasovaná čára nebo oblouk ležet od čar na skenu, v jednotkách výkresu (hlášení uvádí i pixely). Těsná tolerance sleduje každé zvlnění; volná dělá méně a přímější kusy.
- **Okno:** roh listu, nebo celý list.
- **Oblouky:** vypnuto dělá jen čáry.
- **Zbytky:** co trasování nechalo, se nakreslí jako rámečky na vrstvě, kterou můžete vypnout, nebo se vůbec nekreslí.

Trasování najde střed každého tahu, sleduje jej, prokládá mu přímky a kruhové oblouky, spojuje úseky, které byly přerušeny tam, kde je křižovala jiná čára, dělá téměř vodorovné a téměř svislé čáry přesně vodorovné a svislé a uzavírá rohy. **Text a šrafování zůstávají jako rastr:** kusy o velikosti písma se odloží a svazky krátkých rovnoběžných čar se považují za šrafování a také se odloží.

Po dokončení hlásí, kolik čar a oblouků vytvořilo, tolerance a kolik kusů nechalo jako rastr. **To je to, co pixely daly při této toleranci, a není to tvrzení, že výsledek je správný.** Porovnejte jej s listem: trasování může přehlédnout slabou čáru, spojit dvě čáry ležící velmi blízko sebe, nebo nakreslit čáru tam, kde je jen skvrna. Nejprve sken vyčistěte (narovnaný, černobílý, bez skvrn) a výsledek bude mnohem lepší.

## Co nečte

Soubory TIFF uložené v dlaždicích, BigTIFF, TIFF s kompresí JPEG nebo deflate, kódování Group 3 (fax) a barvy uložené v oddělených rovinách se odmítnou se zprávou; uložte je znovu jako pruhy s kompresí LZW, PackBits, Group 4 nebo bez komprese. Prokládaná PNG se také odmítnou. Soubory větší než 128 MB nebo 100 milionů pixelů se odmítnou a okno trasování může mít nejvýše 64 milionů pixelů.
