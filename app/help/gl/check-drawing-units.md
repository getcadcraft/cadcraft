---
title: Comprobar en que unidades está un debuxo
summary: Vexa se un debuxo aberto está en milímetros, polgadas ou outra unidade, compróbeo medindo e coñeza por que outro programa pode indicar unidades distintas para o mesmo DXF.
keywords: unidades, que unidades, cales unidades, comprobar unidades, milímetros, mm, polgadas, métrico, imperial, unidades DXF, STEP a DXF, unidades incorrectas, polgadas ou mm, INSUNITS, MEASUREMENT, unidades do debuxo, DXF de PartCraft
from: c0ee75bb
---

## O que vai facer

Descubra que representa unha unidade dun debuxo aberto, e asegúrese de que os números que le son do tamaño que espera.

## Pasos

1. Abra o debuxo e prema {{key:Esc}} para que non haxa nada seleccionado, na lapela {{ui:Modelo}}.
2. No panel dereito, en {{ui:Configuración actual}}, lea {{ui:Unidades}}. Indica o que representa unha unidade do debuxo: {{ui:Milímetros}}, {{ui:Polgadas}}, {{ui:Pés}} e así por diante. Un DXF gardado desde PartCraft indica {{ui:Milímetros}}.
3. Compróbeo medindo algo cuxo tamaño coñeza. Escriba {{cmd:DIST}} e escolla os dous extremos dunha aresta ou dun burato. Se unha peza que coñece de 25 mm le `25`, o debuxo está en milímetros; se le aproximadamente `0.98`, está en polgadas.

{{ui:Sen unidades}} significa que o ficheiro non o indica. CadCraft entón trata a unidade do papel (milímetros en papel ISO, polgadas en papel US), e os números só son tan correctos como o programa que os escribiu.

## Se as unidades son incorrectas

Cambiar {{ui:Unidades}} **non redimensiona nada**: os números seguen iguais e só cambia o que significan. Por iso, cámbiea só para indicar o que o debuxo realmente é. Se os números son milímetros e {{ui:Unidades}} indica {{ui:Polgadas}}, escolla {{ui:Milímetros}}. Se necesita a xeometría en outras unidades, escálea con {{cmd:SCALE}} (25.4 para pasar de polgadas a milímetros, 1/25.4 no sentido contrario) e despois defina {{ui:Unidades}}.

Como se escriben as lonxitudes (decimal, pés e polgadas, fraccións) é un axuste separado, {{ui:Formato de lonxitude}}: consulte [Unidades, tamaños de papel e escalas](topic:units-papers-scales).

## Por que outro programa pode indicar polgadas

Un DXF declara as súas unidades na cabeceira. O tipo de DXF máis antigo, R12, non tiña variable de unidades, así que un programa que lea R12 estrictamente ignora a que se escribe alí e recorre ao seu valor por defecto, que adoita ser polgadas. A xeometría do ficheiro é a mesma en ambos casos: só cambia a etiqueta. PartCraft escribe os seus ficheiros DXF como R12 e declara milímetros de dous modos (`$INSUNITS` 4 e `$MEASUREMENT` 1), para que máis programas os lean ben. Se un programa segue indicando polgadas, defina as súas unidades en milímetros ao abrir o ficheiro.

Traer un ficheiro a un debuxo (en lugar de abrilo) converte as súas unidades: consulte [Unidades na importación](topic:units-on-import).
