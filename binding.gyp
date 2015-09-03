{
	'targets': [{
		'target_name': 'pingRead',
		'sources': [ 'pingRead.cc'],
		'include_dirs': ['/usr/local/include', "<!(node -e \"require('nan')\")" ],
		'ldflags': [ '-lwiringPi' ]
	}]
}
