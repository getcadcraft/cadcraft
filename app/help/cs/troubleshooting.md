---
title: Řešení problémů
summary: Zprávy, které CadCraft zobrazuje, a potíže, na které můžete narazit, každá s příčinou a opravou.
keywords: problém, chyba, nefunguje, zpráva, nelze otevřít, neznámý příkaz, nic se nestane, zaseknutí, klávesy nefungují, prázdný, chybí, oprava
from: 8299b222
---

## Otevírání souborů

| Zpráva nebo projev | Příčina | Oprava |
|---|---|---|
| "CadCraft otevírá výkresy DWG a DXF. "…" není ani jedno." | Soubor není `.dwg` ani `.dxf`. | Otevřete samotný soubor výkresu. PDF lze připojit (Otevřít se zeptá: importovat, nebo připojit, viz [PDF podklady](topic:pdf-underlay)); obrázky se vkládají příkazem `IMAGEATTACH`. |
| "Tento binární DXF končí uprostřed objektu: soubor je zkrácen nebo poškozen." | Binární DXF se zastaví před svým koncem. | Napište RECOVER, aby se otevřelo to, co lze přečíst, nebo si vyžádejte soubor znovu. |
| "Tento soubor není čitelný DXF (chybný kód skupiny na řádku …)." | DXF je poškozený, nebo ve skutečnosti není DXF. | Vyžádejte si soubor znovu, nebo DWG. |
| "Tento výkres nelze přečíst. Může být poškozen, nebo uložen ve verzi, kterou čtečka zatím nezvládá (…)." | Čtečka DWG ho nedokázala přečíst. | Vyžádejte si DWG uložený v starší verzi, nebo DXF. |
| "Tento výkres pochází z AutoCADu R11 / R12 (DWG AC1009), který je starší, než CadCraft čte …" | Soubory DWG z Release 12 a starších používají formát, který CadCraft nečte. | V programu, který ho vytvořil, ho uložte jako DXF (libovolná verze), nebo jako novější DWG, a otevřete ten. Funkce Uložit jako v CadCraftu nabízí DXF R12 pro programy, které tento starý formát chtějí. |
| "Nelze otevřít …" a za tím síťová zpráva, u prvního DWG | Čtečku DWG nelze stáhnout: jste offline a CadCraft není uložen pro použití offline, nebo se spojení přerušilo. | Připojte se a zkuste to znovu, nebo otevřete DXF. Klikněte na {{ui:Uložit pro offline}} a počkejte na „Připraveno offline“, aby se soubory DWG příště otevřely i offline. Viz [Práce offline](common:offline). |
| Tlačítko offline říká "Nelze uložit" | Některé soubory se nestáhly. | Zkontrolujte připojení a klikněte na tlačítko, aby se to zkusilo znovu. |
| Tlačítko offline říká "Offline není k dispozici" | Soukromá okna a některé spravované počítače nemohou uložit kopii pro offline. | Použijte běžné okno, nebo zůstaňte online. |
| CadCraft se bez připojení neotevře | Nebyl uložen pro offline použití v tomto prohlížeči, nebo ho prohlížeč vymazal. | Až budete příště online, klikněte na {{ui:Uložit pro offline}} a počkejte na „Připraveno offline“. |
| Výkres se otevře, ale chybí části | Objekty, které CadCraft zatím nedokáže nakreslit, nebo vrstvy, které jsou v souboru vypnuté nebo zamrazené. | Přečtěte si "O tomto souboru" v levém panelu. Zkontrolujte panel {{ui:Vrstvy}}. |
| Text se zalomí na dva řádky | CadCraft kreslí text písmem ve stylu Helvetica, které je širší než některá CAD písma. | Zkraťte text ve Vlastnostech, nebo se smiřte s navíc řádkem. |
| Kružnice se zobrazuje jako elipsa, nebo zrcadlený text se čte správně | Objekt byl nakreslen v nakloněné rovině, nebo se na něj dívalo zdola, v programu, který soubor vytvořil. CadCraft ho zobrazuje tak, jak je vidět shora, jako to dělá půdorysný pohled toho programu; text zůstává čitelný. | Nic se opravovat nemusí. Chcete-li to vidět tak, jak to dělá druhý program, vyžádejte si výkres zploštělý, nebo s objekty nakreslenými shora. |
| Blok, kružnice nebo kóta je jinde než v programu, který soubor vytvořil | Případ výkresu, který CadCraft čte špatně. | Napište nám na Discord, pokud můžete, s přiloženým souborem. |

