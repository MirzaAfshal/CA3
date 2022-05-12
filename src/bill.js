var data;
document.getElementById("BillForm").addEventListener("submit", (e)=>{  
    let formElemnts = new Array(...e.target.elements); 

    data =  (formElemnts.map( (e)=>{ 
    if (e.name){ 
        let inputValue = parseFloat(e.value.trim());
        return [e.name, inputValue ? parseFloat(e.value.trim()) : 0  ]} 
    })).filter( (e)=>{ 
        if(e){return e} 
    })

    document.getElementById("Section2").style.display="block"
    document.getElementById("Section1").style.display="none"
    console.log(data)
    let values =  data.map(values => {
    return values[1]
    })
    let units = values[0];
    let days = values[1];
    let billWithOutVat = units * (values [4] / 100) + days * (values [3] / 100)
    let billWithVat = billWithOutVat + (billWithOutVat * (13.5 / 100))
    console.log('check the result ->', billWithOutVat.toFixed(2), billWithVat.toFixed(2))
    document.getElementById("NOfUnits").innerText = units;
    document.getElementById("BillPerid").innerText= days;
    document.getElementById("WithoutVAT").innerText= units +"*" +(values [4] / 100) +"+"+ days +"*"+ (values [3] / 100)+"="+ billWithOutVat.toFixed(2);
    document.getElementById("IncludingVAT").innerText= billWithOutVat +"+"+ (billWithOutVat +"*"+ (13.5 / 100))+ "=" +billWithVat.toFixed(2);
    document.getElementById("TotalBill").innerText = (billWithOutVat+billWithVat).toFixed(2)
    e.preventDefault();
});
document.getElementById("backbtn").addEventListener("click",(e)=>{
    document.getElementById("Section2").style.display="none"
    document.getElementById("Section1").style.display="block"
})