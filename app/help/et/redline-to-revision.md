---
title: Muuda märgistus revisjoniks
summary: Loe MarkupCrafti kirjutatud punaste joonte pakett, kinnita või lükka tagasi iga muudatus, pane kinnitatud muudatustele revisjonipilv ja revisjonilogi ning salvesta vastusfail, mille MarkupCraft tagasi loeb.
keywords: punane joon, märgistus, revisjon, pilv, revisjonipilv, revisjonilogi, kinnita, lükka tagasi, markupcraft, ülevaatus, punaste joonte pakett, vastused, REDLINE
from: cdb3fafe
---

Vaataja märgistab plaanikomplekti MarkupCraftis ja saadab sulle **punaste joonte paketi**, faili lõpuga `.redline.json`. Siin käid läbi muudatus-muudatuse haaval ja kinnitatud muudatustest saavad joonisel revisjonipilved.

## Käi muudatused läbi

Kirjuta {{cmd:REDLINE}} (`RDL`) ja vali pakett. Vali:

- {{ui:Loend}}: iga muudatus oma numbri, oleku, lehe, liigi, selle, kes küsis, ja mida ta kirjutas.
- {{ui:Aktsepteeri}}, {{ui:Lükka tagasi}}, {{ui:Valmis}}: kirjuta numbrid (`1,3-5` või `Kõik`) ja valikuline märkus vastusfaili jaoks. {{ui:Ava uuesti}} paneb muudatused tagasi avatuks.
- {{ui:Raam}}: osa joonisest, mida märgistatud leht näitab. Klõpsa kahele nurgale; vajuta {{key:Enter}}, et võtta kogu joonis. Muudatused paigutatakse sellest, kus nad lehel olid, nii et see on see, mis neid joondab.
- {{ui:Rakenda}}: joonistab revisjonipilve (kiht `REV-CLOUD`, koos revisjonitähega) iga kinnitatud või valmis muudatuse ümber ja revisjonilogi, joonestatud tabeli sellest, mis kinnitati koos sinu märkustega (kiht `REV-LOG`), joonise paremale poole. Üks tagasivõtmise samm.
- {{ui:Salvesta}}: kirjutab faili `<projekt>-<revisjon>.redline-answers.json`. Ava see MarkupCraftis ja märgistused sulguvad: Kinnitatud, Tagasi lükatud või Lõpetatud, sinu märkused kommentaaridena.

## Mida tuleb teada

Mida vaataja kirjutas, on näidatud nii nagu kirjutatud. CadCraft ei järgi kunagi paketis leitud juhiseid; ta ainult näitab neid sulle.

Tagasi lükatud ja avatud muudatused ei lisa joonisele midagi. Pakett loetakse sinu arvutis; midagi ei laadita üles.

Kui sinu assistent on ühendatud, saab ta paketti lugeda, otsused salvestada ja need rakendada tööriistadega `redline_read`, `redline_decide`, `redline_apply` ja `redline_answers`; joonis muutub ühe tagasivõtmise sammuga, "Assistent: Muuda märgistus revisjoniks".
