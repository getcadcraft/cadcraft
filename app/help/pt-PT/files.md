---
title: "Ficheiros: o que se abre, o que se guarda"
summary: Os formatos que o CadCraft abre, guarda e exporta, o que é mantido ou convertido e para onde vão os ficheiros.
keywords: xclip, recorte, contorno do xclip, incorporar recortado, dwg, dxf, pdf, r12, abrir, guardar, exportar, importar, formatos, conversão, transferir, saveas, dxfout, guardar como, guardar dwg, formato, qsave, xref, xattach, desenho referenciado, referência externa, incorporar, recarregar, desanexar
from: 6d68b34e
---

## Num relance

| Formato | Abrir | Guardar | Notas |
|---|---|---|---|
| DXF (texto, qualquer versão) | Sim | Sim, como DXF R12 ou DXF 2000 | O DXF binário é recusado: guarde-o primeiro como DXF de texto. |
| DWG | Sim | Sim, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ou 2018) | Lido e escrito pela biblioteca DWG do próprio CadCraft (ficheiros do AutoCAD R13 a 2018). O seu DWG nunca é alterado. Os ficheiros danificados, ou as versões que o leitor não trata, são recusados com uma mensagem. |
| PDF | Traz uma página: como base ou como objetos ([Bases em PDF](topic:pdf-underlay)) | Sim, por impressão | PDF vetorial de uma folha, ou do modelo a uma escala. |

Cada desenho que abre (ou que inicia com {{ui:Novo}}) fica com o seu próprio separador sobre a área de desenho; um desenho novo em que ninguém tocou ainda é reutilizado em vez de se acrescentar um separador. Clique num separador para mudar, no seu {{ui:×}} para o fechar (o CadCraft pergunta primeiro se há alterações não guardadas), ou disponha os desenhos abertos lado a lado: consulte [Dividir o ecrã](topic:split-screen).

## Abrir um desenho

- Prima {{key:Mod+O}}, clique em {{ui:Abrir}}, ou escreva `OPEN`, e escolha o ficheiro.
- Ou arraste um ficheiro `.dwg` ou `.dxf` para a área de desenho.

O ficheiro é lido dentro do navegador. Não é carregado para lado nenhum. O histórico indica quantos objetos e camadas entraram e quanto tempo demorou, e a secção {{ui:Desenho}} do painel da esquerda mostra o formato, por exemplo "DWG 2018 (AC1032)".

O leitor de DWG faz parte do CadCraft e é obtido com o primeiro DWG que abre depois de a página carregar (algumas centenas de KB), pelo que não há nenhuma transferência separada a esperar. Lê o ficheiro em segundo plano, pelo que a página continua a responder enquanto um DWG grande se abre.

### O que entra

