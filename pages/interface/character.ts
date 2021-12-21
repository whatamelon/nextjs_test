import { EpisodeModel } from "./episode";
import { LocationModel } from "./location";

export class CharacterModel {

    public id!: number;
    public name!: string;
    public status!: string;
    public species!: string;
    public type!: string;
    public gender!: string;
    public origin!: string;
    public location!: LocationModel;
    public image!: string;
    public episode!: Array<EpisodeModel>;
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