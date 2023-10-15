function reverseWordsManually(sentence) {
    let words = sentence.split(' '); 
    let reversedWords = [];

    for (let word of words) {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i]; 
        }
        reversedWords.push(reversedWord); 
    }
    let reversedSentence = reversedWords.join(' '); 
    return reversedSentence;
}
let inputSentence ="This is a sunny day";
let reversedSentence = reverseWordsManually(inputSentence);
console.log(reversedSentence);
