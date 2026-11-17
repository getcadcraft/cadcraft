---
title: Încărcarea aplicațiilor (APPLOAD)
summary: Încărcați rutine LISP și fișierele lor de dialog, scoateți-le, reîncărcați-le din istoric și păstrați-le pe cele folosite în Suita de pornire.
keywords: appload, ap, încărcare aplicație, lisp, lsp, dcl, rutină, suita de pornire, scoatere, istoric, plasare, încărcare, personalizare, gestionare
from: 89e0ee95
---

## Ce veți învăța

Cum să încărcați o rutină LISP (un fișier `.lsp`) ca să funcționeze comenzile ei în CadCraft, cum să o scoateți și cum să faceți ca ea să se încarce la fiecare pornire a CadCraft.

## Încărcați o rutină

1. Deschideți {{ui:View}} › {{ui:More}} › {{ui:Load application…}}, sau tastați {{cmd:APPLOAD}} (sau `AP`) și apăsați {{key:Enter}}.
2. Faceți clic pe {{ui:Load a file…}} și alegeți unul sau mai multe fișiere `.lsp`. O rutină care deschide o casetă de dialog vine de obicei cu un fișier `.dcl`: alegeți-l și pe acesta.
3. Caseta de dialog spune ce a creat fiecare fișier, de exemplu „Încărcat delblocks.lsp: 1 comandă, DELBLOCKS.”
4. Faceți clic pe {{ui:Close}}, tastați comanda rutinei și apăsați {{key:Enter}}.

Puteți și plasa fișiere `.lsp` și `.dcl` pe desen sau pe caseta de dialog {{ui:Load applications}}: se încarcă imediat.

Fișierul este citit aici, în browser. Nimic nu este încărcat.

:::tip
Apăsați {{key:Enter}} pe o linie de comandă goală pentru a rula din nou comanda rutinei, la fel ca oricare altă comandă. Aliasurile de comenzi pot ajunge și ele la ea: vezi „Editarea aliasurilor de comenzi”.
:::

## Scoateți o rutină

În {{ui:Load applications}}, sub {{ui:Loaded applications}}, faceți clic pe {{ui:Unload}} lângă fișier. Comenzile pe care le-a creat dispar până când îl încărcați din nou.

## Încărcați o rutină la fiecare pornire

1. Încărcați rutina.
2. Sub {{ui:Loaded applications}}, faceți clic pe {{ui:Add to Startup Suite}} lângă ea.

De acum înainte se încarcă singură de fiecare dată când pornește CadCraft în acest browser. Pentru a opri asta, faceți clic pe {{ui:Remove}} lângă ea, sub {{ui:Startup Suite}}.

Suita de pornire păstrează o copie a fiecărui fișier în spațiul de stocare al acestui browser. Dacă modificați rutina, încărcați noul fișier și adăugați-l din nou.

## Încărcați acad.lsp și acaddoc.lsp dintr-un dosar de suport (Studio)

În CadCraft Studio, {{ui:Support folder}} din caseta de dialog {{ui:Load applications}} alege un dosar de pe calculator. Faceți clic pe {{ui:Choose folder…}}. Când pornește CadCraft, citește `acad.lsp`, apoi `acaddoc.lsp` din acel dosar (indiferent de forma literelor din nume), le încarcă și apoi încarcă Suita de pornire. `acaddoc.lsp` este citit din nou de fiecare dată când se deschide un tab nou de desen. Nimic altceva din dosar nu este citit, iar un fișier de peste 2 MB este omis, cu un mesaj.

Dacă un fișier definește o funcție numită `S::STARTUP`, ea rulează o dată după ce fișierele sunt încărcate (și după Suita de pornire). {{ui:Load now}} face același lucru la cerere; {{ui:Clear}} uită dosarul.

În browser, o pagină nu poate păstra un dosar, așa că nu există dosar de suport: folosiți {{ui:Startup Suite}} de mai sus. Fișierele compilate `.fas` și `.vlx` și programele native rămân refuzate.

## Încărcați din nou un fișier din istoric

{{ui:History}} listează fișierele pe care le-ați încărcat în acest browser, cele mai noi primele. Faceți clic pe {{ui:Load}} lângă unul pentru a-l încărca din nou, fără să-l căutați pe calculator.

## Fișiere pe care CadCraft nu le poate încărca

| Fișier | Ce este | Ce de făcut |
|---|---|---|
| `.fas`, `.vlx` | LISP compilat sau protejat | încărcați sursa `.lsp` |
| `.arx`, `.crx`, `.dbx` | programe native Windows | nu există nicio cale de a le rula în CadCraft |
| `.dvb` | un proiect VBA | nu există nicio cale de a le rula în CadCraft |
| `.craft`, `.lua`, `.py` | scripturi CraftScript | deschideți-le în spațiul de lucru Script din PartCraft |

Caseta de dialog {{ui:Load applications}} indică ce fel de fișier este fiecare dintre acestea atunci când îl alegeți.

## Opriți o rutină

Apăsați {{key:Esc}}. La una dintre solicitările rutinei, Esc o anulează în modul în care rutina se așteaptă (curățarea ei proprie rulează). Dacă este ocupată și nu cere nimic, Esc o oprește imediat și anunță acest lucru; rutinele încărcate rămân încărcate.

:::note
Tot ce modifică o rutină în desen este un singur pas: un {{key:Mod+Z}} anulează totul.
:::
