import { useState } from "react";

const ModalWindow = ({ modalVisible, closeModal }) => {
   
   return (
      <div className={`overlay ${modalVisible ? 'animated' : ''}`}>
         <div className="modal-window">
            <p>Пожалуйста введите значение в поле ввода!</p>
            <button className="button modal-button" onClick={closeModal}><span>Закрыть</span></button>
         </div>
      </div>
   );
}

export default ModalWindow;