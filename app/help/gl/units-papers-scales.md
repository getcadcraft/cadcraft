---
title: Unidades, tamaños de papel e escalas
summary: O que significan as unidades do debuxo en CadCraft, os tamaños de papel para follas e trazados, cada escala estándar, e como se relacionan os tamaños do texto e das cotas coa escala de trazado.
keywords: unidades, milímetros, polgadas, pés, pés e polgadas, arquitectónico, enxeñaría, fraccionario, fraccións, lunits, formato de lonxitude, precisión, metros, tamaño de papel, a3, a1, arch d, ansi, tabloid, letter, escala, 1:100, 1/4 de polgada, escala arquitectónica, escala de enxeñaría, insunits
from: 8346236a
---

## Unidades de debuxo

Debuxa a tamaño real, en unidades de debuxo. O que representa unha unidade é o axuste **Unidades** do debuxo:

1. Prema {{key:Esc}} para que non haxa nada seleccionado, na lapela {{ui:Modelo}}.
2. En {{ui:Configuración actual}}, escolla {{ui:Unidades}}: {{ui:Sen unidades}}, {{ui:Milímetros}}, {{ui:Centímetros}}, {{ui:Metros}}, {{ui:Polgadas}} ou {{ui:Pés}}.

As cotas poden escribir as súas lonxitudes en milímetros, centímetros, metros ou quilómetros sen importar a unidade do debuxo: consulte [Cotas en mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Cambiar as unidades non redimensiona nada. Cambia como se len as escalas nas follas e nos trazados, e cales se ofrecen. Un debuxo aberto desde un DWG ou DXF conserva as unidades gardadas no ficheiro; a sección {{ui:Debuxo}} do panel esquerdo as amosa.

Un debuxo {{ui:Sen unidades}} trátase como se estivese na unidade do papel: milímetros en papel ISO, polgadas en papel US.

## Pés e polgadas, e fraccións

Como se **escriben e introducen** as lonxitudes é un axuste separado, o formato de lonxitude. Non cambia a xeometría, só o aspecto dos números e o que pode escribir.

1. Prema {{key:Esc}} para que non haxa nada seleccionado, na lapela {{ui:Modelo}}.
2. En {{ui:Configuración actual}}, escolla {{ui:Formato de lonxitude}}: {{ui:Decimal}} (`150.5`), {{ui:Arquitectónico}} (`12'-6 1/2"`), {{ui:Enxeñaría}} (`12'-6.5"`), {{ui:Fraccionario}} (`150 1/2`) ou {{ui:Científico}} (`1.505E+02`).
3. Escolla {{ui:Precisión}}: cifras decimais, ou a fracción máis pequena (1/16 é a elección habitual para o arquitectónico).

Ou escriba {{cmd:UNITS}} (`UN`) e responda as súas dúas preguntas.

Con {{ui:Arquitectónico}} ou {{ui:Enxeñaría}}, unha unidade de debuxo é unha polgada, como en AutoCAD: estableza tamén {{ui:Unidades}} en {{ui:Polgadas}}. Entón pode escribir lonxitudes en pés e polgadas en calquera lugar onde se pida unha lonxitude, e nas caixas de {{ui:Propiedades}}:

| Escribe | Significa |
|---|---|
| `12'6"` ou `12'-6"` | 12 pés e 6 polgadas (150) |
| `12'6-1/2"` | 12 pés e 6½ polgadas. Use un guión antes da fracción: {{key:Space}} é {{key:Enter}} na liña de comandos. |
| `12'` | 12 pés |
| `6"` ou `6` | 6 polgadas: un número simple son polgadas |
| `1/2`, `6-1/2` | as fraccións funcionan en calquera formato |

Os puntos aceptan as mesmas lonxitudes: `@12'6",0` ou `@10'<90`. Os ángulos seguen en graos.

O formato aparece no historial ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: as áreas en polgadas cadradas e pés cadrados), en {{ui:Propiedades}}, nas coordenadas da barra de estado e nas **novas cotas**. As follas conservan as súas unidades de papel (milímetros ou polgadas) como decimais.

:::note
O formato de lonxitude gárdase en ficheiros DWG e DXF, e cada cota conserva o seu: un debuxo gardado ábrese de novo tal como o deixou.
:::

## Tamaños de papel

