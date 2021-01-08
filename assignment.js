//1.  feet to mile converter function;

function feetToMile(feet){
    if(feet<=0){
        return "don't give negative number"
        
    }
    const miles = feet/5280;
    return miles;
};

var getFeet = feetToMile(52248);
 console.log(getFeet);


// 2. wood calculator function 

function woodCalculator(chair,table,bed){

    var woodForChair= chair*1 ;
    var woodForTable = table*3;
    var woodForBed  = bed*5;

    var totalWood = woodForChair+woodForTable+woodForBed;
    return totalWood;
};
    var getWood = woodCalculator(2,2,2); 
     console.log(getWood);

// 3.  Brick calculator function

var breakPerFeet = 1000;
var totalBreak = 0;

function brickCalcultor(tala){
    
    if(tala<=10){
        var feet = tala*15;
        var totalBreak = feet * breakPerFeet;
        return totalBreak;

    }else if (tala<=20){
        var feet = (tala -10)*12;
        var feetTenTola = 10*15
        var totalBreak =( feet +feetTenTola)*breakPerFeet;
        return totalBreak;
    }else if(tala>20){
        var feet= (tala-20)*10;
        var feetTwentyTola = 10*12;
        var feetTenTola = 10*15;
        var totalBreak = (feet+feetTwentyTola+feetTenTola)*breakPerFeet;
        return totalBreak;
    }
}

var getBreak = brickCalcultor(25);
 console.log(getBreak)

// .4 Tiny friend function

var friends= ["balu","chalu","alu","khalu","shallu"]
let min = friends[0];

function tinyFriend(arrays){
    for(var i=0; i<arrays.length;i++){
        var element = arrays[i];
        if(element.length<min.length){
            min = element;
        }
    }
    return min;
}
var result = tinyFriend(friends);

console.log(result)













