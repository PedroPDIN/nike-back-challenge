import fs from 'node:fs/promises'
import IProduct from '../../interfaces/product_interface.js'
import { ProductsWithIdList } from '../../types/products_list_with_id.type.js'
import IProductWithId from '../../interfaces/product_with_id_interface.js'

export default class ProductsModel {
  private async loadFile(): Promise<ProductsWithIdList | []> {
    const filePath = './data.json'

    try {
      const jsonFileContent = await fs.readFile(filePath, 'utf-8')
      const currentProductsData = JSON.parse(jsonFileContent)
      const productDataWithIds = currentProductsData.map((product: IProduct, index: number) => {
        return {
          id: index + 1,
          ...product,
        }
      })

      return productDataWithIds
    } catch (error) {
      console.error('Erro encontrado ao ler o arquivo JSON:', error)
      return []
    }
  }

  async getAll(): Promise<ProductsWithIdList> {
    const products = await this.loadFile()
    return products
  }

  async getById(productId: number): Promise<IProductWithId | undefined> {
    const products = await this.loadFile()

    if (products.length === 0) {
      return undefined
    }

    const productById = products.find((product) => {
      return product.id === productId
    })

    return productById
  }
}
