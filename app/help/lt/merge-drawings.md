---
title: Sujunkite dviejų žmonių brėžinio pakeitimus
summary: Leiskite git, Fossil ar Mercurial sujungti dvi DWG ar DXF kopijas objektas po objekto, naudodami raktą, kurį CadCraft saugo kiekviename objekte.
keywords: sujungti, git, fossil, mercurial, versijų valdymas, skirtumai, konfliktas, trijų krypčių, cadcraft merge, raktas, gitattributes, DWG, DXF
from: 71482bf9
---

Du žmonės redaguoja tą patį brėžinį. Jei jie pakeitė skirtingus objektus, sujungimas gali būti automatinis: nieko nereikia taisyti rankiniu būdu.

## Kas tai užtikrina

CadCraft kiekvienam nubraižytam objektui suteikia trumpą **raktą**, kuris niekada nesikeičia ir niekada nepriskiriamas dviem objektams. Jis įrašomas kartu su objektu DWG ar DXF faile (kaip papildomi duomenys, kuriuos kitos programos išsaugo). Sujungimas objektus ieško pagal tą raktą, o ne pagal jų vietą faile, nes kiekviena programa įrašydama perskaičiuoja vietas. Jei niekada nesujungiate, išjunkite tai {{ui:Parametrai}} › CadCraft › Failai, tinkami sujungti; tuomet failai maždaug 10 procentų mažesni.

Brėžinys, įrašytas dar prieš atsirandant raktams, vis tiek sujungiamas: jo objektai gauna raktą pagal savo vietą faile, tokį patį visiems, kurie jį atidaro.

## Nustatymas

Git vienai saugyklai reikia dviejų eilučių, vieną kartą:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# vieną kartą, kiekviename kompiuteryje
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Be git paleiskite rankiniu būdu: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil ir Mercurial priima tuos pačius tris failus savo sujungimo įrankio nustatyme.

## Taisyklės

- Objektas, pakeistas tik vienoje pusėje, paimamas. Tas pats pakeitimas abiejose pusėse paimamas vieną kartą.
- Ta pati ypatybė pakeista dviem būdais yra **konfliktas**: lieka jūsų pusė, o ataskaitoje išvardijamos abi reikšmės. Atverkite rezultatą, apžiūrėkite tą objektą ir ištaisykite rankiniu būdu.
- Objektas, pridėtas bet kurioje pusėje, išsaugomas. Objektas, pašalintas vienoje pusėje ir nepaliestas kitoje, pašalinamas. Pašalintas vienoje pusėje ir pakeistas kitoje: pašalinamas ir apie tai pranešama.
- Sluoksniai, blokai, tekstų ir matmenų stiliai, lapai bei pavadinti vaizdai sujungiami tuo pačiu būdu. Apribojimai seka objektus, kuriuos nurodo.
- Rezultatas įrašomas tuo pačiu failo formatu ir versija kaip ir jūsų.

Nesujungiama: objektų braižymo tvarka lieka jūsų, tada objektai, kuriuos pridėjo kita pusė. Tos pačios bloko apibrėžties pakeitimai abiejose pusėse yra konfliktas, niekada nesumaišomi. Nieko neįkeliama į tinklą; viskas vyksta jūsų kompiuteryje.
