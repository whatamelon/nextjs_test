export class LocationModel {

    public id!: number;
    public name!: string;
    public type!: string;
    public dimension!: string;
    public residents!: Array<string>;
    public url!: string;
    public created!: string;

    public constructor(
        val:any
    ) {
        this.id = val.id;
        this.name = val.name;
        this.type = val.type;
        this.dimension = val.dimension;
        this.residents = val.residents;
        this.url = val.url;
        this.created = val.created;
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