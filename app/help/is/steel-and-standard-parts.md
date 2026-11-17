---
title: Setja inn stálsnið og staðlaða hluti
summary: Teiknaðu stálsnið, útlit og 3D-bita úr birtum sniðatöflum, settu bolta, rær, skífur, pinna, legur, lykla og tannhjól inn eftir stöðlum þeirra, og settu þá á hlutalista.
keywords: stál, snið, prófíll, lögun, W-lögun, breiðflansa, I-bitar, rás, horn, HSS, rör, pípa, IPE, HEA, HEB, UPN, bitar, súlur, bitahluti, útlit, aisc, en 10365, bolti, skrúfa, rær, skífa, pinni, lega, lykill, lykilrauf, tannhjól, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, staðlaðir hlutar, hlutalisti, efnisyfirlit, bom, steelmember, partslist
from: 547c1048
---

Flipinn {{ui:Staðlaður (S)}} í {{ui:Safn}} hefur tvenns konar hluti, búna til hér úr birtum töflum (ekkert er sótt):

- **Stálsnið**: 1.335 stærðir. W, S, C, L, HSS og Pipe úr AISC Shapes Database v16.0; IPE, HEA, HEB og UPN úr EN 10365:2017. DetailCraft notar sömu töflu.
- **Staðlaðir hlutar**: sexkantsskrúfur (ISO 4017), sexkantsboltar (ISO 4014), sexkantsrær (ISO 4032), einfaldar skífur (ISO 7089), tommu sexkantsboltar og rær (ASME B18.2.1 og B18.2.2), samsíða pinnar (ISO 2338), djúpar rillukúlulegur (ISO 15), samsíða lyklar (DIN 6885-1) og beinskorin tannhjól (einingar úr ISO 54).

Allt hér er deilt undir CC0: notaðu það til hvers sem er, án þess að þurfa tilvísun.

## Setja inn stálsnið

1. Opnaðu safnið ({{ui:Safn}} í Blokk-hópnum, eða skrifaðu `LIB`) og smelltu á flipann {{ui:Staðlaður (S)}}.
2. Veldu fjölskylduna í fyrsta listanum, til dæmis {{ui:W-sniðin}}. Skrifaðu í leitarreitinn til að þrengja stærðirnar: `W12` sýnir allar W12.
3. Í {{ui:Setja inn sem}} veldu:
   - {{ui:Snið}}: þverskurðinn, með miðju sína á innsetningarpunkti.
   - {{ui:Kóti}}: bitinn séður frá hlið, eins langur og {{ui:Lengd (mm)}} segir, frá miðju vinstri enda hans.
   - {{ui:3D-bitahluti}}: fast form á 3D-flipanum (fyrir neðan).
4. Smelltu á {{ui:Setja inn}} á korti stærðarinnar, smelltu síðan á staðinn þar sem hann fer, eins og fyrir hvaða safnhlut sem er.

Snið eða kóti verður að blokk. Eigindin bera stærðina, töfluna sem hún kemur úr, lengdina (fyrir kóta) og efni sem þú getur fyllt inn.

:::note
S-lögun, rásir og UPN eru teiknuð með samsíða flönsum af meðalþykkt, og horn með ferköntuðum hornum: raunverulegu flansarnir eru hallandi og hornin ávöl. W, IPE, HEA og HEB hafa rótarrúnanir sínar, og HSS hornradíus sína.
:::

## Gera 3D-bita

Veldu {{ui:3D-bitahluti}} og smelltu á {{ui:Setja inn}}, eða skrifaðu {{cmd:STEELMEMBER}} (`SMEMBER`) í skipanalínuna:

1. Við `Section size` ýttu á {{key:Enter}} fyrir stærðina sem sést, eða skrifaðu eina, til dæmis `HSS6x6x1/4` eða `IPE300`.
2. Smelltu á upphafspunktinn, síðan endapunktinn. Bitinn liggur á milli þeirra og stendur á jörðinni.
3. Fyrir súlu, skrifaðu [Súla (C)], smelltu á grunnpunkt hennar og skrifaðu hæð hennar.

Hluturinn er lokað fast form á 3D-flipanum. Færðu eða afritaðu hann þar eins og hvert annað fast form. {{key:Mod+Z}} tekur hann burt aftur.

## Setja inn staðlaðan hlut

1. Á flipanum {{ui:Staðlaður (S)}} veldu fjölskylduna, til dæmis {{ui:Sexkantsskrúfur}}.
2. Fyrir skrúfu, bolta, pinna eða lykil, skrifaðu {{ui:Lengd (mm)}} hans (tommur fyrir tommufjölskyldur). Fyrir tannhjól, skrifaðu {{ui:Tennur}}, {{ui:Breidd á andliti (mm)}} og {{ui:Gat (mm)}}. Láttu reit vera auðan til að fá venjulega gildið sem sýnt er í honum.
3. Smelltu á {{ui:Setja inn}} á stærðinni og smelltu á staðinn þar sem hann fer.

Skrúfur, boltar og pinnar eru teiknaðir frá hlið með legfleti hauss við innsetningarpunktinn; rær, skífur, legur og tannhjól snúa fram; lyklar eru teiknaðir ofan frá. Þræðir eru teiknaðir á venjulegan hátt: rótin sem þunn lína, endi þráðarins sem þykk. Tannhjól eru teiknuð sem oddhringur, deilihringur og rótarhringur, ekki tönn fyrir tönn.

Blokk hvers hluta ber gerð sína, staðal, stærð, lengd og efni sem eigindi, og þyngd sína út frá nafnlögun úr stáli. Breyttu efninu í spjaldinu {{ui:Eiginleikar}}.

Sömu hlutirnir eru líka í safninu sem hlutir, og PartCraft opnar þá sem breytuhluta ({{ui:Staðlaður hluti}} í Skrá-hópnum).

## Gera hlutalista

- Í safninu, smelltu á {{ui:Hlutalisti}}: hver staðlaður hluti og stálsnið í teikningunni, flokkað eftir gerð, staðli, stærð, lengd og efni, með magni og hlutanúmerum. {{ui:Sækja CSV}} vistar hann fyrir töflureikni.
- Til að teikna hann, skrifaðu {{cmd:PARTSLIST}} (`PLIST`), smelltu á efra vinstra horn töflunnar, og ýttu á {{key:Enter}} fyrir venjulega textahæð eða skrifaðu eina.

Listinn er lesinn úr eigindum blokkanna, þannig að hann er enn réttur eftir að teikningin er vistuð sem DWG eða DXF og opnuð aftur.

## Algeng mistök

- **„Ekkert stálsnið heitir …“**: skrifaðu stærðina eins og flipinn {{ui:Staðlaður (S)}} sýnir hana: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Bitinn er á 3D-flipanum, ekki í grunnmyndinni.** {{cmd:STEELMEMBER}} býr til fast form; opnaðu 3D-flipann til að sjá það. Til að sýna stálið í grunnmyndinni, settu líka inn {{ui:Snið}} eða {{ui:Kóti}}.
- **Lengd utan marka.** Bolti verður að vera lengri en hausinn hans, og lykill lengri en hann er breiður. Línan undir spjöldunum segir hvaða gildi var hafnað.
