let btns = document.querySelectorAll(".btn-light")
let input = document.querySelector("input[type=text]")

btns.forEach(element => {
    element.addEventListener('click', (event) => {
        //console.log(event.target.outerText)
        let action = event.target.outerText
        if (action == "=")
        {
            getResult()
        } else if (action == "CE"){
            empty()
        } else {
            setFormula(action)
        }
    })
});

function setFormula(txt){
    input.value += txt
}

function getResult(){
    input.value = eval(input.value)
}

function empty(){
    input.value = '0'
}

let buttonsAllowed = [111, 106, 107, 109, 110, 190, 13, 8]
input.addEventListener('keydown', (event) => {
    // 48 - 57
    console.log(event.keyCode, ' ' ,event.key) // key
    if (event.keyCode == 13){
        getResult()
        event.preventDefault() 
    } else if ((event.keyCode >= 48 && event.keyCode <= 58) ||
    (event.keyCode >= 96 && event.keyCode <= 105) || 
    buttonsAllowed.includes(event.keyCode)){
        
        console.log(event.keyCode, ' ', event.key)

        let lastSymbol = input.value
            .toString()
            .substring(input.value.length - 1, input.value.length)
        // console.log('lastSymbol', lastSymbol)
        if (event.key == lastSymbol)
        {
            event.preventDefault() 
        }

    } else {
        event.preventDefault() 
    }
})





