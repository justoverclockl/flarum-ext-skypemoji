import app from 'flarum/forum/app';

export default function () {
  // Official Skype Emoticons, copyright to Skype.

  const url = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-skypemoji/';

    let emoticons = {
      ':happy:': 'happy_40x40',
      '!(': 'd570c4b3b8d8fc4d',
      '!o': 'ae4e17f5b9624e2f',
      '!z': 'b9cbb6884788aa62',
      '!K': '2cde79cfe74c6169',
      '!\\': '374120835234cb29',
      '!U': '3407bf911ad2fd4a',
      '!H': '3407bf911ad2fd4a',
      '!p': 'e838e5e34d9f240c',
      '!S': '0536d670860bf733',
      'o_O': '8e128fa8dc1de29c',
      '!D': '9f2ac5d4b53913d7',
      '!F': 'd31223e81104544a',
      '!L': '577ade91d46d7edc',
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
