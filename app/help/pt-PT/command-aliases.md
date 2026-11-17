---
title: Editar aliases de comandos
summary: Guarde os seus próprios nomes curtos de comandos num único ficheiro de texto, no formato habitual, importe e exporte um ficheiro .pgp, e volte a carregá-lo com REINIT.
keywords: alias, aliases, aliasedit, pgp, atalho, nome curto, reinit, teclado, personalizar, editar aliases
from: 6ab6fa0e
---

## O que vai aprender

Como acrescentar os seus próprios nomes curtos para comandos, por exemplo `LL` para {{cmd:LINE}}, tudo num único ficheiro de texto.

## Acrescentar um alias

1. Abra {{ui:Vista}} › {{ui:Mais}} › {{ui:Editar aliases…}}, ou escreva {{cmd:ALIASEDIT}} e prima {{key:Enter}}.
2. Acrescente uma linha com o alias, uma vírgula e o comando depois de um asterisco:

```
LL,     *LINE
```

3. Clique em {{ui:Guardar}}. A linha de comandos indica quantos dos seus aliases estão em uso.
4. Escreva `LL` e prima {{key:Enter}}: LINE começa.

Os seus aliases ficam por cima dos do CadCraft. Uma linha sua tem prioridade sobre um alias incorporado com o mesmo nome; se remover a sua linha, o incorporado volta a valer.

## Linhas que o CadCraft recusa

O editor indica cada problema com o número da linha enquanto escreve:

- o comando não existe;
- o alias é ele próprio o nome de um comando (`LINE, *CIRCLE` ocultaria LINE);
- a linha não é `ALIAS, *COMANDO`;
- o mesmo alias está em duas linhas (a última prevalece).

As linhas que iniciam um programa no seu computador, como `NOTEPAD, START, 1, *File to edit: ,`, são ignoradas com uma nota: uma aplicação no navegador não pode iniciar programas.

## Trazer os seus aliases de outro programa

1. No editor de aliases, clique em {{ui:Importar .pgp…}} e escolha o ficheiro. Também pode arrastar um ficheiro `.pgp` para o desenho.
2. Verifique os problemas indicados (os comandos que o CadCraft não tem são recusados, os restantes funcionam).
3. Clique em {{ui:Guardar}}.

{{ui:Exportar .pgp}} guarda os aliases do CadCraft e os seus num só ficheiro, no mesmo formato.

## Recarregar o ficheiro

Escreva {{cmd:REINIT}} e prima {{key:Enter}} para aplicar de novo o seu ficheiro de aliases. Fica guardado neste navegador; a aplicação para computador vai guardá-lo na sua própria pasta, e o serviço na nuvem sincroniza-o.

## Atalhos de teclado para qualquer comando

Um alias escreve-se; um atalho é uma tecla. Para dar a um comando uma tecla própria:

1. Clique em {{ui:Vista}} › {{ui:Mais}} › {{ui:Atalhos de teclado…}}, ou escreva `KEYS` e prima {{key:Enter}}.
2. Clique na caixa {{ui:Tecla}} e prima as teclas, por exemplo {{key:Alt+Shift+C}}.
3. Em {{ui:Executa}}, escreva o comando e, se quiser, o que deve escrever a seguir: `CIRCLE`, ou `ZOOM E`.
4. Clique em {{ui:Adicionar}}.

Uma tecla precisa de {{key:Mod}} ou {{key:Alt}} com uma letra ou um dígito, ou de uma tecla de função livre ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). As teclas que o CadCraft, a aplicação ou o navegador já usam, e as que um botão das suas próprias ferramentas tem (veja [Botões próprios](topic:my-tools)), são recusadas, e a caixa indica porquê. Os atalhos ficam guardados neste navegador (ou na aplicação para computador); {{ui:Remover}} elimina um.
