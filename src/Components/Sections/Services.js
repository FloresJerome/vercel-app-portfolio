import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import ServiceItem from '../ServiceItem/ServiceItem'
import Title from '../Title/Title'
import { code, design, desktop } from '../../utils/Icons'


function Services() {
    const theme = useTheme()
    return (
        <ServicesStyled id='services' theme={theme}>
            <Title name={'Services'}  />
            <div className="services-con">
                <ServiceItem 
                    icon={design} 
                    title={'Web Design'}
                    bg={theme.colorPurple}
                    shadow={theme.shadowPurple}
                    desc={'Plans, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips. '}
                />
                <ServiceItem 
                    icon={desktop}
                    title={'Game Development'}
                    bg={theme.colorGreenDark}
                    shadow={theme.shadowGreen}
                    desc={'Creating games and describes the design, development and release of a game.'}
                />
                <ServiceItem 
                    icon={code}
                    title={'Web Development'}
                    shadow={theme.shadowPrimary}
                    bg={theme.colorPrimary}
                    desc={'Involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).'}
                />
            </div>
        </ServicesStyled>
    )
}

const ServicesStyled = styled(SectionLayout)`
    background: ${(props) => props.theme.colorBgGrad};
    .services-con{
        margin-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 2rem;
    }
`;

export default Services