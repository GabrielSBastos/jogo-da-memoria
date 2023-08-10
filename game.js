let game = {

    techs: ['bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'],

    cards : null,


    createCardsFromTechs: function () {

    this.cards = [];

    for (let tech of techs) {
        this.cards.push(this.createPairFromTech(tech))
    }


    return this.cards.flatMap(pair => pair);
},

    createPairFromTech:function (tech) {

    return [{
        id: this.createIdwithTech(tech),
        icon: tech,
        flipped: false,
    }, {
        id: this.createIdwithTech(tech),
        icon: tech,
        flipeed: false,
    }]

},

createIdwithTech: function(tech) {
    return tech + parseInt(Math.random() * 1000);
}
}