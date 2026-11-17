---
title: Apilar pisos nun mesmo debuxo
summary: Debuxe o primeiro piso sobre a planta baixa nas mesmas coordenadas e apague cada piso, sen Xrefs.
keywords: piso, pisos, FLOORS, FLR, FLOOR, FLOORLAYERS, planta, nivel, apilar, capa de deseño, espazo modelo, subxacente, xref
from: 7440fc87
---

Os pisos permítenlle apilar plantas nun mesmo espazo modelo. Cada piso ten os seus propios obxectos, e as capas seguen funcionando en todos. Un muro en `P-Walls` pode estar en calquera piso.

## Comezar

Escriba `FLOORS` (`FLR`), ou escolla {{ui:Pisos…}} no menú {{ui:Máis}} do grupo {{ui:Vista}}, e despois prema {{ui:Comezar con pisos}}. O que debuxou ata agora vai á planta baixa.

## Debuxar nun piso

Escolla o piso co botón redondo do panel. Os novos obxectos van nel.

Os outros pisos que estean activados móstranse esvaecidos por debaixo. Pode enganchar a eles, para que o primeiro piso se alinhe coa planta baixa, pero non os pode cambiar ata que os faga o piso activo. O ollo apaga un piso. Os muros só se unen a muros do seu propio piso.

Para comezar un piso a partir do de abaixo, seleccione o que quere, escolla o piso no panel e prema {{ui:Copiar alí}}.

## Pór pisos nas follas

Seleccione unha ventá gráfica nunha folla e escolla o seu piso en {{ui:Piso mostrado}} en Propiedades. Unha ventá gráfica sen piso escollido mostra todos os pisos activados.

## Enviar o ficheiro a outra persoa

Outros programas CAD non coñecen os pisos, así que mostran todos xuntos. Antes de enviar un ficheiro, prema {{ui:Converter pisos en capas}} no panel, ou escriba `FLOORLAYERS`. Cada obxecto pasa a unha capa co nome do seu piso, como `Ground floor-P-Walls`, para que aínda poidan apagar cada piso. Desfacer volve atrás. CadCraft mantén os pisos no ficheiro DWG ou DXF que garda.
