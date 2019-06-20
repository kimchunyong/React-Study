# React-firebase

## 요구분석사항

Baas의 한종류인

1. 페이지 구성 및 설계하기
    - [X] 어떤 서비스 목적 및 페이지 구성하기.
    - [X] 각 페이지에 맞는 상세 요구사항 설계.

2. firebase를 연결한다
    - [x] 로그인 구현
    - [x] 회원가입 구현

3. 라우터 구현
    - [x] 각 탭을 누르면 탭에 맞는 화면이 SPA형식으로 그려진다.

4. 페이지 구성
    4-1. 메인페이지
        - [X] 어플 메인 페이지
        - [X] 로그인페이지로 이동 버튼
    4-2. 로그인페이지
        - [x] 로그인하기
        - [x] 회원가입
    4-3. 파일등록
        - [X] 파일등록 하기
        - [ ] 유저 정보, 파일url,내용 DB에 등록하기
    4-4. 파일들 보여주기
        - [ ] 유저들이 등록한 파일들 페이지에 뿌려주기
        - [ ] 좋아요 버튼 갯수 저장
        - [ ] 음원 제목
        - [ ] 등록한 유저 정보

    4-5. 인기순위
        - [ ] 좋아요 받은 순위 Top10 음원만 뿌려주기

## .env

```
    REACT_APP_API_KEY="Your Firebase API KEY"
    REACT_APP_AUTH_DOMAIN="Your Firebase AUTH domain"
    REACT_APP_DATABASE_URL="Your Firebase Database URL"
    REACT_APP_PROJECT_ID="Your Firebase project ID"
    REACT_APP_STORAGE_BUCKET="Your Firebase storage bucket"
    REACT_APP_MESSAGING_SENDER_ID="Your Firebase messaging sender ID"
    REACT_APP_MESSAGING_APP_ID="Your Firebase project ID"
```