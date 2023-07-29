import { useContext } from "react"
import { VideoContext } from "../../context/videoContext"
import { CategoryCard } from "../../components/categoryCard/categoryCard"

export const HomePage = () => {

  const { categories } = useContext(VideoContext)

  return (
    <div className="page">
      <h1 className="text-4xl font-semibold">Categories</h1>
      <div className="flex flex-wrap gap-10 mt-8">
        {categories.map((category) => <div className="" key={category?._id}><CategoryCard categoryDetail={category} /></div>)}
      </div>
    </div>
  )
}
