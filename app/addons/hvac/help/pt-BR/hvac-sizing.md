---
title: Climatização: dimensionamento de dutos
summary: Dimensionamento de dutos por atrito constante a partir da vazão, as fórmulas usadas pelo complemento e de onde vêm, e a calculadora de dutos.
keywords: dimensionamento, atrito constante, taxa de atrito, vazão, cfm, velocidade, colebrook, darcy, diâmetro equivalente, huebscher, oval achatado, ashrae, calculadora
from: c739aec8
---

## Atrito constante

Cada seção é dimensionada pela mesma perda de pressão por comprimento — a taxa de atrito. Defina a taxa em {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Climatização}}: 0.1 in. w.g. por 100 ft ou 0.8 Pa/m para começar (uma taxa inicial comum, não uma regra). Dê a uma seção a sua vazão ({{cmd:DUCT}} › {{ui:Vazão}}, ou {{cmd:DUCTSIZE}}) e o complemento:

1. encontra o diâmetro redondo que perde exatamente essa taxa nessa vazão;
2. arredonda **para cima** até um tamanho comercial, para que o duto não perca mais do que a taxa: dutos redondos em passos de 1 in até 10 in, depois em passos de 2 in; métricos 63, 80, 100, 125, 160, 200, 250, 315, 355, 400 mm e assim por diante;
3. para um duto retangular ou oval achatado, mantém a altura que você definiu (12 in ou 300 mm, a menos que você altere) e o alarga em passos de 2 in ou 50 mm até que o seu diâmetro equivalente seja pelo menos o do redondo.

Em seguida, ele informa o tamanho, a velocidade e a taxa de atrito que a seção de fato tem. Um duto retangular com lados de mais de 4 para 1 é sinalizado.

## As fórmulas

O método e os valores são os publicados pelo capítulo de projeto de dutos do ASHRAE Handbook—Fundamentals (2021):

- Perda por atrito (Darcy–Weisbach): Δp/L = (f / D) × ρV²/2.
- O fator de atrito pela equação de Colebrook: 1/√f = −2 log₁₀(ε / 3.7D + 2.51 / (Re √f)), resolvida por iteração.
- Ar padrão: densidade 1.204 kg/m³ e viscosidade cinemática 1.51 × 10⁻⁵ m²/s (20 °C, nível do mar); Re = V × D / ν.
- Rugosidade: liso 0.03 mm (alumínio, PVC, aço inoxidável), médio-liso 0.09 mm (aço galvanizado), médio-rugoso 0.9 mm (painel de fibra de vidro), rugoso 3.0 mm (duto flexível, totalmente esticado). Escolha o material em {{ui:Configurações}} ou {{ui:Propriedades}}.
- Dutos retangulares: o equivalente circular para o mesmo atrito e a mesma vazão, Huebscher (1948): De = 1.30 (a × b)^0.625 / (a + b)^0.25.
- Dutos ovais achatados: Heyt e Diaz (1975): De = 1.55 A^0.625 / P^0.25, com A = πb²/4 + b(a − b) e P = πb + 2(a − b).

Exemplos resolvidos com os quais o complemento é testado: 1000 cfm em um duto redondo de 12 in se deslocam a 1273 fpm e perdem 0.189 in. w.g. por 100 ft; 24 × 12 in equivale a 18.3 in redondo; 1000 cfm a 0.1 in. w.g. por 100 ft precisam de exatamente 13.66 in, então 14 in redondo ou 14 × 12 in retangular.

## A calculadora de dutos

{{cmd:DUCTCALC}} pede uma vazão e uma taxa de atrito e lista o diâmetro redondo exato, depois os tamanhos comerciais redondos, retangulares e ovais achatados, com sua velocidade e atrito. Não altera nada no desenho.

## O que o dimensionamento não faz

Ele não soma as perdas nas conexões, não balanceia ramificações nem verifica o ventilador: dimensiona cada seção isoladamente pela taxa de atrito. Confira as velocidades com os limites de ruído do seu projeto.
