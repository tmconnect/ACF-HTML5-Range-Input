(function($) {
	function initialize_field($el) {
		var slider = $el.find('.range'),
				units = slider.data('units');
		this.addEventListener("input", function() {
			slider.next('.input-helper').text(slider.val() + units);
		});
	}

	if (typeof acf.add_action !== 'undefined') {
		acf.add_action('ready append', function($el) {
			acf.get_fields({
				type: 'range'
			}, $el).each(function() {
				initialize_field($(this));
			});
		});
	} else {
		$(document).live('acf/setup_fields', function(e, postbox) {
			$(postbox).find('.range').each(function() {
				initialize_field($(this));
			});
		});
	}
})(jQuery);