/*
# Write a function word_unscrambler that takes two inputs: a scrambled
# word and a dictionary of real words.  Your program must then output
# all words that our scrambled word can unscramble to.
#
# Hint: To see if a string `s1` is an anagram of `s2`, split both
# strings into arrays of letters. Sort the two arrays. If they are
# equal, then they are anagrams.
#a
# Difficulty: 3/5


//THE FOLLOWING GRABS THE TABLE FROM THE WIKIPEDIA PAGE AND PRINTS IN THE FORMAT REQUIRED. COPY THE RESULT AND PASTE IT INTO A SPREADSHEET TO REMOVE THE W CODE THAT WILL BE PRINT WITH IT.
//ALSO, REMOVE PREVIOUS TABLES FROM WIKIPEDIA SOURCE BEFORE RUNNING THE SNIPPET BELOW.
var letter2Morse = [];
for (var i=1;i<=26;i++) {
  var tableSelectorChar = ".wikitable tbody tr:nth-child("+i+") td:nth-child(2) b a";
	var charValue = $(tableSelectorChar).attr('title');
	var tableSelectorMorse = ".wikitable tbody tr:nth-child("+i+") td:nth-child(3) .haudio a:nth-child(1) b";
	var morseValue = $(tableSelectorMorse).text();
	console.log("letter2Morse['"+charValue+"'] = '"+morseValue+"';");
}


def word_unscrambler(word, dictionary)
end

puts("\nTests for #word_unscrambler")
puts("===============================================")
    puts "word_unscrambler(\"cat\", [\"tac\"]) == [\"tac\"]: "  + (word_unscrambler("cat", ["tac"]) == ["tac"]).to_s
    puts "word_unscrambler(\"cat\", [\"tom\"]) == []: "  + (word_unscrambler("cat", ["tom"]) == []).to_s
    puts "word_unscrambler(\"cat\", [\"tic\", \"toc\", \"tac\", \"toe\"]) == [\"tac\"]: "  + (word_unscrambler("cat", ["tic", "toc", "tac", "toe"]) == ["tac"]).to_s
    puts "word_unscrambler(\"cat\", [\"scatter\", \"tac\", \"ca\"] ) == [\"tac\"]: "  + (word_unscrambler("cat", ["scatter", "tac", "ca"] ) == ["tac"]).to_s
    puts "word_unscrambler(\"turn\", [\"numb\", \"turn\", \"runt\", \"nurt\"]) == [\"turn\", \"runt\", \"nurt\"]: "  + (word_unscrambler("turn", ["numb", "turn", "runt", "nurt"]) == ["turn", "runt", "nurt"]).to_s

puts("===============================================")
*/


function isArrEq(arrA, arrB) {
	var fEqual = 'TRUE';
	
	if (arrA.length === arrB.length) {
		for (var i=0;i<arrA.length;i++) {
			if(arrA[i] != arrB[i]) {
				fEqual = 'FALSE';
				break;
			}
		}
	} else fEqual = 'FALSE';
	
	return fEqual;
}

function word_unscrambler(word, dictionary) {
	var dicLetters = [];  //Stores an array of letters for each word at a time
	var isEq = '';  //Flag for comparing two arrays
	var tmp = [];
	var wLetters = word.split('').sort();  //Sorted array of letters from the input word
	
	for (var i=0;i<dictionary.length;i++) {  //Runs through the dictionary array
		dicLetters[i] = dictionary[i].split('').sort();  //Splits a dictionary word into an array of letters and sorts it
		isEq = isArrEq(dicLetters[i],wLetters);
		
		if (isEq === 'TRUE') {  //If the letter arrays of dictionary[i] and word are the same, they're anagrams. Push it to the final answer.
			tmp.push(dictionary[i]);
		}
	}
	
	return tmp;
}


var a = [1,65,23,5,8,93];
var b = 'cat'
var c = [1,65,23,5,8];
var d = ['tac','act','cta','ac'];

console.log(word_unscrambler(b,d));


