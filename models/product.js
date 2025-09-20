const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// ^ pagination is currently unnecessary, app won't be handling thousands of products at once (because there aren't so many)
productSchema.statics.fetchAll = async function (filter) {
  try {
    const products = await this.find(filter ? { userId: filter } : {});
    return products;
  } catch (err) {
    const error = new Error("Failed to fetch products");
    error.details = err;
    throw error;
  }
};

productSchema.statics.editProductById = async function (
  id,
  title,
  price,
  description,
  imageUrl
) {
  try {
    const updatedProduct = await this.findByIdAndUpdate(
      id,
      { title, price, description, imageUrl },
      { new: true, runValidations: true }
    );

    console.log("Updated product data:", updatedProduct); // DEBUGGING
    return updatedProduct;
  } catch (err) {
    const error = new Error("Failed update product with ID:", id);
    error.details = err;
    throw error;
  }
};

productSchema.statics.findProductById = async function (id) {
  try {
    const product = await this.findById(id);
    return product;
  } catch (err) {
    const error = new Error("Failed to fetch product with ID:", id);
    error.details = err;
    throw error;
  }
};

productSchema.statics.deleteProduct = async function (id) {
  try {
    await this.findByIdAndDelete(id);
  } catch (err) {
    const error = new Error("Failed to delete product with ID:", id);
    error.details = err;
    throw error;
  }
};

module.exports = mongoose.model("Product", productSchema);
