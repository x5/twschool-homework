const a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var newArray = new Array();
var numArray = new Array();
var i, j, k, l, max;
var count = 0;
var ifDuplicate;

newArray[0] = a[0];


for( j = 0; j<newArray.length; j++ ){
    numArray[j] = 0;
    for ( i = 0; i < a.length; i++ ){
        if ( newArray[j] == a[i] ){
            numArray[j] == numArray[j]++;
        } else {
            for ( k = 0; k<newArray.length; k++ ){
                if( newArray[k] != a[i]){
                    ifDuplicate = false;
                } else {
                    ifDuplicate = true;
                    break;
                }
            }
            if ( ifDuplicate == false ){
                newArray.push( a[i] );
            }
        }
    }
}

max = numArray[0];
for( l = 0; l<numArray.length; l++ ){
    if (max < numArray[l]){
        max = numArray[l]
    }
}

console.log( newArray[numArray.indexOf(max)] );
