import { useState } from "react";

export default function Filter() {
  const[filter,setFilter] = useState(null)

 


  return (
    <div>
      <div id="search-space">
        <input
          type="text"
          id="input-search"
          placeholder="Digite um título para buscar..."
          value={filter} 
          onChange={(event) => setFilter()}
        />
        <button id="button-search" onClick={searchTip} >
          Procurar
        </button>
        <button id="button-delete" onClick="cleanSearch(); showTips()">
          Limpar
        </button>
      </div>
    </div>
  );
}
