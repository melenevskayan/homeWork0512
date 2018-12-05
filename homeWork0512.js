function sum(num){
	return num <= 1 ? 1 : num + sum(--num)
	/*if (num <= 1){
		return 1
	}
	else{
		return num + sum(num - 1)
	}*/
}
console.log	(sum(100));