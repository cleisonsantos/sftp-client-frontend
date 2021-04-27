import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'


function Folder(props) {
    
    const Li = styled.li`
        display:block;
        padding: 1rem;
        background-color: beige;
        /* border-bottom: 1px solid #916c3c60; */
        border-radius: 8px;
        margin: 4px;
        width: 10rem;
        height: 5rem;
        font-weight: bold;
        text-overflow: ellipsis;
    
        &:hover {
            background-color: #bdbda8;
            cursor: pointer;
            box-shadow: 2px 2px 3px #555;
        }
        
        @media(max-width: 600px){
        width: 5rem;
        height: 5rem;
        }
    `;

    return (
        <Li key={props.id} onClick={() => { props.parentFunctions.acessFolder(props.name) }} title={props.name}>
            <FontAwesomeIcon icon={faFolder} size="4x" />
            <br />
            <p style={
                {
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                }
            }>
                {props.name}
            </p>
        </Li>
    )

}

export default Folder