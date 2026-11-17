---
title: Kreslení pomocí souřadnic
summary: Nakreslete přesný obrys podlahy zadáním absolutních, relativních a polárních souřadnic a přímým zadáním vzdáleností.
keywords: line, pline, polyline, souřadnice, relativní, polární, absolutní, přímé zadání vzdálenosti, @, zadávání bodů, přesné, ortogonální
from: 19e82350
---

## Co vytvoříte

Obrys místnosti tvaru L o rozměrech 6000 × 4500 se zářezem 2000 × 1500, nakreslený přesně, a stěna pod úhlem 30 stupňů. Použijete všechny čtyři způsoby zadání bodu. Pracujte v milimetrech: jedna jednotka výkresu odpovídá jednomu milimetru.

Přehled všech formátů najdete v [Zadávání souřadnic a vzdáleností](topic:coordinate-entry).

## Než začnete

1. Spusťte CadCraft. Pokud je otevřený výkres, nejprve klikněte na {{ui:Nová}}.
2. Stiskněte {{key:Esc}}, aby nic nebylo vybráno. Pravý panel ukazuje {{ui:Aktuální nastavení}}.
3. Nastavte {{ui:Jednotky}} na {{ui:Milimetry}}. Nic se nezmění na velikosti; jen se tím řekne listům a tiskům, co znamená jednotka.

## Absolutní souřadnice: první bod

Absolutní souřadnice je poloha měřená od počátku, zadává se jako `x,y`.

1. Napište `L` a stiskněte {{key:Enter}}. Výzva zní `Zadejte první bod:`.
2. Napište `0,0` a stiskněte {{key:Enter}}.

Úsečka se nyní natahuje od počátku ke kříži. Souřadnice ve stavovém řádku ukazují při pohybu vzdálenost a úhel od počátečního bodu.

## Relativní souřadnice: @dx,dy

Relativní souřadnice se zadává jako `@dx,dy`: kolik vodorovně, kolik svisle, od posledního bodu. Záporná čísla jdou doleva nebo dolů.

3. Napište `@6000,0` a stiskněte {{key:Enter}}. Úsečka délky 6000 vede doprava.
4. Napište `@0,3000` a stiskněte {{key:Enter}}.
5. Napište `@-2000,0` a stiskněte {{key:Enter}}.
6. Napište `@0,1500` a stiskněte {{key:Enter}}.

Měli byste vidět čtyři navazující úsečky, které stoupají po pravé straně místnosti.

## Přímé zadání vzdálenosti: samotné číslo

Když napíšete jedno číslo, CadCraft jde o tuto vzdálenost ve směru kříže. Zapněte {{ui:Ortogonální}}, aby se směr přichytil k vodorovnému nebo svislému.

7. Stiskněte {{key:F8}}, nebo klikněte na {{ui:Ortogonální}} ve stavovém řádku. Stavový řádek hlásí „Ortogonální zapnuto“.
8. Přesuňte kříž doleva od posledního bodu. Pružná čára zůstane vodorovná.
9. Napište `4000` a stiskněte {{key:Enter}}. Úsečka jde 4000 doleva.
10. Přesuňte kříž pod poslední bod.
11. Napište `4500` a stiskněte {{key:Enter}}. Jste zpět v počátečním bodě.
12. Na prázdné výzvě stiskněte {{key:Enter}}, čímž příkaz ukončíte.

:::mac
Na klávesnici Macu může F8 ovládat přehrávání médií. Podržte **fn** a stiskněte F8, nebo klikněte na {{ui:Ortogonální}}. Viz [Klávesy, myši a trackpady](common:keys).
:::

Nyní máte uzavřený obrys tvaru L ze šesti samostatných úseček.

13. Klikněte na {{ui:Rozsah}}, abyste viděli celý.

## Polární souřadnice: @vzdálenost<úhel

