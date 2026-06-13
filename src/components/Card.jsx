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

export function PhotoCard({ src, alt, title, text, icon: Icon }) {
  return (
    <article className="photo-card lift">
      <img src={src} alt={alt} loading="lazy" />
      <div>
        {Icon && <span className="mini-icon"><Icon size={17} /></span>}
        <h3>{title}</h3>
        {text && <p>{text}</p>}
      </div>
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

export function ImageRibbon({ items }) {
  return (
    <div className="image-ribbon">
      {items.map((item) => (
        <ImageTile key={item.title} {...item} />
      ))}
    </div>
  );
}
