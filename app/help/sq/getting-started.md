---
title: Fillimi me CadCraft
summary: Çfarë bën aplikacioni i vizatimit CadCraft, ku punon, dhe vizatimi yt i parë, nga një ekran bosh deri te një skedar i ruajtur.
keywords: fillimi, vizatimi i parë, i ri, hap, ruaj, ruaj si, fillo, mësim, prezantim, nisje e shpejtë
from: 1a56c575
---

CadCraft është një aplikacion vizatimi 2D. Vizaton dhe redakton vija, harqe, polivija, tekst, përmasa dhe blloqe, përgatit fletë me blloqe titulli dhe dritare pamjeje, dhe i nxjerr në PDF. Hap vizatime DWG dhe DXF dhe i ruan si DWG ose DXF.

Punon në shfletuesin tënd të internetit. Nuk ka asgjë për të instaluar: faqja të jep adresën dhe e gjithë aplikacioni ngarkohet në faqe. Vizatimet e tua hapen nga kompjuteri yt dhe ruhen përsëri aty. **Asgjë nuk ngarkohet.**

Nëse ke vizatuar më parë, lexo [Nga programe të tjera hartimi](topic:coming-from) pas kësaj faqeje. Shumica e zakoneve kalojnë, dhe ato pak që nuk kalojnë janë listuar aty.

## Preferon të udhëhiqesh?

Shkruaj `TOUR` (ose kliko {{ui:Shiko turin}} te kartela e fillimit, ose {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Shiko turin përsëri}}). Gjashtë hapa të shkurtër në një kuti mbi vizatim: vizato një vijë dhe një rreth, zhvendose, pritu, fshi diçka dhe përmason. Çdo hap përfundon kur e bën, dhe mund të kalosh një hap ose të gjithë turin. Nis vetvetiu vetëm herën e parë. [Fleta referuese](topic:cheat-sheet) ka 40 komandat që do të përdorësh më shumë, dhe [harta e komandave](topic:command-map) të gjitha komandat.

## Çfarë të duhet

- Një Chrome, Edge, Firefox ose Safari të fundit, në një kompjuter Mac, Windows ose Linux. Shih [Shfletuesit dhe platformat](common:browsers).
- Një mi me rrotë është më e rehatshme. Një trackpad funksionon; shih [Miu, trackpad-i dhe prekja](topic:mouse-trackpad-touch).
- Një tastierë. CadCraft drejtohet me komanda të shkruara, si shumica e programeve të vizatimit.

## Ideja në një paragraf

Shkruan një komandë (ose kliko butonin e saj), dhe rreshti i komandave në fund të bën pyetje një nga një: `Cakto pikën e parë:`, `Cakto pikën tjetër:`. I përgjigjesh secilës pyetje duke klikuar në vizatim ose duke shkruar një vlerë, pastaj duke shtypur {{key:Enter}}. Shtypja e {{key:Esc}} anulon. Kjo është e gjithë ndërveprimi; çdo gjë tjetër është detaj.

## Vizatimi yt i parë

Do të vizatosh një drejtkëndësh 4000 me 3000 nga vija, do të vendosësh një rreth në mes, dhe do të ruash skedarin.

1. Hap CadCraft. Rreshti i komandave në fund tregon `Command:`, dhe zona e vizatimit shfaq një kartelë të shkurtër "Fillo vizatimin".
2. Shkruaj `L` dhe shtyp {{key:Enter}}. Nuk ke nevojë të klikosh rreshtin e komandave së pari: çdo gjë që shkruan shkon atje.
3. Prompt-i ndryshon në `Cakto pikën e parë:`. Shkruaj `0,0` dhe shtyp {{key:Enter}}.
4. Shkruaj `@4000,0` dhe shtyp {{key:Enter}}. Shfaqet një vijë që shkon djathtas. `@` do të thotë "nga pika e fundit".
5. Shkruaj `@0,3000` dhe shtyp {{key:Enter}}.
6. Shkruaj `@-4000,0` dhe shtyp {{key:Enter}}.
7. Shkruaj `C` dhe shtyp {{key:Enter}}. `C` është opsioni Close: vija e fundit kthehet te pika e parë dhe komanda mbaron.
8. Kliko {{ui:Shtrirje}} te grupi {{ui:Pamja}} i shiritit të veglave. Drejtkëndëshi e mbush ekranin.

