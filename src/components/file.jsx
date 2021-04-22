import styled from "styled-components"

const Li = styled.li`
    padding: 1rem;
    /* border-bottom: 1px solid #916c3c60; */
    border-radius: 8px;
    background-color: #eee;
    margin: 4px;
    

    &:hover {
        background-color: #bbb;
        cursor: pointer;
        box-shadow: 2px 2px 3px #555;
    }
`;

function File(props) {
    
    return(
        <Li >
            {props.name}
        </Li>
    )

}

export default File