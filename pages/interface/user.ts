export class UserModel {

    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: object;
    public phone: string;
    public website: string;
    public company: object;

    public constructor(
        val:any
    ) {
        this.id = val.id;
        this.name = val.name;
        this.username = val.username;
        this.email = val.email;
        this.address = val.address;
        this.phone = val.phone;
        this.website = val.website;
        this.company = val.company;
    }

    public updateUserName(value:string):void {
        this.username = value;
    }

    public hello() {
        console.log(`안녕!`);
    }
}

class ExSingleton {

    static instance: ExSingleton;

    private constructor() {
        console.log("constructor called!");
    }

    public static getInstance(): ExSingleton {
        if (!ExSingleton.instance) {
            ExSingleton.instance = new ExSingleton();
        }
        return ExSingleton.instance;
    }


    public hello() {
        console.log(`hello Singleton!`);
    }
}

let exsingleton:ExSingleton = ExSingleton.getInstance();
exsingleton.hello();