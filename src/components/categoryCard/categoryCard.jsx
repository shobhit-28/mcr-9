/* eslint-disable react/prop-types */

export const CategoryCard = ({categoryDetail}) => {
  return (
    <div className="cursor-pointer w-72 hover:shadow-[0_1px_5px_rgb(0,0,0,0.2)] duration-500">
        <div className="w-72">
            <img src={categoryDetail?.thumbnail} alt={categoryDetail?.category} />
        </div>
        <p className="font-medium my-2 ml-1">{categoryDetail?.category}</p>
    </div>
  )
}
