---
title: Ofset, podrezivanje, produžavanje, zaobljenje i skošenje zidova
summary: Pretvori pojedinačne linije u dvostruke zidove sa Ofsetom, očisti uglove sa Zaobljenjem, i seci ili produžavaj linije sa Podrezivanjem i Produžavanjem.
keywords: ofset, podrezivanje, produžavanje, zaobljenje, skošenje, kosina, breakatpoint, produženje, zidovi, ugao, sečenje, paralelno, poluprečnik, čišćenje
from: c6c5cbd0
---

## Šta ćeš napraviti

Malu sobu sa zidovima debljine 200: unutrašnje lice je nacrtano, spoljašnje je ofsetovano, uglovi su očišćeni, a vrata su isečena kroz jedan zid.

## Nacrtaj unutrašnje lice

1. Ukucaj `L` i pritisni {{key:Enter}}.
2. Ukucaj `0,0` i pritisni {{key:Enter}}.
3. Ukucaj `@5000,0` i pritisni {{key:Enter}}.
4. Ukucaj `@0,4000` i pritisni {{key:Enter}}.
5. Ukucaj `@-5000,0` i pritisni {{key:Enter}}.
6. Ukucaj `C` i pritisni {{key:Enter}}.
7. Klikni {{ui:Granice}}.

Imaš četiri odvojene linije. (Zatvorena polilinija bi se ofsetovala odjednom; odvojene linije pokazuju kako Zaobljenje čisti uglove.)

## Ofsetuj spoljašnje lice

1. Ukucaj `O` i pritisni {{key:Enter}}. Upit glasi `Specify offset distance [Through] <Through>:`.
2. Ukucaj `200` i pritisni {{key:Enter}}.
3. Kod `Select object to offset`, klikni donju liniju.
4. Kod `Specify point on side to offset`, klikni bilo gde ispod nje. Pojavljuje se paralelna linija 200 ispod.
5. Klikni desnu liniju, pa klikni desno od nje.
6. Klikni gornju liniju, pa klikni iznad nje.
7. Klikni levu liniju, pa klikni levo od nje.
8. Pritisni {{key:Enter}} da završiš komandu.

Trebalo bi da vidiš četiri spoljašnje linije, svaka iste dužine kao njena unutrašnja, tako da se spoljašnji uglovi ne spajaju.

:::tip
Pritisni {{key:Enter}} kod upita za rastojanje da ponovo upotrebiš poslednje rastojanje. Ukucaj `T` za Through: tada svaka kopija prolazi kroz tačku koju klikneš, na kom god rastojanju to bilo.
:::

{{cmd:OFFSET}} radi na linijama, lukovima, krugovima i polilinijama. Ofset zatvorene polilinije pomera celu konturu, uključujući uglove.

## Očisti spoljašnje uglove sa Zaobljenjem

{{cmd:FILLET}} spaja dve linije u uglu: podrezuje ili produžava obe da se sretnu. Sa poluprečnikom 0 ugao je oštar.

1. Ukucaj `F` i pritisni {{key:Enter}}. Upit glasi `Select first line [Radius]:`.
2. Ako je poslednje zaobljenje koje si uradio koristilo poluprečnik, ukucaj `R`, pritisni {{key:Enter}}, ukucaj `0` i pritisni {{key:Enter}}.
3. Klikni donju spoljašnju liniju blizu njenog desnog kraja.
4. Kod `Select second line`, klikni desnu spoljašnju liniju blizu njenog donjeg kraja.

Dve linije se sada spajaju u oštar ugao, i komanda se završava.

5. Pritisni {{key:Enter}} da ponoviš {{cmd:FILLET}}, i uradi sledeći ugao.
6. Ponavljaj dok se sva četiri spoljašnja ugla ne spoje.

Klikni svaku liniju na delu koji želiš da **zadržiš**. Sa poluprečnikom većim od 0, Zaobljenje dodaje luk između linija.

:::tip
Ukucaj `M` na prvom upitu da uradiš sva četiri ugla odjednom, ili nacrtaj spoljašnje lice kao jednu zatvorenu polilinju i ukucaj `P`: svaki ugao se radi istovremeno. Drži {{key:Shift}} dok klikneš drugu liniju za oštar ugao bez menjanja poluprečnika.
:::

## Skosi ugao sa Skošenjem

{{cmd:CHAMFER}} odseca ugao pravom linijom.

1. Ukucaj `CHA` i pritisni {{key:Enter}}.
2. Ukucaj `D` i pritisni {{key:Enter}}. Ukucaj `300` i pritisni {{key:Enter}} za prvo rastojanje, zatim pritisni {{key:Enter}} da i za drugo uzmeš 300.
3. Klikni unutrašnju gornju liniju blizu njenog levog kraja, pa unutrašnju levu liniju blizu njenog gornjeg kraja.

Ugao je odsečen 300 duž svake linije, a kosa linija ih spaja. Ukucaj `A` umesto `D` da daš dužinu na prvoj liniji i ugao.

## Isecite vrata sa Podrezivanjem

Prvo nacrtaj dva dovratnika preko donjeg zida, pa podreži linije zida između njih.

