

class KosarView{
    #i;
    #ids = [];
    constructor(parent, items){
        this.#i=1;
        $(parent).html(`<table><thead>`);
        for (const item of items) {
            
            $('table').append("<tr><td>"+ item.id+"</td><td>"+item.cim+"</td><td>"+item.szerzo+"</td><td>"+item.ar+"</td><td id='"+this.#i+"' class='torol'>Törlés</td></tr>");
            this.#i++;
            
        }
        $(parent).append(`</thead><tbody></tbody></table>`);
        $('.torol').on("click",()=>{
            this.kattintasTrigger("torol");
        });
        
    }


    kattintasTrigger(es){
        const esemeny = new CustomEvent(es,{detail:event.target.id});
        window.dispatchEvent(esemeny);
    }
}

export default KosarView;