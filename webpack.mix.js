// webpack.mix.js
let mix = require('laravel-mix');

mix.sass('sass/main.scss', 'dist');
mix.options({
  processCssUrls: false
});