As follas e os trazados de modelo usan estes tamaños, en calquera orientación:

| Papel | Tamaño | Unidade na folla |
|---|---|---|
| ISO A4 | 297 × 210 mm | milímetros |
| ISO A3 | 420 × 297 mm | milímetros |
| ISO A2 | 594 × 420 mm | milímetros |
| ISO A1 | 841 × 594 mm | milímetros |
| ISO A0 | 1189 × 841 mm | milímetros |
| Letter | 11 × 8.5 in | polgadas |
| Legal | 14 × 8.5 in | polgadas |
| Tabloid / ANSI B | 17 × 11 in | polgadas |
| ANSI C | 22 × 17 in | polgadas |
| ANSI D | 34 × 22 in | polgadas |
| ARCH C | 24 × 18 in | polgadas |
| ARCH D | 36 × 24 in | polgadas |
| ARCH E | 48 × 36 in | polgadas |

As follas novas comezan en ISO A3 para debuxos métricos e sen unidades, e en Tabloid para debuxos en polgadas ou pés. Os trazados de modelo comezan en ISO A4 ou Letter do mesmo xeito, e logo recordan a súa última elección. As follas de ficheiros abertos conservan o seu propio tamaño, amosado como "Personalizado" cando non é ningún destes.

## Escalas

Unha escala `1:n` significa que unha unidade no papel amosa n da mesma unidade no modelo, así que 1:100 amosa 1 m de edificio como 10 mm de papel. CadCraft calcúlao a partir das unidades do debuxo e da unidade do papel.

**Escalas métricas**, ofrecidas para todos os debuxos: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Escalas arquitectónicas**, ofrecidas cando as unidades son polgadas ou pés: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Escalas de enxeñaría**, ofrecidas cando as unidades son polgadas ou pés: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**As súas propias escalas.** Escriba `SCALELISTEDIT` (ou `SCALELIST`) para engadir unha escala propia, como 1:75 ou unha escala de emprazamento de 2 de papel : 300 de debuxo. `Add` pide un nome, logo as unidades de papel e as do debuxo (un nome como `1:75` ofrece os seus propios números; prema {{key:Enter}} para tomalos). `Edit`, `Delete`, `List` e `Reset` traballan sobre a mesma lista; `Reset` volve á lista estándar. As súas escalas aparecen despois das estándar na lista de escalas de viewport en {{ui:Propiedades}} e no diálogo {{ui:Trazar a PDF}}; unha viewport a esa escala lese co seu nome, e gárdanse no debuxo (DWG e DXF 2000) como a lista de escalas do debuxo. Un debuxo aberto desde outro programa trae a súa lista; as escalas que coinciden cunha estándar non se amosan dúas veces.

Cando unha viewport se apunta con {{ui:Mostrar todo o modelo}} ou {{ui:Seleccione unha xanela no modelo…}}, CadCraft escolle a escala estándar máis grande que cabe. {{ui:Axustar todo o modelo}} establece en cambio unha escala exacta, que se le como unha razón simple.

## Tamaños no papel e no modelo

Os tamaños do texto e das cotas están nas unidades do espazo no que debuxa.

| Quere no papel | Debuxado nunha folla | Debuxado no modelo a 1:50 (debuxo en mm) | Debuxado no modelo a 1/4" = 1'-0" (debuxo en polgadas) |
|---|---|---|---|
| Texto de 2,5 mm | 2.5 | 125 | — |
| Texto de 3/32" | 0.09375 | — | 4.5 |

Para as cotas, manteña os tamaños como tamaños de papel e estableza a escala global ({{cmd:DIMSCALE}}) á escala de trazado: 50 para 1:50, 48 para 1/4" = 1'-0". Consulte [Establecer tamaños das cotas](topic:dimension-settings).

## Anotar por escala

Debuxe o modelo a tamaño real e deixe que CadCraft faga as contas anteriores por vostede.

1. Seleccione o texto ou as cotas que deben manter o seu tamaño no papel. En {{ui:Propiedades}} marque {{ui:Anotativo}}. {{ui:Tamaño no papel}} amosa entón, por exemplo, `2.5 mm a 1:50`.
2. Escriba {{cmd:ANNOSCALE}} e a escala á que se imprimirá o debuxo, por exemplo `1:100`.

