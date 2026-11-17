---
title: Hnit- og fjarlægðarinnsláttur
summary: Allar leiðir til að slá inn punkt, fjarlægð, horn eða tölu í skipanalínu CadCraft, með dæmum.
keywords: kvik, kvikur innsláttur, f12, tab, hnit, alger, afstæð, skautuð, @, bein fjarlægð, horn, gráður, síðasti punktur, lastpoint, innsláttur punkta, innsláttur, reikningur, útreikningur, reiknivél, cal, plús, brot, segð
from: 7de9252d
---

## Punktar

Þegar skipunin biður um punkt skaltu slá inn einn af þessum og ýta á {{key:Enter}}:

| Þú slærð inn | Merking | Dæmi |
|---|---|---|
| `x,y` | Alger: mælt frá uppruna 0,0 | `2500,1200` |
| `#x,y` | Einnig alger (samþykkt vegna vana) | `#2500,1200` |
| `@dx,dy` | Afstæð: þvert og upp frá síðasta punkti | `@600,0` |
| `@d<a` | Afstæð skautun: fjarlægð og horn frá síðasta punkti | `@1500<45` |
| `d<a` | Alger skautun: fjarlægð og horn frá uppruna | `3000<90` |
| ein tala | Bein fjarlægð: svo langt frá grunnpunkti, í átt að krosshárinu | `1200` |
| `*x,y`, `@*dx,dy` | Heimshnit meðan UCS er stillt | `*0,0` |

Þegar UCS er stillt ({{cmd:UCS}}) er `x,y`, `@dx,dy` og hornið í `d<a` mælt eftir ásum UCS. Sjá [Snúðu sýninni og notaðu eigin hnit](topic:ucs-and-turned-view).

Eða smelltu í teikninguna; hlutasmellun og {{ui:Lóðrétt/lárétt}} gilda um smelli.

Reglur:

- Komma aðskilur X frá Y. Aukastafir eru með punkti: `1250.75,300`.
- Neikvæð gildi fara til vinstri og niður: `@-600,0`.
- Ekki slá inn bil: {{key:Space}} sendir línuna, rétt eins og {{key:Enter}}.
- Tölur mega nota veldisvísa: `1e3` er 1000.
- Engar einingar eru slegnar inn og ekki er notuð ritun í fetum og tommum. Sláðu inn einfaldar tölur í einingum teikningarinnar.

## Síðasti punktur

`@` telur frá **síðasta punkti sem þú gafst upp við hvaða punktaskipun sem er**, í hvaða skipun sem er: smelli, smellun eða innsleginn punkt. Hann er geymdur milli skipana, svo þú getur byrjað nýja línu `@0,500` frá þeim stað þar sem sú síðasta endaði. Áður en þú hefur gefið upp neinn punkt telur `@` frá 0,0.

Nokkur dæmi þar sem þetta skiptir máli:

- Í {{cmd:COPY}} er síðasti punktur, eftir fyrstu afritun, punktur þeirrar afritunar. `@600,0` tvisvar setur afrit í 600 og 1200 frá upprunalega.
- Eftir að þú setur málsetningu er síðasti punktur þar sem þú settir málsetningarlínuna, ekki endi málsetningarinnar.

Ef vafi leikur á, notaðu algeran punkt, smellun eða beina fjarlægð.

## Innsláttur beinnar fjarlægðar

Ber tala er fjarlægð frá **grunnpunkti** skipunarinnar (punktinum sem teygjulínan byrjar í) í átt að krosshárinu:

1. Færðu krosshárið í þá átt sem þú vilt.
2. Sláðu inn fjarlægðina og ýttu á {{key:Enter}}.

Með {{ui:Lóðrétt/lárétt}} á snýr stefnan beint þvert eða beint upp og niður, sem gerir þetta að fljótlegustu leiðinni til að teikna ferkantaða veggi. Ef enginn grunnpunktur er til, eða krosshárið liggur nákvæmlega á honum, er talan hafnað með skilaboðunum „Krefst punkts eða valkosts.“

## Horn

- Í gráðum, sem einföld tala: `30`, `-45`, `112.5`.
- Mælt rangsælis frá jákvæðri X-stefnu (sem vísar til hægri): 0 er hægri, 90 upp, 180 vinstri, 270 eða -90 niður.
- Þar sem horn er beðið um (snúningur, horn texta) geturðu líka smellt: hornið er mælt frá grunnpunkti að smellinum. Áður en grunnpunktur er til setur fyrsti smellurinn hann og skipunin biður um annan punkt.

## Fjarlægðir

Þar sem fjarlægð er beðið um (radíus, fjarlægðarvik, hæð texta, kvarðastuðull):

