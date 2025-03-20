// POINT 非同期処理（Promise）
// プログラムが書いた順番に上から実行されないことを非同期処理という
let a = 0;

new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 2000);
}).then((b) => {
    console.log(b);
    return b;
}).then((b) => {
    console.log(b);
}).catch((c) => {
    console.log('catchが実行', c)
})

