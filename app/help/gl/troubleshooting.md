---
title: Solución de problemas
summary: Mensaxes que mostra CadCraft e problemas que pode atopar, cada un coa súa causa e solución.
keywords: problema, erro, non funciona, mensaxe, non se pode abrir, comando descoñecido, non pasa nada, bloqueado, teclas non funcionan, en branco, falta, solucionar
from: 8299b222
---

## Abrir ficheiros

| Mensaxe ou síntoma | Causa | Solución |
|---|---|---|
| "CadCraft abre debuxos DWG e DXF. "…" non é ningún dos dous." | O ficheiro non é un `.dwg` nin un `.dxf`. | Abra o propio ficheiro do debuxo. Pódese importar un PDF (Abrir pregunta: importar ou anexar, ver [Subxacentes PDF](topic:pdf-underlay)); as imaxes entran con `IMAGEATTACH`. |
| "Este DXF binario acaba no medio dun obxecto: o ficheiro está cortado ou danado." | O DXF binario para antes do seu final. | Escriba RECOVER para abrir o que se pode ler, ou pida o ficheiro de novo. |
| "Este non é un DXF lexible (código de grupo incorrecto na liña …)." | O DXF está danado ou non é realmente un DXF. | Pida o ficheiro de novo, ou un DWG. |
| "Este debuxo non se puido ler. Pode estar danado, ou gardado nunha versión que o lector aínda non trata (…)." | O lector DWG non o puido ler. | Pida o DWG gardado nunha versión anterior, ou un DXF. |
| "Este debuxo é de AutoCAD R11 / R12 (DWG AC1009), máis antigo do que CadCraft lee …" | Os ficheiros DWG da Release 12 e anteriores usan un formato que CadCraft non le. | No programa que o fixo, gárdeo como DXF (calquera versión) ou como un DWG máis novo, e ábrao. O propio Gardar como de CadCraft ofrece DXF R12 para os programas que queren ese formato antigo. |
| "Non se puido abrir …" seguido dunha mensaxe de rede, no primeiro DWG | Non se puido descargar o lector DWG: está sen conexión e CadCraft non está gardado para uso sen conexión, ou a conexión caeu. | Conéctese e probe de novo, ou abra un DXF. Prema {{ui:Gardar para usar sen conexión}} e agarde a mensaxe "Listo para uso sen conexión", para que os ficheiros DWG se abran sen conexión a seguinte vez. Ver [Traballo sen conexión](common:offline). |
| O botón de uso sen conexión di "Non se puido gardar" | Algúns ficheiros non se descargaron. | Comprobe a conexión e prema o botón para probar de novo. |
| O botón de uso sen conexión di "Sen conexión non dispoñible" | As ventás privadas e algúns ordenadores xestionados non poden conservar unha copia sen conexión. | Use unha ventá normal, ou manteña a conexión. |
| CadCraft non se abre sen conexión | Non se gardou para uso sen conexión neste navegador, ou o navegador a borrou. | A próxima vez que estea conectado, prema {{ui:Gardar para usar sen conexión}} e agarde a "Listo para uso sen conexión". |
| O debuxo ábrese pero faltan partes | Obxectos que CadCraft aínda non pode debuxar, ou capas apagadas ou conxeladas no ficheiro. | Lea "Acerca deste ficheiro" no panel da esquerda. Comprobe o panel {{ui:Capas}}. |
| O texto ocupa dúas liñas | CadCraft debuxa o texto cun tipo de letra de estilo Helvetica, máis ancho que algúns tipos de letra CAD. | Acurte o texto en Propiedades, ou acepte a liña extra. |
| Un círculo aparece como unha elipse, ou o texto espellado se le ben | O obxecto foi debuxado nun plano inclinado, ou visto desde abaixo, no programa que fixo o ficheiro. CadCraft o amosa como se ve desde arriba, como o fai a vista en planta dese programa; o texto mantense lexible. | Non hai nada que arranxar. Para velo como o outro programa, pida o debuxo aplanado, ou cos obxectos debuxados desde arriba. |
| Un bloque, círculo ou cota está noutro sitio que no programa que fixo o ficheiro | Un caso de debuxo que CadCraft le mal. | Díganoslo en Discord, co ficheiro se o pode compartir. |

