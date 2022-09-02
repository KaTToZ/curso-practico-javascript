const sideSquare = 5

const side1Triangle = 6
const side2Triangle = 6
const baseTriangle = 4
const heightTriangle = 5.5

const circleRadio = 4

const figure = document.getElementById('js-figure')
const operation = document.getElementById('js-operation')
const button = document.getElementById('js-button')
const inputSide= document.getElementById('js-input-side')
const inputSide2= document.getElementById('js-input-side2')
const inputHeight= document.getElementById('js-input-height')
const inputBase= document.getElementById('js-input-base')
const itemSide= document.getElementById('js-item-side')
const itemSide2= document.getElementById('js-item-side2')
const itemHeight= document.getElementById('js-item-height')
const itemBase= document.getElementById('js-item-base')
const inputResult = document.getElementById('js-input-result')
const PI = Math.PI

button.addEventListener('click', function() {
    validatorFigure(figure.value)
})

operation.addEventListener('change', function() {
    validatorFigure(figure.value)
})

function validatorFigure (value) {
    switch (value) {
        case 'Cuadrado':
            if (operation.value == 'Área') {
                areaSquare(inputSide.value)
            } else {
                perimeterSquare(inputSide.value)
            }
            break
        case 'Triángulo':
            if (operation.value == 'Área') {
                hideFieldsArea()
                areaTriangle(inputSide.value, inputSide2.value. inputBase.value)
            } else {
                hideFieldsPerimeter()
                perimeterTriangle(inputBase.value, inputHeight.value)
            }
            break
        case 'Circulo':
            validatorOperation(value, operation.value)
            break
        default:
            break
    }
}

//Operaciones Cuadrado
function perimeterSquare(side) {
    inputResult.value = side * 4
}

function areaSquare(side) {
    inputResult.value = side * side
}

//Operaciones Triangulo
function perimeterTriangle(side1, side2, base) {
    inputResult.value = side1 + side2 + base
}

function areaTriangle(base, height) {
    inputResult.value = (base * height) / 2
}

//Operaciones Circulo
function perimeterCircle(radio) {
    const diameter = diameterCircle(radio)
    return diameter * PI
}

function diameterCircle(radio) {
    return radio * 2
}

function areaCircle(radio) {
    return (radio * radio) * PI
}

//Esconder campos
function hideFieldsArea() {
    itemSide.style.display = 'none'
    itemSide2.style.display = 'none'
}

function hideFieldsPerimeter() {
    itemSide.style.display = 'flex'
    itemSide2.style.display = 'flex'
    itemHeight.style.display = 'none'
}