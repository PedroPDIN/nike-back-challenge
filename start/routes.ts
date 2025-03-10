import router from '@adonisjs/core/services/router'
import ProductsController from '#controllers/products_controller'
import { HttpContext } from '@adonisjs/core/http'

const productsController = new ProductsController()

router.get('/products', async (ctx: HttpContext) => {
  return productsController.index(ctx)
})

router.get('/products/clothing-size', async (ctx: HttpContext) => {
  return productsController.indexClothingSize(ctx)
})

router.get('/products/shoe-size', async (ctx: HttpContext) => {
  return productsController.indexShoeSize(ctx)
})

router.get('/products/:id', async (ctx: HttpContext) => {
  return productsController.show(ctx)
})
