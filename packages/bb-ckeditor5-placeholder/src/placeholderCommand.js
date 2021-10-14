import { Command } from 'ckeditor5/src/core';

export default class PlaceholderCommand extends Command {
	execute( { value } ) {
		const editor = this.editor;
		const selection = editor.model.document.selection;

		editor.model.change( writer => {
			const placeholder = writer.createElement( 'placeholder', {
				...Object.fromEntries( selection.getAttributes() ),
				name: value
			} );

			// ... and insert it into the document.
			editor.model.insertContent( placeholder );

			// Put the selection on the inserted element.
			writer.setSelection( placeholder, 'on' );
		} );
	}

	refresh() {
		const model = this.editor.model;
		const selection = model.document.selection;

		const isAllowed = model.schema.checkChild( selection.focus.parent, 'placeholder' );

		this.isEnabled = isAllowed;
	}
}
