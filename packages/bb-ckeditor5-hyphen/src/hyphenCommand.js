import { Command } from 'ckeditor5/src/core';

export default class HyphenCommand extends Command {
	execute() {
		const editor = this.editor;
		const content = '&shy;';
		const viewFragment = editor.data.processor.toView( content );
		const modelFragment = editor.data.toModel( viewFragment );

		editor.model.insertContent( modelFragment );

		// editor.model.change(writer =>{
		//    const content = '&shy;';
		//   const viewFragment = editor.data.processor.toView( content );
		//   const modelFragment = editor.data.toModel( viewFragment );

		//   editor.model.insertContent( modelFragment );
		// });
	}
}