- sláðu inn jákvæða tölu (í teikningu með fetum og tommum einnig `12'6"` eða `6-1/2`: sjá [Fet og tommur](topic:units-papers-scales#feet-and-inches-and-fractions)), eða
- smelltu á punkt: fjarlægðina frá grunnpunkti skipunarinnar að honum, eða
- smelltu á tvo punkta þegar enginn grunnpunktur er til: skipunin breytist í `Tilgreindu annan punkt`.

„Krefst jákvæðrar tölu eða tveggja punkta.“ merkir að gildið var ekki tala, eða var neikvætt.

## Reikningur í innsleginu gildi

Hvar sem lengd, hnit, horn eða tala er slegin inn (skipanalínan, kvikur innsláttur, eiginleikareitir og gluggar) geturðu slegið inn útreikning með `+`, `-`, `*`, `/` og sviga í stað þess að reikna fyrst út:

| Slærð inn | Gefur |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (í teikningu með fetum og tommum) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, í einingum teikningarinnar (þegar einingar hennar eru stilltar) |
| `@4+7/16,0` | punktur 4.4375 til hægri við þann síðasta |
| `360/7` | horn upp á 51.43 gráður |

- Strik sem er skrifað inn í lengd er enn hluti af henni: `4-7/16` er 4 7/16 og `24'-6"` er 24 fet og 6 tommur. Til að draga frá eftir fetamerki skaltu klára lengdina fyrst, `24'-0"-6"`, eða setja útreikninginn í sviga með bilum umhverfis strikið, `(24' - 6")` (innan sviga er bil bil; annars ýtir það á {{key:Enter}}).
- Einföld tala sem bætt er við lengd er í einingum teikningarinnar; margföldun eða deiling með henni breytir lengdinni í hlutfalli. Tvær lengdir margfaldaðar mynda flatarmál, svo `2'*3'` er hafnað.
- `abs`, `round`, `ceil` og `floor` virka líka: `round(10/3)`.
- Útreikningi sem ekki er hægt að lesa er hafnað með upplýsingum um hvar villan varð, til dæmis „Útreikningurinn endar of snemma (stafur 3): gildi vantar.“ Aldrei er neitt lesið sem 0. {{cmd:CAL}} prentar gildi útreiknings.

## Kvikur innsláttur

{{ui:Kvik}} ({{key:F12}}, í stöðustikunni) setur gildin við hlið krosshársins meðan skipun biður um punkt.

- Þegar enginn grunnpunktur er enn til (fyrsti punktur línu) eru reitirnir tveir **X** og **Y**.
- Eftir það eru þeir **fjarlægð** og **horn** frá síðasta punkti.

Innsláttur fer samt í skipanalínuna; reiturinn við krosshárið sýnir hann og teygjulínan fylgir honum.

1. Sláðu inn gildi: það fer í auðkennda reitinn.
2. Ýttu á {{key:Tab}} (eða á komma eftir X). Gildið er læst (sýnt feitletrað) og næsti reitur er auðkenndur. Læst fjarlægð heldur teygjulínunni jafn langri meðan þú miðar með músinni.
3. Sláðu inn seinna gildið, eða miðaðu einfaldlega, og ýttu á {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} teiknar 50 beint upp frá síðasta punkti.

Ef ýtt er á {{key:Enter}} eftir eitt gildi án {{key:Tab}} virkar það sem innsláttur beinnar fjarlægðar. Fet og tommur virka líka í reitunum (`12'6"`). Fjarlægðar- og hornbeiðnir (radíus hrings, snúningur) sýna gildi sitt líka við krosshárið.

## Valkostir og sjálfgefin gildi

- Valkostir birtast í hornklofum. Sláðu inn hástafina í valkosti (`D` fyrir `[Diameter]`, `CL` fyrir `CLose`) og ýttu á {{key:Enter}}. Lengri upphaf orðsins virka líka (`DIA`).
- Sjálfgefið gildi birtist í oddklofum, til dæmis `<500>`. Ýttu á {{key:Enter}} eða hægrismelltu til að nota það.

## Önnur lyklaborðsskipan og talnaborðið

Skipanaheiti, stuttheiti og valstafir eru latneskir stafir. Þegar gríska, kyrillíska (rússneska, úkraínska, hvítrússneska, serbneska, makedónska, búlgarska), hebreska, arabíska, persneska, taílenska eða kóreska lyklaborðsskipanin er virk þarftu ekki að skipta um skipan: þegar orðið sem þú slóst inn er hvorki skipun, stuttheiti né valkostur eins og það stendur, les CadCraft það eftir þeim tökkum sem þú ýttir á. Takkinn merktur `L` á latnesku lyklaborði ræsir enn `LINE`, og takkinn `C` svarar enn `Close`, hvaða staf sem skipanaskipanin setur á hann. Listinn yfir samsvarandi skipanir fyrir ofan skipanalínuna fylgir sömu reglu. Texti sem þú slærð inn þar sem skipun biður um texta (innihald {{cmd:TEXT}}, nafn) breytist aldrei.

Á skipanum þar sem aukastafstakki talnaborðsins gefur komma slær sá takki inn punkt í skipanalínunni og í talnareitum, svo hægt er að slá inn `12.5` á talnaborðinu. Kommutakkinn á aðalborðinu aðskilur enn `x,y`.

Hægt er að slökkva á hvoru tveggja í {{ui:Settings}}: {{ui:Commands on a non-Latin keyboard layout}} og {{ui:Keypad decimal key}}.

## Hnitasýningin

Stöðustikan sýnir X og Y krosshársins (í UCS þegar hún er stillt), eftir smellun og {{ui:Lóðrétt/lárétt}}. Meðan skipun hefur grunnpunkt bætir hún við `Δ` með fjarlægð og horni frá þeim punkti, til dæmis `Δ 1500 < 30°`: tölurnar sem þú myndir slá inn sem `@1500<30`.

Notaðu {{cmd:ID}} til að prenta hnit punkts og {{cmd:DIST}} til að mæla milli tveggja punkta.
