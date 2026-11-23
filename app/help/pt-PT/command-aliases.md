---
title: Editar aliases de comandos
summary: Guarde os seus próprios aliases de comandos num único ficheiro de texto, no formato habitual, importe e exporte um ficheiro .pgp e volte a carregá-lo com REINIT.
keywords: alias, aliases, aliasedit, pgp, atalho, nome curto, reinit, teclado, personalizar, editar aliases
from: 2282d36f
---

## O que vai aprender

Como adicionar os seus próprios nomes curtos para comandos, por exemplo `LL` para {{cmd:LINE}}, tudo num único ficheiro de texto.

## Adicionar um alias

1. Abra {{ui:Vista}} › {{ui:Mais}} › {{ui:Editar aliases…}}, ou escreva {{cmd:ALIASEDIT}} e prima {{key:Enter}}.
2. Acrescente uma linha com o alias, uma vírgula e o comando depois de um asterisco:

```
LL,     *LINE
```

3. Clique em {{ui:Guardar}}. A linha de comandos indica quantos dos seus aliases estão em uso.
4. Escreva `LL` e prima {{key:Enter}}: o LINE inicia.

Os seus aliases ficam por cima dos do próprio CadCraft. Uma linha sua tem prioridade sobre um alias incorporado com o mesmo nome; se remover a sua linha, o incorporado volta a funcionar.

## Linhas que o CadCraft recusa

O editor lista cada problema com o número da linha enquanto escreve:

- o comando não existe;
- o alias é já o nome de um comando (`LINE, *CIRCLE` ocultaria o LINE);
- a linha não é `ALIAS, *COMANDO`;
- o mesmo alias está em duas linhas (prevalece a última).

As linhas que iniciam um programa no seu computador, como `NOTEPAD, START, 1, *File to edit: ,`, são ignoradas com uma nota: uma aplicação no navegador não pode iniciar programas.

## Trazer os seus aliases de outro programa

1. No editor de aliases, clique em {{ui:Importar .pgp…}} e escolha o ficheiro. Também pode largar um ficheiro `.pgp` sobre o desenho.
2. Verifique os problemas indicados (os comandos que o CadCraft não tem são recusados; os restantes funcionam).
3. Clique em {{ui:Guardar}}.

{{ui:Exportar .pgp}} guarda os aliases do CadCraft e os seus num único ficheiro, no mesmo formato.

## Voltar a carregar o ficheiro

Escreva {{cmd:REINIT}} e prima {{key:Enter}} para aplicar novamente o seu ficheiro de aliases. Fica guardado neste navegador; a aplicação de ambiente de trabalho o guardará na sua própria pasta, e o serviço na nuvem sincronizá-lo-á.

## Letras para as opções de um comando

Um alias dá nome a um comando. Para alterar as letras que respondem às opções de um comando (`P` para Polar em {{cmd:ARRAY}}), veja [Dar às opções dos comandos as suas próprias letras](topic:option-letters).

## Atalhos de teclado para qualquer comando

Um alias escreve-se; um atalho é uma tecla. Para atribuir a um comando uma tecla sua:

1. Clique em {{ui:Vista}} › {{ui:Mais}} › {{ui:Atalhos de teclado…}}, ou escreva `KEYS` e prima {{key:Enter}}.
2. Clique na caixa {{ui:Tecla}} e prima as teclas, por exemplo {{key:Alt+Shift+C}}.
3. Em {{ui:Executa}}, escreva o comando e, se quiser, o que escrever a seguir: `CIRCLE`, ou `ZOOM E`.
4. Clique em {{ui:Adicionar}}.

Uma tecla precisa de {{key:Mod}} ou {{key:Alt}} com uma letra ou um algarismo, ou de uma tecla de função livre ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). As teclas que o CadCraft, a aplicação ou o navegador já usam, e as teclas de um botão de Ferramentas próprias (veja [Botões próprios](topic:my-tools)), são recusadas, e a caixa indica o motivo. Os atalhos ficam guardados neste navegador (ou na aplicação de ambiente de trabalho); {{ui:Remover}} elimina um deles.
