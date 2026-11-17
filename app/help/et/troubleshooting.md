---
title: Tõrkeotsing
summary: Teated, mida CadCraft näitab, ja probleemid, millega võid kokku puutuda, igaüks koos põhjuse ja parandusega.
keywords: probleem, viga, ei tööta, teade, ei saa avada, tundmatu käsk, miski ei juhtu, kinni, klahvid ei tööta, tühi, puudu, parandus
from: 8299b222
---

## Failide avamine

| Teade või sümptom | Põhjus | Parandus |
|---|---|---|
| „CadCraft avab DWG- ja DXF-jooniseid. „…“ ei ole kumbagi.“ | Fail ei ole `.dwg` ega `.dxf`. | Ava joonisefail ise. PDF-i saab tuua (Ava küsib: impordi või lisa, vt [PDF-aluskihid](topic:pdf-underlay)); pildid lisatakse käsuga `IMAGEATTACH`. |
| „See binaarne DXF lõpeb objekti keskel: fail on lühike või vigane.“ | Binaarne DXF lõpeb enne oma lõppu. | Kirjuta RECOVER, et avada see, mida saab lugeda, või palu fail uuesti. |
| „See ei ole loetav DXF (vale grupikood real …).“ | DXF on vigane või pole tegelikult DXF. | Palu fail uuesti või DWG-na. |
| „Seda joonist ei saanud lugeda. See võib olla vigane või salvestatud versioonis, mida lugeja veel ei käsitle (…).“ | DWG-lugeja ei saanud seda lugeda. | Palu DWG vanemas versioonis või DXF. |
| „See joonis on AutoCAD R11 / R12 failist (DWG AC1009), vanem kui CadCraft loeb …“ | DWG-failid versioonist Release 12 ja varasemast kasutavad vormingut, mida CadCraft ei loe. | Salvesta see programmis, mis selle tegi, DXF-ina (mis tahes versioon) või uuema DWG-na, ja ava see. CadCraft-i enda Salvesta nimega pakub DXF R12 programmidele, mis seda vana vormingut vajavad. |
| „Ei saanud avada …“, millele järgneb võrguteade, esimesel DWG-l | DWG-lugejat ei saanud alla laadida: oled võrguühenduseta ja CadCraft pole salvestatud võrguks, või ühendus katkes. | Mine võrku ja proovi uuesti või ava DXF. Klõpsa {{ui:Save for offline}} ja oota teadet „Võrguks valmis“, et DWG-failid avaneksid järgmine kord ka võrguühenduseta. Vt [Töö võrguühenduseta](common:offline). |
| Võrguühenduseta nupp ütleb „Ei saanud salvestada“ | Osa faile ei laadinud alla. | Kontrolli ühendust ja klõpsa nuppu, et proovida uuesti. |
| Võrguühenduseta nupp ütleb „Võrguühenduseta pole saadaval“ | Privaatsed aknad ja mõned hallatud arvutid ei saa hoida võrguühenduseta koopiat. | Kasuta tavalist akent või jää võrku. |
| CadCraft ei avane ilma ühenduseta | Seda ei ole selles brauseris võrguühenduseta kasutamiseks salvestatud, või brauser tühjendas selle. | Järgmine kord, kui oled võrgus, klõpsa {{ui:Save for offline}} ja oota teadet „Võrguks valmis“. |
| Joonis avaneb, kuid osa on puudu | Objekte, mida CadCraft veel ei oska joonistada, või faili kihte, mis on failis välja lülitatud või külmutatud. | Loe vasakpoolsel paneelil „Selle faili kohta“. Vaata paneeli {{ui:Layers}}. |
| Tekst murdub kaheks reaks | CadCraft joonistab teksti Helvetica-taolise fondiga, mis on mõne CAD-fondi kohta laiem. | Lühenda teksti paneelil {{ui:Properties}} või jää lisarea juurde. |
| Ring näitub ellipsina või peegeldatud tekst on õiges suunas loetav | Objekt joonistati kaldus tasapinnal või vaadati alt, selles programmis, mis faili tegi. CadCraft näitab seda ülalt vaadatuna, nagu selle programmi tasavaade; tekst jääb loetavaks. | Parandamist pole vaja. Et näha seda teise programmi moodi, palu joonis lameda või ülevalt joonistatud objektidega. |
| Plokk, ring või mõõt asub mujal kui programmis, mis faili tegi | Joonisejuhtum, mida CadCraft loeb valesti. | Anna meile teada Discordis, koos failiga, kui saad selle jagada. |

