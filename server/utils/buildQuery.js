function buildQuery(filters) {
  const query = {};

  if (filters.categories && filters.categories.length > 0) {
    query["product_type"] = { $in: filters.categories };
  }

  // Brands, Colors, Sizes
  if (filters.brands && filters.brands.length > 0) {
    query.brand = { $in: filters.brands };
  }

  if (filters.colors && filters.colors.length > 0) {
    query["color.filter_group"] = { $in: filters.colors };
  }

  if (filters.sizes && filters.sizes.length > 0) {
    query.available_sizes = { $in: filters.sizes };
  }

  // Price Range
  if (
    filters.priceRange &&
    filters.priceRange.min !== undefined &&
    filters.priceRange.max !== undefined &&
    filters.priceRange.min !== "0" &&
    filters.priceRange.max !== "0"
  ) {
    query["price.value"] = {
      $gte: filters.priceRange.min,
      $lte: filters.priceRange.max,
    };
  }

  // Rating
  if (filters.rating !== undefined && filters.rating !== "0") {
    query["reviews.rating"] = filters.rating;
  }

  return query;
}

export default buildQuery;
