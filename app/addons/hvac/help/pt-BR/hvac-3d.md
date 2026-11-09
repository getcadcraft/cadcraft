---
title: Climatização: dutos na guia 3D
summary: Cada trecho de duto também é um sólido na guia 3D do CadCraft, construído a partir do mesmo trecho e mantido atualizado conforme você desenha.
keywords: 3d, sólido, modelo, dutos, elevação, parte inferior do duto, tag, glb, coordenação
from: e5774345
---

## O mesmo trecho em 3D

Cada trecho de duto é construído como um único sólido fechado na guia {{ui:3D}}, na sua elevação (a parte inferior do duto), com suas curvas, transições e ramificações. Ele é redesenhado na mesma etapa sempre que o trecho muda, então desfazer retira o 2D e o 3D juntos.

Os sólidos recebem a tag `HVAC ductwork`: oculte ou mostre todos pelas tags da guia 3D. Cada sistema tem sua própria cor.

## Construindo novamente

{{cmd:DUCT3D}} constrói novamente o sólido de cada trecho e remove os sólidos cujo trecho não existe mais. Use depois de abrir um desenho editado sem o complemento HVAC (seus trechos foram movidos, mas os sólidos não), ou depois de reativar os sólidos.

Desative os sólidos em {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Climatização}} › {{ui:Sólidos na guia 3D}} para desenhos muito grandes; os sólidos já existentes permanecem até você apagá-los na guia 3D.

## Sem o complemento

Um sólido é um grupo 3D comum. Ele é salvo com o desenho (DWG e DXF), aparece na guia 3D e é exportado para GLB, OBJ e STL junto com o restante, com ou sem HVAC ativado.
