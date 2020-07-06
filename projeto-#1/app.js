new Vue({
    el: '#app',
    data: {
        healthPlayer: 100,
        healthMonster: 100,
        isGameOver: false,
        isPlayerWinner: false,
        healQuantity: 2,
        actionsHistory: []
    },
    methods: {
        checkGame(){
            if(this.healthPlayer == 0 || this.healthMonster == 0){
                this.isGameOver = true;
                if(this.healthPlayer > 0){
                    this.isPlayerWinner = true;
                }
            }
        },

        monsterAttack(weak = false) {
            if(!this.isGameOver){
                const hit = Math.min(weak ? Math.ceil(Math.random()*10) : 15, this.healthPlayer);
                this.healthPlayer -= hit;
                this.addHistory('monster',`O monstro bateu ${hit}%`);
                this.checkGame();
            }
        },
        playerAttack() {
            if(!this.isGameOver){
                const hit = Math.min(5, this.healthMonster);
                this.healthMonster -= hit;
                this.addHistory('player', `O jogador bateu ${hit}%`);
                this.checkGame();
            }
            this.monsterAttack();
            
        },
        specialAttack(){
            if(!this.isGameOver){
                const hit = Math.min(20, this.healthMonster);
                this.healthMonster -= hit;
                this.addHistory('player', `O jogador bateu ${hit}%`);
                this.checkGame();
            }
            this.monsterAttack();
        },
        heal(){
            if(this.healQuantity == 0 || this.healthPlayer == 100){
                return;
            }
            if(!this.isGameOver){
                const hit =  Math.min(20, 100 - this.healthPlayer);
                this.healthPlayer += hit;
                this.addHistory('player',`O jogador ganhou ${hit}%`);
                this.healQuantity--;
            }
            this.monsterAttack(true);
        },
        quit(){
            if(!this.isGameOver){
                this.healthPlayer = 0;
                this.addHistory('player','O jogador desistiu')
                this.checkGame();
            }
        },
        addHistory(type, message) {
            this.actionsHistory.push({
                type,
                message,
            });
        }

    }
})