({
	baseUrl : "app",
	out : 'build/main.js',
	name : 'main',
	optimize : "none",
	locale : '',
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
    }
})