---
title: Izmantot parametrus un vienādojumus
summary: Nosauciet izmērus, vadiet tos ar izteiksmēm kā platums / 2 un ierakstiet skaitli vadāmam izmēram, lai mainītu to, kas to vada.
keywords: parametri, par, parametru pārvaldnieks, vienādojumi, izteiksmes, mainīgie, divvirzienu, dizaina nolūks, lietotāja parametrs, fx
from: 650b9844
---

## Viena tabula visiem izmēriem

Panelis {{ui:Parametri}} (poga {{ui:Parametri}} grupā {{ui:Parametriskais}} vai ierakstiet {{cmd:PARAMETERS}}) uzskaita katru izmēru ierobežojumu (`d1`, `rad1`, `dia1`, `ang1` vai jūsu dotais nosaukums) un jūsu pašu parametrus kopā. Jebkuru nosaukumu var izmantot jebkurā izteiksmē.

Katrā rindā ir:

- **Nosaukums**: ierakstiet jaunu, lai pārdēvētu; katra izteiksme, kas to izmanto, seko.
- **Izteiksme**: skaitlis (`40`) vai izteiksme (`platums / 2 + sprauga`). Ierakstiet tajā un nospiediet {{key:Enter}}: zīmējums seko.
- **Vērtība**: ko tā aprēķina. Rindā, kuru vada izteiksme, varat ierakstīt arī skaitli šeit: CadCraft aprēķina parametru aiz tā. Ar `d1 = platums / 2` ierakstot `30` d1 vērtībā, `platums` tiek iestatīts uz 60.

Kad divi parametri vada vērtību (`platums / 2 + sprauga`), dialogs jautā, kuru mainīt. Katra izmaiņa ir viens atsaukšanas solis ({{key:Mod+Z}}).

## Pievienojiet savu

1. Atveriet {{ui:Parametri}} paneli.
2. Ierakstiet nosaukumu (`sprauga`) un vērtību (`10`), pēc tam izvēlieties {{ui:Pievienot}}.
3. Izmantojiet to: d1 izteiksmē ierakstiet `platums / 2 + sprauga` un nospiediet {{key:Enter}}.

Nosaukumi sākas ar burtu vai `_` un satur burtus, ciparus un `_`. Funkciju nosaukumi, `pi` un vienību nosaukumi nevar būt nosaukumi.

## Izteiksmes

| Raksta | Nozīmē |
|---|---|
| `+ - * / ^ %` | saskaitīt, atņemt, reizināt, dalīt, pakāpe, atlikums |
| `( )` | grupēšana |
| `sin cos tan asin acos atan atan2` | trigonometrija grādos |
| `sqrt pow exp ln log abs sign` | saknes, pakāpes, logaritmi |
| `ceil floor int round min max` | noapaļošana un robežas |
| `if(a > b, x, y)` | izvēle |
| `pi` | 3.14159… |

Skaitļi var saturēt vienību: `25mm`, `1in`, `2'`, `90deg`. Garumi ar vienību tiek pārvērsti milimetros, tāpēc vienības lietojiet tikai zīmējumos, kas mērīti milimetros; citur ierakstiet vienkāršus skaitļus.

## Komandrindā

`-PARAMETERS` dara to pašu bez paneļa: `N` jauns, `E` rediģēt (arī izmēru ierobežojumu), `R` pārdēvēt, `D` dzēst, `?` uzskaitīt.

## Kas tiek noraidīts

- Izteiksme, kas izmanto pati sevi, tieši vai caur citiem: "platums, d1 atsaucas viens uz otru."
- Vērtība, ko izmērs nevar pieņemt: negatīvs garums, leņķis virs 180°.
- Vērtība, ko zīmējums nevar pieņemt ar citiem ierobežojumiem: nekas nemainās, un ziņojums nosauc ierobežojumus, kas traucē.
- Parametra dzēšana, ko kaut kas izmanto: panelis piedāvā vispirms ierakstīt tā vērtību tajos. Izmēru ierobežojuma nosaukums tiek dzēsts, dzēšot pašu ierobežojumu.
