---
title: Fut nga një skedar ose bibliotekë
summary: Sill një bllok, ose një vizatim të tërë, nga një DWG ose DXF tjetër, dhe vendos elemente nga Biblioteka, një skedar ose një bibliotekë tjetër, me kreditet dhe përditësimet e tyre.
keywords: fut, skedar, bibliotekë, librarycraft, element, pajisje, bllok nga një vizatim tjetër, wblock, design center, kredite, atribuim, licencë, përditësim, burim, item.json
from: f6e4e452
---

## Fut një bllok nga një vizatim tjetër

1. Shkruaj `I` dhe shtyp {{key:Enter}}, ose kliko {{ui:Fut}} te grupi Blloqe.
2. Rreshti i komandës në fund të dritares pyet `Enter block name or [File/Library]`. Shkruaj `F` atje dhe shtyp {{key:Enter}}.
3. Zgjidh DWG ose DXF në këtë kompjuter. Lexohet këtu; nuk hapet, dhe asgjë nuk ngarkohet.
4. Te dialogu {{ui:Fut nga}}, zgjidh një bllok nga lista (shkruaj në {{ui:Filtro blloqet}} për ta gjetur), ose lëre {{ui:Gjithë vizatimi}}. Kliko {{ui:Fut}}.
5. Kliko aty ku shkon, dhe plotëso çdo atribut që kërkon.

Mund të nisesh edhe nga paneli {{ui:Blloqe}}: shkruaj `F` në kutinë e tij {{ui:Filtro blloqet}} dhe shtyp {{key:Enter}}, ose shkruaj diçka që asnjë bllok nuk përputhet dhe kliko {{ui:Nga një skedar…}}. `L` dhe {{ui:Biblioteka…}} hapin bibliotekën në të njëjtën mënyrë. Para versionit 0.10.1, një shkronjë e shkruar në {{ui:Filtro blloqet}} kërkonte vetëm blloqet e këtij vizatimi dhe përgjigjej "No block matches the filter."

Për të mbajtur afër një vizatim me blloqet e tua, kliko {{ui:Shto një vizatim}} nën {{ui:Bibliotekat}} te paneli {{ui:Blloqe}} dhe zgjidh DWG ose DXF. Blloqet e tij listohen me figura; kliko një për ta vendosur.

I tërë vizatimi hyn si një bllok i vetëm me emrin e skedarit. Blloqet brenda bllokut që zgjodhe hyjnë gjithashtu. Shtresat që ato përdorin shtohen te ky vizatim.

Nëse vizatimi tjetër është në njësi të ndryshme (inç dhe milimetra, për shembull), CadCraft e shkallëzon referencën që të përputhet dhe e thotë këtë në historik.

### Kur një emër është përdorur tashmë

Nëse ky vizatim ka tashmë një bllok me të njëjtin emër, CadCraft pyet:

- {{ui:Mbaj ekzistuesit}} përdor bllokun e këtij vizatimi me atë emër.
- {{ui:Riemëro}} e sjell të riun si `Name (2)`.

E gjithë fut-ja është një hap i vetëm: {{key:Mod+Z}} heq referencën dhe përkufizimet e kopjuara.

## Hap bibliotekën

Kliko {{ui:Biblioteka…}} te paneli {{ui:Blloqe}}, ose {{ui:Biblioteka}} te grupi Blloqe, ose shkruaj `LIB`. Te kërkesa `INSERT`, `L` e hap gjithashtu.

Biblioteka ka katër burime, si skeda:

- {{ui:Biblioteka}}: biblioteka e CadCraft. Kërko sipas emrit, prodhuesit ose modelit, dhe filtro sipas kategorisë.
- {{ui:Skedarët…}}: një skedar elementi (`item.json`) nga çdo bibliotekë, ose një vizatim, fletëllogari ose model 3D për të bërë elemente: një DWG ose DXF (çdo bllok bëhet element), një CSV me kolona emri dhe madhësie, ose një model glTF ose OBJ. Asgjë nuk ngarkohet.
- {{ui:Standard}}: profile çeliku (si prerje, fasada ose elemente 3D) dhe pjesë standarde si bulona, dado dhe mbajtëse, të bëra këtu nga tabela të publikuara. Shih [Vendos profile çeliku dhe pjesë standarde](topic:steel-and-standard-parts).
- {{ui:Burime të tjera}}: biblioteka të tjera që përgjigjen në të njëjtën mënyrë si Biblioteka. Shto adresën e tyre një herë; ky shfletues e mban mend.

Çdo kartelë shfaq një pamje paraprake, emrin, prodhuesin dhe modelin, licencën dhe versionin. Një element i tërhequr shënohet {{ui:Tërhequr}} me arsyen; CadCraft pyet para se ta vendosësh.

## Vendos një element

1. Kliko {{ui:Vendos}} te një kartelë.
2. Kliko aty ku shkon elementi. Shkruaj `R` së pari për ta rrotulluar, ose `S` për ta shkallëzuar.
3. Te `Enter Item number (CC-ITEM)`, shtyp {{key:Enter}} për numrin e radhës së lirë, ose shkruaj numrin tënd.