Cada texto e cota anotativa redimensiónase para que se imprima co mesmo tamaño na nova escala: un texto de 2,5 mm mide 125 de alto nun debuxo en milímetros a 1:50, e 250 a 1:100. O ancho dun párrafo cambia con el; o texto, as frechas e os espazos dunha cota cambian xuntos (a súa escala global). É un só paso de desfacer, e os obxectos non anotativos nunca se cambian.

O axuste gárdase en DWG e DXF: outros programas len a marca de anotativo, e CadCraft tamén conserva a escala para a que está dimensionado cada obxecto.

Se a súa oficina fixa alturas de papel no complemento Default Policies (Configuración › Global › Default Policies › Annotation sizes on paper), {{cmd:ANNOSCALE}} tamén establece a altura coa que comeza o texto novo á altura da oficina para as notas a esa escala. Consulte [Default Policies](topic:default-policies).

### Un obxecto a varias escalas

Unha folla amosa a miúdo o mesmo plano a 1:100 e unha parte del a 1:50. Dé ás notas e ás cotas as dúas escalas, e cada viewport as amosará co seu tamaño en papel:

1. Seleccione o texto e as cotas anotativas e escriba `OBJECTSCALE`.
2. Escolla `Add` e escriba a escala, por exemplo `1:50`. (`Current scale` engade a escala de anotación do debuxo; `List` amosa o que garda cada obxecto; `Delete` quita unha.)

Unha viewport cuxa escala está na lista dun obxecto amósao co tamaño desa escala: un texto de 2,5 mm debúxase de 250 de alto nunha viewport 1:100 e de 125 nunha 1:50, en pantalla e no trazado. O obxecto permanece onde está; só cambia o seu tamaño. Nunha viewport cunha escala que non está na lista do obxecto, este amósase co tamaño que xa ten, ata que escriba `ANNOALLVISIBLE` e escolla `OFF`: entón queda fóra. {{cmd:ANNOSCALE}} redimensiona os obxectos que listan a nova escala e deixa os demais como están.

As listas gárdanse en DWG e DXF como datos propios de CadCraft. Outro programa ve cada obxecto como anotativo, na única escala para a que está dimensionado. O conmutador ANNOALLVISIBLE non se conserva no ficheiro.

## Grosores e tipos de liña

Unha capa, ou un obxecto, pode ter un **grosor de liña** (0,05 a 2,11 mm) e un **tipo de liña** (discontinua, oculta, centro, fantasma, punto…). Estabelézanse no panel dereito: sen nada seleccionado, {{ui:Tipo de liña}} e {{ui:Grosor de liña}} baixo {{ui:Configuración actual}} son o que reciben os obxectos novos ({{ui:Por capa}} para seguir a súa capa), e os dous baixo {{ui:Capa …}} son os da capa actual. Con obxectos seleccionados, as mesmas dúas filas e {{ui:Escala do tipo de liña}} cambian eses obxectos. Os comandos son {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) e {{cmd:LTSCALE}} (`LTS`).

Os tipos de liña amósanse en pantalla e nos trazados. As súas trazas están en unidades de debuxo: un debuxo métrico usa os tamaños ISO (DASHED: trazas de 12,7 mm), e un debuxo en polgadas os de polgada (0.5"). Se as trazas parecen demasiado pequenas ou grandes, cambie a {{ui:Escala do tipo de liña}} do debuxo (LTSCALE): cada traza e cada espazo multiplícanse por ela; a escala propia dun obxecto multiplícase de novo. Un patrón demasiado fino para verse debúxase como liña continua.

Os grosores de liña imprímense nos trazados, en mm sobre o papel, sexa cal sexa a escala. As liñas co grosor {{ui:Predeterminado}} usan a anchura de pluma escollida no diálogo {{ui:Trazar a PDF}} (0,13 a 0,70 mm; 0,25 mm ao principio); un grosor de 0 imprímese como a liña máis fina. Na pantalla cada liña mide un píxel de ancho ata que prema {{ui:LWT}} na barra de estado (ou escriba {{cmd:LWDISPLAY}}): entón un grosor superior a 0,25 mm debúxase máis ancho (0,5 mm = 2 píxeles) no modelo, e co seu ancho real no papel nunha folla. A elección gárdase neste navegador.
