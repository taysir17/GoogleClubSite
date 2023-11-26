import { Form } from "./form";

export class Formation {
    constructor(
       public id:string, 
       public titre:string,
       public image:string,
       public nbheure:string,
       public certifie:boolean,
       public prix:number,
       public datedebut:Date,
       public lesmodules:string,
       public domaine:string,
       public payant:boolean,
       public nombredeplace:number,
       public candidat:Form[]
    ){}
}
