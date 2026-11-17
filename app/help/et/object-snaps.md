---
title: Haakumine objektide punktidele
summary: Kasuta objektihaakeid, Ortho'd ja ruudustikku, et hiirega valida täpseid otspunkte, keskpunkte ja lõikepunkte.
keywords: osnap, objektihaake, otspunkt, keskkoht, keskpunkt, lõikepunkt, risti, veerand, lähim, sõlm, sisestus, ortho, ruudustik, f3, f8, f7, polaarjälgimine, polaar, polarang, objektihaakejälgimine, otrack, jälgimine, f10, f11
from: 3cf17f94
---

## Mida sa teed

Ristkülik kahe diagonaaliga, ring, mille keskpunkt on nende ristumiskohas, ja joon ühe külje keskelt ringini. Iga punkt valitakse hiirega ja iga punkt on täpne.

## Kuidas haakumine töötab

Kui käsk küsib punkti, otsib CadCraft haakepunkte umbes 10 piksli kaugusel ristkursorist. Kui leiab ühe, ilmuvad märgis ja silt (nt „Otspunkt“, „Lõikepunkt“) ning klõps langeb **täpselt** sellele punktile, mitte sinna, kus ristkursor on.

{{ui:Püüdmine}} olekuribal on vajutatud, kui haakumine on sisse lülitatud. {{key:F3}} lülitab need sisse ja välja.

Haakumisi, mida saad kasutada, on:

| Haakumine | Jõuab |
|---|---|
| Otspunkt | Joonte, kaarte ja murdjoonelõikude otsad |
| Keskkoht | Joonte, kaarte ja murdjoonelõikude keskkoht |
| Keskpunkt | Ringide ja kaarte keskpunkt ning murdjoone kaarlõikude keskpunkt |
| Veerand | Ringide ja kaarte 0, 90, 180 ja 270 kraadi punktid |
| Lõikepunkt | Koht, kus kaks objekti lõikuvad |
| Risti | Punkt objektil, mis on viimase punkti suhtes risti (vajab aluspunkti) |
| Puutuja | Punkt ringil või kaarel, kuhu viimasest punktist tulev joon just puudutab. Kui viimast punkti veel pole (joone esimene punkt), ütleb märgis „edasilükatud“: puutepunkt arvutatakse välja, kui järgmine punkt on teada, nii et puutujast puutujani joon puudutab mõlemat ringi |
| Lähim | Lähim punkt mis tahes objektil |
| Sõlm | Punktobjektid |
| Sisestus | Teksti ja plokiviidete sisestuspunkt |

Kõik on vaikimisi sisse lülitatud, välja arvatud Puutuja ja Lähim. Lähim kipub võitma, kui tahad midagi muud; lülita Puutuja sisse, kui seda vajad.

## Vali oma haakumised

1. Klõpsa olekuribal nupu {{ui:Püüdmine}} kõrval olevat väikest noolt. Avaneb loend {{ui:Objektihaake}}.
2. Märgi või eemalda linnukesi haakumistelt. Muudatused rakenduvad kohe.
3. Klõpsa noolt uuesti, et loend sulgeda.

CadCraft mäletab sinu valikut ning sätteid {{ui:Ruudustik}}, {{ui:Ortho}} ja {{ui:Püüdmine}} selles brauseris.

## Sammud

1. Sisesta `REC` ja vajuta {{key:Enter}}.
2. Sisesta `0,0` ja vajuta {{key:Enter}}.
3. Sisesta `@4000,3000` ja vajuta {{key:Enter}}. Ilmub ristkülik.
4. Klõpsa {{ui:Ulatus}}.
5. Sisesta `L` ja vajuta {{key:Enter}}.
6. Liiguta ristkursor vasakule alumisele nurgale. Märgis näitab „Otspunkt“. Klõpsa.
7. Liigu ülemisele parempoolsele nurgale, kuni ilmub „Otspunkt“. Klõpsa.
8. Vajuta {{key:Enter}}, et joon lõpetada.
9. Vajuta uuesti {{key:Enter}}, et korrata {{cmd:LINE}}, ja joonista teine diagonaal alumisest parempoolsest nurgast ülemisse vasakpoolsesse samamoodi.
10. Sisesta `C` ja vajuta {{key:Enter}}, et alustada ringi.
11. Liiguta ristkursor kohta, kus diagonaalid lõikuvad. Märgis näitab „Lõikepunkt“. Klõpsa.
12. Sisesta `800` ja vajuta {{key:Enter}}.

Peaksid nägema ringi, mille keskpunkt on täpselt lõikekohal.

13. Sisesta `L` ja vajuta {{key:Enter}}.
14. Liigu ristküliku vasaku külje keskele, kuni ilmub „Keskkoht“. Klõpsa.
15. Liiguta ristkursor ringile, selle vasakule küljele. Märgis näitab „Risti“ või „Veerand“; siin on need sama punkt. Klõpsa.
16. Vajuta {{key:Enter}}.

Uus joon läheb vasaku külje keskelt ja peatub täpselt ringil.

## Jäta haakumine ühe klõpsu jaoks vahele

