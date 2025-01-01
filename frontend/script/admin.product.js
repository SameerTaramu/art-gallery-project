const fetchAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products/all");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };


const deleteProductbyId = async (id) => {
try {
    const response = await axios.post(`/api/products/${id}`);
} catch (error) {
    console.error(error);
}
}

const displayAllProducts = async() =>{
    const products = await fetchAllProducts();
    const productsContainer = document.querySelector(".product-list");
    productsContainer.innerHTML = "";
    products.forEach((product) => {
        const RootDiv = document.createElement("tr");
        RootDiv.classList.add("product-item");
    const productItemHtml =`
             <td>${product._id}</td>
             <td>${product.name}</td>
             <td>${product.description}</td>
             <td>${product.price}</td>
             <td>
             <div class = "button">
                 <button>Edit</button>
                <button onClick="deleteProductbyId('${product._id}')">Delete</button>
             </div>
             </td>
    `
    RootDiv.innerHTML = productItemHtml;
    productsContainer.insertAdjacentElement("beforeend", RootDiv);
});
};
displayAllProducts();