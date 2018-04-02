function countWords(message){
    var wordsArray = new Array();
    wordsArray = message.split(/[^\w+]/);    // Wirte your code here
    var blankCount = 0;
    for (var i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] == "") {
            blankCount++;
        }
    }
    return wordsArray.length - blankCount;
}
var num = countWords('Good morning, I love JavaScript.'); // should return 5
console.log(num);
