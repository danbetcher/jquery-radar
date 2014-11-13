/*! https://github.com/danbetcher/jquery-radar by @danbetcher */
;(function($){
    
    var elems = $([]);
    var doc = $(document);
    
    $.event.special.radar = {
        
        // Establish our default settings
        defaults: {
            max: 100,
            min: 0,
            throttle: 0,
            outOfRange: 1
        },
        
        // Initialize and bind the mouse movement events
        setup: function(data) {
            
            if (!elems[0])
                doc.mousemove(handle);
            
            elems = elems.add(this);
            
        },
        
        add: function(o) {
            
            var handler = o.handler;
            var data = $.extend({}, $.event.special.radar.defaults, o.data);
            var lastCall = 0;
            var nFiredOutOfRange = 0;
            var hoc = $(this);
            
            o.handler = function(e, pageX, pageY) {
                
                var max = data.max;
                var min = data.min;
                var throttle = data.throttle;
                var date = +new Date;
                var distance;
                var radar;
                var inRange;
                var outOfRange = data.outOfRange;
                
                if (throttle && lastCall + throttle > date) {
                    return;
                }
                
                lastCall = date;
                
                distance = calcDistance(hoc, pageX, pageY);
                inRange = distance < max && distance > min;
                
                if (outOfRange || inRange) {
                    
                    if (inRange) {
                        // If the cursor is in range, then reset the nFiredOutOfRange counter
                        nFiredOutOfRange = 0;
                    } else {
                        
                        // Check if outOfRange is a number and increase the nFiredOutOfRange counter
                        if (typeof outOfRange === 'number' && nFiredOutOfRange > outOfRange) {
                            return;
                        }
                        nFiredOutOfRange++;
                    }
                
                    radar = e.radar = 1 - (
                        distance < max ? distance < min ? 0 : distance / max : 1
                    );
                    
                    e.distance = distance;
                    e.pageX = pageX;
                    e.pageY = pageY;
                    e.data = data;
                    
                    return handler.call(this, e, radar, distance);
                
                }
                
            };
            
        },
        
        // Cleanup and unbind events
        teardown: function(){
            
            elems = elems.not(this);
            
            if (!elems[0])
                doc.unbind('mousemove', handle);
            
        }
        
    };
    
    function calcDistance(el, x, y) {
        
        // Determine the distance from the cursor to the closest edge of the element
        var left;
        var right;
        var top;
        var bottom;
        var offset;
        var cX;
        var cY;
        var dX;
        var dY;
        var distance = 0;
        
        // Get the position and size of the element
        offset = el.offset();               // The top left corner of the element
        left = offset.left;                 // The left edge of the element
        top = offset.top;                   // The top edge of the element
        right = left + el.outerWidth();     // The right edge of the element
        bottom = top + el.outerHeight();    // The bottom edge of the element
        
        cX = x > right ? right : x > left ? x : left;
        cY = y > bottom ? bottom : y > top ? y : top;
        
        dX = Math.abs( cX - x );
        dY = Math.abs( cY - y );
        
        return Math.sqrt( dX * dX + dY * dY );
            
    }
    
    function handle(e) {
        
        var x = e.pageX;
        var y = e.pageY;
        var i = -1;
        var fly = $([]);
        
        while (fly[0] = elems[++i]) {
            fly.triggerHandler('radar', [x,y]);
        }
        
    }
    
}(jQuery));