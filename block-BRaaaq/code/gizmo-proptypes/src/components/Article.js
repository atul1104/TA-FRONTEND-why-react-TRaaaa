import PropTypes from 'prop-types';

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

Article.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
};

export default Article;
