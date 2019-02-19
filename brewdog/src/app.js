import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
    beers: [],
    selectedBeerIndex: null,
    selectedBeer: null,
    favouriteBeers:[]
  },
  mounted(){
    this.getBeers()
  },
    methods: {
    getBeers: function(){
      fetch("https://api.punkapi.com/v2/beers")
      .then(response => response.json())
      .then(beers => this.beers = beers)
    },
    beerSelect: function(){
      this.selectedBeer = this.beers[this.selectedBeerIndex];
    },
    addBeerToFavourites: function(){
      this.favouriteBeers.push(this.selectedBeer);
    },
    removeBeersFromFavourites: function(){
      this.favouriteBeers.splice(index, 1)
    }
    }
  });
});
