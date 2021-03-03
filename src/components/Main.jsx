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

          <p>Pellentesque id arcu mi. Curabitur est turpis, tristique consectetur massa sit amet, imperdiet mattis lorem.
             Nunc auctor in arcu sodales pellentesque. Suspendisse nibh sapien, euismod sed ipsum id,
             tristique facilisis libero. Fusce nisi elit, viverra at sollicitudin et, eleifend vel purus.
             Sed eros risus, pretium id ultrices eu, sollicitudin vel lectus.</p>
          <p>Vivamus vel mi in quam luctus fermentum id faucibus ligula. Suspendisse potenti. 
              Donec tempus quis ante at laoreet. Pellentesque blandit augue non interdum ultricies.
              Praesent elementum lectus quis magna luctus lobortis a eu neque. Praesent condimentum feugiat
              lacus at convallis. Morbi id porttitor magna. Quisque ullamcorper pulvinar nunc, sed auctor
             nunc ultricies nec. Integer consequat lacus in neque venenatis condimentum.</p>
               
        </VerticalTimelineElement>
        <VerticalTimelineElement
              className=""
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Computer Science</h3>
            <ul>
                  <li>Design Patterns</li>
                  <li>Data Structures</li>
                  <li>Algorithms</li>
                  <li>Big O Notation</li>
                </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
             className=""
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
             <h3 className="vertical-timeline-element-title">Browser Based Technologies</h3>
            
            <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>DOM and Fetch API</li>
            <li>Local Storage, Session Storage, IndexedDB</li>
            <li>React.js</li>
            </ul>

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