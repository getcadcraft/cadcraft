---
title: Arquivos: o que abre, o que salva
summary: Os formatos que o CadCraft abre, salva e exporta, o que é mantido ou convertido e para onde vão os arquivos.
keywords: xclip, clip, limite do xclip, vincular recortado, dwg, dxf, pdf, r12, abrir, salvar, exportar, importar, formatos, conversão, download, saveas, dxfout, salvar como, salvar dwg, formato, qsave, xref, xattach, desenho vinculado, referência externa, vincular, recarregar, desanexar
from: 6d68b34e
---

## Em resumo

| Formato | Abrir | Salvar | Observações |
|---|---|---|---|
| DXF (texto, qualquer versão) | Sim | Sim, como DXF R12 ou DXF 2000 | DXF binário é recusado: salve-o antes como DXF de texto. |
| DWG | Sim | Sim, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ou 2018) | Lido e escrito pela biblioteca de DWG do próprio CadCraft (arquivos do AutoCAD R13 a 2018). Seu DWG nunca é alterado. Arquivos danificados, ou versões que o leitor não trata, são recusados com uma mensagem. |
| PDF | Traz uma página: como referência de fundo ou como objetos ([Referências de fundo em PDF](topic:pdf-underlay)) | Sim, por plotagem | PDF vetorial de uma folha, ou do modelo em uma escala. |

Cada desenho que você abre (ou começa com {{ui:Novo}}) ganha a própria guia sobre a área de desenho; um desenho novo que ninguém tocou ainda é reaproveitado em vez de acrescentar uma guia. Clique em uma guia para alternar, no {{ui:×}} dela para fechar (o CadCraft pergunta antes se houver alterações não salvas) ou disponha os desenhos abertos lado a lado: veja [Divida a tela](topic:split-screen).

## Abrir um desenho

- Pressione {{key:Mod+O}}, clique em {{ui:Abrir}} ou digite `OPEN` e escolha o arquivo.
- Ou arraste um arquivo `.dwg` ou `.dxf` para a área de desenho.

O arquivo é lido dentro do navegador. Ele não é enviado a lugar nenhum. O histórico informa quantos objetos e camadas entraram e quanto tempo levou, e a seção {{ui:Desenho}} do painel da esquerda mostra o formato, por exemplo "DWG 2018 (AC1032)".

O leitor de DWG faz parte do CadCraft e é buscado com o primeiro DWG que você abre depois que a página carrega (algumas centenas de KB), então não há um download separado para esperar. Ele lê o arquivo em segundo plano, e a página continua respondendo enquanto um DWG grande abre.

### O que entra

