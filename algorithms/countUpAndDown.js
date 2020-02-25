function countUpAndDown(n){
    console.log('up counting');
    for(let j=0; j<=n; j++){
            console.log(j);
        }
    console.log('down counting');
    for(let i=n; i>=0; i--){
            console.log(i);
        }
}

countUpAndDown(10);