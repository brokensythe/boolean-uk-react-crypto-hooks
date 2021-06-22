import useNewsList from "../hooks/useNewsList";
import NewsCard from "./NewsCard";

export default function NewsFeed() {

  // You can turn this into a custom hook////////////////////
  const newsList = useNewsList()
  ///////////////////////////////////////////////////////////

  return (
    <ul className="newsfeed">
      {newsList.map((newsItem) => (
        <li>
          <NewsCard newsItem={newsItem} />
        </li>
      ))}
    </ul>
  );
}
