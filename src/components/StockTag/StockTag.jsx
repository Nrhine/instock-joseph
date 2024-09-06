import './StockTag.sccs'

function StockTag({ status, className }) {

    if (status === 'In Stock') {
        return (
            <>
                <div className="stock-tag stock-tag--in">
                    <p className="stock-tag__text stock-tag__text--in">In Stock</p>
                </div>
            </>
          )
    } else if (status === 'Out of Stock') {
        return (
            <>
                <div className="stock-tag stock-tag--out">
                    <p className="stock-tag__text stock-tag__text--out">Out of Stock</p>
                </div>
            </>
          )
    }
  
}

export default StockTag