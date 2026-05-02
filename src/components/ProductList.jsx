import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productSlice'

const ProductList = () => {
  const dispatch = useDispatch()
  const { items, status } = useSelector((state) => state.products)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  if (status === 'loading') return <h2>Loading...</h2>

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
      {items.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
          <img src={product.image} alt="" width="100" />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList