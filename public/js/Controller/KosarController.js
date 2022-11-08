import KosarModel from "../Model/KosarModel.js";
import KosarView from "../View/KosarView.js";

class KosarController{

    constructor(){
        const kosarmodel = new KosarModel();

        $(window).on("kosarba",(event)=>{
            kosarmodel.kosarba(event.detail);
            
        })

        $(window).on("torol",(event)=>{
            kosarmodel.torol(event.detail);
            this.display('article',kosarmodel.getKosar());
        })

        $('#kosar').on('click',()=>{
            this.display('article',kosarmodel.getKosar());
        });

        

        

    }

    display(parent,items){
        new KosarView(parent,items);
    }

}

export default KosarController;