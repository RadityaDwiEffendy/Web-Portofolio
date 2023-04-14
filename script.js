const txtElement = ['Hengker', 'Nasa Destroyer', 'Russian Lover']
let count = 0;
let txtindex = 0;
let currentTXT = '';
let words = '';

(function ngetik (){

    if(count == txtElement.length){
        count = 0;
    }

    currentTXT = txtElement [count];
    words = currentTXT.slice(0,++txtindex);
    document.querySelector('.efek').textContent = words

    setTimeout(ngetik, 500);

    if(words.length == currentTXT.length){
        count++;
        txtindex = 0;
    }

})();