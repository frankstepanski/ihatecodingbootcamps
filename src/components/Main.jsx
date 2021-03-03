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
   Algorithms, Data Structures, System Design, Programming Paradigm and Design Patterns
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Front End Development</h3>
    <p>
     HTML, CSS, JavaScript, DOM API, and Fetch API
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Front End Development Libraries and Tools</h3>
    <p>
      React, Webpack, Babel, Deployment, etc.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="">Back End Development</h3>
    <p>
      Node and Express (REST API), Relational and Non-Relational Databases, Authentication
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className=""
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    
  >
    <h3 className="">DevOps</h3>
    <p>
      stuff
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className=""
 
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
  >
    <h3 className="">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="v">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
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