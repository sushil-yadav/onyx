(function (enyo, scope) {

	/**
	* _onyx.Checkbox_ is a box that shows or hides a checkmark when clicked. The
	* {@link enyo.Checkbox#event:onChange} event is fired when the box is clicked. Call 
	* `getValue()` toretrieve a boolean indicating whether the box is currently checked.
	* 
	* ```
	* {kind: 'onyx.Checkbox', onchange: 'checkboxClicked'}
	* 
	* checkboxClicked: function (sender) {
	* 	if (sender.getValue()) {
	* 		this.log('I've been checked!');
	* 	}
	* }
	* ```
	*
	* @class  onyx.Checkbox
	* @extends enyo.Checkbox
	* @public
	*/
	enyo.kind(
		/** @lends  enyo.Checkbox.prototype */ {

		/**
		* @private
		*/
		name: 'onyx.Checkbox',

		/**
		* @private
		*/
		classes: 'onyx-checkbox',

		/**
		* @private
		*/
		kind: 'enyo.Checkbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
		* @private
		*/
		handlers: {
			// prevent double onchange bubble in IE
			onclick: ''
		},

		/**
		* @private
		*/
		tap: function (sender, e) {
			if (!this.disabled) {
				this.setChecked(!this.getChecked());
				this.bubble('onchange');
			}
			return !this.disabled;
		},

		/**
		* Override enyo.Input dragstart handler, to allow drags to propagate for Checkbox
		* 
		* @private
		*/
		dragstart: enyo.nop
	});

})(enyo, this);