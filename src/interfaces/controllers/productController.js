const CreateProduct = require("../../application/useCases/product/CreateProduct");
const GetProductById = require("../../application/useCases/product/GetProductById");
const GetAllProductss = require("../../application/useCases/product/GetAllProducts");
const UpdateProduct = require("../../application/useCases/product/UpdateProduct");
const DeleteProduct = require("../../application/useCases/product/DeleteProduct");

const productRepository = require("../../infrastructure/repositories/productRepository");

const productController = {
  async create(req, res) {
    try {
      const CreatedService = await CreateProduct(req.body, productRepository);

      return res.status(201).json(CreatedService);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAllProducts(req, res) {
    try {
      const services = await GetAllProducts(productRepository);

      return res.status(200).json(services);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const service = await GetProductById(id, productRepository);

      return res.status(201).json(service);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const UpdatedService = await UpdateProduct(
        id,
        req.body,
        productRepository
      );
      return res.status(200).json(UpdatedService);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const DeletedService = await DeleteProduct(id, productRepository);

      return res.status(201).json(DeletedService);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = productController;
