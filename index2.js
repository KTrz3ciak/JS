// create digital display with characters limit per line
// given a string with unknonw length;
// show as many words per line as possible without breaking them



let sentence = "Hello, this is my long sentence, please break it up on the display."
// 1. If sentence length < 12 - display it
if (sentence.length < 13) {
    
    console.log(sentence);
} else {
    // Else as long as sentence length > 12 repeat:
    while (sentence.length > 12)
    {
    // a. take part of sentence that ends this SPACE that is 13th chatacter or less
        let spaceIndex = sentence.lastIndexOf(" ", 13);
        let output = spaceIndex;
    //    let output = sentence.lastIndexOf(" ", 13);
    // b. display it
        console.log(output);
    // c. save rest of sentence
        sentence = sentence.slice(14)
        console.log(sentence);
        console.log("something else");
    }
    
}