## A liña de comandos

| Mensaxe ou síntoma | Causa | Solución |
|---|---|---|
| "Comando descoñecido "…". Escriba HELP para ver a lista." | Non hai ningún comando nin alias con ese nome. | Escriba `HELP`, ou vexa a [Referencia de comandos](topic:commands). Algúns comandos coñecidos [aínda non están feitos](topic:not-built-yet). |
| "Non existe tal comando" xunto á liña de comandos mentres escribe | O que escribiu non coincide con nada aínda. | Siga escribindo, ou revise a ortografía. |
| "Fai falta un punto ou unha palabra clave de opción." | O que escribiu non é un punto nin unha opción. | Revise o formato: `x,y`, `@dx,dy`, `@d<a`, ou un único número. Ver [Entrada de coordenadas e distancias](topic:coordinate-entry). |
| "Fai falta un número positivo ou dous puntos." | Unha distancia era negativa ou non era un número. | Escriba un número positivo, ou prema dous puntos. |
| "Fai falta un ángulo en graos ou dous puntos." | O ángulo non era un número. | Escriba os graos como un número simple. |
| "Fai falta un número." | Esperábase un número. | Escriba só díxitos. |
| "Palabra clave de opción non válida." | As letras non coinciden con ningunha opción. | Escriba as maiúsculas que aparecen entre corchetes. |
| `*Cancelar*` | Prema {{key:Esc}}, ou {{key:Enter}} onde era obrigatorio un punto. | Comece o comando de novo. |
| Non chega o escrito á liña de comandos | Unha caixa dun panel ou dun diálogo ten o cursor. | Prema {{key:Enter}} ou {{key:Esc}}, ou prema no debuxo. |
| O comando usa obxectos que non seleccionou | Seleccionáronse antes de comezar. | Prema {{key:Esc}} antes do comando. |
| Unha liña foi a un sitio inesperado | `x,y` é absoluto. | Use `@dx,dy` para puntos relativos. |
| "Acabe ou cancele primeiro o comando actual (Esc)." | Premeu {{key:Mod+S}} mentres un comando estaba en curso. | Prema {{key:Esc}} e despois garde. |
| "Non se puido gardar como DWG (AutoCAD 2000): … Probe Gardar como, e despois DXF." | Algo do debuxo non se puido escribir como DWG. | Prema {{key:Mod+Shift+S}}, escolla {{ui:DXF R12}} e prema {{ui:Gardar}}. |
| "Non gardado." | Pechou o diálogo {{ui:Gardar unha copia como}} con {{ui:Cancelar}} ou {{key:Esc}}. | Prema {{key:Mod+Shift+S}} de novo e prema {{ui:Gardar}}. |

## Edición

