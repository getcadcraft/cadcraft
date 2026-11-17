---
title: LISP 루틴 실행
summary: CadCraft의 LISP가 실행하는 것(함수, 프롬프트, 명령, 객체, 대화상자, vla 객체), 명령행에 LISP를 입력하는 방법, 아직 없는 기능을 설명합니다.
keywords: lisp, 루틴, lsp, dcl, 대화상자, 명령, defun, entget, ssget, vla, vlax, vl, getpoint, 오류, 호환성, 작동 범위
from: 571bc077
---

## 배울 내용

다른 CAD 프로그램용으로 작성된 LISP 루틴을 불러올 때 예상할 점입니다. 어떤 부분이 CadCraft에서 실행되고 어떤 부분이 아직 없는지 설명합니다.

CadCraft에는 고유한 LISP가 있습니다. 다른 프로그램의 코드를 보고 만든 것이 아니라 공개된 AutoLISP 참조를 바탕으로 작성되었으므로, AutoCAD용으로 작성된 대부분의 루틴은 수정 없이 실행됩니다. 빠진 부분이 있으면 명령행에 함수 이름이 표시되므로, CadCraft의 빠진 기능인지 루틴의 실수인지 구분할 수 있습니다.

## 명령행에 LISP 입력

`(`로 시작하는 식을 입력한 뒤 {{key:Enter}} 키를 누릅니다. `(+ 1 2)`는 `3`을 출력합니다. `!name`은 변수의 값을 출력합니다. 닫히지 않은 식은 다음 줄을 기다립니다.

프롬프트에서는 식이 그 프롬프트에 답합니다. "반지름 입력" 프롬프트에서 `(* 2 12.5)`를 입력하면 25가 됩니다.

## 실행되는 것

- **언어:** `defun`(지역 변수는 `/` 뒤에 씁니다), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, 그리고 `*error*`(지역 `*error*`도 작동합니다). 이름은 대소문자를 구분하지 않습니다. 정수와 실수는 예상하신 대로 다릅니다(`(/ 7 2)`는 3).
- **내장 함수:** 수학, 리스트(`car`, `cdr` 계열, `assoc`, `nth`, `member`, `subst`, `append`…), 문자열(`strcat`, `substr`, `strcase`, `wcmatch`…), 변환(`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), 기하(`polar`, `distance`, `angle`, `inters`), 파일(`open`, `read-line`, `write-line`, `close`, `findfile`).
- **명령:** `(defun c:NAME …)`은 명령을 만듭니다. `(command …)`와 `(command-s …)`는 CadCraft 고유 명령을 실행하며, 사용자 응답은 `pause`로 받습니다.
- **프롬프트:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `initget` 키워드를 쓰는 `getkword`, `entsel`, `nentsel`, `ssget`(`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, 필터 목록과 `-4` 테스트 포함).
- **리스트로 본 객체:** `entget`, `entmod`, `entmake`(블록 포함), `entdel`, `entlast`, `entnext`(블록 참조의 속성은 뒤에 ATTRIB으로 오고 이어서 SEQEND가 나오므로 속성 루틴도 작동합니다), `handent`, 선택 세트, `tblsearch`와 `tblnext`, `layoutlist`, `regapp`, CadCraft에 있는 설정용 `getvar`와 `setvar`.
- **대화상자:** `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog` 함수를 쓰는 `.dcl` 파일. 단추, 편집 상자, 목록 상자, 팝업 목록, 토글, 라디오 단추, 행, 열, 상자가 모두 표시됩니다. 대화상자를 임시 파일에 쓰는 루틴도 작동합니다.
- **객체:** `vl-load-com`(아무 일도 하지 않습니다. 불러올 것이 없습니다), `vl-` 리스트 및 문자열 함수, `vl-catch-all-apply`, `vla-get-…`/`vla-put-…` 속성, `vla-…` 메서드, 그리고 블록, 도면층, 배치 컬렉션, 모델 공간, 블록 정의에 대한 `vlax-for`(변형과 안전 배열 포함).

## 테스트한 루틴

CadCraft의 테스트는 이런 검사용으로 작성된 루틴 세트(선택 필터, 프롬프트, 명령, 객체, 오류 처리기)를 실행합니다. 사용자들이 이름으로 많이 요청한 루틴 하나, Lee Mac의 DelBlocks도 테스트했습니다. 대화상자를 통해 이름으로 실행하기도 하고, 블록을 골라서 실행하기도 했습니다. CadCraft에는 고유한 {{cmd:DELBLOCKS}}가 있으므로 그 작업에는 루틴이 필요하지 않습니다.

## 아직 만들지 않은 기능

- `grread`(마우스를 직접 추적하기), 리액터(`vlr-…`), 곡선 함수(`vlax-curve-…`), 사전과 확장 데이터(`dictsearch`, `entget`과 `entmake`의 xdata), 그리고 Express Tools의 `acet-…` 함수.
- 대화상자의 그림과 슬라이드는 빈 칸으로 표시됩니다.
- 다른 프로그램 실행, Windows 레지스트리, 불러온 것 밖의 파일. 루틴은 자기 임시 파일을 쓰고 읽을 수 있으며, 이 파일은 페이지를 닫을 때까지 남습니다.

루틴이 이 기능 중 하나에 닿으면 명령행에 "함수 정의가 없습니다"와 함께 그 이름이 표시되고, CadCraft에 아직 없다고 알립니다.

## 피해야 할 실수

- **CadCraft 명령과 같은 이름의 명령.** CadCraft의 고유 명령은 그대로 남습니다. 루틴의 명령은 명령행에서 `(c:NAME)`으로 실행하십시오.
- **신뢰하지 않는 LISP 실행.** 루틴은 도면 안의 무엇이든 바꿀 수 있지만, 도면 밖의 것은 바꿀 수 없습니다. 사용자의 파일, 다른 사이트, 다른 앱에는 접근할 수 없습니다.
