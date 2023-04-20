





var datos = document.getElementById("datos");

datos.innerHTML= `
    <h2> titulo </h2>
    
`;


// condicional



//<h1></h1>

function verificarClave(){
    if (document.getElementById('ingreso').value > 150){
        document.getElementById('mensaje').innerHTML="Eres alt@";
        
    }
    else
    {
        document.getElementById('mensaje').innerHTML="Eres chaparro@";
    }
}