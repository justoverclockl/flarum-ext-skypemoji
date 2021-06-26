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

    };

  mapIdsToPaths(emoticons, url,'','');

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

    function mapIdsToPaths(emotes, url, prefix, size) {
      Object.keys(emotes).forEach((id) => {
        emotes[id] = url + prefix + emotes[id] + size + '.gif';
      });
    }
}

//http://localhost/flarum/public/assets/extensions/justoverclock-welcomebox/blush_40x40.gif
