---
title: Abrir un DWG, editalo e gardar unha copia
summary: Abra un debuxo que lle enviaron, comprobe o que chegou, faga un cambio e envíe unha copia como DWG ou DXF.
keywords: dwg, dxf, abrir, importar, exportar, gardar, r12, ida e volta, consultor, xref, comprobar debuxo, gardar como, saveas, gardar dwg, formato
from: 49de4bf6
---

## Que vai facer

Abra un DWG dun consultor, comprobe o que CadCraft podía e non podía mostrar, engada unha nota, trace unha folla a PDF e garde unha copia para enviala de volta, como DWG ou DXF.

## Abrir o ficheiro

1. Prema {{key:Mod+O}}, ou faga clic en {{ui:Abrir}}.
2. Escolla o ficheiro `.dwg`.

A liña de estado amosa "Lendo …" mentres se le o debuxo. Cando remate, o debuxo enche a pantalla e o historial di, por exemplo, "Aberto plan.dwg: 18.240 obxectos en 64 capas", con canto tempo levou.

:::offline
Está sen conexión. Se o botón {{ui:Gardar para usar sen conexión}} di "Listo para usar sen conexión", os ficheiros DWG ábrense normalmente. Se non, e se aínda non se abriu ningún DWG nesta lapela, abrir un DWG pode fallar porque o lector de DWG de CadCraft se descarga co primeiro DWG: abra un DXF, ou garde CadCraft para usar sen conexión a próxima vez que estea en liña. Consulte [Traballar sen conexión](common:offline).
:::

## Comprobar o que chegou

1. Mire a sección {{ui:Debuxo}} do panel esquerdo: formato e versión, unidades, número de obxectos e capas, e follas.
2. Lea a caixa "Acerca deste ficheiro" debaixo, se hai unha.

A caixa lista:

- **Non se amosa aínda:** obxectos que CadCraft aínda non pode debuxar, por tipo e cantidade. Déixanse fóra, non se adiviñan.
- **Chegaron as disposicións (follas):** ábranas coas pestanas debaixo do debuxo.
- **Cotas que só se puideron ler tal como se debuxaron.**

3. Faga clic nas pestanas debaixo do debuxo para ver cada folla.
4. Comprobe {{ui:Unidades}} en {{ui:Configuración actual}} (sen nada seleccionado, pestana {{ui:Modelo}}). Se di {{ui:Sen unidades}} pero sabe que o debuxo está en milímetros, fíxeo, para que as escalas da folla e do trazado se lean ben.

:::tip
Se esperaba unha parte do debuxo e non a ve, comprobe o panel {{ui:Capas}}: a capa pode estar apagada ou conxelada no ficheiro. Faga clic no seu nome para facela activa; iso a acende.
:::

## Faga o seu cambio

1. Cree unha capa para as súas notas: faga clic en {{ui:Nova capa}}, escriba `NOTAS` e prema {{key:Enter}}.
2. Escriba `DT` e prema {{key:Enter}}.
3. Faga clic onde vaia a nota.
4. Escriba unha altura de texto axeitada ao debuxo (consulte [Engadir texto e etiquetas](topic:text)) e prema {{key:Enter}}.
5. Prema {{key:Enter}} para manter a rotación en 0.
6. Escriba a súa nota e prema {{key:Enter}}.
7. Prema {{key:Enter}} de novo para rematar.

Os cambios nas cotas importadas están ben: en canto cambie unha, CadCraft a redebuxa co seu propio estilo.

## Trazar unha folla para revisar

1. Faga clic na pestana da folla.
2. Prema {{key:Mod+P}}.
3. Faga clic en {{ui:Download PDF}}.

Consulte [Trazar a PDF](topic:plot-pdf).

## Gardar unha copia

1. Prema {{key:Mod+S}}, ou faga clic en {{ui:Gardar}}.

Abriu un DWG, así que o navegador descarga `<nome>.dwg`, na versión na que chegou o DWG. O historial di, por exemplo, "Copia gardada como Plan.dwg (DWG (AutoCAD 2018))." e lista, nas liñas debaixo, o que cambiou polo camiño.

