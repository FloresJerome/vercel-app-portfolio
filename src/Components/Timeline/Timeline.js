import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { brief, education } from '../../utils/Icons';
import TimelineItem from '../TimelineItem/TimelineItem';

function Timeline() {
    const theme= useTheme()
    return (
        <TimelineStyled theme={theme}>
            <div className="education-timeline timeline">
                <TimelineItem 
                    duration={'2012 - 2015'}
                    title={'Rizal Technological University'}
                    desc={'Electrical Engineering Technology'}
                    icon={education}
                    
                />
                <TimelineItem
                    duration={'2017 - 2020'}
                    title={'Rizal Technological University'}
                    desc={'Bachelors of Science in Industrial Technology'}
                    icon={education}
                    
                />
                <TimelineItem
                    duration={'Feb 2023'}
                    title={'Kodego Bootcamp'}
                    desc={'Full Stack Web Development'}
                    icon={education}
                />
            </div>
            <div className="jobs-timeline timeline">
                <TimelineItem
                    duration={'2015 - 2016'}
                    title={'Construction Project Coordinator'}
                    desc={'Collecting data and tracking project accomplishment and providing status updates and progress reports.'}
                    icon={brief}
                />
                <TimelineItem
                    duration={'2017 - 2023'}
                    title={'System Integrator'}
                    desc={'Integrating several system into one system or in app and testing the network and automation equipment to ensure effectiveness.'}
                    icon={brief}
                />
                {/* <TimelineItem
                    duration={'2019 - Present'}
                    title={'Software Engineer'}
                    desc={'I worked as a Senior Engineer. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    icon={brief}
                /> */}
            </div>
        </TimelineStyled>
    )
}

const TimelineStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 2rem;
    .timeline{
        background-color: ${(props) => props.theme.colorBg5};
        padding: 2rem;
        border-radius: 10px;
    }

    .jobs-timeline{
        .icon{
            left: -10px;
        }
    }
`;

export default Timeline