---
title: Ficheiros: o que abre, o que guarda
summary: Os formatos que o CadCraft abre, guarda e exporta, o que se mantém ou se converte, e para onde vão os ficheiros.
keywords: xclip, clip, xclip boundary, vincular recortados, dwg, dxf, pdf, r12, abrir, guardar, exportar, importar, formatos, conversão, transferir, saveas, dxfout, guardar como, dwg save, formato, qsave, xref, xattach, desenho referenciado, referência externa, vincular, recarregar, desanexar
from: b8c5778d
---

## Em resumo

| Formato | Abrir | Guardar | Notas |
|---|---|---|---|
| DXF (texto ou binário, qualquer versão) | Sim | Sim, como DXF R12, DXF 2000 ou DXF 2000 (binário) | Um DXF binário abre-se como um de texto e volta a guardar-se como binário. |
| DWG | Sim | Sim, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ou 2018) | Lido e escrito pela biblioteca DWG própria do CadCraft (ficheiros AutoCAD R13 a 2018). O DWG original nunca é alterado. Ficheiros danificados, ou versões que o leitor não trata, são recusados com uma mensagem. |
| PDF | Traz uma página: como sobreposição ou como objetos ([Sobreposições PDF](topic:pdf-underlay)) | Sim, por impressão | PDF vetorial de uma folha, ou do modelo a uma escala. |

Cada desenho aberto (ou iniciado com {{ui:Nova}}) tem um separador próprio sobre a área de desenho; um desenho novo que ainda ninguém tocou é usado em vez de acrescentar um separador. Clique num separador para mudar de desenho, no botão {{ui:×}} para o fechar (o CadCraft pergunta primeiro se há alterações não guardadas), ou disponha os desenhos abertos lado a lado: veja [Dividir o ecrã](topic:split-screen).

## Abrir um desenho

- Prima {{key:Mod+O}}, clique em {{ui:Abrir}}, ou escreva `OPEN`, e depois escolha o ficheiro.
- Ou arraste um ficheiro `.dwg` ou `.dxf` para a área de desenho.

O ficheiro é lido dentro do navegador. Não é enviado para lado nenhum. O histórico indica quantos objetos e camadas entraram e quanto tempo demorou, e a secção {{ui:Desenho}} do painel esquerdo mostra o formato, por exemplo "DWG 2018 (AC1032)".

O leitor DWG faz parte do CadCraft e é transferido com o primeiro DWG que abrir depois de a página carregar (algumas centenas de KB), por isso não há uma transferência separada à espera. Lê o ficheiro em segundo plano, por isso a página continua a responder enquanto um DWG grande abre.

Um DXF é lido em partes de cerca de 4 MB, nunca como um bloco de texto único, por isso um DXF com mais de 512 MB também abre. O que limita é a memória do computador: enquanto um DXF abre, conte com uma utilização de cerca de 16 a 20 vezes o tamanho do ficheiro (um DXF de 100 MB com cerca de 690,000 objetos usou cerca de 1.5 GB no nosso teste).

### O que entra

