---
title: Definir tamaños, decimais e escala das cotas
summary: Escolla a altura do texto, o tamaño das frechas, os decimais e a escala global para as cotas novas, cambie as existentes e entenda como funcionan os estilos de cota en CadCraft.
keywords: estilo de cota, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, escala global, decimais, tamaño da frecha, escala de anotación, dimtextunit, unidades no texto, mm, cm, m, km, milímetros, metros, dimlfac, dimpost
from: 8ec82a07
---

## O que vai aprender

Que tamaño teñen o texto e as frechas das cotas, como definilos para un debuxo impreso a 1:50 ou 1:100, e como cambiar as cotas que xa fixo.

## Como funcionan os tamaños das cotas

Cada cota leva o seu propio conxunto de tamaños: altura do texto, tamaño da frecha, decimais, o espazo arredor do texto, canto sobresaen as liñas de extensión pasada a liña de cota, e canto se separan do obxecto. Os predeterminados son próximos ao estilo ISO habitual:

| Axuste | Predeterminado | Comando |
|---|---|---|
| Altura do texto | 2.5 | {{cmd:DIMTXT}} |
| Tamaño da frecha | 2.5 | {{cmd:DIMASZ}} |
| Decimais | 2 (os ceros finais eliminanse) | {{cmd:DIMDEC}} |
| Espazo arredor do texto | 0.625 | {{cmd:DIMGAP}} |
| Extensión pasada a liña de cota | 1.25 | {{cmd:DIMEXE}} |
| Desfase do obxecto | 0.625 | {{cmd:DIMEXO}} |
| Escala global | 1 | {{cmd:DIMSCALE}} |

Cada tamaño se multiplica pola **escala global**. Defina os tamaños como os quere no papel (texto de 2.5 mm) e defina a escala global como a escala de impresión (50 para 1:50). O texto mide entón 2.5 × 50 = 125 unidades do debuxo de altura, e imprímese a 2.5 mm.

:::note
Os estilos de cota con nome xestiónanse con {{cmd:DIMSTYLE}}: vexa a sección seguinte. Cada cota tamén conserva os axustes con que foi feita, así que aínda pode cambiar unha soa en {{ui:Propiedades}}.
:::

## Definir os tamaños das cotas novas

Calquera das dúas formas seguintes só cambia as cotas que faga despois.

### No panel Configuración actual

1. Prema {{key:Esc}} para que non haxa nada seleccionado. Na pestana {{ui:Modelo}}, o panel dereito di {{ui:Configuración actual}}.
2. Baixe no panel ata {{ui:Cotas novas}}, pasadas as filas de capa, cor, unidades e {{ui:Capa 0}} (nunha pantalla pequena empeza por debaixo do bordo inferior). Prema en {{ui:Escala global}}, escriba `50` e prema {{key:Enter}}.
3. Defina {{ui:Altura do texto}}, {{ui:Tamaño da frecha}} e {{ui:Decimais}} do mesmo xeito se quere outros valores.

A barra de estado confirma cada un, por exemplo "Escala global para as cotas novas: 50".

### Na liña de comandos

1. Escriba `DIMSCALE` e prema {{key:Enter}}.
2. No aviso `Enter new value for DIMSCALE <1>`, escriba `50` e prema {{key:Enter}}.

O historial confirma "DIMSCALE = 50. As cotas novas usano; seleccione as existentes para cambiar as súas." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} e {{cmd:DIMEXO}} funcionan igual. Prema {{key:Enter}} no aviso para manter o valor actual.

### Pés e polgadas nas cotas