Hoia klõpsamise ajal all {{key:Shift}}. Objektihaakeid ei arvestata selle klõpsu jaoks ning punkt läheb täpselt sinna, kus ristkursor on (või mööda Ortho suunda, kui Ortho on sees).

## Ortho

{{ui:Ortho}} ({{key:F8}}) hoiab järgmise punkti aluspunktist sirgelt risti üle või sirgelt üles ja alla. See kehtib klõpsudele ja otsesele kauguse sisestusele (reale sisestatud paljas arv). Objektihaaked on Orthost tugevamad: kui haakumismärgis näitab, läheb klõps haakumisele.

## Polaarjälgimine

{{ui:Polaar}} ({{key:F10}}) on Ortho rohkemate nurkade jaoks. Kui käsul on aluspunkt (joone viimane punkt, teisaldamise aluspunkt), joondub osuti alati, kui jõuab lähedale kiirele, mis algab sellest polaarsammu kordsel nurgal: kuvatakse punktiirjoon ja ristkursori juures olev silt `Polar: 1200 < 30°`. Klõpsa, et kasutada seda punkti, või sisesta kaugus: `1200` läheb täpselt 1200 mööda kiirt.

Samm on 90° kuni sa seda muudad: sisesta {{cmd:POLARANG}}, vajuta {{key:Enter}} ja sisesta `30` (või 45, 22.5, 15 …). Polaar ja Ortho välistavad teineteist: ühe sisselülitamine lülitab teise välja.

## Objektihaakejälgimine

{{ui:Jälgi}} ({{key:F11}}) joondab osuti haakepunktidega, millele oled peatunud, nii et saad valida punkti ühe nurga kõrgusel ja teise kohal, joonistamata abijooni.

1. Lülita sisse {{ui:Püüdmine}} ja {{ui:Jälgi}} ning alusta käsku, mis küsib punkti (`L`).
2. Hoia osutit haakepunkti kohal, näiteks nurga kohal, pool sekundit, ilma klõpsamata. Väike rist märgib seda: see on võetud. Hoia uuesti, et see maha panna.
3. Liiguta osutit sellest otse eemale, horisontaalselt või vertikaalselt. Punktiirjoon järgib osutit ja silt näitab `Track: 600 < 90°`. Klõpsa või sisesta kaugus.
4. Võta teine punkt ja liigu sinna, kus ühe kaudu läbiv vertikaal ja teise kaudu läbiv horisontaal kohtuvad: osuti haakub sellele ristumisele (`Track: where two lines meet`).

Kui {{ui:Polaar}} on samuti sees, jälgivad võetud punktid iga polaarnurka. Kuni seitse punkti hoitakse alles, kuni käsk lõpeb. {{key:Shift}} lülitab jälgimise ühe klõpsu jaoks välja, nagu haakumised.

## Ruudustik

{{ui:Ruudustik}} ({{key:F7}}) näitab joonte ruudustikku joonise taga, iga viienda joone juures paksemalt; vahe muutub, kui suumid. See on ainult juhend, kuni lülitad sisse {{ui:Ruudustikule haakumine}} ({{key:F9}}): siis langevad klõpsud lähimale ruudustikupunktile, kui objektihaake punkti enne ei võta.

## Funktsiooniklahvid sinu arvutis

{{key:F9}} on Ruudustikule haakumine, {{key:F10}} on Polaar ja {{key:F11}} on Jälgi.

:::mac
Macil juhivad F3, F7, F8 ja F9 tavaliselt Mission Controli ja meediat. Hoia klahvi all **fn** või lülita sisse standardsed funktsiooniklahvid, nagu kirjeldatud jaotises [Klahvid, hiired ja puuteplaadid](common:keys). Olekuriba nupud töötavad alati.
:::

:::firefox
Firefoxis on F7 ka klahv kursorisirvimiseks. Kui Firefox küsib, kas kursorisirvimine sisse lülitada, vali **Ei**. Kasuta nuppu {{ui:Ruudustik}}, kui küsimus tuleb uuesti.
:::

:::touch
Puuteekraanil ei ole hõljumist, nii et haakumismärgis ilmub ainult seal, kus sõrm puudutab. Suumi väikeste sihtmärkide jaoks lähemale või sisesta koordinaadid.
:::

## Levinud vead

- **Klõps läks valesse punkti.** Vaata enne klõpsamist märgise silti: Otspunkt võidab Keskkohta, kui mõlemad on lähedal. Suumi sisse või eemalda linnukesed haakumistelt, mida ei vaja.
- **Märgist ei ilmu.** {{ui:Püüdmine}} on väljas, või soovitud haakumine on linnukeseta, või objekt on kihil, mis on välja lülitatud või külmutatud.
- **Haakumised haaravad valesti keerukas joonises.** Suumi sisse. Haakumise kaugus mõõdetakse ekraanipikslites, nii et sisse suumimine teeb selle joonises väiksemaks.
- **Oodatakse, et Shift annab sirge joone.** CadCraftis lülitab Shift haakumised ühe klõpsu jaoks välja. Sirgete joonte jaoks kasuta {{ui:Ortho}}.
- **Oodatakse, et punktid langevad ruudustikupunktidele.** Lülita sisse {{ui:Ruudustikule haakumine}} ({{key:F9}}) või sisesta ümmargused arvud koordinaatidena.