1. Ukucaj `L` i pritisni {{key:Enter}}.
2. Ukucaj `1000,200` i pritisni {{key:Enter}}.
3. Ukucaj `@0,-600` i pritisni {{key:Enter}}, zatim pritisni {{key:Enter}} opet.
4. Pritisni {{key:Enter}} da ponoviš {{cmd:LINE}}.
5. Ukucaj `1900,200` i pritisni {{key:Enter}}.
6. Ukucaj `@0,-600` i pritisni {{key:Enter}}, zatim pritisni {{key:Enter}} opet.

Sada imaš dve kratke linije koje seku donji zid na razmaku od 900.

7. Ukucaj `TR` i pritisni {{key:Enter}}. Istorija kaže `Current settings: Quick mode, edges: No extend`.
8. Klikni unutrašnju donju liniju između dva dovratnika. Taj deo nestaje. (Prvo pređi pokazivačem preko njega: deo koji će nestati postaje siv i isprekidan.)
9. Klikni spoljašnju donju liniju između dva dovratnika. I taj deo nestaje.
10. Klikni deo svakog dovratnika koji viri iznad zida, i deo ispod njega.
11. Pritisni {{key:Enter}} da završiš komandu.

Trebalo bi da vidiš otvor od 900 u donjem zidu, sa dovratnicima koji zatvaraju krajeve zida.

U Quick režimu (podrazumevanom) Podrezivanje ne traži prvo da izabereš rezne ivice: svaki vidljiv objekat je rezna ivica. Izaberi deo koji želiš da nestane, ili prevuci putanju kroz nekoliko delova da ih sve odjednom podrežeš. Ukucaj `U` i pritisni {{key:Enter}} da vratiš poslednji izbor ili prevlačenje, a da ne izađeš iz komande. Ograda, ukrštanje, izabrane ivice i {{key:Shift}} za produženje su u [Podrezivanje i produžavanje](topic:trim-and-extend).

## Produži liniju do druge

{{cmd:EXTEND}} produžava liniju, luk ili kraj polilinije dok ne sretne sledeći objekat u tom pravcu.

1. Ukucaj `L` i pritisni {{key:Enter}}.
2. Ukucaj `1000,2000` i pritisni {{key:Enter}}.
3. Ukucaj `@2000,0` i pritisni {{key:Enter}}, zatim pritisni {{key:Enter}} opet. Linija staje 2000 pre desnog zida.
4. Ukucaj `EX` i pritisni {{key:Enter}}.
5. Klikni novu liniju blizu njenog desnog kraja.
6. Pritisni {{key:Enter}} da završiš komandu.

Linija sada ide do unutrašnjeg lica desnog zida. Svaki vidljiv objekat je granica; klikni blizu kraja koji treba da raste. U {{cmd:TRIM}}, {{key:Shift}}+klik radi isto.

## Prekidanje i produženje

{{cmd:BREAK}} (`BR`, ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Prekini}}) seče prazninu bez rezne ivice: klikni objekat gde praznina počinje (taj klik je prva tačka), pa klikni gde se završava. Na krugu ide deo suprotno kretanju kazaljke na satu od prve tačke do druge. `F` na drugom pitanju dozvoljava da ponovo zadaš prvu tačku, a {{cmd:BREAKATPOINT}} deli objekat na dva na jednoj tački bez praznine.

{{cmd:LENGTHEN}} (`LEN`) menja dužinu na jednom kraju:

1. Ukucaj `LEN` i pritisni {{key:Enter}}. Klikni liniju da vidiš njenu trenutnu dužinu; upit pita opet.
2. Izaberi način: `DE` (Delta: iznos za dodavanje, negativan za oduzimanje; `A` za ugao luka), `P` (Percent: 50 je polovina), `T` (Total: dužina koju treba da ima) ili `DY` (Dynamic: prevuci kraj).
3. Klikni svaki objekat blizu kraja koji treba da se pomeri. `U` vraća poslednji; {{key:Enter}} završava.

Linije, lukovi i otvorene polilinije (njihov krajnji segment) mogu se produžiti.

## Česte greške

- **Cela linija je nestala.** Ništa je nije sekao, pa ju je režim Quick obrisao. Ukucaj `U` da je vratiš; proveri da rezna linija zaista seče (uvećaj) i da nije na sloju koji je isključen.
- **„Nema granice u tom pravcu.“** Produžavanje nije ništa našlo na šta da naleti. Klikni bliže kraju koji treba da raste.
- **„Poluprečnik je prevelik.“** Luk bi prešao kraj jedne od linija. Koristi manji poluprečnik.
- **„Samo prvi ili poslednji segment otvorene polilinije može da se podreže.“** Izaberi dva susedna segmenta polilinije, ili ukucaj `P` da zaobliš svaki ugao.
- **Ofset je otišao na pogrešnu stranu.** Strana je tamo gde klikneš posle izbora objekta. Vrati sa {{key:Mod+Z}} i klikni na drugu stranu.
- **„Ne može se ofsetovati toliko daleko.“** Ofset bi okrenuo luk, krug ili polilinju naopako. Koristi manje rastojanje.
