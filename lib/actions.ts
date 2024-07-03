export const getCollections = async () => {
    const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);
    return await collections.json()
}

export const getProductList = async () => {
    const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    return await collections.json()
}