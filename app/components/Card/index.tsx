import { NextPage } from "next"
import Link from "next/link"
import { NYTArticle } from "@/app/types"

type Props = {
  article: NYTArticle
}

const Card: NextPage<Props> = ({article}) => {
  return (
    <li className="bg-white rounded-lg p-3 [&:not(:first-child)]:mt-4">  
      <Link href={article.web_url} className="bg-white flex gap-5 rounded-lg p-3 [&:not(:first-child)]:mt-4">
        <div className="w-40 h-40">
          <img src={article.multimedia.thumbnail.url || "@/public/images/no-image.png"} alt={article.multimedia.thumbnail.caption} className="w-full h-full object-cover" />
          <p className="text-sm text-gray">{article.multimedia.thumbnail.caption}</p>
        </div>
        <div>
          <h2 className="text-lg text-black font-bold">{article.headline.main}</h2>
          <p className="text-sm text-gray">{article.snippet}</p>
        </div>
      </Link>
    </li>
  )
}

export default Card