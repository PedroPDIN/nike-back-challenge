import type { HttpContext } from '@adonisjs/core/http'
import ProductsModel from '#models/products_model'

export default class ProductsController {
  constructor(private readonly productsModel = new ProductsModel()) {}

  async index({ response }: HttpContext) {
    const products = await this.productsModel.getAll()

    return response.ok(products)
  }

  async indexClothingSize({ response }: HttpContext) {
    const clothingSize = await this.productsModel.getClothingSizes()

    return response.ok(clothingSize)
  }

  async indexShoeSize({ response }: HttpContext) {
    const clothingSize = await this.productsModel.getShoeSizes()

    return response.ok(clothingSize)
  }

  async show({ params, response }: HttpContext) {
    const product = await this.productsModel.getById(+params.id)

    if (!product) {
      return response.notFound({ message: 'Product Not found!' })
    }

    return response.ok(product)
  }
}
