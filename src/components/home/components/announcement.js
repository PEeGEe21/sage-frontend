import React from 'react'
import styled from "styled-components"

const TopAnnouncement = styled.div`
    height:30px;
    background-color: teal;
    color:white;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size:14px;
    font-weight: 500
`
// .announcement{
//     height:30px;
//     background-color: teal;
//     color:white
// }

const Announcement = () => {
    return (
        <>
            <TopAnnouncement>
                Super Deal! Free delivery on orders over $50
            </TopAnnouncement>  
        </>
    )
}

export default Announcement