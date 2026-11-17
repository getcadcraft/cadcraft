---
title: Arquivos: o que abre, o que salva
summary: Os formatos que o CadCraft abre, salva e exporta, o que é mantido ou convertido, e para onde os arquivos vão.
keywords: xclip, clip, limite de xclip, incorporar recortado, dwg, dxf, pdf, r12, abrir, salvar, exportar, importar, formatos, conversão, baixar, saveas, dxfout, salvar como, salvar dwg, formato, qsave, xref, xattach, desenho vinculado, referência externa, incorporar, recarregar, desanexar
from: b8c5778d
---

## Visão geral

| Formato | Abrir | Salvar | Observações |
|---|---|---|---|
| DXF (texto ou binário, qualquer versão) | Sim | Sim, como DXF R12, DXF 2000 ou DXF 2000 (binário) | Um DXF binário abre como um de texto e salva de volta como binário. |
| DWG | Sim | Sim, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ou 2018) | Lido e gravado pela biblioteca DWG própria do CadCraft (arquivos do AutoCAD R13 até 2018). Seu DWG nunca é alterado. Arquivos danificados, ou versões que o leitor não trata, são recusados com uma mensagem. |
| PDF | Traz uma página: como base ([Bases PDF](topic:pdf-underlay)) ou como objetos | Sim, por plotagem | PDF vetorial de uma folha, ou do modelo em uma escala. |

Cada desenho que você abre (ou inicia com {{ui:Nova}}) ganha sua própria aba sobre a área de desenho; um novo desenho que ninguém tocou ainda é usado no lugar de adicionar uma aba. Clique em uma aba para trocar, no seu {{ui:×}} para fechá-la (o CadCraft pergunta antes se há alterações não salvas), ou organize os desenhos abertos lado a lado: veja [Dividir a tela](topic:split-screen).

## Abrindo um desenho

- Pressione {{key:Mod+O}}, clique em {{ui:Abrir}}, ou digite `OPEN`, depois escolha o arquivo.
- Ou arraste um arquivo `.dwg` ou `.dxf` para a área de desenho.

O arquivo é lido dentro do seu navegador. Ele não é enviado para lugar nenhum. O histórico informa quantos objetos e camadas entraram e quanto tempo levou, e a seção {{ui:Desenho}} do painel esquerdo mostra o formato, por exemplo "DWG 2018 (AC1032)".

O leitor DWG faz parte do CadCraft e é carregado com o primeiro DWG que você abrir depois que a página carregar (algumas centenas de KB), então não há download separado para esperar. Ele lê o arquivo em segundo plano, então a página continua respondendo enquanto um DWG grande abre.

Um DXF é lido em partes de cerca de 4 MB, nunca como um bloco único de texto, então um DXF acima de 512 MB também abre. O que limita é a memória do seu computador: enquanto um DXF abre, espere que ele use aproximadamente de 16 a 20 vezes o tamanho do arquivo (um DXF de 100 MB com cerca de 690,000 objetos usou cerca de 1.5 GB no nosso teste).

### O que entra

