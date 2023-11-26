import { Form } from "./form";

export class Message {
    constructor(
        public id:string,
        public msg:string, 
        public user:Form,
        public reponse:string
     ){}
}
