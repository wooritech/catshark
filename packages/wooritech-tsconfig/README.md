# tsconfig 공통 모듈

### 사용방법

- 적용하고 싶은 모듈의 루트에 `tsconfig.json`을 만든 후, 아래와 같이 작성한다
    ```json
    {
    "extends": "@wooritech/tsconfig/base.json",
    }
    ```
- `base.json`이 아닌 다른 구성을 사용해도 되며, 재정의하고 싶은 옵션이 있다면 아래와 같이 재정의하면 된다
    ```json
    {
    "extends": "@wooritech/tsconfig/base.json",
    "compilerOptions": {
        "outDir": "dist",
        "declaration": true,
        "declarationMap": true,
        "sourceMap": true,
        "noEmit": false
    },
    "include": ["src/**.ts"]
    }
    ```
