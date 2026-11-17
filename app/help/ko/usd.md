---
title: 3D 모델을 USD로 내보내기
summary: 3D 탭의 솔리드를 렌더링 프로그램 및 다른 3D 소프트웨어용 USD로 씁니다.
keywords: usd, usda, usdc, usdz, openusd, 내보내기, 3d, 솔리드, usdout, export3d
from: 68748934
---

3D 탭의 솔리드를 USD로 쓸 수 있습니다.

- {{cmd:USDOUT}}을 입력하고 `.usda`(텍스트), `.usdc`(이진) 또는 `.usdz`(단일 패키지 파일) 중에서 고르거나,
- {{cmd:EXPORT3D}}를 입력하고 {{ui:USD}}를 선택하여 `.usdz` 패키지를 만드십시오.

각 솔리드는 하나의 객체가 되며, 면은 메시로, 색상은 재질로 저장됩니다. 단위는 미터이고 Z가 위쪽입니다. 여러 번 사용된 솔리드는 한 번만 쓰이고, 각 복사본이 있는 위치에 배치됩니다.
