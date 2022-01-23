pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo 'Construir'
            }
        }
        stage ('SSH transfer') {
            steps {
                sshPublisher (
                    continueOnError: false, failOnError: true,
                    publishers: [
                        sshPublisherDesc (
                            configName: "Rush",
                            verbose: true,
                            transfers: [
                                sshTransfer (
                                    sourceFiles: "**/**",
                                    removePrefix: "",
                                    remoteDirectory: "/heroes-app/",
                                    execCommand: ""
                                )
                            ]
                        )
                    ]
                )
            }
        }
    }
}
