import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Collapse } from 'antd';
import { List, Typography, Divider } from 'antd';
import ReactPlayer from 'react-player'

import 'antd/dist/antd.css'

const { Panel } = Collapse;
const { Title, Paragraph, Text, Link } = Typography;


function Main() {
    const text = `
    Pellentesque id arcu mi. Curabitur est turpis, tristique consectetur massa sit amet, imperdiet mattis lorem.
             Nunc auctor in arcu sodales pellentesque. `;
    return (
        <>
         <VerticalTimeline layout={'1-column-right'}>
          <VerticalTimelineElement
            
            className=""
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >

          <Title level={2}>Coding Bootcamp Topic Guide</Title>

          <Paragraph>Pellentesque id arcu mi. Curabitur est turpis, tristique consectetur massa sit amet, imperdiet mattis lorem.
             Nunc auctor in arcu sodales pellentesque. Suspendisse nibh sapien, euismod sed ipsum id,
             tristique facilisis libero. Fusce nisi elit, viverra at sollicitudin et, eleifend vel purus.
             Sed eros risus, pretium id ultrices eu, sollicitudin vel lectus.</Paragraph>
          <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula. Suspendisse potenti. 
              Donec tempus quis ante at laoreet. Pellentesque blandit augue non interdum ultricies.
              Praesent elementum lectus quis magna luctus lobortis a eu neque. Praesent condimentum feugiat
              lacus at convallis. Morbi id porttitor magna. Quisque ullamcorper pulvinar nunc, sed auctor
             nunc ultricies nec. Integer consequat lacus in neque venenatis condimentum.</Paragraph>
     
        <Divider />

        <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula. Suspendisse potenti. 
              Donec tempus quis ante at laoreet. Pellentesque blandit augue non interdum ultricies.
              Praesent elementum lectus quis magna luctus lobortis a eu neque. Praesent condimentum feugiat
              lacus at convallis. Morbi id porttitor magna. Quisque ullamcorper pulvinar nunc, sed auctor
             nunc ultricies nec. Integer consequat lacus in neque venenatis condimentum.</Paragraph>

        </VerticalTimelineElement>
        <VerticalTimelineElement
              className=""
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
  
          <Title level={3}>Computer Science</Title>
          <Collapse accordion>
              <Panel header="Design Patterns" key="1">
              <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
              <List size="large">
                    <List.Item>item 1</List.Item>
                    <List.Item>item 2</List.Item>
                    <List.Item> 
                        <Link href="https://www.espn.com" target="_blank">item 3</Link>
                     </List.Item>
              </List>
               </Panel>
                <Panel header="Data Structures" key="2">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                <List size="large">
                    <List.Item>
                        <ReactPlayer controls={true} height ="480px" width="854px" url='https://www.youtube.com/watch?v=41GSinwoMYA' />
                    </List.Item>
                    <List.Item>item 2</List.Item>
                    <List.Item> 
                        <Link href="https://www.espn.com" target="_blank">item 3</Link>
                     </List.Item>
                 </List>
                 </Panel>
                 <Panel header="Algorithms" key="3">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 <List size="large">
                    <List.Item>item 1</List.Item>
                    <List.Item>item 2</List.Item>
                    <List.Item> 
                        <Link href="https://www.espn.com" target="_blank">item 3</Link>
                     </List.Item>
              </List>
                 </Panel>
                 <Panel header="Big O Notation" key="4">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="System Design" key="5">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
               </Collapse>
     
        </VerticalTimelineElement>
        <VerticalTimelineElement
             className=""
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
               <Title level={3}>Browser Based Technologies</Title>
             
              <Collapse accordion>
              <Panel header="HTML" key="1">
              <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
               </Panel>
                <Panel header="CSS" key="2">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="JavaScript" key="3">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="DOM API" key="4">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="Fetch API" key="5">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="Local Storage, Session Storage, IndexedDB" key="6">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="React" key="7">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="Typescript" key="8">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
               </Collapse>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className=""
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <Title level={3}>Deployment</Title>
            <Collapse accordion>
              <Panel header="Netlify" key="1">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
               </Panel>
                <Panel header="Heroku" key="2">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="AWS" key="3">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
               </Collapse>
           
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className=""
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <Title level={3}>Databases</Title>
            <Collapse accordion>
              <Panel header="Postgres" key="1">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
               </Panel>
                <Panel header="MongoDB" key="2">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
               </Collapse>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className=""
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
             <Title level={3}>Server-side Development</Title>
             <Collapse accordion>
              <Panel header="Express" key="1">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
               </Panel>
                <Panel header="User Authentication" key="2">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="Sequelize and Knex" key="3">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="PERN Stack (Postgres, Express, React and Node)" key="4">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
               </Collapse>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className=""
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
         >
             <Title level={3}>Quality and Performance</Title>
             <Collapse accordion>
              <Panel header="Testing (Unit, Integration, End-to-End)" key="1">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
               </Panel>
                <Panel header="Webpack" key="2">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="Lazy Loading" key="3">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
               </Collapse>
         </VerticalTimelineElement>
         <VerticalTimelineElement
            className=""
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <Title level={3}>Agile Management</Title>
            <Collapse accordion>
              <Panel header="Kanban, Project Management" key="1">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
               </Panel>
                <Panel header="Issues" key="2">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="User Stories" key="3">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="Sprints" key="4">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
               </Collapse>
       </VerticalTimelineElement>
     </VerticalTimeline>
    </>
   );
}
  
export default Main;