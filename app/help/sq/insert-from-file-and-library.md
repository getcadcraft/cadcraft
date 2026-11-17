---
title: Fut nga një skedar ose nga biblioteka
summary: Sill një bllok, ose një vizatim të tërë, nga një DWG ose DXF tjetër, dhe vendos artikuj nga Biblioteka, një skedar ose një bibliotekë tjetër, me kreditet dhe përditësimet e tyre.
keywords: fut, skedar, bibliotekë, librarycraft, artikull, pajisje, bllok nga një vizatim tjetër, wblock, design center, kreditet, atribuimi, licenca, përditësim, burim, item.json
from: 316188d2
---

## Fut një bllok nga një vizatim tjetër

1. Shkruaj `I` dhe shtyp {{key:Enter}}, ose kliko {{ui:Fut}} në grupin {{ui:Blloqe}}.
2. Te `Shkruaj emrin e bllokut ose [Skedar (F)/Biblioteka (L)]`, shkruaj `F` dhe shtyp {{key:Enter}}.
3. Zgjidh DWG ose DXF në këtë kompjuter. Lexohet këtu; nuk hapet, dhe asgjë nuk ngarkohet.
4. Te dialogu {{ui:Fut nga}}, zgjidh një bllok nga lista (shkruaj te {{ui:Filtro blloqet}} për ta gjetur), ose lëre {{ui:E gjithë vizatimi}}. Kliko {{ui:Fut}}.
5. Kliko aty ku shkon, dhe plotëso çdo atribut që kërkon.

Gjithë vizatimi hyn si një bllok i vetëm, me emrin e skedarit. Edhe blloqet brenda blokut që zgjodhe hyjnë. Shtresat që ato përdorin shtohen te ky vizatim.

Nëse vizatimi tjetër është në njësi të tjera (inç dhe milimetra, për shembull), CadCraft e shkallëzon referencën për t'u përshtatur dhe e thotë këtë në historik.

### Kur një emër është përdorur tashmë

Nëse ky vizatim ka tashmë një bllok me të njëjtin emër, CadCraft pyet:

- {{ui:Mbaj ekzistuesit}} përdor bllokun e këtij vizatimi me atë emër.
- {{ui:Riemëro}} e fut të renë me emrin `Emri (2)`.

E gjithë fut-ja është një hap i vetëm: {{key:Mod+Z}} heq përsëri referencën dhe përkufizimet e kopjuara.

## Hap bibliotekën

Kliko {{ui:Bibliotekë…}} te paneli {{ui:Blloqe}}, ose {{ui:Biblioteka}} në grupin Blloqe, ose shkruaj `LIB`. Te kërkesa `INSERT`, edhe `L` e hap atë.

Biblioteka ka katër burime, si skeda:

- {{ui:Biblioteka}}: biblioteka e CadCraft. Kërko sipas emrit, prodhuesit ose modelit, dhe filtro sipas kategorisë.
- {{ui:Skedarë…}}: një skedar artikulli (`item.json`) nga çdo bibliotekë, ose një vizatim, fletëllogari ose model 3D për të bërë artikuj prej tij: një DWG ose DXF (çdo bllok bëhet një artikull), një CSV me kolona emri dhe madhësie, ose një model glTF ose OBJ. Asgjë nuk ngarkohet.
- {{ui:Standard}}: profile çeliku (si prerje, fasada ose elemente 3D) dhe pjesë standarde si bulona, dado dhe rulmentë, të bëra këtu nga tabela të publikuara. Shih [Vendos profilet e çelikut dhe pjesët standarde](topic:steel-and-standard-parts).
- {{ui:Burime të tjera}}: biblioteka të tjera që përgjigjen në të njëjtën mënyrë si Biblioteka. Shto adresën e tyre një herë; ky shfletues e kujton atë.

Çdo kartelë shfaq një pamje paraprake, emrin, prodhuesin dhe modelin, licencën dhe versionin. Një artikull i tërhequr shënohet me {{ui:Tërhequr}} dhe arsyen e tij; CadCraft pyet para se ta vendosësh.

## Vendos një artikull

1. Kliko {{ui:Vendos}} te një kartelë.
2. Kliko aty ku shkon artikulli. Shkruaj `R` së pari për ta rrotulluar, ose `S` për ta shkallëzuar.
3. Te `Shkruaj numrin e artikullit (CC-ITEM)`, shtyp {{key:Enter}} për numrin e lirë të radhës, ose shkruaj numrin tënd.