## Příkazový řádek

| Zpráva nebo projev | Příčina | Oprava |
|---|---|---|
| "Unknown command "…". Type HELP for the list." | Žádný příkaz ani zkratka s tímto názvem. | Napište `HELP`, nebo viz [Přehled příkazů](topic:commands). Některé známé příkazy [ještě nejsou hotové](topic:not-built-yet). |
| "No such command" vedle příkazového řádku při psaní | To, co píšete, zatím nic neodpovídá. | Pište dál, nebo zkontrolujte pravopis. |
| "Point or option keyword required." | To, co jste napsali, není bod ani volba. | Zkontrolujte formát: `x,y`, `@dx,dy`, `@d<a`, nebo jediné číslo. Viz [Zadávání souřadnic a vzdáleností](topic:coordinate-entry). |
| "Requires a positive number or two points." | Vzdálenost byla záporná nebo nebyla číslo. | Napište kladné číslo, nebo klikněte na dva body. |
| "Requires an angle in degrees or two points." | Úhel nebyl číslo. | Napište stupně jako prosté číslo. |
| "Requires a number." | Čekalo se číslo. | Napište jen číslice. |
| "Invalid option keyword." | Písmena neodpovídají žádné volbě. | Napište velká písmena, která jsou zobrazena v hranatých závorkách. |
| `*Cancel*` | Stiskli jste {{key:Esc}}, nebo {{key:Enter}} tam, kde byl vyžadován bod. | Spusťte příkaz znovu. |
| Psaní nedojde na příkazový řádek | Pole na panelu nebo v dialogu má kurzor. | Stiskněte {{key:Enter}} nebo {{key:Esc}}, nebo klikněte na výkres. |
| Příkaz používá objekty, které jste nevybrali | Byly vybrány dříve, než jste příkaz spustili. | Stiskněte {{key:Esc}} před příkazem. |
| Čára šla někam neočekávaně | `x,y` je absolutní. | Pro relativní body použijte `@dx,dy`. |
| "Finish or cancel the current command first (Esc)." | Stiskli jste {{key:Mod+S}}, zatímco příkaz běžel. | Stiskněte {{key:Esc}}, pak uložte. |
| "Could not save as DWG (AutoCAD 2000): … Try Save as, then DXF." | Něco ve výkresu nelze zapsat jako DWG. | Stiskněte {{key:Mod+Shift+S}}, zvolte {{ui:DXF R12}} a klikněte na {{ui:Uložit}}. |
| "Not saved." | Zavřeli jste dialog {{ui:Uložit kopii jako}} tlačítkem {{ui:Zrušit}} nebo {{key:Esc}}. | Stiskněte {{key:Mod+Shift+S}} znovu a klikněte na {{ui:Uložit}}. |

## Úpravy

