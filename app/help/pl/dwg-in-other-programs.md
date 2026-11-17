---
title: Otwieranie DWG z CadCraft w innych programach
summary: W jakich programach otwierano pliki DWG zapisane przez CadCraft, co jest sprawdzane i co zrobić, gdy któryś z nich zgłasza problem.
keywords: dwg, otwieranie w innych programach, zgodność, czy się otworzy, audyt, trueview, inne programy CAD, dxf, sprawdzanie, zapisz jako dwg
from: 0f8c15c4
---

## Co zapisuje CadCraft

{{ui:Zapisz}} zapisuje prawdziwy plik DWG w wersji, w jakiej rysunek został wczytany, lub w tej, którą wybierzesz w {{ui:Zapisz jako}}: AutoCAD 2000, 2004, 2007, 2010, 2013 lub 2018. Nic nie jest konwertowane za plecami: historia wymienia wszystko, co zmieniło się po drodze (na przykład kolor pełny (true color) zapisany jako najbliższy standardowy kolor w DWG 2000).

## Gdzie został otwarty

Każdy plik DWG zapisany przez CadCraft jest otwierany, we wszystkich wersjach, przez trzy programy inne niż CadCraft: ODA File Converter (który sprawdza plik i niczego w nim nie naprawia), LibreDWG oraz libdxfrw. Ich odczyt jest porównywany z odczytem CadCraft: obiekty, warstwy, bloki i atrybuty, wymiary, kreskowania, arkusze i ich okna widokowe.

Otwieranie plików DWG z CadCraft w AutoCAD i w bezpłatnym DWG TrueView jest sprawdzane na Windows, rodzaj obiektu po rodzaju (AUDIT, warstwy, arkusze, wymiary, kreskowania, atrybuty, bloki dynamiczne, odwołania z przycięciem, obrazy). Wyniki zostaną tu wymienione, gdy będą gotowe.

## Gdy inny program zgłasza problem

1. Zapisz ponownie jako DXF ({{ui:Zapisz jako}} › {{ui:DXF 2000}}) i otwórz ten plik: większość programów czyta DXF.
2. Zapisz DWG w starszej wersji (2013 lub 2010).
3. Napisz do nas na Discordzie, podając program, jego wersję i to, co wyświetlił. Plik pomaga najbardziej.
