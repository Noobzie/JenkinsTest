# JenkinsTest
Testing CI/CD with jenkins

Just following tutorial from https://codeforgeek.com/continuous-integration-deployment-jenkins-node-js/

Install and configure jenkins: https://computingforgeeks.com/how-to-install-and-configure-jenkins-on-arch-linux/

Forward port via service (no router needed) use command: ngrok http 8090
and then copy the output link to the gihub webhook so it looks like: https://039459a3.ngrok.io/github-webhook/

Startup project: pm2 start app.js //Jenkins should be configured to start the app
Check if the test runs: mocha
push to repo and jenkins should also be able to run the test    