## Käsurida

| Teade või sümptom | Põhjus | Parandus |
|---|---|---|
| „Tundmatu käsk „…“. Loendi jaoks kirjuta HELP.“ | Sellise nime või aliasega käsku pole. | Kirjuta `HELP` või vt [Käskude viide](topic:commands). Mõned tuttavad käsud [pole veel valmis](topic:not-built-yet). |
| „No such command“ käsurea kõrval kirjutamise ajal | Mida kirjutasid, ei vasta veel miski. | Jätka kirjutamist või kontrolli õigekirja. |
| „Nõutud on punkt või valiku märksõna.“ | Mida kirjutasid, ei ole punkt ega valik. | Kontrolli vormingut: `x,y`, `@dx,dy`, `@d<a` või üks arv. Vt [Koordinaatide ja kauguse sisestamine](topic:coordinate-entry). |
| „Nõuab positiivset arvu või kahte punkti.“ | Kaugus oli negatiivne või polnud arv. | Kirjuta positiivne arv või klõpsa kahte punkti. |
| „Nõuab nurka kraadides või kahte punkti.“ | Nurk ei olnud arv. | Kirjuta kraadid lihtsa arvuna. |
| „Nõuab arvu.“ | Oodati arvu. | Kirjuta ainult numbreid. |
| „Vale valiku märksõna.“ | Tähed ei vasta ühelegi valikule. | Kirjuta suured tähed, mis on näidatud nurksulgudes. |
| `*Cancel*` | Vajutasid {{key:Esc}} või vajutasid {{key:Enter}} kohas, kus oli nõutud punkt. | Alusta käsku uuesti. |
| Kirjutamine ei jõua käsureale | Paneelis või dialoogis on kursor kastis. | Vajuta {{key:Enter}} või {{key:Esc}} või klõpsa joonisel. |
| Käsk kasutab objekte, mida sa ei valinud | Need valiti enne, kui käsu alustasid. | Vajuta enne käsku {{key:Esc}}. |
| Joon läks ootamatusse kohta | `x,y` on absoluutne. | Kasuta suhtelisi punkte kujul `@dx,dy`. |
| „Lõpeta või tühista kõigepealt praegune käsk (Esc).“ | Vajutasid {{key:Mod+S}} käsu töötamise ajal. | Vajuta {{key:Esc}} ja salvesta siis. |
| „Ei saanud salvestada DWG-na (AutoCAD 2000): … Proovi Salvesta nimega ja siis DXF.“ | Midagi joonisest ei saanud kirjutada DWG-na. | Vajuta {{key:Mod+Shift+S}}, vali {{ui:DXF R12}} ja klõpsa {{ui:Save}}. |
| „Ei salvestatud.“ | Sulgesid dialoogi {{ui:Save a copy as}} nupuga {{ui:Cancel}} või {{key:Esc}}. | Vajuta {{key:Mod+Shift+S}} uuesti ja klõpsa {{ui:Save}}. |

## Muutmine

