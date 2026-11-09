---
title: Ficheiros: que se abre, que se garda
summary: Os formatos que CadCraft abre, garda e exporta, o que se conserva ou se converte e onde van os ficheiros.
keywords: xclip, recorte, límite de xclip, unir recortados, dwg, dxf, pdf, r12, abrir, gardar, exportar, importar, formatos, conversión, descargar, saveas, dxfout, gardar como, gardar dwg, formato, qsave, xref, xattach, debuxo ligado, referencia externa, unir, recargar, separar
from: 6d68b34e
---

## Vista xeral

| Formato | Abrir | Gardar | Notas |
|---|---|---|---|
| DXF (texto, calquera versión) | Si | Si, como DXF R12 ou DXF 2000 | O DXF binario recházase: gráveo primeiro como DXF de texto. |
| DWG | Si | Si, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ou 2018) | Lido e escrito pola propia biblioteca DWG de CadCraft (ficheiros AutoCAD R13 a 2018). O seu DWG nunca se modifica. Os ficheiros danados, ou as versións que o lector non trata, recházanse cunha mensaxe. |
| PDF | Importa unha páxina: como subxacente ou como obxectos ([Subxacentes PDF](topic:pdf-underlay)) | Si, trazando | PDF vectorial dunha folla, ou do modelo a unha escala. |

Cada debuxo que abre (ou que inicia con {{ui:Nova}}) ten unha pestana propia sobre a área de debuxo; un debuxo novo que aínda ninguén tocou úsase no lugar de engadir unha pestana. Prema nunha pestana para cambiar, no seu {{ui:×}} para pechala (CadCraft pregunta antes se hai cambios sen gardar), ou coloque os debuxos abertos lado a lado: vexa [Dividir a pantalla](topic:split-screen).

## Abrir un debuxo

- Prema {{key:Mod+O}}, prema en {{ui:Abrir}}, ou escriba `OPEN`, e logo escolla o ficheiro.
- Ou arrastre un ficheiro `.dwg` ou `.dxf` sobre a área de debuxo.

O ficheiro lese dentro do seu navegador. Non se envía a ningures. O historial informa de cantos obxectos e capas entraron e canto tardou, e a sección {{ui:Debuxo}} do panel esquerdo amosa o formato, por exemplo «DWG 2018 (AC1032)».

O lector de DWG forma parte de CadCraft e descárgase co primeiro DWG que abra despois de cargar a páxina (algunhas centenas de KB), así que non hai unha descarga separada que esperar. Lé o ficheiro en segundo plano, de modo que a páxina segue respondendo mentres se abre un DWG grande.

### Que entra

