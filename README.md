# 네스트 기본 프로젝트에 가장 단순하게 4 layer architecture 적용

### 구조 설명

- domain(buisness model 등) -> lib(buisness와 기본 타입 사이 어딘가) -> util(js 기본 타입용 유틸리티) 은 순수 함수, infra는 비순수함수(외부api나 특수한 경우의 랜덤 생성 함수 등), server는 interface라고 보면 된다.

- interface, infra를 통해서 nodejs를 제외한 최대한의 의존성이 제거되었다는 장점이 있다.

- 테스트도 편하다

### 유의사항

- nest-cli.json에 entryFile 추가 (서버 파일 변경)

- (optional) .vscode/settings.json 에 icon theme 변경

- test에 관한 랜덤생성함수는 fakerjs를 사용했으나 실제로는 직접 만드는게 좋다(요구사항이 다 다르므로)

- test는 실제 코드에 관한 의존성이 0이어야 하는것이 원칙이나 난 잘 지키는 편은 아니다 -> 이부분은 좀 이론적이라고 생각한다(물론 이런거 따지면 밑도 끝도 없지만)

- jest보다 vitest가 속도가 훨씬 빨라서 추천. 호환된다. 다만 swc를 사용하기 때문에, swc를 사용하지 않는 경우 (typia가 이경우) 사용 불가.

- 그리고 둘 다 extension이 잘되있으니 extension 쓰기 추천

- 원래 server테스트도 하지만 설정이 귀찮아서 안함
