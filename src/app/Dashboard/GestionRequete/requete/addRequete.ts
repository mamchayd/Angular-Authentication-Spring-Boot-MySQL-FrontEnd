export class AddRequete{
    name: string;
    prenom:string;
    email:string;
    type:string;
    titre:string;
    description:string;
    username:string;
    
    constructor(name: string,prenom:string,email:string,type: string,titre:string ,description: string,username:string) {
        this.name = name;
        this.prenom=prenom;
        this.type = type;
        this.titre=titre;
        this.email = email;
        this.description = description;
        this.username=username;
    }
 

}