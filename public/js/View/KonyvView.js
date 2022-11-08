class KonyvView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem =elem;
        // console.log("KonyvView");
        $('table').append("<tr><td>"+this.#elem.id+"</td><td>"+this.#elem.cim+"</td><td>"+this.#elem.szerzo+"</td><td>"+this.#elem.ar+"</td><td id='mod"+this.#elem.id+"' class='modosit'>Módosít</td><td id='del"+this.#elem.id+"' class='torol'>Töröl</td></tr>");
        this.sorElem = szuloElem.children('tr:last-child');

        this.modositElem=$(`#mod${this.#elem.id}`);
        this.torolElem=$(`#del${this.#elem.id}`);
        this.modositElem.on('click', ()=>{
            this.#elem.cim = "bármi";
            this.kattintasTrigger("modosit");
        });
        this.torolElem.on("click",()=>{
            this.kattintasTrigger("torol");
        });
    }   


    kattintasTrigger(es){
        const esemeny = new CustomEvent(es,{detail:this.#elem});
        window.dispatchEvent(esemeny);
    }

}

export default KonyvView;