Elementi bëhet një bllok me emrin `LIB_<name>_v<version>`, i vizatuar në njësitë e këtij vizatimi. Nëse vizatimi nuk ka njësi, elementi hyn në milimetra dhe historiku e thotë këtë; vendos {{ui:Njësitë}} te paneli i djathtë më parë.

Të dhënat e tij udhëtojnë si atribute të padukshme: id-ja dhe versioni i elementit, licenca dhe atribuimi, prodhuesi, modeli, kategoria dhe madhësitë. Shih [Atributet e blloqeve](topic:attributes).

## Elementet në gjuhën tënde

Një element mund të mbajë emrin dhe përshkrimin e vet në gjuhë të tjera. Kur i ka në gjuhën ku është vendosur CadCraft (Cilësimet › Të përgjithshme › Gjuha), kartela dhe emri i elementit të bllokut të vendosur e përdorin ato. Vetë blloku mban një emër të bërë nga emri i elementit, kështu që një vizatim ka një bllok për element, cilado gjuhë që e vendosi.

## Kontrollo për përditësime

1. Hap bibliotekën.
2. Kliko {{ui:Kontrollo për përditësime}}.

Çdo element bibliotekë në vizatim listohet me numrat e tij dhe nëse është i përditësuar, ka një version më të ri (dhe çfarë ndryshoi), ose është tërhequr. Kliko {{ui:Përditëso}} te një rresht, ose {{ui:Përditëso të gjitha}}. Çdo referencë kalon te bllokun e versionit të ri dhe mban numrin e vet të elementit, sasinë, vendin, këndin dhe shtresën. {{key:Mod+Z}} zhbën një përditësim.

## Jep kredi për ato që përdore

Kliko {{ui:Kreditet e bibliotekës}}. Çdo element listohet me rreshtin e atribuimit dhe licencën e vet.

- {{ui:Kopjo atribuimin}} kopjon rreshtin e një elementi; {{ui:Kopjo të gjitha}} kopjon çdo rresht.
- {{ui:Shkarko CSV}} ruan listën me numrat e elementeve, prodhuesit, modelet, licencat dhe atribuimet. Hapet në çdo fletëllogari.

Licencat si CC BY kërkojnë të përmendësh autorin aty ku e përdor punën. Vendos rreshtat në vizatim, në specifikim ose në shënimet e projektit.

## Simbolet dhe aset-et

Biblioteka ka tre lloje elementesh: Simbole (konventa vizatimi, 2D), Tipe (nga çfarë përbëhet një element) dhe Aset (objekte fizike). Te skeda {{ui:Biblioteka}}, lista {{ui:Lloji i elementit}} shfaq Simbolet dhe asetet bashkë, vetëm Simbolet, ose vetëm Asetet. Tipet janë ato nga të cilat ndërtohet një projekt BimCraft, prandaj CadCraft nuk i liston.

## Hyr në bibliotekë

Kliko {{ui:Hyr në bibliotekë}}. Hapet një dritare e vogël në sit; kur je futur atje, CadCraft mund të shfaqë elementet e ekipit tënd dhe të regjistrojë atë që vendos, që të dish kur ndryshon një element që ke përdorur. Hyrja vlen për këtë skedë të shfletuesit. Mund ta revokosh kurdo nga faqja e sigurisë e llogarisë tënde.

## Mbaj objektet e tua te Objektet e mia

{{ui:Objektet e mia}} është një listë private në Bibliotekë që vetëm ti e sheh. Nuk është në bibliotekën publike, nuk shfaqet në kërkim dhe nuk u shfaqet ekipit tënd, dhe ndjek llogarinë tënde në çdo kompjuter ku hyn në bibliotekë.

1. Në panelin Bibliotekë, kliko {{ui:Skedarët…}} dhe lexo një skedar.
2. Te elementi që do ta përdorësh sërish, kliko {{ui:Mbaje te objektet e mia}}.
3. Më vonë, kliko {{ui:Objektet e mia}} dhe kliko {{ui:Vendos}}. Vendoset si çdo element bibliotekë, dhe {{ui:Kontrollo për përditësime}} e mbulon.
4. {{ui:Hiq nga objektet e mia}} e heq nga lista. Kopjet e vendosura tashmë në vizatime mbeten.

Duhet të jesh i futur në bibliotekë. Leximi i një skedari nuk ngarkon asgjë; mbajtja e një elementi dërgon vetëm atë element në llogarinë tënde.

:::note
Objektet e mia është ende në provë dhe mund të mos jetë hapur për llogarinë tënde. Nëse thotë "My objects is not open for this account yet", mund ta vendosësh akoma elementet nga skedarët e tu me {{ui:Skedarët…}}.
:::

## Gabime të zakonshme

- **"Making items from IFC types is in BimCraft."** Skedarët IFC dhe të familjes lexohen në aplikacionin BimCraft. Bëje elementin atje ose në Bibliotekë, pastaj përdor `item.json` të tij këtu.
- **"The library could not be reached."** Je jashtë linje, ose biblioteka është jashtë funksionit. Elementet që janë tashmë në vizatim nuk preken.
- **Një element është shumë i madh ose shumë i vogël.** Njësitë e vizatimit janë të gabuara ose nuk janë vendosur. Zhbëj, vendos {{ui:Njësitë}}, dhe vendose sërish.
