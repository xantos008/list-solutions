function generateWord (){
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function generate(){
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push({title: generateWord()});
    }
    return arr;
}

export default generate