const inputs = document.querySelectorAll('.angle-input');
// console.log(inputs[2]);
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputT1 = document.querySelector('.output');


function calculatesumOfAngles(angle1, angle2, angle3){


    const sumofAngles = angle1 + angle2 +angle3;
    // console.log(sumofAngles);
    return sumofAngles;
}





function isTriangle(){

const sumofangle = calculatesumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

// console.log(typeof inputs[0].value , inputs[1].value,inputs[2].value);

console.log(sumofangle);

if(sumofangle === 180){
    // console.log("the angles form a triangle ");
    outputT1.innerText = "Yay the angles form a triangle";

    
}
else {
    // console.log("the angles doesn't forms a triangle ");
    outputT1.innerText = "oh oh ! the angles don't form a triangle ";
}



}







isTriangleBtn.addEventListener("click", isTriangle)