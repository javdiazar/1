const productRouter = require("express").Router();

const { postProducts, traerProductos } = require("../controllers/index");

productRouter.post("/", async (req, res) => {
  const { name, image, description, precio, descuento, unidades, tallas } =
    req.body;
  const addProduct = await postProducts(
    name,
    image,
    description,
    precio,
    descuento,
    unidades,
    tallas
  );
  if (addProduct) return res.status(200).json(addProduct);
  return res.status(400).json("error al agregar producto");
});

productRouter.get("/", async (req, res) => {
  const productsTotal = await traerProductos();
  if (productsTotal) return res.status(200).json(productsTotal);
  else {
    return res.status(400).send("error");
  }
});

module.exports = productRouter;
