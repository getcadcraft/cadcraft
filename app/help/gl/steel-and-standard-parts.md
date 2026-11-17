---
title: Colocar perfís de aceiro e pezas normalizadas
summary: Debuxe perfís de aceiro, alzados e elementos 3D a partir das táboas de perfís publicadas, coloque parafusos, porcas, arandelas, pasadores, rodamentos, chavetas e engrenaxes segundo as súas normas, e engádaos a unha lista de pezas.
keywords: aceiro, perfil, sección, forma, forma W, ala ancha, perfil en I, canle, cantoneira, HSS, tubo, tubaxe, ipe, hea, heb, upn, viga, piar, elemento, alzado, aisc, en 10365, parafuso, porca, arandela, pasador, rodamento, chaveta, chavetero, engrenaxe, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, pezas normalizadas, lista de pezas, lista de materiais, bom, steelmember, partslist
from: 547c1048
---

A pestana {{ui:Estándar}} da biblioteca ten dous tipos de cousas, feitas aquí mesmo a partir de táboas publicadas (non se descarga nada):

- **Perfís de aceiro**: 1.335 tamaños. W, S, C, L, HSS e Pipe da AISC Shapes Database v16.0; IPE, HEA, HEB e UPN de EN 10365:2017. DetailCraft usa a mesma táboa.
- **Pezas normalizadas**: parafusos de cabeza hexagonal (ISO 4017), parafusos hexagonais (ISO 4014), porcas hexagonais (ISO 4032), arandelas planas (ISO 7089), parafusos e porcas hexagonais en polgadas (ASME B18.2.1 e B18.2.2), pasadores paralelos (ISO 2338), rodamentos rígidos de bólas (ISO 15), chavetas paralelas (DIN 6885-1) e engrenaxes rectas (módulos da ISO 54).

Todo isto se comparte baixo CC0: úseo para o que sexa, sen necesidade de citar.

## Colocar un perfil de aceiro

1. Abra a biblioteca ({{ui:Biblioteca}} no grupo Bloques, ou escriba `LIB`) e prema a pestana {{ui:Estándar}}.
2. Escolla a familia na primeira lista, por exemplo {{ui:Perfís W}}. Escriba no cadro de busca para reducir os tamaños: `W12` mostra todos os W12.
3. En {{ui:Colocar como}}, escolla:
   - {{ui:Sección}}: a sección transversal, co seu centro no punto de inserción.
   - {{ui:Elevación}}: o elemento visto de lado, coa lonxitude que indique {{ui:Lonxitude (mm)}}, desde o centro do seu extremo esquerdo.
   - {{ui:Elemento 3D}}: un sólido na pestana 3D (máis abaixo).
4. Prema {{ui:Colocar}} na tarxeta do tamaño, logo prema onde debe ir, como con calquera elemento da biblioteca.

Unha sección ou elevación convértese nun bloque. Os seus atributos levan o tamaño, a táboa de orixe, a lonxitude (no caso dunha elevación) e un material que pode completar.

:::note
As formas S, canles e UPN debúxanse con ás paralelas do espesor medio, e as cantoneiras con esquinas cadradas: as ás reais son inclinadas e as esquinas redondeadas. W, IPE, HEA e HEB teñen os seus filetes de raíz, e HSS os seus radios de esquina.
:::

## Crear un elemento 3D

Escolla {{ui:Elemento 3D}} e prema {{ui:Colocar}}, ou escriba {{cmd:STEELMEMBER}} (`SMEMBER`) na liña de comandos:

1. En `Tamaño da sección`, prema {{key:Enter}} para o tamaño mostrado, ou escriba un, por exemplo `HSS6x6x1/4` ou `IPE300`.
2. Prema o punto inicial e logo o final. O elemento vai entre eles, apoiado no chan.
3. Para un piar, escriba Piar (`C`), prema o seu punto de base e escriba a súa altura.

O elemento é un sólido pechado na pestana 3D. Móvao ou cópieo alí como calquera outro sólido. {{key:Mod+Z}} o retira de novo.

## Colocar unha peza normalizada

1. Na pestana {{ui:Estándar}}, escolla a familia, por exemplo {{ui:Parafusos de cabeza hexagonal}}.
2. Para un parafuso, un perno, un pasador ou unha chaveta, escriba a súa {{ui:Lonxitude (mm)}} (en polgadas para as familias en polgadas). Para unha engrenaxe, escriba os {{ui:Dentes}}, a {{ui:Largura da cara (mm)}} e o {{ui:Furado (mm)}}. Deixe unha caixa baleira para o valor habitual que se mostra nela.
3. Prema {{ui:Colocar}} no tamaño e prema onde debe ir.

Parafusos, pernos e pasadores debúxanse de lado, coa cara de apoio da cabeza no punto de inserción; porcas, arandelas, rodamentos e engrenaxes debúxanse de frente; as chavetas, vistas desde arriba. As roscas debúxanse do xeito habitual: a raíz como liña fina e o final da rosca como unha liña grosa. As engrenaxes debúxanse como o seu círculo de cabeza, o círculo primitivo e o círculo de raíz, non dente a dente.

O bloque de cada peza leva como atributos o seu tipo, norma, tamaño, lonxitude e material, e o seu peso a partir da forma nominal en aceiro. Cambie o material no panel {{ui:Propiedades}}.

As mesmas pezas están tamén na biblioteca como elementos, e PartCraft ábreas como pezas paramétricas ({{ui:Peza estándar}} no seu grupo Ficheiro).

## Crear unha lista de pezas

- Na biblioteca, prema {{ui:Lista de pezas}}: cada peza normalizada e perfil de aceiro do debuxo, agrupados por tipo, norma, tamaño, lonxitude e material, coa cantidade e os números de elemento. {{ui:Descargar CSV}} a garda para unha folla de cálculo.
- Para debuxala, escriba {{cmd:PARTSLIST}} (`PLIST`), prema a esquina superior esquerda da táboa e prema {{key:Enter}} para a altura de texto habitual, ou escriba unha.

A lista lese dos atributos dos bloques, así que segue sendo correcta despois de gardar o debuxo como DWG ou DXF e volver abrilo.

## Erros frecuentes

- **«Non hai ningún perfil de aceiro chamado …»**: escriba o tamaño como o lista a pestana {{ui:Estándar}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **O elemento está na pestana 3D, non no plano.** {{cmd:STEELMEMBER}} fai un sólido; abra a pestana 3D para velo. Para mostrar o aceiro no plano, coloque tamén unha {{ui:Sección}} ou unha {{ui:Elevación}}.
- **Unha lonxitude fóra de rango.** Un perno debe ser máis longo que a súa cabeza, e unha chaveta máis longa que ancha. A liña baixo as tarxetas indica que valor se rexeitou.
