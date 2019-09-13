function MostrarDatos():void
{
    let Nombre : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;
    let edad : string = (<HTMLInputElement> document.getElementById("txtEdad")).value;

    alert("HOLA "+ Nombre);
    alert("TU EDAD ES "+ edad);
}