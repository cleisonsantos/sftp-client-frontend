import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

const Li = styled.li`
    padding: 1rem;
    background-color: beige;
    /* border-bottom: 1px solid #916c3c60; */
    border-radius: 8px;
    margin: 4px;
    

    &:hover {
        background-color: #bdbda8;
        cursor: pointer;
        box-shadow: 2px 2px 3px #555;
    }
`;

function Folder(props) {
    
    return(
        <Li key={props.id} onClick={() => {props.biRef.parent.acessFolder(props.name)}}>
            <FontAwesomeIcon icon={faFolder} size="lg" />
            {props.name}
        </Li>
    )

}

export default Folder