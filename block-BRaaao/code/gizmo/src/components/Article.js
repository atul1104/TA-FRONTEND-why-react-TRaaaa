function Article(props) {
  return (
    <li>
      <figure>
        <img src={props.urlToImage} alt={props.title} />
        <figcaption>
          <h3>{props.title}</h3>
        </figcaption>
      </figure>
      <p>{props.description}</p>
      <a href={props.url}>Learn More</a>
    </li>
  );
}
export default Article;
