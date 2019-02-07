# 1. what is React?

## 1.1 리액트를 배워야 하는 이유

리액트는 페이스북이 만든 라이브러리로 2013년 공개되었습니다. 리액트는 SPA 프레임워크가 아닌, 뷰 라이브러리(View Library)입니다. 여기서 뷰(View)란 [MVC 패턴](https://en.wikipedia.org/wiki/Model–view–controller)(Model–View–Controller Pattern)의 'V'를 말합니다. 뷰는 브라우저 내 특정 컴포넌트를 보여주는 역할을 하기 때문에, 리액트로 단일 페이지 애플리케이션을 개발할 수 있는 것입니다.

## 1.2 리액트 설치

리액트는 CDN 또는 npm 명령어로 설치할수있다.

## 1.2.1 CDN

CDN는 [Content Delivery Network(콘텐츠 전송 네트워크)](https://en.wikipedia.org/wiki/Content_delivery_network)의 약자로 콘텐츠를 효율적으로 전달하기 위해 여러 노드를 가진 네트워크에 데이터를 저장하여 제공하는 시스템입니다. 많은 회사들이 CDN를 사용해 라이브러리를 공개하고 있습니다. CDN 파일은 리액트와 같은 라이브러리입니다. 리액트 역시 라이브러리인데, 번들링 된 파일은 _react.js_ 자바스크립트 파일 하나뿐이기 때문입니다. CDN을 별도로 호스팅 하거나 응용 프로그램 내에 설치하여 사용 가능합니다.

CDN을 사용하려면 HTML 파일 내 `<script>` 인라인 태그로 CDN url을 작성하면 됩니다. *react*와 _react-dom_ 두 라이브러리 url을 추가합니다.

{title="Code Playground",lang="javascript"}

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

### 1.2.2 npm

가장 일반적인 방법인 `npm` 명령어로 리액트를 설치하겠습니다. 애플리케이션 내 _package.json_ 파일이 있다면, npm 명령어로 *react*와 *react-dom*을 설치할 수 있습니다. 제일 먼저 _npm init -y_ 명령어를 입력해 *package.json*을 초기화합니다. 그 다음 npm 명령어 한 줄로 여러 노드 패키지를 한 번에 설치합니다.

{title="Command Line",lang="text"}

```
npm init -y
npm install react react-dom
```

이와 같은 방법은 현재 개발 중인 애플리케이션에 리액트를 추가할 때 사용됩니다.

리액트 설치를 했다고 해서 모든 준비가 끝난 것이 아닙니다. JSX(리액트 문법)과 자바스크립트 ES6로 만든 애플리케이션은 [바벨(babel)](http://babeljs.io/)을 사용합니다. 모든 브라우저가 ES6 문법을 해석할 수 없기 때문에, 바벨을 통해 자바스크립트 ES6와 JSX를 ES5로 변환해야 합니다. 바벨 설치를 위해 많은 환경 설정과 도구가 필요하기 때문에, 입문 수준에서 바벨 사용은 적합하지 않습니다.

이러한 이유로 페이스북은 누구나 손쉽게 환경 설정 작업을 할 수 있는 제로 구성 설치(zero-configuration) 솔루션인 _create-react-app_ 패키지를 만들었습니다. 우리는 이 패키지로 리액트 애플리케이션을 만들어 볼 것입니다.

_create-react-app_ 사용법

```
npm create-react-app my-app
cd my-app
npm start
```

### 읽어보기

- [[리액트 공식 문서] 리액트 설치](https://reactjs.org/docs/try-react.html)

## 1.3 React를 Vue.js보다 선호하는 이유?

### 더 빠르고 담대한 개선

> 마지막 항목은 두 라이브러리의 현재를 비교한 앞선 두 항목과 달리 이 항목은 미래에 대한 이야기인데, 어느 정도 믿음의 영역이라 사람에 따라 의견 차이가 클 수 있겠다. 나는 React가 Vue.js에 비해 앞으로 더 빠르고 담대한 개선을 이루어낼 것이라 기대한다.
> 최근 그다지 길지 않은 시간 동안 React에는 Fiber를 비롯해 Fragment, Portal 등 굵직한 변화 내지는 기능 추가가 있었다. 또한 새로운 Context API, 라이플사이클 메소드, time slicing과 suspense 등 다양한 변경사항이 예고되어 있다. 모든 변경사항이 좋은 변경사항이라고 할 순 없겠으나, 그와 별개로 React 팀이 빠르게 움직이고 있다는 사실 자체는 이견의 여지가 없다.
> 반면 Vue.js의 릴리즈는 상대적으로 느리게 이루어지고, 주로 마이너한 변경사항 위주인 경우가 많다. 이런 속도의 차이는 결국 현존하는 두 라이브러리 사이의 간극이 더 벌어지는 결과를 낳을 것이다. 빠르게 변화하고, 배우고, 그리고 발전해 결국은 앞서 나갈 React에 베팅하는게 맞다고 생각하는 이유다.

- React에는 Vue.js에 비해 매직이 덜하다. Vue.js는 사용자에게 쉽게 느껴지는 API를 제공하기 위해 라이브러리가 직접 헤비 리프팅을 하는 경우가 많다.
- React는 Vue.js에 비해 플레인 자바스크립트에 더 가깝다. 새로운 문법 내지는 컨벤션을 정의하는 대신 자바스크립트의 그것을 활용하는데 무리가 없다면 그리 한다.
- React는 Vue.js에 비해 사용자 및 사용처에 대해 더 적은 가정을 하고, 컴포넌트 기반의 선언적 UI 렌더링이라는 가장 핵심적인 기능과 관련된 부분만 코어에 포함한다.

- [[React를 Vue.js보다 선호하는 이유?]](https://ahnheejong.name/articles/why-i-prefer-react-over-vuejs/) 출처: ahn.heejong님
