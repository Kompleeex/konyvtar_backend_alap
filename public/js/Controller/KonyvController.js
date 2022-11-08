import KonyvekView from "../View/KonyvekView.js";
import KonyvekPublicView from "../View/KonyvekPublicView.js";
import KonyvModel from "../Model/KonyvModel.js";



class KonyvController {
    #adatok = [];
    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content"); 
        const konyvmodel = new KonyvModel(token);
        this.vegpont = "konyvek"
        $("#admin").on("click",()=>{
            konyvmodel.adatBe(this.vegpont, this.konyvAdatok);
            
        });
        $("#public").on("click",()=>{
            konyvmodel.adatBe(this.vegpont, this.konyvPublicAdatok);

        });

        
        $(window).on("modosit",(event)=>{
            konyvmodel.adatModosit(this.vegpont, event.detail);
        });
        $(window).on("torol",(event)=>{
            konyvmodel.adatTorol(this.vegpont, event.detail);
            new KonyvekView(konyvmodel.getKonyvek(),$('article'));  
            
        })




    }

    konyvAdatok(tomb) {

        const szuloElem=$('article');
        new KonyvekView(tomb, szuloElem);
    }

    konyvPublicAdatok(tomb){

        const szuloElem=$('article');
        new KonyvekPublicView(tomb, szuloElem);
    }
}

export default KonyvController;