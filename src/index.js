module.exports = function getZerosCount(number, base) {
	const isElem = (arg) => {
	    for(let i = 2; i < arg; i++){
	    	if(arg % i === 0) return false;
	    }
	    return arg !== 1;
	}

	const getObjectElem = (baseNumber) => {
	      let allElems = {};
	      let minelem = 2;
	      let tempNumber = baseNumber;
	      
	       while(minelem <= baseNumber){
	          if (isElem(minelem)){
	              while (tempNumber % minelem == 0){
	                  tempNumber = tempNumber / minelem;
	                  if (allElems[minelem]){
	                     allElems[minelem]+=1;
	                  } else {
	                     allElems[minelem]=1;     
	                  }
	              }   
	          } 
	          minelem++;
	          tempNumber = baseNumber;    
	      }
	      return allElems;    
	  }

	let res = getObjectElem(base);
	let mass=[];
	for (i in res){
		let num = number;
		let result = 0;
		while(num >= i){
			num = Math.floor(num/i);
			result += num;
		}
		mass.push(Math.floor(result/res[i]));
	}
	mass.sort((a,b) => {return a - b});
	return mass[0];
}


