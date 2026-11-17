---
title: Tipkovnica in miška
summary: Vsaka tipka, dejanje miške in tipka ukazne vrstice v risalnem programu CadCraft, kot jih obravnava koda.
keywords: tipkovnica, bližnjice, tipke, miška, kolesce, pomik, povečava, desni klik, srednji gumb, f3, f7, f8, ctrl, tipka ukaza, bližnjične tipke, kopiraj, izreži, prilepi, podvoji, odložišče, izberi vse
from: a2608a29
---

Bližnjice so prikazane za vaš računalnik. Na Macu vsaka bližnjica {{key:Mod}} spodaj uporablja tipko Command, deluje pa tudi tipka Control. Kako so tipke zapisane in kako na Macu uporabljati tipke F, je v [Tipke, miške in sledilne ploščice](common:keys).

## Vtipkavanje ukazov

| Tipka | Kaj naredi |
|---|---|
| Katera koli črka, številka ali znak | Pojde v ukazno vrstico, ne glede na to, kje je kazalec, razen če ima polje v podoknu kazalec |
| {{key:Enter}} | Pošlje, kar ste vtipkali. Na praznem pozivu: ponovi zadnji ukaz, konča ukaz, konča izbor ali sprejme privzeto vrednost v `<…>` |
| {{key:Space}} | Enako kot {{key:Enter}}, razen ko CadCraft zahteva besedilo (besedilo, imena blokov, besedilo kote), kjer vtipka presledek |
| {{key:Esc}} | Prekliče ukaz. Brez zagnanega ukaza: prekliče premik ročice ali okno izbora, nato počisti izbor |
| {{key:Tab}} | Sprejme predlagani ukaz, prikazan desno od ukazne vrstice. Če nič ni vtipkano in je kazalec nad prekrivajočimi se objekti: označi naslednjega tam (klik ga izbere) |
| {{key:Up}} {{key:Down}} | Pomika se po vrsticah, ki ste jih vtipkali prej (zadnjih 100) |

## Risanje in urejanje

| Tipka | Kaj naredi |
|---|---|
| {{key:Mod+Z}} | Razveljavi zadnji ukaz |
| {{key:Mod+Y}} ali {{key:Mod+Shift+Z}} | Uveljavi |
| {{key:Mod+A}} | Izbere vse objekte, ki jih lahko urejate na odprtem zavihku ({{cmd:SELECTALL}}). Če ste nekaj vtipkali v ukazni vrstici, izbere to besedilo |
| {{key:Delete}} | Izbriše izbrane objekte ({{cmd:ERASE}}), razen če ste nekaj vtipkali v ukazni vrstici |
| {{key:Backspace}} | Izbriše izbrane objekte, kadar ukazna vrstica nima kazalca; v ukazni vrstici izbriše, kar ste vtipkali |
| {{key:Esc}} | Brez zagnanega ukaza: počisti izbor ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Shrani kopijo v obliki risbe (DWG ali DXF) |
| {{key:Mod+Shift+S}} | Shrani kot: izberite DWG ali DXF, nato shranite kopijo |
| {{key:Mod+O}} | Odpre DWG ali DXF |
| {{key:Mod+P}} | Izris v PDF |

Razveljavitev, uveljavitev, izbor vseh in izris ne naredijo ničesar, dokler teče ukaz: najprej pritisnite {{key:Esc}}.

## Kopiranje, rezanje in lepljenje

| Tipka | Kaj naredi |
|---|---|
| {{key:Mod+C}} | Kopira izbor v odložišče ({{cmd:COPYCLIP}}). Ničesar izbranega: CadCraft zahteva objekte |
| {{key:Mod+X}} | Izreže: kopira izbor, nato ga izbriše ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Prilepi: kopija sledi kazalcu; kliknite ali vtipkajte točko, da jo postavite ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Prilepi na isto mesto: na koordinate, iz katerih je bila kopirana ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Podvoji: kopija izbora se premika s kazalcem; kliknite, da jo postavite, {{key:Esc}} ne pusti ničesar ({{cmd:DUPLICATE}}) |

Enaka dejanja so v skupini {{ui:Urejanje}} orodne vrstice ({{ui:Kopiraj}}, {{ui:Prilepi}}) in v meniju {{ui:Več}}. Medtem ko teče drug ukaz, ga končajte ali najprej pritisnite {{key:Esc}}; ponovni pritisk {{key:Mod+V}} ali {{key:Mod+D}}, medtem ko kopija sledi kazalcu, začne znova. Ko ste nekaj vtipkali v ukazni vrstici ali ukaz zahteva besedilo, te tipke kopirajo, režejo in lepijo to besedilo. Glejte [Kopiranje, lepljenje in podvajanje](topic:copy-paste).

## Preklopi

| Tipka | Preklop | Gumb v vrstici stanja |
|---|---|---|
| {{key:F3}} | Lovljenje objektov vklopljeno ali izklopljeno | {{ui:Lovljenje}} |
| {{key:F7}} | Mreža vklopljena ali izklopljena | {{ui:Mreža}} |
| {{key:F8}} | Orto vklopljen ali izklopljen | {{ui:Orto}} |
| {{key:F10}} | Polarno sledenje vklopljeno ali izklopljeno | {{ui:Polarno}} |
| {{key:F11}} | Sledenje lovljenju objektov vklopljeno ali izklopljeno | {{ui:Sledenje}} |
| {{key:F12}} | Dinamični vnos vklopljen ali izklopljen | {{ui:Dyn}} |

:::mac
Na Macu so F3, F7 in F8 običajno tipke za Mission Control in medijske tipke. Pridržite **fn** z njimi ali vklopite standardne tipke F v Sistemskih nastavitvah, kot je opisano v [Tipke, miške in sledilne ploščice](common:keys). Gumbi v vrstici stanja vedno delujejo.
:::

