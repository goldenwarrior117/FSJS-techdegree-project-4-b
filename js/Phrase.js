class Phrase { //The class should include a constructor that accepts a phrase as an argument
    constructor(phrase) {
        this.phrase = phrase; //This is the actual phrase the Phrase object is represented. This property should convert the phrase to all lower case
        this.letterCount; //this is number of letters inside the phrase (excluding spaces,punctuation,etc)
    }

    //this method adds letter placeholders to the display when the game starts
    //I need to dynamically create list items and append them to the div="phrase" in html file
    addPhraseToDisplay() {
        //I used the following video as a reference: https://www.youtube.com/watch?v=e0ihEHxd6vI

        //create a variable for this.phrase
        const phraseVariable = this.phrase;

        //Use (forEach) to loop through the phrases array
        phraseVariable.forEach(element => {

            //Create a reference to ul element
            const myList = document.querySelector('#phrase ul');

            //Crete new list items
            let newListItem = document.createElement('li'); 

             //Append the created li element to ul element
            myList.appendChild(newListItem);

            //I set the context of the list items as element
            newListItem.textContent = element

            /*If the element parameter does not equal to a blank space then add a class named 'letter' located in css file,
             otherwise if there is a blank space then add a class called 'hide space'*/
        
            if (element !== ' ') {
               newListItem.className = 'letter';
           } else  
            newListItem.className = 'hide space';
        });

       

     }

    /* this method checks to see if letter selected by player matches a letter in the phrase

        Use a loop to iterate the array and check the phrase for whether the letter is in said phrase.
        if the letter is in the phrase,call the showMatchedLetter() method

        I received help from a fellow tech-degree student on checkletter() but I am unsure if I did the method right
      */
    checkLetter() {
        //give the letter class a variable named letters to have a reference to them
        var letters = $('.letter');
       for (var i=0; i < letters.length; i++) {
            //if the phrase contains a letter from the phrases array return true, otherwise it will return false
           if(this.phrase === letters[i].textContent) {
            return true
           }
           else return false
        } 
    }

    // the method below reveals the letter(s) on the board that matches player's selection.
    showMatchedLetter() {
    //if there was a match on the checkLetter method, then add a show letter class to the lis items
        if (checkLetter === true) {
            newListItem.className = 'show';
        }
        
        
    }

}
