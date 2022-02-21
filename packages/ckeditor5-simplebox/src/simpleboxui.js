// simplebox/simpleboxui.js
/* eslint-disable dot-notation */
import {
	Plugin
} from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';

export default class SimpleBoxUI extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;

		// The "simpleBox" button must be registered among the UI components of the editor
		// to be displayed in the toolbar.
		editor.ui.componentFactory.add( 'simpleBox', locale => {
			// The state of the button will be bound to the widget command.
			const command = editor.commands.get( 'insertSimpleBox' );

			// The button will be an instance of ButtonView.
			const buttonView = new ButtonView( locale );

			buttonView.set( {
				// The t() function helps localize the editor. All strings enclosed in t() can be
				// translated and change when the language of the editor changes.
				label: t( 'Simple Box' ),
				withText: true,
				tooltip: true
			} );

			// Bind the state of the button to the command.
			buttonView.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute the command when the button is clicked (executed).
			this.listenTo( buttonView, 'execute', () => editor.execute( 'insertSimpleBox' ) );

			const trackChangesEditing = editor.plugins.get( 'TrackChangesEditing' );

			trackChangesEditing.enableCommand( 'insertSimpleBox' );

			return buttonView;
		} );
	}
}
