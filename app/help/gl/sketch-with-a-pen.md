---
title: Esbozar a lapis e obter xeometría precisa
summary: Debuxe a man alzada cun lapis, rato ou dedo e cada trazo convértese nunha liña, círculo, arco, rectángulo ou polilínea limpa ao levantar o lapis, enganchada ao que xa está debuxado, co seu tamaño listo para escribir enriba.
keywords: esbozo, lapis, estilete, man alzada, dedo, limpar, preciso, enganche, SKETCHLIVE, SKETCHFIX, tamaño, escribir enriba, presión, grosor de liña, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Inicie {{cmd:SKETCHLIVE}} (ou escolla **Debuxar › Máis › Esbozar a lapis**) e debuxe un trazo premendo e arrastrando. Ao levantar o lapis, CadCraft le o que quixo dicir e pono no debuxo:

| O seu trazo | O que obtén |
|---|---|
| Case recto | Unha liña. Unha liña case horizontal ou vertical faise exactamente horizontal ou vertical. |
| Pechado e redondo | Un círculo |
| Parte dunha forma redonda | Un arco |
| Pechado con catro esquinas en ángulo recto | Un rectángulo |
| Calquera outra cousa | Unha polilínea con lados cadrados |

Os extremos dun trazo atráense ao extremo máis próximo do que xa está debuxado, así que un muro esbozado encontra o muro ao seu lado.

## Escribir enriba do tamaño

Despois de cada trazo a liña de comandos mostra o seu tamaño (a **lonxitude** dunha liña, o **raio** dun círculo ou arco, a **largura** dun rectángulo) como predeterminado. Prema {{key:Enter}} para conservalo, ou escriba un número ou unha lonxitude como `12'6"` para substituílo. Unha liña conserva o seu primeiro extremo, un círculo o seu centro, un rectángulo a súa primeira esquina.

Prema {{key:Enter}} nunha indicación baleira para rematar, ou escriba `U` para retirar o último trazo. Toda a sesión é un só paso de desfacer.

## Limpar varios trazos á vez

{{cmd:SKETCHFIX}} recolle trazos e fai que todos sexan precisos ao premer {{key:Enter}}, o que axusta unha disposición en bruto debuxada rapidamente.

:::note
Todo se calcula no seu computador con regras, sen modelo e sen enviar nada a ningún lugar.
:::

## A presión fixa o grosor de liña

Onde o lapis está activado para as aplicacións (Configuración › Global › Dispositivos de entrada › Lapis), un trazo debuxado cun lapis leva cada punto que deu o lapis e a súa presión. Un trazo lixeiro fai un obxecto fino e un firme un grosor; a presión media do trazo escolle 0,18, 0,25, 0,35 ou 0,50 mm, e a liña de comandos indica cal. Os trazos feitos cun rato ou un dedo toman o grosor de liña actual como antes. {{cmd:PENPRESSURE}} desactiva isto (ou volve activalo); a escolla consérvase neste navegador.
