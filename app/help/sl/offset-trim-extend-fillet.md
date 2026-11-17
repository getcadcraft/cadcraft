---
title: Odmik, prirez, podaljšanje, zaobljenje in posnetje zidov
summary: Enojne črte spremenite v dvojne zidove z odmikom, očistite vogale z zaobljenjem ter prirežite in podaljšajte črte s prirezom in podaljšanjem.
keywords: odmik, prirez, podaljšanje, zaobljenje, posnetje, skos, prelom, breakatpoint, daljšanje, zidovi, vogal, rez, podaljšaj, vzporedno, polmer, čiščenje
from: c6c5cbd0
---

## Kaj boste naredili

Majhno sobo z 200 debelimi zidovi: notranja ploskev je narisana, zunanja ploskev je odmaknjena, vogali so očiščeni, skozi eno steno pa je prirezan vhod.

## Narišite notranjo ploskev

1. Vtipkajte `L` in pritisnite {{key:Enter}}.
2. Vtipkajte `0,0` in pritisnite {{key:Enter}}.
3. Vtipkajte `@5000,0` in pritisnite {{key:Enter}}.
4. Vtipkajte `@0,4000` in pritisnite {{key:Enter}}.
5. Vtipkajte `@-5000,0` in pritisnite {{key:Enter}}.
6. Vtipkajte `C` in pritisnite {{key:Enter}}.
7. Kliknite {{ui:Obseg}}.

Imate štiri ločene črte. (Sklenjena polilinija bi se odmaknila naenkrat; ločene črte pokažejo, kako Zaobljenje čisti vogale.)

## Odmaknite zunanjo ploskev

1. Vtipkajte `O` in pritisnite {{key:Enter}}. Poziv bere `Specify offset distance [Through] <Through>:`.
2. Vtipkajte `200` in pritisnite {{key:Enter}}.
3. Pri `Select object to offset` kliknite spodnjo črto.
4. Pri `Specify point on side to offset` kliknite kjerkoli pod njo. Pojavi se vzporedna črta 200 pod njo.
5. Kliknite desno črto, nato kliknite na desno od nje.
6. Kliknite zgornjo črto, nato kliknite nad njo.
7. Kliknite levo črto, nato kliknite na levo od nje.
8. Pritisnite {{key:Enter}}, da zaključite ukaz.

Videti bi morali štiri zunanje črte, vsako enako dolgo kot njena notranja, zato se zunanji vogali ne stikajo.

:::tip
Pri pozivu za razdaljo pritisnite {{key:Enter}}, da znova uporabite zadnjo razdaljo. Vtipkajte `T` za možnost Skozi (T): nato vsaka kopija gre skozi točko, ki jo kliknete, na kakršni koli razdalji že je.
:::

{{cmd:OFFSET}} dela na črtah, lokih, krogih in polilinijah. Odmik sklenjene polilinije odmakne celoten obris, vključno z vogali.

## Očistite zunanje vogale z zaobljenjem

{{cmd:FILLET}} združi dve črti v vogalu: prireže ali podaljša obe, da se stakneta. Pri polmeru 0 je vogal ostr.

1. Vtipkajte `F` in pritisnite {{key:Enter}}. Poziv bere `Select first line [Radius]:`.
2. Če je zadnje zaobljenje uporabljalo polmer, vtipkajte `R`, pritisnite {{key:Enter}}, vtipkajte `0` in pritisnite {{key:Enter}}.
3. Kliknite zunanjo spodnjo črto blizu njenega desnega konca.
4. Pri `Select second line` kliknite zunanjo desno črto blizu njenega spodnjega konca.

Obe črti se zdaj stakneta v ostrem vogalu, ukaz pa se konča.

5. Pritisnite {{key:Enter}}, da ponovite {{cmd:FILLET}}, in naredite naslednji vogal.
6. Ponavljajte, dokler se vsi štirje zunanji vogali ne staknejo.

Kliknite vsako črto na delu, ki ga želite **obdržati**. Pri polmeru nad 0 zaobljenje med črtama doda lok.

:::tip
Pri prvem pozivu vtipkajte `M` (Več), da naredite vseh štiri vogale naenkrat, ali narišite zunanjo ploskev kot eno sklenjeno polilinijo in vtipkajte `P` (Polilinija): vsi vogali se naredijo hkrati. Med klikom na drugo črto držite {{key:Shift}} za ostri vogal brez spreminjanja polmera.
:::

## Posnemi vogal

{{cmd:CHAMFER}} odreže vogal z ravno črto.

1. Vtipkajte `CHA` in pritisnite {{key:Enter}}.
2. Vtipkajte `D` in pritisnite {{key:Enter}}. Vtipkajte `300` in pritisnite {{key:Enter}} za prvo razdaljo, nato pritisnite {{key:Enter}}, da za drugo uporabite prav tako 300.
3. Kliknite notranjo zgornjo črto blizu njenega levega konca, nato notranjo levo črto blizu njenega zgornjega konca.

Vogal se odreže za 300 vzdolž vsake črte, skošena črta pa ju poveže. Vtipkajte `A` namesto `D`, da podate dolžino na prvi črti in kot.

## Prirežite vhod s Prirezom

Najprej narišite dva okvirja vrat čez spodnjo steno, nato prirežite črte stene med njima.

