var data;
// event handler for calculate bill button
document.getElementById("BillForm").addEventListener("submit", (e)=>{  
    let formElemnts = new Array(...e.target.elements); 
    e.preventDefault();

    // take the data from from elements and add in data variable
    data =  (formElemnts.map( (e)=>{ 
    if (e.name){ 
        let inputValue = parseFloat(e.value.trim());
        return [e.name, inputValue ? parseFloat(e.value.trim()) : 0  ]} 
    })).filter( (e)=>{ 
        if(e){return e} 
    })
    
    document.getElementById("resetBtn").style.display="block"
    // make the section 2 visible after hiting on calculate button
    document.getElementById("Section2").style.display="block"
    console.log(data)
    let values =  data.map(values => {
    return values[1]
    })
    let units = values[0];
    let days = values[1];

    // calculate the bill without vat
    let billWithOutVat = units * (values [4] / 100) + days * (values [3] / 100)

    // calculate the bill with vat
    let billWithVat = billWithOutVat + (billWithOutVat * (13.5 / 100))

    // make the calculated data available for displaying in the table
    document.getElementById("NOfUnits").innerText = units;
    document.getElementById("BillPerid").innerText= days;
    document.getElementById("WithoutVAT").innerText= units +"*" +(values [4] / 100) +"+"+ days +"*"+ (values [3] / 100)+"="+ billWithOutVat.toFixed(2);
    document.getElementById("IncludingVAT").innerText= billWithOutVat +"+"+ (billWithOutVat +"*"+ (13.5 / 100))+ "=" +billWithVat.toFixed(2);
});

// event handler for reset button
document.getElementById("resetBtn").addEventListener("click",(e)=>{
    document.getElementById("Section2").style.display="none";
    document.getElementById("resetBtn").style.display="none"
    document.getElementById("numofunits").value= '';
    document.getElementById("numofdays").value= '';
})