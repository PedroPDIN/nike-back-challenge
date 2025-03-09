import router from '@adonisjs/core/services/router'
import ProductsController from '#controllers/products_controller'
import { HttpContext } from '@adonisjs/core/http'

const productsController = new ProductsController()

router.get('/products', async (ctx: HttpContext) => {
  return productsController.index(ctx)
})

router.get('/products/:id', async (ctx: HttpContext) => {
  return productsController.show(ctx)
})
