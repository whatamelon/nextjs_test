export class CharacterModel {

    public id!: number;
    public name!: string;
    public status!: string;
    public species!: string;
    public type!: string;
    public gender!: string;
    public origin!: NameAndUrl;
    public location!: NameAndUrl;
    public image!: string;
    public episode!: Array<string>;
    public url!: string;
    public created!: string;

    public constructor(
        val:any
    ) {
        this.id = val.id;
        this.name = val.name;
        this.status = val.status;
        this.species = val.species;
        this.type = val.type;
        this.gender = val.gender;
        this.origin = val.origin;
        this.location = val.location;
        this.image = val.image;
        this.episode = val.episode;
        this.url = val.url;
        this.created = val.created;
    }
}

type NameAndUrl = () => {
    name: string;
    url: string;
}