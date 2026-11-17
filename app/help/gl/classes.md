---
title: Organizar un debuxo con clases
summary: As clases ordenan os obxectos dun segundo modo, por enriba das capas (Lighting-Fixtures-Spot): mostralas e ocultalas, darlles cor, tipo de liña, grosor, recheo e estilo de texto que os obxectos poden tomar "por clase", e definir a clase na que entran os obxectos novos.
keywords: clase, clases, CLASSES, CLS, CLASS, por clase, ByClass, clase activa, usar na creación, Ningunha, capa de deseño, escala de capa, elevación, Vectorworks
from: 672de9cb
---

As capas indican *onde* pertence un obxecto no debuxo; as clases indican *que* é. Un muro na capa `Level 1` pode estar na clase `Walls-Exterior`, e un foco de luz na capa `Ceiling` na clase `Lighting-Fixtures-Spot`. Pode ocultar todas as luces de todas as capas de golpe, ou trazar todos os muros exteriores máis grosos, sen mover nada entre capas.

Todo obxecto comeza na clase **Ningunha**. Un debuxo sen clases propias funciona exactamente como antes.

## Abrir o panel Clases

Escriba `CLASSES` (ou `CLS`) e prema {{key:Enter}}, ou escolla {{ui:Clases…}} no menú {{ui:Máis}} do grupo {{ui:Vista}}. O panel ábrese sobre o debuxo e permanece aberto mentres debuxa.

- **Engadir unha clase:** escriba o seu nome na caixa superior e prema {{key:Enter}}. Un `-` crea un nivel: `Lighting-Fixtures-Spot` queda debaixo de `Lighting-Fixtures`, que queda debaixo de `Lighting`; os niveis que faltan engádense por vostede.
- **Mostrar ou ocultar:** o ollo xunto a unha clase. Ocultar unha clase oculta todas as clases que dependen dela, na pantalla e no papel.
- **Clase activa:** o botón redondo. Os obxectos novos que debuxe entran na clase activa.
- **Escoller unha clase:** prema o seu nome. Os botóns e axustes de embaixo da lista actúan entón sobre ela.

O número ao final de cada fila é cantos obxectos hai nesa clase (no modelo, nas follas e dentro das definicións de bloques).

## Poñer obxectos nunha clase

Seleccione os obxectos, escolla unha clase no panel e prema {{ui:Definir clase}}. Marque primeiro {{ui:Por clase}} para que tomen a cor, o tipo de liña, o grosor, o recheo e o estilo de texto da clase. Tamén pode:

- escribir `CLASS` con obxectos seleccionados e introducir un nome de clase (un nome novo crea a clase);
- escribir `CLASS` sen nada seleccionado para definir a clase activa; `?` lista as clases cos seus contadores;
- usar a sección {{ui:Clase}} do panel Propiedades: a clase, e un interruptor {{ui:… por clase}} para a cor, o tipo de liña e o grosor (o recheo para as tramas, o estilo de texto para o texto);
- seleccionar por clase con `QSELECT`: escolla a propiedade {{ui:Clase}}.

{{ui:Seleccionar os seus obxectos}} selecciona todos os obxectos da clase escollida na folla aberta (ou no modelo).

## Como se debuxa un obxecto: obxecto, clase, capa

A cor, o tipo de liña, o grosor, o recheo e o estilo de texto dun obxecto poden ser **por clase**, do mesmo modo que poden ser por capa. CadCraft mira nesta orde:

1. O valor propio do obxecto, salvo que ese valor sexa por clase.
2. O valor da clase, cando o obxecto o toma por clase e a clase o ten.
3. O valor da capa.

Unha clase cuxa cor (ou tipo de liña…) está en {{ui:Sen definir}} pasa o obxecto á súa capa. Escolla unha clase e defina a súa {{ui:Cor}}, {{ui:Tipo de liña}}, {{ui:Grosor de liña}}, {{ui:Recheo (tramas)}} e {{ui:Estilo de texto}} debaixo dos botóns. Marque {{ui:Usar na creación}} para que os obxectos novos debuxados nesa clase tomen todos eles por clase.

Cada cambio no panel é un único paso de desfacer.

## Renomear e eliminar

{{ui:Renomear}} edita o nome no seu lugar: prema {{key:Enter}} para conservalo, {{key:Esc}} para saír. As clases que dependen dela seguen o cambio (`Lighting-Spot` pasa a `Light-Spot` cando `Lighting` pasa a `Light`), e tamén os seus obxectos e as súas substitucións nas viewports.

{{ui:Eliminar}} retira a clase e todas as clases que dependen dela. Os seus obxectos pasan a **Ningunha**. Un {{ui:Desfacer}} devolve todo. **Ningunha** non se pode renomear nin eliminar.

## Capas de deseño

En {{ui:Capas de deseño}} cada capa pode levar unha escala (`1:50`) e unha elevación. Unha capa de deseño é unha capa normal: o espazo do modelo e as follas funcionan como antes, e a escala e a elevación gárdanse co debuxo para as ferramentas que as vaian usar.

## En ficheiros DWG e DXF

As clases consérvanse en todas as versións de DWG que CadCraft garda e en DXF (R12 e 2000). A clase de cada obxecto son os seus propios datos estendidos (aplicación `CADCRAFT_CLASS`), así que AutoCAD e outros programas a conservan co obxecto. A lista de clases, as cores e a visibilidade gárdanse nun bloque sen usar chamado `CADCRAFT_CLASSES`; se outro programa purga ese bloque, CadCraft segue atopando a clase de cada obxecto e as clases volven con axustes por defecto.

Outros programas non coñecen as clases: debuxan cada obxecto cos valores propios ou cos da súa capa.

Consulte tamén [Substitucións de clase en viewports](topic:viewport-overrides) e [Organizar un debuxo con capas](topic:layers).
