import { useState } from "react";
export default function SideBar({ tipList, setTipList }) {
  /* console.log(tip); */

  const [tip, setTip] = useState({
    id: 0,
    title: "",
    language: "",
    category: "",
    description: "",
    video: "",
  });

  function saveTips() {
    const tipWithID = { ...tip.id(Math.random()) };
    setTipList([...tipList, tipWithID]);
  }

  return (
    <form id="container-form">
      <img src="./assets/logo0.png" alt="logo" />

      <label class="label-form">Título</label>
      <input
        required
        id="input-title"
        class="input-form"
        type="text"
        placeholder="Digite um título"
        valeu={tip.title}
        onChange={(event) => {
          setTip({
            ...tip,
            title: event.target.value,
          });
        }}
      />

      <label class="label-form">Linguagem | Skill</label>
      <input
        required
        id="input-language"
        class="input-form"
        type="text"
        placeholder="Digite uma linguagem ou skill"
        valeu={tip.language}
        onChange={(event) => {
          setTip({
            ...tip,
            language: event.target.value,
          });
        }}
      />

      <label class="label-form">Categoria</label>
      <select
        required
        name="select-category"
        id="select-category"
        class="input-form"
        valeu={tip.category}
        onChange={(event) => {
          setTip({
            ...tip,
            category: event.target.value,
          });
        }}
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
        valeu={tip.description}
        onChange={(event) => {
          setTip({
            ...tip,
            description: event.target.value,
          });
        }}
      ></textarea>

      <label class="label-form">Vídeo</label>
      <input
        required
        id="input-video"
        class="input-form"
        type="url"
        placeholder="https>//www.youtube.com/"
        valeu={tip.video}
        onChange={(event) => {
          setTip({
            ...tip,
            video: event.target.value,
          });
        }}
      />

      <div id="button-form">
        <button id="button-clean" onClick="cleanForm(event)">
          Limpar
        </button>
        <button
          type="submit"
          id="button-save"
          onClick={saveTips} /* showTips(); stats () */
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
