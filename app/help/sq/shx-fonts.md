---
title: Vizato tekst me fontet tuaja SHX
summary: Jepni CadCraft një dosje fontesh SHX (ose zgjidhni skedarët) dhe stilet e tekstit që i emërojnë vizatohen me to, në ekran dhe në printim ose PDF, me lartësinë, faktorin e gjerësisë dhe pjerrësinë e stilit.
keywords: shx, fonte, font, font formash, font i madh, bigfont, unifont, i trashëgimisë, persian, farsi, arabisht, stil teksti, font që mungon, font i zëvendësuar, SHXFONTS, dosje, kthe, rend vizual, simplex, isocp
from: 14b0a4ab
---

Vizatimet nga programe të tjera shpesh emërojnë **fonte SHX** te stilet e tyre të tekstit, dhe një DWG nuk i mban ato. Pa fontin, CadCraft vizaton atë tekst me fytyrën e vet, që është në rregull për tekst latin të zakonshëm, por jo për fonte të vjetra që hartëzojnë kodet e thjeshta të karaktereve në forma të tjera shkronjash, si shënimet e vjetra persiane.

Jepni CadCraft fontet, dhe ai vizaton tekstin me to.

## Ngarko fontet e tua

Shkruaj {{cmd:SHXFONTS}} (`SHX`) dhe zgjidh:

- {{ui:Dosje}} (CadCraft Studio): zgjidh një dosje. Çdo skedar `.shx` në të lexohet tani, dhe sërish sa herë nis CadCraft.
- {{ui:Skedarët}} (shfletuesi): zgjidh një ose disa skedarë `.shx`. Ruhen në këtë shfletues dhe s’ngarkohen kurrë.
- {{ui:Listë}}: fontet që janë ngarkuar, dhe ato që vizatimi i hapur i emëron por ju nuk i keni ngarkuar.
- {{ui:Hiq (R)}} dhe {{ui:Pastro}}: harron një font, ose të gjithë.

CadCraft nuk mund të përfshijë fonte të palëve të treta, kështu që nuk dërgon kurrë asnjë: ato vijnë nga ju. Një vizatim vetëm i emëron fontet e veta, dhe nuk mban asnjë kopje të tyre.

## Çfarë ndodh

Emri i fontit të një stili teksti përputhet me një font të ngarkuar sipas emrit të tij, pa marrë parasysh shkronjat e mëdha/të vogla, dosjen dhe `.shx` (`SIMPLEX.SHX` gjen `simplex`). Një tekst në një stil të tillë vizatohet si vija, në ekran, në printim dhe në PDF, në vendin, lartësinë, rrotullimin, faktorin e gjerësisë dhe këndin e pjerrësisë të vetë tekstit. Gjerësia është e fontit, kështu që përafrimi {{ui:Qendra}} dhe {{ui:Djathtas}}, mbështjellja dhe zgjedhja përputhen me atë që shihni. Një stil, fonti i të cilit nuk është ngarkuar, e mban fytyrën e integruar, dhe kur hapni një vizatim që emëron fonte që nuk i keni ngarkuar, rreshti i komandës e thotë këtë.

Edhe stili Standard llogaritet: një vizatim, stili Standard i të cilit emëron një font të vetin, e mban atë.

## Fonte tashmë në rend vizual

Shumë fonte të vjetra SHX persiane dhe arabe mbajnë shkronja të formuara tashmë për ekranin dhe të vizatuara nga e majta në të djathtë, kështu që një tekst i shkruar me renditje logjike del prapa. Shkruaj {{cmd:SHXFONTS}}, zgjidh {{ui:Kthe (R)}}, dhe emëro fontin: teksti i tij pastaj vendoset duke filluar nga shkronja e fundit. Ekzekutoje sërish për ta zhbërë. Ndërrimi i përket fontit, mbahet në këtë shfletues, dhe nuk ruhet në vizatim.

## Çfarë nuk mbulohet ende

- Teksti me kode formatimi brenda rreshtit (ngjyra, grumbullime në një MTEXT) mbetet në fytyrën e integruar.
- Fontet e mëdha (lloji me dy bajt) plotësojnë kodet që i mungojnë fontit kryesor, por një tekst në një faqe kodesh të Azisë Lindore që CadCraft e ka kthyer tashmë në Unicode nuk ktheohet përsëri në kodet me dy bajt të fontit.
- Lexuesi i fontit ndjek përshkrimin e publikuar të formatit dhe është testuar me fonte të bëra për CadCraft. Nëse një nga të tuajat vizatohet gabim, na dërgoni fontin dhe vizatimin.