- Liñas, arcos, círculos, polilíñas (con segmentos de arco), elipses, puntos, texto e texto de varias liñas, sólidos, tramas (os patróns estándar debuxados como as súas liñas, os demais como un tono plano), referencias de bloque cos seus atributos (valores que se poden editar; vexa [Atributos de bloque](topic:attributes)), cotas e follas cos seus viewports.
- As splines entran como splines (grao, puntos de control, nós, pesos, puntos de axuste); vexa [Splines e polilíñas](topic:splines).
- As referencias múltiples cunha liña de referencia e texto entran como referencias múltiples de CadCraft que se poden editar (vexa {{cmd:MLEADER}}). As demais (con bloque, varias liñas de referencia ou liñas curvas) debúxanse como as debuxou o outro programa e móvense como un só obxecto; o historial di cantas son.
- As imaxes (fotos) amósanse como un marco co nome do ficheiro da imaxe ata que lle dea a CadCraft o ficheiro con {{cmd:IMAGE}}: vexa [Imaxes nun debuxo](topic:pictures#show-the-pictures-a-dwg-uses). Os wipeouts amósanse como o seu marco, e o que hai debaixo segue visible.
- As táboas dun DWG entran como as debuxou o outro programa.
- As caras 3D do espazo do modelo entran na pestana {{ui:3D}}, non como obxectos 2D; o mesmo ocorre cas que hai dentro de bloques, unha vez por referencia de bloque no modelo. Dentro dun bloque e nunha folla debúxanse tamén planas, como contornos. Vexa [Modelo en 3D](topic:3d-solids).
- As capas conservan a súa cor, activada, conxelada, bloqueada e os axustes de trazado. DEFPOINTS nunca se traza.
- As cotas convértense en cotas reais e editables de CadCraft cando se poden ler os seus puntos. Ao principio amósanse exactamente como as debuxou o outro programa; en canto cambia unha, CadCraft a redebuxa co seu propio estilo.
- Cada folla convértese nunha pestana de folla. No outro programa cada folla ten un primeiro viewport oculto que é a propia folla; CadCraft deixa ese fóra.

### O que aínda non entra

Calquera cousa que CadCraft non pode debuxar cóntase, non se adiviña. A caixa «Acerca deste ficheiro» do panel esquerdo lista como «Aínda sen amosar:» seguido de cada tipo de obxecto e cantos son. Os casos típicos son as táboas nun DXF, as mallas (meshes) e os sólidos 3D dentro de bloques. Os sólidos 3D, as rexións e os corpos no espazo do modelo amósanse na pestana 3D (vexa [Modelo en 3D](topic:3d-solids#solids-from-other-programs)). Os viewports xirados no ficheiro amósanse xirados, como alí, e conservan o xiro ao gardar; tamén o UCS actual, os UCS con nome e unha vista xirada.

O texto debúxase cunha única fonte de estilo Helvetica. Unha etiqueta que cabe nunha liña na fonte, máis estreita, do programa orixinal pode partirse en dúas liñas en CadCraft.

## Gardar

Hai tres xeitos de gardar. Cada un descarga unha copia.

- **Gardar**: prema {{key:Mod+S}}, prema en {{ui:Gardar}}, ou escriba `SAVE` (tamén `QSAVE`). Garda no formato do debuxo: DWG se abriu un DWG, DXF se abriu un DXF. Un DWG conserva a versión coa que chegou (un ficheiro 2018 gárdase como 2018). Un debuxo novo usa o formato e a versión DWG que escolleu por última vez en Gardar como neste navegador; se nunca escolleu ningún, DWG no formato AutoCAD 2000.
- **Gardar como**: prema {{key:Mod+Shift+S}}, prema en {{ui:Gardar como}}, ou escriba `SAVEAS`. O diálogo {{ui:Gardar unha copia como}} ofrece {{ui:DWG}}, cunha lista {{ui:Versión}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000), {{ui:DXF R12}} e {{ui:DXF 2000}}, cada un co nome de ficheiro que dará, e xa seleccionados o formato e a versión actuais do debuxo. Prema {{ui:Gardar}} para descargar, ou {{ui:Cancelar}} (ou {{key:Esc}}) para non gardar nada; o historial dirá entón «Non gardado». O que escolla queda: {{key:Mod+S}} úsao para este debuxo desde ese momento, e os debuxos novos neste navegador comezan con el.
- **DXFOUT**: escriba `DXFOUT`. Descarga sempre unha copia DXF R12, e o seguinte {{key:Mod+S}} segue gardando no formato propio do debuxo.

O navegador descarga `<nome do debuxo>.dwg` ou `<nome do debuxo>.dxf`. Cada gardado é unha **nova descarga**; o ficheiro que abriu nunca se sobrescribe nin se cambia. O historial confírmao, por exemplo «Copia gardada como Plan.dwg (DWG (AutoCAD 2018)). O seu Plan.dxf orixinal non cambiou.» Nun DXF di «(DXF R12, ábrese en calquera programa CAD)». As liñas debaixo listan calquera cambio que se produciu no proceso.

Cando CadCraft funciona na aplicación de escritorio, gardar funciona como en outros programas de escritorio: {{key:Mod+S}} escribe o debuxo de volta no ficheiro que abriu, no seu propio formato e versión, e o historial di onde se gardou. {{ui:Gardar como}} e as exportacións amosan o diálogo de gardar do sistema, e un ficheiro `.dwg`, `.dxf` ou `.ccsheets` que faga dobre clic ábrese en CadCraft.

Para un PDF, trace no seu lugar (vexa máis abaixo).

## Que conserva e que cambia un DWG

CadCraft escribe o propio DWG dentro do seu navegador, coa mesma biblioteca DWG coa que lé. Escolla a versión en Gardar como: o formato AutoCAD 2000 (versión de ficheiro AC1015) ábrese na maioría dos programas, tamén nos antigos; os formatos máis novos (2004, AC1018, ata 2018, AC1032) conservan tamén as cores verdadeiras. Non se envía nada, e gardar un DWG funciona sen conexión.

Cada versión compróbase lendo de novo os ficheiros gardados cos lectores DWG de tres outros programas e co propio CadCraft. Aínda non se abriu un DWG de CadCraft no propio AutoCAD.

### Que conserva un DWG

- Liñas, arcos, círculos, elipses, puntos e polilíñas cos seus segmentos de arco.
- Texto dunha liña coa súa aliñación e factor de ancho.
- Texto de varias liñas e con axuste, como texto de varias liñas. O outro programa volve axustalo co mesmo ancho.
- Cores dos obxectos: por capa, por bloque, as 255 cores estándar e as cores verdadeiras no formato 2004 e posteriores.
- Capas coa súa cor, tipo de liña, grosor de liña e os seus axustes de activada, conxelada, bloqueada e de trazado; os tipos de liña, grosores e escalas de tipo de liña propios dos obxectos, os patróns dos tipos de liña e a escala de tipo de liña do debuxo.
- As unidades do debuxo e o formato de lonxitude (decimal, pés e polgadas, fraccións…).
- Bloques co seu punto base e as definicións de atributos, incluídos os invisibles, constantes e predefinidos.
- Referencias de bloque coa súa escala, xiro e valores de atributo.
- Recheos sólidos e tramas con patrón coa súa escala e ángulo (as liñas propias do patrón, de xeito que os outros programas debuxan as mesmas liñas que CadCraft).
- Cotas, como cotas reais: os outros programas volven medilas cando se estiran. Cada unha conserva os seus propios axustes (altura do texto, tamaño da frecha, decimais, formato de lonxitude) e o seu texto, e leva a copia debuxada que ten toda cota DWG.
- Follas: cada folla co seu tamaño de papel e unidades, o que se debuxa nela, e os seus viewports coa súa vista e escala.
- Vistas con nome.
- Referencias múltiples, como referencias múltiples.
- Os nomes de capas e bloques tal como os escribiu, en maiúsculas e minúsculas. (DXF R12 escríbeos en maiúsculas.)

### Que cambia un DWG

O historial enumera cada un destes cambios despois de gardar, cando se aplique ao seu debuxo.

| En CadCraft | No DWG gardado |
|---|---|
| Cores verdadeiras (escollidas co selector de cor), no formato 2000 | A cor estándar máis próxima: o formato 2000 só ten as 255. Grave como 2004 ou posterior para conservalas |
| Vistas con nome dunha folla | Vistas do espazo de papel: un DWG non indica a que folla pertencen, así que cando CadCraft volve abrir o ficheiro pertencen á primeira folla |
| Texto de varias liñas con factor de ancho | Ancho de letra normal: nun DWG o factor de ancho aplícase só ao texto dunha liña |
| Nomes de capa ou bloque con caracteres que DWG non permite | Cambiado: un nome dun debuxo ligado, como `Base\|Walls`, pasa a ser `Base$0$Walls` (o xeito en que unir un debuxo ligado o nomea), e os demais caracteres pasan a ser `_` |

### Por que R12, e que se converte

Cando garda como DXF, CadCraft escribe DXF R12, a versión que pode abrir calquera programa CAD. É máis antiga que algunhas funcións, polo que algunhas cousas escríbense dun xeito máis simple:

| En CadCraft | No ficheiro R12 gardado |
|---|---|
| Texto de varias liñas | Un obxecto de texto por liña |
| Elipses | Polilíñas que seguen a elipse |
| Tramas (de ficheiros abertos) | Só os seus contornos |
| Cores verdadeiras (escollidas co selector de cor) | A cor estándar máis próxima |
| Grosores de liña, e escalas de tipo de liña propias dos obxectos | Non se inclúen: R12 non ten ningún dos dous (os tipos de liña consérvanse) |
| Nomes de capa e bloque | Escritos en maiúsculas; os espazos e os demais caracteres pasan a ser `_`, e os nomes córtanse a 31 caracteres («Title block» pasa a ser `TITLE_BLOCK`) |
| Capas configuradas para non trazar | Os outros programas trazarán (CadCraft lembra o axuste cando o debuxo ten unha folla) |
| Cotas | Cotas reais co seu propio bloque debuxado, de modo que os outros programas as amosan como as ve |
| Referencias múltiples | As liñas, a punta de frecha e o texto que debuxan |
| Vistas con nome | Consérvanse, con nomes en maiúsculas; as vistas dunha folla volven na primeira folla |
| Varias follas | A primeira folla é o espazo de papel que amosa todo programa; as demais consérvanse como bloques chamados `CCLAYOUT_1`, `CCLAYOUT_2` … que CadCraft volve converter en follas ao abrir o ficheiro |

O historial enumera cada un destes que se aplicou ao seu debuxo.

:::tip
Para seguir traballando nun debuxo durante varios días, grave como DXF e abra ese DXF a próxima vez. Todo o que CadCraft pode debuxar sobrevive á ida e volta, incluídas as cotas, os bloques e todas as follas.
:::

## Debuxos ligados (referencias externas)

{{cmd:XATTACH}} (`XA`, ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Ligar un debuxo (xref)}}) liga outro DWG ou DXF: escolla o ficheiro e logo prema onde irá ({{key:Enter}} coloca no punto 0,0). Entra como un só bloque co nome do ficheiro, na escala correcta cando os dous debuxos teñen unidades diferentes. As súas capas e bloques conservan os seus nomes co nome da ligazón por diante —`Plan|Walls`, `Plan|Door`— de xeito que nunca se mesturan cos seus: active e desactive as capas ligadas, conxélaas ou bloquéeas como as propias. Unha ligazón é de só lectura: cambie o outro debuxo e recárgueo. O que fixe nas capas dunha ligazón (cor, tipo de liña, grosor, activada/desactivada, conxelada, bloqueada, trazado) consérvase ao recargala, ao gardar o debuxo como DWG mentres a ligazón segue sendo unha ligazón, e cando outro debuxo liga este.

{{cmd:XREF}} (`XR`): `?` enumera as ligazóns (cargadas ou non, que ficheiro, cantas referencias); `A` engade; `R` recarga unha desde o seu ficheiro (escolla o ficheiro de novo: o navegador non pode acceder por si só ás súas carpetas); `B` une unha (pasa a ser bloques e capas normais con nome `Plan$0$Walls`); `D` separa unha (as súas referencias e capas desaparecen). Cada un é un paso de desfacer.

{{cmd:XCLIP}} (`XC`) recorta referencias de bloque e ligazóns: selecciónoas, `N` para un novo límite, logo `R` e dúas esquinas ou `P` e os puntos dun polígono ({{key:Enter}} pecha o polígono); `D` quita o recorte. Só se amosa e traza o que está dentro, e o recorte móvese coa referencia. DWG e DXF 2000 conservan os recortes; DXF R12 garda a referencia completa e di iso. Cando une unha ligazón que ten referencias recortadas, {{cmd:XREF}} `B` pregunta: `A` une todo, `C` conserva só a parte recortada de cada referencia (as liñas e arcos córtanse no límite; os textos e os bloques aniñados quedan cando o seu punto de inserción está dentro).

Un debuxo que abra pode ligar ficheiros que CadCraft non pode ver: indica cantos non están cargados. Use {{cmd:XREF}}, `R` e escolla cada ficheiro para velos.

Ao gardar, unha ligazón cargada é **unida** ao ficheiro (os outros programas ven bloques e capas normais chamados `Plan$0$…`), e o historial así o di. Unha ligazón que non está cargada segue sendo unha ligazón ao seu ficheiro, en DWG e DXF.

## Abrir en 3D

{{ui:Vista}} › {{ui:Máis}} › {{ui:Abrir en ModelCraft}} ({{cmd:OPENIN3D}}) abre o debuxo na aplicación de modelado 3D nunha nova pestana, como DWG, sen subilo. Os cambios feitos alí quedan alí; grávaos alí. A opción do menú só se amosa onde esa aplicación pode recibir un debuxo entregado.

## Trazar un PDF

Prema {{key:Mod+P}}, prema en {{ui:Trazar}}, ou escriba `PLOT`. O PDF xérase dentro do navegador e descárgase, ou ábrese nunha nova pestana para imprimir. Vexa [Trazar a PDF](topic:plot-pdf).

## Onde van os ficheiros

Cada gardado e cada trazado é unha descarga, así que os ficheiros acaban onde o seu navegador pon as descargas: normalmente na carpeta Descargas. Para escoller unha carpeta cada vez, cambie o axuste de descarga do seu navegador; [Navegadores e ordenadores](common:browsers) indica onde.

Non se envía a nós nada do que abre ou garda. Vexa [Onde van os seus ficheiros](common:your-files).

## Ficheiros de proxecto PLN e PLA

CadCraft abre debuxos DWG e DXF, non os ficheiros propios de Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Ao abrir un deles indícalle o que é. En Archicad, grave as vistas ou follas que precise como DWG e ábraas aquí, ou exporte o modelo como IFC e ábrao en BimCraft. Onde BimCraft poida recibir o ficheiro, CadCraft ofrece {{ui:Abrir en BimCraft}}.

## Se a páxina se pecha antes de gardar

CadCraft garda unha copia de cada debuxo que cambia, só neste navegador, un momento despois de deixar de editar. Se a pestana se pecha, o navegador se detén ou o ordenador se reinicia antes de gardar, CadCraft pregunta **Recuperar o seu traballo?** a próxima vez que arranque: {{ui:Recuperar}} abre o debuxo de novo, sen gardar, na súa propia pestana. Gardar o debuxo elimina a súa copia. Vexa [Recuperar o seu traballo](common:recover).

## En liña e sen conexión

Abrir, debuxar, gardar (DWG e DXF) e trazar fanse todo no seu ordenador, así que funcionan sen conexión unha vez que CadCraft se cargou.

Para usar CadCraft sen conexión ningunha, prema {{ui:Gardar para usar sen conexión}} na barra superior mentres está en liña. A etiqueta vai contando («Gardando 40 de 212») e remata en «Listo sen conexión». A copia gardada inclúe o lector DWG, uns 5 MB en total, así que **os ficheiros DWG tamén se abren sen conexión** unha vez gardada. Prema de novo o botón para {{ui:Gardar de novo (obter a versión máis recente)}} ou {{ui:Quitar a copia sen conexión}}. «Non se puido gardar» significa que non se descargaron algúns ficheiros: comprobe a conexión e prema para tentalo de novo. «Sen conexión non dispoñible» significa que esta xanela do navegador non pode conservar unha copia (xanelas privadas e algúns ordenadores xestionados).

Sen unha copia gardada, o lector DWG descárgase a primeira vez que abre un DWG despois de cargar a páxina, así que abrir un DWG sen conexión pode fallar; os ficheiros DXF nunca o necesitan. Non recargue a páxina sen conexión salvo que CadCraft estea gardado.

Vexa [Traballar sen conexión](common:offline) para os detalles.

:::offline
Está sen conexión agora. Os debuxos gárdanse como DWG ou DXF e trazan con normalidade, e os ficheiros DXF ábrense. Os ficheiros DWG ábrense se CadCraft amosa «Listo sen conexión», ou se o lector DWG xa se cargou nesta pestana.
:::

## Restricións nos ficheiros

As restricións e os parámetros (vexa [Restrinxir un debuxo](topic:constraints)) gárdanse tanto en DWG como en DXF. Cada obxecto restrinxido leva unha pequena nota de CadCraft (datos estendidos), e un bloque sen usar chamado `CADCRAFT_PARAMETRIC` contén as restricións e a táboa de parámetros. Os outros programas abren o debuxo con normalidade e ignoran as dúas cousas; poden eliminar o bloque sen usar ao purgar. As notas refiren os obxectos pola súa propia clave, non polos manexadores do ficheiro, así que un programa que renumera os manexadores non as rompe. Cando outro programa eliminou ou cambiou un obxecto restrinxido, CadCraft descarta as restricións sobre el ao abrir o ficheiro e di cantas son. Un ficheiro sen elas ábrese sen restricións.

Tamén se abre un esbozo exportado desde un modelador de pezas (`.json`): vexa [Mover esbozos desde e cara a outros modeladores de pezas](topic:solidworks-sketches).

## Aínda non dispoñible

- Referencias múltiples como obxectos de referencia múltiple nun DXF gardado (R12 non ten ningún: gárdanse como o que debuxan).
- Imaxes nun DXF gardado (gárdanse como os seus marcos; DWG consérvaas como imaxes), e wipeouts que ocultan o que hai debaixo.
- Gardar unha versión de DXF máis nova que 2000.
- Gardado na nube e sincronización entre ordenadores.

Vexa [Aínda non construído](topic:not-built-yet) para a lista completa.
