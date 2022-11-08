class KonyvPublicView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem =elem;
        // console.log("KonyvView");
        $('.konyvContainer').append("<h3>"+elem.cim+"</h3><h5>szerző:"+elem.szerzo+"</h5><h5>Ár:"+elem.ar+"</h5><span class='kosarba' id='kosarba"+elem.id+"'>Kosárba</span>");
        this.sorElem = szuloElem.children('tr:last-child');
        this.kosarba = $(`#kosarba${elem.id}`);
        this.kosarba.on("click", ()=>{
            this.kattintasTrigger("kosarba");
        });

    }


    kattintasTrigger(es){
        const esemeny = new CustomEvent(es,{detail:this.#elem});
        window.dispatchEvent(esemeny);
    }

}

export default KonyvPublicView;