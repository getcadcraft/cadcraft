---
title: Desene scanate și vectorizarea
summary: Aduceți o planșă scanată, scalați-o și aliniați-o, curățați-o, ștergeți părți din ea, prindeți-vă de liniile ei și vectorizați-o în linii și arce.
keywords: scanare, desen scanat, raster, tiff, jpeg, png, scară, aliniere, îndreptare, curățare de pete, prag, alb-negru, decupare, ștergere, vectorizare, agățare, arce, hașură, desene pe hârtie, desene vechi, scanattach, scantrace
from: 36227e5b
---

## De la o planșă de hârtie la obiecte de desen

Un desen scanat este o imagine. CadCraft păstrează imaginea pe care i-ați dat-o și nu o modifică niciodată: fiecare pas de curățare face o imagine nouă, cu câte un pas de anulare pentru fiecare, iar {{cmd:SCANINFO}} listează fișierul original și pașii făcuți de atunci. Nimic nu este trimis nicăieri și nimic nu este ghicit de un model antrenat: curățarea și vectorizarea sunt prelucrări obișnuite de imagine, care rulează pe calculator.

1. **Inserați-l.** {{cmd:SCANATTACH}} citește un PNG, un JPEG, un TIFF (o pagină, sau toate paginile unui fișier cu mai multe pagini) sau o pagină PDF care este o imagine. Cere pagina, colțul din stânga jos și lățimea. Pentru o pagină PDF cere și câți pixeli pe inch să fie desenată pagina.
2. **Scalați-l.** {{cmd:SCANSCALE}}: alegeți două puncte pe scanare, apoi tastați distanța reală dintre ele. Planșa este scalată în jurul primului punct.
3. **Aliniați-l.** {{cmd:SCANALIGN}}: alegeți două puncte pe scanare și cele două locuri la care aparțin; planșa se mută și se rotește ca să se potrivească, și se scalează și ea, decât dacă răspundeți Nu.
4. **Îndreptați-l.** {{cmd:SCANDESKEW}} măsoară unghiul la care se află liniile lungi ale planșei și îl afișează, împreună cu cât de sigur este. Acceptați-l sau tastați unul propriu, și planșa se rotește. O planșă cu puține linii lungi primește un avertisment: verificați unghiul înainte de a-l accepta.
5. **Curățați-l.** {{cmd:SCANCLEAN}} face planșa alb-negru (Auto netezește întâi hârtia; Adaptive urmărește mai strâns schimbările hârtiei; Level este un singur număr pentru toată planșa) și elimină punctele mici până la mărimea setată.
6. **Decupați și ștergeți.** {{cmd:SCANCROP}} păstrează o fereastră. {{cmd:SCANERASE}} șterge un dreptunghi, un poligon sau un lasou (apăsați și trageți): ștampile, notițe, un cerc lăsat de cafea.

Imaginea curățată este cea pe care o păstrează un DWG salvat (un IMAGE și IMAGEDEF, cu fișierul imaginii lângă desen, ca pentru orice imagine).

## Prindeți-vă de liniile scanării

Cu {{cmd:RASTERSNAP}} activat (implicit), agățările la obiecte găsesc și liniile unei scanări alb-negru: capetele liniilor, mijloacele lor, colțurile și intersecțiile, afișate cu semnele obișnuite de agățare. Partea planșei aflată sub cursor este vectorizată pe măsură ce mutați cursorul; măriți suficient cât un pixel să fie câțiva pixeli pe ecran. O linie mai lungă decât partea care se vectorizează este urmărită până la capete.

## Vectorizarea

{{cmd:SCANTRACE}} transformă liniile planșei în linii și arce pe un strat nou (SCAN-TRACE), ca un singur pas de anulare, cu scanarea rămasă sub ele. Setați:

- **Toleranța:** cât de departe poate fi o linie sau un arc vectorizat de liniile de pe scanare, în unități de desen (raportul dă și pixelii). O toleranță strânsă urmărește fiecare ondulație; una largă face mai puține bucăți, mai drepte.
- **Fereastra:** un colț al planșei sau întreaga planșă.
- **Arce:** dezactivat face doar linii.
- **Rămășițele:** ce a lăsat neatins vectorizarea este desenat ca dreptunghiuri pe un strat pe care îl puteți dezactiva, sau nu este desenat.

Vectorizarea găsește centrul fiecărei trăsături, o urmărește, potrivește linii drepte și arce de cerc, unește segmentele care au fost întrerupte acolo unde o altă linie le-a intersectat, face liniile aproape orizontale și aproape verticale exact orizontale și verticale și închide colțurile. **Textul și hașurile rămân ca raster:** piesele de mărimea literelor sunt puse deoparte, iar grupurile de linii scurte paralele sunt considerate hașură și puse deoparte.

Când termină, spune câte linii și arce a făcut, toleranța și câte piese a lăsat ca raster. **Acesta este rezultatul pe care l-au dat pixelii, la acea toleranță, și nu este o garanție că rezultatul este corect.** Comparați-l cu planșa: o vectorizare poate rata o linie slabă, poate uni două linii foarte apropiate sau poate desena o linie acolo unde este doar o pată. Curățați întâi scanarea (îndreptată, alb-negru, fără pete) și rezultatul este mult mai bun.

## Ce nu citește

Fișierele TIFF stocate în dale, BigTIFF, TIFF cu compresie JPEG sau deflate, codarea fax Group 3 și culorile păstrate în planuri separate sunt refuzate cu un mesaj; salvați-le din nou ca benzi cu LZW, PackBits, Group 4 sau fără compresie. Fișierele PNG întrețesute sunt refuzate și ele. Fișierele peste 128 MB sau 100 de milioane de pixeli sunt refuzate, iar o fereastră de vectorizare poate avea cel mult 64 de milioane de pixeli.
