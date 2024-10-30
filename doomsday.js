const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const checkEnd = (inputWord, close) => {
    if (inputWord === 'q' || inputWord === 'quit' || inputWord === 'exit') {
        close()
    }
}

const date = {
    year: null,
    month: null,
    day: null
}
console.log('태어난 날의 요일을 맞춰볼게요.')
console.log('태어난 해를 입력해주세요. (예: 2024)')
rl.on("line", (line)=>{
    checkEnd(line, ()=>rl.close())
    if(typeof line === 'number') {
        date.year = line

        console.log('태어난 달을 입력해주세요. (예: 01)')
        rl.on("line", (line)=>{
            checkEnd(line, ()=>rl.close())
            if(typeof line === 'number') {
                date.month = line
                console.log('태어난 날을 입력해주세요. (예: 30)')
                rl.on("line", (line)=>{
                    checkEnd(line, ()=>rl.close())
                    if(typeof line === 'number') {
                        date.day = line

                        console.log(date)
                        rl.close()
                    }

                    if(typeof line !== 'number') {
                        console.log('숫자로 입력해주세요.')
                    }
                })
            }

            if(typeof line !== 'number') {
                console.log('숫자로 입력해주세요.')
            }
        })
    }

    if(typeof line !== 'number') {
        console.log('숫자로 입력해주세요.')
    }
})
