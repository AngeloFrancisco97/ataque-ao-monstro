new Vue({
	el: '#app',
	data: {
        vidaMonstro: 100,
        vidaJogador: 100,
        vitoria: '',
        cor: '',
        resultado: true,
        randomJ: 0,
        randomM: 0,
        log: [],
        desistir: false,
        corVidaJogador: '',
        corVidaMonstro: '',
    },
    computed: {
        progressoJogador(){
            if(this.vidaJogador <= 20){
                this.corVidaJogador = 'red';
            }else{
                this.corVidaJogador = 'green';
            }
            return {
                width: this.vidaJogador + '%',
                backgroundColor: this.corVidaJogador,
            }
        },
        progressoMonstro(){
            if(this.vidaMonstro <= 20){
                this.corVidaMonstro = 'red';
            }else{
                this.corVidaMonstro = 'green';
            }
            return {
                width: this.vidaMonstro + '%',
                backgroundColor: this.corVidaMonstro,
            }
        }
    },
    methods: {
        ataque() {
            randomJ = (Math.floor(Math.random() * (8 - 5)) + 5);
            randomM = (Math.floor(Math.random() * (10 - 6)) + 6);
            this.vidaMonstro = this.vidaMonstro - randomJ;
            this.vidaJogador = this.vidaJogador - randomM
            this.log.push ({texto: 'JOGADOR ATINGIU MONSTRO COM ' + randomJ, cor: 'lightcoral'});
            this.log.push ({texto: 'MONSTRO ATINGIU JOGADOR COM ' + randomM, cor: 'lightblue'});
            if(this.vidaMonstro <= 0){
                this.vidaMonstro = 0;
                this.vitoria = "Você Ganhou";
                this.cor = "green";
                this.resultado = false;
            }
            if(this.vidaJogador <= 0){
                this.vidaJogador = 0;
                this.vitoria = "Você Perdeu";
                this.cor = "red";
                this.resultado = false;
            }
        },
        ataqueEspecial() {
            randomJ = (Math.floor(Math.random() * (13 - 9)) + 9);
            randomM = (Math.floor(Math.random() * (11 - 8)) + 8);
            this.vidaMonstro = this.vidaMonstro - randomJ
            this.vidaJogador = this.vidaJogador - randomM
            this.log.push ({texto: 'JOGADOR ATINGIU MONSTRO COM ' + randomJ, cor: 'lightcoral'});
            this.log.push ({texto: 'MONSTRO ATINGIU JOGADOR COM ' + randomM, cor: 'lightblue'});
            if(this.vidaMonstro <= 0){
                this.vidaMonstro = 0;
                this.vitoria = "Você Ganhou";
                this.cor = "green";
                this.resultado = false;
            }
            if(this.vidaJogador <= 0){
                this.vidaJogador = 0;
                this.vitoria = "Você Perdeu";
                this.cor = "red";
                this.resultado = false;
            }
        },
        curar() {
            randomJ = (Math.floor(Math.random() * (13 - 9)) + 9);
            randomM = (Math.floor(Math.random() * (11 - 8)) + 8);
            this.vidaJogador = this.vidaJogador - (Math.floor(Math.random() * (10 - 6)) + 6);
            this.vidaJogador = this.vidaJogador + (Math.floor(Math.random() * (12 - 8)) + 8);
            this.log.push ({texto: 'JOGADOR SE CUROU COM ' + randomJ, cor: 'lightcoral'});
            this.log.push ({texto: 'MONSTRO ATINGIU JOGADOR COM ' + randomM, cor: 'lightblue'});
            if(this.vidaMonstro <= 0){
                this.vidaMonstro = 0;
                this.vitoria = "Você Ganhou";
                this.cor = "green";
                this.resultado = false;
            }
            if(this.vidaJogador <= 0){
                this.vidaJogador = 0;
                this.vitoria = "Você Perdeu";
                this.cor = "red";
                this.resultado = false;
            }
            if(this.vidaJogador >= 100){
                this.vidaJogador = 100;
            }
        },
        desistencia(){
            this.desistir = true
        },
        iniciarJogo(){
            this.vidaJogador = 100;
            this.vidaMonstro = 100;
            this.resultado = true;
            this.log = [];
            this.desistir = false
        }
    },
	
});