var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var entidades;
(function (entidades) {
    var persona = /** @class */ (function () {
        //METODOS
        function persona(nombre, apellido, dni, sexo) {
            this.apellido = apellido;
            this.dni = dni;
            this.nombre = nombre;
            this.sexo = sexo;
        }
        persona.prototype.GetApellido = function () {
            return this.apellido;
        };
        persona.prototype.GetNombre = function () {
            return this.nombre;
        };
        persona.prototype.GetSexo = function () {
            return this.sexo;
        };
        persona.prototype.GetDni = function () {
            return this.dni;
        };
        persona.prototype.ToString = function () {
            return this.apellido + " - " + this.nombre + " - " + this.sexo + " - " + this.dni;
        };
        return persona;
    }());
    entidades.persona = persona;
})(entidades || (entidades = {}));
/// <reference path="./persona.ts"/>
var entidades;
(function (entidades) {
    var empleado = /** @class */ (function (_super) {
        __extends(empleado, _super);
        function empleado(nombre, apellido, dni, sexo, legajo, sueldo) {
            var _this = _super.call(this, nombre, apellido, dni, sexo) || this;
            _this.legajo = legajo;
            _this.sueldo = sueldo;
            return _this;
        }
        empleado.prototype.GetLegajo = function () {
            return this.legajo;
        };
        empleado.prototype.GetSuedo = function () {
            return this.sueldo;
        };
        empleado.prototype.Hablar = function (idioma) {
            return "El empleado habla " + idioma;
        };
        empleado.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + this.legajo + this.sueldo;
        };
        return empleado;
    }(entidades.persona));
    entidades.empleado = empleado;
})(entidades || (entidades = {}));
/// <reference path="./empleado.ts"/>
var empleado = new entidades.empleado("juanito", "Alimaña", 95632154, 'm', 112, 18000);
console.log(empleado.Hablar("Español"));
console.log(empleado.ToString());
