library 'cb-days@master'
def testPodYaml = libraryResource 'podtemplates/vuejs/vuejs-test-pod.yml'
pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }
  environment {
    gcpProject = "core-flow-research"
    repoOwner = "dw"
    shortCommit = "${sh(script: "git rev-parse HEAD", returnStdout: true).trim()[0..6]}"
    targetCDConfiguration = "CD"
    targetReleaseName = "BeeTV Release"
    targetCDProject = "ldonley Demo"
  }
  stages('Test and Build')
  {
    stage('Tests') {
      agent {
        kubernetes {
          label 'nodejs'
          yaml testPodYaml
       }
      }
      steps {
            checkout scm
            container('nodejs') {
              sh '''
                 yarn install
                 yarn test
                 '''
            }
      }
    }
    stage('Build and Push Image') {
      when {
        beforeAgent true
        branch 'main'
      }
      steps {
        kanikoBuildPushGeneric("beetv", shortCommit, "${gcpProject}/${repoOwner}")
        {
          checkout scm
        }
      }
    }
    stage("Trigger CD release") {
        when {
            beforeAgent true
            branch 'main'
        }
        agent any
        steps {
            script {
                node() {
                    checkout scm
                    imageTag = "${env.GIT_COMMIT[0..6]}"
                    cloudBeesFlowTriggerRelease configuration: targetCDConfiguration, parameters: '{"release":{"releaseName":"' + targetReleaseName + '","stages":[{"stageName":"Pre-Prod","stageValue":""},{"stageName":"Prod","stageValue":""},{"stageName":"Quality Assurance (QA)","stageValue":""},{"stageName":"Release Readiness","stageValue":""}],"pipelineName":"' + targetReleaseName + '","parameters":[{"parameterName":"imageTag","parameterValue":'+ imageTag +'}]}}', projectName: targetCDProject, releaseName: targetReleaseName, startingStage: 'Release Readiness'
                }
            }
        }
    }

  }
}
