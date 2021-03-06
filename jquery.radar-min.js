/*
 *	jQuery Radar Plugin
 *
 *	Copyright (c) Dan Betcher
 *	https://www.twitter.com/danbetcher
 *
 *	Documentation:
 *	https://github.com/danbetcher/jquery-radar
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
(function(e){function r(e,t,n){var r;var i;var s;var o;var u;var a;var f;var l;var c;var h=0;u=e.offset();r=u.left;s=u.top;i=r+e.outerWidth();o=s+e.outerHeight();a=t>i?i:t>r?t:r;f=n>o?o:n>s?n:s;l=Math.abs(a-t);c=Math.abs(f-n);return Math.sqrt(l*l+c*c)}function i(n){var r=n.pageX;var i=n.pageY;var s=-1;var o=e([]);while(o[0]=t[++s]){o.triggerHandler("radar",[r,i])}}var t=e([]);var n=e(document);e.event.special.radar={defaults:{max:100,min:0,throttle:0,outOfRange:1},setup:function(e){if(!t[0])n.mousemove(i);t=t.add(this)},add:function(t){var n=t.handler;var i=e.extend({},e.event.special.radar.defaults,t.data);var s=0;var o=0;var u=e(this);t.handler=function(e,t,a){var f=i.max;var l=i.min;var c=i.throttle;var h=+(new Date);var p;var d;var v;var m=i.outOfRange;if(c&&s+c>h){return}s=h;p=r(u,t,a);v=p<f&&p>l;if(m||v){if(v){o=0}else{if(typeof m==="number"&&o>m){return}o++}d=e.radar=1-(p<f?p<l?0:p/f:1);e.distance=p;e.pageX=t;e.pageY=a;e.data=i;return n.call(this,e,d,p)}}},teardown:function(){t=t.not(this);if(!t[0])n.unbind("mousemove",i)}}})(jQuery)