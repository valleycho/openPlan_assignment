## 라이브러리 설치

- pnpm install

## 실행 방법

- pnpm --filter storybook storybook (스토리북 실행 (버튼의 대한 상태 스토리북 내용을 저장하였습니다))
- pnpm run dev (웹, 스토리북 vite 실행)

## 폴더 구조

```
📦openPlan_assignment
 ┣ 📂 apps
 ┃ ┣ 📂 storybook (스토리북 관련 내용)
 ┃ ┣ 📂 web (웹(nextjs) 내용)
 ┃ ┃ ┣ 📂 app
 ┃ ┃ ┃ ┣ 📂 apis (api)
 ┃ ┃ ┃ ┣ 📂 components (컴포넌트들)
 ┃ ┃ ┃ ┃ ┣ 📂 card (카드 형태 컴포넌트)
 ┃ ┃ ┃ ┃ ┣ 📂 header (상단 헤더)
 ┃ ┃ ┃ ┃ ┣ 📂 wrapper (레이아웃 레퍼 컴포넌트)
 ┃ ┃ ┃ ┣ 📂 hooks (tanstack query 호출)
 ┃ ┃ ┃ ┣ 📂 photo
 ┃ ┃ ┃ ┃ ┣ 📂 result
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 page.tsx (포토 불러오기 결과 페이지)
 ┃ ┃ ┃ ┃ ┣ 📜 page.tsx (포토 불러오기 페이지)
 ┃ ┃ ┃ ┣ 📂 store (zustand)
 ┃ ┃ ┃ ┗ 📂 types (타입들)
 ┃ ┃ ┃ ┣ 📜 not-found (404 페이지)
 ┣ 📂 packages
   ┣ 📂 ui
     ┗ 📂 src (패키지의 UI 버튼 컴포넌트)
```

## 과제 요약

처음의 소개하는 메인 페이지에서 다음 클릭시 post페이지로 넘어가고 post 페이지에서 tansatack query(api 조회)하고 로딩하는 동안 스켈레톤이 보여지며,
결과값을 받아오면 zustand의 결과값을 저장하고 phost/result 페이지의 결과값을 보여줍니다.
