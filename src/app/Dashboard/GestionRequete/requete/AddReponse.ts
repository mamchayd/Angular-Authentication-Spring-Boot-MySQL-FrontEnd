export class AddReponse{
    
    titre:string;
    description:string;
    email:string;
    idRequete:number;
    
    constructor(idRequete: number,email:string,titre:string ,description: string) {
        this.idRequete = idRequete;
        this.email = email;
        this.titre=titre;
        this.description = description;
    }
 

}