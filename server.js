const express = require("express");
const { Router } = express;
const app = express();
const routerProducts = Router();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

app.use('/api/products', routerProducts);

let products = [
  { id: 102, product: "pelota", category: "deportes", price: 100 },
  { id: 103, product: "guantes", category: "deportes", price: 100 },
  { id: 104, product: "pelota de tenis", category: "pelotas", price: 100 },
];

routerProducts.get("/", (req, res) => {
  res.json(products);
});
routerProducts.post("/", (req, res) => {
  const { body } = req;
  products.push(body);
  res.json("ok");
});
routerProducts.get("/:id", (req, res) => {
  const { id } = req.params;
  const productFind = products.find((product) => product.id == id);
  if (productFind) {
    res.json(productFind);
  } else {
    res.json({ error: true, msg: "Producto no encontrado" });
  }
});
routerProducts.put("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const positionOfProduct = products.findIndex((product) => product.id == id);
  if (positionOfProduct >= 0){
    products[positionOfProduct] = body;
    res.json('ok');
  } else {
    res.json({error: true, msg: 'Id no encontrada'})
  }
});

routerProducts.delete('/:id', (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id != id);
  res.json = ({success: true, productos: products.length});
})


