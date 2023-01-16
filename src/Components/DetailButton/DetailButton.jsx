import { Link } from "react-router-dom"

const DetailButton = () => {
  return (
    <div>   <Link to="/cart">
    <button className="btn btn-outline-light mt-2 me-3">
      Go to Cart
    </button>
  </Link>
  <Link to="/">
    <button className="btn btn-outline-light mt-2">
      Keep buying
    </button>
  </Link></div>
  )
}

export default DetailButton