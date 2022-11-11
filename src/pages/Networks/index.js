import { useState, useEffect } from "react"
import "./networks.css"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { MdAddLink } from "react-icons/md"

import { db} from "../../services/firebaseConnection"
import {
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore"

import { toast } from "react-toastify"

export default function Networks(){
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [youtube, setYoutube] = useState("")

  useEffect(() => {
    function loadLinks(){
      const docRef = doc(db, "social", "link")

      getDoc(docRef)
      .then((snapshot) => {

        if(snapshot.data() !== undefined){
          setFacebook(snapshot.data().facebook)
          setInstagram(snapshot.data().instagram)
          setYoutube(snapshot.data().youtube)
        }
      })
    }
    loadLinks()
  }, [])

  async function handleSave(e){
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube
    })
    .then(() => {
      toast.success("Urls salvas com sucesso ;)");
    })
    .catch((e) => {
      toast.error("Opss.. Algo deu errado :(")
      console.log("Algo deu errado\n" + e);
    })
  }

  return(
    <div className="adminContainer">
      <Header/>

      <h1 className="titleSocial">Suas redes sociais</h1>

      <form className="form" onSubmit={handleSave}>
        <label className="label">Link do facebook</label>
        <Input
          placeholder="Digite a url do facebook..."
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="label">Link do instagram</label>
        <Input
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          placeholder="Digite a url do instagram..."
        />

        <label className="label">Link do youtube</label>
        <Input
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
          placeholder="Digite a url do youtube..."
        />

        <button type="submit" className="btnRegister">
          Salvar links <MdAddLink size={24} color="#fff"/>
        </button>
      </form>
    </div>
  )
}