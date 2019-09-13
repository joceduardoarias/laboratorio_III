namespace entidades{

    export abstract class  persona{

        //ATRIBUTOS
        private apellido:string;
        private dni:number;
        private nombre:string;
        private sexo:string;

        public GetApellido():string{
            return this.apellido;
        } 
        public GetNombre():string{
            return this.nombre;
        }
        public GetSexo():string{
            return this.sexo;
        }
        public GetDni():number{
            return this.dni;
        }
        //METODOS
        public constructor (nombre:string,apellido:string,dni:number,sexo:string)
        {
            this.apellido=apellido;
            this.dni=dni;
            this.nombre= nombre;
            this.sexo= sexo;
        }
        public abstract Hablar(idioma:string): string;
        public ToString():string
        {
            return this.apellido+" - "+this.nombre+" - "+this.sexo+" - "+this.dni;
        }
    }
}