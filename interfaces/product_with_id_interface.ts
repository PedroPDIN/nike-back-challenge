import IProduct from './product_interface.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IProductWithId extends IProduct {
  id: number
}