Tani duhet të shohësh katër vija që formojnë një drejtkëndësh, dhe historiku mbi rreshtin e komandave liston atë që shkrove.

9. Shkruaj `C` dhe shtyp {{key:Enter}} për të nisur komandën e rrethit.
10. Shkruaj `2000,1500` dhe shtyp {{key:Enter}} për qendrën.
11. Shkruaj `500` dhe shtyp {{key:Enter}} për rrezen.

Shfaqet një rreth në mes të drejtkëndëshit.

12. Shtyp {{key:Mod+S}}, ose kliko {{ui:Ruaj}} te grupi {{ui:Skedar}}.

Shfletuesi shkarkon `Drawing1.dwg` në dosjen tënde të zakonshme të shkarkimeve, dhe historiku thotë se ruajti një kopje si DWG. Ai skedar hapet përsëri në CadCraft, dhe në shumicën e programeve të tjera CAD. (Nëse më parë ke zgjedhur DXF te {{ui:Ruaj si}} në këtë shfletues, një vizatim i ri ruhet si `Drawing1.dxf`.)

:::tip
Shtyp {{key:Enter}} në një rresht komandash bosh për të përsëritur komandën e fundit. Shtyp {{key:Space}} në vend të {{key:Enter}} nëse e preferon: jashtë tekstit, bën të njëjtën gjë.
:::

## Hap një vizatim ekzistues

1. Shtyp {{key:Mod+O}}, ose kliko {{ui:Hap}}.
2. Zgjidh një skedar `.dwg` ose `.dxf` te zgjedhësi i skedarëve.

Mund të tërheqësh gjithashtu një skedar DWG ose DXF nga {{pick:mac=Finder|windows=File Explorer|linux=menaxheri juaj i skedarëve}} dhe ta lësh në zonën e vizatimit. Skedari lexohet në faqe; nuk del kurrë nga kompjuteri yt.

Shih [Skedarët: çfarë hapet, çfarë ruhet](topic:files) për atë që mbahet dhe atë që konvertohet.

## Ruajtja: çfarë të presësh

Ruajtja në një shfletues funksionon ndryshe nga një program desktop:

- {{ui:Ruaj}} gjithmonë **shkarkon një kopje të re**. Nuk e mbishkruan skedarin që hape. Nëse një skedar me të njëjtin emër ekziston tashmë në dosjen e shkarkimeve, shfletuesi zakonisht shton një numër, si `Drawing1 (1).dwg`.
- {{ui:Ruaj}} përdor formatin e vizatimit: DWG nëse hape një DWG, DXF nëse hape një DXF. Për të zgjedhur, shtyp {{key:Mod+Shift+S}} ose kliko {{ui:Ruaj si}}, pastaj zgjidh {{ui:DWG}} (dhe versionin e tij), {{ui:DXF R12}} ose {{ui:DXF 2000}}. Shih [Ruajtja](topic:files#saving).
- Skedari që hape nuk ndryshohet kurrë.
- Hapja e një skedari tjetër, ose {{ui:E re}}, e vendos atë në skedën e vet mbi zonën e vizatimit, kështu që asgjë që ke hapur nuk mbyllet. Nëse mbyll skedën e një vizatimi ose largohesh nga faqja me ndryshime të pa ruajtura, CadCraft pyet së pari: {{ui:Ruaj një kopje më parë}}, hidh ose {{ui:Anulo}}. Mbyllja e skedës së shfletuesit shfaq pyetjen e vet të shfletuesit "Të largohesh nga faqja?".

Ruajtja në re nuk është e disponueshme ende. Ku shkojnë skedarët e tu dhe pse qëndrojnë privatë shpjegohet në [Skedarët e tu dhe privatësia](common:your-files).

## Ku të shkosh më pas

Shtyp {{key:F1}} ose kliko {{ui:Ndihmë}} në shiritin lart për ta hapur këtë ndihmë pranë vizatimit në çdo kohë. Punon pa lidhje.

- [Ekrani i CadCraft](topic:workspace) emërton çdo shirit dhe panel.
- [Vizato me koordinata](topic:draw-with-coordinates) është udhëzuesi më i mirë i parë.
- [Tastiera dhe miu](topic:keyboard) liston çdo tast.
- Shkruaj `HELP` te rreshti i komandave për një listë të çdo komande, ose lexo [Referenca e komandave](topic:commands).
