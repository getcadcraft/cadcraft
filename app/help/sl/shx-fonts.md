---
title: Risanje besedila v vaših pisavah SHX
summary: Dodajte CadCraftu mapo pisav SHX (ali izberite datoteke), in besedilo v slogih, ki jih poimenujejo, se riše v njih na zaslonu, pri izrisu in v PDF-ju, z višino, faktorjem širine in nagibom sloga.
keywords: shx, pisave, pisava, pisava oblik, velika pisava, bigfont, unifont, starejša, perzijska, farsi, arabska, slog besedila, manjkajoča pisava, zamenjana pisava, SHXFONTS, mapa, obrni, vizualni vrstni red, simplex, isocp
from: 14b0a4ab
---

Risbe iz drugih programov v slogih besedila pogosto navajajo **pisave SHX**, DWG pa jih ne vsebuje. Brez pisave CadCraft to besedilo riše v svoji lastni pisavi, kar je v redu za običajno latinsko besedilo, ne pa za stare pisave, ki navadne kode znakov preslikajo v druge oblike črk, kot je starejše perzijsko označevanje.

Dajte CadCraftu pisave, in besedilo bo narisano v njih.

## Naložite svoje pisave

Vnesite {{cmd:SHXFONTS}} (`SHX`) in izberite:

- {{ui:Mapa}} (CadCraft Studio): izberite mapo. Vsaka datoteka `.shx` v njej se prebere zdaj in znova ob vsakem zagonu CadCraft.
- {{ui:Datoteke}} (brskalnik): izberite eno ali več datotek `.shx`. Ostanejo v tem brskalniku in se nikoli ne naložijo.
- {{ui:Seznam (L)}}: pisave, ki so naložene, in tiste, ki jih odprta risba navaja, vi pa jih še niste naložili.
- {{ui:Odstrani (R)}} in {{ui:Počisti}}: pozabite eno pisavo ali vse.

CadCraft ne vključuje pisav tretjih oseb, zato jih nikoli ne pošilja: pridejo od vas. Risba samo navaja imena svojih pisav in ne hrani njihove kopije.

## Kaj se zgodi

Ime pisave sloga besedila se ujema z naloženo pisavo po imenu, brez upoštevanja velikih in malih črk, mape in `.shx` (`SIMPLEX.SHX` najde `simplex`). Besedilo v takem slogu se riše kot črte, na zaslonu, pri izrisu in v PDF-ju, na svojem mestu, z višino, rotacijo, faktorjem širine in kotom nagiba. Njegova širina je širina same pisave, zato se poravnava {{ui:Središče}} in {{ui:Desno}}, prelom vrstic in izbira ujemajo z tem, kar vidite. Slog, katerega pisava ni naložena, ohrani vgrajeno pisavo, in ko odprete risbo, ki navaja pisave, ki jih niste naložili, ukazna vrstica to pove.

Tudi slog Standard se šteje: risba, katere slog Standard navaja svojo pisavo, jo ohrani.

## Pisave, ki so že v vizualnem vrstnem redu

Številne stare perzijske in arabske pisave SHX imajo črke že oblikovane za zaslon in narisane od leve proti desni, zato je besedilo, vneseno v logičnem vrstnem redu, obrnjeno. Vnesite {{cmd:SHXFONTS}}, izberite {{ui:Obrni (R)}} in navedite pisavo: njeno besedilo se nato razporedi tako, da je zadnja črka prva. Ponovno zaženite, da to razveljavite. Preklop pripada pisavi, shranjen je v tem brskalniku in ni shranjen v risbi.

## Kaj še ni zajeto

- Besedilo z vgrajenimi kodami oblikovanja (barve, zlaganje v MTEXT) ostane v vgrajeni pisavi.
- Velike pisave (dvobajtnega tipa) nadomestijo kode, ki jih glavna pisava nima, vendar besedilo v vzhodnoazijski kodni strani, ki ga je CadCraft že pretvoril v Unicode, ni preslikano nazaj v dvobajtne kode pisave.
- Bralnik pisav sledi objavljenemu opisu formata in je bil preizkušen s pisavami, izdelanimi za CadCraft. Če se vam katera riše napačno, nam pošljite pisavo in risbo.
