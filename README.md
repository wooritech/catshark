# template-monorepo

- turbo repo 기반의 템플릿

### Mono Repo

```plaintext
root
├─ apps
│
├─ packages
    ├─ wooritech-eslint
    │
    ├─ wooritech-tsconfig
```
- 공통 모듈은 packages밑에 작성한다
- 그 외의 스탠드 얼론 모듈은 apps 밑에 작성한다

### eslint, tsconfig 공통모듈 사용하기

- `packages/wooritech-eslint`와 `packages/wooritech-tsconfig`안의 readme를 참고한다.

### turbo 빌드 & lint

- 최상위 경로에서 build 명령을 실행했을 때, 모듈이 빌드되길 원한다면, 해당 모듈은 build라는 스크립트가 있어야 한다.
    ```json
    "scripts": {
    "build": "tsc",
    }
    ```
- 마찬가지로, 최상위에서 lint 명령을 실행했을 때, 해당 모듈에서도 명령이 실행되길 바란다면, 아래와 같이 해당 모듈에 lint 스크립트가 존재해야 한다
    ```json
    "scripts": {
    ...
    "lint": "eslint . --fix"
    }
    ```

### turbo 빌드의 캐시 기능 사용하기

- 리포지토리 루트 밑에 있는 turbo.json에서 build를 찾은 뒤, output에 캐시되길 바라는 경로를 적어준다
    ```json
    예시
    "build": {
        "dependsOn": ["^build"],
        "outputs": ["dist/**"]
    }
    ```
