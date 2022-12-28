# eslint 공통 모듈

### 사용방법

- 적용하고 싶은 모듈의 루트에 .eslintrc 파일을 만들고, 다음과 같이 구성한다
    ```json
    {
        "extends": ["@wooritech/eslint-config-wooritech"],
    }
    ```
- lint에서 제외하고 싶은 폴더가 있다면 아래와 같이 구성한다
    ```json
    {
        ...
        "ignorePatterns": ["dist"]
    }
    ```
