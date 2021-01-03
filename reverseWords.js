function reverseWords(string){

    let wordsArray = string.split(' ');
    let newString = "";
    wordsArray.forEach(word => {
        word = word.split('').reverse().join('');
        newString += word + ' ';
    });

    return newString;
}

console.log(reverseWords("this is a string of words"));

