---
title: Alustamine CadCraftiga
summary: Mis on CadCrafti joonistusrakendus, kus see töötab ja kuidas teha esimene joonis tühjalt ekraanilt salvestatud failini.
keywords: alustamine, esimene joonis, uus, ava, salvesta, salvesta nimega, algus, õpetus, sissejuhatus, kiirstart
from: 1a56c575
---

CadCraft on 2D-joonistusrakendus. Joonistad ja muudad jooni, kaari, murdjooni, teksti, mõõte ja plokke, seadistad lehed tiitelplokkide ja vaateakendega ning trükid need PDF-iks. See avab DWG- ja DXF-jooniseid ning salvestab need DWG- või DXF-ina.

See töötab sinu veebibrauseris. Midagi ei pea installima: sait annab aadressi ja terve rakendus laetakse lehele. Sinu joonised avatakse sinu arvutist ja salvestatakse tagasi sinna. **Midagi ei laadita üles.**

Kui oled varem joonistanud, loe pärast seda lehte [Teisest joonistustarkvarast tulijale](topic:coming-from). Enamik harjumusi kandub üle ja need vähesed, mis ei kandu, on seal loetletud.

## Eelistad juhendatud režiimi?

Sisesta `TOUR` (või klõpsa alguskaardil {{ui:Alusta ekskursiooni}} või {{ui:Sätted}} › {{ui:CadCraft}} › {{ui:Tee ekskursioon uuesti}}). Kuus lühikest sammu kastis joonise kohal: joonista joon ja ring, teisalda seda, lõika, kustuta midagi ja lisa mõõt. Iga samm lõpeb, kui selle teed, ning sammu või kogu ekskursiooni saad vahele jätta. See algab iseenesest ainult esimesel korral. [Kiirviide](topic:cheat-sheet) sisaldab 40 käsku, mida kasutad kõige sagedamini, ja [käskude kaart](topic:command-map) kõiki käske.

## Mida vajad

- Värske Chrome, Edge, Firefox või Safari Mac-, Windowsi- või Linuxi-arvutis. Vaata [Brauserid ja platvormid](common:browsers).
- Kõige mugavam on hiir ratta või puuteplaadiga; puuteplaat töötab, vaata [Hiir, puuteplaat ja puuteekraan](topic:mouse-trackpad-touch).
- Klaviatuur. CadCraftit juhitakse sisestatud käskudega, nagu enamikku joonistusprogramme.

## Idee ühes lõigus

Sisestad käsu (või klõpsad selle nuppu) ja allservas olev käsurida esitab sulle küsimusi ükshaaval: „Määra esimene punkt“, „Määra järgmine punkt“. Vastad igale küsimusele, klõpsates joonisel või sisestades väärtuse, ning vajutad {{key:Enter}}. {{key:Esc}} tühistab. See on kogu suhtlusmudel; kõik muu on detail.

## Esimene joonis

Joonistad lõikudest 4000 x 3000 ristküliku, paned keskele ringi ja salvestad faili.

1. Ava CadCraft. Allservas olev käsurida näitab `Käsk:` ja joonisala näitab lühikest kaarti „Alusta joonistamist“.
2. Sisesta `L` ja vajuta {{key:Enter}}. Käsuritta klõpsamine pole vaja: kuhu iganes kirjutad, läheb tekst sinna.
3. Käsurea küsimus muutub: `Määra esimene punkt:`. Sisesta `0,0` ja vajuta {{key:Enter}}.
4. Sisesta `@4000,0` ja vajuta {{key:Enter}}. Ilmub joon, mis kulgeb paremale. `@` tähendab „viimasest punktist“.
5. Sisesta `@0,3000` ja vajuta {{key:Enter}}.
6. Sisesta `@-4000,0` ja vajuta {{key:Enter}}.
7. Sisesta `C` ja vajuta {{key:Enter}}. `C` on valik Sulge: viimane joon läheb tagasi esimese punkti juurde ning käsk lõpeb.
8. Klõpsa tööriistariba rühmas Vaade nupule {{ui:Ulatus}}. Ristkülik täidab ekraani.

