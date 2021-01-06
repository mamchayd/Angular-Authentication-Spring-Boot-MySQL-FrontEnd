export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    role: string[];
    password: string;

    constructor(name: string, username: string, email: string, password: string,role: string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        if(role=='user'){
            this.role = ['user'];
        }
        if(role=='admin'){
            this.role=['admin'];
        }
        if(role=='pm'){
            this.role=['pm'];
        }
        
    }
}
