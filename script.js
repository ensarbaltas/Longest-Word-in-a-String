/*
Tuesday: Find the longest Word in a Sting
Return the length of the longest word in the provided sentence.

Your response should be a number. For these algorithms you are 
allowed to use the split() method.

findLongestWord("The quick brown fox jumped over the lazy dog")
should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog")
should return 6.
findLongestWord("May the force be with you") s
hould return 5.
*/

var Arr = "The quick brown fox jumped over the lazy dog"
var SplitArr = Arr.split(" ")
//console.log(SplitArr)
var LastArr = []

function LongestNumber(){
    
    for(i=0; i<SplitArr.length; i++){

        LastArr = LastArr.concat([SplitArr[i].length])
        
    }
        //console.log(LastArr)

    var Max2 = 0
    
    for(j=0; j<LastArr.length; j++){

    if( LastArr[j] > Max2 ){

        var Max2=LastArr[j]
        
    }
    
    }
    console.log(Max2)
    
}
LongestNumber(Arr)

