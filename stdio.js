const readline = require("readline");
const rl = readline.createInterface({
    // 모듈을 이용해 입출력을 위한 인터페이스 객체 생성
    input: process.stdin,
    output: process.stdout,
});

let v = null;

console.log('READ LINE START')
// 생성한 rl 인터페이스 인스턴스 사용
rl.on("line", (line) => { 
    // 한 줄씩 입력받은 후 실행할 코드
    // 입력된 값은 line에 저장.

    if(line === 'q' || line ==='quit' || line === 'esc' || line === 'exit') {
        rl.close(); // close가 없으면 입력을 무한히 받는다.
    }

    if(v === null) {
        v = []
    }
    v.push(line)
});
rl.on('close', () => {
    // 입력이 끝난 후 실행할 코드
    if (v !== null) v.reduce((acc, curr, idx)=> console.log(curr), null)
    console.log('READ LINE END')
})
