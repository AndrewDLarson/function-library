const formatNumber = (numbers) => {
    let numberString = numbers.toString();
    let numberArray = numberString.split("")
    if (numberString.includes(".")) {
        for (let i = 0; i < numberString.length; i++) {
            if (numberString[i] === ".") {
                let j = i - 3;
                while (j > 0) {
                    numberArray.splice(j, 0, ",");
                    j -= 3;
                }
                
            }
        }
    } else {
        let t = numberString.length;
        while (t - 3 > 0) {
                    t -= 3;
                    numberArray.splice(t, 0, ",");
                }
    }
    
    
    return numberArray.join("")
}




