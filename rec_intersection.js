/*
# Write a function, `rec_intersection(rect1, rect2)` and returns the
# intersection of the two.
#
# Rectangles are represented as a pair of coordinate-pairs: the
# bottom-left and top-right coordinates (given in `[x, y]` notation).
#
# Hint: You can calculate the left-most x coordinate of the
# intersection by taking the maximum of the left-most x coordinate of
# each rectangle. Likewise, you can calculate the top-most y
# coordinate of the intersection by taking the minimum of the top most
# y coordinate of each rectangle.
#
# Difficulty: 4/5

def rec_intersection(rect1, rect2)
end

puts("\nTests for #rec_intersection")
puts("===============================================")
    puts "rec_intersection([[0, 0], [2, 1]], [[1, 0], [3, 1]]) == [[1, 0], [2, 1]]: "  + (rec_intersection([[0, 0], [2, 1]], [[1, 0], [3, 1]]) == [[1, 0], [2, 1]]).to_s
    puts "rec_intersection([[1, 1], [2, 2]], [[0, 0], [5, 5]]) == [[1, 1], [2, 2]]: "  + (rec_intersection([[1, 1], [2, 2]], [[0, 0], [5, 5]]) == [[1, 1], [2, 2]]).to_s
    puts "rec_intersection([[1, 1], [2, 2]], [[4, 4], [5, 5]]) == nil: "  + (rec_intersection([[1, 1], [2, 2]], [[4, 4], [5, 5]]) == nil).to_s
    puts "rec_intersection([[1, 1], [5, 4]], [[2, 2], [3, 5]]) == [[2, 2], [3, 4]]: "  + (rec_intersection([[1, 1], [5, 4]], [[2, 2], [3, 5]]) == [[2, 2], [3, 4]]).to_s
puts("===============================================")
*/

function rec_intersection(rect1, rect2) {
	var tmp = [];
	
	var x1L = rect1[0][0];
	var x1R = rect1[1][0];
	var y1B = rect1[0][1];
	var y1T = rect1[1][1];
	
	var x2L = rect2[0][0];
	var x2R = rect2[1][0];
	var y2B = rect2[0][1];
	var y2T = rect2[1][1];	
	
	xIL = Math.max(x1L,x2L);
	xIR = Math.min(x1R,x2R);
	yIB = Math.max(y1B,y2B);
	yIT = Math.min(y1T,y2T);
	
	tmp = xIL < xIR && yIB < yIT ? [[xIL,yIB],[xIR,yIT]] : 'nil';
	
	return tmp;
}

var a = [[1, 1], [5, 4]];
var b = [[2, 2], [3, 5]];

//console.log(a.indexOf(Math.min(...a)));
console.log(rec_intersection(a,b));



