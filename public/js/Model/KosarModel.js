
class KosarModel{
#kosarTomb=[];
#kosarTombB=[];
constructor(){
    
}

getKosar(){
    return this.#kosarTomb;
}

torol(i){
    for (let index = 0; index < this.#kosarTomb.length; index++) {
        if(index != i-1){
            this.#kosarTombB.push(this.#kosarTomb[index]);
        }}
    this.#kosarTomb = this.#kosarTombB;
    this.#kosarTombB=[];
}

kosarba(item){
    this.#kosarTomb.push(item);
    
}
}

export default KosarModel