2. Lea esas liñas antes de enviar o ficheiro. [Que conserva e que cambia un DWG](topic:files#what-a-dwg-keeps-and-changes) explica cada unha.

O seu DWG orixinal non se cambia nunca. Cada gardado é unha descarga nova.

## Gardar como DWG ou DXF

Para escoller vostede o formato:

1. Prema {{key:Mod+Shift+S}}, ou faga clic en {{ui:Gardar como}}.

O diálogo {{ui:Gardar unha copia como}} abre con catro opcións, cada unha co nome de ficheiro que lle dará: {{ui:DWG}}, coa súa lista {{ui:Versión}}, {{ui:DXF R12}}, {{ui:DXF 2000}} e {{ui:DXF 2000 (binary)}}. O formato e a versión actuais do debuxo xa están escollidos.

2. Faga clic no formato que quere. Para DWG, escolla a versión que usa a outra oficina, ou unha máis antiga: AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000.
3. Faga clic en {{ui:Gardar}}.

A copia descárgase. Desde agora, {{key:Mod+S}} garda este debuxo nese formato, e os debuxos novos tamén comezan con el, neste navegador. {{ui:Cancelar}} ou {{key:Esc}} non garda nada, e o historial di "Non gardado."

Cal escoller:

- **DWG** conserva o máis: follas cos seus vistas de folla, cotas reais, padróns de trama, nomes de capa e de bloque tal como os escribiu, e texto de varias liñas como texto de varias liñas. A versión AutoCAD 2000 ábrese no maior número de programas; 2004 e posteriores conservan tamén as cores verdadeiras.
- **DXF 2000** é un ficheiro de texto que conserva case o mesmo que un DWG: cada folla como disposición coas súas vistas de folla, cotas reais, padróns de trama, cores verdadeiras, grosores de liña, tipos de liña e nomes tal como os escribiu. Ábrese en AutoCAD 2000 e posteriores e na maioría dos programas CAD. As multiliñas pasan a ser as liñas, puntas de frecha e texto que debuxan. Un DXF aberto na versión 2000 ou posterior gárdase como DXF 2000.
- **DXF 2000 (binary)** contén o mesmo contido que DXF 2000 na forma binaria do formato: un ficheiro máis pequeno que conserva cada número exactamente. Os ficheiros DXF binarios doutros programas ábrense como os de texto, e un debuxo aberto desde un DXF binario gárdase de novo como binario.
- **DXF R12** ábrese en case calquera programa CAD. Conserva a primeira folla coas súas vistas de folla, e as outras follas de CadCraft. Simplifica as cousas máis novas, como o texto de varias liñas e as tramas.

## Que verá a outra oficina

En un DWG:

- Liñas, arcos, círculos, elipses, polilíneas, texto, texto de varias liñas, bloques cos seus atributos, recheos sólidos, padróns de trama e capas tal como os ve.
- Cotas reais: o outro programa as volve medir cando se estiran.
- Cada folla, co seu papel e as súas vistas de folla.
- Multiliñas como multiliñas. Na versión AutoCAD 2000, as cores verdadeiras pasan á cor estándar máis próxima.

En un DXF R12:

- Liñas, arcos, círculos, polilíneas, texto, referencias de bloque e cotas tal como as ve. As cotas seguen sendo cotas reais.
- Nomes de capa en maiúsculas, cos espazos trocados por `_`.
- A primeira folla como espazo papel do debuxo, coas súas vistas de folla. As outras follas chegan como bloques chamados `CCLAYOUT_1` e así sucesivamente; se precisan cada folla como disposición, envíeles tamén un PDF de cada folla.
- Texto de varias liñas como liñas separadas, elipses como polilíneas, tramas como contornos.

En calquera caso, o que aparecía como "Non se amosa aínda" ao abrir o DWG **non** está na copia, salvo que o historial diga que se conservou: os obxectos OLE dun DWG e os seus sólidos 3D no espazo modelo gárdanse de novo cando garda como DWG. Dígallo e envíe tamén un PDF.

## Erros frecuentes

- **"CadCraft abre debuxos DWG e DXF."** O ficheiro ten outra extensión. Comprobe que é `.dwg` ou `.dxf`.
- **"Non se puido ler este debuxo."** O DWG está danado ou nunha versión que o lector non manexa. Pida un DXF, ou o DWG gardado nunha versión máis antiga.
- **"Este DXF binario acaba no medio dun obxecto."** O ficheiro está cortado ou danado. Escriba RECOVER para abrir o que se pode ler, ou pida o ficheiro de novo.
- **O ficheiro gardado chámase `nome (1).dwg` ou `nome (1).dxf`.** O navegador faino cando xa hai un ficheiro co mesmo nome na carpeta.
- **Teñen un programa máis antigo que non pode abrir o DWG.** Garde como DWG coa {{ui:Versión}} {{ui:AutoCAD 2000}}, ou como {{ui:DXF R12}}: case calquera programa CAD o abre.
- **Faltan partes do debuxo.** Os debuxos ligados (xrefs) non se cargan ata que escolla os seus ficheiros ({{cmd:XREF}}, `R`), e as imaxes amósanse como marcos cos seus nomes de ficheiro.
