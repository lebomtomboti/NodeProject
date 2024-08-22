import { connection as db } from "../config/index.js";

class Products {
  async fetchProducts(req, res) {
    const qry = `
      SELECT prodID,
      prodName,
      prodQuantity,
      prodAmount,
      ProdCategory,
      ProdUrl,
      userID
      FROM Products;
    `;
    try {
      const results = await db.query(qry);
      res.json({
        status: res.statusCode,
        results
      });
    } catch (err) {
      res.status(500).json({
        status: res.statusCode,
        msg: 'Error fetching products'
      });
    }
  }

  async fetchProduct(req, res) {
    const qry = `
      SELECT prodID,
      prodName,
      prodQuantity,
      prodAmount,
      ProdCategory,
      ProdUrl,
      userID
      FROM Products
      WHERE prodID = ?;
    `;
    try {
      const result = await db.query(qry, [req.params.id]);
      res.json({
        status: res.statusCode,
        result: result[0]
      });
    } catch (err) {
      res.status(404).json({
        status: res.statusCode,
        msg: 'Product not found'
      });
    }
  }

  async addProduct(req, res) {
    const qry = `
      INSERT INTO Products
      SET ?;
    `;
    try {
      const result = await db.query(qry, [req.body]);
      res.json({
        status: res.statusCode,
        msg: 'New product was added'
      });
    } catch (err) {
      res.status(500).json({
        status: res.statusCode,
        msg: 'Error adding product'
      });
    }
  }

  async updateProduct(req, res) {
    const qry = `
      UPDATE Products
      SET ?
      WHERE prodID = ?;
    `;
    try {
      const result = await db.query(qry, [req.body, req.params.id]);
      res.json({
        status: res.statusCode,
        msg: "The product information has been updated."
      });
    } catch (err) {
      res.status(500).json({
        status: res.statusCode,
        msg: 'Error updating product'
      });
    }
  }

  async deleteProduct(req, res) {
    const qry = `
      DELETE FROM Products
      WHERE prodID = ?;
    `;
    try {
      const result = await db.query(qry, [req.params.id]);
      res.json({
        status: res.statusCode,
        msg: "The product information has been deleted."
      });
    } catch (err) {
      res.status(500).json({
        status: res.statusCode,
        msg: 'Error deleting product'
      });
    }
  }
}

export {
  Products
}