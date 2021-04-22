import { useEffect, useState } from "react"
import Folder from "./folder"
import File from "./file"
import api from '../services/api'

import styled from "styled-components"

const Ul = styled.ul`
    /* display: flex;
    flex-wrap: wrap;
    justify-content: start;
    height: auto;
    min-height: 100%; */
    list-style: none;
    padding: 0.5rem 5rem;
    background-color: #777;
`;

function Manager() {
  const [data, setData] = useState([])

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

    console.log(folder)
    try {

      const res = await api.get(`/sftp/${folder}`)
      // return console.log(res.data)
      setData(res.data)

    } catch (error) {

      console.log(error)

    }

  }

  const biRef = {
    parent: {
      acessFolder
    }
  }

  return (
    <>
      <Ul>
        {
          folders(data).map((folder, index) => {

            return <Folder
              biRef={biRef}
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