let fs= require('fs');
let pizda = fs.openSync('1.txt','r');

//console.log(fs.readSync(pizda,tmp,0,256,0));
function chit(){
    let row = 0;
   // let tmp = Buffer.alloc(256);
    let res = '';
    let jopa = fs.openSync('2.txt','w');
    for (let i=0;true;i++){
        let tmp = Buffer.alloc(256);
        let bytesred = fs.readSync(pizda,tmp,0,256,row);
        row += bytesred;
        let write = fs.writeSync(jopa,tmp,0,bytesred);
        if (bytesred < 256){break;}
    }
    return res;
}
console.log(chit());
