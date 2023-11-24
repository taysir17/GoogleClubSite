import { Form } from "./form";

export class Formation {
    constructor(
       public id:string, 
       public titre:string,
       public image:string,
       public nbheure:string,
       public certifie:boolean,
       public datedebut:Date,
       public candidat:Form[]
    ){}
}
