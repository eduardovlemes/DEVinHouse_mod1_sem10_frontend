export default function Filter() {
  return (
    <div>
      <div id="search-space">
        <input
          type="text"
          id="input-search"
          placeholder="Digite um título para buscar..."
        />
        <button id="button-search" onclick="searchTip ()">
          Procurar
        </button>
        <button id="button-delete" onclick="cleanSearch(); showTips()">
          Limpar
        </button>
      </div>
    </div>
  );
}
