//Funções construtoras

const Hotel = function(){

    this.nome = "Hotel do Fernando"
    this.quantidadeSuites = 30
    let suitesOcupadas = 25

    this.reservar = function(){
        if (suitesOcupadas < this.quantidadeSuites){

            suitesOcupadas++
        }else{
            console.log("Hotel lotado")
        }}
        console.log("ocupadas: " + suitesOcupadas)
    }
const hotel = new Hotel()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.nome = "Fernando"