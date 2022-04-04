/**
 * @module link/link
 */
import LinkEditing from './linkediting';
import LinkUI from './linkui';
import { Plugin } from 'ckeditor5/src/core';
import AutoLink from './autolink';

/**
 * The link plugin.
 *
 * This is a "glue" plugin that loads the {@link module:link/linkediting~LinkEditing link editing feature}
 * and {@link module:link/linkui~LinkUI link UI feature}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Link extends Plugin {
	static get requires() {
		return [ LinkEditing, LinkUI, AutoLink ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Link';
	}
}
