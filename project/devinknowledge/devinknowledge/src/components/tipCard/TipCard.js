export default function TipCard({
  title,
  language,
  category,
  description,
  video,
}) {
  return (
    <div class="new-tip">
      <div id="content-tip">
        <h3>Título: {title}</h3>
        <p>
          <strong>Linguagem|Skill:</strong> {language}
        </p>
        <p>
          <strong>Categoria:</strong> {category}
        </p>
        <p>
          <strong>Descrição:</strong> {description}
        </p>
      </div>
      <div id="button-new-tips">
        <button id="button-new-tip-edit">Edit</button>
        <button id="button-new-tip-delete">Delete</button>
        <a href={video} /* target="_blank"  */id="button-new-tip-video">
          Video
        </a>
      </div>
    </div>
  );
}
