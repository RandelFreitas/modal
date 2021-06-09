import Modal from "./modal";
import { useState } from "react";

export default function Home() {
  const saveEdit = (newName) => {
    console.log(newName);
  }

  const [nameToEdit, setNameToEdit] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // const { openModal } = useModal();

  const create = () => {
    setOpenModal(true);
  }

  // TODO deverá ser um objeto do tipo Usuario, por exemplo
  const edit = (name: any) => {
    setNameToEdit(name);
    setOpenModal(true);
  }

  const handleClose = () => {
    setNameToEdit(null);
    setOpenModal(false);
  };

  return (
    <div>
      <button onClick={create}>
        Cadastrar
      </button>
      <button onClick={() => edit({name: "Maria"})}>
        Editar Maria
      </button>
      <Modal
        open={openModal}
        onClose={handleClose}
        saveEdit={saveEdit}
        nameToEdit={nameToEdit}
      />
    </div>
  )
}
