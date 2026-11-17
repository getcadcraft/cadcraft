---
title: Mga override ng class sa viewport
summary: Sa isang sheet, itago ang isang class o bigyan ito ng ibang kulay, lineweight o fill sa isang viewport lamang; nananatiling pareho ang modelo at ang iba pang viewport.
keywords: viewport, class override, viewport override, itago ang class sa viewport, sheet, layout, VPLAYER, plot, Vectorworks
from: c1a2b51f
---

Madalas magpakita ang isang sheet ng parehong modelo nang higit sa isang beses: isang plano na may muwebles at isang plano na wala nito, o isang lighting plan kung saan may kulay lamang ang mga ilaw. Binabago ng viewport class override kung paano lumalabas ang isang [class](topic:classes) **sa viewport na iyon lamang**.

1. Buksan ang sheet at piliin ang isang viewport.
2. Buksan ang panel ng Classes (`CLASSES`) at piliin ang class.
3. Sa ilalim ng {{ui:Ang viewport na ito}}, lagyan ng tsek ang {{ui:Itago sa viewport na ito}}, o itakda ang {{ui:Kulay dito}}, {{ui:Lineweight dito}} o {{ui:Fill dito}}.

Ipinapakita ng listahan sa ibaba ang bawat class na binabago ng viewport na ito. Inaalis ng {{ui:Burahin ang mga override ng viewport na ito}} ang lahat ng ito. Bawat pagbabago ay isang hakbang na puwedeng i-undo.

## Ano ang binabago ng override

- **Itago** ang class at bawat class sa ilalim nito sa viewport na ito.
- **Kulay, lineweight at fill** ay binabago ang mga object ng class na ang value ay hindi nakatakda sa mismong object, ibig sabihin, mga object na kumukuha nito ayon sa class o layer. Pinapanatili ng object na may sarili nitong kulay ang kulay nito, gaya ng sa viewport layer override.

Lumalabas ang mga override sa screen, sa mga plot at sa mga PDF, kasama ang isang sheet set na nai-publish sa PDF. Gumagana ang mga ito kasama ng mga frozen layer at layer override ng viewport.

Nise-save ang mga override kasama ng drawing sa DWG at DXF (kasama ang listahan ng class, sa block na `CADCRAFT_CLASSES`) at bumabalik sa parehong viewport kapag binuksan ang file sa CadCraft.
