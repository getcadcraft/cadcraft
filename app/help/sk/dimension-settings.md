---
title: Nastavenie veľkostí, desatinných miest a mierky kót
summary: Vyberte výšku textu, veľkosť šípky, desatinné miesta a celkovú mierku pre nové kóty, zmeňte existujúce a pochopte, ako fungujú štýly kót v CadCraft.
keywords: štýl kót, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, celková mierka, desatinné miesta, veľkosť šípky, mierka poznámok, dimtextunit, jednotky v texte, mm, cm, m, km, milimetre, metre, dimlfac, dimpost
from: 8ec82a07
---

## Čo sa naučíte

Aká veľká je text kóty a šípky, ako ich nastaviť pre výkres vykreslený v mierke 1:50 alebo 1:100 a ako zmeniť kóty, ktoré ste už vytvorili.

## Ako fungujú veľkosti kót

Každá kóta nesie vlastnú sadu veľkostí: výšku textu, veľkosť šípky, desatinné miesta, medzeru okolo textu, ako ďaleko predlžovacie čiary presahujú kótovaciu čiaru a ako ďaleko začínajú od objektu. Predvolené hodnoty sú blízke bežnému štýlu ISO:

| Nastavenie | Predvolená hodnota | Príkaz |
|---|---|---|
| Výška textu | 2.5 | {{cmd:DIMTXT}} |
| Veľkosť šípky | 2.5 | {{cmd:DIMASZ}} |
| Desatinné miesta | 2 (koncové nuly sa vynechajú) | {{cmd:DIMDEC}} |
| Medzera okolo textu | 0.625 | {{cmd:DIMGAP}} |
| Presah predlžovacej čiary za kótovaciu čiaru | 1.25 | {{cmd:DIMEXE}} |
| Odsadenie od objektu | 0.625 | {{cmd:DIMEXO}} |
| Celková mierka | 1 | {{cmd:DIMSCALE}} |

Každá veľkosť sa násobí **celkovou mierkou**. Veľkosti nastavte tak, ako ich chcete na papieri (text 2.5 mm), a celkovú mierku nastavte na mierku vykreslenia (50 pre 1:50). Text má potom výšku 2.5 × 50 = 125 jednotiek výkresu, čo sa vykreslí ako 2.5 mm.

:::note
Pomenované štýly kót spravuje {{cmd:DIMSTYLE}}: pozri sekciu nižšie. Každá kóta si tiež ponecháva nastavenia, s ktorými bola vytvorená, takže jednu kótu môžete stále zmeniť samostatne v {{ui:Vlastnosti}}.
:::

## Nastavenie veľkostí pre nové kóty

Ktorýkoľvek spôsob nižšie mení len kóty, ktoré vytvoríte neskôr.

### V paneli Aktuálne nastavenia

1. Stlačte {{key:Esc}}, aby nič nebolo vybrané. Na karte {{ui:Model}} pravý panel má nadpis {{ui:Aktuálne nastavenia}}.
2. Posuňte panel nadol k {{ui:Nové kóty}}, za riadky hladiny, farby, jednotiek a {{ui:Hladina 0}} (na malej obrazovke začína pod spodným okrajom). Kliknite do poľa {{ui:Celková mierka}}, napíšte `50` a stlačte {{key:Enter}}.
3. Ak chcete iné hodnoty, nastavte {{ui:Výška textu}}, {{ui:Veľkosť šípky}} a {{ui:Desatinné miesta}} rovnakým spôsobom.

Stavový riadok potvrdí každú, napríklad "Celková mierka pre nové kóty: 50".

### Na príkazovom riadku

1. Napíšte `DIMSCALE` a stlačte {{key:Enter}}.
2. Pri `Enter new value for DIMSCALE <1>` napíšte `50` a stlačte {{key:Enter}}.

História potvrdí "DIMSCALE = 50. Nové kóty ju použijú; ak chcete zmeniť existujúce, vyberte ich." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} a {{cmd:DIMEXO}} fungujú rovnako. Pri výzve stlačte {{key:Enter}}, ak chcete ponechať aktuálnu hodnotu.

### Stopy a palce v kótach

