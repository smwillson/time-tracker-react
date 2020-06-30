import React from "react";
import TempItem from "../temperature/TempItem";

const TempModal = (temp) => {
  return (
    <div id='temp-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Modal Header</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </p>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-close waves-effect waves-green btn-flat'
        ></a>
      </div>
    </div>
    // <div id='temp-modal' className='modal' style={modalStyle}>
    //   <div className='modal-content'>
    //     <h4>Modal Header</h4>
    //     <TempItem />
    //   </div>
    //   <div className='modal-footer'>
    //     <a
    //       href='#!'
    //       className='modal-close waves-effect waves-green btn-flat'
    //     ></a>
    //   </div>
    // </div>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%",
};

export default TempModal;
