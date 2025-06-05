const express = require('express');
const app = express();

// JSON 파싱을 위한 미들웨어
app.use(express.json());

// PUT 요청 처리
app.put('/api/data', (req, res) => {
    // 요청 본문 로그 출력
    console.log('받은 데이터:', req.body);
    console.log("------------------------------");
    console.log(JSON.stringify(req.body));
    console.log("------------------------------");
    
    // 클라이언트에 응답
    res.json({
        message: '데이터를 성공적으로 받았습니다',
        receivedData: req.body
    });
});

// 서버 시작
const PORT = 3333;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다`);
});
