/*
# Catsylvanian money is a strange thing: they have a coin for every
# denomination (including zero!). A wonky change machine in
# Catsylvania takes any coin of value N and returns 3 new coins,
# valued at N/2, N/3 and N/4 (rounding down).
#
# Write a method `wonky_coins(n)` that returns the number of coins you
# are left with if you take all non-zero coins and keep feeding them
# back into the machine until you are left with only zero-value coins.
#
# Difficulty: 3/5

def wonky_coins(n)
end

puts("\nTests for #wonky_coins")
puts("===============================================")
    puts "wonky_coins(1) == 3: "  + (wonky_coins(1) == 3).to_s
    puts "wonky_coins(5) == 11: "  + (wonky_coins(5) == 11).to_s
    puts "wonky_coins(6) == 15: "  + (wonky_coins(6) == 15).to_s
    puts "wonky_coins(0) == 1: "  + (wonky_coins(0) == 1).to_s
puts("===============================================")
*/

//Main idea is to check each of the 3 coin value seperately. If greater than 1, then recall the function (recursive) where the arg is the value itself. Keep doing that until the value is 1 or 0. We could one more call if value is 1, but that'll add unecessary lopps to the execution, since we know that when the value is 1, we get 3 zero coins.

function return_coins(num) {
	var v2coin = Math.floor(num/2);
	var v3coin = Math.floor(num/3);
	var v4coin = Math.floor(num/4);
	
	if(v2coin > 1) {return_coins(v2coin)}
	else if (v2coin === 1) {nZcoins += 3}
	else nZcoins += 1;

	if(v3coin > 1) {return_coins(v3coin)}
	else if (v3coin === 1) {nZcoins += 3}
	else nZcoins += 1;

	if(v4coin > 1) {return_coins(v4coin)}
	else if (v4coin === 1) {nZcoins += 3}
	else nZcoins += 1;
	
}

function wonky_coins(n) {
	nZcoins = 0;
	
	if (n === 0) nZcoins = 1;
	else return_coins(n);
	
	return nZcoins;
}

console.log(wonky_coins(0));


