function intersectionSet2(l1, l2) {
	return l1.filter(function(n){
		return l2 .indexOf(n) !== -1
	});
};

intersectionSet2([1,2,3], [2,3,4]);
