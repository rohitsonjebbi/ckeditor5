import { Plugin } from 'ckeditor5/src/core';

import HyphenUI from './hyphenUi';
import HyphenEditing from './hyphenEditing';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
export default class Hyphen extends Plugin {
	static get requires() {
		return [ HyphenUI, HyphenEditing, GeneralHtmlSupport ];
	}
}
