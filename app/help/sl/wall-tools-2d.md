---
title: Oblike sten, rezi, odmiki in zaklepi za 2D stene
summary: Rišite stene kot pravokotnike, mnogokotnike in loke, jih razdelite in spojite, jih premaknite po meri ter zaklenite eno steno na drugo ali na mrežno črto. Enaka orodja kot pri stenah v BimCraft.
keywords: stena, stene, orodna vrstica sten, gumbi sten, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, slog združitve, zarezno, ravno, pravokotno, lokot, ročica, povleci konec, rotate, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, združi, prepovej združitev, zaklep, mrežna črta, razdeli, reža, odmik, črta lokacije
from: 49044181
---

Ta orodja delujejo na 2D stenah iz `WALL` (glejte „Risanje pametnih sten, vrat in oken v 2D“). Uporabljajo ista pravila kot orodja za stene v BimCraft, zato se stena obnaša enako v obeh.

## Kje so orodja

- Na orodni vrstici ima skupina {{ui:Zidovi}} {{ui:Zid}}, {{ui:Pravokotnik}}, {{ui:Razdeli}} in {{ui:Odmik}}. Njen meni {{ui:Več}} ima vsa druga orodja za stene, vsako z ikono.
- V slogih menijev s trakom ima zavihek {{ui:Zidovi}} podokna {{ui:Riši zidove}}, {{ui:Izreži}}, {{ui:Nastavi in spremeni}}, {{ui:Zadrži}} in {{ui:Združi}}.
- V postavitvi kažeta vrstice orodij in orodna škatla isto skupino {{ui:Zidovi}}.
- Lahko vnesete katerikoli ukaz, naveden spodaj.

## Stiki so shranjeni

Ko se konec stene dotakne druge stene, CadCraft ta stik shrani pri obeh stenah. Stikov ne izračunava več iz tega, kje se konci slučajno nahajajo. Torej:

- Stene, stakne z ene premaknjene stene, sledijo njej in ostanejo stakne. Njihovi konci drsijo vzdolž svojih črt, zato se nič ne zasuče.
- Povlecite en konec stene za njeno ročico, pa stena, stakne na tem mestu, ohrani svojo smer. Njen konec drsi vzdolž svoje črte, da se sreča z povlečeno steno, zato povlečeni konec pristane na tej črti, ne vedno pod kazalcem. Predogled pokaže, kje. Stena, ki se zabija v povlečeno steno, sledi vzdolž svoje črte. Povlečenje konca naravnost vzdolž stene spremeni njeno dolžino, stena, stakna na tem mestu, pa se premakne z njim.
- `ROTATE` na stakni steni deluje enako: konci njenih sosedov drsijo vzdolž svojih črt do zasukane stene.
- Za premik vogala izberite obe steni, ki se tam stikata, in povlecite ročico na vogalu. Obe steni ostaneta na vogalu in se obe zasučeta. Stene dlje naprej ostanejo, kot so bile.
- Držite {{key:Alt}}, ko kliknete novo mesto ročice, da namerno prekinete stike: stena gre tja, kamor jo postavite, in nič ji ne sledi.
- Če bi vlečenje zasukalo stakno steno nazaj skozi njen lasten daljni konec, je zavrnjeno in nič se ne spremeni.
- Steno, ki jo narišete z {{ui:Ne dovoli stikov}} (`D` v `WALL`), ali jo izklopite v {{ui:Lastnosti}} ({{ui:Ne dovoli stika na začetku}}, {{ui:Ne dovoli stika na koncu}}), ostane prosta na tem koncu, tudi če se dotika druge stene, dokler je znova ne dovolite.
- `WALLDISJOIN` ({{ui:Prepovej združitev}} v skupini {{ui:Zidovi}}) naredi isto s klikom: kliknite steno blizu enega konca, da prepovete stike na tem koncu, in ponovno kliknite, da jih dovolite.
- Starejša risba še nima shranjenih stikov. Prva sprememba, ki jo naredite, jih enkrat najde iz tega, kako so stene stale pred spremembo, in jih shrani. `WALLJOINS` to naredi takoj.
- Datoteki DWG in DXF nosita stike znotraj vsake stene. CadCraft jih prebere tako, kot so shranjeni. Program, ki ne hrani razširjenih podatkov, prikaže stene kot navadne bloke in izgubi stike; stik, katerega stene so bile premaknjene v drugem programu, se izgubi pri naslednji spremembi katere od sten.

