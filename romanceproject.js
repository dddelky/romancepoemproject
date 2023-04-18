let text = "the moment that I step outside so many reasons for me to run and hide I can't do the little things I hold so dear cause it's all those little things that I fear"

function wordCorpus(text) {
    let chain = text.split(' ')

    return chain
}

function generateWordPairs(text) {
    let wordPairs = {}
    let words = wordCorpus(text)
    let output = "";


    for(let i=0; i < words.length - 1; i++) {
        
        let wordUno = words[i]
        let wordDos = words[i+1]
        let output = "";
        

        if(wordPairs[wordUno]) {
            wordPairs[wordUno].push(wordDos)
            
        } else {
            wordPairs[wordUno] = [wordDos]
           
        }
        
    }


    for(let i=0; i < words.length - 1; i++) {

        let theWord = words[i];
        
        if ((wordPairs[theWord].length) == 1){

            output = output + " " + wordPairs[theWord][0]

        } else {

            output = output + " " + (wordPairs[theWord][Math.floor(Math.random() * (wordPairs[theWord].length))])

        }
            

    }

    console.log(output);

    
}

generateWordPairs(text);