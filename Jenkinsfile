pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -f docker/Dockerfile -t pranil0712/ai-learning-platform:1.0 .'
            }
        }
        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push pranil0712/ai-learning-platform:1.0'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'helm upgrade --install ai-app kubernetes/Helm'
            }
        }
    }
}