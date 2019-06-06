pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh "aws s3 sync . s3://m.58poker.com"
            }
        }
    }
}
