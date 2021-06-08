import Modal from "./modal";
import { useModal } from "../context/controllerModal";
import { useState } from "react";

export default function Home() {
  const saveEdit = (newName) => {
    console.log(newName);
  }

  const [nameToEdit, setNameToEdit] = useState([]);

  const { openModal } = useModal();

  const edit = (value) => {
    setNameToEdit(value);
    openModal();
  }

  return (
    <div>
      <button onClick={() => edit({name: "Maria"})}>
        Editar Maria
      </button>
      <button onClick={() => edit({name: "Joao"})}>
        Editar Joao
      </button>
      <Modal 
        saveEdit={saveEdit}
        nameToEdit={nameToEdit}
      />
    </div>
  )
}