1. Vtipkajte `L` in pritisnite {{key:Enter}}.
2. Vtipkajte `1000,200` in pritisnite {{key:Enter}}.
3. Vtipkajte `@0,-600` in pritisnite {{key:Enter}}, nato še enkrat pritisnite {{key:Enter}}.
4. Pritisnite {{key:Enter}}, da ponovite {{cmd:LINE}}.
5. Vtipkajte `1900,200` in pritisnite {{key:Enter}}.
6. Vtipkajte `@0,-600` in pritisnite {{key:Enter}}, nato še enkrat {{key:Enter}}.

Zdaj imate dve kratki črti, ki sekata spodnjo steno 900 narazen.

7. Vtipkajte `TR` in pritisnite {{key:Enter}}. Zgodovina pove `Current settings: Quick mode, edges: No extend`.
8. Kliknite notranjo spodnjo črto med obema okvirjema. Ta kos izgine. (Najprej počivajte kazalec nanj: kos, ki bo odstranjen, postane siv in črtkan.)
9. Kliknite zunanjo spodnjo črto med obema okvirjema. Tudi ta kos izgine.
10. Kliknite del vsakega okvirja, ki štrli nad steno, in del pod njim.
11. Pritisnite {{key:Enter}}, da zaključite ukaz.

Videti bi morali 900 široko odprtino v spodnji steni, okvirji pa zapirajo konce stene.

V hitrem načinu (privzeto) Prirez ne sprašuje najprej po robovih rezanja: vsak viden predmet je rezalni rob. Izberite kos, ki ga želite odstraniti, ali povlecite pot čez več kosov, da jih prirežete naenkrat. Vtipkajte `U` in pritisnite {{key:Enter}}, da vrnete zadnji izbor ali povlek, ne da zapustite ukaz. Okno, sekanje, izbrani robovi in {{key:Shift}} za podaljšanje so v [Prirezovanje in podaljševanje](topic:trim-and-extend).

## Podaljšajte črto do druge

{{cmd:EXTEND}} podaljša konec črte, loka ali polilinije, dokler ne doseže naslednjega predmeta v tej smeri.

1. Vtipkajte `L` in pritisnite {{key:Enter}}.
2. Vtipkajte `1000,2000` in pritisnite {{key:Enter}}.
3. Vtipkajte `@2000,0` in pritisnite {{key:Enter}}, nato še enkrat {{key:Enter}}. Črta se ustavi 2000 pred desno steno.
4. Vtipkajte `EX` in pritisnite {{key:Enter}}.
5. Kliknite novo črto blizu njenega desnega konca.
6. Pritisnite {{key:Enter}}, da zaključite ukaz.

Črta zdaj teče do notranje ploskve desne stene. Vsak viden predmet je meja; kliknite blizu konca, ki naj raste. V {{cmd:TRIM}} enako naredi {{key:Shift}}+klik.

## Prekinite in podaljšajte

{{cmd:BREAK}} (`BR` ali {{ui:Spreminjanje}} › {{ui:Več}} › {{ui:Prekini}}) prereže vrzel brez roba rezanja: kliknite predmet tam, kjer se vrzel začne (ta klik je prva točka), nato kliknite, kjer se konča. Pri krogu gre del v nasprotni smeri urnega kazalca od prve do druge točke. Pri drugem vprašanju vtipkajte `F`, če želite znova podati prvo točko; {{cmd:BREAKATPOINT}} pa razdeli predmet na dva na eni točki brez vrzeli.

{{cmd:LENGTHEN}} (`LEN`) spremeni dolžino na enem koncu:

1. Vtipkajte `LEN` in pritisnite {{key:Enter}}. Kliknite črto, da vidite njeno trenutno dolžino; poziv vpraša znova.
2. Izberite način: `DE` (Delta: znesek za dodajanje, negativen za odvzem; `A` za kot loka), `P` (Percent: 50 jo prepolovi), `T` (Total: dolžina, ki naj bo) ali `DY` (Dynamic: povlecite konec).
3. Kliknite vsak predmet blizu konca, ki naj se premakne. `U` vzame nazaj zadnjega; {{key:Enter}} konča.

Črte, loki in odprte polilinije (njihov končni odsek) se lahko podaljšajo.

## Pogoste napake

- **Cela črta je izginila.** Nič je ni sekalo, zato jo je hitri način izbrisal. Vtipkajte `U`, da jo vrnete; preverite, ali rezalna črta res seka (povečajte pogled) in ni na izklopljenem sloju.
- **„No boundary in that direction.“** Podaljšanje ni našlo ničesar, na kar bi naletelo. Kliknite bližje koncu, ki naj raste.
- **„Radius is too large.“** Lok bi šel čez konec ene od črt. Uporabite manjši polmer.
- **„Only the first or last segment of an open polyline can be cut back.“** Izberite dva sosednja odseka polilinije ali vtipkajte `P`, da zaokrožite vsak njen vogal.
- **Odmik je šel na napačno stran.** Stran je tam, kamor kliknete po izboru predmeta. Razveljavite z {{key:Mod+Z}} in kliknite na drugo stran.
- **„Cannot offset that far.“** Odmik bi lok, krog ali polilinijo obrnil navznoter. Uporabite manjšo razdaljo.
