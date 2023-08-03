pipeline {
    agent {
        docker {
            image 'node:18.16.0-alpine'
        }
    }
    stages {
        // stage('Checkout') {
        //     steps {
        //         git 'https://github.com/shivamadsk/node-app-with-tests.git'
        //     }
        // }
        stage ('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage ('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage ('Code Scan') {
            steps {
                sh 'npx eslint app.js'
            }
        }
    }
}