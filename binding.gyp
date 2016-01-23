{
	'targets': [{
		'target_name': 'raspiSonarAddon',
		'sources': [ 'pingRead.cc', 'raspiSonar.cc', 'sonarWorker.cc'],
		'include_dirs': ['/usr/local/include', "<!(node -e \"require('nan')\")" ],
		'ldflags': [ '-lwiringPi' ]
	}]
}