| Teade või sümptom | Põhjus | Parandus |
|---|---|---|
| Objekti ei saa valida | Selle kiht on lukus, väljas või külmutatud; või oled lehel ja objekt on vaateakna sees olev mudel. | Ava kihi lukk või mine vahelehele {{ui:Model}}. |
| „Seal midagi ei leitud.“ | Klõpsu all pole objekti. | Suumi sisse ja klõpsa joonel endal. |
| „Seal ei ristu miski selle objektiga.“ | {{cmd:TRIM}} ei leidnud objekti, mis ristuks sinu valitud tükiga. | Kontrolli, et lõikejoon tõesti seda ristub. |
| „Seda objekti ei saa lõigata.“ | Lõikamine töötab joonte, kaarte, ringide ja polüjoonidega. | Lõhu kõigepealt plokid või kustuta ja joonista uuesti. |
| „Selles suunas pole piiri.“ | {{cmd:EXTEND}} ei leidnud midagi, millega kohtuda. | Vali lähemal otsale, mis peaks kasvama. |
| „Seda objekti ei saa nihutada.“ | Nihutamine töötab joonte, kaarte, ringide ja polüjoonidega. | Lõhu see kõigepealt lahti või joonista paralleelne joon. |
| „Nii kaugele ei saa nihutada.“ | Nihe pööraks kuju pahupidi. | Kasuta väiksemat kaugust. |
| „Raadius on liiga suur.“ või „Kaugus on liiga suur.“ | Ümardus või faas läheks üle joone lõpu. | Määra väiksem raadius käsuga `R` või väiksemad kaugused käsuga `D`. |
| „Avatud polüjoone saab tagasi lõigata ainult esimese või viimase lõigu.“ | Nurk läheks polüjoone keskele. | Vali kaks üksteise kõrval olevat polüjoone lõiku või kasuta igale nurgale `P`-d. |
| „Vali teine, erinev joon.“ | Teine valik oli sama joon või ei olnud joon. | Vali mõni teine joon. |
| „Lõhutakse ainult polüjooni, plokiviiteid ja mõõte.“ | Valikus polnud midagi lahtivõetavat. | Vali polüjoon, plokiviide või mõõt. |
| „See on praegune kiht. Tee kõigepealt praeguseks mõni teine kiht.“ | Proovisid välja lülitada praeguse kihi. | Klõpsa teise kihi nime ja lülita siis see välja. |
| „Kiht nimega … on juba olemas.“ | Kihtide nimed peavad olema ainulaadsed. | Vali mõni muu nimi. |
| „Pole midagi tagasi võtta.“ | Tagasivõetavat pole enam, või avasid või alustasid joonist (see tühjendab ajaloo). | — |

## Mõõtmed ja plokid

| Teade või sümptom | Põhjus | Parandus |
|---|---|---|
| Mõõtmetekst ja nooled on väikesed või suured | Suurused on joonisühikutes; üldine mõõtkava ei sobi joonisega. | Määra {{cmd:DIMSCALE}} prindimõõtkavaks; vt [Mõõtmete suuruste seadistamine](topic:dimension-settings). |
| „Vali punkt nurga sees, mida soovid mõõta.“ | Nurga mõõdu asukoht asub haaral. | Klõpsa nurga sisse. |
| „Need jooned on paralleelsed.“ | Paralleelsete joonte vahel pole nurka. | Vali kaks joont, mis kohtuvad. |
| „Vali lineaarne või joondatud mõõt.“ | {{cmd:DIMCONTINUE}} või {{cmd:DIMBASELINE}} vajab algust. | Vali lineaarne või joondatud mõõt. |
| „Sel joonisel pole veel plokke: F lisab ühe failist, L teegist …“ | Joonisel pole omi plokke. | Kirjuta `F` või `L` või tee plokk käsuga {{cmd:BLOCK}}. |
| „Plokki nimega „…“ ei ole.“ | Nimi on vale. | Teade loetleb olemasolevad plokid. |
| „Ploki nimi ei saa alata märgiga * ega kasutada …“, millele järgneb märkide loend | Nimes on märk, mida plokid ei saa kasutada. | Kasuta tähti, numbreid, `-` ja `_`. |
| „Plokk ei saa sisaldada iseennast.“ | Valik sisaldab viidet plokile, mida tehakse. | Jäta see viide välja. |
| „Objekte pole valitud; midagi ei tehtud.“ | Vajutasid {{key:Enter}} enne valimist. | Käivita {{cmd:BLOCK}} uuesti ja vali objektid. |

## Lehed ja printimine

