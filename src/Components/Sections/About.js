import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import about from '../../img/about2.jpg'
import Title from '../Title/Title'
import Button from '../Button/Button'
import {download} from '../../utils/Icons'
import shape1 from '../../img/shape1.png'
import shape2 from '../../img/shape2.png'
import CV from '../../data/CV.pdf'

function About() {
    const theme = useTheme()
    return (
        <AboutStyled id='about' theme={theme}>
            <div className="about-info">
                <div className="about-image">
                    <img src={about} alt="" />
                </div>
                <div className="about-content mt-5">
                    <Title name={'About Me'} />
                    <p className='fs-4'>
                    Hi, My name is Jerome, a passionate and dedicated web developer with a focus on creating exceptional user experiences. 
                    With a background in web development and a keen eye for design, 
                    I strive to craft visually appealing and intuitive websites that leave a lasting impression.
                    </p>
                   <br/>
                    <p className='fs-4'>
                        Thank you for visiting my portfolio, and I look forward to the possibility of working together to create exceptional web experiences!
                    </p>

                   
                    <div className="btn-con pt-5 mt-5">
                    
                        <a href={CV}>
                        <Button 
                            name="Download CV"
                            blob="blob"
                            icon={download}
                            bg={theme.colorPrimary}
                            color={theme.colorWhite}
                            bFw={'600'}
                            bRad={'30px'}
                            bPad={theme.bPad1}
                            target
                        />

                        </a>
                    </div>
                </div>
            </div>
           
            <img alt='shape' src={shape1} className="shape1" />
            <img alt='shape' src={shape2} className="shape2" />
        </AboutStyled>
    )
}

const AboutStyled = styled(SectionLayout)`
    background-color: ${props => props.theme.aboutBg};
    position: relative;
    overflow: hidden;
    .stats-container{
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .about-info{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        z-index: 5;
        @media screen and (max-width: 1150px){
            grid-template-columns: repeat(1, 1fr);
        }
        .about-image{
            padding: 1.5rem;
            background: ${(props) => props.theme.colorBg3};
            border-radius: 5px;
            width: 80%;
            @media screen and (max-width: 1150px){
                width: 100%;
            }
            img{
                width: 100%;
            }
        }

        .about-content{
            .progress-bars{
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            .btn-con{
                margin-top: 2rem;
                @media screen and (max-width: 1150px){
                    margin-bottom: 2rem;
                }
            }
        }
    }

    .shape1{
        position: absolute;
        left: -7px;
        top: -7px;
        z-index: 1;
        opacity: 0.05;
        pointer-events: none;
    }
    .shape2{
        position: absolute;
        right: -7px;
        top: -7px;
        z-index: 1;
        opacity: 0.05;
        pointer-events: none;
    }
`;

export default About;