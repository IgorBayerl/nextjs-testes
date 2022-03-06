//// Style
import {SectionContainer, CardContent } from './styles';
import React, { useRef } from 'react';


function Section({children }) {
    return (
        <SectionContainer >
            {children}
        </SectionContainer>
    )
}
export default Section;
  