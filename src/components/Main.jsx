import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Main() {

    return (
        <>
         <VerticalTimeline layout={'1-column-right'}>
          <VerticalTimelineElement
             className=""
             contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
          <h3 className="">Coding Bootcamp Topic Guide</h3>
        
          <p>
         
          </p>
        </VerticalTimelineElement>
      <VerticalTimelineElement
    className=""
   
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Computer Science</h3>
    <p>
   TBA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Browser Based Technologies</h3>
    <p>
    TBA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Deployment</h3>
    <p>
      TBA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="">Databases</h3>
    <p>
     TBA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className=""
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    
  >
    <h3 className="">Server-side Development</h3>
    <p>
      TBA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className=""
 
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
  >
    <h3 className="">Quality and Performance</h3>
    <p>
      TBA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   
  />
   <VerticalTimelineElement
    className=""
 
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
  >
    <h3 className="">Agile Management</h3>
    <p>
      TBA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   
  />
</VerticalTimeline>
        </>
      );
}
  
export default Main;