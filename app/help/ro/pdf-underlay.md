---
title: Substraturi PDF și importul PDF
summary: Puneți o pagină PDF sub desen ca s-o calcați și s-o trasați, sau transformați liniile și textul paginii în obiecte de desen.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, substrat, calchiere, import pdf, scanare, plan de etaj, estompare, decupare, straturi, agățare, deschidere pdf
from: aa301d0f
---

## Două moduri de a aduce o pagină PDF

- **Atașare** ({{cmd:PDFATTACH}}) păstrează PDF-ul ca imagine sub desen. Îl calcați, vă agățați de liniile lui, îl estompați, îl decupați, iar la trasare se imprimă împreună cu foaia. Desenul păstrează doar numele fișierului.
- **Import** ({{cmd:PDFIMPORT}}) transformă liniile, curbele, umpleriile și textul paginii în obiecte obișnuite de desen, pe straturi care poartă numele PDF-ului. Obiectele pot fi editate liber, iar după aceea PDF-ul nu mai este necesar.

Deschiderea unui PDF cu {{ui:Open}} întreabă care dintre cele două variante doriți.

## Atașarea unei pagini

1. Tastați `PDFATTACH` (sau `PDFATT`) și alegeți PDF-ul. Dacă are mai multe pagini, tastați numărul paginii.
2. Faceți clic pe punctul de inserare (colțul din stânga jos al paginii).
3. Apăsați {{key:Enter}} pentru dimensiunea reală a paginii sau tastați scara: unități de desen pe punct PDF (un punct este 1/72 in, deci 0.3528 într-un desen în mm).
4. Apăsați {{key:Enter}} pentru nicio rotire sau tastați un unghi.

Pagina este un obiect, ca o referință la bloc: o mutați, rotiți, scalați, copiați, ștergeți și o puneți pe un strat. Dezactivați stratul și dispare. Măriți și pagina se desenează din nou clar.

## Calchierea

Cu {{ui:Snap}} activat, cursorul se agață de liniile proprii ale PDF-ului: capete, mijloace și intersecții (și {{ui:Nearest}} când acea agățare este activată). Textul scris ca litere pe pagină nu este agățat.

## Ajustarea

- `PDFADJUST`: **Estompare** (0 până la 80 la sută), **Contrast** (0 până la 100), **Monocrom** și **Pornire/oprire**, ca să-l ascundeți fără să-l ștergeți.
- `PDFCLIP`: arată doar un dreptunghi sau un poligon din pagină; **Ștergere** elimină decuparea.
- `PDFLAYERS`: un PDF poate avea propriile straturi. Comanda le listează; tastați un număr pentru a activa sau dezactiva acel strat pentru acest substrat. Straturile pe care fișierul le are dezactivate pornesc dezactivate.

## Trasare și salvare

PLOT imprimă pagina ca linii, umpleri și text, deci rămâne clară și poate fi căutată. Imaginile din PDF se văd pe ecran, dar nu se imprimă încă.

Un DWG sau DXF 2000 păstrează substratul ca legătură: numele fișierului, pagina, locul, scara, rotirea, decuparea, estomparea și contrastul. PDF-ul în sine nu se află în desen. Redeschideți desenul, tastați `PDF` și alegeți din nou fișierul; până atunci paginile apar ca cadre și își iau dimensiunea reală abia atunci. DXF-ul vechi (R12) nu are substraturi: păstrează cadrul și numele. Felul în care alte programe citesc decuparea și scara salvate nu a fost verificat încă în ele.

## Importul unei pagini

1. Tastați `PDFIMPORT` (sau `PDFIM`) și alegeți PDF-ul și pagina.
2. Faceți clic acolo unde trebuie să ajungă colțul din stânga jos al paginii.
3. Apăsați {{key:Enter}} pentru dimensiunea reală, tastați o scară sau alegeți **Două puncte**: pagina se desenează la dimensiunea reală, apoi faceți clic pe două puncte a căror distanță o cunoașteți și tastați distanța reală; totul se scalează în consecință.

Liniile devin linii și polilinii, cercurile și arcele sunt recunoscute, formele umplute devin hașuri pline, iar textul devine text pe un strat al cărui nume se termină cu `-TEXT`. Este un singur pas de anulare. Imaginile din PDF nu se importă: atașați pagina în schimb. O scanare (o pagină care este doar o imagine) nu are linii de importat.

Fișierele PDF sunt citite ca fișiere nesigure: nu rulează scripturi, iar o pagină foarte mare este tăiată, și se spune acest lucru.