Artikulli bëhet një bllok me emrin `LIB_<emri>_v<versioni>`, i vizatuar në njësitë e këtij vizatimi. Nëse vizatimi nuk ka njësi, artikulli hyn në milimetra dhe historiku e thotë këtë; cakto {{ui:Njësitë}} te paneli i djathtë më parë.

Të dhënat e tij udhëtojnë si atribute të padukshme: id-ja dhe versioni i artikullit, licenca dhe atribuimi, prodhuesi, modeli, kategoria dhe madhësitë. Shih [Atributet e bllokut](topic:attributes).

## Artikuj në gjuhën tënde

Një artikull mund të mbajë emrin dhe përshkrimin e vet në gjuhë të tjera. Kur i ka në gjuhën me të cilën CadCraft është vendosur (Cilësimet › Të përgjithshme › Gjuha), kartela dhe emri i artikullit të bllokut të vendosur i përdorin ato. Vetë blloku mban një emër të bërë nga emri i vetë artikullit, kështu që një vizatim ka një bllok për artikull, pa marrë parasysh në cilën gjuhë u vendos.

## Kontrollo për përditësime

1. Hap bibliotekën.
2. Kliko {{ui:Kontrollo për përditësime}}.

Çdo artikull bibliotekë në vizatim listohet me numrat e artikullit dhe nëse është i përditësuar, ka një version më të ri (dhe çfarë ndryshoi), ose është tërhequr. Kliko {{ui:Përditëso}} te një rresht, ose {{ui:Përditëso të gjitha}}. Çdo referencë kalon te blloku i versionit të ri dhe mban numrin e artikullit, sasinë, vendin, këndin dhe shtresën. {{key:Mod+Z}} zhbën një përditësim.

## Jep kredit për atë që përdore

Kliko {{ui:Kreditet e bibliotekës}}. Çdo artikull listohet me rreshtin e atribuimit dhe licencën.

- {{ui:Kopjo atribuimin}} kopjon rreshtin e një artikulli; {{ui:Kopjo të gjitha}} kopjon çdo rresht.
- {{ui:Shkarko CSV}} ruan listën me numrat e artikujve, prodhuesit, modelet, licencat dhe atribuimet. Hapet në çdo fletëllogaritëse.

Licenca si CC BY kërkojnë që të japësh kredit autorit aty ku përdor veprën. Vendos rreshtat në vizatim, në specifikim ose në shënimet e projektit.

## Simbole dhe asete

Biblioteka ka tre lloje artikujsh: Simbole (konventa vizatimi, 2D), Tipe (nga çfarë përbëhet një element) dhe Asete (objekte fizike). Te skeda {{ui:Biblioteka}}, lista {{ui:Lloji i elementit}} shfaq Simbolet dhe asetet së bashku, vetëm Simbolet, ose vetëm Asetet. Tipet janë ato nga të cilat ndërtohet një projekt BimCraft, kështu CadCraft nuk i liston.

## Hyr në bibliotekë

Kliko {{ui:Hyr në bibliotekë}}. Hapet një dritare e vogël në sit; sapo të jesh futur atje, CadCraft mund të shfaqë artikujt e ekipit tënd dhe të regjistrojë atë që vendos, kështu dëgjon kur ndryshon një artikull që ke përdorur. Hyrja zgjat për këtë skedë shfletuesi. Mund ta revokosh kurdo nga faqja e sigurisë së llogarisë tënde.

## Gabimet e zakonshme

- **"Bërja e artikujve nga tipet IFC është në BimCraft."** Skedarët IFC dhe të familjes lexohen në aplikacionin BimCraft. Bëje artikullin atje ose në Bibliotekë, pastaj përdor `item.json` e tij këtu.
- **"Biblioteka nuk mund të arrihej."** Je jashtë linje, ose biblioteka është e mbyllur. Artikujt që janë tashmë në vizatim nuk preken.
- **Një artikull është shumë i madh ose shumë i vogël.** Njësitë e vizatimit janë të gabuara ose nuk janë vendosur. Zhbëj, cakto {{ui:Njësitë}}, dhe vendose përsëri.
