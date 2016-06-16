/*
# Write a function, `nearest_larger(arr, i)` which takes an array and an
# index.  The function should return another index, `j`: this should
# satisfy:
#
# (a) `arr[i] < arr[j]`, AND
# (b) there is no `j2` closer to `i` than `j` where `arr[i] < arr[j2]`.
#
# In case of ties (see example below), choose the earliest (left-most)
# of the two indices. If no number in `arr` is larger than `arr[i]`,
# return `nil`.
#
# Difficulty: 2/5

def nearest_larger(arr, idx)
end

puts("Tests for #nearest_larger")
puts("===============================================")
    puts "nearest_larger([2,3,4,8], 2) == 3: "  + (nearest_larger([2,3,4,8], 2) == 3).to_s
    puts "nearest_larger([2,8,4,3], 2) == 1: "  + (nearest_larger([2,8,4,3], 2) == 1).to_s
    puts "nearest_larger([2,6,4,8], 2) == 1: "  + (nearest_larger([2,6,4,8], 2) == 1).to_s
    puts "nearest_larger([2,6,4,6], 2) == 1: "  + (nearest_larger([2,6,4,6], 2) == 1).to_s
    puts "nearest_larger([8,2,4,3], 2) == 0: "  + (nearest_larger([8,2,4,3], 2) == 0).to_s
    puts "nearest_larger([2,4,3,8], 1) == 3: "  + (nearest_larger([2,4,3,8], 1) == 3).to_s
    puts "nearest_larger([2, 6, 4, 8], 3) == nil: "+ (nearest_larger([2, 6, 4, 8], 3) == nil).to_s
    puts "nearest_larger([2, 6, 9, 4, 8], 3) == 2: "+ (nearest_larger([2, 6, 9, 4, 8], 3) == 2).to_s
puts("===============================================")
*/

function nearest_larger(arr, idx) {
	var baseVal = arr[idx];  //Stores the value to be compared
	var nL = 'nil';  //Stores the result, nearestLarger
	var idxDiff = arr.length;  //Stores the difference between idx and nL. We need to find the smallest Math.abs (idxDiff)
	
	for (var i=0;i<arr.length;i++) {  //Loops through array
		if (arr[i] > baseVal && Math.abs(idx-i)<idxDiff) {  //If arr element is smaller than baseVal AND it's closer than last iteration
			nL = i;  //Stores new nearestLarger
			idxDiff = Math.abs(idx-nL);  //Updates idxDiff
		}
		
		if ((idx-i)>idxDiff) {  //When i distances from idxDiff, we can stop running
			break;
		}
	}
	
	return nL;
}

var a = [2,6,4,8,9,10,11,20,30];
var b = 2;

console.log(nearest_larger(a,b));