| Teade või sümptom | Põhjus | Parandus |
|---|---|---|
| „Vaateaknad lähevad lehele. Ava kõigepealt lehe vaheleht (või tee see käsuga LAYOUT).“ | {{cmd:MVIEW}} vahelehel {{ui:Model}}. | Klõpsa kõigepealt lehe vahelehel. |
| „Ava kõigepealt vaateaknaga leht.“ | {{cmd:VPVIEW}} vahelehel {{ui:Model}}. | Klõpsa kõigepealt lehe vahelehel. |
| Vaateakna mõõtkava paistab kümme korda vale | Joonisühikud on valed. | Määra {{ui:Units}} jaotises {{ui:Current settings}}. |
| „Printida pole veel midagi.“ | Mudel on tühi. | Joonista midagi või ava joonis. |
| „Vali aken, mida printida.“ | Valiti {{ui:A window…}} ja akent pole valitud. | Klõpsa {{ui:Pick}} ja vali kaks nurka. |
| „… on suurem kui paber: servad lõigatakse ära.“ | Ala ei mahu sellel mõõtkaval. | Vali väiksem mõõtkava, suurem paber või {{ui:Fit to paper}}. |
| „Brauser blokeeris uue vahelehe, seega PDF laaditi alla.“ | Hüpikaknad on sellel saidil blokeeritud. | Ava allalaaditud PDF või luba saidile hüpikaknad. |
| Tähemärgid prinditakse kui „?“ | PDF-i fontidel pole nende jaoks tähte (harvad ideograafid, hindi ja muud kirjad, mis vajavad keerulist kujundamist, …), või suuremat fonti ei saanud laadida (võrguühenduseta). Euroopa kirjad, kirillitsa, kreeka, heebrea, araabia, pärsia, urdu, tai, hiina, jaapani ja korea tekst prinditakse oma kujul. | Araabia, tai, hiina, jaapani või korea kirja puhul prindi uuesti ühendusega. Muud kirjad pole veel valmis. |
| Konstruktsioonijooned on PDF-is näha | Nende kiht prinditakse. | Klõpsa kihi printeri nuppu. |
| Kõik jooned on ühesuguse paksusega | Nende joonepaksus on {{ui:Default}}, seega prinditakse need dialoogi pliiatsi laiusega. | Anna kihtidele või objektidele {{ui:Lineweight}} parempoolses paneelis või vali dialoogis {{ui:Line weight}}. Joonepaksuste nägemiseks ekraanil vajuta olekuribal {{ui:LWT}}. |

## Klahvid ja ekraan

| Sümptom | Põhjus | Parandus |
|---|---|---|
| F3, F7 või F8 muudab helitugevust või avab Mission Controli | Mac-i funktsiooniklahvid. | Hoia all **fn** või kasuta olekuriba nuppe. Vt [Klahvid, hiired ja puuteplaadid](common:keys). |
| F7 küsib kursori sirvimise kohta | Firefoxi enda kasutus F7-le. | Vali Ei; kasuta nuppu {{ui:Grid}}. |
| {{key:Mod+N}} avas brauseriakna | Brauser hoiab selle klahvi enda jaoks. | Klõpsa {{ui:New}} või kirjuta `NEW`. |
| {{key:Mod+A}} valis käsurea teksti | Käsureal oli kursor. | Klõpsa kõigepealt objektil või kirjuta `ALL` real `Select objects`. |
| {{key:Delete}} ei kustuta | Käsureal oli kursor. | Kirjuta `E` ja vajuta {{key:Enter}}. |
| Paremklõps ei tee Mac-i puuteplaadil midagi | Control-klõps võib loeda tavaliseks klõpsuks. | Klõpsa kahe sõrmega. |
| Puuteplaadil ei nihu midagi | Puuteplaadil pole keskmist nuppu ja tühik ei nihuta. | Pühi kahe sõrmega: 2D-vaade nihkub (näpistus ja hiireratas suumivad). Või lohista paremklõps all hoides. |
| Esimene {{key:Esc}} väljus täisekraanilt | Brauser kasutab Esc-i täisekraanilt väljumiseks. | Vajuta {{key:Esc}} uuesti, et käsk tühistada. |
| {{key:F1}} ei tee Macil midagi | F1 on heleduse klahv. | Hoia all **fn** või klõpsa {{ui:Help}}. |
| Kirjutamine läheb abi otsingukasti | Abi paneelil on kursor. | Klõpsa joonisel. |
| Joonis läks tühjaks | Suumisid väga kaugele. | Klõpsa {{ui:Extents}} või topeltklõpsa hiireratast. |
| „Lahkuda saidilt?“ vahelehe sulgemisel | On salvestamata muudatusi. | Jää siia, salvesta {{key:Mod+S}}-ga ja sulge siis. |