- Linhas, arcos, círculos, polilinhas (com segmentos em arco), elipses, pontos, texto e texto de múltiplas linhas, sólidos, hachuras (os padrões padrão desenhados como suas linhas, os outros como um tom chapado), referências de bloco com seus atributos (valores que você pode editar; veja [Atributos de bloco](topic:attributes)), cotas, e folhas (layouts) com suas viewports.
- Splines entram como splines (grau, pontos de controle, nós, pesos, pontos de ajuste); veja [Splines e polilinhas](topic:splines).
- Multichamadas com uma linha de chamada e texto entram como multichamadas do CadCraft que você pode editar (veja {{cmd:MLEADER}}). Outras (com um bloco, várias linhas de chamada ou linhas curvas) são desenhadas como o outro programa as desenhou e se movem como um só; o histórico diz quantas.
- Imagens (pictures) aparecem como uma moldura com o nome do arquivo da imagem até você entregar o arquivo ao CadCraft com {{cmd:IMAGE}}: veja [Imagens em um desenho](topic:pictures#show-the-pictures-a-dwg-uses). Máscaras de apagamento (wipeouts) aparecem como a sua moldura, e o que está embaixo delas continua visível.
- Tabelas em um DWG entram como o outro programa as desenhou.
- Faces 3D no espaço modelo entram na aba {{ui:3D}}, não como objetos 2D; o mesmo vale para as que estão dentro de blocos, uma vez por referência de bloco no modelo. Em um bloco e em uma folha, elas também são desenhadas planas, como contornos. Veja [Modelo em 3D](topic:3d-solids).
- Camadas mantêm sua cor e as configurações de ligada, congelada, bloqueada e de plotagem. DEFPOINTS nunca é plotado.
- Cotas viram cotas reais e editáveis do CadCraft onde seus pontos podem ser lidos. Elas são mostradas primeiro exatamente como o outro programa as desenhou; assim que você altera uma, o CadCraft a redesenha no estilo dele.
- Cada folha (layout) vira uma aba de folha. No outro programa, todo layout tem uma primeira viewport oculta que é a própria folha; o CadCraft deixa essa de fora.

### O que ainda não entra

Qualquer coisa que o CadCraft não consegue desenhar é contada, não adivinhada. A caixa "Sobre este arquivo" no painel esquerdo lista como "Ainda não mostrado:" cada tipo de objeto e quantos há. Casos típicos são tabelas em um DXF, malhas e sólidos 3D dentro de blocos. Sólidos 3D, regiões e corpos no espaço modelo aparecem na aba 3D (veja [Modelo em 3D](topic:3d-solids#solids-from-other-programs)). Viewports inclinadas no arquivo aparecem giradas, como lá, e mantêm a inclinação ao salvar; o mesmo vale para o UCS atual, os UCS nomeados e uma vista girada.

Texto é desenhado em uma única fonte estilo Helvetica. Um rótulo que cabe em uma linha na fonte mais estreita do programa original pode quebrar em duas linhas no CadCraft.

## Salvando

Há três formas de salvar. Cada uma baixa uma cópia.

- **Salvar**: pressione {{key:Mod+S}}, clique em {{ui:Salvar}}, ou digite `SAVE` (também `QSAVE`). Salva no formato do desenho: DWG se você abriu um DWG, DXF se abriu um DXF. Um DWG mantém a versão com que veio (um arquivo 2018 salva como 2018). Um novo desenho usa o formato e a versão DWG que você escolheu por último em Salvar como neste navegador; se você nunca escolheu, DWG no formato AutoCAD 2000.
- **Salvar como**: pressione {{key:Mod+Shift+S}}, clique em {{ui:Salvar como}}, ou digite `SAVEAS`. A caixa {{ui:Salvar uma cópia como}} oferece {{ui:DWG}}, com uma lista de {{ui:Versão}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000), {{ui:DXF R12}} e {{ui:DXF 2000}}, cada um com o nome de arquivo que receberá, e com o formato e a versão atuais do desenho já selecionados. Clique em {{ui:Salvar}} para baixar, ou {{ui:Cancelar}} (ou {{key:Esc}}) para não salvar nada; o histórico então diz "Não salvo." O que você escolhe fica: {{key:Mod+S}} usa essa escolha para este desenho daqui em diante, e novos desenhos neste navegador começam com ela.
- **DXFOUT**: digite `DXFOUT`. Ele sempre baixa uma cópia DXF R12, e o próximo {{key:Mod+S}} ainda salva no formato próprio do desenho.

O navegador baixa `<nome do desenho>.dwg` ou `<nome do desenho>.dxf`. Cada salvamento é um **novo download**; o arquivo que você abriu nunca é sobrescrito nem alterado. O histórico confirma, por exemplo "Cópia salva como Plan.dwg (DWG (AutoCAD 2018)). Seu original Plan.dxf não foi alterado." Para um DXF ele diz "(DXF R12, abre em qualquer programa CAD)". As linhas abaixo listam qualquer coisa que mudou no caminho.

Quando o CadCraft roda no aplicativo de desktop, salvar funciona como em outros programas de desktop: {{key:Mod+S}} grava o desenho de volta no arquivo que você abriu, no formato e na versão próprios, e o histórico diz onde foi salvo. {{ui:Salvar como}} e as exportações mostram a caixa de salvar do sistema, e um arquivo `.dwg`, `.dxf` ou `.ccsheets` que você clica duas vezes abre no CadCraft.

Para um PDF, plote em vez disso (veja abaixo).

## O que um DWG mantém e altera

O CadCraft grava o DWG por conta própria, dentro do seu navegador, com a mesma biblioteca DWG com que ele lê. Escolha a versão em Salvar como: o formato AutoCAD 2000 (versão de arquivo AC1015) abre na maioria dos programas, inclusive os antigos; os formatos mais novos (2004, AC1018, até 2018, AC1032) também mantêm cores verdadeiras. Nada é enviado, e salvar um DWG funciona offline.

Cada versão é verificada relendo os arquivos salvos com os leitores de DWG de três outros programas e com o próprio CadCraft. Um DWG do CadCraft ainda não foi aberto no próprio AutoCAD.

### O que um DWG mantém

- Linhas, arcos, círculos, elipses, pontos e polilinhas com seus segmentos em arco.
- Texto de linha única com seu alinhamento e fator de largura.
- Texto de múltiplas linhas e texto quebrado, como texto de múltiplas linhas. O outro programa o quebra de novo a partir da mesma largura.
- Cores de objetos: por camada, por bloco, as 255 cores padrão, e cores verdadeiras no formato 2004 em diante.
- Camadas com sua cor, tipo de linha, espessura de linha e configurações de ligada, congelada, bloqueada e de plotagem; tipos de linha, espessuras e escalas de tipo de linha próprias dos objetos, os padrões dos tipos de linha e a escala de tipo de linha do desenho.
- As unidades do desenho e o formato de comprimento (decimal, pés e polegadas, frações…).
- Blocos com seu ponto base e definições de atributo, incluindo os invisíveis, constantes e predefinidos.
- Referências de bloco com sua escala, rotação e valores de atributo.
- Preenchimentos sólidos, e hachuras padronizadas com seu padrão, escala e ângulo (as próprias linhas do padrão, para que outros programas desenhem as mesmas linhas que o CadCraft desenha).
- Cotas, como cotas reais: outros programas as remedem quando são esticadas. Cada uma mantém suas próprias configurações (altura do texto, tamanho da seta, casas decimais, formato de comprimento) e seu texto, e carrega a cópia desenhada que toda cota DWG tem.
- Folhas (layouts): cada folha com seu tamanho de papel e unidades, o que é desenhado nela, e suas viewports com sua vista e escala.
- Vistas nomeadas.
- Multichamadas, como multichamadas.
- Nomes de camadas e blocos como você os digitou, em maiúsculas e minúsculas. (DXF R12 os grava em maiúsculas.)

### O que um DWG altera

Cada um destes itens é listado no histórico depois que você salva, quando se aplica ao seu desenho.

| No CadCraft | No DWG salvo |
|---|---|
| Cores verdadeiras (escolhidas com o seletor de cor), no formato 2000 | A cor padrão mais próxima: o formato 2000 tem apenas as 255. Salve como 2004 ou posterior para mantê-las |
| Vistas nomeadas de uma folha | Vistas do espaço papel: um DWG não diz qual folha, então, quando o CadCraft abre o arquivo de novo, elas pertencem à primeira folha |
| Texto de múltiplas linhas com fator de largura | Largura de letra normal: em um DWG, o fator de largura se aplica apenas a texto de linha única |
| Nomes de camadas ou blocos com caracteres que o DWG não permite | Alterados: um nome de um desenho vinculado como `Base\|Walls` vira `Base$0$Walls` (do jeito como a incorporação de um desenho vinculado o nomeia), e outros caracteres viram `_` |

### Por que R12, e o que converte

Ao salvar como DXF, o CadCraft grava DXF R12, a versão que todo programa CAD consegue abrir. Ela é mais antiga que alguns recursos, então algumas coisas são gravadas de forma mais simples:

| No CadCraft | No arquivo R12 salvo |
|---|---|
| Texto de múltiplas linhas | Um objeto de texto por linha |
| Elipses | Polilinhas que seguem a elipse |
| Hachuras (de arquivos abertos) | Apenas os seus contornos |
| Cores verdadeiras (escolhidas com o seletor de cor) | A cor padrão mais próxima |
| Espessuras de linha, e escalas de tipo de linha próprias dos objetos | Omitidas: R12 não tem nenhuma das duas (os tipos de linha são mantidos) |
| Nomes de camadas e blocos | Gravados em maiúsculas; espaços e outros caracteres viram `_`, e os nomes são cortados em 31 caracteres ("Legenda da folha" vira `LEGENDA_DA_FOLHA`) |
| Camadas configuradas para não plotar | Outros programas as plotarão (o CadCraft lembra a configuração quando o desenho tem uma folha) |
| Cotas | Cotas reais com seu próprio bloco desenhado, para que outros programas as mostrem como você as vê |
| Multichamadas | As linhas, a seta e o texto que elas desenham |
| Vistas nomeadas | Mantidas, com nomes em maiúsculas; as vistas de uma folha voltam na primeira folha |
| Várias folhas | A primeira folha é o espaço papel que todo programa mostra; as outras são mantidas como blocos chamados `CCLAYOUT_1`, `CCLAYOUT_2` … que o CadCraft transforma de volta em folhas quando abre o arquivo |

O histórico lista cada um destes que se aplicou ao seu desenho.

:::tip
Para continuar trabalhando em um desenho ao longo de vários dias, salve como DXF e abra esse DXF na próxima vez. Tudo o que o CadCraft consegue desenhar sobrevive ao ciclo, incluindo cotas, blocos e todas as folhas.
:::

## Desenhos vinculados (referências externas)

{{cmd:XATTACH}} (`XA`, ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Vincular um desenho (xref)}}) vincula outro DWG ou DXF: escolha o arquivo, depois clique onde ele vai ({{key:Enter}} o coloca em 0,0). Ele entra como um bloco com o nome do arquivo, na escala certa quando os dois desenhos têm unidades diferentes. Suas camadas e blocos mantêm seus nomes com o nome do vínculo à frente — `Plan|Walls`, `Plan|Door` — então nunca se misturam com os seus: ligue, desligue, congele ou bloqueie as camadas vinculadas como as suas. Um vínculo é somente leitura: altere o outro desenho e recarregue-o. O que você define nas camadas de um vínculo (cor, tipo de linha, espessura, ligada/desligada, congelada, bloqueada, plotagem) é mantido ao recarregar, ao salvar o desenho como DWG enquanto o vínculo ainda é um vínculo, e quando outro desenho vincula este.

{{cmd:XREF}} (`XR`): `?` lista os vínculos (carregados ou não, qual arquivo, quantas referências); `A` anexa (Anexar); `R` recarrega um pelo seu arquivo (escolha o arquivo de novo: o navegador não consegue acessar suas pastas sozinho); `B` incorpora um (ele se torna blocos e camadas comuns chamados `Plan$0$Walls`); `D` desanexa um (suas referências e camadas somem). Cada um é um passo de desfazer.

{{cmd:XCLIP}} (`XC`) recorta referências de bloco e vínculos: selecione-os, `N` para um novo limite, depois `R` e dois cantos, ou `P` e os pontos de um polígono ({{key:Enter}} fecha); `D` remove o recorte. Só o que está dentro aparece e é plotado, e o recorte acompanha a referência. DWG e DXF 2000 mantêm recortes; DXF R12 salva a referência inteira e avisa. Quando você incorpora um vínculo que tem referências recortadas, {{cmd:XREF}} `B` pergunta: `A` incorpora tudo, `C` mantém apenas a parte recortada de cada referência (linhas e arcos são cortados no limite; textos e blocos aninhados permanecem quando o ponto de inserção está dentro).

Um desenho que você abre pode ter vínculos a arquivos que o CadCraft não consegue ver: ele informa quantos não estão carregados. Use {{cmd:XREF}}, `R` e escolha cada arquivo para vê-los.

Ao salvar, um vínculo carregado é **incorporado** ao arquivo (outros programas veem blocos e camadas comuns chamados `Plan$0$…`), e o histórico informa isso. Um vínculo não carregado continua sendo um vínculo para o seu arquivo, em DWG e DXF.

## Abrir em 3D

{{ui:Vista}} › {{ui:Mais}} › {{ui:Abrir no ModelCraft}} ({{cmd:OPENIN3D}}) abre o desenho no aplicativo de modelagem 3D, em uma nova aba, como DWG, sem enviá-lo. Alterações feitas lá ficam lá; salve-as lá. O item de menu aparece apenas onde esse aplicativo consegue receber um desenho entregue.

## Plotar um PDF

Pressione {{key:Mod+P}}, clique em {{ui:Plotar}}, ou digite `PLOT`. O PDF é feito dentro do navegador e baixado, ou aberto em uma nova aba para impressão. Veja [Plotar em PDF](topic:plot-pdf).

## Onde os arquivos ficam

Cada salvamento e cada plotagem é um download, então os arquivos vão para onde o navegador põe os downloads: geralmente a pasta Downloads. Para escolher uma pasta a cada vez, altere a configuração de download no seu navegador; [Navegadores e computadores](common:browsers) mostra onde.

Nada que você abre ou salva é enviado para nós. Veja [Onde seus arquivos vão](common:your-files).

## Arquivos de projeto PLN e PLA

O CadCraft abre desenhos DWG e DXF, não os arquivos próprios do Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Ao abri-lo, ele informa do que se trata. No Archicad, salve as vistas ou folhas de que precisa como DWG e abra-as aqui, ou exporte o modelo como IFC e abra-o no BimCraft. Quando o BimCraft consegue receber o arquivo, o CadCraft oferece {{ui:Abrir no BimCraft}}.

## Se a página fechar antes de você salvar

O CadCraft guarda uma cópia de cada desenho que você altera, apenas neste navegador, logo depois que você para de editar. Se a aba fechar, o navegador parar ou o computador reiniciar antes de você salvar, o CadCraft pergunta **Recuperar seu trabalho?** na próxima vez que iniciar: {{ui:Recuperar}} abre o desenho de novo, sem salvar, em sua própria aba. Salvar o desenho remove a sua cópia. Veja [Recuperar seu trabalho](common:recover).

## Online e offline

Abrir, desenhar, salvar (DWG e DXF) e plotar acontecem todos no seu computador, então funcionam sem conexão depois que o CadCraft carregou.

Para usar o CadCraft sem nenhuma conexão, clique em {{ui:Salvar para uso offline}} na barra no topo enquanto estiver online. O rótulo conta ("Salvando 40 de 212") e termina em "Pronto para offline". A cópia salva inclui o leitor DWG, cerca de 5 MB no total, então **arquivos DWG também abrem offline** depois que ele é salvo. Clique no botão de novo para {{ui:Salvar de novo (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. "Não foi possível salvar" significa que alguns arquivos não foram baixados: verifique a conexão e clique para tentar de novo. "Offline não disponível" significa que esta janela do navegador não consegue manter uma cópia (janelas privadas e alguns computadores gerenciados).

Sem uma cópia salva, o leitor DWG é baixado na primeira vez que você abre um DWG depois que a página carrega, então abrir um DWG offline pode falhar; arquivos DXF nunca precisam dele. Não recarregue a página offline a menos que o CadCraft esteja salvo.

Veja [Trabalhando offline](common:offline) para os detalhes.

:::offline
Você está offline agora. Os desenhos são salvos como DWG ou DXF e plotados normalmente, e arquivos DXF abrem. Arquivos DWG abrem se o CadCraft mostrar "Pronto para offline", ou se o leitor DWG já tiver sido carregado nesta aba.
:::

## Restrições em arquivos

Restrições e parâmetros (veja [Restringir um desenho](topic:constraints)) são salvos tanto em DWG quanto em DXF. Cada objeto restringido carrega uma pequena nota do CadCraft (dados estendidos), e um bloco não usado chamado `CADCRAFT_PARAMETRIC` guarda as restrições e a tabela de parâmetros. Outros programas abrem o desenho normalmente e ignoram ambos; eles podem excluir o bloco não usado ao limpar. As notas referem-se aos objetos pela sua própria chave, não pelos identificadores do arquivo, então um programa que renumera identificadores não as quebra. Quando outro programa excluiu ou alterou um objeto restringido, o CadCraft descarta as restrições dele ao abrir o arquivo e informa quantas. Um arquivo sem elas abre sem restrições.

Um esboço exportado de um modelador de peças (`.json`) também abre: veja [Mover esboços de e para outros modeladores de peças](topic:solidworks-sketches).

## Ainda não disponível

- Multichamadas como objetos de multichamada em um DXF salvo (R12 não tem nenhum: elas são salvas como o que desenham).
- Imagens em um DXF salvo (elas são salvas como suas molduras; DWG as mantém como imagens), e máscaras de apagamento que escondem o que está embaixo.
- Salvar uma versão de DXF mais nova que 2000.
- Salvamento na nuvem e sincronização entre computadores.

Veja [Ainda não implementado](topic:not-built-yet) para a lista completa.
