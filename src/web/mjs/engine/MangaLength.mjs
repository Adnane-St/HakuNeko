export default class MangaLength {

    constructor( manga ) {
        //this.id = Symbol();
        console.log("bookmarked");
        this.id = manga.id;
        this.len = manga.length;
    }
}