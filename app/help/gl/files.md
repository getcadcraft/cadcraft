---
title: Ficheiros: que se abre, que se garda
summary: Os formatos que CadCraft abre, garda e exporta, o que se conserva ou converte, e onde van os ficheiros.
keywords: xclip, clip, límite de xclip, vincular recortado, dwg, dxf, pdf, r12, abrir, gardar, exportar, importar, formatos, conversión, descargar, saveas, dxfout, gardar como, formato dwg, qsave, xref, xattach, debuxo ligado, referencia externa, vincular, recargar, separar
from: b8c5778d
---

## Resumo

| Formato | Abrir | Gardar | Notas |
|---|---|---|---|
| DXF (texto ou binario, calquera versión) | Sí | Sí, como DXF R12, DXF 2000 ou DXF 2000 (binario) | Un DXF binario ábrese igual que un de texto e gárdase de novo como binario. |
| DWG | Sí | Sí, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ou 2018) | Lido e escrito pola propia biblioteca DWG de CadCraft (ficheiros AutoCAD R13 a 2018). O seu DWG nunca se modifica. Os ficheiros danados, ou as versións que o lector non trata, recházanse cunha mensaxe. |
| PDF | Trae unha páxina como subxacente ou como obxectos ([Subxacentes PDF](topic:pdf-underlay)) | Sí, por trazado | PDF vectorial dunha folla, ou do modelo a unha escala. |

Cada debuxo que abre (ou que inicia con {{ui:Nova}}) recibe a súa propia lapela sobre a área de debuxo; un debuxo novo que aínda ninguén tocou úsase no seu lugar en vez de engadir unha lapela. Prema unha lapela para cambiar, o seu {{ui:×}} para pechala (CadCraft pregunta antes se hai cambios sen gardar), ou coloque os debuxos abertos lado a lado: consulte [Dividir a pantalla](topic:split-screen).

## Abrir un debuxo

- Prema {{key:Mod+O}}, prema {{ui:Abrir}}, ou escriba `OPEN`, e logo escolla o ficheiro.
- Ou arrastre un ficheiro `.dwg` ou `.dxf` sobre a área de debuxo.

O ficheiro lese dentro do seu navegador. Non se envía a ningún lugar. O historial informa de cantos obxectos e capas entraron e canto tempo levou, e a sección {{ui:Debuxo}} do panel esquerdo mostra o formato, por exemplo "DWG 2018 (AC1032)".

O lector DWG forma parte de CadCraft e descárgase co primeiro DWG que abra despois de cargar a páxina (algúns centos de KB), así que non hai ningunha descarga separada que agardar. Le o ficheiro en segundo plano, de modo que a páxina segue respondendo mentres se abre un DWG grande.

Un DXF lese en anacos de uns 4 MB, nunca como un único bloque de texto, así que un DXF de máis de 512 MB tamén se abre. O que o limita é a memoria do seu ordenador: mentres se abre un DXF, espere que use uns 16 a 20 veces o tamaño do ficheiro (un DXF de 100 MB con preto de 690.000 obxectos usou uns 1,5 GB na nosa proba).

### O que entra

