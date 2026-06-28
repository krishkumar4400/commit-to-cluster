# what is devops

# software development process

## phases

1. requirement gathering and analysis

- product features
- who are the users
- what are the usage
- user requirement
- market state

1. planning

- what do we want
- it determines cost, resource and risk

1. Design

- design architects
- architects will design the software based on input from previous phase
- architects will provide design documents these will be basically roadmap for devellopers

1. development phase

- this is where developers will write the software code
- software development based on inputs of design documents

1. Testing

- sotware will be tested by the software testers for any defects
- software will be promoting to the production only after fixing the issue
- testing quality assurance
- identify the defects to ensure the quality product is good

1. Deployment

- in this phase software will be deployed to the production environment so users can start using the product
- it is the responsibility of operation team to make sure the software is up and running all the time.

1. Maintenance

- it is the balance between regular changes and uptime.
- systems health, performance, uptime with regular changes.

## Entire process

Requirement gathering -> planning -> designing -> development -> testing -> deployment & maintenance

Thsi entire process is called software development lifecycle(SDLC)

## Models in SDLC

- Models are like different paths or roadways to reach the same destination as you choose a road way based on different factors like cost, risk and time taken to reach your destination.

1. waterfall: in waterfall model the next phase begins when the previous phase completed. when all the phase completed all things are tested. and then maintenance starts. it is very difficult to go back change anything in the previous phase. it takes months of time.

2. Agile: used when you are not sure about all the requirements.

3. Spiral

4. Big Bang etc.

## Automation

- code build
- code testing
- software testing
- infra changes
- deployment
etc

## dev and ops team start working together

## what is continious integration

continious integration is an automated process in devops which generates software and features quickly and efficiently.

working in a team it is an ideal practice to store all the code a same centralized place. this centralized repository is called as version control system. like github

## need of ci

everyday developers will pull and push code to such a repo several times in a day so code changes and commit happens continuously this code will be moved to build the server.
on build server this code will be build, tested and evaluated which is called as software or artifacts at this stage this software or artifact will be stored in a software repository. artifact or software is really an archi your files generated from build process
based on the programming language this artifact will be packaged in a different format
for example: artifact packaging format could be war/jar in java, DLL/EXE/MSI in windows, ZIP/TAR
from a repo it will shipped to server for further testing, after deploying this artifact on the server, software testers can further conduct software testing. and once they approved this can shipped to production server.

- problem:
suppose developers write code for 3 weeks and as per process these 3 weeks of code moved to build server now the problem begins such as lots of errors, bugs, and build failures.
it means the defective code was collecting for 3 weeks
now developers has to fix all these errors, and they have to rewrite the code on several places lot of rework really need.

- solution:
this could have been much easier if the defect or problem was detected at very early in the process
so the code was merged in the repository but not really integrated

the solution is very simple a continuous process- after every single commit from the developers the code should be build and tested so no waiting and collecting code with bugs.
but developers commist lots of code several time in a day so it's not humanly possible do a build and release several times in a day.
means a lot of manual process so that's simple just automate it.

so when the developer commit any code automate the process- fetch the code, build it, test it and send the notification if there is any failure.
as soon as developer recieves the notification they fix it and push it again. so again build and test new changes if it's good then it be used and stored in software repository.
so any defetcts can be detected as soon as merged with the code.

code -> fetch -> build -> test -> notify -> feedback.

this automated process is known as continuous integration(ci).

goal of CI: the goal of ci is to detect defects at very early stage so it is not multiply

- IDE~

1. eclips
2. visual studio
3. atom
4. pycharm

- version control system(store and version code)~

1. git
2. svn
3. tfs
4. perforce

- build tools~

1. maven, ant, gradle
2. msbuild, visual build
3. IBM urban code
4. make
5. grunt

- software repositories(store repositories)~

1. sonatype nexus
2. jfrog artifactory
3. archiva
4. cloudsmith package
5. grunt

- CI tools(that integrates everything)~

1. jenkins
2. circleci
3. teamcity
4. bamboo ci
5. github actions
6. cruise control

## continuous delivery

continuous delivery is an automated process of 