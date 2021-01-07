export class SignUpInfo {
    name: string;
    prenom: string;
    date: Date;
    tel:string;
    username: string;
    adress:string;
    email: string;
    role: string[];
    password: string;

    constructor(name: string,prenom:string,date:Date,tel:string, username: string,adress:string ,email: string, password: string,role: string) {
        this.name = name;
        this.prenom=prenom;
        this.date=date;
        this.tel=tel;
        this.username = username;
        this.adress=adress;
        this.email = email;
        this.password = password;
        if(role=='user'){
            this.role = ['user'];
        }
        if(role=='admin'){
            this.role=['admin'];
        }
        if(role=='etudiant'){
            this.role=['etudiant'];
        }
        if(role=='parent'){
            this.role=['parent'];
        }
        if(role=='professeur'){
            this.role=['professeur'];
        }
        if(role=='consultant'){
            this.role=['consultant'];
        }
        

        
    }
}
