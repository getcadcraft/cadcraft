---
title: Butoane proprii (Instrumentele mele)
summary: Adăugați butoane pe bara de instrumente care rulează propriile macrocomenzi, atribuiți-le taste de scurtătură, partajați-le ca fișier și aduceți butoane dintr-un fișier de personalizare CUIx.
keywords: instrumentele mele, butoane personalizate, bare de instrumente, macro, macrocomenzi, cui, cuix, personalizare, meniu, taste de scurtătură, scurtături de la tastatură, diesel, ^c^c, import butoane, export butoane
from: 36618802
---

## Ce veți învăța

Cum să puneți butoane proprii pe bara de instrumente, fiecare rulând o macrocomandă scrisă ca în AutoCAD, cum să dați unui buton o tastă și cum să aduceți butoanele unui fișier CUIx.

## Adăugați un buton

1. Deschideți {{ui:Setări}} ({{key:Mod+,}}) și rămâneți pe fila {{ui:CadCraft}}. Derulați până la {{ui:Instrumentele mele}}.
2. Faceți clic pe {{ui:Adăugați un buton…}}.
3. Completați caseta:
   - {{ui:Grup}}: grupul de bare de instrumente în care intră, de exemplu `Instrumentele mele`. Un nume nou face un grup nou.
   - {{ui:Etichetă}}: textul de pe buton.
   - {{ui:Macro}}: ce tastează, de exemplu `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tastă de scurtătură}}: faceți clic în casetă și apăsați tastele, de exemplu {{key:Ctrl+Alt+B}}.
   - {{ui:Pictogramă}}: o imagine PNG sau SVG de cel mult 64 KB, sau niciuna (apare o stea).
4. Faceți clic pe {{ui:Salvare}}.

Butonul apare la finalul barei de instrumente, în grupul său. Faceți clic pe el, sau apăsați tasta sa, pentru a-l rula. {{ui:Editare}} și {{ui:Ștergere}} din listă îl modifică sau îl elimină.

## Scrieți o macrocomandă

O macrocomandă este ceea ce ați tasta în linia de comandă, cu câteva semne:

| Semn | Înseamnă |
|---|---|
| `^C` | Anulează ce rulează (`^C^C` este începutul obișnuit) |
| `;` sau un spațiu | {{key:Enter}} |
| `\` | Așteaptă: un clic sau un răspuns tastat, apoi macrocomanda continuă |
| `_` sau `.` înaintea unei comenzi | Acceptat și ignorat (nume internaționale și integrate) |
| `*` la începutul absolut | Rulează din nou de fiecare dată când se termină, până apăsați {{key:Esc}} |
| `^O`, `^G` | Pornește sau oprește Ortogonal, respectiv grila |
| `$M=` | Restul este DIESEL. Sunt citite doar `$(if,…)`, `$(getvar,…)`, `$(=,…)` și `$(eq,…)`; un buton care folosește altceva o spune și nu face nimic |

Exemple:

- `^C^C_line;0,0;@100,0;;` desenează o linie de 100 de la origine.
- `^C^C_circle;\25;` vă cere centrul, apoi desenează acolo un cerc cu raza 25.
- `^C^C_turnright` rotește vederea cu 90° la dreapta.

## Taste de scurtătură

O tastă are nevoie de {{key:Mod}} (Ctrl, sau Cmd pe Mac) ori de {{key:Alt}} cu o literă sau o cifră, sau de una dintre tastele de funcție libere {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Literele singure merg în linia de comandă. Tastele pe care le folosesc deja CadCraft, aplicația sau browserul (cum ar fi {{key:Ctrl+S}} sau {{key:Ctrl+Z}}) și tastele pe care le are deja alt buton sunt refuzate, iar caseta spune de ce.

## Partajați butoanele

- {{ui:Export…}} salvează fiecare grup și buton (cu pictogramele și tastele lor) ca `my-tools.json`.
- {{ui:Importare…}} adaugă grupurile unui astfel de fișier după cele existente. Un nume de grup deja folosit primește „(2)”; o tastă care ar intra în conflict este lăsată deoparte, iar panoul spune asta.

## Aduceți butoane dintr-un fișier CUIx

1. Faceți clic pe {{ui:Import CUIx…}} și alegeți fișierul `.cuix`.

Barele sale de instrumente și panourile de panglică devin grupuri, fiecare buton cu macrocomanda și imaginea sa (PNG, sau BMP transformat în PNG). Tastele sale de scurtătură intră într-un grup propriu, fiecare buton cu tasta sa; aliasurile comenzilor pe care le poate avea intră într-un grup {{ui:Alias-uri}}. Panoul listează ce a fost adus.

:::note
Fișierul este doar citit. Comenzile pe care CadCraft nu le are sunt listate pe nume, nu ghicite: butoanele lor spun asta când sunt apăsate. DIESEL dincolo de cele câteva funcții de mai sus, meniurile, butoanele mouse-ului și spațiile de lucru nu sunt citite.
:::

## De reținut

- Butoanele sunt păstrate în acest browser (sau în această aplicație desktop), nu în desene.
- Un buton rulează prin linia de comandă, deci este anulat ca orice tastat: câte un {{key:Mod+Z}} pentru fiecare comandă rulată.
