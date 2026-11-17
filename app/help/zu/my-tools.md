---
title: Izinkinobho zakho (Amathuluzi ami)
summary: Engeza izinkinobho zethuluzi ezisebenzisa ama-macro akho, unikeze izinkinobho okhiye bezinqamuleli, zabelane nazo njengefayela, uletha izinkinobho kusuka efayelini lokwenza ngokwezifiso le-CUIx.
keywords: amathuluzi ami, izinkinobho zokwenza ngokwezifiso, izinkinobho zethuluzi, macro, ama-macro, cui, cuix, yenza ngokwezifiso, imenyu, okhiye bezinqamuleli, izinqamuleli zekhibhodi, diesel, ^c^c, ngenisa izinkinobho, thumela izinkinobho
from: 36618802
---

## Okuzokufunda

Ukuthi ungafaka kanjani izinkinobho zakho ethuluzeni, ngayinye isebenzisa i-macro ebhalwe ngendlela ebhalwa ngayo i-AutoCAD, ukuthi ungabela kanjani inkinobho ukhiye, nokuthi ungaletha kanjani izinkinobho zefayela le-CUIx.

## Engeza inkinobho

1. Vula {{ui:Settings}} ({{key:Mod+,}}) bese uhlala ethebhini le-{{ui:CadCraft}}. Skrola uye ku-{{ui:My tools}}.
2. Chofoza {{ui:Add a button…}}.
3. Gcwalisa ibhokisi:
   - {{ui:Group}}: iqembu lethuluzi okuyo, isibonelo `My tools`. Igama elisha lenza iqembu elisha.
   - {{ui:Label}}: amagama asenkinobho.
   - {{ui:Macro}}: lokho okuthayiphayo, isibonelo `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Shortcut key}}: chofoza ibhokisi bese ucindezela okhiye, isibonelo {{key:Ctrl+Alt+B}}.
   - {{ui:Icon}}: isithombe se-PNG noma se-SVG esingaphezu kwe-64 KB, noma akukho (kuvela inkanyezi).
4. Chofoza {{ui:Save}}.

Inkinobho ivela ekugcineni kwethuluzi, eqenjini layo. Chofoza, noma cindezela ukhiye wayo, ukuze uyisebenzise. {{ui:Edit}} ne-{{ui:Delete}} ohlwini zishintsha noma zisuse.

## Bhala i-macro

I-macro yilokho ongakuthayipha emugqeni womyalo, ngezimpawu ezimbalwa:

| Impawu | Isho |
|---|---|
| `^C` | Khansela noma yini esebenzayo (`^C^C` ukuqala okujwayelekile) |
| `;` noma isikhala | {{key:Enter}} |
| `\` | Linda wena: ukuchofoza noma impendulo ethayiphiwe, bese i-macro iqhubeka |
| `_` noma `.` ngaphambi komyalo | Yamukelwa futhi iyanganakwa (amagama wamazwe ngamazwe nawangaphakathi) |
| `*` ekuqaleni kakhulu | Iphinda uma iphela ngalinye, kuze kube yilapho ucindezela {{key:Esc}} |
| `^O`, `^G` | Vula noma vala i-Ortho, igridi |
| `$M=` | Okunye konke kuyi-DIESEL. Kufundwa kuphela `$(if,…)`, `$(getvar,…)`, `$(=,…)` kanye `$(eq,…)`; inkinobho esebenzisa okunye iyakutshela futhi ayenzi lutho |

Izibonelo:

- `^C^C_line;0,0;@100,0;;` udweba umugqa ongubude obungu-100 kusuka kumsuka.
- `^C^C_circle;\25;` ikubuza isikhungo, bese idweba isiyingi sendilinga ye-25 khona.
- `^C^C_turnright` ijikeleza ukubuka ngu-90° ngakwesokudla.

## Okhiye bezinqamuleli

Ukhiye udinga {{key:Mod}} (Ctrl, noma Cmd ku-Mac) noma {{key:Alt}} nohlamvu noma inombolo, noma enye yezinkinobho zomsebenzi ezikhululekile {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Amahlamvu awodwa aya emugqeni womyalo. Okhiye abasetshenziswa yi-CadCraft, uhlelo noma ibhrawuza (njenge-{{key:Ctrl+S}} noma {{key:Ctrl+Z}}) kanye nokhiye enye inkinobho esinabo ayenqatshwa, nebhokisi libonise ukuthi kungani.

## Yabelana ngezinkinobho zakho

- {{ui:Export…}} ilondoloza wonke amaqembu nezinkinobho (namathisithonjana nokhiye) njenge-`my-tools.json`.
- {{ui:Import…}} yengeza amaqembu alolo fayela ngemva kwawakho. Igama leqembu osanda kulisebenzisa lithola "(2)"; ukhiye ongaxabana uyashiywa, nephaneli iyakutshela lokho.

## Letha izinkinobho kusuka efayelini le-CUIx

1. Chofoza {{ui:Import CUIx…}} bese ukhetha ifayela `.cuix`.

Amathuluzi nemigqa yomsebenzi yalo ibe amaqembu, ngayinye nomacro wayo nesithombe sayo (i-PNG, noma i-BMP eguqulwe yaba yi-PNG). Okhiye bezinqamuleli bawo bafika eqenjini labo, ngayinye nokhiye wayo; ama-alias omyalo angaba nawo afika eqenjini le-{{ui:Aliases}}. Iphaneli ibala lokho okufikile.

:::note
Ifayela lifundwa kuphela. Imiyalo i-CadCraft ingenayo ibhalwa ngamagama, ayiqagelwa: izinkinobho zayo zitshela lokho uma zichofozwa. I-DIESEL ngaphezu kwemisebenzi embalwa engenhla, imenyu, izinkinobho zembewu nama-workspace ayifundwa.
:::

## Okufanele ukwazi

- Izinkinobho zigcinwa kulesi bhrawuza (noma kuhlelo lwedeskithophu), hhayi emidwebeni.
- Inkinobho isebenza ngomugqa womyalo, ngakho iyahlehliswa njengakho konke okuthayiphayo: i-{{key:Mod+Z}} eyodwa ngomyalo ngamunye owenziwe.
