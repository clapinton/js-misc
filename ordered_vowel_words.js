/*
# Write a method, `ordered_vowel_words(str)` that takes a string of
# lowercase words and returns a string with just the words containing
# all their vowels (excluding "y") in alphabetical order. Vowels may
# be repeated (`"afoot"` is an ordered vowel word).
#
# You will probably want a helper method, `ordered_vowel_word?(word)`
# which returns true/false if a word's vowels are ordered.
#
# Difficulty: 2/5

def ordered_vowel_words(str)
end

puts("\nTests for #ordered_vowel_words")
puts("===============================================")
    puts "ordered_vowel_words(\"amends\") == \"amends\": "  + (ordered_vowel_words("amends") == "amends").to_s
    puts "ordered_vowel_words(\"complicated\") == \"\": "  + (ordered_vowel_words("complicated") == "").to_s
    puts "ordered_vowel_words(\"afoot\") == \"afoot\": "  + (ordered_vowel_words("afoot") == "afoot").to_s
    puts "ordered_vowel_words(\"ham\") == \"ham\": "  + (ordered_vowel_words("ham") == "ham").to_s
    puts "ordered_vowel_words(\"crypt\") == \"crypt\": "  + (ordered_vowel_words("crypt") == "crypt").to_s
    puts "ordered_vowel_words(\"o\") == \"o\": "  + (ordered_vowel_words("o") == "o").to_s
    puts "ordered_vowel_words(\"tamely\") == \"tamely\": "  + (ordered_vowel_words("tamely") == "tamely").to_s
    
    phrase = "this is a test of the vowel ordering system"
    result = "this is a test of the system"
    puts "ordered_vowel_words(phrase) == result: "  + (ordered_vowel_words(phrase) == result).to_s
puts("===============================================")
*/

function is_vowel (char) {
	var vowels = ['a','e','i','o','u'];
	return vowels.indexOf(char) > -1;
}

function ordered_vowel_words(str) {
	
	var vowelStr = [];
	var orderedVowelStr = [];
	var tmp = "";
	var ordered = '';
	
	
	str = str.split(' ');  //Splits the string into words
	
	for (var i=0; i<str.length; i++) {  //For each word...
		//letters into array elems -> subarray with vowels -> compare that with arr.sort
		str[i] = str[i].split('');  //Splits the letters into array elements
		vowelStr = str[i].filter(is_vowel);  //Grabs all vowels from the words
		orderedVowelStr = str[i].filter(is_vowel).sort();  //Grabs all vowels and sorts them

		ordered = 'TRUE';  //Flag that will be set to FALSE if vowelStr and orderedVowelStr don't match

		for (var j=0;j<vowelStr.length;j++) {  //Running through the letters
			if (vowelStr[i] != orderedVowelStr[i]) {  //If the 2 don't match
				ordered = 'FALSE';  //Flag is FALSE
				break;  //No need to continue the loop
			}
		}
		
		if (ordered === 'TRUE') {  //If flag came out TRUE, add the word to the tmp var
			tmp+= str[i].reduce(function(a,b) {
				return a.concat(b);
			}) + ' ';
		}
	}
	
	return tmp;
}

var ex = 'amends afoot ham complicated crypt tamely';

console.log(ordered_vowel_words(ex))


