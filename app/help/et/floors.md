---
title: Korruste paigutamine ühte joonisesse
summary: Joonista esimene korrus maakorruse peale samade koordinaatidega ja lülita iga korrus välja, ilma Xrefideta.
keywords: korrus, korrused, FLOORS, FLR, FLOOR, FLOORLAYERS, tasand, paigutamine, kujunduskiht, mudeliruum, alusjoonis, xref
from: 7440fc87
---

Korrused võimaldavad paigutada plaane ühte mudeliruumi. Igal korrusel on oma objektid, kihid aga töötavad üle kõigi korruste. Sein kihil `P-Walls` võib olla millisel tahes korrusel.

## Alustamine

Sisesta `FLOORS` (`FLR`) või vali {{ui:View}}-grupi menüüst {{ui:More}} käsk {{ui:Floors…}} ja seejärel {{ui:Start with floors}}. Mis sa oled seni joonistanud, läheb maakorrusele.

## Joonista korrusele

Vali korrus paneelis oleva ringnupuga. Uued objektid lähevad sellele.

Teised näidatud korrused kuvatakse selle all tuhmilt. Neile saad haakuda, nii et esimene korrus joondub maakorrusega, aga neid ei saa muuta, enne kui need aktiivseks korruseks teed. Silm lülitab korruse välja. Seinad ühinevad ainult seintega samal korrusel.

Korruse alustamiseks alumise põhjal vali see, mida soovid, vali paneelis korrus ja vajuta {{ui:Copy there}}.

## Korrused lehtedel

Vali lehel vaateaken ja vali selle korrus jaotises {{ui:Floor shown}} aknas {{ui:Properties}}. Vaateaken, millele pole korrust valitud, näitab kõiki sisselülitatud korruseid.

## Faili saatmine kellelegi teisele

Teised CAD-programmid ei tunne korruseid, nii et nad näitavad kõiki korruseid koos. Enne faili saatmist vali paneelis {{ui:Turn floors into layers}} või sisesta `FLOORLAYERS`. Iga objekt teisaldatakse kihile, mille nimi tuleneb tema korrusest, näiteks `Ground floor-P-Walls`, nii et korruseid saab ikkagi välja lülitada. Tagasivõtmine viib selle tagasi. CadCraft hoiab korruseid DWG- või DXF-failis, mida ta salvestab.
