---
title: Menüüd, klahvid ja hiir
summary: Vali menüüstiil, mis sobib sinu seniste töövõtetega, anna mis tahes käsule oma klahv või klahv, mis kirjutab käsu, teisalda käsud riba vahekaartide vahel ning määra, mida ratas ja hiire nupud teevad.
keywords: menüüstiil, menüüd, riba, tööriistariba, käsurida, klaviatuuri otseteed, kiirklahvid, klahvid, kohandamine, ümber määramine, ümber sidumine, otseteed, tekstiklahvid, hiir, ratas, ümber pööratud, suumi suund, keskmine nupp, parem nupp, nihutamine, eksport, import, vahetamine, tuttav, klassikaline joonistus
from: 8bbf4f88
---

CadCraft'i käsud on samad, kuidas neid ka kutsuda, ja käsurida on alati olemas koos oma aliastega (`L`, `C`, `TR` …). **Menüüstiil** määrab ainult, kus nupud ekraanil asuvad, mida neid seal nimetatakse ja millised klahvid neid käivitavad. Vali see jaotises {{ui:Sätted}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menüüd, klahvid ja hiir}}; muudatus rakendub kohe ja see brauser mäletab seda.

## Kolm stiili

| Stiil | Mida saad |
|---|---|
| {{ui:CadCraft}} | CadCraft'i oma tööriistariba: Fail, Joonista, Muuda, Märkused, Parameetriline, Plokid, Lehed, Redigeeri ja Vaade, igaühel oma menüü {{ui:Veel}}. Algus. |
| {{ui:Klassikaline joonistus}} | Riba, paigutatud nii, nagu klassikalised 2D-joonestusprogrammid oma paigutavad: menüü {{ui:Fail}} ja kiirnupud, seejärel vahekaardid {{ui:Avaleht}} (Joonista, Muuda, Märkused, Kihid, Plokk, Omadused, Utiliidid, Lõikelaud), Lisa, Märkused, Parameetriline, Vaade, Halda, Väljund ja 3D. Käske kirjuta nagu alati. Keskmine nupp nihutab; parem klõps on {{key:Enter}} ja lohistamine parema nupuga ei tee midagi. |
| {{ui:Riba}} | Lihtsate tegevusvahekaartide riba: Joonista, Muuda, Märkused, Parameetriline, Plokid, Lehed, Vaade, 3D ja Tööriistad, koos menüü {{ui:Fail}} ja kiirnuppudega paremal. Keskmine ja parem nupp nihutavad, nagu CadCraft'i oma stiilis. |

Iga stiil säilitab CadCraft'i klahvid: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, ning {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} joonistusabivahendite jaoks. Tähed ei ole kunagi klahvid: CadCraft kirjutab need käsuritta.

Ribad sisaldavad ka kihtide paneeli tööriistu ja olekuriba joonistusabivahendeid. Vahekaart {{ui:3D}} täitub pärast seda, kui joonise all olev 3D-vahekaart on avatud; 3D-tööriist, mis valitakse vahekaardil Mudel, avab kõigepealt 3D-vahekaardi, ja 2D-tööriist 3D-vahekaardil viib kõigepealt tagasi vahekaardile Mudel.

:::tip
Klahv, mis kuulub CadCraft'i oma paigutusse, aga mille sinu stiil on andnud teisele käsule, ei tee midagi ning olekuriba ütleb, kuhu tema käsk läks („In My keys, Ortho is Ctrl+Alt+O“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nooleklahvid säilitavad alati oma tähenduse. Kui käsk töötab või käsureale kirjutatakse tähti, kuuluvad klahvid käsureale.
:::

## Tee see enda omaks

1. Vali stiil, mis on sulle kõige lähem, ja klõpsa {{ui:Kohanda…}}.
2. Jaotises {{ui:Klahvid ja menüüd}} leia käsk (otsinguväli aitab). Klõpsa {{ui:Lisa klahv}} ja vajuta klahvi. Klahvi eemaldamiseks klõpsa sellel.
3. Riba puhul teisaldab {{ui:Asukoht}} käsu teise vahekaardi ja paneeli, menüüsse {{ui:Fail}} või {{ui:Ainult klahvid}}.
4. Jaotises {{ui:Hiir}} määra ratas ja nupud, mis joonist nihutavad.
5. Anna sellele nimi ja klõpsa {{ui:Salvesta}}.

Sisseehitatud stiili salvestamine teeb sinu enda koopia („Minu klassikaline joonistus“); sisseehitatud stiil ei muutu kunagi. Klahv, mis on antud kahele käsule, kuvatakse punasena ja see tuleb parandada enne salvestamist.

## Klahvid, mis kirjutavad käsu

{{cmd:SHORTCUTS}} ({{ui:Vaade}} › {{ui:Veel}} › {{ui:Klahvikombinatsioonid…}}) annab klahvile terve käsurea, näiteks {{key:Ctrl+Alt+L}} käsule `LINE` või {{key:F9}} käsule `ZOOM E`. Need klahvid kuuluvad kasutatavale stiilile: kui see versioon esimest korda avaneb, viiakse vanemas versioonis tehtud klahvid üks kord sinu enda stiilile „Minu CadCraft klahvid“ ja need töötavad nagu varem. Stiili eksportimisel need kaasa ka.

## Hiir

- **Hiireratas**: {{ui:Ratast üles kerides suumitakse sisse}} (vaikimisi) või {{ui:Ratast üles kerides suumitakse välja}}, ja kui kiiresti. Puuteplaadi nipistamine suumib alati nii, nagu su sõrmed liiguvad.
- **Joonise nihutamine**: keskmise nupuga, parema nupuga või mõlemaga. Parem klõps ilma lohistamata on alati {{key:Enter}}. Vasak nupp valib ja joonistab CadCraftis alati, nii et selle märkimine ei muuda siin midagi.
- **Lohistamine 3D-vaadetes**: vahekaart 3D säilitab oma nupud igas stiilis (vasak pöörab, keskmine ja parem nihutavad).

## Vii see kaasa

{{ui:Ekspordi}} salvestab kasutatava stiili väikese `.ccinput.json`-failina; {{ui:Import…}} lisab ühe teisest arvutist või kolleegilt. Imporditud fail saab viidata ainult CadCraft'i enda käskudele: kõik muu jäetakse välja ja loetakse olekuribal. {{ui:Kustuta see stiil}} eemaldab ühe sinu enda stiilidest.

:::note
Need sätted jäävad sellesse brauserisse. {{ui:Kasuta seda stiili kõigis rakendustes}} stiilikaartide all paneb iga rakenduse avanema vastavas stiilis (oma tööriistariba, riba või klassikaline joonistus), koos muudatustega, mida igas rakenduses tegid. CadCraftil ei ole menüüriba stiili: kui teise rakenduse menüüriba valitakse kõigi rakenduste jaoks, jätab CadCraft oma tööriistariba alles.
:::

Seotud: [Klaviatuur ja hiir](topic:keyboard) · [CadCraft'i sätted](topic:settings) · [Tulek teistest joonestustarkvaradest](topic:coming-from) · [Käsualiased](topic:command-aliases)
