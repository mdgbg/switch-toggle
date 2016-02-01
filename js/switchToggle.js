(function($) {
    $.fn.switchToggle = function(options) {
        // Set defaults, extendable with options
        var settings = $.extend({
            states: ['enabled', 'disabled'],
            titles: ['', '']
        }, options);
        
        var makeToggle = function() {
            // Wrap element in template
            $(this).attr('checked', true).addClass('toggleInit').wrap('<label class="switch" />').wrap('<span />');
            
            var element = $(this);
            var parent = element.parents('.switch');
            var state = element.val();
            
            // Replace setting with inline data attributes
            $.each(['states', 'titles'], function(index, value) {
                if( element.data(value) ) {
                    settings[value] = element.data(value).split('|');
                }
            });
            
            var stateIndex = $.inArray(state, settings.states);
            
            // Set toggle state
            element.on('setState', function() {
                var attributes = {
                    'class': 'switch ' + state
                };
                
                if( settings.titles[stateIndex] ) {
                    attributes.title = settings.titles[stateIndex];
                    attributes.rel = 'tooltip';
                }
                
                parent.tooltip('destroy').removeAttr('rel title data-original-title').attr(attributes);
            });
            
            // Change toggle state
            element.on('change', function() {
                stateIndex++;
                
                if( stateIndex == settings.states.length ) {
                    stateIndex = 0;
                }
                
                state = settings.states[stateIndex];
                element.val(settings.states[stateIndex]).trigger('setState');
                parent.tooltip('show');
            });
            
            // Set initial state
            element.trigger('setState');
        };
        
        return this.filter('input:not(.toggleInit)').each(makeToggle);
    };
}(jQuery));