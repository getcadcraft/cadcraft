---
title: Meniji, tipke in miška
summary: Izberite slog menija, ki ustreza vašemu načinu dela, dodelite poljubnemu ukazu svojo tipko ali tipko, ki vtipka ukaz, premaknite ukaze med zavihki traku ter nastavite, kaj počnejo kolesce in gumbi miške.
keywords: slog menija, meniji, trak, orodna vrstica, ukazna vrstica, bližnjične tipke, tipke, bližnjice, prilagodi, ponovno dodeli, tipke z besedilom, miška, kolesce, obrni, smer povečave, srednji gumb, desni gumb, pomik, izvoz, uvoz, preklapljanje, znano, klasični risarski slog
from: 8bbf4f88
---

Ukazi CadCraft so enaki, ne glede na to, kako do njih pridete, ukazna vrstica pa je vedno tu z vzdevki (`L`, `C`, `TR` …). **Slog menija** samo odloča, kje na zaslonu so gumbi, kako se imenujejo tam in s katerimi tipkami se zaženejo. Izberite ga v {{ui:Nastavitve}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Meniji, tipke in miška}}; sprememba velja takoj, ta brskalnik pa si jo zapomni.

## Trije slogi

| Slog | Kaj dobite |
|---|---|
| {{ui:CadCraft}} | Lastna orodna vrstica CadCraft: Datoteka, Risanje, Spreminjanje, Opombe, Parametrično, Bloki, Listi, Uredi in Pogled, vsaka z menijem {{ui:Več}}. Izhodišče. |
| {{ui:Klasični risarski slog}} | Trak, razporejen tako, kot so razporejeni klasični 2D risalni programi: meni {{ui:Datoteka}} in hitri gumbi, nato zavihki {{ui:Domov}} (Risanje, Spreminjanje, Opombe, {{ui:Sloji}}, Blok, {{ui:Lastnosti}}, Pripomočki, Odložišče), {{ui:Vstavi}}, {{ui:Opombe}}, {{ui:Parametrično}}, {{ui:Pogled}}, {{ui:Upravljanje}}, {{ui:Izhod}} in {{ui:3D}}. Ukaze vtipkajte kot ponavadi. Srednji gumb pomika; klik z desnim gumbom je {{key:Enter}}, vlečenje z desnim gumbom ne naredi ničesar. |
| {{ui:Trak}} | Trak preprostih opravilnih zavihkov: {{ui:Risanje}}, {{ui:Spreminjanje}}, {{ui:Opombe}}, {{ui:Parametrično}}, {{ui:Bloki}}, {{ui:Listi}}, {{ui:Pogled}}, {{ui:3D}} in {{ui:Orodja}}, z menijem {{ui:Datoteka}} in hitrimi gumbi na desni. Srednji in desni gumb pomikata, kot v lastnem slogu CadCraft. |

Vsi slogi ohranijo tipke CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}} ter {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} za risalne pripomočke. Črke niso nikoli tipke: CadCraft jih vpiše v ukazno vrstico.

Trakovi vsebujejo tudi orodja podokna Sloji in risalne pripomočke vrstice stanja. Zavihek {{ui:3D}} se napolni, ko odprete 3D zavihek pod risbo; 3D orodje, izbrano na zavihku Model, najprej odpre zavihek 3D, 2D orodje, izbrano na zavihku 3D, pa najprej vrne na zavihek Model.

:::tip
Tipka, ki pripada rasporedu CadCraft, a jo je vaš slog dodelil drugemu ukazu, ne naredi ničesar, vrstica stanja pa pove, kam je šel njen ukaz („V Moje tipke je ortogonalno na Ctrl+Alt+O“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} in puščice ohranijo svoj pomen vedno. Medtem ko ukaz teče ali ko črke vtipkate v ukazno vrstico, tipke pripadajo ukazni vrstici.
:::

## Naredite po svoje

1. Izberite slog, ki je najbližje želenemu, nato kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke in meniji}} poiščite ukaz (pomaga iskalno polje). Kliknite {{ui:Dodaj tipko}} in pritisnite tipko. Kliknite tipko, da jo odstranite.
3. Pri traku {{ui:Kje je}} premakne ukaz na drug zavihek in podokno, v meni {{ui:Datoteka}} ali na {{ui:Samo tipke}}.
4. Na {{ui:Miška}} nastavite kolesce in gumbe, ki pomikajo risbo.
5. Dajte mu ime in kliknite {{ui:Shrani}}.

Shranitev vgrajenega sloga ustvari vašo lastno kopijo („Moj klasični risarski slog“); vgrajeni slog se nikoli ne spremeni. Tipka, dodeljena dvema ukazoma, je prikazana rdeče in jo morate popraviti, preden lahko shranite.

## Tipke, ki vtipkajo ukaz

{{cmd:SHORTCUTS}} ({{ui:Pogled}} › {{ui:Več}} › {{ui:Bližnjične tipke …}}) daje tipki celo vrstico ukaza, na primer {{key:Ctrl+Alt+L}} za `LINE` ali {{key:F9}} za `ZOOM E`. Te tipke pripadajo slogu v uporabi: prvič, ko se ta različica odpre, se tipke, ki ste jih naredili v starejši različici, prenesejo v vaš slog „Moje tipke CadCraft“, enkrat, in delujejo kot prej. Izvoz sloga jih vzame s seboj.

## Miška

- **Kolesce miške**: {{ui:Drsenje navzgor poveča}} (izhodišče) ali {{ui:Drsenje navzgor pomanjša}}, in kako hitro. Ščip na sledilni ploščici vedno povečuje tako, kot se premikajo vaši prsti.
- **Pomik risbe z**: srednjim gumbom, desnim gumbom ali obema. Klik z desnim gumbom brez vlečenja je vedno {{key:Enter}}. Levi gumb vedno izbira in riše v CadCraft, zato njegovo označitev tukaj ničesar ne spremeni.
- **Vlečenje v 3D pogledih**: zavihek 3D ima v vsakem slogu svoje gumbe (levi vrti, srednji in desni pomikata).

## Vzemite s seboj

{{ui:Izvozi}} shrani slog v uporabi kot majhno datoteko `.ccinput.json`; {{ui:Uvozi…}} doda enega, z drugega računalnika ali od sodelavca. Uvožena datoteka lahko kaže samo na ukaze CadCraft: vse drugo se izpusti in prešteje v vrstici stanja. {{ui:Izbriši ta slog}} odstrani enega od vaših.

:::note
Te nastavitve ostanejo v tem brskalniku. {{ui:Uporabi ta slog v vseh programih}} pod karticami slogov naredi, da se vsak program odpre v ustreznem slogu (lastna orodna vrstica, trak ali Klasični risarski slog), s spremembami, ki ste jih naredili v vsakem programu. CadCraft nima slogov z menijsko vrstico: ko je za vse programe izbrana menijska vrstica drugega programa, CadCraft obdrži svojo orodno vrstico.
:::

Sorodno: [Tipkovnica in miška](topic:keyboard) · [Nastavitve CadCraft](topic:settings) · [Prihod iz drugih risalnih programov](topic:coming-from) · [Vzdevki ukazov](topic:command-aliases)
