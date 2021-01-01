function harmlessRansomNote(noteText, magazineText){
    let noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    let magazineObj = {};

    magazineArr.forEach(word => {
        if(!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    console.log(magazineObj);

    let noteIsPossible = true;

    noteArr.forEach(word => {
        if(magazineObj[word]){
            magazineObj[word]--;
            if(magazineObj[word] < 0) noteIsPossible = false;
        }else{
            noteIsPossible = false;
        }
    });

    
    return noteIsPossible;


}

console.log(harmlessRansomNote('this is a secret note for you from a secret admirer', 'this is a secret I have ever visited from admirer note for you a secret'));