---
title: Editar aliases de comandos
summary: Mantenha seus próprios aliases de comandos em um único arquivo de texto no formato conhecido, importe e exporte um arquivo .pgp e recarregue-o com REINIT.
keywords: alias, aliases, aliasedit, pgp, atalho, nome curto, reinit, teclado, personalizar, editar aliases
from: 2282d36f
---

## O que você vai aprender

Como adicionar seus próprios nomes curtos para comandos, por exemplo `LL` para {{cmd:LINE}}, tudo em um único arquivo de texto.

## Adicionar um alias

1. Abra {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}, ou digite {{cmd:ALIASEDIT}} e pressione {{key:Enter}}.
2. Adicione uma linha com o alias, uma vírgula e o comando depois de um asterisco:

```
LL,     *LINE
```

3. Clique em {{ui:Save}}. A linha de comando informa quantos dos seus aliases estão em uso.
4. Digite `LL` e pressione {{key:Enter}}: LINE é iniciado.

Seus aliases ficam sobre os do próprio CadCraft. Uma linha sua prevalece sobre um alias embutido com o mesmo nome; remova sua linha e o embutido volta.

## Linhas que o CadCraft recusa

O editor lista cada problema com o número da linha enquanto você digita:

- o comando não existe;
- o alias é o próprio nome de um comando (`LINE, *CIRCLE` ocultaria LINE);
- a linha não é `ALIAS, *COMANDO`;
- o mesmo alias está em duas linhas (a última prevalece).

Linhas que iniciam um programa no seu computador, como `NOTEPAD, START, 1, *File to edit: ,`, são ignoradas com uma nota: um aplicativo no navegador não pode iniciar programas.

## Trazer seus aliases de outro programa

1. No editor de aliases, clique em {{ui:Import .pgp…}} e escolha o arquivo. Você também pode arrastar um arquivo `.pgp` para o desenho.
2. Confira os problemas listados (comandos que o CadCraft não tem são recusados; os demais funcionam).
3. Clique em {{ui:Save}}.

{{ui:Export .pgp}} salva os aliases do CadCraft e os seus como um único arquivo no mesmo formato.

## Recarregar o arquivo

Digite {{cmd:REINIT}} e pressione {{key:Enter}} para aplicar seu arquivo de aliases novamente. Ele fica salvo neste navegador; o aplicativo de desktop o manterá na própria pasta, e o serviço em nuvem o sincronizará.

## Letras para as opções de um comando

Um alias nomeia um comando. Para mudar as letras que respondem às opções de um comando (`P` para Polar em {{cmd:ARRAY}}), veja [Dê às opções de comando suas próprias letras](topic:option-letters).

## Atalhos de teclado para qualquer comando

Um alias é digitado; um atalho é uma tecla. Para dar a um comando uma tecla própria:

1. Clique em {{ui:View}} › {{ui:More}} › {{ui:Keyboard shortcuts…}}, ou digite `KEYS` e pressione {{key:Enter}}.
2. Clique na caixa {{ui:Key}} e pressione as teclas, por exemplo {{key:Alt+Shift+C}}.
3. Em {{ui:Runs}}, escreva o comando e, se quiser, o que digitar depois dele: `CIRCLE`, ou `ZOOM E`.
4. Clique em {{ui:Add}}.

Uma tecla precisa de {{key:Mod}} ou {{key:Alt}} com uma letra ou um número, ou de uma tecla de função livre ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Teclas que o CadCraft, o aplicativo ou o navegador já usam, e as teclas de um botão Minhas ferramentas (veja [Botões próprios](topic:my-tools)), são recusadas, e a caixa informa o motivo. Os atalhos são salvos neste navegador (ou no aplicativo de desktop); {{ui:Remove}} remove um deles.
