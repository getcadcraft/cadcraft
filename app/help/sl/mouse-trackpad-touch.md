---
title: Miška, sledilna ploščica in dotik
summary: Kako z miško s kolescem, sledilno ploščico na Macu ali PC-ju ali zaslonom na dotik povečate, pomaknete, kliknete z desno tipko in izberete v CadCraft ter v čem se razlikujejo brskalniki.
keywords: sledilna ploščica, dotikalna ploščica, magic mouse, dotik, tablica, ipad, pomik, povečava, stisk, desni klik, dva prsta, srednja tipka, brskalnik, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft je zasnovan za miško s kolescem. Vse deluje tudi s sledilno ploščico, z nekaj navadami, ki se jih je treba naučiti. Zasloni na dotik delujejo za izbiranje, z omejitvami.

## Miška s kolescem

- **Povečava:** zavrtite kolesce. Risba se poveča okoli navzkrižnega kazalca, zato kažite na to, kar želite videti.
- **Pomik:** držite kolesce pritisnjeno in povlecite ali povlecite z desno tipko.
- **Povečava na vse:** dvakrat kliknite kolesce ali kliknite {{ui:Obseg}}.
- **Nazaj na prejšnji pogled:** kliknite {{ui:Prejšnji (P)}} v skupini Pogled ali vtipkajte `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Zaporedje korakov kolesca šteje kot en pogled, zato en {{ui:Prejšnji (P)}} razveljavi vse. Poglede, na katere se pogosto vračate, shranite z {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** desni klik.

## Sledilna ploščica

:::mac
- **Pomik:** premaknite dva prsta po sledilni ploščici v katero koli smer: risba sledi vašim prstom. Lahko povlečete tudi z dvoprstnim klikom in držanjem (povlek z desno tipko).
- **Povečava:** stisnite z dvema prstoma. Povečava sledi navzkrižnemu kazalcu.
- **Desni klik (Enter):** kliknite z dvema prstoma. Če to nič ne naredi, v **System Settings** vklopite "Secondary click" pod **Trackpad**. Klik s Control lahko v CadCraft šteje kot navaden klik, ne kot desni klik, zato uporabite dvoprstni klik.
- **Povečava na območje:** kliknite {{ui:Okno (W)}} v skupini Pogled in kliknite dva kota.
:::

:::windows linux
- **Pomik:** premaknite dva prsta po sledilni ploščici v katero koli smer: risba sledi prstom. Lahko povlečete tudi z držanjem desne tipke.
- **Povečava:** stisnite z dvema prstoma. Povečava sledi navzkrižnemu kazalcu.
- **Desni klik (Enter):** kliknite z dvema prstoma ali kliknite spodnji desni kot sledilne ploščice, odvisno od nastavitev vaše ploščice.
- **Povečava na območje:** kliknite {{ui:Okno (W)}} v skupini Pogled in kliknite dva kota.
:::

Če držite {{key:Space}} in povlečete, se v CadCraft **ne** pomika: {{key:Space}} je Enter.

Kolesce miške še vedno povečuje, po en korak naenkrat. Sledilna ploščica, ki pošilja pomikanje v celih korakih, kot kolesce, povečuje z dvoprstnim drsenjem namesto pomika: pomanjšajte, kažite na območje, ki ga želite, in nato spet povečajte. Zavihek 3D ohrani svoje premike sledilne ploščice (glejte [Model v 3D](topic:3d-solids#look-around)).

## Zasloni na dotik in tablice

CadCraft prst bere kot klik miške:

- Tap izbere točko ali predmet ali samo izbere.
- Povlek prsta po prazni površini nariše lasso (če najprej v desno, okno; če najprej v levo, sekanje; glejte [Lasso izbor](topic:lasso-selection)).
- V {{cmd:TRIM}} in {{cmd:EXTEND}} povlek prsta čez kose jih vse prireže ali podaljša.
- Povlek ročice izbranega predmeta premakne ročico (ročice in izbirni okvirček so za prst večji).
- **Stisk** z dvema prstoma za povečavo okoli točke med njima; premik dveh prstov skupaj za **pomik**. Drugi prst prekliče, kar je začel prvi, zato stisk nikoli ne pusti sledi.
- **Dolg pritisk** (držite pri miru približno pol sekunde) je desni klik: {{key:Enter}}. Konča ukaz, konča izbor ali ponovi zadnji ukaz.

Pod ukazno vrstico se pojavi **vrstica tipk**: {{ui:Esc}}, {{ui:Razveljavi}}, {{ui:Uveljavi}}, znaki, ki jih tablična tipkovnica skriva (`@` `,` `<` `'` `"` `-`), {{ui:Lovljenje}}, {{ui:Orto}}, gumb tipkovnice in velik {{ui:Enter}}. Tapnite gumb tipkovnice (ali ukazno vrstico), da vtipkate ukaz ali število.

Ni lebdenja, zato se oznake lovljenja pokažejo le tam, kjer je vaš prst.

:::touch
Uporabljate zaslon na dotik. Za več kot hiter pregled sta priključena tipkovnica ter miška ali sledilna ploščica CadCraft veliko lažja za uporabo.
:::

## Brskalniki

CadCraft deluje enako v Chrome, Edge, Firefox in Safari, na Macu, Windows in Linuxu. Razlike so majhne:

| Tema | Kaj morate vedeti |
|---|---|
| Odpiranje DWG | Velike risbe se v vseh brskalnikih berejo nekaj sekund; vrstica stanja medtem prikaže „Branje …“ |
| Prenosi | Vsak brskalnik odloča, kam gredo prenosi in ali najprej vpraša; glejte [Brskalniki in računalniki](common:browsers) |
| {{ui:Odpri za tiskanje}} | Odpre PDF v novem zavihku. Če brskalnik blokira pojavna okna, CadCraft namesto tega prenese PDF |
| F7 | Firefox lahko ponudi brskanje s kurzorjem; izberite Ne |
| Odhod z neshranjenimi spremembami | Vsak brskalnik prikaže svoje vprašanje „Zapustiti spletno mesto?“, ki ga CadCraft ne more spremeniti |

:::safari
V Safari se PDF, odprt z {{ui:Odpri za tiskanje}}, lahko prikaže v zavihku, ne da bi se natisnil: uporabite **Datoteka**, nato **Natisni**.
:::

:::firefox
Firefox lahko vpraša, kaj storiti z vsakim prenosom. Izberite, da datoteko shranite, ali to enkrat spremenite v nastavitvah Firefoxa pod Prenosi.
:::
