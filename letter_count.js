/*
# Write a function, `letter_count(str)` that takes a string and
# returns a hash mapping each letter to its frequency. Do not include
# spaces.
#
# Difficulty: 1/5

def letter_count(str)
end

puts("\nTests for #letter_count")
puts("===============================================")
    puts "letter_count(\"cat\") == {\"c\" => 1, \"a\" => 1, \"t\" => 1}: "  + (letter_count("cat") == {"c" => 1, "a" => 1, "t" => 1}).to_s
    puts "letter_count(\"moon\") == {\"m\" => 1, \"o\" => 2,\"n\" => 1}: "  + (letter_count("moon") == {"m" => 1, "o" => 2,"n" => 1}).to_s
    puts "letter_count(\"cats are fun\") == {\"a\" => 2, \"c\" => 1, \"e\"=> 1, \"f\" => 1, \"n\" => 1, \"r\" => 1, \"s\" => 1, \"t\" => 1, \"u\" => 1}: "  + (letter_count("cats are fun") == {"a" => 2, "c" => 1, "e"=> 1, "f" => 1, "n" => 1, "r" => 1, "s" => 1, "t" => 1, "u" => 1}).to_s
puts("===============================================")
*/

function letter_count(str) {

	str = str.replace(' ', '').toLowerCase().split('');  //Remove spaces
	
	str = str.map(function(chr) {
		return {char: chr, count: 1};
	});
	
	str = str.reduce(function(prev,curr) {
		prev[curr.char] = (prev[curr.char] || 0) + curr.count;
		return prev;
	}, {});
	
	console.log(str);
}

var ex = "blaHbleFDuye"

console.log(letter_count(ex));
