---
title: Cotar un plano
summary: Engada cotas lineais, alineadas, angulares, de raio e de diámetro, encadéeas con Continuar e Cota de base e substitúa o texto.
keywords: cota, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, cadea, cadea de cotas, anotar, ferramenta de cota, onde, atopar, barra de ferramentas, medir, mm, cm, m, km, unidades
from: 9ee65123
---

## O que vai facer

Un cuarto cotado: anchura e altura totais, unha cadea de cotas ao longo dun muro, un muro inclinado, unha esquina curva e un ángulo.

Antes de comezar, lea [Definir tamaños das cotas](topic:dimension-settings) se o debuxo é grande: o texto das cotas mide por defecto 2.5 unidades do debuxo de altura, o que é diminuto nun debuxo en milímetros. Para os pasos seguintes, escriba `DIMSCALE`, prema {{key:Enter}}, escriba `50` e prema {{key:Enter}} primeiro.

## Onde están as ferramentas de cota

Co estilo de menú de CadCraft (co que arranca CadCraft), as ferramentas de cota están na barra de ferramentas sobre o debuxo, no grupo {{ui:Anotar}}: {{ui:Lineal}}, {{ui:Alineada}}, {{ui:Ángulo}}, {{ui:Raio}} e {{ui:Diámetro}}. O menú {{ui:Máis}} do grupo ten {{ui:Continuar cota}} e {{ui:Cota de base}}. Pase o punteiro sobre un botón para ver o que fai.

- Co estilo de menú {{ui:Debuxo clásico 2D}} ou {{ui:Cinta}}, abra a pestana {{ui:Anotar}}: as ferramentas están no seu panel {{ui:Cotas}}. {{ui:Debuxo clásico 2D}} tamén ten {{ui:Lineal}} na pestana {{ui:Inicio}}, debaixo de {{ui:Anotación}}. Vexa [Menús, teclas e rato](topic:menus-keys-and-mouse).
- Ou escriba o comando na liña de comandos baixo o debuxo e prema {{key:Enter}}: `DLI` (lineal), `DAL` (alineada), `DAN` (angular), `DRA` (raio), `DDI` (diámetro), `DCO` (continuar), `DBA` (base).
- Nunha pantalla estreita a barra de ferramentas é unha soa fila: deslice a barra lateralmente para chegar a {{ui:Anotar}}.

