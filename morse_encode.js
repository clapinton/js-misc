/*
# Build a function, `morse_encode(str)` that takes in a string (no
# numbers or punctuation) and outputs the morse code for it. See
# http://en.wikipedia.org/wiki/Morse_code. Put two spaces between
# words and one space between letters.
#
# You'll have to type in morse code: I'd use a hash to map letters to
# codes. Don't worry about numbers.
#
# I wrote a helper method `morse_encode_word(word)` that handled a
# single word.
#
# Difficulty: 2/5

def morse_encode(str)
end

puts("\nTests for #morse_encode")
puts("===============================================")
    puts "morse_encode(\"q\") == \"--.-\": "  + (morse_encode("q") == "--.-").to_s
    puts "morse_encode(\"cat\") == \"-.-. .- -\": "  + (morse_encode("cat") == "-.-. .- -").to_s
    puts "morse_encode(\"cat in hat\") == \"-.-. .- -  .. -.  .... .- -\": "  + (morse_encode("cat in hat") == "-.-. .- -  .. -.  .... .- -").to_s

puts("===============================================")
*/

var letter2Morse = [];
letter2Morse['A'] = '.−';
letter2Morse['B'] = '−...';
letter2Morse['C'] = '−.−.';
letter2Morse['D'] = '−..';
letter2Morse['E'] = '.';
letter2Morse['F'] = '..−.';
letter2Morse['G'] = '−−.';
letter2Morse['H'] = '....';
letter2Morse['I'] = '..';
letter2Morse['J'] = '.−−−';
letter2Morse['K'] = '−.−';
letter2Morse['L'] = '.−..';
letter2Morse['M'] = '−−';
letter2Morse['N'] = '−.';
letter2Morse['O'] = '−−−';
letter2Morse['P'] = '.−−.';
letter2Morse['Q'] = '−−.−';
letter2Morse['R'] = '.−.';
letter2Morse['S'] = '...';
letter2Morse['T'] = '−';
letter2Morse['U'] = '..−';
letter2Morse['V'] = '...−';
letter2Morse['W'] = '.−−';
letter2Morse['X'] = '−..−';
letter2Morse['Y'] = '−.−−';
letter2Morse['Z'] = '−−..';


function word2Morse(str) {
	var tmp = [];
	str = str.split('');  //Splits a word into an array of letters
	for (var i=0;i<str.length;i++) {
		tmp[i] = letter2Morse[str[i]];  //Hasb table for each letter
	}
	
	tmp = tmp.reduce(function(a,b) {  //Concats the letters into a word, with single spacing
		return a.concat(' '+b);
	})
	
	return tmp;
}

function morse_encode(str) {
	
	var mStr = [];
	var tmp = "";
	
	str = str.toUpperCase().split(' ');  //Splits the string into an array of words
	
	for (var i=0;i<str.length;i++) {
		mStr[i]  = word2Morse(str[i]);  //Calls a function to convert each word to a Morse code
	}
	tmp = mStr.reduce(function(a,b) {  //Concats the words into a string, with double spacing
		return a.concat('  '+b)
	});
	
	return tmp;
}
var message = 'SOS please';
console.log(morse_encode(message));