:::firefox
F7 v Firefoxu lahko tudi vpraša, ali naj vklopi brskanje s kazalcem (caret browsing). Izberite **Ne** in uporabite gumb {{ui:Mreža}}, če vpraša znova.
:::

## Pomoč

| Tipka | Kaj naredi |
|---|---|
| {{key:F1}} | Odpre ali zapre to pomoč ob risbi. Deluje tudi med zagnanim ukazom in nikoli ne doseže ukazne vrstice. |
| {{key:Esc}} | Ko je kazalec v podoknu pomoči: počisti iskanje ali zapre podokno |

Gumb {{ui:Pomoč}} v vrstici na vrhu naredi isto kot {{key:F1}}. Medtem ko tipkate v iskalno polje pomoči, nič ne doseže ukazne vrstice. Kliknite na risbo, da tipke vrnete CadCraftu; podokno ostane odprto ob njej.

:::mac
Na tipkovnici Mac pridržite **fn** in pritisnite F1 ali kliknite {{ui:Pomoč}}.
:::

## Zaslon

| Tipka | Kaj naredi |
|---|---|
| {{key:Ctrl+Shift+F}} | Kroži med običajnim, celozaslonskim načinom in celozaslonskim načinom s skritimi vrsticami. Uporablja tipko Control na vsakem računalniku, tudi na Macu. |
| {{key:Left}} {{key:Right}} | Ko je zavihek pod risbo v fokusu: prejšnji ali naslednji zavihek |

V celozaslonskem načinu lahko brskalnik prvi {{key:Esc}} uporabi, da zapusti celozaslonski način. Ponovno pritisnite {{key:Esc}}, da prekličete ukaz.

## Pogovorna okna

| Tipka | Kaj naredi |
|---|---|
| {{key:Esc}} | Zapre pogovorno okno ({{ui:Izris v PDF}}) ali vprašanje, kot je „Neshranjene spremembe“, kjer pomeni {{ui:Prekliči}} |
| {{key:Tab}} | Premakne med nastavitvami in gumbi pogovornega okna |

Medtem ko je pogovorno okno odprto, tipke risbe niso aktivne.

## Polja v podoknu

V polju v desnem ali levem podoknu:

| Tipka | Kaj naredi |
|---|---|
| {{key:Enter}} | Uveljavi vrednost in zapusti polje |
| {{key:Esc}} | Vrne staro vrednost in zapusti polje |
| {{key:Tab}} | Uveljavi in se premakne na naslednje polje |

Medtem ko ima polje kazalec, črke pišejo vanj, ne v ukazno vrstico.

## Miška

| Dejanje | Kaj naredi |
|---|---|
| Klik | Izbere točko, kadar ukaz zahteva točko; izbere objekt, kadar zahteva objekte; sicer izbere objekt ali ročico |
| Shift+klik | Odstrani izbran objekt iz izbora (če je {{ui:Klikanje objektov}} nastavljeno na {{ui:Zamenja izbor}} v [Nastavitvah](topic:settings): ga doda). Med izbiranjem točke: za ta klik prezre lovljenje objektov |
| Klik na prazen prostor, nato ponovni klik | Okno izbora: od leve proti desni je okno, od desne proti levi sekanje |
| Povlek po praznem prostoru | Lasso: če se najprej premaknete desno, je okno, če najprej levo, sekanje; {{key:Space}} med vlečenjem kroži med oknom, sekanjem in ograjo; {{key:Esc}} ga spusti (LASSOMODE 0 ali Nastavitve ga ponovno naredijo za pravokotnik) |
| Povlek skozi dele pri TRIM ali EXTEND | Prireže (ali podaljša) vsak del, ki ga pot prečka; pridržite {{key:Shift}} za drugo |
| Povlek ročice | Premakne ročico (ali kliknite ročico, nato kliknite, kam naj gre) |
| Dvojni klik na besedilo | Izbere ga in postavi kazalec v njegovo polje {{ui:Besedilo}} v desnem podoknu |
| Desni klik | Enter. Med premikom ročice ali oknom izbora: prekliče ga |
| Povlek z desnim gumbom | Pomika |
| Kolesce | Povečuje in pomanjšuje okoli križca |
| Povlek s kolescem (srednji gumb) | Pomika |
| Dvojni klik na kolesce | Povečava na celotno risbo (obseg) |
| Spustite DWG ali DXF na risbo | Odpre ju |

Na sledilni ploščici ali zaslonu na dotik glejte [Miška, sledilna ploščica in dotik](topic:mouse-trackpad-touch).

## Tipke, ki jih ohrani brskalnik

{{key:Mod+N}}, {{key:Mod+W}} in {{key:Mod+T}} vedno pripadajo brskalniku. CadCraft jih ne uporablja: za novo risbo uporabite {{ui:Nova}} ali vtipkajte `NEW`. Odložišče CadCraft je njegovo lastno: {{key:Mod+C}} in {{key:Mod+V}} kopirata objekte med risbami in zavihki CadCraft, ne pa iz ali v druge programe.

:::mac
Če {{key:Mod+Y}} odpre zgodovino brskalnika namesto uveljavitve, uporabite {{key:Mod+Shift+Z}} ali gumb {{ui:Uveljavi}}.
:::

## Kje je Premakni

Premakni je ukaz `MOVE` (tipka {{key:M}}): izberite objekte, nato izhodiščno točko in drugo točko ali vtipkano razdaljo. `ALIGN` in `DISTRIBUTE` sta tudi tu. BimCraft uporablja ista imena za enaka opravila na elementih stavbe, vendar je njegov {{key:M}} Meri: njegov Premakni je {{key:Shift+M}}.
