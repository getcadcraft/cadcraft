---
title: Documentos e revisións (o arquivo)
summary: Un percorrido paso a paso por un traballo real: poñer unha carpeta de proxecto baixo control, retirar un debuxo, cambialo, devolvelo cunha nota, envialo a revisión, aprobalo e liberalo, ver o historial e o que o usa, o que ve unha segunda persoa mentres está bloqueado e como funciona con carpetas na nube.
keywords: arquivo, documentos, percorrido, tutorial, rexistrar en saída, rexistrar en entrada, revisión, liberar, aprobar, bloqueo, historial, onde se usa, carpeta na nube, carpeta de proxecto, xestión de documentos, pdm, dúas persoas, carpeta compartida
from: 3829528d
---

## O que vai facer

Vostede é Ana, traballando no Riverside Clinic cun compañeiro, Ben. Os debuxos do proxecto viven nunha carpeta á que ambos chegan (unha unidade compartida, unha carpeta sincronizada ou unha carpeta na nube). Ao final, un ficheiro pasou da súa primeira copia a unha revisión liberada **A**, cambiou de novo como **B.1**, verá quen fixo que, e verá o que ve Ben cando vostede o ten retirado.

Todo se garda nunha carpeta oculta `.ccvault` xunto aos seus ficheiros: sen servidor, sen subir nada (unha carpeta na nube é a excepción, vexa o último paso). Para ver todos os botóns e regras nun só lugar, consulte o tema *Documentos: rexistrar en saída, revisións e liberación* onde a súa aplicación o teña.

## 1. Preparar a carpeta do proxecto

1. Escolla {{ui:Documentos…}} no menú {{ui:Máis}} da pestana **Vista**, ou escriba `DOCUMENTS` (ou `DOCS`) e prema {{key:Enter}}.
2. Escolla {{ui:Escolla a carpeta do proxecto}} e seleccione a carpeta que contén os debuxos do proxecto. (As carpetas de proxecto funcionan en Studio e en navegadores que poden abrir unha carpeta, como Chrome e Edge. Noutros navegadores o panel indícao.)
3. Escolla {{ui:Cambiar}} xunto a **Vostede:** e escriba o seu nome, `Ana` (se o pide, tamén o nome deste ordenador). O panel di agora *Vostede: Ana en* e o seu ordenador. O seu nome vai en todo o que faga.
4. Escolla {{ui:Crear un arquivo nesta carpeta}} e escriba o nome do proxecto, `Riverside clinic`. O panel di *Arquivo iniciado para Riverside clinic.*

## 2. Poñer un ficheiro baixo control

1. Abra **Ficheiros non incluídos no arquivo** e escolla {{ui:Engadir}} xunto a `plans/A-101.dxf`.
2. Aparece en **Ficheiros no arquivo** na revisión **A.1**, estado **Traballo en curso**. A.1 é a súa primeira copia: o arquivo garda unha copia de cada revisión.

## 3. Retirar, cambiar e rexistrar en entrada

1. Escolla {{ui:Abrir}} xunto a `plans/A-101.dxf`. O debuxo ábrese en CadCraft e o panel péchase para que o vexa. O panel segue a un comando de distancia: `DOCUMENTS`.
2. Abra o panel de novo e escolla {{ui:Rexistrar en saída}}. A fila di agora **Retirado por vostede**. Xurdiu un ficheiro de bloqueo en `.ccvault/locks`; ninguén máis pode retirar este ficheiro ata que vostede o rexistre en entrada.
3. Debuxe algo: engada unha liña, mova un muro. Nada do que faga se pode gardar sobre o ficheiro do arquivo salvo que o debuxo estea retirado por vostede; Gardar como sempre funciona para unha copia propia.
4. Abra o panel, escolla {{ui:Rexistrar en entrada}} e escriba o que cambiou (`Movín a porta`). O panel di *rexistrado como A.2*. O ficheiro na carpeta do proxecto é agora o debuxo que tiña aberto, e o bloqueo desapareceu. Rexistrar en entrada sen cambios mantén a revisión.

Se cambia de idea, {{ui:Desfacer rexistro en saída}} devolve o ficheiro sen unha revisión nova.

## 4. Revisión e liberación

1. Escolla {{ui:Enviar para revisión}}. O estado pasa a **En revisión** e o ficheiro queda só de lectura.
2. Antes de aprobar, escolla {{ui:Configuración do proxecto}} e enumere quen pode aprobar (un nome por liña), por exemplo `Ben` e `Carla`, e marque a regra de que a persoa aprobadora sexa distinta do autor. Escolla {{ui:Gardar configuración}}. Agora o propio arquivo rexeita a calquera outra persoa.
3. Ben (ou Carla) escolle {{ui:Aprobar}} e escribe o nome da persoa aprobadora. O estado pasa a **Liberado** e a revisión pasa a ser **A**, con *aprobado por* e o nome. Un ficheiro liberado é só de lectura. {{ui:Devolver}} o volvería a Traballo en curso, con un motivo.

