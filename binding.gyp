{
	'targets': [{
		'target_name': 'raspiSonarAddon',
		'sources': [ 
            'src/pingRead.cc', 
            'src/raspiSonar.cc', 
            'src/sonarWorker.cc' ],
		'include_dirs': [
            '/usr/local/include', 
            "<!(node -e \"require('nan')\")" ],
		'ldflags': [ '-lwiringPi' ]
	}]
}
