export default function SideBar() {
  return (
  <div>
    <form id="container-form">
          <img src="./assets/logo0.png" alt="logo" />

          <label class="label-form">Título</label>
          <input
            required
            id="input-title"
            class="input-form"
            type="text"
            placeholder="Digite um título"
          />

          <label class="label-form">Linguagem | Skill</label>
          <input
            required
            id="input-language"
            class="input-form"
            type="text"
            placeholder="Digite uma linguagem ou skill"
          />

          <label class="label-form">Categoria</label>
          <select
            required
            name="select-category"
            id="select-category"
            class="input-form"
          >
            <option value="" disabled selected>
              Selecione uma categoria
            </option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
            <option value="FullStack">FullStack</option>
            <option value="SoftSkill">SoftSkill</option>
          </select>

          <label class="label-form">Descrição</label>
          <textarea
            class="input-form"
            id="input-description"
            rows="5"
            required
            placeholder="Escreva aqui o detalhamento da sua dica."
          ></textarea>

          <label class="label-form">Vídeo</label>
          <input
            required
            id="input-video"
            class="input-form"
            type="url"
            placeholder="https>//www.youtube.com/"
          />

          <div id="button-form">
            <button id="button-clean" onclick="cleanForm(event)">
              Limpar
            </button>
            <button
              type="submit"
              id="button-save"
              onclick="saveTips(event); showTips(); stats ()"
            >
              Salvar
            </button>
          </div>
        </form>
  </div>);
}
