import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Main() {

    return (
        <>
         <VerticalTimeline layout={'1-column-right'}>
          <VerticalTimelineElement
                className="vertical-timeline-element-lead"
               contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
               contentArrowStyle={{ borderLeft: '7px solid  rgb(33, 150, 243)' }}
               iconStyle={{ background: 'rgb(33, 150, 243)', color: '#2196f3' }}
          >
          <h3 className="">Coding Bootcamp Topic Guide</h3>
          <p>TBA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
              className=""
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Computer Science</h3>
            <p>TBA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
             className=""
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
             <h3 className="vertical-timeline-element-title">Browser Based Technologies</h3>
             <p>TBA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className=""
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Deployment</h3>
            <p>TBA</p>
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