## Slog združitve vogala

Vogal, kjer se dve steni stikata od konca do konca, je narisan zarezno, razen če izberete drug slog.

- `WALLJOINSTYLE` ({{ui:Slog združitve}} v skupini {{ui:Zidovi}}): kliknite vogal. Vsak klik preide na naslednji slog: {{ui:Zarezno}}, {{ui:Ravno}}, {{ui:Pravokotno}}, nato spet {{ui:Zarezno}}. Vnesite `T`, da zamenjate, katera od obeh sten teče skozi vogal, ki ste ga nazadnje kliknili. Pritisnite {{key:Enter}}, da končate. En zagon ukaza je en korak razveljavitve.
- {{ui:Ravno}}: ena stena teče do daljne ploskve druge, druga se ustavi ob njeni strani. {{ui:Pravokotno}}: enako, le da stena, ki teče skozi, konča pravokotno na samo sebe. Pod pravim kotom sta videti enako.
- V {{ui:Lastnosti}} stene: {{ui:Slog združitve na začetku}}, {{ui:Slog združitve na koncu}} ter {{ui:Teče skozi na začetku}}, {{ui:Teče skozi na koncu}}.
- Slog je shranjen pri obeh stenah in potuje v datotekah DWG in DXF. Kopija stene se začne brez njega.
- Stik T nima sloga za izbrati: stena, katere stran je dosežena, teče skozi. Vogal, kjer se stikajo tri ali več sten, ostane zarezen. Tako je tudi zelo oster vogal (pod približno 30 stopinj) in dve steni v eni črti.

## Narišite oblike sten

Vsaka naredi stene v enem koraku razveljavitve, z vogali spojenimi. V `WALL` `O` nastavi odmik postavitve (kako daleč levo od vaših klikov gre stena), `D` pa izklopi združevanje za stene, ki jih rišete naslednje.

- `WALLRECT` (`WR`): dve nasprotni oglišči, kot `RECTANG`.
- `WALLROT`: prva stranica, nato kako daleč gre druga stran ven, za pravokotnik pod poljubnim kotom.
- `WALLPOLY` (`WP`): število stranic (3 do 64), središče, `I` za včrtan ali `C` za očrtan, nato polmer, kot `POLYGON`: kliknite ga ali ga vnesite (vneseni polmer teče proti kazalcu ali vzdolž X, kadar je kazalec še na središču).
- `WALLARC` (`WARC`): središče, začetek, konec. `D` obrne lok na drugo stran.
- `WALLTAN`: kliknite blizu konca stene, nato konec loka, ki odide vzdolž te stene.
- `WALLPICK`: kliknite črto ali polilinijo in povejte, ali naj se vzamejo tudi črte, pritrjene nanjo.
- `WALLTRACE`: kliknite znotraj zaprtega območja črt in sten, da postavite stene okoli najmanjšega.

Tlorisne stene so ravne, zato je lok narisan kot kratke ravne stene po 15 stopinj vsaka. Stikajo se kot kateri koli vogal.

## Režite stene

- `WALLSPLIT` (`WS`): kliknite steno, nato točko. `C` prereže tam, kjer jo seka druga stena, `G` pusti režo med deli, `F` naredi rezana konca proste namesto spojena. Prvi del ohrani mesto stene v risbi, vrata in okna pa gredo s svojim delom. Rez skozi vrata ali okno je zavrnjen.
- `WALLSPLITGAP` ({{ui:Razdeli z režo}}): enak razdelek, le da najprej vpraša za režo.
- `WALLDELSEG`: kliknite steno, nato oba konca kosa, ki ga želite izbrisati.
- `WALLREJOIN`: kliknite dva dela ene stene, da ju spet naredite za eno.

