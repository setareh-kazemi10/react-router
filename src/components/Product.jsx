import { useParams } from "react-router-dom";
export default function Product() {
    const params = useParams()
  return (
    <div className='p-2'>
      <h3>My Product (Product_id :{params.id})</h3>
    </div>
  )
}
