---
title: Bendillinn hoppar eða seinkar yfir teikningunni
summary: Hvað á að gera þegar krosshárið fylgir ekki músinni mjúklega, á eldri eða hægvirkari tölvu.
keywords: bendill hoppar, seinkun bendils, hægt krosshár, ruglaður bendill, gömul tölva, gamalt skjákort, samþætt skjástýring, vélbúnaðarhröðun, mýkri bendill, hæg fartölva
from: 39dc9057
---

CadCraft keyrir í vafranum (CadCraft Studio er líka vafrasýn), þannig að ekkert í því er smíðað fyrir eitt skjákort eða annað. Krosshárið er teiknað af forritinu, sem þýðir að það getur aðeins hreyfst jafn hratt og forritið getur teiknað einn ramma.

## Láttu CadCraft draga úr aukahlutunum

1. Opnaðu {{ui:Stillingar}} (gírinn efst hægra megin) og vertu áfram á flipanum {{ui:CadCraft}}.
2. Veldu {{ui:Mýkri bendill á hægvirkum tölvum}}.
3. Veldu {{ui:Kveikt}}.

Þegar kveikt er á þessu er krosshár tölvunnar þinnar notað í stað teiknaða krosshársins og valreitsins (líka allsherjar krosshárið), og hluturinn undir bendlinum lýsist upp þegar bendillinn hvílir í stað þess að gera það meðan hann hreyfist. Hlutasmellur, rakning og gúmmíbandið virka eins og áður.

{{ui:Sjálfvirkt}} er það sem CadCraft byrjar á: það fylgist með því hversu langan tíma rammar taka á meðan þú hreyfir bendilinn og kveikir á þessu sjálft þegar þeir haldast hægir í nokkrar sekúndur. Það lætur þig vita einu sinni þegar það gerir það. {{ui:Slökkt}} heldur teiknaða krosshárinu, sama hver hraðinn er.

## Ef það er enn hægt

- Athugaðu hvort vélbúnaðarhröðun sé kveikt í vafranum þínum: opnaðu `chrome://gpu` (eða `edge://gpu`) í nýjum flipa. Ef fyrstu línurnar segja "Software only" eða "Disabled", teiknar vafrinn án skjákortsins. Uppfærsla á skjákortsreklanum lagar það oft.
- Lokaðu öðrum þungum flipum og forritum og prófaðu minni vafragluggi.
- Segðu okkur frá í gegnum {{ui:Hjálp}}, {{ui:Tilkynna vandamál}}: segðu hvort þú notir vafrann eða CadCraft Studio, útgáfu þess og hvað gpu-síðan segir.
