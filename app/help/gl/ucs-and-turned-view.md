---
title: Xirar a vista e usar as súas propias coordenadas (UCS)
summary: Xire a vista 90° ou a calquera ángulo sen mover nada do debuxo, e defina un sistema de coordenadas de usuario (UCS) para que os puntos, o orto, o seguimento polar, a cuadrícula e o texto novo sigan os eixes propios dun edificio.
keywords: ucs, sistema de coordenadas de usuario, planta, xirar vista, xirar, torsión da vista, ucs z, ucs 3point, ucs obxecto, ucs mundo, ucs con nome, ucsfollow, turnleft, turnright, turnworld, edificio en ángulo, cuadrícula xirada
from: 6f152c65
---

## Que vai aprender

Como ver un debuxo xirado, para que un edificio debuxado en ángulo se lea a dereitas na pantalla, e como escribir puntos ao longo dos seus propios eixes. Nada do debuxo se move mentres fai isto: os obxectos conservan as súas coordenadas, un xiro non é unha edición, e o debuxo non se marca como modificado.

## Xirar a vista un cuarto

1. Prema {{ui:Vista}} › {{ui:Máis}} › {{ui:Xirar a vista 90° á esquerda}} ou {{ui:Xirar a vista 90° á dereita}}.

O debuxo xírase na pantalla arredor do centro da área de debuxo. Volva a facelo para seguir xirando.

2. Prema {{ui:Vista}} › {{ui:Máis}} › {{ui:Volver ao mundo}} para nivelalo de novo.

Os comandos detrás deles son {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} e {{cmd:TURNWORLD}}. Para asignarlle unha tecla, engada unha liña como `TL=TURNLEFT` aos seus alias con {{cmd:ALIASEDIT}}.

## Aliñarse cun edificio en ángulo

1. Escriba `UCS` e prema {{key:Enter}}, despois `OB` e {{key:Enter}}.
2. Prema unha liña de muro preto do extremo que debe ser a orixe.

O UCS comeza agora nese extremo co seu eixo X ao longo do muro, e a vista xírase para que o muro quede nivelado na pantalla. O icono de eixes na esquina inferior esquerda indica cara a onde apuntan os eixes do UCS.

3. Debuxe como de costume. Con o UCS definido:
   - `x,y` e `@dx,dy` miden ao longo dos eixes do UCS; `d<a` mide o ángulo desde o eixe X do UCS.
   - {{ui:Orto}}, o seguimento polar e a cuadrícula seguen os eixes do UCS, e tamén o cursor en cruz.
   - O texto novo e os parágrafos novos van ao longo do eixe X do UCS; o horizontal e o vertical de {{cmd:DIMLINEAR}} tamén o seguen.
   - As coordenadas da barra de estado e as de {{cmd:ID}} son coordenadas do UCS.
4. Para escribir un punto do mundo cun UCS definido, anteponga `*`: `*0,0` ou `@*100,0`.
5. Escriba `UCS`, {{key:Enter}}, e despois {{key:Enter}} de novo para volver ao mundo.

## Outras formas de definir un UCS

Na indicación de {{cmd:UCS}}:

| Escribe | Que fai |
|---|---|
| un punto | Unha nova orixe; despois prema un punto no novo eixe X, ou prema {{key:Enter}} para manter o ángulo |
| `Z` | Xira o UCS arredor da súa orixe polo ángulo que escriba (en graos, en sentido antihorario) ou que escolla |
| `3` (3 puntos) | Unha orixe, un punto ao longo do eixe X positivo e un punto no lado positivo de Y |
| `OB` (obxecto) | Desde unha liña, arco, círculo, segmento de polilínea, texto, referencia de bloque, punto ou liña de construción |
| `P` (anterior) | O UCS anterior a este (os últimos dez gárdanse mentres o debuxo está aberto) |
| `W` (mundo) | De volta ao mundo |
| `NA` (con nome) | `S` garda o UCS actual cun nome, `R` restaura un, `D` borra un, `?` lista os que hai |

Cada cambio xira a vista para que o novo eixe X do UCS quede nivelado. {{cmd:PLAN}} xira a vista sen cambiar o UCS: {{key:Enter}} para o UCS actual, `U` para un gardado, `W` para o mundo.

## Para ter en conta

- Cada panel dunha pantalla dividida mantén o seu propio xiro. O UCS pertence ao debuxo.
- As follas traballan en coordenadas de papel; defina un UCS na lapela {{ui:Modelo}}, ou dentro dunha ventá gráfica.
- As xanelas de selección arrastradas nunha vista xirada seleccionan o que queda dentro delas na pantalla.
- As rutinas LISP reciben puntos no UCS desde `getpoint`, poden ler `UCSORG`, `UCSXDIR`, `UCSYDIR` e `VIEWTWIST`, e `trans` converte entre o mundo, o UCS e a pantalla.

:::note
Un ficheiro gardado conserva o UCS e o xiro da vista nunha versión posterior; ata entón duran mentres o debuxo está aberto.
:::
