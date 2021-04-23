import { useEffect, useState } from "react"
import Folder from "./folder"
import File from "./file"
import api from '../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faFolder } from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components"

const Header = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: .5rem 5rem;
  padding-bottom: 0px;
  list-style: none;
  background-color: #777;

  @media(max-width: 600px){
    padding: .5rem .5rem;
  }
`;

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    height: auto;
    list-style: none;
    padding: 0.5rem 5rem;
    background-color: #777;

  @media(max-width: 600px){
    padding: .5rem .5rem;
  }
`;

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

const H3 = styled.h3`

    padding: .75rem;
    border-radius: 8px;
    font-weight: bold;
    background-color: #eee;
    margin: 4px;

`;

function Manager() {
  const [data, setData] = useState([])
  const [currentPath, setCurrentPath] = useState("")
  useEffect(() => {

    async function getData() {

      try {

        const res = await api.get("/sftp")
        // return console.log(res.data)
        setData(res.data)

      } catch (error) {

        console.log(error)

      }

    }

    getData()

  }, [])

  const folders = (data) => {
    let folders = data.filter(folder => {
      return folder.type === 'd'
    })
    return folders = folders.sort((a, b) => { return a.name.localeCompare(b.name) })
  }

  const files = (data) => {
    let files = data.filter(file => {
      return file.type !== 'd'
    })
    return files = files.sort((a, b) => { return a.name.localeCompare(b.name) })
  }

  const acessFolder = async (folder) => {

    let foldersPath = []
    let separator = "&"
    let slug = ""
    if(currentPath !== "undefined"){
      slug = currentPath
    }
    foldersPath.push(folder)
    
    if(foldersPath.length >= 1) {
      for (let index = 0; index < foldersPath.length; index++) {
      
        slug += separator
        slug += foldersPath[index]

      }
    } else{
      slug += foldersPath[0]
    }
    // console.table(foldersPath)
    // console.log(slug)
    try {

      const res = await api.get(`/sftp/${slug}`)
      // return console.log(res.data)
      setCurrentPath(slug)
      setData(res.data)
      // foldersPath = folder
    } catch (error) {

      console.log(error)

    }

  }

  const dotDot = async () => {

    let parentFolder = (currentPath.replace(currentPath.slice(currentPath.lastIndexOf("&")), ""))
    
    if(parentFolder === "" && parentFolder === currentPath) {

      return
      
    }
    // console.log(parentFolder)
    // console.log(currentPath)
    try {

      const res = await api.get(`/sftp/${parentFolder}`)
      // return console.log(res.data)
      setData(res.data)
      setCurrentPath(parentFolder)

    } catch (error) {

      console.log(error)

    }

  }

  const parentFunctions = {
    
    acessFolder
  
  }

  let localization = ""
  
  currentPath === "" ? localization = "/" : localization = currentPath.replaceAll("&", "/") 


  return (
    <>
    <Header >
        
        <Li onClick={() => dotDot()}>
        <FontAwesomeIcon icon={faFolder} size="lg" />
        <FontAwesomeIcon icon={faArrowUp} size="sm" />
        </Li>
        <H3>{ localization }</H3>

    </Header>
      <Ul>
        {
          folders(data).map((folder, index) => {

            return <Folder
              parentFunctions={parentFunctions}
              key={`${index}-${folder.name}`}
              name={folder.name}
              id={`${index}-${folder.name}`} />
          })
        }
        {
          files(data).map((file, index) => {
            return <File
              key={`${index}-${file.name}`}
              name={file.name}
              id={`${index}-${file.name}`} />
          })
        }
      </Ul>
    </>
  )
}

export default Manager