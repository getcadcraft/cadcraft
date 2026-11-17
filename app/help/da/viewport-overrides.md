---
title: Klassetilsidesættelser i viewport
summary: Skjul en klasse på et ark, eller giv den en anden farve, linjetykkelse eller udfyldning i kun ét viewport; modellen og de andre viewports forbliver, som de er.
keywords: viewport, klassetilsidesættelse, viewport-tilsidesættelse, skjul klasse i viewport, ark, layout, VPLAYER, plot, Vectorworks
from: c1a2b51f
---

Et ark viser ofte den samme model mere end én gang: en plan med møblerne og en plan uden dem, eller en belysningsplan, hvor kun lyskilderne er i farve. En klassetilsidesættelse i viewport ændrer, hvordan én [klasse](topic:classes) vises, **kun i dette viewport**.

1. Åbn arket, og vælg ét viewport.
2. Åbn panelet Klasser (`CLASSES`), og vælg klassen.
3. Under {{ui:Dette viewport}} sætter du flueben i {{ui:Skjul i dette viewport}}, eller angiver {{ui:Farve her}}, {{ui:Linjetykkelse her}} eller {{ui:Udfyldning her}}.

Listen nedenfor viser hver klasse, dette viewport ændrer. {{ui:Ryd dette viewports tilsidesættelser}} fjerner dem alle. Hver ændring er ét fortrydelsestrin.

## Hvad en tilsidesættelse ændrer

- **Skjul** skjuler klassen og alle klasser under den i dette viewport.
- **Farve, linjetykkelse og udfyldning** ændrer objekterne i klassen, hvis værdi ikke er angivet på selve objektet, altså objekter, der får den fra klassen eller laget. Et objekt med sin egen farve beholder den, ligesom ved en lagtilsidesættelse i viewport.

Tilsidesættelser vises på skærmen og i plot og PDF-filer, også et arksæt udgivet til PDF. De virker sammen med viewportets frosne lag og lagtilsidesættelser.

Tilsidesættelser gemmes med tegningen i DWG og DXF (sammen med klasselisten, i blokken `CADCRAFT_CLASSES`) og vender tilbage på samme viewport, når filen åbnes i CadCraft.