As cotas novas usan o formato de lonxitude do debuxo: defínao con {{ui:Formato de lonxitude}} en {{ui:Configuración actual}} ou con {{cmd:UNITS}} (vexa [Pés e polgadas](topic:units-papers-scales#feet-and-inches-and-fractions)), e a seguinte cota lerá `12'-6 1/2"`. {{cmd:DIMLUNIT}} define só o formato das cotas (2 decimais, 3 de enxeñaría, 4 arquitectónico, 5 fraccionario). Para unha cota que xa fixo, seleccionea e escolla {{ui:Formato}} en {{ui:Propiedades}}; con formato fraccionario, a súa caixa {{ui:Fracción}} toma a potencia de dous (4 = 1/16).

## Cotas en mm, cm, m ou km

Unha cota mide en unidades do debuxo. Pode escribir esa lonxitude en milímetros, centímetros, metros ou quilómetros, co nome da unidade despois do número: un muro de 1250 mm lese `1250 mm`, `125 cm`, `1.25 m` ou `0.00125 km`.

1. Defina primeiro as {{ui:Unidades}} do debuxo en {{ui:Configuración actual}} (vexa [Unidades, tamaños de papel e escalas](topic:units-papers-scales#drawing-units)), para que CadCraft saiba cal é unha unidade do debuxo. Un debuxo sen unidades lese en milímetros, e {{cmd:DIMTEXTUNIT}} di iso.
2. Para as cotas novas: prema {{key:Esc}} para que non haxa nada seleccionado, e en {{ui:Cotas novas}} escolla {{ui:Unidades no texto}}: {{ui:Unidades do debuxo}}, `mm`, `cm`, `m` ou `km`.
3. Para as cotas que xa fixo: selecciónaas, e en {{ui:Propiedades}} › {{ui:Unidades primarias}} escolla {{ui:Unidades no texto}}.

Ou escriba {{cmd:DIMTEXTUNIT}} (`DTU`) e responda `D`, `MM`, `CM`, `M` ou `KM`: con cotas seleccionadas cámbiaas (un paso de desfacer), e sen nada seleccionado define as cotas novas.

{{ui:Decimais}} ({{cmd:DIMDEC}}) segue definindo cantas cifras decimais se ven: con metros e 3 decimais, 1234 mm lese `1.234 m`. O texto escríbese como número decimal. Nunha folla, as cotas miden na unidade de papel da folla (milímetros ou polgadas).

Un DWG ou DXF gardado conserva a escolla como escala de medida da cota (DIMLFAC) e un sufixo (DIMPOST, ` m`), para que outros programas amosen o mesmo texto. Se despois cambia as {{ui:Unidades}} do debuxo, as cotas escritas en mm, cm, m ou km readáptanse, de xeito que seguen dicindo a lonxitude correcta. {{ui:Definidas á man (escala ou sufixo)}} significa que a {{ui:Escala de medida}} ou o sufixo da cota se definiron doutro modo; escolla unha unidade para substituílos.

## Cambiar cotas que xa fixo

1. Prema unha cota. O título do panel dereito di {{ui:Cota}}.
2. Os axustes están en seccións; baixe no panel para chegar ás seguintes:
   - {{ui:Xeral}}: {{ui:Estilo de cota}}
   - {{ui:Xeometría}}: {{ui:Tipo}} e {{ui:Medición}} (só lectura)
   - {{ui:Texto}}: {{ui:Texto substituto}} e {{ui:Altura do texto}}
   - {{ui:Liñas e frechas}}: {{ui:Tamaño da frecha}}
   - {{ui:Axuste}}: {{ui:Escala global}}
   - {{ui:Unidades primarias}}: {{ui:Decimais}}
3. Escriba un valor novo e prema {{key:Enter}}.

A cota redebúxase de inmediato. Nas cotas angulares, {{ui:Decimais (°)}} define os decimais do ángulo.

:::note
Con varias cotas seleccionadas, o panel amosa as filas que comparten, e un valor que difire entre elas aparece como {{ui:Varía}}. Un valor que escriba cambia todas as cotas seleccionadas nun só paso, polo que un {{key:Mod+Z}} as devolve todas ao seu estado.
:::

## Cotas de debuxos abertos

Unha cota dun DWG ou DXF aberto amósase exactamente como a debuxou o outro programa. O seu panel di "Amosada como a debuxou o programa que a fixo. Cambiala e CadCraft volve debuxala no seu propio estilo." En canto cambia algún valor, move un punto de agarre ou move a cota, CadCraft redebúxaa coas súas propias frechas e tipo de letra, usando os tamaños que leu do ficheiro.

Algunhas cotas só se poden ler como se debuxaron, non como cotas editables; o panel amosa entón "Debuxada desde" e un nome de bloque, e o cadro "Acerca deste ficheiro" conta cantas hai.

## Erros frecuentes

- **Cambiar DIMSCALE non cambiou nada na pantalla.** O axuste é para as cotas novas. Seleccione as existentes e cambie {{ui:Escala global}} no panel.
- **Os decimais amosan menos cifras das definidas.** Os ceros finais elimínanse: con 2 decimais amósase `1250` e `1250.5`, non `1250.00`.
- **O texto ten a altura correcta no papel dunha xanela gráfica, pero mal nun debuxo impreso desde o modelo.** A escala global ten que coincidir coa escala á que imprime. Imprimir en Axustar ao papel dá unha escala rara; escolla unha escala estándar no diálogo de impresión.
- **Unidades como mm ou m no texto.** Escolla {{ui:Unidades no texto}} (vexa [Cotas en mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Para calquera outra palabra despois do número, escríbaa nun substituto: `<> TYP.`.

## Estilos de cota con nome

Escriba `DIMSTYLE` (`D`) para abrir o {{ui:Xestor de estilos de cota}}. Lista os estilos do debuxo, cantas cotas usa cada un e cal é o actual. **Standard** sempre está.

- {{ui:Definir como actual}}: as cotas novas usan a configuración dese estilo e levan o seu nome.
- {{ui:Novo…}}: un estilo novo que comeza como copia do que escolla.
- {{ui:Modificar…}}: os mesmos campos que a sección de cotas de {{ui:Propiedades}} (liñas e frechas, texto, axuste, unidades, unidades alternativas, tolerancias). Prema {{ui:Aceptar}} e o estilo cambia **e todas as cotas que o usan cambian con el**, axuste por axuste. Un axuste que cambiou nunha soa cota queda como está, salvo que o estilo cambie ese axuste.
- {{ui:Cambiar o nome…}} e {{ui:Eliminar}}: Standard non pode cambiar de nome nin eliminarse, nin tampouco o estilo actual ou un que usen cotas.
- {{ui:Comparar…}}: o que difire entre dous estilos.
- {{ui:Aplicar á selección}}: seleccione antes as cotas; tomarán a configuración do estilo e o seu nome.

`-DIMSTYLE` fai o mesmo na liña de comandos: `Restore`, `Save` (a configuración actual, incluído o que escribiu con {{cmd:DIMTXT}} e as demais, baixo un nome), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Os estilos gárdanse nun DWG ou DXF (na súa táboa de estilos de cota) e lense dos ficheiros que abre. O estilo *actual* non se garda: un debuxo ábrese con Standard como actual. Standard conserva a súa configuración mentres outro estilo é o actual.

## Cambiar o texto e as liñas de extensión

{{cmd:DIMEDIT}} (`DED`) traballa coas cotas que seleccione: **Inicio** devolve o texto ao lugar que lle dá o estilo, **Novo** escribe outro texto (`<>` representa a medición), **Xirar** xira o texto, **Oblicua** inclina as liñas de extensión das cotas lineais e alineadas nun ángulo que escriba (prema {{key:Enter}} para ningún). {{cmd:DIMTEDIT}} move o texto á **Esquerda**, **Dereita** ou **Centro** da liña de cota, ou xírao (**Ángulo**), ou envíao a **Inicio**. O texto sempre está sobre a liña de cota: non se pode arrastrar a un lugar libre.
