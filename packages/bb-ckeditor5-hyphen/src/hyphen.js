import { Plugin } from 'ckeditor5/src/core';

import HyphenUI from './hyphenUi';
import HyphenEditing from './hyphenEditing';

export default class Hyphen extends Plugin {
	static get requires() {
		return [ HyphenUI, HyphenEditing ];
	}
}
