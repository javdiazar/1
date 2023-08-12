const { Products } = require("../../db");

const postProducts = async (
  name,
  image,
  description,
  precio,
  descuento,
  unidades,
  tallas
) => {
  const newProduct = await Products.create({
    name,
    image,
    description,
    precio,
    descuento,
    unidades,
    tallas,
  });

  return newProduct;
};

const traerProductos = async () => {
  const total = await Products.findAll();
  return total;
};

module.exports = {
  postProducts,
  traerProductos,
};
