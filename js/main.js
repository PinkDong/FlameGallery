require.config({

	baseUrl: 'js',

	paths: {
		'jquery': 'libs/jquery.1.11.3.min',
		'flamegallery':'plugins/jquery.flamegallery'
	},
	shim: {
		'flamegallery':{
			deps: ['jquery']
		}
	},

	urlArgs : 'ts='+ (new Date()).getTime()

});

require(['init']);