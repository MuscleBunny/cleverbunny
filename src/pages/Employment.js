import * as React from 'react';
import CardContent from '@mui/material/CardContent';

import ColorCard from '../components/ColorCard'
import TypographyCaption from '../components/TypographyCaption'

const divStyle = {
  width: "85%",
  marginBottom: "50px",
  position: "relative",
}

export default function Employment() {
  return (
    <div style={divStyle} id={"back-to-Employment"}>
    <TypographyCaption>
      Employment
    </TypographyCaption>
      <CardContent>
        <ColorCard caption={"Momnt"} period={'AUG 2020 - Feb 2022'} contentCap={'Senior Full Stack Developer'}
          co={'Artis Technologies'}>
          <ul>
            <li>Developed product tours with React for a new feature, improving customer adoption by 25% leading to increased revenue by $1M.</li>
            <li>Created a compatible, custom client dashboard, reducing support tickets by 45%.</li>
            <li>Created Typescript  reusable components and services to consume Rest API's  using Component-based architecture provided by React.</li>
            <li>Designed multiple dynamic and browser compatible pages using React and Redux.</li>
            <li>Adopted for data storage, designed different schemas and data access services to communicate with MongoDB.</li>
          </ul>
        </ColorCard>
        <ColorCard caption={"Collabera"} period={'JAN 2020 - AUG 2020'}
          contentCap={'Senior Full Stack Developer'}
          co={'Collabera'}>
          <ul>
            <li>Designed, developed and relaunched responsive websites of clients.</li>
            <li>Built cross-browser compatible and accessibility compliant websites, resulting in 22% faster load time than industry change.</li>
            <li>Produced multiple visual elements of web applications by translating UI/UX design.</li>
            <li>Designed MongoDB schema and implemented data access service to Create, Read, Update and Delete data (CRUD).</li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"Deloitte"}
          co={"Deloitte"}
          period={'OCT 2018 - DEC 2019'}
          contentCap={'Senior Full Stack Developer'}>
          <ul>
            <li>Launched 30 new website and blogs incorporating the latest social media applications.</li>
            <li>Integrated existing software into 13 upgraded, modified systems for higher performance.</li>
            <li>Designed, developed, and modified 25+ software systems and custom components.</li>
            <li>Implemented an express-graphql  library to mount a GraphQL  API server on the user-configured HTTP  endpoint.</li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"Chatify"}
          period={'JAN 2018 - OCT 2018'}
          co={'X2O Media'}
          contentCap={'Senior Full Stack Developer'}>
          <ul>
            <li>Developed and maintained a platform for real-time communication based on Node.js and Socket.IO.</li>
            <li>Built an Express.js + Socket.IO web server.</li>
            <li>Refactored code.</li>
            <li>Made unit tests and performance tests.</li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"Avatar Engines"}
          period={'MAR 2017 - NOV 2017'}
          co={'Avatar Engines LLC'}
          contentCap={'Full Stack Developer'}>
            <ul>
              <li>Worked on providing API endpoints with Node.js/Inversify and MongoDB.</li>
              <li>Built from scratch admin platform for managing platform's database entities and users using React, Node.js, and Mongoose.</li>
              <li>Implemented complex UI components with React/TypeScript and SCSS.</li>
              <li>Improved the UX by creating several DnD-based components.</li>
              <li>Wrote scripts to use and manipulate data from various sources.</li>
            </ul>
        </ColorCard>
      </CardContent>
    </div>
  );
}
