new Vue({
  el: '#app',
  data: {
    playerHp: 100,
    monsterHp: 100,
    isGameOn: false
  },
  methods: {
    startGame: function() {
      this.isGameOn = true;
      this.playerHp = 100;
      this.monsterHp = 100;
    },

    giveUp: function() {
      this.isGameOn = !this.isGameOn;
    },

    playerAttack: function() {
      this.monsterHp -= Math.floor(Math.random() * 10) + 3;
      this.playerHp -= Math.floor(Math.random() * 10) + 3;
      if (this.playerHp <= 0) {
        alert('You Lost');
        this.isGameOn = !this.isGameOn;
      } else if (this.monsterHp <= 0) {
        alert('You Won');
        this.isGameOn = !this.isGameOn;
      }
    },

    specialAttack: function() {
      this.monsterHp -= Math.floor(Math.random() * 15) + 5;
      this.playerHp -= Math.floor(Math.random() * 15) + 7;
      if (this.playerHp <= 0) {
        alert('You Lost');
        this.isGameOn = !this.isGameOn;
      } else if (this.monsterHp <= 0) {
        alert('You Won');
        this.isGameOn = !this.isGameOn;
      }
    },

    heal: function() {
      this.playerHp += Math.floor(Math.random() * 10) + 3;
      this.playerHp -= Math.floor(Math.random() * 10) + 3;
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
