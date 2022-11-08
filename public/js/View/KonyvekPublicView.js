import KonyvPublicView from "./KonyvPublicView.js";

class KonyvekPublicView {
    constructor(tomb, szuloElem) {
        szuloElem.html(`<div class='konyvContainer'> </div>`);
        this.tablaElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tablaElem.children('tbody');

        tomb.forEach(konyv => {
            const konyvem = new KonyvPublicView(konyv,this.tbodyElem);
            
        });
    }
}

export default KonyvekPublicView;