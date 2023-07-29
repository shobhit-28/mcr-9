import { useContext } from "react"
import { VideoContext } from "../../context/videoContext"
import { CategoryCard } from "../../components/categoryCard/categoryCard"

export const HomePage = () => {

  const {categories} = useContext(VideoContext)

  console.log('aadasd', categories)

  return (
    <div className="page">
      <h1 className="text-4xl font-semibold">Categories</h1>
      <div className="flex flex-wrap gap-10 mt-8">
        {categories.map((category) => <CategoryCard categoryDetail={category} key={category?._id} /> )}
      </div>
    </div>
  )
}
