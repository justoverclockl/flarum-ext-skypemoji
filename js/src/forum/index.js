
/*
 * This file is part of justoverclock/flarum-ext-twitchmoji.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import AddSkypeMoji from './AddSkypeMoji';

app.initializers.add('justoverclock/flarum-ext-skypemoji', () => {
  extend(CommentPost.prototype, ['oncreate', 'onupdate'], AddSkypeMoji);
});
