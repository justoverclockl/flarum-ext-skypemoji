# SkypeMoji

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://poser.pugx.org/justoverclock/flarum-ext-skypemoji/v)](https://packagist.org/packages/justoverclock/flarum-ext-skypemoji) [![Total Downloads](https://poser.pugx.org/justoverclock/flarum-ext-skypemoji/downloads)](https://packagist.org/packages/justoverclock/flarum-ext-skypemoji)

A [Flarum](http://flarum.org) extension. Add Skype emoji to flarum

### Available icon code

![GAq3GhZ3Ze](https://user-images.githubusercontent.com/79002016/123519228-42e4b000-d6aa-11eb-88a1-2f94d8d5435f.gif)



```
:happy: :happyeye: :headbang: :clap: :finger: :fear: :giggle: :hang: :hyst: :idea: :love: :heart: :hi: :angry: 
:bandit: :blank: :bomb: :call: :champagne: :devil: :drunk: :dull: :evil: :envy: :emo: :neutr: :party: :hphone: 
:holiday: :robot::monkey: :like: :mute: :cry: :makeup: :lord: :ass: :mmm: :angrys: :xmas: :yawn: :wtf: :xd: 
:worry: :wonder: :wink::tongue: :whew: :whistle: :wait: :conf: :time: :notme: :upd: :vamp: 
:mah: :tired: :swear: :sweat: :hand: :ops: :surpr::star: :snake: :football: :angel: :banana: :avocado: 
:burger: :cake: :pc: :cool: :coolmonkey: :coolbot: :tear: :dia: :doh: :dream: :facepalm: :crossed: :shock:
:fire: :movie: :wc: :penguin: :pizza: :phone: :poop: :puke: :pool: :punch: :rain: :racoon: :red: :rain: :rock: :rofl:
:rudolf: :santass: :selfie: :shake: :frozen: :zzz: :smoke: :slap: :smirk: :snail: :train: :stop: :nerd:

``` 

### Change icon size

To change the size simply add this code to your custom css (admin panel) with your preferred size:

```css
img.skypemoji {
  width: 19px; // change this number to increase or decrease the size
}

```


### Installation

Install with composer:

```sh
composer require justoverclock/flarum-ext-skypemoji:"*"
```

### Updating

```sh
composer update justoverclock/flarum-ext-skypemoji:"*"
php flarum migrate
php flarum cache:clear
```

### Links

- [Packagist](https://packagist.org/packages/justoverclock/flarum-ext-skypemoji)
- [GitHub](https://github.com/justoverclockl/flarum-ext-skypemoji)
