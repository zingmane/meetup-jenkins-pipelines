ARCHIVE_FILENAME="my-app.tar.gz"
DEPLOY_DIR='build/deploy'

def slackParams = { GString message -> [
  teamDomain        : "jenkins-meetup",
  tokenCredentialId : "jenkins-meetup-slack-token",
  channel           : "jenkins-meetup",
  message           : message
]}

pipeline {
  agent {
    docker {
      image 'node:10.16-alpine'
      args '-v ./:/home/node/app'
      args '-v my-app_node_modules:/home/node/app/node_modules/'
    }
  }

  options {
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '3'))
  }

  stages {
    stage('Build Init npm packages') {
      steps {
        sh "npm install"
      }
    }

    stage('Test image') {
      steps {
        sh "npm test"
      }
    }

    stage('Bundle') {
      steps {
        sh "npm prune --production"
        sh "mkdir -p ${DEPLOY_DIR}"
        sh "tar -czf ${DEPLOY_DIR}/${ARCHIVE_FILENAME} src node_modules package.json"
      }
    }

    stage('Artifacts') {
      steps {
        archiveArtifacts artifacts: "${DEPLOY_DIR}/${ARCHIVE_FILENAME}"
      }
    }
  }
}