Polární souřadnice se zadává jako `@vzdálenost<úhel`. Úhly jsou ve stupních, měřené proti směru hodinových ručiček od kladného směru X: 0 je doprava, 90 nahoru, 180 doleva, 270 (nebo -90) dolů.

14. Napište `L` a stiskněte {{key:Enter}}.
15. Napište `6000,0` a stiskněte {{key:Enter}}, aby se začalo v pravém dolním rohu.
16. Napište `@2500<-30` a stiskněte {{key:Enter}}. Úsečka délky 2500 vyráží z rohu dolů a doprava pod úhlem 30 stupňů pod vodorovnou.
17. Stiskněte {{key:Enter}}, čímž příkaz ukončíte.

Polární souřadnice bez `@`, například `2500<30`, se měří od počátku, nikoli od posledního bodu.

## Stejný obrys jako jedna mnohočára

Šest samostatných úseček stačí pro mnoho úloh, ale mnohočára je jeden objekt: odsazuje se, měří a vybírá jako celek. Použijte {{cmd:PLINE}} se stejným zadáváním.

1. Napište `PL` a stiskněte {{key:Enter}}.
2. Napište `0,-6000` a stiskněte {{key:Enter}}, aby se začalo pod prvním obrysem.
3. Napište `@6000,0` a stiskněte {{key:Enter}}.
4. Napište `@0,3000` a stiskněte {{key:Enter}}.
5. Napište `@-2000,0` a stiskněte {{key:Enter}}.
6. Napište `@0,1500` a stiskněte {{key:Enter}}.
7. Napište `@-4000,0` a stiskněte {{key:Enter}}.
8. Napište `C` a stiskněte {{key:Enter}}. Mnohočára se uzavře a příkaz skončí.
9. Klikněte na nový obrys. Pravý panel ukáže „Mnohočára“, její {{ui:Vrcholy}}, {{ui:Délka}} a protože je uzavřená, i její {{ui:Plocha}}.

Plocha by měla být 24000000 (čtverečních milimetrů, což je 24 čtverečních metrů).

## Volby během kreslení

- V {{cmd:LINE}} a {{cmd:PLINE}} napište `U` a stiskněte {{key:Enter}}, čímž vrátíte poslední segment, aniž byste opustili příkaz.
- V {{cmd:LINE}} `C` uzavře obrys zpět k prvnímu bodu, jakmile jsou alespoň dva segmenty.
- V {{cmd:PLINE}} `A` přepne na obloukové segmenty (každý oblouk plynule navazuje na předchozí segment) a `L` přepne zpět na úsečky. V režimu oblouků je volba uzavření `CL`.
- Stisknutí {{key:Enter}} u výzvy `Zadejte první bod:` v {{cmd:LINE}} začne od posledního bodu, který jste zadali, takže můžete pokračovat, kde jste skončili.

## Časté chyby

- **Napsání `6000,0`, když jste chtěli `@6000,0`.** Bez `@` se bod měří od počátku, ne od posledního bodu, takže úsečka skončí na neočekávaném místě. V CadCraftu je `x,y` vždy absolutní. Chcete-li ji vzít zpět, napište `U` a stiskněte {{key:Enter}}.
- **Čárka napsaná místo desetinné tečky.** Desetinná čísla se píšou s tečkou: `1250.5`. Čárka vždy odděluje X od Y.
- **Přímá vzdálenost šla opačným směrem.** Samotné číslo se řídí křížem. Před stisknutím {{key:Enter}} přesuňte kříž na požadovanou stranu a pro rovné čáry zapněte {{ui:Ortogonální}}.
- **„Vyžadován bod nebo klíčové slovo volby.“** CadCraft nerozumí tomu, co jste napsali. Zkontrolujte mezery uvnitř čísla nebo chybějící čárku a napište to znovu.
- **Stopy a palce.** CadCraft čte jen prostá čísla. Napište `150` pro 12'-6" ve výkresu v palcích, nebo `12.5` ve výkresu ve stopách.
