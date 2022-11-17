const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let products = [
  { id: 102, product: "pelota", category: "deportes", price: 100 },
  { id: 103, product: "guantes", category: "deportes", price: 100 },
  { id: 104, product: "pelota de tenis", category: "pelotas", price: 100 },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.post("/api/products", (req, res) => {
  const { body } = req;
  products.push(body);
  res.json("ok");
});
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const productFind = products.find((product) => product.id == id);
  if (productFind) {
    res.json(productFind);
  } else {
    res.json({ error: true, msg: "Producto no encontrado" });
  }
});
app.put("/api/products/:id", (req, res) => {
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

app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id != id);
  res.json = ({success: true, productos: products.length});
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
