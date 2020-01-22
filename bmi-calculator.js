let YourWeight=prompt("What is your weight(KG)?");
let YourHeight=prompt("What is your height(Meters)?");
let bmi= YourWeight/Math.pow(YourHeight, 2);



if(0 < bmi  && bmi <= 40) {
    if (bmi <= 18){
        console.log(`Your bmi is ${bmi}. You are underweight, please more!`)
    }
    if(18 < bmi && bmi <= 25){
        console.log(`Your bmi is ${bmi}. You are in the healthy weight range.`)
    }
    if(25 < bmi && bmi <= 30){
        console.log(`Your bmi is ${bmi}. You are overweight, please work out.`)
    }
    if(30<bmi && bmi<=40) {
        console.log(`Your bmi is ${bmi}. You are obese, please work out and exercise immediately!`)
    }
}
else {
    console.log(`Please enter your actual weight.`)
}