import React, { useEffect, useState } from "react";

export default function CompVariant() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser("Panji Asmoro");
    }, 1000);
  }, []);
  return (
    <div style={{ margin: "20px 0" }}>
      {user ? <p>Selamat datang {user}</p> : null}
    </div>
  );
}