- Linhas, arcos, círculos, polilinhas (com segmentos em arco), elipses, pontos, textos e textos de múltiplas linhas, sólidos, hachuras (os padrões padrão desenhados como suas linhas, os demais como um tom chapado), referências de bloco com seus atributos (valores que você pode editar; veja [Atributos de bloco](topic:attributes)), cotas e layouts com seus viewports.
- Splines entram como splines (grau, pontos de controle, nós, pesos, pontos de ajuste); veja [Splines e polilinhas](topic:splines).
- Multichamadas com uma linha de chamada e texto entram como multichamadas do CadCraft que você pode editar (veja {{cmd:MLEADER}}). As outras (com um bloco, várias linhas de chamada ou linhas curvas) são desenhadas como o outro programa as desenhou e se movem como um só objeto; o histórico diz quantas.
- Imagens aparecem como uma moldura com o nome do arquivo da imagem até você entregar o arquivo ao CadCraft com {{cmd:IMAGE}}: veja [Imagens em um desenho](topic:pictures#show-the-pictures-a-dwg-uses). Wipeouts aparecem como a moldura, e o que está sob eles continua visível.
- Tabelas em um DWG entram como o outro programa as desenhou.
- Faces 3D no espaço modelo entram na guia {{ui:3D}}, não como objetos 2D; o mesmo vale para as que estão dentro de blocos, uma vez por referência de bloco no modelo. Em um bloco e em uma folha elas também são desenhadas planas, como contornos. Veja [Modele em 3D](topic:3d-solids).
- Camadas mantêm cor, estado ligada, congelada, bloqueada e configurações de plotagem. DEFPOINTS nunca é plotada.
- Cotas viram cotas reais e editáveis do CadCraft onde seus pontos podem ser lidos. Elas são mostradas primeiro exatamente como o outro programa as desenhou; assim que você altera uma, o CadCraft a redesenha no estilo dele.
- Cada layout vira uma guia de folha. No outro programa, todo layout tem um primeiro viewport oculto que é a própria folha; o CadCraft deixa esse de fora.

### O que ainda não entra

Tudo o que o CadCraft não consegue desenhar é contado, não adivinhado. A caixa "Sobre este arquivo" no painel da esquerda lista isso como "Ainda não exibido:" seguido de cada tipo de objeto e quantos são. Casos típicos são tabelas em um DXF, malhas e sólidos 3D dentro de blocos. Sólidos 3D, regiões e corpos no espaço modelo aparecem na guia 3D (veja [Modele em 3D](topic:3d-solids#solids-from-other-programs)). Viewports girados no arquivo aparecem girados, como lá, e mantêm a rotação quando você salva; o mesmo vale para o SCU atual, os SCUs nomeados e uma vista girada.

O texto é desenhado em uma única fonte no estilo Helvetica. Um rótulo que cabe em uma linha na fonte mais estreita do programa original pode quebrar em duas linhas no CadCraft.

## Salvar

Há três formas de salvar. Cada uma baixa uma cópia.

- **Salvar**: pressione {{key:Mod+S}}, clique em {{ui:Salvar}} ou digite `SAVE` (também `QSAVE`). Ele salva no formato do desenho: DWG se você abriu um DWG, DXF se você abriu um DXF. Um DWG mantém a versão com que veio (um arquivo 2018 é salvo como 2018). Um desenho novo usa o formato e a versão de DWG que você escolheu por último em Salvar como neste navegador; se você nunca escolheu, DWG no formato AutoCAD 2000.
- **Salvar como**: pressione {{key:Mod+Shift+S}}, clique em {{ui:Salvar como}} ou digite `SAVEAS`. A caixa de diálogo {{ui:Salvar uma cópia como}} oferece {{ui:DWG}}, com uma lista {{ui:Versão}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000), {{ui:DXF R12}} e {{ui:DXF 2000}}, cada um com o nome de arquivo que dará, e o formato e a versão atuais do desenho já escolhidos. Clique em {{ui:Salvar}} para baixar, ou em {{ui:Cancelar}} (ou {{key:Esc}}) para não salvar nada; o histórico então diz "Não salvo." O que você escolhe fica: {{key:Mod+S}} passa a usar isso para este desenho, e os desenhos novos neste navegador começam com isso.
- **DXFOUT**: digite `DXFOUT`. Ele sempre baixa uma cópia em DXF R12, e o próximo {{key:Mod+S}} continua salvando no formato do próprio desenho.

O navegador baixa `<nome do desenho>.dwg` ou `<nome do desenho>.dxf`. Todo salvamento é um **download novo**; o arquivo que você abriu nunca é sobrescrito nem alterado. O histórico confirma, por exemplo "Cópia salva como Plan.dwg (DWG (AutoCAD 2018)). Seu Plan.dxf original não foi alterado." Para um DXF ele diz "(DXF R12, abre em qualquer programa de CAD)". As linhas abaixo listam o que mudou no caminho.

Quando o CadCraft roda no aplicativo desktop, salvar funciona como em outros programas de desktop: {{key:Mod+S}} grava o desenho de volta no arquivo que você abriu, no formato e na versão dele, e o histórico diz onde foi salvo. {{ui:Salvar como}} e as exportações mostram a caixa de diálogo de salvar do sistema, e um arquivo `.dwg`, `.dxf` ou `.ccsheets` em que você clica duas vezes abre no CadCraft.

Para um PDF, plote (veja abaixo).

## O que um DWG mantém e o que muda

O CadCraft escreve o DWG ele mesmo, dentro do navegador, com a mesma biblioteca de DWG que usa para ler. Escolha a versão em Salvar como: o formato AutoCAD 2000 (versão de arquivo AC1015) abre no maior número de programas, inclusive os antigos; os formatos mais novos (2004, AC1018, até 2018, AC1032) também mantêm cores reais. Nada é enviado, e salvar um DWG funciona offline.

Cada versão é verificada lendo os arquivos salvos de volta com os leitores de DWG de três outros programas e com o próprio CadCraft. Um DWG do CadCraft ainda não foi aberto no próprio AutoCAD.

### O que um DWG mantém

- Linhas, arcos, círculos, elipses, pontos e polilinhas com seus segmentos em arco.
- Texto de uma linha com seu alinhamento e fator de largura.
- Textos de múltiplas linhas e com quebra, como texto de múltiplas linhas. O outro programa quebra de novo a partir da mesma largura.
- Cores de objeto: PorCamada, PorBloco, as 255 cores padrão e cores reais no formato 2004 e posteriores.
- Camadas com cor, tipo de linha, espessura de linha e suas configurações de ligada, congelada, bloqueada e plotagem; tipos de linha, espessuras de linha e escalas de tipo de linha próprios dos objetos, os padrões de tipo de linha e a escala de tipo de linha do desenho.
- As unidades do desenho e o formato de comprimento (decimal, pés e polegadas, frações…).
- Blocos com seu ponto base e definições de atributo, inclusive os invisíveis, constantes e predefinidos.
- Referências de bloco com sua escala, rotação e valores de atributo.
- Preenchimentos sólidos e hachuras com padrão, com seu padrão, escala e ângulo (as linhas do próprio padrão, de modo que outros programas desenham as mesmas linhas que o CadCraft).
- Cotas, como cotas reais: outros programas as medem de novo quando são esticadas. Cada uma mantém as próprias configurações (altura do texto, tamanho da seta, casas decimais, formato de comprimento) e o seu texto, e leva a cópia desenhada que toda cota de DWG tem.
- Folhas (layouts): cada folha com seu tamanho de papel e unidades, o que está desenhado nela e seus viewports com a vista e a escala.
- Vistas nomeadas.
- Multichamadas, como multichamadas.
- Nomes de camadas e de blocos como você os digitou, em maiúsculas e minúsculas. (O DXF R12 os escreve em maiúsculas.)

### O que um DWG muda

Cada um destes itens é listado no histórico depois que você salva, quando se aplica ao seu desenho.

| No CadCraft | No DWG salvo |
|---|---|
| Cores reais (escolhidas no seletor de cores), no formato 2000 | A cor padrão mais próxima: o formato 2000 só tem as 255. Salve como 2004 ou posterior para mantê-las |
| Vistas nomeadas de uma folha | Vistas do espaço papel: um DWG não diz de qual folha, então, quando o CadCraft abre o arquivo de novo, elas pertencem à primeira folha |
| Texto de múltiplas linhas com fator de largura | Largura normal das letras: em um DWG o fator de largura vale só para texto de uma linha |
| Nomes de camada ou de bloco com caracteres que o DWG não permite | Alterados: um nome de um desenho vinculado como `Base\|Walls` vira `Base$0$Walls` (do jeito que vincular um desenho vinculado dá nome), e outros caracteres viram `_` |

### Por que R12, e o que é convertido

Quando você salva como DXF, o CadCraft escreve DXF R12, a versão que todo programa de CAD consegue abrir. Ela é mais antiga que alguns recursos, então algumas coisas são escritas de forma mais simples:

| No CadCraft | No arquivo R12 salvo |
|---|---|
| Texto de múltiplas linhas | Um objeto de texto por linha |
| Elipses | Polilinhas que seguem a elipse |
| Hachuras (de arquivos abertos) | Só os contornos |
| Cores reais (escolhidas no seletor de cores) | A cor padrão mais próxima |
| Espessuras de linha e escalas de tipo de linha próprias dos objetos | Omitidas: o R12 não tem nenhuma delas (os tipos de linha são mantidos) |
| Nomes de camadas e de blocos | Escritos em maiúsculas; espaços e outros caracteres viram `_`, e os nomes são cortados em 31 caracteres ("Title block" vira `TITLE_BLOCK`) |
| Camadas configuradas para não plotar | Outros programas vão plotá-las (o CadCraft se lembra da configuração quando o desenho tem uma folha) |
| Cotas | Cotas reais com seu próprio bloco desenhado, então outros programas as mostram como você as vê |
| Multichamadas | As linhas, a ponta de seta e o texto que elas desenham |
| Vistas nomeadas | Mantidas, com nomes em maiúsculas; as vistas de uma folha voltam na primeira folha |
| Várias folhas | A primeira folha é o espaço papel que todo programa mostra; as outras são mantidas como blocos chamados `CCLAYOUT_1`, `CCLAYOUT_2` … que o CadCraft transforma de volta em folhas quando abre o arquivo |

O histórico lista cada um destes que se aplicou ao seu desenho.

:::tip
Para continuar trabalhando em um desenho por vários dias, salve como DXF e abra esse DXF da próxima vez. Tudo o que o CadCraft sabe desenhar sobrevive à viagem de ida e volta, inclusive cotas, blocos e todas as folhas.
:::

## Desenhos vinculados (referências externas)

{{cmd:XATTACH}} (`XA`, ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Vincular um desenho (xref)}}) vincula outro DWG ou DXF: escolha o arquivo e clique onde ele vai ({{key:Enter}} o coloca em 0,0). Ele entra como um bloco com o nome do arquivo, na escala certa quando os dois desenhos têm unidades diferentes. Suas camadas e blocos mantêm os nomes com o nome do vínculo na frente — `Plan|Walls`, `Plan|Door` — e por isso nunca se misturam com os seus: ligue e desligue as camadas vinculadas, congele-as ou bloqueie-as como as suas. Um vínculo é somente leitura: altere o outro desenho e recarregue-o. O que você define nas camadas de um vínculo (cor, tipo de linha, espessura de linha, ligada/desligada, congelada, bloqueada, plotagem) é mantido quando você o recarrega, quando você salva o desenho como DWG enquanto o vínculo ainda é um vínculo e quando outro desenho vincula este.

{{cmd:XREF}} (`XR`): `?` lista os vínculos (carregados ou não, qual arquivo, quantas referências); `A` anexa; `R` recarrega um a partir do arquivo (escolha o arquivo de novo: o navegador não alcança suas pastas por conta própria); `B` vincula um definitivamente (ele vira blocos e camadas comuns chamados `Plan$0$Walls`); `D` desanexa um (suas referências e camadas somem). Cada um é um passo de desfazer.

{{cmd:XCLIP}} (`XC`) recorta referências de bloco e vínculos: selecione-os, `N` para um limite novo, depois `R` e dois cantos ou `P` e os pontos de um polígono ({{key:Enter}} fecha); `D` remove o recorte. Só o que está dentro aparece e é plotado, e o recorte se move com a referência. DWG e DXF 2000 mantêm recortes; o DXF R12 salva a referência inteira e avisa. Quando você vincula definitivamente um vínculo que tem referências recortadas, {{cmd:XREF}} `B` pergunta: `A` vincula tudo, `C` mantém só a parte recortada de cada referência (linhas e arcos são cortados no limite; textos e blocos aninhados ficam quando o ponto de inserção está dentro).

Um desenho que você abre pode vincular arquivos que o CadCraft não enxerga: ele diz quantos não foram carregados. Use {{cmd:XREF}}, `R` e escolha cada arquivo para vê-los.

Quando você salva, um vínculo carregado é **incorporado** ao arquivo (outros programas veem blocos e camadas comuns chamados `Plan$0$…`), e o histórico avisa. Um vínculo que não está carregado continua sendo um vínculo para o arquivo dele, em DWG e DXF.

## Abrir em 3D

{{ui:Vista}} › {{ui:Mais}} › {{ui:Abrir no ModelCraft}} ({{cmd:OPENIN3D}}) abre o desenho no aplicativo de modelagem 3D em uma guia nova, como DWG, sem enviá-lo. As alterações feitas lá ficam lá; salve-as lá. O item de menu só aparece onde esse aplicativo pode receber um desenho entregue.

## Plotar um PDF

Pressione {{key:Mod+P}}, clique em {{ui:Plotar}} ou digite `PLOT`. O PDF é feito dentro do navegador e baixado, ou aberto em uma guia nova para impressão. Veja [Plotar em PDF](topic:plot-pdf).

## Para onde vão os arquivos

Todo salvamento e toda plotagem é um download, então os arquivos vão para onde o seu navegador coloca os downloads: normalmente a pasta Downloads. Para escolher uma pasta a cada vez, altere a configuração de download do navegador; [Navegadores e computadores](common:browsers) mostra onde.

Nada do que você abre ou salva é enviado para nós. Veja [Para onde vão seus arquivos](common:your-files).

## Arquivos de projeto PLN e PLA

O CadCraft abre desenhos DWG e DXF, não os arquivos próprios do Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Abrir um deles informa o que ele é. No Archicad, salve as vistas ou os layouts de que precisa como DWG e abra-os aqui, ou exporte o modelo como IFC e abra-o no BimCraft. Onde o BimCraft pode assumir o arquivo, o CadCraft oferece {{ui:Abrir no BimCraft}}.

## Se a página fechar antes de você salvar

O CadCraft guarda uma cópia de cada desenho que você altera, só neste navegador, um instante depois de você parar de editar. Se a guia fechar, o navegador parar ou o computador reiniciar antes de você salvar, o CadCraft pergunta **Recuperar seu trabalho?** na próxima vez que iniciar: {{ui:Recuperar}} abre o desenho de novo, não salvo, em uma guia própria. Salvar o desenho remove a cópia dele. Veja [Recupere seu trabalho](common:recover).

## Online e offline

Abrir, desenhar, salvar (DWG e DXF) e plotar acontecem no seu computador, então funcionam sem conexão depois que o CadCraft carregou.

Para usar o CadCraft sem nenhuma conexão, clique em {{ui:Salvar para uso offline}} na barra de cima enquanto você está online. O rótulo conta ("Salvando 40 de 212") e termina em "Pronto para uso offline". A cópia salva inclui o leitor de DWG, cerca de 5 MB no total, então **arquivos DWG também abrem offline** depois de salva. Clique no botão de novo para {{ui:Salvar de novo (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. "Não foi possível salvar" significa que alguns arquivos não foram baixados: verifique a conexão e clique para tentar de novo. "Offline indisponível" significa que esta janela do navegador não pode guardar uma cópia (janelas privadas e alguns computadores gerenciados).

Sem uma cópia salva, o leitor de DWG é buscado na primeira vez que você abre um DWG depois que a página carrega, então abrir um DWG offline pode falhar; arquivos DXF nunca precisam dele. Não recarregue a página offline a menos que o CadCraft esteja salvo.

Veja [Trabalhar offline](common:offline) para os detalhes.

:::offline
Você está offline agora. Os desenhos são salvos como DWG ou DXF e plotados normalmente, e os arquivos DXF abrem. Os arquivos DWG abrem se o CadCraft mostrar "Pronto para uso offline", ou se o leitor de DWG já foi carregado nesta guia.
:::

## Restrições em arquivos

Restrições e parâmetros (veja [Restrinja um desenho](topic:constraints)) são salvos em DWG e em DXF. Cada objeto restringido leva uma pequena nota do CadCraft (dados estendidos), e um bloco sem uso chamado `CADCRAFT_PARAMETRIC` guarda as restrições e a tabela de parâmetros. Outros programas abrem o desenho normalmente e ignoram os dois; podem excluir o bloco sem uso quando limpam o desenho. As notas se referem aos objetos pela chave própria deles, não pelos handles do arquivo, então um programa que renumera handles não as quebra. Quando outro programa excluiu ou alterou um objeto restringido, o CadCraft descarta as restrições dele ao abrir o arquivo e diz quantas. Um arquivo sem elas abre sem restrições.

Um esboço exportado de um modelador de peças (`.json`) também abre: veja [Leve esboços de e para outros modeladores de peças](topic:solidworks-sketches).

## Ainda não disponível

- Multichamadas como objetos de multichamada em um DXF salvo (o R12 não tem: elas são salvas como o que desenham).
- Imagens em um DXF salvo (elas são salvas como suas molduras; o DWG as mantém como imagens) e wipeouts que ocultam o que está sob eles.
- Salvar uma versão de DXF mais nova que a 2000.
- Salvamento na nuvem e sincronização entre computadores.

Veja [Ainda não implementado](topic:not-built-yet) para a lista completa.
