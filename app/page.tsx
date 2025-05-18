import Card from '@/app/components/Card/index'
import { NYTArticle } from '@/app/types/index';

const Home: React.FC = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NYT_URL}/articlesearch.json?api-key=${process.env.NEXT_PUBLIC_NYT_KEY}`, {
    next: {
      revalidate: 60 * 60 * 24,
    }
  });
  const { response } = await res.json();
  console.log(response) 

  return (
    <>
      <div className="p-5 bg-gray-light">
        <ul>
          {response.docs.map((doc: NYTArticle) => {(
            <Card
              key={doc._id}
              article={doc}
            />
          )})}
        </ul>
      </div>
    </>
  );
}

export default Home