Nové kóty používajú formát dĺžky výkresu: nastavte ho pomocou {{ui:Formát dĺžky}} v {{ui:Aktuálne nastavenia}} alebo {{cmd:UNITS}} (pozri [Stopy a palce](topic:units-papers-scales#feet-and-inches-and-fractions)) a ďalšia kóta zobrazí `12'-6 1/2"`. {{cmd:DIMLUNIT}} nastaví len formát kót (2 desatinný, 3 inžiniersky, 4 architektonický, 5 zlomkový). Pre kótu, ktorú ste už vytvorili, ju vyberte a zvoľte {{ui:Formát}} v {{ui:Vlastnosti}}; pri zlomkovom formáte pole {{ui:Zlomok}} zadáva mocninu dvoch (4 = 1/16).

## Kóty v mm, cm, m alebo km

Kóta sa meria v jednotkách výkresu. Namiesto toho môže tú dĺžku zapísať v milimetroch, centimetroch, metroch alebo kilometroch, s jednotkou za číslom: stena 1250 mm sa zobrazí ako `1250 mm`, `125 cm`, `1.25 m` alebo `0.00125 km`.

1. Najprv nastavte {{ui:Jednotky}} výkresu v {{ui:Aktuálne nastavenia}} (pozri [Jednotky, veľkosti papiera a mierky](topic:units-papers-scales#drawing-units)), aby CadCraft vedel, čo je jedna jednotka výkresu. Výkres bez jednotiek sa číta ako milimetre a {{cmd:DIMTEXTUNIT}} to uvedie.
2. Pre nové kóty: stlačte {{key:Esc}}, aby nič nebolo vybrané, a pod {{ui:Nové kóty}} zvoľte {{ui:Jednotky v texte}}: {{ui:Jednotky výkresu}}, `mm`, `cm`, `m` alebo `km`.
3. Pre kóty, ktoré ste už vytvorili: vyberte ich a v {{ui:Vlastnosti}} › {{ui:Primárne jednotky}} zvoľte {{ui:Jednotky v texte}}.

Alebo napíšte {{cmd:DIMTEXTUNIT}} (`DTU`) a odpovedzte `D`, `MM`, `CM`, `M` alebo `KM`: keď sú kóty vybraté, zmení ich (jeden krok späť), keď nie je nič vybraté, nastaví nové kóty.

{{ui:Desatinné miesta}} ({{cmd:DIMDEC}}) stále nastavuje, koľko desatinných miest sa zobrazí: pri metroch a 3 desatinných miestach sa 1234 mm zobrazí ako `1.234 m`. Text sa zapisuje ako desatinné číslo. Na liste sa kóty merajú v papierovej jednotke listu (milimetre alebo palce).

Uložený DWG alebo DXF uchová voľbu ako mierku merania kóty (DIMLFAC) a príponu (DIMPOST, ` m`), takže ju iné programy zobrazia rovnako. Ak neskôr zmeníte {{ui:Jednotky}} výkresu, kóty zapísané v mm, cm, m alebo km sa prispôsobia, takže stále uvádzajú správnu dĺžku. {{ui:Nastavené ručne (mierka alebo prípona)}} znamená, že {{ui:Mierka merania}} alebo prípona kóty bola nastavená iným spôsobom; zvoľte jednotku, aby ich nahradila.

## Zmena už vytvorených kót

1. Kliknite na jednu kótu. Nadpis pravého panela je {{ui:Kóta}}.
2. Nastavenia sú v sekciách; posúvajte panel nadol, aby ste sa dostali k ďalším:
   - {{ui:Všeobecné}}: {{ui:Štýl kót}}
   - {{ui:Geometria}}: {{ui:Druh}} a {{ui:Nameraná hodnota}} (len na čítanie)
   - {{ui:Text}}: {{ui:Prepísanie textu}} a {{ui:Výška textu}}
   - {{ui:Čiary a šípky}}: {{ui:Veľkosť šípky}}
   - {{ui:Prispôsobenie}}: {{ui:Celková mierka}}
   - {{ui:Primárne jednotky}}: {{ui:Desatinné miesta}}
3. Napíšte novú hodnotu a stlačte {{key:Enter}}.

Kóta sa okamžite prekreslí. Pri uhlových kótach nastavuje {{ui:Desatinné miesta (°)}} desatinné miesta uhla.

:::note
Keď je vybraných viacero kót, panel zobrazí riadky, ktoré majú spoločné, a hodnota, ktorá sa medzi nimi líši, sa zobrazí ako {{ui:Rôzne}}. Hodnota, ktorú napíšete, zmení každú vybranú kótu v jednom kroku, takže jedno {{key:Mod+Z}} ich vráti všetky späť.
:::

## Kóty z otvorených výkresov

Kóta z otvoreného DWG alebo DXF sa zobrazí presne tak, ako ju nakreslil iný program. Jej panel hovorí: "Zobrazené tak, ako ju nakreslil program, ktorý ju vytvoril. Ak ju zmeníte, CadCraft ju nakreslí znova vo vlastnom štýle." Akonáhle zmeníte akúkoľvek hodnotu, posuniete úchyt alebo presuniete kótu, CadCraft ju prekreslí vlastnými šípkami a písmom, s veľkosťami, ktoré prečítal zo súboru.

Niektoré kóty sa dajú iba prečítať tak, ako sú nakreslené, nie ako upraviteľné kóty; panel potom zobrazí "Nakreslené z" a názov bloku a políčko "O tomto súbore" ich spočíta.

## Časté chyby

- **Zmena DIMSCALE nič nezmenila na obrazovke.** Nastavenie je pre nové kóty. Vyberte existujúce a zmeňte {{ui:Celková mierka}} v paneli.
- **Desatinné miesta zobrazia menej číslic, než je nastavené.** Koncové nuly sa vynechajú: 2 desatinné miesta zobrazia `1250` a `1250.5`, nie `1250.00`.
- **Text má správnu výšku na papieri vo výreze, ale pri vykreslení modelu je nesprávny.** Celková mierka sa musí zhodovať s mierkou vykreslenia. Vykreslenie na {{ui:Prispôsobiť papieru}} dá nezvyčajnú mierku; vyberte štandardnú mierku v dialógovom okne vykreslenia.
- **Jednotky ako mm alebo m v texte.** Zvoľte {{ui:Jednotky v texte}} (pozri [Kóty v mm, cm, m alebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Pre akékoľvek iné slovo za číslom ho napíšte do prepísania: `<> TYP.`.

## Pomenované štýly kót

Napíšte `DIMSTYLE` (`D`), aby sa otvoril {{ui:Správca štýlov kót}}. Zobrazí štýly výkresu, koľko kót používa každý a ktorý je aktuálny. **Standard** je vždy k dispozícii.

- {{ui:Nastaviť aktuálny}}: nové kóty používajú nastavenia tohto štýlu a nesú jeho názov.
- {{ui:Nový…}}: nový štýl, ktorý začína ako kópia toho, ktorý zvolíte.
- {{ui:Zmeniť…}}: tie isté polia ako časť kóty v {{ui:Vlastnosti}} (čiary a šípky, text, prispôsobenie, jednotky, alternatívne jednotky, tolerancie). Stlačte {{ui:OK}} a štýl sa zmení **a každá kóta, ktorá ho používa, sa zmení s ním**, nastavenie po nastavení. Nastavenie, ktoré ste zmenili len na jednej kóte, zostane, ak štýl túto položku nezmenil.
- {{ui:Premenovať…}} a {{ui:Zmazať}}: Standard sa nedá premenovať ani zmazať, rovnako ako aktuálny štýl alebo štýl, ktorý kóty používajú.
- {{ui:Porovnať…}}: čo sa líši medzi dvoma štýlmi.
- {{ui:Použiť na vybrané}}: najprv vyberte kóty; prevezmú nastavenia štýlu a jeho názov.

`-DIMSTYLE` robí to isté na príkazovom riadku: `Restore`, `Save` (aktuálne nastavenia vrátane toho, čo ste napísali pomocou {{cmd:DIMTXT}} a ďalších, pod názvom), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Štýly sa ukladajú do DWG alebo DXF (do tabuľky štýlov kót) a čítajú sa zo súborov, ktoré otvoríte. *Aktuálny* štýl sa neukladá: výkres sa otvorí so štýlom Standard ako aktuálnym. Standard si ponecháva svoje nastavenia, keď je aktuálny iný štýl.

## Zmena textu kóty a predlžovacích čiar

{{cmd:DIMEDIT}} (`DED`) pracuje s vybranými kótami: **Domov** vráti text tam, kam ho umiestňuje štýl, **Nový** napíše iný text (`<>` znamená nameranú hodnotu), **Otočiť** otočí text, **Šikmý** nakloní predlžovacie čiary dĺžkových a zarovnaných kót na uhol, ktorý napíšete (pre žiadny stlačte {{key:Enter}}). {{cmd:DIMTEDIT}} presunie text na **Vľavo**, **Vpravo** alebo **Stred** kótovacej čiary, alebo ho otočí (**Uhol**), alebo ho pošle **Domov**. Text vždy sedí na kótovacej čiare: nedá sa presunúť na voľné miesto.
