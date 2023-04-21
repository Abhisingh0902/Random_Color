const getColor=() =>{   //create a constant function
    // color code in hexdecimal 
    //const randomNumber = Math.random()  //creating a random number
    const randomNumber = Math.floor(Math.random()*16777215);  //creating a hexdesimal number we are multiply by 16777215 and Math.folor is used fo the removing the decimmal point
    console.log(randomNumber)
    // now we convert the random hexadecimalno to string
    const randomCode="#"+randomNumber.toString(16);// concatinate is used to join anotehr in string by +
    console.log(randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode

    //copy color code when we click the button
    navigator.clipboard.writeText(randomCode)

}
// if we are click on btn id then cal the getColor function
// it is also event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//initial call
getColor();