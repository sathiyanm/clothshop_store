export const getCollections = async () => {
  // const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  const collections1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  return await collections1.json()
}

export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  return await collection.json()
}

export const getProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, { cache:"no-store" });

  const products = await response.json();
  // const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  return await products
}

export const getProductDetails = async (productId: string) => {
  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
  return await product.json()
}

export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchedProducts.json()
}

export const getOrders = async (customerId: string) => {
  const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
  return await orders.json()
}

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
  return await relatedProducts.json()
}