| Mensaxe ou síntoma | Causa | Solución |
|---|---|---|
| Un obxecto non se selecciona | A súa capa está bloqueada, apagada ou conxelada; ou está nunha folla e é o modelo dentro dunha xanela de vista. | Desbloquee a capa, ou vaia á lapela {{ui:Modelo}}. |
| "Non se atopou nada alí." | Ningún obxecto baixo o clic. | Achegue o zoom e prema na propia liña. |
| "Ningún obxecto cruza ese obxecto alí." | {{cmd:TRIM}} non atopou ningún obxecto que cruce o anaco que escolleu. | Comprobe que a liña de corte cruza realmente. |
| "Non se pode recortar ese obxecto." | Recortar funciona con liñas, arcos, círculos e polilíneas. | Descomponha antes os bloques, ou borre e debuxe de novo. |
| "Non hai contorno nesa dirección." | {{cmd:EXTEND}} non atopou nada onde rematar. | Prema máis preto do extremo que debe crecer. |
| "Non se pode desfasar ese obxecto." | Desfasar funciona con liñas, arcos, círculos e polilíneas. | Descomponha antes, ou debuxe unha liña paralela. |
| "Non se pode desfasar tan lonxe." | O desfase daría a volta á forma. | Use unha distancia menor. |
| "O raio é demasiado grande." ou "A distancia é demasiado grande." | O redondeado ou o chaflán pasaría do extremo dunha liña. | Fixe un raio menor con `R`, ou distancias menores con `D`. |
| "Só se pode recortar o primeiro ou o último segmento dunha polilínea aberta." | A esquina entraría no medio dunha polilínea. | Escolla dous segmentos da polilínea xuntos, ou use `P` para cada esquina. |
| "Escolla unha segunda liña diferente." | A segunda selección era a mesma liña, ou non era unha liña. | Escolla outra liña. |
| "Só se descompoñen polilíneas, referencias de bloques e cotas." | A selección non tiña nada que descompoñer. | Seleccione unha polilínea, referencia de bloque ou cota. |
| "Esa é a capa actual. Faga outra capa actual primeiro." | Intentou apagar a capa actual. | Prema o nome doutra capa, e despois apague esta. |
| "Xa existe unha capa chamada …" | Os nomes das capas deben ser únicos. | Escolla outro nome. |
| "Nada que desfacer." | Non queda nada que desfacer, ou abriu ou comezou un debuxo (iso borra o historial). | — |

## Cotas e bloques

| Mensaxe ou síntoma | Causa | Solución |
|---|---|---|
| O texto e as frechas das cotas son minúsculos ou enormes | Os tamaños están en unidades do debuxo; a escala global non encaixa co debuxo. | Fixe {{cmd:DIMSCALE}} á escala de trazado; ver [Fixar os tamaños das cotas](topic:dimension-settings). |
| "Escolla un punto dentro do ángulo que quere medir." | A posición da cota angular cae sobre un dos lados. | Prema dentro do ángulo. |
| "Esas liñas son paralelas." | As liñas paralelas non teñen ángulo entre elas. | Escolla dúas liñas que se crucen. |
| "Escolla unha cota lineal ou alineada." | {{cmd:DIMCONTINUE}} ou {{cmd:DIMBASELINE}} necesitan unha para comezar. | Escolla unha cota lineal ou alineada. |
| "Este debuxo aínda non ten bloques: F insire un desde un ficheiro, L desde a biblioteca …" | O debuxo non ten bloques propios. | Escriba `F` ou `L`, ou cree un bloque con {{cmd:BLOCK}}. |
| "Non hai ningún bloque chamado "…"." | O nome está mal. | A mensaxe enumera os bloques que hai. |
| "Un nome de bloque non pode comezar por * nin usar …" seguido dunha lista de caracteres | O nome ten un carácter que os bloques non admiten. | Use letras, díxitos, `-` e `_`. |
| "Un bloque non pode conter a si mesmo." | A selección inclúe unha referencia ao bloque que se está creando. | Deixe fóra esa referencia. |
| "Non hai obxectos seleccionados; non se creou nada." | Prema {{key:Enter}} antes de seleccionar. | Execute {{cmd:BLOCK}} de novo e seleccione os obxectos. |

## Follas e trazado

