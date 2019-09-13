/// <reference path="./persona.ts"/>
namespace entidades {

  export  class empleado extends persona{

        private legajo : number;
        private sueldo : number;

        public GetLegajo():number{
            return this.legajo;
        }
        public GetSuedo():number{
            return this.sueldo;
        }

        public constructor(nombre:string,apellido:string,dni:number,sexo:string,legajo:number,sueldo:number)
        {
            super(nombre,apellido,dni,sexo);
            this.legajo=legajo;
            this.sueldo= sueldo;
        }
        public Hablar(idioma:string):string
        {
           return "El empleado habla "+idioma;
        }
        public ToString():string
        {
            return super.ToString()+this.legajo+this.sueldo;
        }
    }
}
