function isPalindrome(word){

    word = word.toLowerCase();
    let charArr = word.split('');
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let lettersArr = [];
    charArr.forEach(character => {
        if(validCharacters.indexOf(character) > -1) lettersArr.push(character);
    });

    if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else return false;

}


console.log(isPalindrome("Madam I',m Adam"));