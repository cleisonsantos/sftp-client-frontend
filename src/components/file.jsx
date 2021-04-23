import styled from "styled-components"

const Li = styled.li`
    display: block;
    align-items: baseline;
    padding: 1rem;
    /* border-bottom: 1px solid #916c3c60; */
    border-radius: 8px;
    word-wrap: break-word;
    background-color: #eee;
    margin: 4px;
    width: 10rem;
    height: 5rem;

    &:hover {
        background-color: #bbb;
        cursor: pointer;
        box-shadow: 2px 2px 3px #555;
    }
    @media(max-width: 600px){
    width: 5rem;
    height: 5rem;
    }
`;

function File(props) {
    
    return(
        <Li >
            <p style={
                {
                    textOverflow: "ellipsis",
                    overflow: "hidden"
                }
            }>
                {props.name}
            </p>
        </Li>
    )

}

export default File