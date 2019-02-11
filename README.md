Chishiki - UBC XDHACKS 4th PLACE OUT OF 200 PARTICIPANTS
=====================

Mobile / Web App to provide healthcare infrastructure for rural communities.

### Final Product

https://docs.google.com/presentation/d/12s2K7LhGhNTCpb905hGA49MPoACi1kqUOTh6b5NnvJU/edit?usp=sharing

## Built With

React Native, Expo, React, Express, Node, Knex and PSQL

## Getting Started

1. Clone this repository
2. Clone the web app here: https://github.com/veilance/ruralhealth-dashboard
3. Clone the mobile app here: https://github.com/2ManyProjects/XDHacks
4. Navigate to web app and install all dependencies by running ``npm install``
5. Navigate to chishiki-server and install all dependencies by running ``npm install``
6. In the chishiki-server repository intiate a psql database called ruralhealth, run knex migrate:rollback, knex migrate:latest and knex seed:run to seed the database on psql
7. Navigate to the chishiki mobile app and install all dependencies by running ``npm install``

## Run the servers

1. In a separate terminal window, navigate to chishiki-server and run ``npm start``
2. Run the chishiki web app by running ``yarn start``
3. Run the chishiki mobile app by running ``expo start``
4. Congratulations you can now see our dashboard, mobile app and our backend infrastructure

## Future Work

This mobile/web app was completed over 24 hours from February 9th, 2019 to February 10th, 2019. It placed 4th out of 200 participants. We are incredibility proud of what we created but we also understand that the app has a lot of work that needs to be done to be completed.

Some future work would be:

1. The web dashboard has to implement the dashboard that the UX/UI designer laid out in the presentation slides attached
2. The web dashboard needs to get the information from the database and refresh

## Contributors

- UX/UI Designer - Joey Limmena - https://www.linkedin.com/in/joeylimmena/
- Software Developer (Mobile) - Shaiv Kamat
- Researcher - Nene Wayo Suigura


## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
