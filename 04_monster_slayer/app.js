new Vue({
    el: '#app',
    data: {
        playerHealth: 95,
        monsterHealth: 100,
        startNewGame: false,
        log: []
    },
    computed: {
        dymicallyHealthbarForPlayer: function() {
            return {
                width: this.playerHealth + "%"
            };
        },

        dymicallyHealthbarForMonster: function() {
            return {
                width: this.monsterHealth + "%"
            };
        },
    },
    methods: {
        heal: function() {
            dameMon = Math.floor(Math.random(1,10)*10)
            healHuman = Math.floor(Math.random(5,10)*10)
            this.playerHealth =  this.playerHealth + healHuman - dameMon
            this.log.unshift({
                isPlayer: true,
                text: "player heal " + healHuman + " hp"
            });
            this.log.unshift({
                isPlayer: false,
                text: "demon hits " + dameMon + " dame"
            });
            console.log(Math.floor(Math.random(5,10)*10))
        },
        attack: function(step) {
            dameMon = Math.floor(Math.random(1,10)*10)
            dameHuman = Math.floor(Math.random(1,10)*10)
            this.playerHealth =  this.playerHealth - dameHuman
            this.monsterHealth =  this.monsterHealth - dameMon
            this.log.unshift({
                isPlayer: true,
                text: "player hits " + dameHuman + " dame"
            });
            this.log.unshift({
                isPlayer: false,
                text: "demon hits " + dameMon + " dame"
            });
            if (this.monsterHealth < 1) {
                alert("you win");
            }
            if (this.playerHealth < 1) {
                alert("you lose");
            }
        },
        specialAttack: function(step) {
            dameMon = Math.floor(Math.random(1,10)*10)
            dameHuman = Math.floor(Math.random(1,10)*10)
            this.playerHealth =  this.playerHealth - dameHuman
            this.monsterHealth =  this.monsterHealth - dameMon
            this.log.unshift("player hits " + dameHuman + " dame")
            this.log.unshift({
                isPlayer: true,
                text: "player hits " + dameHuman + " dame"
            });
            this.log.unshift({
                isPlayer: false,
                text: "demon hits " + dameMon + " dame"
            });
            this.log.unshift("monster hits " + dameMon + " dame")
            if (this.monsterHealth < 1) {
                alert("okke, you win");
            }
            if (this.playerHealth < 1) {
                alert("oh fuck, you lose");
            }
        },
        giveUp: function(step) {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.startNewGame = false

        }
    }
});