new Vue({
  el: '#app',
  data: {
    playerHp: 100,
    monsterHp: 100,
    isGameOn: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.isGameOn = true;
      this.playerHp = 100;
      this.monsterHp = 100;
      this.turns = [];
    },

    giveUp: function() {
      this.isGameOn = !this.isGameOn;
    },

    playerAttack: function() {
      let monsterDamage = Math.floor(Math.random() * 10) + 3;
      this.monsterHp -= monsterDamage;
      this.turns.unshift({
        text: `Player attack for ${monsterDamage}`,
        isPlayer: true
      });

      let playerDamage = Math.floor(Math.random() * 10) + 3;
      this.playerHp -= playerDamage;
      this.turns.unshift({
        text: `Monster attack for ${playerDamage}`,
        isPlayer: false
      });

      if (this.playerHp <= 0) {
        alert('You Lost');
        this.isGameOn = !this.isGameOn;
      } else if (this.monsterHp <= 0) {
        alert('You Won');
        this.isGameOn = !this.isGameOn;
      }
    },

    specialAttack: function() {
      let monsterDamage = Math.floor(Math.random() * 15) + 8;
      this.monsterHp -= monsterDamage;
      this.turns.unshift({
        text: `Player special attack for ${monsterDamage}`,
        isPlayer: true
      });

      let playerDamage = Math.floor(Math.random() * 13) + 5;
      this.playerHp -= playerDamage;
      this.turns.unshift({
        text: `Monster hard attack for ${playerDamage}`,
        isPlayer: false
      });

      if (this.playerHp <= 0) {
        alert('You Lost');
        this.isGameOn = !this.isGameOn;
      } else if (this.monsterHp <= 0) {
        alert('You Won');
        this.isGameOn = !this.isGameOn;
      }
    },

    heal: function() {
      let playerHeal = Math.floor(Math.random() * 10) + 3;
      this.playerHp += playerHeal;
      this.turns.unshift({
        text: `Player heal for ${playerHeal}`,
        isPlayer: true
      });

      let playerDamage = Math.floor(Math.random() * 10) + 3;
      this.playerHp -= playerDamage;
      this.turns.unshift({
        text: `Monster hard attack for ${playerDamage}`,
        isPlayer: false
      });

      if (this.playerHp <= 0) {
        alert('You Lost');
        this.isGameOn = !this.isGameOn;
      } else if (this.monsterHp <= 0) {
        alert('You Won');
        this.isGameOn = !this.isGameOn;
      } else if (this.playerHp >= 100) {
        this.playerHp = 100;
      }
    }
  }
});
