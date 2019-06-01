pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh "aws s3 sync . s3://www.58poker.com"
                sh "ansible localhost -m file -a 'state=directory path=/var/www/html/${JOB_NAME} mode=0755'"
                sh "ansible localhost -m synchronize -a 'src=${WORKSPACE}/ dest=/var/www/html/${JOB_NAME}/ group=no owner=no'"
            }
        }
    }
}
