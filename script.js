var topLeft = document.getElementById("radiusTopLeft");

var topRight = document.getElementById("radiusTopRight");

var bottomLeft = document.getElementById("radiusBottomLeft");

var bottomRight = document.getElementById("radiusBottomRight");

var radiusDiv = document.getElementById("radius");

var allRadius = document.getElementById("all");

var concludeBord = document.getElementById("endBord");

var inputWidth = document.getElementById("slider");

var inputColor = document.getElementById("inputColor")

var cssCode = document.getElementById("cssCod")

var allRadiusChecked = false


var borderType = "solid"
concludeBord.style.borderStyle = borderType
concludeBord.style.borderColor = "#D96CFF"
inputColor.value = "#D96CFF"

cssCode.textContent = concludeBord.style.cssText 
function changeRadiusTopLeft(event){
    if(allRadiusChecked === true){
        topRight.value = topLeft.value
        bottomLeft.value = topLeft.value 
        bottomRight.value = topLeft.value
        concludeBord.style.borderRadius = `${topLeft.value}%`
        radiusDiv.style.borderRadius = `${topLeft.value}%`
    }else {
        console.log(topLeft.value)
        concludeBord.style.borderTopLeftRadius = `${topLeft.value}%`
        radiusDiv.style.borderTopLeftRadius = `${topLeft.value}%`
    }
    cssCode.textContent = concludeBord.style.cssText 
}

topLeft.addEventListener("input", changeRadiusTopLeft);

function changeRadiusTopRight(event){
    console.log(topRight.value)
    concludeBord.style.borderTopRightRadius = `${topRight.value}%`
    radiusDiv.style.borderTopRightRadius = `${topRight.value}%`
    cssCode.textContent = concludeBord.style.cssText 
}

topRight.addEventListener("input", changeRadiusTopRight);

function changeRadiusbottomLeft(event){
    console.log(bottomLeft.value)
    concludeBord.style.borderBottomLeftRadius = `${bottomLeft.value}%`
    radiusDiv.style.borderBottomLeftRadius = `${bottomLeft.value}%`
    cssCode.textContent = concludeBord.style.cssText 
}

bottomLeft.addEventListener("input", changeRadiusbottomLeft);

function changeRadiusBottomRight(event){
    console.log(bottomRight.value)
    concludeBord.style.borderBottomRightRadius = `${bottomRight.value}%`
    radiusDiv.style.borderBottomRightRadius = `${bottomRight.value}%`
    cssCode.textContent = concludeBord.style.cssText 
}

bottomRight.addEventListener("input", changeRadiusBottomRight);

function changeRadiusAll(event){
    allRadiusChecked = allRadius.checked
    console.log(allRadius.checked)   
    cssCode.textContent = concludeBord.style.cssText 
}

allRadius.addEventListener("change", changeRadiusAll);

function changeBorderWidth(){
    concludeBord.style.borderWidth = `${inputWidth.value}px`
    cssCode.textContent = concludeBord.style.cssText 
}
inputWidth.addEventListener("input", changeBorderWidth);

function changeBorderType(name){
  borderType = name
  concludeBord.style.borderStyle = name
  cssCode.textContent = concludeBord.style.cssText 
}

function changeColor(color){
    concludeBord.style.borderColor = `${color}`
    console.log(color)
    cssCode.textContent = concludeBord.style.cssText 
}


function changeOpacity(value){
    const match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(concludeBord.style.borderColor)
    value = value > 1 ? (value / 100) : value;
    concludeBord.style.borderColor = "rgba(" + [match[1],match[2],match[3],value].join(',') +")"
    cssCode.textContent = concludeBord.style.cssText 
}

function changeBorderSide(value){
    concludeBord.style.borderTopStyle = "hidden"
    concludeBord.style.borderBottomStyle = "hidden"
    concludeBord.style.borderLeftStyle = "hidden"
    concludeBord.style.borderRightStyle = "hidden"
    if(value=="Right"){
        concludeBord.style.borderRightStyle = borderType
    }
    if(value=="Left"){
        concludeBord.style.borderLeftStyle = borderType
    }
    if(value=="Bottom"){
        concludeBord.style.borderBottomStyle = borderType
    }
    if(value=="Top"){
        concludeBord.style.borderTopStyle = borderType
    }
    if(value=="All"){
        concludeBord.style.borderTopStyle = borderType
        concludeBord.style.borderBottomStyle = borderType
        concludeBord.style.borderLeftStyle = borderType
        concludeBord.style.borderRightStyle = borderType
    }
    cssCode.textContent = concludeBord.style.cssText 
}