Nüüd peaksid nägema nelja joont, mis moodustavad ristküliku, ning käsurea kohal olev ajalugu loetleb, mida sisestasid.

9. Sisesta `C` ja vajuta {{key:Enter}}, et alustada ringi käsku.
10. Sisesta `2000,1500` ja vajuta {{key:Enter}} keskpunkti jaoks.
11. Sisesta `500` ja vajuta {{key:Enter}} raadiuse jaoks.

Ring ilmub ristküliku keskele.

12. Vajuta {{key:Mod+S}} või klõpsa rühmas Fail nupule {{ui:Salvesta}}.

Brauser laadib faili `Drawing1.dwg` tavapärasesse allalaadimiste kausta ja ajalugu ütleb, et koopia salvestati DWG-na. See fail avaneb uuesti CadCraftis ja enamikus teistes CAD-programmides. (Kui oled selles brauseris varem valinud {{ui:Salvesta nimega}} all DXF-i, salvestub uus joonis selle asemel nimega `Drawing1.dxf`.)

:::tip
Tühjal käsureal vajuta {{key:Enter}}, et korrata viimast käsku. Kui eelistad, vajuta {{key:Space}} {{key:Enter}} asemel: väljaspool teksti teeb see sama.
:::

## Olemasoleva joonise avamine

1. Vajuta {{key:Mod+O}} või klõpsa {{ui:Ava}}.
2. Vali failivalijas `.dwg` või `.dxf` fail.

Samuti saad lohistada DWG- või DXF-faili {{pick:mac=Finder|windows=Failihaldur|linux=sinu failihaldur}} joonisalale. Fail loetakse lehel; see ei lahku kunagi sinu arvutist.

Vaata [Failid: mis avaneb, mis salvestub](topic:files), mis säilib ja mis teisendub.

## Salvestamine: mida oodata

Brauseris salvestamine toimib teisiti kui töölauaprogrammis:

- {{ui:Salvesta}} laadib **alati alla uue koopia**. See ei kirjuta avatud faili üle. Kui samanimeline fail on juba sinu allalaadimiste kaustas, lisab brauser tavaliselt numbri, näiteks `Drawing1 (1).dwg`.
- {{ui:Salvesta}} kasutab joonise vormingut: DWG, kui avasid DWG-faili, DXF, kui avasid DXF-i. Valimiseks vajuta {{key:Mod+Shift+S}} või klõpsa {{ui:Salvesta nimega}}, siis vali {{ui:DWG}} (ja selle versioon), {{ui:DXF R12}} või {{ui:DXF 2000}}. Vaata [Salvestamine](topic:files#saving).
- Avatud faili ei muudeta kunagi.
- Teise faili avamine või {{ui:Uus}} paneb selle joonise kohale oma vahekaardile, nii et ükski avatud fail ei sulgu. Kui sulged joonise vahekaardi või lahkud lehelt salvestamata muudatustega, küsib CadCraft enne: {{ui:Salvesta enne koopia}}, muudatused kõrvale heita või {{ui:Loobu}}. Brauseri vahekaardi sulgemisel näidatakse selle asemel brauseri enda küsimust „Kas lahkuda lehelt?“.

Pilvesalvestus pole veel saadaval. Kuhu sinu failid lähevad ja miks need jäävad privaatseks, on selgitatud jaotises [Sinu failid ja privaatsus](common:your-files).

## Kuhu edasi minna

Selle abi avamiseks joonise kõrval vajuta mis tahes ajal {{key:F1}} või klõpsa ülal ribal {{ui:Abi}}. See töötab ilma ühenduseta.

- [CadCrafti ekraan](topic:workspace) nimetab iga riba ja paneeli.
- [Joonistamine koordinaatidega](topic:draw-with-coordinates) on parim esimene läbikäik.
- [Klaviatuur ja hiir](topic:keyboard) loetleb kõik klahvid.
- Sisesta käsureale `HELP`, et näha kõigi käskude loetelu, või loe [Käskude viide](topic:commands).
