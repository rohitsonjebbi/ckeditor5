import { Plugin } from 'ckeditor5/src/core';

import InsertHyphenCommand from './insertHyphenCommand';

export default class HyphenEditing extends Plugin {
	init() {
		// ADDED
		this.editor.commands.add( 'insertHyphen', new InsertHyphenCommand( this.editor ) );
	}
}
