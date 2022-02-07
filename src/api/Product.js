import Axios from './ConfigAxios';

class Product extends Axios {
    constructor(header) {
        super(header)
        this.uri = '/products'
    }

    getProduct() {
        return this.Axios.get(this.uri).then(res => res.json())
    }
}

export default Product