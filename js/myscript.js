/*jshint esversion: 6 */

var mycomponent = new Vue({
  el: "#vue__wrap",
  data: {
    isVisible: true,
    isHidden: false,
    projects: [
      {
        name: "Whatsapp",
        img: "whatsapp.png",
        url: "vue-boolzapp",
      },
      {
        name: "Spotify",
        img: "spoty.png",
        url: "html-css-spotifyweb",
      },
      {
        name: "Filters",
        img: "spotyfilter.png",
        url: "vue-dischi",
      },
      {
        name: "Digital Ocean",
        img: "digitalocean.png",
        url: "html-css-digitalocean",
      },
      {
        name: "Landrick",
        img: "landrick.png",
        url: "proj-html-vuejs",
      },
      {
        name: "Booldoctors",
        img: "booldoctors.png",
        url: "booldoctors",
      },
    ],
  },
  mounted() {
    this.changeActive();
  },
  methods: {
    changeActive: function () {
      setInterval(() => {
        this.isVisible = false;
        this.isHidden = true;
      }, 2500);
    },
  },
});

const anim = anime.timeline({});
anim
  .add({
    targets: "#hexagon path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutQuint",
    duration: 1500,
  })
  .add({
    targets: "#hexagon #M",
    duration: 800,
    opacity: 1,
    easing: "easeInOutQuint",
  });
