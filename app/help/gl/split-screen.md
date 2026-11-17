---
title: Dividir a pantalla
summary: Mostre o debuxo en dous, tres ou catro paneis, cada un co seu zoom, coloque unha folla xunto ao modelo e abra varios debuxos lado a lado.
keywords: dividir, dividir pantalla, paneis, vports, viewports, en mosaico, mosaico, lado a lado, apilado, dous debuxos, pestanas, pestanas de documento, comparar, separador, modelo e folla, varios debuxos, debuxos abertos
from: ee2f034b
---

## Que vai aprender

Como ver un debuxo en varios paneis á vez, cada un co seu zoom, e como abrir varios debuxos e velos lado a lado.

## Dividir un debuxo en paneis

1. Abra un debuxo, ou debuxe algunhas liñas e círculos.
2. Abra {{ui:Vista}} › {{ui:Máis}} e escolla {{ui:Dividir lado a lado}} (ou escriba {{cmd:VPORTS}}, logo `2` e logo {{key:Enter}}).

A área do debuxo divídese en dous paneis, ambos mostrando a mesma vista. O panel activo ten un marco azul e recibe a cruz.

3. Prema no outro panel. Pasa a ser o activo. (Ese primeiro clic só cambia de panel; prema de novo para escoller.)
4. Achegue ou afaste coa roda do rato. Só ese panel fai zoom.
5. Arrastre a liña entre os paneis para ensanchar un. {{key:Home}} cando o separador ten o foco devólveo ao centro.

{{cmd:VPORTS}} tamén admite `3` (dous paneis nun lado e un grande no outro, Esquerda (`L`) ou Dereita (`R`)), `4`, e `SI` para volver a un só panel. A vista do panel activo enche entón a área. Nunha folla, {{cmd:VPORTS}} engade en cambio unha ventá gráfica á folla (como en AutoCAD); escriba alí {{cmd:SPLIT}}, ou use o menú Vista.

## Debuxar dun panel a outro

1. Divida en dous lados, e achegue cada panel a unha esquina distinta do debuxo.
2. Escriba `L` e prema {{key:Enter}}, e prema o primeiro punto no panel esquerdo.
3. Prema unha vez no panel dereito para activalo, logo prema alí o segundo punto.

A liña vai entre os dous lugares. Un comando continúa segundo cambia de panel, e a goma elástica amósase en todos os paneis.

## O modelo xunto a unha folla

1. Divida en dous lados.
2. Prema o panel dereito, logo prema a pestana dunha folla baixo o debuxo.

O panel dereito mostra a folla; o esquerdo segue mostrando o modelo. Cada panel conserva o seu propio espazo, así que pode debuxar sobre o modelo e ver como segue a ventá da folla.

## Varios debuxos nunha ventá

1. Abra un debuxo. Logo abra outro (ou prema {{ui:Nova}}).

Cada debuxo ábrese na súa propia pestana sobre a área de debuxo. Prema unha pestana para cambiar; a liña de comandos, os paneis e desfacer seguen o debuxo ao que cambie. {{key:Mod+C}} nun debuxo e {{key:Mod+V}} noutro copia obxectos entre eles.

2. Prema {{ui:Dispor os debuxos abertos lado a lado}} (a icona de dividir ao final das pestanas), ou a icona apilada xunto a ela.

Cada panel mostra agora un dos debuxos abertos, ata catro. Prema un panel para traballar nese debuxo.

3. Prema o {{ui:×}} dunha pestana para pechar ese debuxo. Se ten cambios sen gardar, CadCraft pregunta antes.

:::tip
Abrir un debuxo mentres a ventá só contén un debuxo novo e sen tocar usa esa pestana en vez de engadir outra.
:::

## Desprazar e achegar xuntos

Para comparar dúas revisións, dispóñaas lado a lado e logo prema {{ui:Ligar as vistas dos paneis}} (a icona de ligazón ao final das pestanas), ou escóllao en {{ui:Vista}} › {{ui:Máis}}, ou escriba {{cmd:LINKVIEWS}} e `ON`. Agora un desprazamento ou un zoom nun panel move todos os paneis que mostran o modelo (ou todos os que mostran unha folla) ao mesmo lugar, así que os dous debuxos seguen aliñados. {{cmd:LINKVIEWS}} `OFF` deixa de novo que cada panel se mova por conta propia.

## Erros frecuentes

- **O meu clic non fixo nada.** Activou ese panel. Prema de novo para escoller ou debuxar.
- **A roda fixo zoom no panel equivocado.** A roda fai zoom no panel baixo o punteiro e actívao.
- **Os paneis volveron a un só.** Abrir un debuxo mostra o estado en que se gardou; un debuxo gardado sen paneis ábrese nun só.
- **Ao saír da páxina avisa de cambios sen gardar que non vexo.** Outra pestana contén un debuxo con cambios. Vaia a ela e gárdeo, ou saia sen gardar.
