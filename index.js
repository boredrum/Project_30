                                            // EXCERCISE 1
function count(expression){
    function getValues(expression){
        let values = [...expression];
        return values
    };
    let values = getValues(expression);
    switch (values[1]){
        case "+":
            return showResult(sum(values))
        case "-":
            return showResult(substract(values))
        case "*":
            return showResult(multiply(values))
        case "/":
            return showResult(divide(values))
    }
    function showResult(value){
        return value
    }
}
function sum(values){
    return +values[0] + +values[2];  // виставили точку останова, щоб побачити, що передаємо у якості values. Бачимо, що це строки та ставимо унарний плюс, щоб привести до типу Number
}
function substract(values){
    return values[0] - values[2];
}
function mupliply(values){
    return values[0] * values[2];
}
function divide(values){
    try {                                       // EXCERCISE 2
        if (values[2] == 0){
            throw new Error("Can't divide by 0");
        }
    } catch (error){
        console.log(error.name + ': ' + error.message);
        return 0
    }
    return values[0] / values[2];
}
console.log(count('5+2'));
console.log(count('5/0'));


//                                         //EXCERCISE 3       //NE RABOAET B
// function count(expression){
//     function getValues(expression){
//         let values = [...expression]
//         return values
//     };
//     let values;
//     try {
//         if (typeof(expression) !== 'string'){
//             throw new TypeError('Please write in string format');
//         }
//         values = Values(expression);        // line 1
//     } catch(error){
//         if (error.name == 'TypeError'){
//             throw error.message
//         }else{
//             throw error
//         }
//     }
//     switch (values[1]){
//         case '+':
//         return showResult (sum(values))
//         case '-':
//         return showResult (subtract (values) )
//         case '*':
//         return showResult (multiply (values))
//         case '/':
//         return showResult (divide (values))
//     }
//     function showResult (value) {
//         return value
//     }
// }
// function sum (values) {
//     return +values[0] + +values[2]
// }
// function subtract (values) {
//     return +values[0] - +values[2]
// }
// function multiply (values) {
//     return +values[0] * +values[2]
// }
// function divide (values) {
//     return +values[0] / +values[2]
// }
// try{
//     count(5*2);        // line 2 
// }catch(error){
//     console.log(error);
// }




//                                         //EXCERCISE 4
// function MakeUsers(name, age){
//     this.name = name;
//     this.age = age;
// }
// let user = new MakeUsers('Mike');
// function showMovie (user){
//     try{
//         if (user.age == undefined || !user.age){
//             throw new SyntaxError("Age's not determined")
//         }
//         if (user.age >= 18){
//             console.log('You can watch this movie');
//         }else{
//             console.log('Sorry, you are too young');
//         }
//     }catch(error){
//         if (error.name == 'SyntaxError'){
//             user.age = +prompt('Please write user name');
//             showMovie(user);
//         }else{
//             console.log(error);
//         }
//     }
// }
// showMovie(user);