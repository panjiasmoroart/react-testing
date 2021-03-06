import React, { useState } from "react";

export default function SimpleShowHide() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      <p>Saya sedang {show ? "Muncul" : "Sembunyi"}</p>
      <button onClick={toggleShow}>{show ? "Sembunyikan" : "Munculkan"}</button>
    </div>
  );
}
