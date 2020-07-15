<?php
/**
 * Utilisations de pipelines par jsLexicalTools
 *
 * @plugin     jsLexicalTools
 * @copyright  2019
 * @author     Sylvain
 * @licence    GNU/GPL
 * @package    SPIP\jsLexicalTools\Pipelines
 */

if (!defined('_ECRIRE_INC_VERSION')) return;

function jsLexicalTools_insert_head_css($flux) {
	return $flux;
}

function jsLexicalTools_insert_head($flux) {
	if (!$js_bundle = find_in_path('js/jsLexicalTools.dist.js')) {
		if ($js_bundle = find_in_path('js/jsLexicalTools.debug.js'))
			$flux .= '<script type="text/javascript" src="'.$js_bundle.'"></script>
			';
	}
	else
		$flux .= '<script type="text/javascript" src="'.$js_bundle.'"></script>
		';
	return $flux;
}

function jsLexicalTools_header_prive($flux) {
	return $flux;
}