import { Plugin } from 'ckeditor5/src/core';

import { ButtonView } from 'ckeditor5/src/ui';

export default class HyphenUi extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;

		// to be displayed in the toolbar.
		editor.ui.componentFactory.add( 'hyphen', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'hyphenate' ),
				tooltip: true,
				withText: true
			} );

			// Disable the placeholder button when the command is disabled.
			const command = editor.commands.get( 'hyphen' );
			view.bind( 'isEnabled' ).to( command );

			// Execute the command when the dropdown item is clicked (executed).
			this.listenTo( view, 'execute', () => {
				editor.execute( 'hyphen' );
			} );
			return view;
		} );
	}
}
