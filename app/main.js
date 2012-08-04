/*jshint browser:true, forin:true, noarg:true, noempty:true, eqeqeq:true, laxbreak:true, bitwise:true, strict:true, undef:true, curly:true, immed:true, latedef:true, newcap:true, nonew:true, maxerr:50 */
/*global require:false, requirejs:false */

requirejs.config({
    paths : {
        jquery : '../resources/js/libs/jquery-1.7.2',
        json2 : '../resources/js/libs/json2',
        underscore : '../resources/js/libs/underscore'
    },
    shim : {
        'underscore' : {
            exports : '_'
        },

        'json2' : {
            exports : 'JSON'
        },

        'jquery' : {
            exports : 'jquery'
        }
    },
    config : {
    	i18n : {
            locale: "nl"
        }
    }
});

require([ 'i18n!nls/str', 'nls/str', 'nls/nl/str'], function() {
	console.log("App started.")
});
