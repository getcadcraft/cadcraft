---
title: Oblike zidov, rezi, odmiki in zaklepi za 2D zidove
summary: Riši zidove kot pravokotnike, mnogokotnike in loke, jih deli in spet združuj, premikaj za dimenzijo ter zakleni en zid na drugega ali na mrežno črto. Ista orodja kot pri zidovih v BimCraftu.
keywords: zid, zidovi, orodna vrstica zidov, gumbi zidov, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, slog združitve, zarezno, ravno, pravokotno, ključavnica, ročica, vlečni konec, zasukaj, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, združi, prepovej združitev, zaklep, mrežna črta, razdeli, reža, odmik, referenčna črta
from: f41e7433
---

Ta orodja delujejo na 2D zidove iz ukaza `WALL` (glejte „Pametni zidovi, vrata in okna v 2D“). Uporabljajo enaka pravila kot orodja za zidove v BimCraftu, zato se zid v obeh obnaša enako.

## Kje so orodja

- Na orodni vrstici ima skupina {{ui:Zidovi}} {{ui:Zid}}, {{ui:Pravokotnik}}, {{ui:Razdeli}} in {{ui:Odmik}}. Njen meni {{ui:Več}} vsebuje vsa druga orodja za zidove, vsako s svojo ikono.
- V slogih menija s trakom ima zavihek {{ui:Zidovi}} podokna {{ui:Riši zidove}}, {{ui:Izreži}}, {{ui:Nastavi in spremeni}}, {{ui:Zadrži}} in {{ui:Združi}}.
- V postavitvi vrstic orodij in v orodni skrinjici je prikazana ista skupina {{ui:Zidovi}}.
- Katerikoli ukaz, naveden spodaj, lahko vtipkate tudi sami.

## Spoji se shranjujejo

Ko se konec zidu znajde na drugem zidu, CadCraft shrani ta spoj z obema zidovoma. Spojev ne izračunava več iz tega, kje so konci naključno. Zato:

- Zidovi, pripeti na zid, ki ga premaknete, mu sledijo in ostanejo pripeti. Njihovi konci drsijo po svojih črtah, zato se nič ne zasuka.
- Če povlečete en konec zidu za njegovo ročico, zid, pripet tam, ohrani svojo smer. Njegov konec drsi po svoji črti do vlečenega zidu, zato vlečeni konec pristane na tej črti, ne vedno pod kazalcem. Predogled pokaže, kje. Zid, ki se zarine v vlečeni zid, sledi po svoji črti. Vlečenje konca naravnost vzdolž zidu spremeni njegovo dolžino, zid, pripet tam, pa se premakne z njim.
- `ROTATE` na pripetem zidu deluje enako: konci njegovih sosedov drsijo po svojih črtah do zasukanega zidu.
- Za premik vogala izberite oba zida, ki se tam srečata, in povlecite ročico na vogalu. Oba zida ostaneta na vogalu in se oba zasučeta. Zidovi dlje vzdolž ostanejo, kakor so bili.
- Držite {{key:Alt}}, ko kliknete novo mesto ročice, da namenoma prekinete spoje: zid gre tja, kamor ga postavite, in nič mu ne sledi.
- Če bi vlečenje zasukalo pripet zid čez njegov lastni oddaljeni konec, je zavrnjeno in nič se ne spremeni.
- Zid, ki ste ga narisali z {{ui:Prepovej združitev}} (`D` v `WALL`), ali ki ste ga izklopili v Lastnostih ({{ui:Ne dovoli stika na začetku}}, {{ui:Ne dovoli stika na koncu}}), na tistem koncu ostane prost, tudi če se dotika drugega zidu, dokler spet ne dovolite.
- `WALLDISJOIN` ({{ui:Ne dovoli stikov}} v skupini {{ui:Zidovi}}) naredi isto s klikom: kliknite zid blizu enega konca, da prepovete spoje na tem koncu, in ga kliknite znova, da jih dovolite.
- Starejša risba še nima shranjenih spojev. Prva sprememba, ki jo naredite, jih enkrat najde iz tega, kako so zidovi stali pred spremembo, in jih shrani. `WALLJOINS` to naredi takoj.
- Datoteki DWG in DXF nosita spoje znotraj vsakega zidu. CadCraft jih prebere, kakor so shranjeni. Program, ki ne hrani razširjenih podatkov, prikaže zidove kot navadne bloke in spoje izgubi; spoj, katerega zidovi so bili premaknjeni v drugem programu, se ob naslednji spremembi enega od zidov izgubi.

## Slog združitve vogala

Vogal, kjer se dva zidova stakneta s čelom, je narisan kot zarezno, razen če izberete drug slog.

- `WALLJOINSTYLE` ({{ui:Slog združitve}} v skupini {{ui:Zidovi}}): kliknite vogal. Vsak klik preskoči na naslednji slog: {{ui:Zarezno}}, {{ui:Ravno}}, {{ui:Pravokotno}}, nato spet {{ui:Zarezno}}. Vtipkajte `T`, da zamenjate, kateri od obeh zidov teče skozi vogal, ki ste ga nazadnje kliknili. Za konec pritisnite {{key:Enter}}. En zagon ukaza je en korak razveljavitve.
- {{ui:Ravno}}: en zid teče do zunanje ploskve drugega, drugi pa se ustavi ob njegovi stranici. {{ui:Pravokotno}}: enako, vendar zid, ki teče skozi, konča pravokotno na samega sebe. Pri pravem kotu sta videti enako.
- V Lastnostih zidu: {{ui:Slog združitve na začetku}}, {{ui:Slog združitve na koncu}} ter {{ui:Teče skozi na začetku}} in {{ui:Teče skozi na koncu}}.
- Slog se shrani z obema zidovoma in potuje v datotekah DWG in DXF. Kopija zidu se začne brez njega.
- Spoj T nima sloga za izbiro: zid, katerega stran je dosežena, teče skozi. Vogal, kjer se srečajo trije ali več zidov, ostane zarezen. Tako ostane tudi zelo oster vogal (manj kot približno 30 stopinj) in dva zidova v isti črti.

