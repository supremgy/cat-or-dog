# 🙋🏻‍♂️ Hire me!

이 프로젝트는 Next.js와 Sanity를 활용하여 만든 설문조사 프로젝트입니다.
<br/>
이 설문조사는 InfoGrab 직원들을 대상으로, 저에 대한 소개를 바탕으로 평가를 받기 위해 만들어졌습니다.
<br/>
설문조사는 다음과 같이 구성되어 있습니다

[🌟 Feature](#-feature)
   - [🏠 홈페이지](#-홈페이지)
   - [📝 설문조사 페이지](#-설문조사-페이지)
   - [📈 결과 페이지](#-결과-페이지)
   - [📊 대시보드 페이지](#-대시보드-페이지)
     
[🧩 ERD](#-ERD)

[🛠️ Tech Skills](#️-tech-skills)

[🏃🏻‍♂️ Run Locally](#️-run-locally)

   </br>

# 🌟 Feature

   </br>

## 🏠 홈페이지

- 사용자는 본인의 `team`을 선택하고 `nickname`을 입력하여 설문조사를 시작할 수 있습니다.
- `Admin team`을 선택할 경우 `nickname`과 `password`를 입력하면 `/dashboard` 페이지로 이동할 수 있습니다.

  <br/>

## 📝 설문조사 페이지

- 설문조사는 총 4문제로 구성되어 있습니다.
  - 1~5점으로 환산할 수 있는 5지선다형 문제 2개
  - 다중 선택 5지선다형 문제 1개
  - 1~10 점수를 입력하는 주관식 문제 1개
- 첫 페이지에서 <b>이전버튼</b>을 클릭하면 입력할 정보가 사라질 수 있다는 메세지를 담은 `Modal`을 확인할 수 있습니다.
- 답을 선택하지 않거나, 입력하지않고 다음 스텝으로 넘어가려고 할 경우 `Toast`로 알림을 확인할 수 있습니다.
- `zustand store`를 활용하여 `currentStep`과 선택한 답의 정보가 저장되어 있기때문에 새로고침하여도 `currentStep`을 유지하며 입력한 정보이 소실되지 않도록 개발되었습니다.

  <br/>

## 📈 결과 페이지

- 설문조사에서 입력한 총 점수에 따라 사용자가 지원자를 어떻게 평가했는지 확인할 수 있습니다.
- 사용자가 속한 팀원들이 지원자를 어떻게 평가했는지 `차트`로 확인할 수 있습니다.

  <br/>

## 📊 대시보드 페이지

- `next-auth`를 활용하여 `admin`로그인 시 `session`을 만들고 session 정보가 없을때 홈으로 `redirect`가 됩니다.
- 대시보드는 InfoGrab 전 팀원 차트에 대한 Tab과 각 팀별 Tab으로 구성되어 있습니다.
  ### <b>InfoGrab Tab</b>
  - 각 팀별로 의견 분포도에 따른 인원수 총합 차트
  - 각 팀별로 팀원 평균점수 차트
  - 각 팀별로 팀원 표준편차 차트
  ### <b>각 팀별 탭</b>
  - 팀원별 총 점수 차트

</br>

# 🧩 ERD

![스크린샷 2024-07-16 오후 3 02 51](https://github.com/user-attachments/assets/711b0bc2-5617-4815-8e35-bf03e57bbbe6)

</br>

# 🛠️ Tech Skills

<img src="https://img.shields.io/badge/TypeScript-282C34?logo=typescript&logoColor=23007ACC" alt="Typescript logo" title="Typescript" height="25" />&nbsp;
<img src="https://img.shields.io/badge/React-282C34?logo=react&logoColor=23007ACC" alt="React logo" title="React" height="25" />
&nbsp;
<img src="https://img.shields.io/badge/Next-282C34?logo=next.js&logoColor=23007ACC" alt="Next logo" title="Next" height="25" />
&nbsp;
<img src="https://img.shields.io/badge/Tailwindcss-282C34?logo=tailwindcss&logoColor=23007ACC" alt="Tailwindcss logo" title="Tailwindcss" height="25" />
&nbsp;
<img src="https://img.shields.io/badge/Zustand-282C34.svg?logo=" alt="Zustand logo" title="Zustand" height="25" />
&nbsp;
<img src="https://img.shields.io/badge/ChartJS-282C34?logo=chartJS&logoColor=23007ACC" alt="ChartJS logo" title="ChartJS" height="25" />
&nbsp;
<img src="https://img.shields.io/badge/Sanity-282C34?logo=sanity&logoColor=23007ACC" alt="Sanity logo" title="Sanity" height="25" />
&nbsp;
<img src="https://img.shields.io/badge/Vercel-282C34?logo=vercel&logoColor=23007ACC" alt="Vercel logo" title="Vercel" height="25" />
&nbsp;
<img src="https://img.shields.io/badge/Github-282C34?logo=github&logoColor=23007ACC" alt="Github logo" title="Github" height="25" />
&nbsp;

<br>

# 🏃🏻‍♂️ Run Locally

프로젝트 클론

```bash
  git clone https://github.com/supremgy/hire-me.git
```

프로젝트 디렉토리로 이동

```bash
  cd hire-me
```

의존성 설치

```bash
  yarn install
```

Sanity Studio 설정

```bash
  cd sanity-studio
  npx sanity install
  npx sanity login
```

Sanity Studio 실행

```bash
  yarn dev
```

개발 서버 실행

```bash
  cd ..
  yarn dev
```

이제 브라우저에서 `http://localhost:3000`을 열어 프로젝트를 확인할 수 있습니다.<br>
Sanity 스튜디오는 `http://localhost:3333`에서 확인할 수 있습니다.
