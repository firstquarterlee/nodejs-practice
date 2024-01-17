const express = require('express') //익스프레스 라이브러리 사용하겠다는 뜻, 이제 익스프레스 문법으로 서버개발 쉽게 가능
const app = express()

app.listen(8080, () => {
    console.log("http://localhost:8080 에서 서버 실행중")
}) //서버 띄우는 코드임

app.get('/', (요청, 응답) => {
    응답.send('반갑다')
}) //간단한 서버기능임