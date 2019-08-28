

## 미션설명

- 이번미션은 HTML코드로 간단한 todo 웹서비스를 만드는 것이다. todo 웹서비스는 할일을 관리하는 웹서비스로 몇가지 상태를 가지고 있으며, 웹페이지 한개에서 동작되는 서비스이다.



## 기능요구사항



### 기획서

- https://docs.google.com/presentation/d/1xvs24VWVJc2KhmHUoj1Rm88zvtzItzQuD-6vBuzkvA0/edit?usp=sharing

- 로그인UI는 bootstrap, materialUI등등 CSS 지원을 받을 수 있는 라이브러리를 사용해서 개발한다.
- 아이디 중복체크는 서버개발을 할 때 완성한다.
- 아이디 중복체크를 제외한 모든 입력값의 유효성체크는 JavaScript를 통해 체크한다.
- 실제 입력 데이터 전송은 서버개발을 할때 완성한다. 하지만 form 태그를 활용해서 개발해둔다.



## 기술요구사항



### 일반공통

- 서버환경은 구현하지 않으며, 서버와 데이터 동기화는 하지 않는다.
- PC 기준 웹 화면을 개발한다. Mobile Web을 고려하지 않는다.
- 크롬브라우저를 기준으로 개발한다.
- 반응형웹을 고려하지 않는다.
- 라이브러리를 사용할 수 없다. (jQuery, React, Vue, lodash, bootstrap, materialUI등등)
  - 단, 로그인UI 개발에서는 CSS지원을 받을 수 있는 라이브러리를 필수로 사용해야 한다.

### HTML

- HTML5 Layout 태그를 사용한다(header, footer 등)
- 의미에 맞는 적절한 태그를 선택해서 사용한다.
- W3C Validator 를 통과하도록 한다.



### CSS

- 모든 엘리먼트의 크기는 임의로 크기를 정할 수 있으나, layout은 반듯하고, 불규칙적이거나, 삐뚤어지는 부분이 없어야 한다.
- 의미적으로 같은 엘리먼트들은 같은 넓이와 크기를 갖도록 한다.
- font 크기도 자유롭게 정해서 사용하되, 일관된 크기를 사용한다.
- padding 과 margin을 일관된 크기로 사용한다.
- CSS 클래스 이름 규칙을 스스로 정하고, 이를 지키며 개발한다.
- flexbox 속성을 이용하여 레이아웃을 구성한다.
- CSS variables 을 사용한다.



### JavaScript

- 전역변수를 최소화 한다.
- 함수는 **동사+명사**로 구성한다. 변수는 명사를 사용한다.
- 기능단위로 객체를 만들고, 객체는 literal방식을 사용한다.
- literal은 2개 이상 만든다.
- 객체내의 메서드의 크기는 최소한의 크기로 유지한다.
- framework나 라이브러리를 사용하지 않는다.
- ES2015 문법을 적극 사용한다.
- 표준 DOM API를 사용한다.
- addEventListener를 사용해서 개발한다.
- 정규표현식을 사용할 수 있다.



### 요구사항 분석

1. 서비스 객체

   - Renderer : Html을 렌더링 해주는 역할
     - render(html): html을 인자로 받아 
   - State: app의 여러가지 상태 및 데이터를 저장하고 변경하는 역할
     - setState(state): state를 저장
     - getState(key): key값에 해당하는 value를 제공
     - updateState(state): state를 변경
   - Event: element에 event별 handler를 부여하는 역할
     - addEventListner(element, event, callback) 
   - Validator: form 데이터의 validation을 검사하는 역할
   - AsyncHttpRequest: http request를 비동기로 수행하는 역할
   - Util : 유틸리티 로직 처리 메소드를 제공하는 역할

   

2. 엘리먼트 객체

   - Element: id, class별 DOM 을 제공하는 역할



### 기능 리스트

**회원가입 페이지**

- [x] 레이아웃 구성
- [x] 아이디 label/input 엘리먼트
- [x] 비밀번호 label/input 엘리먼트
- [x] 비밀번호 재확인 label/input 엘리먼트
- [x] 이름 label/input 엘리먼트
- [x] 생년월일 label/input(year)/select,option(month)/input(date) 엘리먼트
- [x] 성별 label/select/option 엘리먼트
- [x] 이메일 label/input(email) 엘리먼트
- [x] 휴대전화 label/input(tel) 엘리먼트
- [x] 관심사 label/input 엘리먼트
- [x] 약관에 동의합니다. label/input(checkbox)
- [x] 초기화 button 엘리먼트
- [x] 가입하기 button 엘리먼트



**로그인 페이지**

- [ ] 아아디 input 엘리먼트
- [ ] 비밀번호 input 엘리먼트
- [ ] 로그인 button 엘리먼트



### 공부한 내용

1. [flexbox로 만들 수 있는 10가지 레이아웃](https://d2.naver.com/helloworld/8540176#ch7)