import { useState } from "react";
import ModalWindow from "./ModalWindow";

const TodoForm = ({ addTask }) => {
   const [value, setValue] = useState('');
   const [modalVisible, setModalVisible] = useState(false);

   const handleChange = (e) => {
      setValue(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      addTask(value);
      setValue('');

      if (value === '') {
         setModalVisible(true)
      }
   }

   const closeModal = () => {
      setModalVisible(false);
   }


   return (
      <>
         <form className="addTask_block" onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder='Создать дело' className='addTask_input' onChange={handleChange} />
            <button type='submit' className="button"><span>Создать</span></button>
         </form>
         
         <ModalWindow modalVisible={modalVisible} closeModal={closeModal}/>
      </>
   );
}

export default TodoForm;