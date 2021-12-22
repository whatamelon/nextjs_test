export class EpisodeModel {

    public id!: number;
    public name!: string;
    public air_date!: string;
    public episode!: string;
    public residents!: Array<string>;
    public url!: string;
    public created!: string;

    public constructor(
        val:any
    ) {
        this.id = val.id;
        this.name = val.name;
        this.air_date = val.air_date;
        this.episode = val.episode;
        this.residents = val.residents;
        this.url = val.url;
        this.created = val.created;
    }
}