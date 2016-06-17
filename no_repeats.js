/*
# Write a function, `no_repeats(year_start, year_end)`, which takes a
# range of years and outputs those years which do not have any
# repeated digits.
#
# You should probably write a helper function, `no_repeat?(year)` which
# returns true/false if a single year doesn't have a repeat.
#
# Difficulty: 1/5

def no_repeats(year_start, year_end)
end

puts("\nTests for #no_repeats")
puts("===============================================")
    puts "no_repeats(1234, 1234) == [1234]: "  + (no_repeats(1234, 1234) == [1234]).to_s
    puts "no_repeats(1123, 1123) == []: "  + (no_repeats(1123, 1123) == []).to_s
    puts "no_repeats(1980, 1987) == [1980,1982,1983,1984,1985,1986,1987]: " + (no_repeats(1980, 1987) == [1980,1982,1983,1984,1985,1986,1987]).to_s
puts("===============================================")
*/

function is_repeat(yr) {  //Helper function. Checks if there are repeat digits inside an array.
	
	var tmp = 'FALSE';
	
	for (var i=0; i<yr.length;i++) {
		for (var j=i+1;j<yr.length;j++) {
			if (yr[i] == yr[j]) {
				return 'TRUE'
			}
		}
	}
	
	return tmp;
}

function no_repeats (ys, ye) {  //Main function
	
	var yrs = [];
	var tmp = [];
	
	for (var i=ys;i<=ye;i++) {  //Creates a list with all years between ys and ye
		yrs.push(i);
	}
	
	yrs = yrs.map(function(year) {  //Splits each year into its digits
		return year.toString().split("");
	});

	for (i=0;i<yrs.length;i++) {  //Loops through the years array
		if (is_repeat(yrs[i]) == "TRUE") {  //If helper function returns true, it means there are repeat digits on this year
			tmp.push(yrs[i].reduce(function(a,b) {  //Re-concats the digits into a year and pushes it to a tmp array
				return a.concat(b);
			}));
		}
	}
	
	return tmp;

}


console.log(no_repeats(1974,1979));


/*	FROM http://stackoverflow.com/a/24968449/5724851
	var names = ['Nancy', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl'];

	var uniq = names
	.map((name) => {
	  return {count: 1, name: name}
	})
	.reduce(function(a, b) {
	  a[b.name] = (a[b.name] || 0) + b.count;
	  console.log(b.name);
	  return a
	})
	
	//var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)
	
	console.log(uniq['Nancy']||0); // [ 'Nancy' ]
*/

