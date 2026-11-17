---
title: Mutați schițe către și de la alți modelatori de piese
summary: Scrieți o macro care reconstruiește desenul ca o schiță constrânsă într-un modelator de piese și deschideți o schiță exportată dintr-unul.
keywords: schiță, macro, swb, vba, export, modelator de piese, variabile globale, ecuații, relații, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks nu este disponibil acolo unde se construiește CadCraft, deci niciuna dintre direcții nu a fost încă testată în SolidWorks. Ce scrie CadCraft este verificat doar din punct de vedere al structurii. Verificați rezultatul înainte de utilizare.
:::

## Trimiteți un desen ca schiță

1. Constrângeți și cotați desenul (vezi [Constrângerea unui desen](topic:constraints)).
2. În grupul {{ui:Parametric}}, deschideți {{ui:Mai multe}} și alegeți {{ui:Macro pentru SolidWorks (.swb)}}, sau tastați {{cmd:SWBOUT}}.

   Se descarcă un fișier cu numele desenului, care se termină în `.swb`.
3. În SolidWorks, alegeți **Tools > Macro > Run** și selectați acel fișier.

Macro-ul creează o piesă nouă din șablonul implicit de piesă, deschide o schiță pe Front Plane și desenează în ea liniile, cercurile, arcele, punctele și polilinile modelului, cu:

- constrângerile desenului, ca relații de schiță,
- constrângerile dimensionale, ca cote cu aceleași nume (`d1@Sketch1`),
- parametrii proprii, ca variabile globale,
- fiecare expresie, ca ecuație.

Piesa folosește unitatea de lungime a desenului. Textul, blocurile, hașurile, cotele și foile nu fac parte din schiță; istoricul listează ce a fost lăsat afară. Expresiile fără formă de ecuație (`if`, `min`, `max`, `round`, `%` și câteva altele) sunt scrise cu valoarea lor curentă, iar istoricul spune care. Orice nu poate crea macro-ul este scris într-un fișier jurnal lângă macro, iar la final un mesaj îl rezumă.

## Deschideți o schiță dintr-o piesă

1. În SolidWorks, rulați macro-ul de export CadCraft (descărcați-l din aplicația PartCraft: Fișier > Exportare > Exportare macro pentru a aduce piesele înapoi) pe piesă. Scrie un fișier `.json` în formatul `cadcraft-sw-export` lângă piesă.
2. În CadCraft, alegeți {{ui:Deschidere}} și selectați acel fișier `.json`.
3. Când piesa are mai multe schițe, alegeți una.

Schița devine desenul, în milimetri: liniile, arcele, cercurile și punctele sale, relațiile ca constrângeri, cotele ca constrângeri dimensionale, păstrate cu numele lor (`D1`, `D2` …), variabilele globale ca parametri, iar ecuațiile de pe cote ca expresii ale lor. Istoricul listează ce nu a fost preluat, cum ar fi relațiile pe care CadCraft nu le are. Poziția schiței în piesă nu se păstrează: este desenată plată, așa cum se vede în planul ei.