| Zpráva nebo projev | Příčina | Oprava |
|---|---|---|
| Objekt nejde vybrat | Jeho vrstva je zamknutá, vypnutá nebo zamrazená; nebo jste na listu a je to model uvnitř výřezu. | Odemkněte vrstvu, nebo přejděte na záložku {{ui:Model}}. |
| "Nothing found there." | Pod kliknutím není žádný objekt. | Přibližte a klikněte na samotnou čáru. |
| "Nothing crosses that object there." | {{cmd:TRIM}} nenašel žádný objekt, který by protínal část, kterou jste vybrali. | Zkontrolujte, že řezná čára opravdu protíná. |
| "Cannot trim that object." | Oříznutí funguje na úsečkách, obloucích, kružnicích a mnohočarách. | Nejprve rozložte bloky, nebo smažte a nakreslete znovu. |
| "No boundary in that direction." | {{cmd:EXTEND}} nenašel nic, k čemu by se prodloužil. | Vyberte blíž ke konci, který má růst. |
| "Cannot offset that object." | Odsazení funguje na úsečkách, obloucích, kružnicích a mnohočarách. | Nejprve ho rozložte, nebo nakreslete rovnoběžnou čáru. |
| "Cannot offset that far." | Odsazení by tvar obrátilo naruby. | Použijte menší vzdálenost. |
| "Radius is too large." nebo "Distance is too large." | Zaoblení nebo sražení by přešlo přes konec čáry. | Nastavte menší poloměr pomocí `R`, nebo menší vzdálenosti pomocí `D`. |
| "Only the first or last segment of an open polyline can be cut back." | Roh by zasáhl do středu mnohočáry. | Vyberte dva sousední úseky mnohočáry, nebo použijte `P` pro každý roh. |
| "Pick a second, different line." | Druhý výběr byl stejná čára, nebo nebyl čára. | Vyberte jinou čáru. |
| "Only polylines, block references and dimensions explode." | Výběr neobsahoval nic, co by se dalo rozložit. | Vyberte mnohočáru, odkaz na blok nebo kótu. |
| "That is the current layer. Make another layer current first." | Chtěli jste vypnout aktuální vrstvu. | Klikněte na název jiné vrstvy a pak tuto vypněte. |
| "There is already a layer called …" | Názvy vrstev musí být jedinečné. | Zvolte jiný název. |
| "Nothing to undo." | Už není co vrátit zpět, nebo jste otevřeli či začali výkres (to vymaže historii). | — |

## Kóty a bloky

| Zpráva nebo projev | Příčina | Oprava |
|---|---|---|
| Text a šipky kót jsou drobné nebo obrovské | Velikosti jsou v jednotkách výkresu; celkové měřítko nesedí k výkresu. | Nastavte {{cmd:DIMSCALE}} na měřítko vykreslení; viz [Nastavení velikostí kót](topic:dimension-settings). |
| "Pick a point inside the angle you want to measure." | Umístění úhlové kóty leží na rameni. | Klikněte dovnitř úhlu. |
| "Those lines are parallel." | Rovnoběžné čáry nemají mezi sebou úhel. | Vyberte dvě čáry, které se stýkají. |
| "Pick a linear or aligned dimension." | {{cmd:DIMCONTINUE}} nebo {{cmd:DIMBASELINE}} potřebuje výchozí kótu. | Vyberte délkovou nebo zarovnanou kótu. |
| "This drawing has no blocks yet: F inserts one from a file, L from the library …" | Výkres nemá vlastní bloky. | Napište `F` nebo `L`, nebo vytvořte blok příkazem {{cmd:BLOCK}}. |
| "No block called "…"." | Název je špatně. | Zpráva vypíše bloky, které existují. |
| "A block name cannot start with * or use …" a za tím seznam znaků | Název obsahuje znak, který bloky nemohou použít. | Používejte písmena, číslice, `-` a `_`. |
| "A block cannot contain itself." | Výběr obsahuje odkaz na blok, který vytváříte. | Vynechte tento odkaz. |
| "No objects selected; nothing made." | Stiskli jste {{key:Enter}} před výběrem. | Spusťte {{cmd:BLOCK}} znovu a vyberte objekty. |

## Listy a tisk

