---
title: Verificar qué unidades tiene un plano
summary: Ver si un plano abierto está en milímetros, pulgadas u otra unidad, comprobarlo midiendo algo y saber por qué otro programa puede indicar otras unidades para el mismo DXF.
keywords: unidades, qué unidades, cuáles unidades, verificar unidades, milímetros, mm, pulgadas, métrico, imperial, unidades DXF, STEP a DXF, unidades incorrectas, pulgadas o mm, INSUNITS, MEASUREMENT, unidades del plano, DXF de PartCraft
from: c0ee75bb
---

## Mba'e rejapóta

Ehecha mba'épa oñemoĩva unidad peteĩ plano ojepe'ávape, ha eiporu hag̃ua che número oĩva pe tamaño ereikuaáva.

## Pasos

1. Ejepe'a pe plano, upei ejapreta {{key:Esc}} ndaipóri mba'e ojeporakuaáva, pe {{ui:Modelo}} pestaña ryepýpe.
2. Pe panel derecha pe, {{ui:Configuración actual}} rapykuéri, ehecha {{ui:Unidades}}. Ohechauka mba'épa oĩ peteĩ unidad plano pegua: {{ui:Milímetros}}, {{ui:Pulgadas}}, {{ui:Pies}} ha ambue. DXF oguejy PartCraft-gui ohechauka {{ui:Milímetros}}.
3. Ehecha peteĩ mba'e tamaño reikuaáva. Ejapo {{cmd:DIST}} ha ejeheka pe dos extremo peteĩ borde térã peteĩ agujero. Si peteĩ mba'e reikuaáva 25 mm ohechauka `25`, pe plano oĩ milímetros-pe; si ohechauka hetave `0.98`, oĩ pulgadas-pe.

{{ui:Sin unidades}} he'ise ko archivo ndohechauka. Upérõ CadCraft ojeporu pe unidad oĩva papel-pe (milímetros ISO papel-pe, pulgadas US papel-pe), ha pe número ndaha'éi mbarete hetáiva pe programa ohai hag̃uáicha.

## Si pe unidades ndaha'éi tavtérmino

Ojejoguáva {{ui:Unidades}} **ndoñemoambuéi mba'eve**: pe número oñemoĩ jepe, ha upéva rehecháva ojoguái. Upévare ojoguáse chupe avei ohechauka mba'épa plano pegua. Si pe número milímetros-pe ha {{ui:Unidades}} ohechauka {{ui:Pulgadas}}, eiporavo {{ui:Milímetros}}. Si pe geometría ipahápe ojeporu ambue unidad, ojeporu {{cmd:SCALE}} (25.4 pulgadas-gui milímetros-pe, 1/25.4 upéva rupi) ha upéi emoĩ {{ui:Unidades}}.

Mba'éicha ojehai tamaño (decimal, pies ha pulgadas, fracción) oĩ ambue configuración: {{ui:Formato de longitud}}. Eheka [Unidades, tamaños de papel y escalas](topic:units-papers-scales).

## Mba'éichapa ambue programa ohai pulgadas

DXF oñeñandu ohechauka unidades iñeñandu-pe. DXF ywytyrõ, R12, ndoguerohory mba'eve unidad variable, upévare programa ojeporúva R12 estrictamente ndohecháiva chupe ojehai, ha ojeporu iñ default, ha heta jave pulgadas. Pe geometría pe archivo-pe upe'i ojehaiva ndaipóri diferencia: oñemoambue ra'e tenda. PartCraft ohai DXF R12-gui ha ohechauka milímetros mokõi jeheja (`$INSUNITS` 4 ha `$MEASUREMENT` 1), ambue programa ohecha porã. Si peteĩ programa ohechauka avei pulgadas, emoĩ chupe unidades milímetros-pe archivo ejepe'áramo.

Plano-pe mboguejy peteĩ archivo (ndaha'éi ejepe'a) ojoguáva unidades: eheka [Unidades en la importación](topic:units-on-import).
