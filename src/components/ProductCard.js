import Button from './shared/Button/Button'
import Macbook from '../assets/macbook.jpg'

const ProductCard = ({ price, name, category, onAddToCart, description, onView }) => {

    return (
        <div className="card-wrap">
            <div className="card">
                <div className="mb-2" onClick={onView}>
                    <div style={{ 
                        background: `url(${Macbook})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '240px',
                        width: '240px'
                    }}></div>
                </div>
                <div className="p-2">
                    <p className="text-lg text-textDarkest">{ name }</p>
                    <div className="py-2 text-sm font-normal text-textLight">Category: { category }</div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center w-full">
                            <div className="flex items-center">
                                <span className="text-13 opacity-50">Price</span>
                                <div className="px-2">&#36;{price}</div>
                            </div>
                            <div className="ml-auto">
                                <Button variant="empty" onClick={onAddToCart}>Add to cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

ProductCard.propTypes = {

}

export default ProductCard