- Linhas, arcos, círculos, polilinhas (com segmentos em arco), elipses, pontos, texto e texto de várias linhas, sólidos, tramas (os padrões normalizados desenhados como as suas linhas, os outros como um tom liso), referências de bloco com os seus atributos (valores que pode editar; consulte [Atributos de bloco](topic:attributes)), cotas e layouts com os seus viewports.
- As splines entram como splines (grau, pontos de controlo, nós, pesos, pontos de ajuste); consulte [Splines e polilinhas](topic:splines).
- As chamadas múltiplas com uma linha de chamada e texto entram como chamadas múltiplas do CadCraft que pode editar (consulte {{cmd:MLEADER}}). As outras (com um bloco, várias linhas de chamada ou linhas curvas) são desenhadas como o outro programa as desenhou e movem-se como um só objeto; o histórico diz quantas.
- As imagens aparecem como uma moldura com o nome do ficheiro da imagem até dar ao CadCraft o ficheiro com {{cmd:IMAGE}}: consulte [Imagens num desenho](topic:pictures#show-the-pictures-a-dwg-uses). Os wipeouts aparecem como a sua moldura, e o que está por baixo continua visível.
- As tabelas num DWG entram como o outro programa as desenhou.
- As faces 3D no espaço modelo entram no separador {{ui:3D}}, não como objetos 2D; o mesmo acontece com as que estão dentro de blocos, uma vez por cada referência de bloco no modelo. Num bloco e numa folha são também desenhadas planas, como contornos. Consulte [Modelar em 3D](topic:3d-solids).
- As camadas mantêm a cor, as definições de ligada, congelada, bloqueada e de impressão. DEFPOINTS nunca é impresso.
- As cotas tornam-se cotas reais e editáveis do CadCraft onde os seus pontos possam ser lidos. São mostradas primeiro exatamente como o outro programa as desenhou; assim que altera uma, o CadCraft volta a desenhá-la no seu próprio estilo.
- Cada layout torna-se um separador de folha. No outro programa, todos os layouts têm um primeiro viewport oculto que é a própria folha; o CadCraft deixa esse de fora.

### O que ainda não entra

Tudo o que o CadCraft não consegue desenhar é contado, não adivinhado. A caixa "Acerca deste ficheiro" no painel da esquerda lista-o como "Ainda não mostrado:" seguido de cada tipo de objeto e quantos. Os casos típicos são tabelas num DXF, malhas e sólidos 3D dentro de blocos. Os sólidos 3D, regiões e corpos no espaço modelo aparecem no separador 3D (consulte [Modelar em 3D](topic:3d-solids#solids-from-other-programs)). Os viewports rodados no ficheiro aparecem rodados, tal como lá, e mantêm a rotação quando guarda; o mesmo acontece com o UCS atual, os UCS com nome e uma vista rodada.

O texto é desenhado num único tipo de letra de estilo Helvetica. Uma etiqueta que cabe numa linha no tipo de letra mais estreito do programa original pode quebrar em duas linhas no CadCraft.

## Guardar

Há três formas de guardar. Cada uma transfere uma cópia.

- **Guardar**: prima {{key:Mod+S}}, clique em {{ui:Guardar}} ou escreva `SAVE` (também `QSAVE`). Guarda no formato do desenho: DWG se abriu um DWG, DXF se abriu um DXF. Um DWG mantém a versão em que veio (um ficheiro 2018 guarda-se como 2018). Um desenho novo usa o formato e a versão DWG que escolheu pela última vez em Guardar como neste navegador; se nunca escolheu, DWG no formato AutoCAD 2000.
- **Guardar como**: prima {{key:Mod+Shift+S}}, clique em {{ui:Guardar como}} ou escreva `SAVEAS`. A caixa de diálogo {{ui:Guardar uma cópia como}} oferece {{ui:DWG}}, com uma lista {{ui:Versão}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000), {{ui:DXF R12}} e {{ui:DXF 2000}}, cada um com o nome de ficheiro que dará, e o formato e a versão atuais do desenho já escolhidos. Clique em {{ui:Guardar}} para transferir, ou em {{ui:Cancelar}} (ou {{key:Esc}}) para não guardar nada; o histórico diz então "Não guardado." O que escolher fica: {{key:Mod+S}} usa-o a partir daí para este desenho, e os desenhos novos neste navegador começam com ele.
- **DXFOUT**: escreva `DXFOUT`. Transfere sempre uma cópia DXF R12, e o {{key:Mod+S}} seguinte continua a guardar no formato próprio do desenho.

O navegador transfere `<nome do desenho>.dwg` ou `<nome do desenho>.dxf`. Cada gravação é uma **transferência nova**; o ficheiro que abriu nunca é substituído nem alterado. O histórico confirma-o, por exemplo "Cópia guardada como Plan.dwg (DWG (AutoCAD 2018)). O seu Plan.dxf original está inalterado." Para um DXF diz "(DXF R12, abre em qualquer programa de CAD)". As linhas por baixo listam tudo o que mudou pelo caminho.

Quando o CadCraft corre na aplicação de ambiente de trabalho, guardar funciona como nos outros programas de ambiente de trabalho: {{key:Mod+S}} escreve o desenho de volta no ficheiro que abriu, no seu próprio formato e versão, e o histórico diz onde foi guardado. {{ui:Guardar como}} e as exportações mostram a caixa de diálogo de gravação do sistema, e um ficheiro `.dwg`, `.dxf` ou `.ccsheets` em que faça duplo clique abre-se no CadCraft.

Para um PDF, imprima em vez disso (veja abaixo).

## O que um DWG mantém e altera

O CadCraft escreve o DWG ele próprio, dentro do navegador, com a mesma biblioteca DWG com que lê. Escolha a versão em Guardar como: o formato AutoCAD 2000 (versão de ficheiro AC1015) abre-se no maior número de programas, incluindo os antigos; os formatos mais recentes (2004, AC1018, até 2018, AC1032) mantêm também as cores verdadeiras. Nada é carregado, e guardar um DWG funciona offline.

Cada versão é verificada lendo os ficheiros guardados com os leitores de DWG de três outros programas e com o próprio CadCraft. Um DWG do CadCraft ainda não foi aberto no próprio AutoCAD.

### O que um DWG mantém

- Linhas, arcos, círculos, elipses, pontos e polilinhas com os seus segmentos em arco.
- Texto de uma linha com o seu alinhamento e fator de largura.
- Texto de várias linhas e com quebra de linha, como texto de várias linhas. O outro programa volta a quebrá-lo a partir da mesma largura.
- Cores dos objetos: PorCamada, PorBloco, as 255 cores normalizadas e cores verdadeiras no formato 2004 e posteriores.
- Camadas com a sua cor, tipo de linha, espessura de linha e as definições de ligada, congelada, bloqueada e de impressão; os tipos de linha, espessuras de linha e escalas de tipo de linha próprios dos objetos, os padrões dos tipos de linha e a escala de tipo de linha do desenho.
- As unidades do desenho e o formato de comprimento (decimal, pés e polegadas, frações…).
- Blocos com o seu ponto base e definições de atributos, incluindo os invisíveis, constantes e predefinidos.
- Referências de bloco com a sua escala, rotação e valores de atributos.
- Preenchimentos sólidos e tramas com padrão, com o seu padrão, escala e ângulo (as linhas do próprio padrão, para que os outros programas desenhem as mesmas linhas que o CadCraft).
- Cotas, como cotas reais: os outros programas voltam a medi-las quando são esticadas. Cada uma mantém as suas definições (altura do texto, tamanho da seta, casas decimais, formato de comprimento) e o seu texto, e traz a cópia desenhada que toda a cota DWG tem.
- Folhas (layouts): cada folha com o seu formato de papel e unidades, o que nela está desenhado e os seus viewports com a respetiva vista e escala.
- Vistas com nome.
- Chamadas múltiplas, como chamadas múltiplas.
- Nomes de camadas e de blocos tal como os escreveu, em maiúsculas e minúsculas. (O DXF R12 escreve-os em maiúsculas.)

### O que um DWG altera

Cada um destes é listado no histórico depois de guardar, quando se aplica ao seu desenho.

| No CadCraft | No DWG guardado |
|---|---|
| Cores verdadeiras (escolhidas com o seletor de cores), no formato 2000 | A cor normalizada mais próxima: o formato 2000 só tem as 255. Guarde como 2004 ou posterior para as manter |
| Vistas com nome de uma folha | Vistas do espaço papel: um DWG não diz de que folha são, pelo que, quando o CadCraft volta a abrir o ficheiro, pertencem à primeira folha |
| Texto de várias linhas com um fator de largura | Largura normal das letras: num DWG o fator de largura aplica-se apenas ao texto de uma linha |
| Nomes de camadas ou de blocos com carateres que o DWG não permite | Alterados: um nome de um desenho referenciado como `Base\|Walls` torna-se `Base$0$Walls` (a forma como a incorporação de um desenho referenciado dá nome), e os outros carateres tornam-se `_` |

### Porque R12, e o que se converte

Quando guarda como DXF, o CadCraft escreve DXF R12, a versão que todos os programas CAD conseguem abrir. É mais antiga do que algumas funcionalidades, pelo que algumas coisas são escritas de forma mais simples:

| No CadCraft | No ficheiro R12 guardado |
|---|---|
| Texto de várias linhas | Um objeto de texto por linha |
| Elipses | Polilinhas que seguem a elipse |
| Tramas (de ficheiros abertos) | Apenas os seus contornos |
| Cores verdadeiras (escolhidas com o seletor de cores) | A cor normalizada mais próxima |
| Espessuras de linha, e escalas de tipo de linha próprias dos objetos | Omitidas: o R12 não tem nenhuma (os tipos de linha são mantidos) |
| Nomes de camadas e de blocos | Escritos em maiúsculas; os espaços e outros carateres tornam-se `_`, e os nomes são cortados aos 31 carateres ("Title block" torna-se `TITLE_BLOCK`) |
| Camadas definidas para não imprimir | Os outros programas vão imprimi-las (o CadCraft recorda a definição quando o desenho tem uma folha) |
| Cotas | Cotas reais com o seu próprio bloco desenhado, para que os outros programas as mostrem como as vê |
| Chamadas múltiplas | As linhas, a ponta de seta e o texto que desenham |
| Vistas com nome | Mantidas, com os nomes em maiúsculas; as vistas de uma folha voltam na primeira folha |
| Várias folhas | A primeira folha é o espaço papel que todos os programas mostram; as outras são mantidas como blocos com os nomes `CCLAYOUT_1`, `CCLAYOUT_2` … que o CadCraft volta a transformar em folhas quando abre o ficheiro |

O histórico lista cada um destes que se aplicou ao seu desenho.

:::tip
Para continuar a trabalhar num desenho durante vários dias, guarde como DXF e abra esse DXF da próxima vez. Tudo o que o CadCraft consegue desenhar sobrevive à viagem de ida e volta, incluindo cotas, blocos e todas as folhas.
:::

## Desenhos referenciados (referências externas)

{{cmd:XATTACH}} (`XA`, ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Referenciar um desenho (xref)}}) liga outro DWG ou DXF: escolha o ficheiro e depois clique onde vai ficar ({{key:Enter}} coloca-o em 0,0). Entra como um só bloco com o nome do ficheiro, à escala certa quando os dois desenhos têm unidades diferentes. As suas camadas e blocos mantêm os nomes com o nome da ligação à frente — `Plan|Walls`, `Plan|Door` — para nunca se misturarem com os seus: ligue e desligue as camadas referenciadas, congele-as ou bloqueie-as como as suas. Uma ligação é só de leitura: altere o outro desenho e recarregue-o. O que definir nas camadas de uma ligação (cor, tipo de linha, espessura de linha, ligada/desligada, congelada, bloqueada, impressão) é mantido quando a recarrega, quando guarda o desenho como DWG enquanto a ligação ainda é uma ligação, e quando outro desenho liga este.

{{cmd:XREF}} (`XR`): `?` lista as ligações (carregadas ou não, que ficheiro, quantas referências); `A` anexa; `R` recarrega uma a partir do seu ficheiro (escolha o ficheiro outra vez: o navegador não consegue chegar sozinho às suas pastas); `B` incorpora uma (passa a blocos e camadas normais com nomes como `Plan$0$Walls`); `D` desanexa uma (as suas referências e camadas desaparecem). Cada uma é um passo de anulação.

{{cmd:XCLIP}} (`XC`) recorta referências de bloco e ligações: selecione-as, `N` para um novo contorno, depois `R` e dois cantos ou `P` e os pontos de um polígono ({{key:Enter}} fecha-o); `D` remove o recorte. Só o que fica dentro é mostrado e impresso, e o recorte move-se com a referência. O DWG e o DXF 2000 mantêm os recortes; o DXF R12 guarda a referência inteira e di-lo. Quando incorpora uma ligação que tem referências recortadas, {{cmd:XREF}} `B` pergunta: `A` incorpora tudo, `C` mantém só a parte recortada de cada referência (as linhas e arcos são cortados no contorno; os textos e os blocos aninhados ficam quando o seu ponto de inserção está dentro).

Um desenho que abre pode ligar ficheiros que o CadCraft não vê: diz quantos não estão carregados. Utilize {{cmd:XREF}}, `R` e escolha cada ficheiro para os ver.

Quando guarda, uma ligação carregada é **incorporada** no ficheiro (os outros programas veem blocos e camadas normais com nomes como `Plan$0$…`), e o histórico di-lo. Uma ligação que não está carregada continua a ser uma ligação ao seu ficheiro, em DWG e em DXF.

## Abrir em 3D

{{ui:Vista}} › {{ui:Mais}} › {{ui:Abrir no ModelCraft}} ({{cmd:OPENIN3D}}) abre o desenho na aplicação de modelação 3D num novo separador, como DWG, sem o carregar. As alterações feitas lá ficam lá; guarde-as lá. O item de menu só aparece onde essa aplicação pode receber um desenho entregue.

## Imprimir um PDF

Prima {{key:Mod+P}}, clique em {{ui:Imprimir}} ou escreva `PLOT`. O PDF é criado dentro do navegador e transferido, ou aberto num novo separador para impressão. Consulte [Imprimir para PDF](topic:plot-pdf).

## Para onde vão os ficheiros

Cada gravação e cada impressão é uma transferência, pelo que os ficheiros ficam onde o navegador põe as transferências: normalmente a pasta Transferências. Para escolher uma pasta de cada vez, altere a definição de transferências do navegador; [Navegadores e computadores](common:browsers) mostra onde.

Nada do que abre ou guarda nos é enviado. Consulte [Para onde vão os seus ficheiros](common:your-files).

## Ficheiros de projeto PLN e PLA

O CadCraft abre desenhos DWG e DXF, não os ficheiros próprios do Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Abrir um diz-lhe o que é. No Archicad, guarde como DWG as vistas ou layouts de que precisa e abra-os aqui, ou exporte o modelo como IFC e abra-o no BimCraft. Onde o BimCraft pode receber o ficheiro, o CadCraft oferece {{ui:Abrir no BimCraft}}.

## Se a página se fechar antes de guardar

O CadCraft mantém uma cópia de cada desenho que altera, só neste navegador, um instante depois de parar de editar. Se o separador se fechar, o navegador parar ou o computador reiniciar antes de guardar, o CadCraft pergunta **Recuperar o seu trabalho?** da próxima vez que arrancar: {{ui:Recuperar}} volta a abrir o desenho, não guardado, no seu próprio separador. Guardar o desenho remove a sua cópia. Consulte [Recuperar o seu trabalho](common:recover).

## Online e offline

Abrir, desenhar, guardar (DWG e DXF) e imprimir acontecem todos no seu computador, pelo que funcionam sem ligação depois de o CadCraft carregar.

Para utilizar o CadCraft sem qualquer ligação, clique em {{ui:Guardar para offline}} na barra do topo enquanto estiver online. A etiqueta vai contando ("A guardar 40 de 212") e termina em "Pronto para offline". A cópia guardada inclui o leitor de DWG, cerca de 5 MB no total, pelo que **os ficheiros DWG também se abrem offline** depois de guardada. Clique de novo no botão para {{ui:Guardar novamente (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. "Não foi possível guardar" significa que alguns ficheiros não foram transferidos: verifique a ligação e clique para tentar de novo. "Offline indisponível" significa que esta janela do navegador não consegue manter uma cópia (janelas privadas e alguns computadores geridos).

Sem uma cópia guardada, o leitor de DWG é obtido na primeira vez que abre um DWG depois de a página carregar, pelo que abrir um DWG offline pode falhar; os ficheiros DXF nunca precisam dele. Não recarregue a página offline a menos que o CadCraft esteja guardado.

Consulte [Trabalhar offline](common:offline) para os pormenores.

:::offline
Está offline agora. Os desenhos guardam-se como DWG ou DXF e imprimem-se normalmente, e os ficheiros DXF abrem-se. Os ficheiros DWG abrem-se se o CadCraft mostrar "Pronto para offline", ou se o leitor de DWG já tiver sido carregado neste separador.
:::

## Restrições em ficheiros

As restrições e os parâmetros (consulte [Restringir um desenho](topic:constraints)) são guardados tanto em DWG como em DXF. Cada objeto restringido leva uma pequena nota do CadCraft (dados alargados), e um bloco não utilizado com o nome `CADCRAFT_PARAMETRIC` contém as restrições e a tabela de parâmetros. Os outros programas abrem o desenho normalmente e ignoram ambos; podem eliminar o bloco não utilizado quando limpam. As notas referem-se aos objetos pela sua chave própria, não pelos handles do ficheiro, pelo que um programa que renumere os handles não as estraga. Quando outro programa eliminou ou alterou um objeto restringido, o CadCraft abandona as restrições sobre ele ao abrir o ficheiro e diz quantas. Um ficheiro sem elas abre-se sem restrições.

Um esboço exportado de um modelador de peças (`.json`) também se abre: consulte [Mover esboços de e para outros modeladores de peças](topic:solidworks-sketches).

## Ainda não disponível

- Chamadas múltiplas como objetos de chamada múltipla num DXF guardado (o R12 não tem nenhuma: são guardadas como o que desenham).
- Imagens num DXF guardado (guardam-se como as suas molduras; o DWG mantém-nas como imagens) e wipeouts que ocultem o que está por baixo.
- Guardar uma versão de DXF mais recente do que 2000.
- Gravação na nuvem e sincronização entre computadores.

Consulte [Ainda não implementado](topic:not-built-yet) para a lista completa.
