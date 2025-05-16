const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      userHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      attacksLog: [],
    };
  },
  computed: {
    monsterHealthBar() {
      return { width: (this.monsterHealth < 0 ? 0 : this.monsterHealth) + '%' };
    },
    userHealthBar() {
      return { width: (this.userHealth < 0 ? 0 : this.userHealth) + '%' };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 === 0 && this.currentRound !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const damage = getRandomNumber(5, 12);
      this.monsterHealth -= damage;
      this.addLog('player', 'attack', damage);
      this.attackPlayer();
    },
    specialAttackMonster() {
      if (this.mayUseSpecialAttack) {
        this.currentRound++;
        const damage = getRandomNumber(10, 25);
        this.monsterHealth -= damage;
        this.addLog('player', 'special attack', damage);
        this.attackPlayer();
      } else {
        alert('Special attack only available every 3 rounds!');
      }
    },
    healPlayer() {
      this.currentRound++;
      const heal = getRandomNumber(8, 20);
      const actualHeal = this.userHealth + heal > 100 ? 100 - this.userHealth : heal;
      this.userHealth = Math.min(this.userHealth + heal, 100);
      this.addLog('player', 'heal', actualHeal);
      this.attackPlayer();
    },
    attackPlayer() {
      if (this.winner) return;
      const damage = getRandomNumber(8, 15);
      this.userHealth -= damage;
      this.addLog('monster', 'attack', damage);
    },
    surrender() {
      this.winner = 'monster';
    },
    resetGame() {
      this.userHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.attacksLog = [];
    },
    addLog(who, what, value) {
      this.attacksLog.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  watch: {
    userHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.userHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    },
  },
});

app.mount('#game');
