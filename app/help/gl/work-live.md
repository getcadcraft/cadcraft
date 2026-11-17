---
title: Traballar nun mesmo debuxo xuntos con Live TeamWork
summary: O que cambia en CadCraft mentres está nunha sesión de Live TeamWork desde CadCraft Studio: os cursores e as seleccións doutras persoas, os obxectos que alguén edita, os bloqueos do anfitrión, o seu propio desfacer e a unión desde un navegador na mesma rede.
keywords: live, live teamwork, studio live, xuntos, colaborar, coedición, sesión, compartir en directo, unirse, cursor, retido, editando, bloqueo, livelock, liveunlock, livehold, reter capa, reter área, candado, desfacer, anfitrión, asistente, mesmo ficheiro, moitas persoas, lento, límite, quen cambiou, edicións recentes, rexistro de edicións
from: 0497d2a3
---

## O que vai aprender

O que vostede ve e o que pasa coas súas edicións mentres varias persoas traballan ao mesmo tempo nun mesmo debuxo. CadCraft Studio inicia e une as sesións de Live TeamWork (Compartir en directo, {{ui:Unir}}); esta páxina trata do propio debuxo.

## Todos debuxan ao mesmo tempo

Debuxe e edite como de costume. As súas edicións aparecen ao momento, mesmo antes de que as vexan os demais, e as deles aparecen na súa pantalla un momento despois de facelas. Funcionan todos os comandos: debuxar, modificar, capas, bloques, follas, cotas, restricións.

Dúas persoas poden cambiar o mesmo obxecto. Cando cambia cousas distintas, como a cor e un punto final dunha liña, conservanse os dous cambios. Cando cambia a mesma cousa, gaña o cambio posterior.

O que queda só para vostede: a capa actual, a cor e a altura do texto para os obxectos novos, os seus axustes de cotas, a súa vista, a división de pantalla e o UCS. O debuxo é compartido; a maneira de velo non.

## Outras persoas no seu debuxo

- **Cursores:** o punteiro de cada persoa móstrase co seu nome na súa propia cor, e o comando que está a executar. Vede os cursores das persoas que traballan preto do que hai na súa pantalla.
- **Seleccións:** o que alguén seleccionou aparece delimitado coa súa cor.
- **Sendo editado:** un obxecto que alguén seleccionou leva unha etiqueta como «Ana está editando». Pode seguir cambiándolle a cor ou movelo, pero non pode eliminalo, explotalo nin volver escribilo ata que a persoa o solte. Seleccionalo indícalle quen o ten.
- **Quen o cambiou por último:** seleccione un obxecto que outra persoa cambiou nesta sesión e a liña de comandos di quen foi e cal foi o cambio («Ben cambiou iso por último: CIRCLE.»). O panel {{ui:Live}} de Studio lista cada edición recente baixo {{ui:Edicións recentes}}. Nada disto se garda no debuxo: dura o que dure a sesión.

## Reter unha capa ou unha área mentres traballa

Nun debuxo grande con varias persoas, diga cal parte é a súa por agora:

1. Escriba `LIVEHOLD` e prema {{key:Enter}}.
2. Escolla `L` e escriba un nome de capa (Enter mantén a capa actual), ou escolla `A` e prema dúas esquinas dunha área.
3. As edicións doutras persoas nesa capa, ou a obxectos desa área, retíranse e avísaselles de que vostede traballa alí. Vostede ve a súa área como un marco discontinuo; os demais vérena na súa cor co seu nome, e as capas que reteña aparecen listadas arriba á esquerda do seu debuxo.
4. `LIVEHOLD`, e logo `R`, libera todo o que reteña. Saír da sesión tamén o libera.

Calquera persoa da sesión pode reter, o anfitrión incluído; os bloqueos do anfitrión aplícanse por riba. Unha reserva nunca se garda no ficheiro.

## Cando se retira unha edición

A copia do debuxo do anfitrión comproba cada edición. Algunhas non poden entrar, e CadCraft as retira da súa pantalla e explica o motivo na liña de comandos, por exemplo:

