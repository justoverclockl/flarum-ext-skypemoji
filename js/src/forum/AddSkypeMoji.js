/*
 * This file is part of justoverclock/flarum-ext-keywords.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


import app from 'flarum/forum/app';

export default function () {
  // Official Skype Emoticons, copyright to Skype.

  const url = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-skypemoji/';

  let emoticons = {
    ':happy:': 'happy_40x40',
    ':happyeye:': 'happyeyes_40x40',
    ':headbang:': 'headbang_40x40',
    ':clap:': 'clap_40x40',
    ':finger:': 'finger_40x40',
    ':fear:': 'fearful_40x40',
    ':giggle:': 'giggle_40x40',
    ':hang:': 'hungover_40x40',
    ':hyst:': 'hysterical_40x40',
    ':idea:': 'idea_40x40',
    ':love:': 'inlove_40x40',
    ':heart:': 'hearteyes_40x40',
    ':hi:': 'hi_40x40',
    ':angry:': 'angry_40x40',
    ':bandit:': 'bandit_40x40',
    ':blank:': 'blankface_40x40',
    ':bomb:': 'bomb_40x40',
    ':call:': 'call_40x40',
    ':champagne:': 'champagne_40x40',
    ':devil:': 'devil_40x40',
    ':drunk:': 'drunk_40x40',
    ':dull:': 'dull_40x40',
    ':evil:': 'evilgrin_40x40',
    ':envy:': 'envy_40x40',
    ':emo:': 'emo_40x40',
    ':neutr:': 'expressionless_40x40',
    ':party:': 'festiveparty_40x40',
    ':hphone:': 'headphones_40x40',
    ':holiday:': 'holidayspirit_40x40',
    ':robot:': 'laughrobot_40x40',
    ':monkey:': 'laughmonkey_40x40',
    ':like:': 'like_40x40',
    ':mute:': 'lipssealed_40x40',
    ':cry:': 'loudlycrying_40x40',
    ':makeup:': 'makeup_40x40',
    ':lord:': 'movember_40x40',
    ':ass:': 'mooning_40x40',
    ':mmm:': 'mmm_40x40',
    ':angrys:': 'angryface_40x40',
    ':xmas:': 'xmassarcastic_40x40',
    ':yawn:': 'yawn_40x40',
    ':wtf:': 'wtf_40x40',
    ':xd:': 'xd_40x40',
    ':worry:': 'worry_40x40',
    ':wonder:': 'wonder_40x40',
    ':wink:': 'wink_40x40',
    ':tongue:': 'winktongueout_40x40',
    ':whew:': 'whew_40x40',
    ':whistle:': 'whistle_40x40',
    ':wait:': 'wait_40x40',
    ':conf:': 'veryconfused_40x40',
    ':time:': 'waiting_40x40',
    ':notme:': 'wasntme_40x40',
    ':upd:': 'upsidedownface_40x40',
    ':vamp:': 'vampire_40x40',
    ':mah:': 'unamused_40x40',
    ':tired:': 'tired_40x40',
    ':swear:': 'swear_40x40',
    ':sweat:': 'sweat_40x40',
    ':hand:': 'talktothehand_40x40',
    ':ops:': 'sweatgrinning_40x40',
    ':surpr:': 'surprised_40x40',
    ':star:': 'stareyes_40x40',
    ':snake:': 'snake_40x40',
    ':football:': 'americanfootball2_40x40',
    ':angel:': 'angel_40x40',
    ':banana:': 'banana_40x40',
    ':avocado:': 'avocadolove_40x40',
    ':burger:': 'burger_40x40',
    ':cake:': 'cake_40x40',
    ':pc:': 'computer_40x40',
    ':cool:': 'cool_40x40',
    ':coolmonkey:': 'coolmonkey_40x40',
    ':coolbot:': 'coolrobot_40x40',
    ':tear:': 'cry_40x40',
    ':dia:': 'diamond_40x40',
    ':doh:': 'doh_40x40',
    ':dream:': 'dream_40x40',
    ':facepalm:': 'facepalm_40x40',
    ':crossed:': 'fingerscrossed_40x40',
    ':fire:': 'fire_40x40',
    ':shock:': 'llsshock_40x40',
    ':movie:': 'movie_40x40',
    ':wc:': 'ontheloo_40x40',
    ':penguin:': 'penguin_40x40',
    ':pizza:': 'pizza_40x40',
    ':phone:': 'phone_40x40',
    ':poop:': 'poop_40x40',
    ':puke:': 'puke_40x40',
    ':punch:': 'punch_40x40',
    ':pool:': 'poolparty_40x40',
    ':racoon:': 'racoon_40x40',
    ':rain:': 'rain_40x40',
    ':red:': 'red_40x40',
    ':rock:': 'rock_40x40',
    ':rofl:': 'rofl_40x40',
    ':rudolf:': 'rudolfidea_40x40',
    ':santass:': 'santamooning_40x40',
    ':selfie:': 'selfie_40x40',
    ':shake:': 'shake_40x40',
    ':frozen:': 'shivering_40x40',
    ':zzz:': 'sleepy_40x40',
    ':slap:': 'slap_40x40',
    ':smoke:': 'smoke_40x40',
    ':smirk:': 'smirk_40x40',
    ':snail:': 'snail_40x40',
    ':train:': 'steamtrain_40x40',
    ':stop:': 'stop_40x40',
    ':nerd:': 'tauri_40x40',
  };

  mapIdsToPaths(emoticons, url, '', '');

  document.querySelectorAll('p').forEach((e) => (e.innerHTML = replaceEmoticons(e.innerHTML, emoticons)));

  function replaceEmoticons(text, emotes) {
    return Object.keys(emotes).reduce((result, emote) => {
      return result.replace(new RegExp(RegExpEscape(emote), 'gi'), function (match) {
        return ((img) => (img != null ? '<img src="' + img + '" class="skypemoji"/>' : match))(emotes[match]);
      });
    }, text);
  }

  function RegExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }

  function mapIdsToPaths(emotes, url, prefix) {
    Object.keys(emotes).forEach((id) => {
      emotes[id] = url + prefix + emotes[id] + '.gif';
    });
  }
}
