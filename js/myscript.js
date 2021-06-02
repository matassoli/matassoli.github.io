/*jshint esversion: 6 */

var mycomponent = new Vue({
  el: "#vue__wrap",
  data: {
    isVisible: true,
    isHidden: false,
  },
  mounted() {
    this.changeActive();
  },
  methods: {
    changeActive: function() {
      setInterval(() => {
        this.isVisible = false;
        this.isHidden = true;
      }, 50);
    },

  }

});


const anim = anime.timeline({});
anim
  .add({
    targets: '#hexagon path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuint',
    duration: 1500,
  })
  .add({
    targets: '#hexagon #M',
    duration: 800,
    opacity: 1,
    easing: 'easeInOutQuint',
  });
