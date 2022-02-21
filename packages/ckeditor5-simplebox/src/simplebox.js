// simplebox/simplebox.js

import SimpleBoxEditing from './simpleboxediting';
import SimpleBoxUI from './simpleboxui';
import { Plugin } from 'ckeditor5/src/core';

export default class SimpleBox extends Plugin {
	static get requires() {
		return [ SimpleBoxEditing, SimpleBoxUI ];
	}
}
