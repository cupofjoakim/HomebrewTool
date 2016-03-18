/* Simple storing-api for cross-view communication amongst siblings */

let store = {};

const Storer = {
	getValue: function(key) {
		if (key in store) {
			return store[key];
		} else {
			return false;
		}
	},
	updateValue: function(key, val){
		store[key] = val;
	}
};

module.exports = Storer;