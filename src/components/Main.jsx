import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

import 'antd/dist/antd.css'

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
               </Panel>
                <Panel header="Data Structures" key="2">
                <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="Algorithms" key="3">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
                 <Panel header="Big O Notation" key="4">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
               </Collapse>
     
        </VerticalTimelineElement>
        <VerticalTimelineElement
             className=""
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
               <Title level={3}>Browser Based Technologies</Title>
              <p></p>
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
                 <Panel header="React" key="37">
                 <Paragraph>Vivamus vel mi in quam luctus fermentum id faucibus ligula.</Paragraph>
                 </Panel>
               </Collapse>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className=""
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Deployment</h3>
            <p></p>
           
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className=""
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="">Databases</h3>
            <p>TBA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className=""
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
             <h3 className="">Server-side Development</h3>
             <p>TBA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className=""
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
         >
             <h3 className="">Quality and Performance</h3>
             <p>TBA</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement
            className=""
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="">Agile Management</h3>
            <p>TBA</p>
       </VerticalTimelineElement>
     </VerticalTimeline>
    </>
   );
}
  
export default Main;