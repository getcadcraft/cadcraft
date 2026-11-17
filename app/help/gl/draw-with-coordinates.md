---
title: Debuxar con coordenadas
summary: Debuxe o contorno exacto dun piso escribindo coordenadas absolutas, relativas e polares, e por introdución de distancia directa.
keywords: liña, pline, polilínea, coordenadas, relativa, polar, absoluta, distancia directa, @, escribir puntos, exacto, orto
from: 19e82350
---

## O que vai facer

O contorno dunha habitación en forma de L, de 6000 por 4500 cun recorte de 2000 por 1500, debuxado exactamente, máis un muro a 30 graos. Vai usar as catro formas de escribir un punto. Traballe en milímetros: unha unidade de debuxo equivale a un milímetro.

A referencia rápida de todos os formatos está en [Introdución de coordenadas e distancias](topic:coordinate-entry).

## Antes de comezar

1. Abra CadCraft. Se hai un debuxo aberto, prema primeiro {{ui:Nova}}.
2. Prema {{key:Esc}} para que non haxa nada seleccionado. O panel dereito le {{ui:Configuración actual}}.
3. Estableza {{ui:Unidades}} en {{ui:Milímetros}}. Non se redimensiona nada; isto só indica ás follas e aos trazados o que significa unha unidade.

## Coordenadas absolutas: o primeiro punto

Unha coordenada absoluta é unha posición medida desde a orixe, escrita como `x,y`.

1. Escriba `L` e prema {{key:Enter}}. A indicación di `Specify first point:`.
2. Escriba `0,0` e prema {{key:Enter}}.

A liña xa se estira desde a orixe ata a cruceta. As coordenadas da barra de estado mostran a distancia e o ángulo desde o punto inicial mentres move o cursor.

## Coordenadas relativas: @dx,dy

Unha coordenada relativa escríbese como `@dx,dy`: canto cara á dereita, canto cara arriba, desde o último punto. Os números negativos van cara á esquerda ou cara abaixo.

3. Escriba `@6000,0` e prema {{key:Enter}}. Unha liña de 6000 vai cara á dereita.
4. Escriba `@0,3000` e prema {{key:Enter}}.
5. Escriba `@-2000,0` e prema {{key:Enter}}.
6. Escriba `@0,1500` e prema {{key:Enter}}.

Debe ver catro liñas conectadas subindo polo lado dereito da habitación.

## Introdución de distancia directa: un número sen máis

Cando escribe un único número, CadCraft avanza esa distancia na dirección da cruceta. Active {{ui:Orto}} para que a dirección se axuste á horizontal ou á vertical.

7. Prema {{key:F8}}, ou prema {{ui:Orto}} na barra de estado. A barra de estado di "Orto activado".
8. Mova a cruceta á esquerda do último punto. A liña elástica mantense horizontal.
9. Escriba `4000` e prema {{key:Enter}}. A liña vai 4000 cara á esquerda.
10. Mova a cruceta por debaixo do último punto.
11. Escriba `4500` e prema {{key:Enter}}. Volve ao punto inicial.
12. Prema {{key:Enter}} na indicación baleira para terminar o comando.

:::mac
F8 pode controlar a reprodución de medios nun teclado de Mac. Manteña premida **fn** e prema F8, ou prema {{ui:Orto}}. Consulte [Teclas, ratos e trackpads](common:keys).
:::

Agora ten un contorno pechado en forma de L feito con seis liñas separadas.

13. Prema {{ui:Extensións}} para ver todo.

## Coordenadas polares: @distancia<ángulo

Unha coordenada polar escríbese como `@distancia<ángulo`. Os ángulos están en graos, medidos en sentido antihorario desde a dirección X positiva: 0 é a dereita, 90 é arriba, 180 é a esquerda, 270 (ou -90) é abaixo.

14. Escriba `L` e prema {{key:Enter}}.
15. Escriba `6000,0` e prema {{key:Enter}} para comezar na esquina inferior dereita.
16. Escriba `@2500<-30` e prema {{key:Enter}}. Unha liña de 2500 sae da esquina, dirixíndose cara abaixo e á dereita, a 30 graos por debaixo da horizontal.
17. Prema {{key:Enter}} para terminar o comando.

Unha coordenada polar sen `@`, como `2500<30`, mídese desde a orixe e non desde o último punto.

## O mesmo contorno como unha polilínea

Seis liñas separadas valen para moitos traballos, pero unha polilínea é un só obxecto: despraza, mídese e selecciónase como un todo. Use {{cmd:PLINE}} coa mesma entrada.

1. Escriba `PL` e prema {{key:Enter}}.
2. Escriba `0,-6000` e prema {{key:Enter}} para comezar por debaixo do primeiro contorno.
3. Escriba `@6000,0` e logo prema {{key:Enter}}.
4. Escriba `@0,3000` e logo prema {{key:Enter}}.
5. Escriba `@-2000,0` e logo prema {{key:Enter}}.
6. Escriba `@0,1500` e logo prema {{key:Enter}}.
7. Escriba `@-4000,0` e logo prema {{key:Enter}}.
8. Escriba `C` e prema {{key:Enter}}. A polilínea pechase e o comando termina.
9. Prema o novo contorno. O panel dereito mostra "Polilínea", os seus {{ui:Vértices}}, a {{ui:Lonxitude}} e, por estar pechada, a súa {{ui:Superficie}}.

A superficie debe ler 24000000 (milímetros cadrados, que son 24 metros cadrados).

## Opcións durante o debuxo

- En {{cmd:LINE}} e {{cmd:PLINE}}, escriba `U` e prema {{key:Enter}} para desfacer o último segmento sen saír do comando.
- En {{cmd:LINE}}, `C` pecha ata o primeiro punto cando hai polo menos dous segmentos.
- En {{cmd:PLINE}}, `A` cambia a segmentos en arco (cada arco continúa suavemente desde o segmento anterior), e `L` volve a liñas. No modo arco, a opción de pechar é `CL`.
- Prema {{key:Enter}} en `Specify first point:` en {{cmd:LINE}} para comezar desde o último punto indicado, e así seguir onde parou.

## Erros frecuentes

- **Escribir `6000,0` cando quería `@6000,0`.** Sen `@`, o punto mídese desde a orixe e non desde o último punto, e a liña vai a un lugar inesperado. En CadCraft, `x,y` é sempre absoluto. Escriba `U` e prema {{key:Enter}} para desfacelo.
- **Unha coma usada como punto decimal.** Os decimais usan o punto: `1250.5`. A coma sempre separa X de Y.
- **A distancia directa foi no sentido equivocado.** Un número sen máis segue a cruceta. Mova a cruceta cara ao lado que quere antes de premer {{key:Enter}}, e active {{ui:Orto}} para liñas rectas.
- **"Point or option keyword required."** CadCraft non entendeu o que escribiu. Comprobe se hai espazos dentro do número ou falta unha coma, e escríbao de novo.
- **Pés e polgadas.** CadCraft só le números simples. Escriba `150` para 12'-6" nun debuxo en polgadas, ou `12.5` nun debuxo en pés.
