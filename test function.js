function countWords(message){
    var wordsArray = new Array();
    wordsArray = message.split(/[^\w+]/);
    var blankCount = 0;
    for (var i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] == "") {
            blankCount++;
        }
    }
    return wordsArray.length - blankCount;
}
countWords('Good morning, I love JavaScript.'); 

