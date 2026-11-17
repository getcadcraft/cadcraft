---
title: Jūsu pašu pogas (Mani rīki)
summary: Pievienojiet rīkjoslas pogas, kas palaiž jūsu makro, piešķiriet tām īsinājumtaustiņus, kopīgojiet tās kā failu un pārnesiet pogas no CUIx pielāgošanas faila.
keywords: mani rīki, pielāgotas pogas, rīkjoslas pogas, makro, cui, cuix, pielāgot, izvēlne, īsinājumtaustiņi, tastatūras īsinājumi, diesel, ^c^c, importēt pogas, eksportēt pogas
from: 36618802
---

## Ko jūs uzzināsiet

Kā novietot savas pogas rīkjoslā, katra palaiž makro, kas rakstīts tā, kā AutoCAD tos raksta, kā piešķirt pogai taustiņu un kā pārnest pogas no CUIx faila.

## Pievienot pogu

1. Atveriet {{ui:Iestatījumi}} ({{key:Mod+,}}) un paliekiet cilnē {{ui:CadCraft}}. Ritiniet līdz {{ui:Mani rīki}}.
2. Noklikšķiniet {{ui:Pievienot pogu…}}.
3. Aizpildiet lodziņu:
   - {{ui:Grupa}}: rīkjoslas grupa, kurā poga ietilps, piemēram, `Mani rīki`. Jauns nosaukums izveido jaunu grupu.
   - {{ui:Nosaukums}}: pogā redzamie vārdi.
   - {{ui:Makro}}: ko tā ieraksta, piemēram, `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Īsinājumtaustiņš}}: noklikšķiniet lodziņā un nospiediet taustiņus, piemēram, {{key:Ctrl+Alt+B}}.
   - {{ui:Ikona}}: PNG vai SVG attēls, ne lielāks par 64 KB, vai nekas (rādīsies zvaigzne).
4. Noklikšķiniet {{ui:Saglabāt}}.

Poga parādās rīkjoslas beigās savā grupā. Noklikšķiniet uz tās vai nospiediet tās taustiņu, lai to palaistu. {{ui:Rediģēt}} un {{ui:Dzēst}} sarakstā maina vai noņem to.

## Rakstīt makro

Makro ir tas, ko ierakstītu komandrindā, ar dažām zīmēm:

| Zīme | Nozīmē |
|---|---|
| `^C` | Atcelt to, kas darbojas (`^C^C` ir parastais sākums) |
| `;` vai atstarpe | {{key:Enter}} |
| `\` | Gaida jūs: klikšķi vai ierakstītu atbildi, pēc tam makro turpinās |
| `_` vai `.` pirms komandas | Pieņemts un ignorēts (starptautiskie un iebūvētie nosaukumi) |
| `*` pašā sākumā | Atkārtot katru reizi, kad beidzas, līdz nospiežat {{key:Esc}} |
| `^O`, `^G` | Ieslēdz vai izslēdz Ortogonāli un režģi |
| `$M=` | Atlikusī daļa ir DIESEL. Lasīti tiek tikai `$(if,…)`, `$(getvar,…)`, `$(=,…)` un `$(eq,…)`; poga, kas izmanto ko citu, to pasaka un neko nedara |

Piemēri:

- `^C^C_line;0,0;@100,0;;` uzzīmē 100 garu līniju no sākumpunkta.
- `^C^C_circle;\25;` pieprasa jūsu centru un tad uzzīmē riņķi ar rādiusu 25 tur.
- `^C^C_turnright` pagriež skatu par 90° pa labi.

## Īsinājumtaustiņi

Taustiņam vajag {{key:Mod}} (Ctrl, vai Cmd uz Mac) vai {{key:Alt}} ar burtu vai ciparu, vai vienu no brīvajiem funkciju taustiņiem {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Burti paši par sevi iet uz komandrindu. Taustiņi, ko CadCraft, lietotne vai pārlūkprogramma jau izmanto (piemēram, {{key:Ctrl+S}} vai {{key:Ctrl+Z}}), un taustiņi, ko jau izmanto cita poga, tiek noraidīti, un lodziņā tiek norādīts iemesls.

## Dalīties ar pogām

- {{ui:Eksportēt…}} saglabā katru grupu un pogu (ar ikonām un taustiņiem) kā `my-tools.json`.
- {{ui:Importēt…}} pievieno šāda faila grupas aiz jūsējām. Jau izmantotam grupas nosaukumam tiek pievienots "(2)"; taustiņš, kas radītu konfliktu, tiek izlaists, un panelis to pasaka.

## Pārnest pogas no CUIx faila

1. Noklikšķiniet {{ui:Importēt CUIx…}} un izvēlieties `.cuix` failu.

Tā rīkjoslas un lentes paneļi kļūst par grupām, katra poga ar savu makro un attēlu (PNG, vai BMP, pārvērsts PNG). Tās īsinājumtaustiņi nonāk atsevišķā grupā, katra poga ar savu taustiņu; komandu aizstājvārdi, ja tādi ir, nonāk grupā {{ui:Aizstājvārdi}}. Panelis parāda, kas tika pārnests.

:::note
Fails tiek tikai nolasīts. Komandas, kuru CadCraft nav, tiek uzskaitītas pēc nosaukuma, nevis minētas minējumos: to pogas to pasaka, kad uz tām noklikšķina. DIESEL aiz dažām minētajām funkcijām, izvēlnes, peles pogas un darba vietas netiek nolasītas.
:::

## Noderīgi zināt

- Pogas tiek glabātas šajā pārlūkprogrammā (vai šajā darbvirsmas lietotnē), nevis zīmējumos.
- Poga darbojas caur komandrindu, tāpēc to var atsaukt kā jebko, ko ierakstāt: viens {{key:Mod+Z}} katrai palaistajai komandai.
