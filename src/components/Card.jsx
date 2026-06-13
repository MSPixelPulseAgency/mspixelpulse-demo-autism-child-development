export function IconCard({ icon: Icon, title, text, meta, cta }) {
  return (
    <article className="soft-card lift">
      {Icon && <span className="icon-bubble"><Icon size={22} /></span>}
      {meta && <span className="card-meta">{meta}</span>}
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      {cta && <span className="text-link">{cta}</span>}
    </article>
  );
}

export function ImageTile({ src, alt, title, text }) {
  return (
    <figure className="image-tile">
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>
        <strong>{title}</strong>
        <span>{text}</span>
      </figcaption>
    </figure>
  );
}
