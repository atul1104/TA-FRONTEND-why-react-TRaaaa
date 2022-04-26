import Article from './Article';
import allArticles from '../data/articles';
function Articles() {
  return (
    <section className="articles">
      <ul>
        {allArticles.map((article) => {
          return <Article key={article.publishedAt} {...article} />;
        })}
      </ul>
    </section>
  );
}
export default Articles;
