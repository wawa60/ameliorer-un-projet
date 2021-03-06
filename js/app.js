/*global app, $on */
(function () {
	'use strict';

	/**
	 * Configure une nouvelle liste Todo.
	 *
	 * @param {string} name Le nom de votre nouvelle todo liste.
	 */
	function Todo(name) {
		this.storage = new app.Store(name);
		this.model = new app.Model(this.storage);
		this.template = new app.Template();
		this.view = new app.View(this.template);
		this.controller = new app.Controller(this.model, this.view);
	}
	/**
	 * Crée une nouvelle tache
	 */
	var todo = new Todo('todos-vanillajs');

	/**
	 * Ajoute la route de la page dans l' url ''|| active || completed
	 */
	function setView() {
		todo.controller.setView(document.location.hash);
	}
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
})();
