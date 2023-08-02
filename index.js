function weatherReport(element){
    alert("Loading weather report...")
}
function changeTemp(el){

    // alert (el.value)

    if (el.value === "F") {
        var numrat = document.getElementsByClassName("numrat");
    
        for (let index = 0; index < numrat.length; index++) {
            const element = numrat[index];
            // f = (c * (9 / 5)) + 32;
            element.innerHTML = Math.ceil( (element.innerHTML * (9 / 5)) + 32);  
        }
        
    } else 
    {
        var numrat = document.getElementsByClassName("numrat");
    
        for (let index = 0; index < numrat.length; index++) {
            const element = numrat[index];
            // celsius = (fahrenheit - 32) * 5/9
            element.innerHTML = Math.ceil( (element.innerHTML - 32) * 5/9);  
        }
        
    }
    if (el.value === "F") {
        var shkronjat = document.getElementsByClassName("shkronjat");
    
        for (let index = 0; index < shkronjat.length; index++) {
            const element = shkronjat[index];
            element.innerHTML = "F";  
        }
        
    } else {
        var shkronjat = document.getElementsByClassName("shkronjat");
    
        for (let index = 0; index <shkronjat.length; index++) {
            const element = shkronjat[index];
            element.innerHTML = "°C";  
        }
        
    }
}
function deleteCookie(id,element){
    document.querySelector("#cook").remove();

}