## Riši oblike zidov

Vsaka oblika naredi zidove v enem koraku razveljavitve, z združenimi vogali. V `WALL` `O` nastavi zamik postavitve (kako daleč levo od vaših klikov gre zid), `D` pa izklopi združevanje za zidove, ki jih boste narisali naprej.

- `WALLRECT` (`WR`): dva nasprotna vogala, kakor `RECTANG`.
- `WALLROT`: prva stranica, nato kako daleč gre druga stran, za pravokotnik pod poljubnim kotom.
- `WALLPOLY` (`WP`): število stranic (3 do 64), središče, `I` za včrtan ali `C` za očrtan, nato polmer, kakor `POLYGON`.
- `WALLARC` (`WARC`): središče, začetek, konec. `D` obrne lok na drugo stran.
- `WALLTAN`: kliknite blizu konca zidu, nato konec loka, ki odhaja vzdolž tega zidu.
- `WALLPICK`: kliknite črto ali polilinijo in povejte, ali naj vzame tudi črte, pripete nanjo.
- `WALLTRACE`: kliknite znotraj zaprtega območja črt in zidov, da okoli najmanjšega postavi zidove.

Zidovi v tlorisu so ravni, zato je lok narisan kot kratki ravni zidovi, vsak po 15 stopinj. Spajajo se kakor vsak vogal.

## Režite zidove

- `WALLSPLIT` (`WS`): kliknite zid, nato točko. `C` reže tam, kjer ga prečka drug zid, `G` pusti režo med deloma, `F` pa naredi prosta, ne pripeta, rezana konca. Prvi del ohrani mesto zidu v risbi, vrata in okna pa gredo s svojim delom. Rez skozi vrata ali okno je zavrnjen.
- `WALLSPLITGAP` ({{ui:Razdeli z režo}}): enako deljenje, vendar najprej vpraša za režo.
- `WALLDELSEG`: kliknite zid, nato oba konca kosa, ki ga izbrišete.
- `WALLREJOIN`: kliknite dva dela enega zidu, da ju spet naredite za enega.

## Premikajte zidove za razdaljo

- `WALLDIM`: kliknite linearno ali poravnano koto, ki teče od enega zidu do drugega, nato vtipkajte novo vrednost. Zid na oddaljenem koncu se premakne pravokotno na samega sebe, zid na prvem koncu ostane, zidovi, pripeti nanj, pa sledijo.
- `WALLOFFSET` (`WO`): kliknite zid, nato stran, na katero ga premaknete (`D` vtipka razdaljo, `C` pa naredi kopijo).
- `WALLSTRETCH`: okno okoli koncev zidu, nato osnovna točka in druga točka.
- V Lastnostih vtipkana {{ui:Dolžina}} ohrani začetek in z njim vzame tudi zid, pripet na oddaljeni konec. Nova {{ui:Debelina}} pa raste stran od {{ui:Referenčna črta}}, ki ste jo izbrali (leva ploskev, desna ploskev ali sredina).

## Zaklepajte zidove

Zaklep ostane z zidom v datoteki. Če premaknete zaklenjen zid, drugi sledi. Če ena sprememba premakne oba zidova različno, je zavrnjena in nič se ne spremeni.

- `WALLHOLD`: zaklene zid na drug zid. `A` ga najprej premakne na črto drugega zidu, `K` pa ohrani razdaljo, ki jo ima.
- `WALLHOLDDIM`: zaklene razdaljo med dvema vzporednima zidovoma.
- `WALLGRID`: zaklene zid na mrežno črto (črto na sloju mreže z njeno oznako v besedilu na enem koncu), bodisi vzdolž nje bodisi tako, da je en konec na njej. Zid, zaklenjen vzdolž črte, ohrani razdaljo, ki jo ima od nje. Premaknete li mrežno črto z `GRIDMOVE`, zid sledi v celoti, s svojimi pripetimi zidovi. Zid, ki leži vzdolž mrežne črte, se premakne v celoti z njo tudi brez zaklepa, zid, ki se le konča na črti, pa se raztegne za ta konec.
- `WALLHOLDS` našteje zaklepe. `WALLUNHOLD` odstrani zaklepe z zidu.
- Vsak zaklep je na tlorisu prikazan kot majhna ključavnica: ob sredini zaklenjenega zidu ali ob koncu, ki je zaklenjen na mrežno črto. Kliknite ključavnico, da odstranite ta zaklep.

## Kaj še ni tu

Zaklepi uporabljajo središčne črte zidov. Zidovi tukaj nimajo slojev, zato na stiku ni prednosti sloja, zidovi pa se ne ukrivijo (glejte loke zgoraj). Nihče še ni preizkusil teh orodij na velikem načrtu in niso bila preverjena v drugem CAD programu.
