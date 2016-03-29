var greatest = function(x,y,n){
	for (var i = n-1; i >= 0;i--){
		if (i % x === 0 && i % y === 0) {
			return i;
		}
	}
	return 0;
}

var smallest = function(x,y,n) {
	var bool = true;
	var i = n + 1;
	var result;
	while(bool){
		if(i % x === 0 && i % y === 0){
			result = i;
			bool = false;
		}
		i++;
	}
	return result;
}