- alguén eliminou o obxecto, ou a capa ou o bloque que precisa, xusto antes que vostede;
- alguén está editando ese obxecto, ou retén a súa capa ou a área onde está;
- o anfitrión o bloqueou;
- o bloque que colocou foi purgado, ou unha capa que elimina aínda ten obxectos.

## Desfacer desfai o seu propio traballo

{{key:Mod+Z}} e {{ui:Desfacer}} desfan o seu último comando, completo, e deixan intacto o traballo dos demais. Cando alguén cambiou a mesma cousa desde entón, non se desfai nada e a liña de comandos di quen o cambiou. {{key:Mod+Y}} refai.

## Bloqueos (o anfitrión)

O anfitrión pode protexer obxectos ou unha capa completa para que ninguén os cambie, o anfitrión incluído, ata que se desbloqueen:

1. Seleccione os obxectos, despois escriba `LIVELOCK` e prema {{key:Enter}}. Ou escriba `LIVELOCK` sen nada seleccionado e escolla `L` para bloquear unha capa polo nome: os obxectos engadidos a esa capa máis tarde tamén quedan bloqueados.
2. Os obxectos bloqueados debúxanse discontinuos, cunha etiqueta «Bloqueado polo anfitrión» na pantalla de todos.
3. `LIVEUNLOCK` desbloquea do mesmo xeito.

Os bloqueos pertencen á sesión: acaban cando ela remata e nunca se gardan no ficheiro.

## Unirse co mesmo ficheiro

Se abriu o mesmo ficheiro que abriu o anfitrión (desde unha carpeta compartida ou desde a mesma copia), únase desde a súa propia xanela de CadCraft en Studio: abra o panel {{ui:Live}} e use {{ui:Unirse aquí}} co código do anfitrión. Só viaxan os cambios feitos desde que o anfitrión abriu o ficheiro, así que un debuxo grande está listo de inmediato. Se o seu ficheiro é outro, o debuxo do anfitrión substitúe o seu na pantalla (o seu ficheiro queda como está). Isto só funciona mentres o seu debuxo non cambiou desde que o abriu.

## Asistentes nunha sesión en directo

Un asistente conectado á súa xanela de CadCraft (vexa a axuda sobre traballar con asistentes de IA) únese á sesión como participante propio, mostrado a todos como «Asistente (vía <o seu nome>)». O anfitrión déixao entrar, como faría con unha persoa; o asistente do propio anfitrión únese de inmediato. Os seus cambios teñen un desfacer propio: o seu {{key:Mod+Z}} desfai o seu traballo, e o desfacer do asistente desfai só os seus. Sae da sesión cando vostede o desconecta ou sae, e só pode traballar na sesión mentres vostede pode editar.

## Unirse desde un navegador

Un compañeiro sen Studio pode escanear a imaxe baixo o código do anfitrión cun teléfono, tablet ou ordenador na mesma rede. CadCraft ábrese no navegador, pídelle o seu nome na liña de comandos, e énchese co debuxo do anfitrión cando este o deixa entrar. Unha ligazón de convite permite a alguén unirse desde outra rede: o anfitrión precisa un posto do Team Cloud Plan para a aplicación, e os demais únense gratis; a ligazón só funciona mentres a sesión do anfitrión está aberta.

## Moitas persoas nun debuxo

Cada edición vai a todas as persoas da sesión, así que canto máis xente hai, máis tarda cada cambio en chegar a cada unha, e os portátiles e as conexións máis lentos quedan atrás primeiro. O tamaño habitual dunha sesión é de 20 persoas; o anfitrión pode permitir máis nunha sesión concreta (vexa a axuda sobre traballar xuntos en directo). Se o debuxo vai lento con moita xente, axudan menos persoas, menos delas editando ao mesmo tempo, ou unha mellor conexión.

## Cando remata a sesión

Só o anfitrión garda o debuxo. Cando o anfitrión remata a sesión, todos os demais conservan unha copia sen gardar: gárdea se quere conservala.

:::note
Algo retirado debúxase por riba dos obxectos ao seu redor na súa propia pantalla ata que reabra o debuxo. As tramas e os obxectos cheos que se solapan poden verse diferentes da copia do anfitrión; o debuxo é o mesmo.
:::
