---
title: Pelė, jutiklinis skydelis ir prisilietimas
summary: Kaip keisti mastelį, slinkti, spausti dešinįjį mygtuką ir rinktis CadCraft su ratuko pele, Mac ar PC jutikliniu skydeliu arba jutikliniu ekranu, ir kuo skiriasi naršyklės.
keywords: jutiklinis skydelis, magic mouse, prisilietimas, planšetė, iPad, slinkti, keisti mastelį, suspaudimas, dešinysis spustelėjimas, dviejų pirštų, vidurinis mygtukas, naršyklė, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft sukurtas pelei su ratuku. Viskas veikia ir su jutikliniu skydeliu, tik reikia išmokti kelių įpročių. Jutikliniai ekranai tinka rinkti taškus ir objektus, su apribojimais.

## Pelė su ratuku

- **Keisti mastelį:** sukite ratuką. Brėžinys keičia mastelį apie kryžminį žymeklį, todėl nukreipkite į tai, ką norite matyti.
- **Slinkti:** laikykite nuspaudę ratuką ir vilkite arba vilkite su dešiniuoju mygtuku.
- **Keisti mastelį iki visko:** dukart spustelėkite ratuką arba spustelėkite {{ui:Visas brėžinys}}.
- **Grįžti į ankstesnį vaizdą:** spustelėkite {{ui:Ankstesnis}} grupėje Vaizdas arba įveskite `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Ratuko žingsnių seka laikoma vienu vaizdu, todėl vienas {{ui:Ankstesnis}} ją anuliuoja. Vaizdus, į kuriuos grįžtate, išsaugokite su {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** spustelėkite dešiniuoju mygtuku.

## Jutiklinis skydelis

:::mac
- **Slinkti:** perbraukite dviem pirštais jutikliniu skydeliu bet kuria kryptimi: brėžinys seka jūsų pirštus. Taip pat galite vilkti laikydami dviejų pirštų spustelėjimą (vilkimas dešiniuoju mygtuku).
- **Keisti mastelį:** suspauskite dviem pirštais. Mastelio keitimas seka kryžminį žymeklį.
- **Dešinysis spustelėjimas (Enter):** spustelėkite dviem pirštais. Jei nieko nedaro, įjunkite „Antrinis spustelėjimas“ **Sistemos nustatymuose**, skiltyje **Jutiklinis skydelis**. Control-spustelėjimas CadCraft gali būti laikomas įprastu spustelėjimu, o ne dešiniuoju, todėl naudokite dviejų pirštų spustelėjimą.
- **Keisti mastelį į sritį:** spustelėkite {{ui:Langas}} grupėje Vaizdas ir spustelėkite du kampus.
:::

:::windows linux
- **Slinkti:** perbraukite dviem pirštais jutikliniu skydeliu bet kuria kryptimi: brėžinys seka pirštus. Taip pat galite vilkti laikydami nuspaustą dešinįjį mygtuką.
- **Keisti mastelį:** suspauskite dviem pirštais. Mastelio keitimas seka kryžminį žymeklį.
- **Dešinysis spustelėjimas (Enter):** spustelėkite dviem pirštais arba apatinį dešinįjį jutiklinio skydelio kampą, priklausomai nuo jutiklinio skydelio nustatymų.
- **Keisti mastelį į sritį:** spustelėkite {{ui:Langas}} grupėje Vaizdas ir spustelėkite du kampus.
:::

Laikant {{key:Space}} ir vilkiant, CadCraft brėžinys **nesislenka**: {{key:Space}} yra Enter.

Pelės ratukas vis dar keičia mastelį po vieną žingsnį. Jutiklinis skydelis, siunčiantis slinkimą visais žingsniais, kaip ratukas, keičia mastelį dviejų pirštų slinkimu, o ne slenka: sumažinkite mastelį, nukreipkite į norimą sritį ir vėl priartinkite.

3D skirtukas išlaiko savus jutiklinio skydelio judesius (žr. [Modeliavimas 3D](topic:3d-solids#look-around)).

## Jutiklinis ekranai ir planšetės

CadCraft pirštą skaito kaip pelės spustelėjimą:

- Palietimas pasirenka tašką arba objektą, arba pasirenka.
- Vilkimas pirštu per tuščią vietą nubraižo lasso (judant pirmiausia į dešinę – langas, pirmiausia į kairę – kertantis langas; žr. [Lasso pasirinkimas](topic:lasso-selection)).
- {{cmd:TRIM}} ir {{cmd:EXTEND}} komandose vilkimas pirštu per dalis jas visas apkarpo arba pratęsia.
- Pasirinkto objekto rankenėlės vilkimas perkelia rankenėlę (rankenėlės ir pasirinkimo langelis didesni pirštui).
- **Suspaudimas** dviem pirštais keičia mastelį apie tašką tarp jų; judinkite du pirštus kartu, kad **slinktumėte**. Antras pirštas atšaukia tai, ką pradėjo pirmasis, todėl suspaudimas niekada nepalieka žymės.
- **Ilgas paspaudimas** (laikykite ramiai apie pusę sekundės) yra dešinysis spustelėjimas: {{key:Enter}}. Jis baigia komandą, užbaigia pasirinkimą arba pakartoja paskutinę komandą.

Po komandų eilute atsiranda **klavišų eilutė**: {{ui:Esc}}, {{ui:Anuliuoti}}, {{ui:Perdaryti}}, simboliai, kuriuos planšetės klaviatūra slepia (`@` `,` `<` `'` `"` `-`), {{ui:Prilipimas}}, {{ui:Ortogonalus}}, klaviatūros mygtukas ir didelis {{ui:Enter}}. Palieskite klaviatūros mygtuką (arba komandų eilutę), kad įvestumėte komandą ar skaičių.

Žymeklio sekimo (hover) nėra, todėl prisitraukimo žymės rodomos tik ten, kur yra jūsų pirštas.

:::touch
Naudojate jutiklinį ekraną. Jei reikia daugiau nei greitos peržiūros, su prijungta klaviatūra ir pele arba jutikliniu skydeliu CadCraft naudoti daug lengviau.
:::

## Naršyklės

CadCraft veikia vienodai Chrome, Edge, Firefox ir Safari, Mac, Windows ir Linux. Skirtumai nedideli:

| Tema | Ką žinoti |
|---|---|
| Atidarant DWG | Dideli brėžiniai nuskaitomi kelias sekundes visose naršyklėse; būsenos eilutėje tuo metu rodoma „Skaitoma …“ |
| Atsisiuntimai | Kiekviena naršyklė nusprendžia, kur keliami atsisiuntimai ir ar prieš tai klausti; žr. [Naršyklės ir kompiuteriai](common:browsers) |
| Atidaryti spausdinimui | Atidaro PDF naujame skirtuke. Jei naršyklė blokuoja iškylančiuosius langus, CadCraft vietoj to atsisiunčia PDF |
| F7 | Firefox gali pasiūlyti žymės naršymą; pasirinkite Ne |
| Išėjimas su neįrašytais pakeitimais | Kiekviena naršyklė rodo savo klausimą „Palikti svetainę?“, kurio CadCraft pakeisti negali |

:::safari
Safari PDF, atidarytas su {{ui:Atidaryti spausdinimui}}, gali rodytis skirtuke be spausdinimo: naudokite **Failas**, tada **Spausdinti**.
:::

:::firefox
Firefox gali klausti, ką daryti su kiekvienu atsisiuntimu. Pasirinkite įrašyti failą arba pakeiskite tai vienąkart Firefox nustatymuose, skiltyje Atsisiuntimai.
:::
