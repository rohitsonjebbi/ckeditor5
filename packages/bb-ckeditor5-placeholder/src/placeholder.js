import { Plugin } from 'ckeditor5/src/core';

import PlaceholderEditing from './placeholderEditing';
import PlaceholderUI from './placeholderUI';

export default class Placeholder extends Plugin {
	static get requires() {
		return [ PlaceholderEditing, PlaceholderUI ];
	}
}