- Liñas, arcos, círculos, polilíneas (con segmentos en arco), elipses, puntos, texto e texto de varias liñas, sólidos, tramas (os patróns estándar debuxados como as súas liñas, os demais como un tono plano), referencias de bloque cos seus atributos (valores que pode editar; consulte [Atributos de bloque](topic:attributes)), cotas, e follas coas súas viewports.
- As splines entran como splines (grao, puntos de control, nós, pesos, puntos de axuste); consulte [Splines e polilíneas](topic:splines).
- Os multilíderes con unha liña guía e texto entran como multilíderes de CadCraft que pode editar (consulte {{cmd:MLEADER}}). Os demais (con un bloque, varias liñas guía ou liñas curvas) debúxanse como os debuxou o outro programa e móvense como un só; o historial di cantos son.
- As imaxes móstranse como un marco co nome do ficheiro ata que dea a CadCraft o ficheiro con {{cmd:IMAGE}}: consulte [Imaxes nun debuxo](topic:pictures#show-the-pictures-a-dwg-uses). Os recortes (wipeouts) móstranse como o seu marco, e o que hai debaixo deles segue visible.
- As táboas nun DWG entran como as debuxou o outro programa.
- As caras 3D do espazo do modelo entran na lapela {{ui:3D}}, non como obxectos 2D; o mesmo para as que están dentro de bloques, unha vez por referencia de bloque no modelo. Dentro dun bloque e nunha folla tamén se debuxan planas, como contornos. Consulte [Modelar en 3D](topic:3d-solids).
- As capas conservan a súa cor e os seus axustes de activa, conxelada, bloqueada e trazado. DEFPOINTS nunca se traza.
- As cotas convértense en cotas reais e editables de CadCraft cando se poden ler os seus puntos. Primeiro móstranse exactamente como as debuxou o outro programa; en canto cambia unha, CadCraft a redebuxa co seu propio estilo.
- Cada folla convértese nunha lapela de folla. No outro programa, cada folla ten unha primeira viewport oculta que é a propia folla; CadCraft deixa esa fóra.

### O que aínda non entra

Calquera cousa que CadCraft non pode debuxar cóntase, non se adiviña. A caixa "Sobre este ficheiro" do panel esquerdo lista como "Aínda non se mostra:" cada tipo de obxecto seguido de cantos son. Os casos típicos son as táboas nun DXF, as mallas e os sólidos 3D dentro de bloques. Os sólidos 3D, as rexións e os corpos no espazo do modelo móstranse na lapela 3D (consulte [Modelar en 3D](topic:3d-solids#solids-from-other-programs)). As viewports torcidas no ficheiro móstranse xiradas, como alí, e conservan o xiro ao gardar; o mesmo ocorre co UCS actual, cos UCS con nome e cunha vista xirada.

O texto debúxase cunha única fonte de estilo Helvetica. Unha etiqueta que cabe nunha liña no programa orixinal, cunha fonte máis estreita, pode partirse en dúas liñas en CadCraft.

## Gardar

Hai tres formas de gardar. Cada unha descarga unha copia.

- **Gardar**: prema {{key:Mod+S}}, prema {{ui:Gardar}}, ou escriba `SAVE` (tamén `QSAVE`). Gárdase no formato do debuxo: DWG se abriu un DWG, DXF se abriu un DXF. Un DWG conserva a versión coa que chegou (un ficheiro de 2018 gárdase como 2018). Un debuxo novo usa o formato e a versión DWG que escolleu por última vez en {{ui:Gardar como}} neste navegador; se nunca escolleu ningunha, DWG no formato AutoCAD 2000.
- **Gardar como**: prema {{key:Mod+Shift+S}}, prema {{ui:Gardar como}}, ou escriba `SAVEAS`. O diálogo {{ui:Gardar unha copia como}} ofrece {{ui:DWG}}, cunha lista de {{ui:Versión}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000), {{ui:DXF R12}} e {{ui:DXF 2000}}, cada un co nome de ficheiro que dará, e xa escollidos o formato e a versión actuais do debuxo. Prema {{ui:Gardar}} para descargar, ou {{ui:Cancelar}} (ou {{key:Esc}}) para non gardar nada; o historial entón di "Non gardado." O que escolla queda: {{key:Mod+S}} o usa para este debuxo desde ese momento, e os debuxos novos neste navegador comezan con el.
- **DXFOUT**: escriba `DXFOUT`. Descarga sempre unha copia DXF R12, e o seguinte {{key:Mod+S}} segue gardando no formato propio do debuxo.

O navegador descarga `<nome do debuxo>.dwg` ou `<nome do debuxo>.dxf`. Cada gardado é unha **nova descarga**; o ficheiro que abriu nunca se sobrescribe nin se modifica. O historial confírmao, por exemplo "Copia gardada como Plan.dwg (DWG (AutoCAD 2018)). O seu Plan.dxf orixinal non cambiou." Nun DXF di "(DXF R12, abre en calquera programa CAD)". As liñas debaixo listan os cambios que se produciron polo camiño.

Cando CadCraft funciona na aplicación de escritorio, gardar funciona como nos outros programas de escritorio: {{key:Mod+S}} escribe o debuxo de volta no ficheiro que abriu, no seu formato e versión propios, e o historial di onde se gardou. {{ui:Gardar como}} e as exportacións mostran o diálogo de gardado do sistema, e un ficheiro `.dwg`, `.dxf` ou `.ccsheets` ao que fai dobre clic ábrese en CadCraft.

Para un PDF, trace no seu lugar (consulte máis abaixo).

## Que conserva e que cambia un DWG

CadCraft escribe o DWG por si mesmo, dentro do seu navegador, coa mesma biblioteca DWG que o le. Escolla a versión en {{ui:Gardar como}}: o formato AutoCAD 2000 (versión de ficheiro AC1015) ábrese en máis programas, incluídos os antigos; os formatos máis novos (2004, AC1018, ata 2018, AC1032) conservan tamén as cores verdadeiras. Non se envía nada, e gardar un DWG funciona sen conexión.

Cada versión compróbase lendo de novo os ficheiros gardados cos lectores DWG de tres outros programas e con CadCraft. Un DWG de CadCraft aínda non se abriu no propio AutoCAD.

### Que conserva un DWG

- Liñas, arcos, círculos, elipses, puntos e polilíneas cos seus segmentos en arco.
- Texto dunha soa liña co seu alineamento e factor de anchura.
- Texto de varias liñas e texto axustado, como texto de varias liñas. O outro programa volve axustalo coa mesma anchura.
- Cores dos obxectos: por capa, por bloque, as 255 cores estándar e as cores verdadeiras no formato 2004 e posteriores.
- Capas coa súa cor, tipo de liña, grosor de liña e os seus axustes de activa, conxelada, bloqueada e trazado; os tipos de liña, grosores e escalas propios dos obxectos, os patróns de tipo de liña e a escala de tipo de liña do debuxo.
- As unidades do debuxo e o formato de lonxitude (decimal, pés e polgadas, fraccións…).
- Bloques co seu punto base e as definicións de atributo, incluídos os invisibles, constantes e preestablecidos.
- Referencias de bloque coa súa escala, rotación e valores de atributo.
- Recheos sólidos e tramas con patrón, co seu patrón, escala e ángulo (as liñas propias do patrón, de xeito que os outros programas debuxan as mesmas liñas que CadCraft).
- Cotas, como cotas reais: os outros programas volven medilas cando se estiran. Cada unha conserva os seus propios axustes (altura do texto, tamaño da frecha, decimais, formato de lonxitude) e o seu texto, e leva a copia debuxada que ten toda cota DWG.
- Follas (layouts): cada folla co seu tamaño de papel e unidades, o que se debuxa nela, e as súas viewports coa súa vista e escala.
- Vistas con nome.
- Multilíderes, como multilíderes.
- Nomes de capas e bloques tal como os escribiu, en maiúsculas e minúsculas. (DXF R12 escríbeos en maiúsculas.)

### Que cambia un DWG

Cada un destes cambios figura no historial despois de gardar, cando se aplica ao seu debuxo.

| En CadCraft | No DWG gardado |
|---|---|
| Cores verdadeiras (escollidas co selector de cor), no formato 2000 | A cor estándar máis próxima: o formato 2000 só ten as 255. Garde como 2004 ou posterior para conservalas |
| Vistas con nome dunha folla | Vistas en espazo papel: un DWG non di en que folla están, así que, cando CadCraft volve abrir o ficheiro, pertencen á primeira folla |
| Texto de varias liñas con factor de anchura | Anchura de letra normal: nun DWG, o factor de anchura aplícase só ao texto dunha soa liña |
| Nomes de capa ou bloque con caracteres que o DWG non permite | Cambiados: un nome dunha ligazón como `Base\|Walls` pasa a `Base$0$Walls` (a forma en que o vincular dunha ligazón lle pon nome), e os demais caracteres pasan a `_` |

### Por que R12, e que se converte

Cando garda como DXF, CadCraft escribe DXF R12, a versión que pode abrir calquera programa CAD. É máis antiga ca algunhas funcións, así que algunhas cousas se escriben dun xeito máis simple:

| En CadCraft | No ficheiro R12 gardado |
|---|---|
| Texto de varias liñas | Un obxecto de texto por liña |
| Elipses | Polilíneas que seguen a elipse |
| Tramas (de ficheiros abertos) | Só os seus contornos |
| Cores verdadeiras (escollidas co selector de cor) | A cor estándar máis próxima |
| Grosores de liña e escalas de tipo de liña propias dos obxectos | Omitidos: R12 non ten ningún dos dous (os tipos de liña consérvanse) |
| Nomes de capa e de bloque | Escritos en maiúsculas; os espazos e os demais caracteres pasan a `_`, e os nomes córtanse a 31 caracteres ("Title block" pasa a `TITLE_BLOCK`) |
| Capas configuradas para non trazar | Os outros programas traceas; CadCraft lembra o axuste cando o debuxo ten unha folla |
| Cotas | Cotas reais co seu propio bloque debuxado, para que os outros programas as mostren como as ve |
| Multilíderes | As liñas, a punta de frecha e o texto que debuxan |
| Vistas con nome | Conservadas, con nomes en maiúsculas; as vistas dunha folla volven na primeira folla |
| Varias follas | A primeira folla é o espazo papel que mostra todo programa; as demais consérvanse como bloques chamados `CCLAYOUT_1`, `CCLAYOUT_2` … que CadCraft converte de novo en follas ao abrir o ficheiro |

O historial lista cada un destes que se aplicou ao seu debuxo.

:::tip
Para seguir traballando nun debuxo durante varios días, garde como DXF e abra ese DXF a próxima vez. Todo o que CadCraft pode debuxar sobrevive á ida e volta, incluídas as cotas, os bloques e todas as follas.
:::

## Ligazóns a debuxos (referencias externas)

{{cmd:XATTACH}} (`XA`, ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Ligar un debuxo (xref)}}) liga outro DWG ou DXF: escolla o ficheiro e logo prema onde irá ({{key:Enter}} o coloca en 0,0). Entra como un bloque co nome do ficheiro, na escala correcta cando os dous debuxos teñen unidades distintas. As súas capas e bloques conservan os seus nomes co nome da ligazón por diante: `Plan|Walls`, `Plan|Door`, de xeito que nunca se mesturan cos seus. Active, desactive, conxele ou bloquee as capas ligadas como as súas propias. Unha ligazón é só de lectura: cambie o outro debuxo e recárgueo. O que estableza nas capas dunha ligazón (cor, tipo de liña, grosor, activa ou desactivada, conxelada, bloqueada, trazado) consérvase ao recargala, ao gardar o debuxo como DWG mentres a ligazón siga sendo unha ligazón, e cando outro debuxo liga este.

{{cmd:XREF}} (`XR`): `?` lista as ligazóns (cargadas ou non, que ficheiro, cantas referencias); `A` engade unha; `R` recarga unha desde o seu ficheiro (escolla o ficheiro de novo, porque o navegador non pode chegar por si mesmo ás súas carpetas); `B` vincula unha (convértese en bloques e capas ordinarios con nomes `Plan$0$Walls`); `D` separa unha (desaparecen as súas referencias e capas). Cada unha é un paso de desfacer.

{{cmd:XCLIP}} (`XC`) recorta referencias de bloque e ligazóns: selecciónaas, `N` para un novo límite, logo `R` e dúas esquinas ou `P` e os puntos dun polígono ({{key:Enter}} pecha o polígono); `D` elimina o recorte. Só se ve e traza o que está dentro, e o recorte móvese coa referencia. DWG e DXF 2000 conservan os recortes; DXF R12 garda a referencia enteira e indícao. Ao vincular unha ligazón que ten referencias recortadas, {{cmd:XREF}} `B` pregunta: `A` vincula todo, `C` conserva só a parte recortada de cada referencia (as liñas e os arcos córtanse no límite; os textos e os bloques anidados quedan se o seu punto de inserción está dentro).

Un debuxo que abre pode ligar ficheiros que CadCraft non pode ver: indica cantos non están cargados. Use {{cmd:XREF}}, `R` e escolla cada ficheiro para velos.

Ao gardar, unha ligazón cargada **vincúlase** no ficheiro (outros programas ven bloques e capas ordinarios chamados `Plan$0$…`), e o historial di. Unha ligazón que non está cargada segue sendo unha ligazón ao seu ficheiro, en DWG e DXF.

## Abrir en 3D

{{ui:Vista}} › {{ui:Máis}} › {{ui:Abrir en ModelCraft}} ({{cmd:OPENIN3D}}) abre o debuxo na aplicación de modelado 3D, nunha lapela nova, como DWG, sen envialo. Os cambios feitos alí quédanse alí; gárdeos alí. O elemento do menú só aparece onde esa aplicación pode recibir un debuxo entregado.

## Trazar un PDF

Prema {{key:Mod+P}}, prema {{ui:Trazar}}, ou escriba `PLOT`. O PDF faise dentro do navegador e descárgase, ou ábrese nunha lapela nova para imprimir. Consulte [Trazar a PDF](topic:plot-pdf).

## Onde van os ficheiros

Cada gardado e cada trazado é unha descarga, así que os ficheiros acaban onde o navegador garda as descargas: normalmente na carpeta Descargas. Para escoller unha carpeta cada vez, cambie o axuste de descarga do navegador; [Navegadores e ordenadores](common:browsers) mostra onde.

Nada do que abre ou garda se envía a nós. Consulte [Onde van os seus ficheiros](common:your-files).

## Ficheiros de proxecto PLN e PLA

CadCraft abre debuxos DWG e DXF, non os propios ficheiros de Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Ao abrir un, indícase o que é. En Archicad, garde as vistas ou follas que precise como DWG e ábraas aquí, ou exporte o modelo como IFC e ábrao en BimCraft. Cando BimCraft pode recibir o ficheiro, CadCraft ofrece {{ui:Abrir en BimCraft}}.

## Se a páxina se pecha antes de gardar

CadCraft garda unha copia de cada debuxo que cambia, só neste navegador, un momento despois de deixar de editar. Se a lapela se pecha, o navegador se detén ou o ordenador se reinicia antes de gardar, CadCraft pregunta **¿Recuperar o seu traballo?** a próxima vez que arranque: {{ui:Recuperar}} abre o debuxo de novo, sen gardar, na súa propia lapela. Gardar o debuxo elimina a súa copia. Consulte [Recuperar o seu traballo](common:recover).

## En liña e sen conexión

Abrir, debuxar, gardar (DWG e DXF) e trazar fanse todos no seu ordenador, así que funcionan sen conexión unha vez que CadCraft se cargou.

Para usar CadCraft sen ningunha conexión, prema {{ui:Gardar para usar sen conexión}} na barra superior mentres estea en liña. A etiqueta conta ("Gardando 40 de 212") e remata en "Listo sen conexión". A copia gardada inclúe o lector DWG, uns 5 MB no total, así que **os ficheiros DWG tamén se abren sen conexión** unha vez gardada. Prema de novo o botón para {{ui:Gardar de novo (obter a versión máis recente)}} ou {{ui:Quitar a copia sen conexión}}. "Non se puido gardar" significa que algúns ficheiros non se descargaron: comprobe a conexión e prema para intentalo de novo. "Sen conexión non dispoñible" significa que esta xanela do navegador non pode gardar unha copia (xanelas privadas e algúns ordenadores xestionados).

Sen unha copia gardada, o lector DWG descárgase a primeira vez que abre un DWG despois de cargar a páxina, así que abrir un DWG sen conexión pode fallar; os ficheiros DXF nunca o necesitan. Non recargue a páxina sen conexión salvo que CadCraft estea gardado.

Consulte [Traballar sen conexión](common:offline) para os detalles.

:::offline
Está sen conexión agora. Os debuxos gárdanse como DWG ou DXF e trázanse con normalidade, e os ficheiros DXF ábrense. Os ficheiros DWG ábrense se CadCraft mostra "Listo sen conexión", ou se o lector DWG xa se cargou nesta lapela.
:::

## Restricións nos ficheiros

As restricións e os parámetros (consulte [Restrinxir un debuxo](topic:constraints)) gárdanse tanto en DWG como en DXF. Cada obxecto restrinxido leva unha pequena nota de CadCraft (datos estendidos), e un bloque sen usar chamado `CADCRAFT_PARAMETRIC` contén as restricións e a táboa de parámetros. Os outros programas abren o debuxo con normalidade e ignoran ambos; é posible que eliminen o bloque sen usar ao purgar. As notas refírense aos obxectos pola súa propia clave, non polos identificadores do ficheiro, así que un programa que renumera os identificadores non as rompe. Cando outro programa eliminou ou cambiou un obxecto restrinxido, CadCraft descarta as restricións sobre el ao abrir o ficheiro e indica cantas son. Un ficheiro sen elas ábrese sen restricións.

Un bosquexo exportado desde un modelador de pezas (`.json`) tamén se abre: consulte [Mover bosquexos desde e cara a outros modeladores de pezas](topic:solidworks-sketches).

## Non dispoñible aínda

- Multilíderes como obxectos multilíder nun DXF gardado (R12 non os ten: gárdanse como o que debuxan).
- Imaxes nun DXF gardado (gárdanse como os seus marcos; DWG conserva as imaxes como imaxes), e recortes que ocultan o que hai debaixo.
- Gardar unha versión de DXF máis nova ca 2000.
- Gardado na nube e sincronización entre ordenadores.

Consulte [Aínda sen construír](topic:not-built-yet) para a lista completa.
