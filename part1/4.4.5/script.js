let ladder = {
    step: 0,
    up() {
      this.step++;
      console.log(`up to ${this.step}`)
      return this;
    },
    down() {
      this.step--;
      console.log(`down to ${this.step}`)
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log(`show ${this.step}` );
      return this;
    }
  };

  ladder.up().up().down().showStep();