{
	'targets': [{
		'target_name': 'pingReadExtension',
		'sources': [ 'pingRead.cc'],
		'include_dirs': ['/usr/local/include', "<!(node -e \"require('nan')\")" ],
		'ldflags': [ '-lwiringPi' ]
	}]
}
