// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'product_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignKey: 'product_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
