---
title: "Omejevanje risbe"
summary: "Črte držite vodoravne, krajišča skupaj in mere fiksne z geometrijskimi in kotnimi omejitvami ter pustite, da risba sledi, ko spremenite mero."
keywords: omejitev, omejitve, parametrično, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, prostostne stopnje, popolnoma omejeno
from: f8f21fa4
---

## Kaj boste naredili

Ploščo, katere širino spremenite na enem mestu: njene stranice ostanejo pravokotne, eno oglišče ostane na mestu, njena višina pa ostane polovica širine.

Omejitve delujejo na črtah, polilinijah, krožnicah, lokih in točkah na zavihku {{ui:Model}}. Vsaka omejitev, ki jo dodate, je en korak razveljavitve.

## Narišite in omejite obris

1. Vnesite `REC` in pritisnite {{key:Enter}}. Vnesite `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Vnesite `AUTOCONSTRAIN` in pritisnite {{key:Enter}}. Vnesite `ALL`, {{key:Enter}}, nato še enkrat {{key:Enter}}.

   Zgodovina pravi „Uporabljenih omejitev: 4“. Ob stranicah se prikažejo majhna polja z **H** in **V**: to so vrstice omejitev.
3. Vnesite `GCFIX` in pritisnite {{key:Enter}}. Kliknite blizu spodnjega levega oglišča. Prikaže se polje z ⊕: to oglišče ostane tam, kjer je.

`AUTOCONSTRAIN` doda omejitve sovpadanja, kjer se krajišča skoraj stikajo, ter vodoravne ali navpične omejitve, kjer so črte skoraj vodoravne ali navpične. Na njegov poziv vnesite `S`, da spremenite, kako blizu morajo biti (na začetku 0.05 enote risbe in 1°).

## Dodajte mere

1. Vnesite `DCHORIZONTAL` in pritisnite {{key:Enter}}.
2. Kliknite blizu spodnjega levega oglišča, nato blizu spodnjega desnega oglišča.
3. Kliknite pod pravokotnikom za merilno črto.
4. Poziv prikaže `Dimension text <d1=100>`. Vnesite `width=120` in pritisnite {{key:Enter}}.

   Pravokotnik je zdaj širok 120, oznaka pa bere `width=120`.
5. Vnesite `DCVERTICAL` in pritisnite {{key:Enter}}, vnesite `O` in pritisnite {{key:Enter}}, nato kliknite desno stranico.
6. Kliknite desno od nje, vnesite `width/2` in pritisnite {{key:Enter}}.

   Visoka je 60. Oznaka bere `fx: d1=width/2`: izraz jo upravlja.

Zgodovina zdaj pravi, da je obris popolnoma omejen. Če želite spremeniti njegovo velikost, spremenite `width` (glejte [Uporaba parametrov in enačb](topic:parameters)) ali dvakrat kliknite oznako `width=120`, vnesite novo vrednost in izberite {{ui:Uporabi}}.

## Premikanje omejenih objektov

Premik, zasuk, spreminjanje merila, ročice in podokno Lastnosti vse ohranijo omejitve: kar premaknete, ostane zadržano, ostalo sledi. Ko omejitve ne morejo slediti, urejanje ni izvedeno in zgodovina pove zakaj, na primer „Ni narejeno: omejitve držijo ta objekt tam, kjer je“. Izbris objekta odstrani tudi njegove omejitve.

## Zrcaljenje in obrezovanje omejenih objektov

- {{cmd:MIRROR}} prenese omejitve med zrcaljenimi objekti na kopije. Smeri (na katero stran se tangenta dotika, do katere strani se meri razdalja) se za zrcaljeno kopijo izračunajo znova, kopirane kote pa dobijo lastna imena, kot pri prilepljanju. Z `Erase source objects` `Y` omejitve ostanejo na zrcaljenih objektih. Zgodovina pove, koliko jih je prišlo s seboj.
- {{cmd:TRIM}} ohrani omejitve črte ali loka na tem, kar ostane: omejitev na krajišču gre na kos, ki še ima to krajišče; pravilo o smeri ({{ui:Vodoravno}}, {{ui:Navpično}}, {{ui:Vzporedno}}, {{ui:Pravokotno}}) velja na vsakem kosu, kota med dvema zunanjima krajiščema pa še naprej meri ta krajišča. Omejitve, ki so držale odrezani del, ali dolžina, ki jo je rez spremenil ({{ui:Enako}}, kot loka), izginejo. Obrezan krog ohrani omejitve središča in polmera. Obrezane polilinije izgubijo svoje.

## Omejitve

| Ukaz | Ohrani |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | črto ali odsek vodoravno ali navpično (`2P`: dve točki vodoravno ali navpično) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dve črti vzporedni, pravokotni ali na eni premici |
| {{cmd:GCCOINCIDENT}} | dve točki skupaj; `O`: točko na premici, krožnici ali loku |
| {{cmd:GCTANGENT}} | črto in krožnico ali lok ali dva od njiju, da se dotikata |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dva kroga ali loka na enem središču; dve dolžini ali dva polmera enaka |
| {{cmd:GCSYMMETRIC}} | dve točki, črti ali krožnici, zrcaljeni čez črto |
| {{cmd:GCFIX}} | točko (kliknite blizu nje) ali cel objekt (`O`) tam, kjer je |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | razdaljo |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | polmer, premer, kot med dvema črtama ali kot loka |

{{cmd:GEOMCONSTRAINT}} in {{cmd:DIMCONSTRAINT}} vprašata, katero; {{ui:Omeji}} in {{ui:Kota}} v skupini {{ui:Parametrično}} ju zaženeta, {{ui:Več}} pa jih tam našteje vse. Kje kliknete, izbere del: klik blizu krajišča, sredine ali središča vzame to točko; klik na polilinijo vzame odsek pod njim. Prvi objekt ostane, drugi se premakne, da se dotakne prvega.

Omejitev, ki je v sporu z drugimi ali ne doda ničesar, ker jo drugi že implicirajo, je zavrnjena s sporočilom in nič se ne premakne.

## Ogled, izbor in odstranitev

- Kliknite polje v vrstici omejitve (ali kvadratek sovpadanja ali oznako kote), da izberete to omejitev; zgodovina jo poimenuje. Pritisnite {{key:Delete}}, da jo odstranite.
- {{cmd:DELCONSTRAINT}} odstrani vse omejitve z izbranih objektov.
- {{cmd:CONSTRAINTBAR}}: `S` prikaže vse vrstice, `H` jih skrije; najprej izberite objekte, da pokažete ali skrijete njihove. {{ui:Več}} ima {{ui:Pokaži vrstice omejitev}} in {{ui:Skrij vrstice omejitev}}.
- {{cmd:DCDISPLAY}} prikaže ali skrije dimenzijske omejitve. Nikoli se ne izrišejo.
- {{cmd:DCCONVERT}} spremeni kote, narisane na črtah, krožnicah in lokih, v dimenzijske omejitve.

:::note
Če ste uporabljali parametrično risanje v AutoCADu, so imena ukazov in pozivi enaki. Omejitve in parametri se shranijo v datoteke DWG in DXF v obliki, ki jo drugi programi ignorirajo; glejte [Datoteke](topic:files#constraints-in-files).
:::