Para amosar as lonxitudes en milímetros, centímetros, metros ou quilómetros, vexa [Cotas en mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Debuxe algo que cotar

1. Escriba `PL` e prema {{key:Enter}}.
2. Escriba `0,0` e prema {{key:Enter}}.
3. Escriba `@6000,0` e prema {{key:Enter}}.
4. Escriba `@1500<60` e prema {{key:Enter}}.
5. Escriba `@0,2700` e prema {{key:Enter}}.
6. Escriba `@-6750,0` e prema {{key:Enter}}.
7. Escriba `C` e prema {{key:Enter}}. O contorno péchase.
8. Escriba `C` e prema {{key:Enter}} para comezar un círculo.
9. Prema dentro do cuarto, lonxe dos muros, para o centro.
10. Escriba `600` e prema {{key:Enter}}. Este é un piar.
11. Prema {{ui:Extensións}}.

## Lineal: horizontal ou vertical

1. Escriba `DLI` e prema {{key:Enter}}.
2. No aviso `Specify first extension line origin`, encaixe na esquina inferior esquerda (Punto final) e prema.
3. No aviso `Specify second extension line origin`, encaixe na esquina inferior dereita e prema.
4. Mova a cruz por debaixo do cuarto. A cota segue, horizontal.
5. Prema para colocar a liña de cota.

O historial di `Dimension text = 6000`.

Onde coloca a liña decide a dirección: por debaixo ou por riba dá unha cota horizontal; á esquerda ou á dereita dá unha vertical. Para forzala, escriba `H` (horizontal), `V` (vertical) ou `R` (xirada, e logo un ángulo) antes de colocala.

:::tip
Prema {{key:Enter}} no primeiro aviso en lugar de escoller un punto, e logo prema unha liña, arco, círculo ou segmento de polilínea. CadCraft toma os dous extremos por vostede.
:::

## Continuar: unha cadea de cotas

{{cmd:DIMCONTINUE}} ({{ui:Anotar}} › {{ui:Máis}} › {{ui:Continuar cota}}, ou `DCO`) continúa desde a última cota lineal ou alineada que fixo, cada nova comezando onde rematou a anterior.

1. Escriba `DLI` e prema {{key:Enter}}.
2. Escriba `0,0` e prema {{key:Enter}} para a primeira orixe.
3. Escriba `2000,0` e prema {{key:Enter}} para a segunda orixe.
4. Prema debaixo do cuarto para colocala.
5. Escriba `DCO` e prema {{key:Enter}}.
6. Escriba `4500,0` e prema {{key:Enter}}. Unha segunda cota segue á primeira, na mesma liña.
7. Encaixe na esquina inferior dereita e prema. Unha terceira completa a cadea.
8. Prema {{key:Enter}} para rematar o comando.

:::note
Aquí os puntos escríbense como coordenadas absolutas a propósito. Un punto `@` conta desde o último punto que deu, e o último punto é onde colocou a liña da cota anterior, non o final da cota. Os puntos absolutos, os encaixes ou unha distancia directa con {{ui:Orto}} activado son máis seguros nunha cadea de cotas.
:::

Escriba `U` e prema {{key:Enter}} para retirar a última cota da cadea sen saír do comando.

## Base: cotas apiladas desde unha liña

{{cmd:DIMBASELINE}} ({{ui:Anotar}} › {{ui:Máis}} › {{ui:Cota de base}}, ou `DBA`) mide cada nova cota desde a primeira orixe da última, e apila cada unha un paso máis afastada.

1. Escriba `DLI` e prema {{key:Enter}}.
2. Encaixe na esquina inferior esquerda e prema.
3. Encaixe na esquina superior esquerda e prema.
4. Mova a cruz á esquerda do cuarto e prema. Aparece unha cota vertical.
5. Escriba `DBA` e prema {{key:Enter}}.
6. Encaixe no extremo superior do muro de 60 graos (Punto final) e prema. Aparece unha segunda cota vertical, un paso máis afastada que a primeira.
7. Prema {{key:Enter}} para rematar.

## Alineada: lonxitude real dunha liña inclinada

1. Escriba `DAL` e prema {{key:Enter}}.
2. Prema {{key:Enter}} para seleccionar un obxecto.
3. Prema o muro de 60 graos.
4. Mova cara a fóra e prema para colocar.

O texto di 1500: a lonxitude real, medida ao longo do muro.

## Raio e diámetro

1. Escriba `DRA` e prema {{key:Enter}}.
2. Prema o círculo do piar.
3. Mova a cruz. A guía apunta desde o centro cara á cruz.
4. Prema para colocar o texto.

O texto di `R600`. {{cmd:DIMDIAMETER}} (`DDI`) fai o mesmo cun signo ⌀ e o diámetro.

## Angular

Os muros aquí son unha soa polilínea, polo que medimos a esquina polo seu vértice. (Entre dúas liñas separadas, pode premer as liñas no seu lugar.)

1. Escriba `DAN` e prema {{key:Enter}}.
2. No aviso `Select arc, circle or line, or Enter for a vertex`, prema {{key:Enter}}.
3. No aviso `Specify angle vertex`, encaixe na esquina inferior dereita e prema.
4. No aviso `Specify first angle endpoint`, encaixe na esquina inferior esquerda e prema.
5. No aviso `Specify second angle endpoint`, encaixe no extremo superior do muro de 60 graos e prema.
6. Mova a cruz dentro do cuarto, preto da esquina, e prema.

O texto di `120°`, o ángulo interior da esquina. Colocada no outro lado da esquina, a cota mide o ángulo dese lado. Prema un arco no primeiro aviso para cotar o ángulo que abarca, ou prema dúas liñas para cotar o ángulo entre elas.

## Cambiar o texto

Para escribir o seu propio texto, escriba `T` e prema {{key:Enter}} antes de colocar a cota, e logo escriba o texto. No seu texto, `<>` representa o valor medido: `<> TYP.` dá `6000 TYP.`. Prema {{key:Enter}} nunha liña baleira para manter o valor medido.

Para cambiar unha cota existente:

1. Prema nela.
2. No panel dereito, escriba en {{ui:Texto}}. Déixeo baleiro para o valor medido.
3. Prema {{key:Enter}}.

## As cotas seguen a xeometría

Unha cota lembra os seus puntos. Arrastre un dos seus puntos de agarre, ou mova, xire ou escale a cota cos obxectos que mide, e volverá medir. Se estira a xeometría sen mover a cota, esta non segue: mantén os seus propios puntos.

## Erros frecuentes

- **O texto e as frechas son microscópicos ou enormes.** Defina a escala global: vexa [Definir tamaños das cotas](topic:dimension-settings).
- **"Prema un punto dentro do ángulo que quere medir."** O punto que prema nunha cota angular está sobre unha das patas. Mova o punto ao interior do ángulo.
- **A cadea de cotas comezou desde a cota equivocada.** Sempre continúa desde a última cota lineal ou alineada feita nesta sesión. Faga (ou refaga) primeiro a que quere continuar.
- **A cota quedou vertical.** Colocouna ao lado. Escriba `H` antes de colocala.
- **Pés e polgadas.** Defina primeiro o formato de lonxitude do debuxo como {{ui:Arquitectónico}}, ou o {{ui:Formato}} da cota en {{ui:Propiedades}}: vexa [Pés e polgadas nas cotas](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Os números non están na unidade que quere.** Escolla {{ui:Unidades no texto}}: vexa [Cotas en mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
