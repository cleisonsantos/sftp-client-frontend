import { useEffect, useState } from "react"
import Folder from "./folder"
import File from "./file"
import api from '../services/api'

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




  }, [data])

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


  const renderFolders = () => {
    // return console.log(folders(data))
    if (folders(data)) {
      // console.log(folders(data))
      
    }
  }

  const renderFiles = () => {
    // return )
    if (files(data)) {
      // console.log(files(data))
      
    }
  }

  return (
    <>
    <ul>
      {
        folders(data).map((folder, index) => (
          <Folder name={folder.name} id={`${index}-${folder.name}`} />
        )
        )
      }
      {
        files(data).map((file, index) => (
          <File name={file.name} id={`${index}-${file.name}`} />
          )
        )    
      }
    </ul>
    </>
  )
}

export default Manager