## Premaknite stene za razdaljo

- `WALLDIM` ({{ui:Uredi po meri}}): kliknite linearno ali poravnano koto, ki poteka od ene stene do druge, nato vnesite novo vrednost. Stena na daljnem koncu se premakne pravokotno na samo sebe, stena na prvem koncu ostane, stene, stakne nanjo, pa sledijo. Daljna točka kote se premakne s svojo steno, zato kota prikaže vrednost, ki ste jo vnesli.
- `WALLOFFSET` (`WO`): kliknite steno, nato stran, na katero jo premaknete (`D` vnese razdaljo, `C` pa naredi kopijo).
- `WALLSTRETCH`: okno okoli koncev sten, nato osnovna točka in druga točka.
- V {{ui:Lastnosti}} vnesena {{ui:Dolžina}} ohrani začetek in s seboj vzame steno, stakno na daljnem koncu, nova {{ui:Debelina}} pa raste stran od {{ui:Črta lokacije}}, ki ste jo izbrali (levo lice, desno lice ali središče).

## Kota med središčnicami sten

Središčnica stene ni narisana, vendar jo lovljenje predmetov najde. Z vklopljenim lovljenjem predmetov ({{key:F3}}) premaknite kazalec nad sredino debeline stene: oznaka pove `Wall center: endpoint` ali `Wall center: midpoint`, središčnica pa se pokaže kot črtkana črta, dokler je oznaka nanjo. Z vklopljenima {{ui:Pravokotno}} ali {{ui:Najbližje}} v seznamu lovljenja predmetov delujeta tudi na središčnici.

1. Zaženite `DIMLINEAR` (ali `DIMALIGNED`).
2. Kliknite prvo steno, kjer oznaka pravi `Wall center: midpoint` ali `Wall center: endpoint`.
3. Kliknite drugo steno enako, nato kliknite, kamor gre kotna črta.
4. Za spremembo razdalje zaženite `WALLDIM`, kliknite koto in vnesite novo vrednost. Druga stena se premakne.

Lovljenje na središčnico deluje v vsakem ukazu, ki zahteva točko.

## Zaklenite stene

Zaklep ostane pri steni v datoteki. Če premaknete eno zaklenjeno steno, druga sledi. Če ena sprememba premakne obe steni različno, je zavrnjena in nič se ne spremeni.

- `WALLHOLD`: zaklene steno na drugo steno. `A` jo najprej premakne na črto druge stene, `K` ohrani razdaljo, ki jo ima.
- `WALLHOLDDIM`: zaklene razdaljo med dvema vzporednima stenama.
- `WALLGRID`: zaklene steno na mrežno črto (črta na mrežnem sloju z oznako v besedilu na enem koncu), bodisi vzdolž nje ali z enim koncem nanjo. Stena, zaklenjena vzdolž črte, ohrani razdaljo, ki jo ima od nje. Premaknite mrežno črto z `GRIDMOVE` in stena sledi v celoti, s svojimi stakno steno. Stena, ki leži vzdolž mrežne črte, se premakne v celoti z njo tudi brez zaklepa, stena, ki se na črti samo konča, pa se raztegne s tem koncem.
- `WALLHOLDS` izpiše zaklepe. `WALLUNHOLD` odstrani zaklepe s stene.
- Vsak zaklep kaže majhen lokot na tlorisu: ob sredini zaklenjene stene ali ob koncu, zaklenjenem na mrežno črto. Kliknite lokot, da odstranite ta zaklep.

## Kaj še ni tukaj

Zaklepi uporabljajo središčnice sten. Stene tukaj nimajo slojev, zato na stiku ni prednosti sloja, stene pa se ne ukrivijo (glejte zgoraj loke). Nihče še ni preizkusil teh orodij na veliki risbi in niso bila preverjena v drugem CAD programu.