| Zpráva nebo projev | Příčina | Oprava |
|---|---|---|
| "Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first." | {{cmd:MVIEW}} na záložce {{ui:Model}}. | Nejprve klikněte na záložku listu. |
| "Open the layout with the viewport first." | {{cmd:VPVIEW}} na záložce {{ui:Model}}. | Nejprve klikněte na záložku listu. |
| Měřítko výřezu vypadá desetkrát špatně | Jednotky výkresu jsou špatně. | Nastavte {{ui:Jednotky}} v {{ui:Aktuální nastavení}}. |
| "There is nothing to plot yet." | Model je prázdný. | Nakreslete něco, nebo otevřete výkres. |
| "Pick the window to plot." | Zvoleno je {{ui:Okno…}} a žádné okno nebylo vybráno. | Klikněte na {{ui:Vybrat}} a vyberte dva rohy. |
| "… bigger than the paper: the edges are cut off." | Oblast se v tomto měřítku nevejde. | Zvolte menší měřítko, větší papír, nebo {{ui:Přizpůsobit papíru}}. |
| "The browser blocked the new tab, so the PDF was downloaded instead." | Vyskakovací okna jsou pro web zablokována. | Otevřete stažené PDF, nebo povolte vyskakovací okna pro web. |
| Znaky se tisknou jako "?" | Písma PDF pro ně nemají písmena (vzácné ideogramy, hindština a další písma vyžadující složité tvarování, …), nebo větší písmo nešlo stáhnout (offline). Evropská písma, cyrilice, řečtina, hebrejština, arabština, perština, urdština, thajština, čínština, japonština a korejština se tisknou tak, jak jsou. | Pro arabské písmo, thajštinu, čínštinu, japonštinu nebo korejštinu vykreslete znovu s připojením. Jiná písma zatím nejsou hotová. |
| Konstrukční čáry se zobrazují v PDF | Jejich vrstva se vykresluje. | Klikněte na tlačítko tisku u vrstvy. |
| Všechny čáry mají stejnou tloušťku | Jejich tloušťka je {{ui:Výchozí}}, takže se tisknou se šířkou pera z dialogu. | Dejte vrstvám nebo objektům {{ui:Tloušťka čáry}} v pravém panelu, nebo zvolte {{ui:Tloušťka čáry}} v dialogu. Chcete-li vidět tloušťky na obrazovce, stiskněte {{ui:TČ}} ve stavovém řádku. |

## Klávesy a obrazovka

| Projev | Příčina | Oprava |
|---|---|---|
| F3, F7 nebo F8 mění hlasitost nebo otevírá Mission Control | Funkční klávesy Macu. | Podržte **fn**, nebo použijte tlačítka ve stavovém řádku. Viz [Klávesy, myši a trackpady](common:keys). |
| F7 se ptá na prohlížení s kurzorem | Firefox používá F7 sám. | Zvolte Ne; použijte tlačítko {{ui:Mřížka}}. |
| {{key:Mod+N}} otevřelo okno prohlížeče | Prohlížeč si tuto klávesu nechává. | Klikněte na {{ui:Nová}}, nebo napište `NEW`. |
| {{key:Mod+A}} vybralo text na příkazovém řádku | Příkazový řádek měl kurzor. | Nejprve klikněte na objekt, nebo napište `ALL` u výzvy `Select objects`. |
| {{key:Delete}} nemaže | Příkazový řádek měl kurzor. | Napište `E` a stiskněte {{key:Enter}}. |
| Pravé tlačítko na trackpadu Macu nedělá nic | Ctrl-klik může být počítán jako obyčejný klik. | Klikněte dvěma prsty. |
| Na trackpadu se nic neposouvá | Chybí prostřední tlačítko a mezerník neposouvá. | Přejeďte dvěma prsty: 2D pohled se posouvá (štípnutí a kolečko myši přibližují). Nebo táhněte s podrženým pravým tlačítkem. |
| První {{key:Esc}} ukončilo celou obrazovku | Prohlížeč používá Esc k ukončení celé obrazovky. | Stiskněte {{key:Esc}} znovu pro zrušení příkazu. |
| {{key:F1}} na Macu nic nedělá | F1 je klávesa jasu. | Podržte **fn**, nebo klikněte na {{ui:Nápověda}}. |
| Psaní jde do vyhledávacího pole nápovědy | Panel nápovědy má kurzor. | Klikněte na výkres. |
| Výkres zmizel | Oddálili jste příliš daleko. | Klikněte na {{ui:Rozsah}}, nebo dvakrát klikněte na kolečko. |
| "Opustit web?" při zavírání karty | Jsou neuložené změny. | Zůstaňte, uložte pomocí {{key:Mod+S}} a pak zavřete. |
