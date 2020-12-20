function match(string){
	for(let c of string){
		if(c == 'a'){
			return true
		}
	}
	return false
}
match('I am groot')


function match(string){
	let foundA = false
	for(let c of string){
		if(c == 'a'){
			foundA = true
		}else if(foundA && c == 'b'){
			return true
		}else{
			foundA = false
		}
	}
	return false
}
console.log(match('I acbm groot'))


// 非状态机
function match(string){
	let foundA = false
	let foundB = false
	let foundC = false
	let foundD = false
	let foundE = false
	
	for(let c of string){
		if(c == 'a'){
			foundA = true
		}else if(foundA && c == 'b'){
			foundB = true
		}else if(foundB && c == 'c'){
			foundC = true
		}else if(foundC && c == 'd'){
			foundD = true
		}else if(foundD && c == 'e'){
			foundE = true
		}else if(foundE && c == 'f'){
			return true
		}else{
			let foundA = false
			let foundB = false
			let foundC = false
			let foundD = false
			let foundE = false
		}
	}
	return false
}
console.log(match('abcdef'))