| Mensaxe ou síntoma | Causa | Solución |
|---|---|---|
| "As xanelas de vista van nunha disposición. Abra primeiro unha lapela de disposición (ou cree unha con LAYOUT)." | {{cmd:MVIEW}} na lapela {{ui:Modelo}}. | Prema primeiro unha lapela de folla. |
| "Abra primeiro a disposición coa xanela de vista." | {{cmd:VPVIEW}} na lapela {{ui:Modelo}}. | Prema primeiro a lapela de folla. |
| A escala dunha xanela de vista parece dez veces errada | As unidades do debuxo están mal. | Fixe {{ui:Unidades}} en {{ui:Configuración actual}}. |
| "Aínda non hai nada que trazar." | O modelo está baleiro. | Debuxe algo, ou abra un debuxo. |
| "Escolla a xanela que trazar." | Escolleuse {{ui:Unha xanela…}} e non se escolleu ningunha xanela. | Prema {{ui:Escoller}} e escolla dúas esquinas. |
| "… máis grande que o papel: os bordos quedan cortados." | A zona non cabe nesa escala. | Escolla unha escala menor, un papel máis grande, ou {{ui:Ajustar ao papel}}. |
| "O navegador bloqueou a nova lapela, así que se descargou o PDF." | Os emerxentes están bloqueados para o sitio. | Abra o PDF descargado, ou permita os emerxentes para o sitio. |
| Os caracteres imprímense como "?" | Os tipos de letra do PDF non teñen letra para eles (ideogramas raros, hindi e outras escrituras que precisan formación complexa, …), ou non se puido descargar o tipo de letra máis grande (sen conexión). As escrituras europeas, cirílica, grega, hebrea, árabe, persa, urdu, tailandesa, chinesa, xaponesa e coreana imprímense tal cal. | Para escritura árabe, tailandesa, chinesa, xaponesa ou coreana, trace de novo con conexión. As outras escrituras aínda non están feitas. |
| As liñas de construción aparecen no PDF | A súa capa trázase. | Prema o botón de impresora da capa. |
| Todas as liñas teñen o mesmo grosor | O seu {{ui:Grosor de liña}} é {{ui:Predeterminado}}, así que se imprimen co ancho de pluma do diálogo. | Dea ás capas ou aos obxectos un {{ui:Grosor de liña}} no panel da dereita, ou escolla un {{ui:Grosor de liña}} no diálogo. Para ver os grosores na pantalla, prema {{ui:LWT}} na barra de estado. |

## Teclas e pantalla

| Síntoma | Causa | Solución |
|---|---|---|
| F3, F7 ou F8 cambia o volume ou abre Mission Control | Teclas de función de Mac. | Manteña premida **fn**, ou use os botóns da barra de estado. Ver [Teclas, ratos e trackpads](common:keys). |
| F7 pregunta sobre a navegación con cursor | O uso que Firefox fai de F7. | Escolla Non; use o botón {{ui:Cuadrícula}}. |
| {{key:Mod+N}} abriu unha ventá do navegador | O navegador reserva esa tecla. | Prema {{ui:Nova}} ou escriba `NEW`. |
| {{key:Mod+A}} seleccionou o texto da liña de comandos | A liña de comandos tiña o cursor. | Prema primeiro un obxecto, ou escriba `ALL` nun aviso `Seleccione obxectos`. |
| {{key:Delete}} non borra | A liña de comandos tiña o cursor. | Escriba `E` e prema {{key:Enter}}. |
| O clic dereito non fai nada nun trackpad de Mac | O control-clic pode contar como un clic normal. | Prema con dous dedos. |
| Nada se desprazan nun trackpad | Non hai botón central, e o espazo non desprazan. | Deslice con dous dedos: a vista 2D desprázase (o pellizco e a roda do rato fan zoom). Ou arrastre mantendo premido o clic dereito. |
| O primeiro {{key:Esc}} saíu da pantalla completa | O navegador usa Esc para saír da pantalla completa. | Prema {{key:Esc}} de novo para cancelar o comando. |
| {{key:F1}} non fai nada nun Mac | F1 é unha tecla de brillo. | Manteña premida **fn**, ou prema {{ui:Axuda}}. |
| O que escribe vai ao cadro de busca da axuda | O panel da axuda ten o cursor. | Prema no debuxo. |
| O debuxo quedou en branco | Achegou moito o zoom. | Prema {{ui:Extensións}}, ou faga dobre clic na roda. |
| "Saír do sitio?" ao pechar a lapela | Hai cambios sen gardar. | Quédese, garde con {{key:Mod+S}}, e despois peche. |