O nome da persoa aprobadora é o que se escribe no panel; é un rexistro de quen asinou, non unha proba de identidade.

## 5. Unha nova revisión

1. No ficheiro liberado, escolla {{ui:Nova revisión}}. Reserva a seguinte letra.
2. Cámbieo e logo escolla {{ui:Rexistrar en entrada}}. A revisión é **B.1**, traballo en curso. Libérea do mesmo xeito e pasará a **B**. {{ui:Desfacer rexistro en saída}} antes do primeiro rexistro en entrada deixao en **A**.

As letras de revisión seguen A, B … Z, AA, AB. Se o seu estándar omite algunhas letras, o axuste do proxecto *Usar a secuencia ASME Y14.35* salta I, O, Q, S, X e Z nas seguintes revisións.

## 6. Ver o que pasou

Escolla o nome do ficheiro para abrir os seus detalles:

- **{{ui:Historial}}**: cada evento, o máis recente primeiro, con quen, en que ordenador e cando: *Rexistrado en entrada A.2* por Ana, *Liberado* por Ben, e así.
- **{{ui:Revisións}}**: a táboa de revisións. {{ui:Abrir copia}} abre unha revisión como copia simple que non pode sobrescribir o ficheiro do arquivo; {{ui:Comparar con}} lista o que se engadiu, eliminou e cambiou fronte á revisión anterior, ou fronte a calquera outra.
- **{{ui:Usa}}**: os debuxos que enlaza (xrefs).
- **{{ui:Usado por}}**: lista todos os outros debuxos do arquivo que enlazan a este: se cambia un plano base, sabe que follas revisar.

## Revisión na folla

Con o debuxo aberto (e unha disposición nel), escolla {{ui:Cadro de revisións}}: debúxase unha táboa das revisións liberadas na parte superior dereita da folla. Escolla {{ui:Encher os cadros de título}} para encher os atributos do cadro de título marcados `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` ou `APPROVED_BY` coa revisión, o estado, a data e a persoa aprobadora do ficheiro. Cando aprobe a seguinte liberación, o cadro de revisións actualízase.

## 7. O que ve Ben mentres vostede ten o ficheiro

Agora retire de novo o ficheiro, e pídalle a Ben que abra a mesma carpeta do proxecto no seu ordenador e abra o panel. Na fila do ficheiro ve **Retirado por Ana en** o ordenador dela **desde** a hora, e non hai botón {{ui:Rexistrar en saída}}. Se tenta igual, o arquivo non o deixa: o bloqueo é un ficheiro que o sistema non deixa crear dúas veces, de xeito que dúas persoas non poden ter o ficheiro, nin no mesmo instante, cando a carpeta está en disco en Studio. (Nun navegador a carpeta só permite un esforzo, e o panel indícao en **Carpeta**.)

Se Ana está fóra e Ben precisa o ficheiro, {{ui:Romper retirada}} libérao. Ben debe escribir un motivo; vai ao rexistro xunto con de quen era a retirada. Cando o proxecto indica administradores, só eles poden. Unha retirada máis antiga que o límite de caducidade (14 días por defecto) márcase como *moito tempo*. Despois de romper a retirada, o rexistro en entrada tardío de Ana recházase, para que vostedes dous non se sobrescriban.

## 8. Carpetas na nube

Unha carpeta na nube é unha carpeta de proxecto gardada no almacenamento na nube do seu equipo, así que o equipo non necesita unha unidade compartida. En Studio, con sesión iniciada na súa conta de CadCraft, o panel amosa {{ui:Abrir unha carpeta na nube}} xunto a {{ui:Escolla a carpeta do proxecto}}. Escóllaa e escolla a carpeta, listada como espazo de traballo / carpeta. Un propietario do espazo de traballo crea primeiro a carpeta, e o almacenamento na nube do equipo debe estar en vigor. Todo o anterior funciona igual; o servidor crea o bloqueo, que é estrito entre persoas. Se non ten sesión iniciada, o panel pídello. Nunha pestana de navegador normal non se ofrece o botón da nube; use Studio.

## Probao

Faga os oito pasos anteriores cunha copia dun ficheiro real. Para os pasos de dúas persoas precisa outra persoa, ou dúas ventás con dous nomes. Se o fai cunha carpeta compartida real, a páxina de probas da comunidade ten unha comprobación que pregunta exactamente isto e recolle resultados.
