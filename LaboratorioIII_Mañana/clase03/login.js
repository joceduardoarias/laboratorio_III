//INICIALIZAR LOCAL STORAGE ¿COMO GUARDAR INFO?
//solo se puede guardar texto 
if (localStorage.getItem("Empleados") == null) {
    localStorage.setItem("Empleados", "juan-123,rosa-456,carlos-666");
}
function loguear() {
    var nombre = document.getElementById("formNombre").value;
    var legajo = document.getElementById("formLegajo").value;
    var Empleados = localStorage.getItem("Empleados");
    if (Empleados != null) {
        var array_emp = Empleados.split(","); //separo por coma
        for (var index = 0; index < array_emp.length; index++) {
            var flag = false;
            var array = array_emp[index].split("-"); //separo por guion
            if (array[0] == nombre && array[1] == legajo) {
                alert("Estas logeado!!!");
                window.location.href = "./principal.html"; //redirecciono a otra pagina
                flag = true;
                break;
            }
            if (flag) {
                alert("no estas logueado");
            }
        }
    }
}
