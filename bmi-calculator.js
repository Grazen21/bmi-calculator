start = () => {
    let YourWeight=prompt("What is your weight(KG)?");
    let YourHeight=prompt("What is your height(Meters)?");
    let bmi= Math.round(YourWeight/Math.pow(YourHeight, 2)* 100) / 100;
    console.log(bmi);
    if(0 < bmi  && bmi <= 40) {
        if (bmi <= 18){
            alert(`Your bmi is ${bmi}. You are underweight, please more!`)
        }
        if(18 < bmi && bmi <= 25){
            alert(`Your bmi is ${bmi}. You are in the healthy weight range.`)
        }
        if(25 < bmi && bmi <= 30){
            alert(`Your bmi is ${bmi}. You are overweight, please work out.`)
        }
        if(30<bmi && bmi<=40) {
            alert(`Your bmi is ${bmi}. You are obese, please work out and exercise immediately!`)
        }
    }
    else {
        alert(`Please enter your actual weight.`)
    }
}