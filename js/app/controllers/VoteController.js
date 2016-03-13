function VoteController() {
    this.votes = 0;
    this.start = this.votes;

    this.incrementVotes = function () {
        if (this.votes <= this.start)
            this.votes++;
    };

    this.decrementVotes = function () {
         if (this.votes > this.start)
            this.votes--;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);