- Linhas, arcos, círculos, polilinhas (com segmentos de arco), elipses, pontos, texto e texto de várias linhas, sólidos, tramas (os padrões habituais, desenhados com as respetivas linhas, e os restantes como uma tonalidade plana), referências de blocos com os seus atributos (valores que pode editar; veja [Atributos de bloco](topic:attributes)), cotas, e layouts com as suas viewports.
- As splines entram como splines (grau, pontos de controlo, nós, pesos, pontos de ajuste); veja [Splines e polilinhas](topic:splines).
- As chamadas múltiplas com uma linha de chamada e texto entram como chamadas múltiplas do CadCraft que pode editar (veja {{cmd:MLEADER}}). As outras (com um bloco, várias linhas de chamada ou linhas curvas) são desenhadas como o outro programa as desenhou e movem-se como um só; o histórico indica quantas.
- As imagens (pictures) aparecem como um contorno com o nome do ficheiro, até lhes dar o ficheiro com {{cmd:IMAGE}}: veja [Imagens num desenho](topic:pictures#show-the-pictures-a-dwg-uses). Os wipeouts aparecem pelo contorno, e o que está por baixo deles continua visível.
- As tabelas num DWG entram como o outro programa as desenhou.
- As faces 3D no espaço modelo entram no separador {{ui:3D}}, e não como objetos 2D; o mesmo acontece com as que estão dentro de blocos, uma vez por referência de bloco no modelo. Num bloco e numa folha são também desenhadas planas, como contornos. Veja [Modelo em 3D](topic:3d-solids).
- As camadas mantêm a cor, e as definições de ligada, congelada, bloqueada e impressão. DEFPOINTS nunca é impresso.
- As cotas tornam-se cotas reais do CadCraft, editáveis, quando os seus pontos podem ser lidos. Primeiro são mostradas exatamente como o outro programa as desenhou; assim que alterar uma, o CadCraft volta a desenhá-la com o seu próprio estilo.
- Cada layout torna-se um separador de folha. No outro programa, cada layout tem uma primeira viewport oculta que é a própria folha; o CadCraft deixa essa de fora.

### O que ainda não entra

Tudo o que o CadCraft não consegue desenhar é contado, não adivinhado. A caixa "Sobre este ficheiro" do painel esquerdo lista-o como "Ainda não mostrado:", seguido de cada tipo de objeto e quantos são. Casos típicos são tabelas num DXF, malhas e sólidos 3D dentro de blocos. Sólidos 3D, regiões e corpos no espaço modelo aparecem no separador 3D (veja [Modelo em 3D](topic:3d-solids#solids-from-other-programs)). As viewports torcidas no ficheiro aparecem rodadas, como lá, e mantêm a torção ao guardar; o mesmo acontece com o UCS atual, os UCS com nome e uma vista rodada.

O texto é desenhado numa única fonte de estilo Helvetica. Uma etiqueta que cabe numa linha na fonte mais estreita do programa original pode passar a duas linhas no CadCraft.

## Guardar

Há três maneiras de guardar. Cada uma transfere uma cópia.

- **Guardar**: prima {{key:Mod+S}}, clique em {{ui:Guardar}}, ou escreva `SAVE` (também `QSAVE`). Guarda no formato do desenho: DWG se abriu um DWG, DXF se abriu um DXF. Um DWG mantém a versão com que veio (um ficheiro de 2018 guarda-se como 2018). Um desenho novo usa o formato e a versão DWG que escolheu por último em {{ui:Guardar como}} neste navegador; se nenhuma foi escolhida, DWG no formato AutoCAD 2000.
- **Guardar como**: prima {{key:Mod+Shift+S}}, clique em {{ui:Guardar como}}, ou escreva `SAVEAS`. A caixa {{ui:Guardar uma cópia como}} oferece {{ui:DWG}}, com uma lista {{ui:Versão}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000), {{ui:DXF R12}} e {{ui:DXF 2000}}, cada um com o nome de ficheiro que vai dar, e já com o formato e a versão atuais do desenho escolhidos. Clique em {{ui:Guardar}} para transferir, ou em {{ui:Cancelar}} (ou {{key:Esc}}) para não guardar nada; o histórico diz então "Não guardado." A escolha feita fica: {{key:Mod+S}} usa-a para este desenho a partir daí, e os novos desenhos neste navegador começam com ela.
- **DXFOUT**: escreva `DXFOUT`. Transfere sempre uma cópia DXF R12, e o próximo {{key:Mod+S}} continua a guardar no formato próprio do desenho.

O navegador transfere `<nome do desenho>.dwg` ou `<nome do desenho>.dxf`. Cada vez que se guarda é uma **nova transferência**; o ficheiro que abriu nunca é substituído nem alterado. O histórico confirma-o, por exemplo "Cópia guardada como Plan.dwg (DWG (AutoCAD 2018)). O ficheiro original Plan.dxf não foi alterado." Para um DXF diz "(DXF R12, abre em qualquer programa de CAD)". As linhas por baixo listam o que foi alterado pelo caminho.

Quando o CadCraft corre na aplicação de ambiente de trabalho, guardar funciona como nos outros programas do género: {{key:Mod+S}} escreve o desenho de volta no ficheiro que abriu, no seu próprio formato e versão, e o histórico indica onde ficou guardado. {{ui:Guardar como}} e as exportações mostram a caixa de guardar do sistema, e um ficheiro `.dwg`, `.dxf` ou `.ccsheets` em que se faça duplo clique abre-se no CadCraft.

Para um PDF, imprima em vez disso (veja abaixo).

## O que um DWG mantém e altera

O CadCraft escreve o próprio DWG, dentro do navegador, com a mesma biblioteca DWG com que lê. Escolha a versão em {{ui:Guardar como}}: o formato AutoCAD 2000 (versão de ficheiro AC1015) abre-se em mais programas, incluindo os antigos; os formatos mais recentes (2004, AC1018, até 2018, AC1032) também mantêm cores verdadeiras. Nada é enviado, e guardar um DWG funciona offline.

Cada versão é verificada relendo os ficheiros guardados com os leitores DWG de três outros programas e com o próprio CadCraft. Um DWG do CadCraft ainda não foi aberto no próprio AutoCAD.

### O que um DWG mantém

- Linhas, arcos, círculos, elipses, pontos e polilinhas com os seus segmentos de arco.
- Texto de uma linha, com o seu alinhamento e fator de largura.
- Texto de várias linhas e texto com quebra, como texto de várias linhas. O outro programa volta a quebrá-lo a partir da mesma largura.
- Cores dos objetos: por camada, por bloco, as 255 cores padrão, e cores verdadeiras no formato 2004 e posteriores.
- Camadas com a sua cor, tipo de linha, espessura de linha e as definições de ligada, congelada, bloqueada e impressão; os tipos de linha, as espessuras e as escalas de tipo de linha dos próprios objetos, os padrões dos tipos de linha e a escala de tipo de linha do desenho.
- As unidades do desenho e o formato de comprimento (decimal, pés e polegadas, frações…).
- Blocos com o seu ponto base e definições de atributos, incluindo os invisíveis, constantes e predefinidos.
- Referências de blocos com a sua escala, rotação e valores de atributos.
- Preenchimentos sólidos e tramas com padrão, com o seu padrão, escala e ângulo (as próprias linhas do padrão, para que outros programas desenhem as mesmas linhas que o CadCraft).
- Cotas, como cotas reais: outros programas voltam a medi-las quando são esticadas. Cada uma mantém as suas próprias definições (altura do texto, tamanho da seta, decimais, formato de comprimento) e o seu texto, e leva a cópia desenhada que toda a cota de DWG tem.
- Folhas (layouts): cada folha com o seu formato de papel e unidades, o que nela está desenhado, e as suas viewports com a vista e a escala.
- Vistas com nome.
- Chamadas múltiplas, como chamadas múltiplas.
- Nomes de camadas e blocos como os escreveu, em maiúsculas e minúsculas. (DXF R12 escreve-os em maiúsculas.)

### O que um DWG altera

Cada um destes casos é indicado no histórico depois de guardar, quando se aplica ao desenho.

| No CadCraft | No DWG guardado |
|---|---|
| Cores verdadeiras (escolhidas com o conta-gotas), no formato 2000 | A cor padrão mais próxima: o formato 2000 só tem as 255. Guarde como 2004 ou posterior para as manter |
| Vistas com nome de uma folha | Vistas do espaço de papel: um DWG não diz a que folha pertencem, por isso, quando o CadCraft volta a abrir o ficheiro, pertencem à primeira folha |
| Texto de várias linhas com fator de largura | Largura de letra normal: num DWG o fator de largura aplica-se só ao texto de uma linha |
| Nomes de camadas ou blocos com caracteres que o DWG não permite | Alterados: um nome de um desenho referenciado como `Base\|Walls` passa a `Base$0$Walls` (a forma como a vinculação de um desenho referenciado o nomeia), e os outros caracteres passam a `_` |

### Porque R12, e o que se converte

Ao guardar como DXF, o CadCraft escreve DXF R12, a versão que qualquer programa de CAD abre. É mais antiga do que algumas funcionalidades, por isso algumas coisas são escritas numa forma mais simples:

| No CadCraft | No ficheiro R12 guardado |
|---|---|
| Texto de várias linhas | Um objeto de texto por linha |
| Elipses | Polilinhas que seguem a elipse |
| Tramas (de ficheiros abertos) | Só os seus contornos |
| Cores verdadeiras (escolhidas com o conta-gotas) | A cor padrão mais próxima |
| Espessuras de linha e escalas de tipo de linha dos objetos | Deixadas de fora: o R12 não tem nenhuma das duas (os tipos de linha mantêm-se) |
| Nomes de camadas e blocos | Escritos em maiúsculas; espaços e outros caracteres passam a `_`, e os nomes são cortados a 31 caracteres ("Title block" passa a `TITLE_BLOCK`) |
| Camadas definidas como não imprimir | Outros programas vão imprimi-las (o CadCraft recorda a definição quando o desenho tem uma folha) |
| Cotas | Cotas reais com o seu próprio bloco desenhado, para que outros programas as mostrem como as vê |
| Chamadas múltiplas | As linhas, a seta e o texto que desenham |
| Vistas com nome | Mantidas, com nomes em maiúsculas; as vistas de uma folha voltam na primeira folha |
| Várias folhas | A primeira folha é o espaço de papel que todos os programas mostram; as outras ficam como blocos com os nomes `CCLAYOUT_1`, `CCLAYOUT_2` … que o CadCraft volta a transformar em folhas ao abrir o ficheiro |

O histórico lista cada um destes casos que se aplicou ao desenho.

:::tip
Para continuar a trabalhar num desenho ao longo de vários dias, guarde como DXF e abra esse DXF da próxima vez. Tudo o que o CadCraft consegue desenhar sobrevive à ida e volta, incluindo cotas, blocos e todas as folhas.
:::

## Desenhos referenciados (referências externas)

{{cmd:XATTACH}} (`XA`, ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Referenciar um desenho (xref)}}) referencia outro DWG ou DXF: escolha o ficheiro e clique onde deve ficar ({{key:Enter}} coloca-o em 0,0). Entra como um bloco com o nome do ficheiro, à escala certa quando os dois desenhos têm unidades diferentes. As suas camadas e blocos mantêm os nomes, com o nome da referência à frente — `Plan|Walls`, `Plan|Door` — para nunca se misturarem com os do seu desenho: ligue e desligue as camadas referenciadas, congele-as ou bloqueie-as como as do próprio desenho. Uma referência é só de leitura: altere o outro desenho e recarregue-a. O que definir nas camadas de uma referência (cor, tipo de linha, espessura, ligada/desligada, congelada, bloqueada, impressão) mantém-se quando a recarrega, quando guarda o desenho como DWG enquanto a referência ainda é uma referência, e quando outro desenho referencia este.

{{cmd:XREF}} (`XR`): `?` lista as referências (carregadas ou não, que ficheiro, quantas referências); `A` anexa; `R` recarrega uma a partir do seu ficheiro (escolha o ficheiro outra vez, pois o navegador não consegue aceder sozinho às suas pastas); `B` vincula uma (passa a blocos e camadas normais com os nomes `Plan$0$Walls`); `D` desanexa uma (as suas referências e camadas desaparecem). Cada uma é um único passo de anulação.

{{cmd:XCLIP}} (`XC`) recorta referências de blocos e de desenhos referenciados: selecione-as, `N` para um novo limite, depois `R` e dois cantos, ou `P` e os pontos de um polígono ({{key:Enter}} fecha-o); `D` remove o recorte. Só o que está dentro é mostrado e impresso, e o recorte move-se com a referência. DWG e DXF 2000 mantêm os recortes; DXF R12 guarda a referência inteira e indica-o. Quando vincula uma referência que tem referências recortadas, {{cmd:XREF}} `B` pergunta: `A` vincula tudo, `C` mantém apenas a parte recortada de cada referência (linhas e arcos são cortados no limite; textos e blocos aninhados mantêm-se quando o ponto de inserção está dentro).

Um desenho aberto pode referenciar ficheiros que o CadCraft não consegue ver: indica quantos não estão carregados. Use {{cmd:XREF}}, `R` e escolha cada ficheiro para os ver.

Ao guardar, uma referência carregada fica **vinculada** ao ficheiro (outros programas veem blocos e camadas normais com os nomes `Plan$0$…`), e o histórico diz isso. Uma referência que não está carregada continua a ser uma referência para o seu ficheiro, em DWG e em DXF.

## Abrir em 3D

{{ui:Vista}} › {{ui:Mais}} › {{ui:Abrir no ModelCraft}} ({{cmd:OPENIN3D}}) abre o desenho na aplicação de modelação 3D, num novo separador, como DWG, sem o enviar. As alterações feitas lá ficam lá; guarde-as lá. O item de menu só aparece onde essa aplicação consegue receber um desenho entregue.

## Imprimir um PDF

Prima {{key:Mod+P}}, clique em {{ui:Imprimir}}, ou escreva `PLOT`. O PDF é feito dentro do navegador e transferido, ou aberto num novo separador para imprimir. Veja [Imprimir para PDF](topic:plot-pdf).

## Onde vão os ficheiros

Cada gravação e cada impressão é uma transferência, por isso os ficheiros vão para onde o navegador põe as transferências: normalmente a pasta Transferências. Para escolher uma pasta de cada vez, altere a definição de transferência no navegador; [Navegadores e computadores](common:browsers) mostra onde.

Nada que abre ou guarda é enviado para nós. Consulte [Onde vão os ficheiros](common:your-files).

## Ficheiros de projeto PLN e PLA

O CadCraft abre desenhos DWG e DXF, não os ficheiros próprios do Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Ao abrir um, o CadCraft indica o que é. No Archicad, guarde as vistas ou os layouts de que precisa como DWG e abra-os aqui, ou exporte o modelo como IFC e abra-o no BimCraft. Quando o BimCraft consegue receber o ficheiro, o CadCraft oferece {{ui:Abrir no BimCraft}}.

## Se a página fechar antes de guardar

O CadCraft guarda uma cópia de cada desenho que altera, só neste navegador, pouco depois de parar de editar. Se o separador fechar, o navegador parar ou o computador reiniciar antes de guardar, o CadCraft pergunta **Recuperar o seu trabalho?** na próxima vez que arrancar: {{ui:Recuperar}} abre o desenho de novo, sem guardar, no separador próprio. Guardar o desenho remove a sua cópia. Veja [Recuperar o seu trabalho](common:recover).

## Online e offline

Abrir, desenhar, guardar (DWG e DXF) e imprimir acontecem todos no computador, por isso funcionam sem ligação depois de o CadCraft carregar.

Para usar o CadCraft sem qualquer ligação, clique em {{ui:Guardar para offline}} na barra superior enquanto estiver online. A etiqueta conta ("A guardar 40 de 212") e termina em "Offline pronto". A cópia guardada inclui o leitor DWG, cerca de 5 MB no total, por isso **os ficheiros DWG também abrem offline** depois de guardada. Clique de novo no botão para {{ui:Guardar novamente (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. "Não foi possível guardar" significa que alguns ficheiros não foram transferidos: verifique a ligação e clique para tentar de novo. "Offline não disponível" significa que esta janela do navegador não consegue manter uma cópia (janelas privadas e alguns computadores geridos).

Sem uma cópia guardada, o leitor DWG é transferido na primeira vez que abre um DWG depois de a página carregar, por isso abrir um DWG offline pode falhar; os ficheiros DXF nunca precisam dele. Não recarregue a página sem ligação, a menos que o CadCraft esteja guardado.

Veja [Trabalhar offline](common:offline) para os detalhes.

:::offline
Está offline neste momento. Os desenhos guardam-se como DWG ou DXF e imprimem-se normalmente, e os ficheiros DXF abrem. Os ficheiros DWG abrem se o CadCraft mostrar "Offline pronto", ou se o leitor DWG já estiver carregado neste separador.
:::

## Restrições nos ficheiros

As restrições e os parâmetros (veja [Restringir um desenho](topic:constraints)) são guardados tanto em DWG como em DXF. Cada objeto restringido leva uma pequena nota do CadCraft (dados estendidos), e um bloco não usado chamado `CADCRAFT_PARAMETRIC` guarda as restrições e a tabela de parâmetros. Outros programas abrem o desenho normalmente e ignoram ambos; podem eliminar o bloco não usado ao fazerem purge. As notas referem os objetos pela sua própria chave, e não pelos identificadores (handles) do ficheiro, por isso um programa que renumere os identificadores não as quebra. Quando outro programa eliminou ou alterou um objeto restringido, o CadCraft retira as restrições desse objeto ao abrir o ficheiro e indica quantas. Um ficheiro sem elas abre sem restrições.

Um esboço exportado de um modelador de peças (`.json`) também abre: veja [Mover esboços de e para outros modeladores de peças](topic:solidworks-sketches).

## Ainda não disponível

- Chamadas múltiplas como objetos de chamada múltipla num DXF guardado (o R12 não tem nenhum: são guardadas como aquilo que desenham).
- Imagens num DXF guardado (são guardadas como os seus contornos; o DWG mantém-nas como imagens), e wipeouts que ocultam o que está por baixo.
- Guardar uma versão de DXF mais recente do que a 2000.
- Armazenamento na nuvem e sincronização entre computadores.

Veja [Ainda não implementado](topic:not-built-yet) para a lista completa.
