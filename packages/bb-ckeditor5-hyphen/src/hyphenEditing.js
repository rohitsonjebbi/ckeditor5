import { Plugin } from 'ckeditor5/src/core';

import HyphenCommand from './hyphenCommand';

export default class HyphenEditing extends Plugin {
	init() {
		// ADDED
		this.editor.commands.add( 'hyphen', new HyphenCommand( this.editor ) );
	}
}
