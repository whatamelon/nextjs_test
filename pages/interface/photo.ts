export class PhotoModel {

    public albumId: number;
    public id: number;
    public title: string;
    public url: string;
    public thumbnailUrl: string;

    public constructor(
        val:any
    ) {
        this.albumId = val.albumId;
        this.id = val.id;
        this.title = val.title;
        this.url = val.url;
        this.thumbnailUrl = val.thumbnailUrl;
    }

    public changeTitle(title:string) {
        this.title = title;
    }
}