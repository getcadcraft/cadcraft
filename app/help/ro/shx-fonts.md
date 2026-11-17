---
title: Desenarea textului cu fonturile SHX proprii
summary: Dați CadCraft un dosar de fonturi SHX (sau alegeți fișierele), iar stilurile de text care le numesc sunt desenate cu ele, pe ecran și la trasare sau în PDF, cu înălțimea, factorul de lățime și înclinarea stilului.
keywords: shx, fonturi, font, font de forme, big font, bigfont, unifont, vechi, persană, farsi, arabă, stil de text, font lipsă, font înlocuit, SHXFONTS, dosar, inversare, ordine vizuală, simplex, isocp
from: 14b0a4ab
---

Desenele din alte programe numesc adesea **fonturi SHX** în stilurile lor de text, iar un DWG nu le conține. Fără font, CadCraft desenează acel text cu propriul caracter, ceea ce este bine pentru textul latin obișnuit, dar nu și pentru fonturile vechi care leagă coduri simple de caractere de alte forme de litere, cum ar fi anotările vechi în persană.

Dați CadCraft fonturile, iar el desenează textul cu ele.

## Încărcarea fonturilor

Tastați {{cmd:SHXFONTS}} (`SHX`) și alegeți:

- {{ui:Dosar}} (CadCraft Studio): alegeți un dosar. Fiecare fișier `.shx` din el este citit acum, și din nou la fiecare pornire a CadCraft.
- {{ui:Fișiere}} (browserul): alegeți unul sau mai multe fișiere `.shx`. Sunt păstrate în acest browser și nu sunt niciodată încărcate.
- {{ui:Listare}}: fonturile încărcate și cele pe care desenul deschis le numește, dar pe care nu le-ați încărcat.
- {{ui:Eliminare}} și {{ui:Golire}}: uită un font, sau toate.

CadCraft nu poate include fonturi ale terților, deci nu livrează niciodată: ele vin de la utilizator. Un desen doar numește fonturile și nu păstrează nicio copie a lor.

## Ce se întâmplă

Numele fontului unui stil de text este potrivit cu un font încărcat după nume, fără a ține cont de majuscule, dosar și `.shx` (`SIMPLEX.SHX` găsește `simplex`). Un text din astfel de stil este desenat ca linii, pe ecran, la trasare și în PDF, la locul lui, cu înălțimea, rotirea, factorul de lățime și unghiul de înclinare proprii textului. Lățimea lui este cea a fontului, astfel încât aliniamentele {{ui:Centru}} și {{ui:Dreapta}}, trecerea pe rând nou și alegerea prin clic corespund cu ce vedeți. Un stil al cărui font nu este încărcat păstrează caracterul încorporat, iar când deschideți un desen care numește fonturi pe care nu le-ați încărcat, linia de comandă o spune.

Și stilul Standard contează: un desen al cărui stil Standard numește un font propriu îl păstrează.

## Fonturi deja în ordine vizuală

Multe fonturi SHX vechi în persană și arabă au litere deja formate pentru ecran și desenate de la stânga la dreapta, așa că un text tastat în ordine logică iese invers. Tastați {{cmd:SHXFONTS}}, alegeți {{ui:Inversare}} și numiți fontul: textul lui este apoi așezat cu ultima literă prima. Rulați-o din nou ca s-o anulați. Comutatorul aparține fontului, este păstrat în acest browser și nu este salvat în desen.

## Ce nu este acoperit încă

- Textul cu coduri de format în linie (culori, stive într-un MTEXT) rămâne în caracterul încorporat.
- Fonturile mari (cele cu doi octeți) completează codurile pe care nu le are fontul principal, dar un text într-o pagină de cod din Asia de Est, pe care CadCraft l-a transformat deja în Unicode, nu este mapat înapoi la codurile cu doi octeți ale fontului.
- Cititorul de fonturi urmează descrierea publicată a formatului și a fost testat cu fonturi făcute pentru CadCraft. Dacă un font desenează greșit, trimiteți fontul și desenul.
