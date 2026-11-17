---
title: Badhanno aad leedahay (Qalabkayga)
summary: Ku dar badhamada toolbar-ka oo socda macros-kaaga, siiso furayaasha gaagaaban, la wadaag fayl ahaan, oo ka soo qaad badhamada faylka habaynta CUIx.
keywords: qalabkayga, badhamo gaar ah, toolbar, macro, macros, cui, cuix, habee, habayn, menu, furayaasha gaagaaban, furayaasha kiiboodhka, diesel, ^c^c, soo geli badhamada, dhoofi badhamada
from: 36618802
---

## Waxa aad baran doontid

Sida loo dhigo badhamo aad leedahay toolbar-ka, mid kasta oo socda macro loo qoray sida AutoCAD u qoro, sida loo siiyo badhanka furaha, iyo sida loo soo qaado badhamada faylka habaynta CUIx.

## Ku dar badhan

1. Fur {{ui:Settings}} ({{key:Mod+,}}) oo ku sii jir tab-ka {{ui:CadCraft}}. Hoos u dhaadh ilaa {{ui:My tools}}.
2. Guji {{ui:Add a button…}}.
3. Buuxi sanduuqa:
   - {{ui:Group}}: kooxda toolbar-ka oo ay gasho, tusaale ahaan `My tools`. Magac cusub wuxuu sameeyaa koox cusub.
   - {{ui:Label}}: erayada ku qoran badhanka.
   - {{ui:Macro}}: waxa uu qori doono, tusaale ahaan `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Shortcut key}}: guji sanduuqa oo riix furayaasha, tusaale ahaan {{key:Ctrl+Alt+B}}.
   - {{ui:Icon}}: sawir PNG ama SVG ah oo ugu badnaan 64 KB, ama midna (xiddig ayaa muuqda).
4. Guji {{ui:Save}}.

Badhanku wuxuu ku soo muuqdaa dhamaadka toolbar-ka, kooxdiisa dhexdeeda. Guji, ama riix furihiisa, si uu u shaqeeyo. {{ui:Edit}} iyo {{ui:Delete}} liiska ku jira ayaa beddela ama ka saara.

## Qor macro

Macro waa wixii aad ku qori lahayd command line-ka, oo leh calaamado yar:

| Calaamad | Macnaha |
|---|---|
| `^C` | Joojinta wixii socda (`^C^C` waa bilowga caadiga ah) |
| `;` ama space | {{key:Enter}} |
| `\` | Sug adiga: guji ama jawaab la qoray, kadibna macro-ku wuu sii socdaa |
| `_` ama `.` ka hor amar | La aqbalay oo la iska indhatiray (magacyada caalamiga ah iyo kuwa dhisme) |
| `*` bilowga kaliya | Dib u shaqee mar kasta oo ay dhammaato, ilaa aad riixdo {{key:Esc}} |
| `^O`, `^G` | Shid ama dami Ortho, shabakadda |
| `$M=` | Wixii ka dambeeya waa DIESEL. Kaliya `$(if,…)`, `$(getvar,…)`, `$(=,…)` iyo `$(eq,…)` ayaa la akhrinayaa; badhan isticmaala wax kale wuu sheegaa oo waxba ma sameeyo |

Tusaalooyin:

- `^C^C_line;0,0;@100,0;;` wuxuu sawiraa xarriiq dhererkeedu yahay 100 laga bilaabo asalka.
- `^C^C_circle;\25;` wuxuu kugu weydiinayaa dhexda, kadibna wuxuu sawiraa goobo radius-kiisu yahay 25 halkaas.
- `^C^C_turnright` wuxuu muuqaalka 90° midig u leexiyaa.

## Furayaasha gaagaaban

Furuhu waxay u baahan yihiin {{key:Mod}} (Ctrl, ama Cmd Mac-ka) ama {{key:Alt}} oo leh xaraf ama tiro, ama mid ka mid ah furayaasha function-ka ee bilaashka ah {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Xarfaha keligood waxay u gudbaan command line-ka. Furayaasha CadCraft, app-ka ama browser-ku horay u isticmaalaan (sida {{key:Ctrl+S}} ama {{key:Ctrl+Z}}), iyo furayaasha badhan kale leeyahay waa la diidaa, sanduuqana wuxuu sheegaa sababta.

## La wadaag badhamadaada

- {{ui:Export…}} wuxuu kaydiyaa dhammaan kooxaha iyo badhamada (oo leh sawirada iyo furayaasha) sida `my-tools.json`.
- {{ui:Import…}} wuxuu ku daraa kooxaha faylka noocaas ah kuwaaga ka dambeeya. Magac kooxeed aad horay u isticmaashay wuxuu helaa "(2)"; furaha ku dhacaya waa la reebaa, gudiguna wuu sheegaa.

## Ka soo qaad badhamada faylka CUIx

1. Guji {{ui:Import CUIx…}} oo dooro faylka `.cuix`.

Toolbar-kiisa iyo ribbon panel-kiisa waxay noqdaan kooxo, badhan kasta oo leh macro-kiisa iyo sawirkiisa (PNG, ama BMP oo loo beddelay PNG). Furayaasha gaagaaban waxay ku imanayaan koox u gaar ah, badhan kasta oo leh furihiisa; magacyada amarka ee uu yeelan karo waxay ku imanayaan koox {{ui:Aliases}}. Panelku wuxuu liistaa waxa imaaday.

:::note
Faylka waa la akhrinayaa oo keliya. Amarrada CadCraft aan haysan waxaa lagu liisteeyaa magacyadooda, lama male-ayn: badhamadooda waxay sheegaan markii la gujiyo. DIESEL ka baxsan hawlaha yar ee kor ku xusan, menu-yada, badhamada maawuseed iyo workspace-yada lama akhrin.
:::

## Waxyaabo loo baahan yahay in la ogaado

- Badhamada waxaa lagu kaydiyaa browser-kan (ama app-ka desktop-ka), ma aha naqshadaha.
- Badhanku wuxuu maraa command line-ka, sidaas darteed waxaa laga noqdaa sida wax kasta oo aad qorto: hal {{key:Mod+Z}} amar kasta oo uu socday.
