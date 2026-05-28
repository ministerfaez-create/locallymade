console.log("LocallyMade Marketplace Running");
window.saveProduct = async function(){

  let productName =
  document.getElementById("productName").value;

  let productPrice =
  document.getElementById("productPrice").value;

  let productCategory =
  document.getElementById("productCategory").value;

  let productDescription =
  document.getElementById("productDescription").value;

  try{

    await addDoc(collection(db,"products"),{

      name: productName,
      price: productPrice,
      category: productCategory,
      description: productDescription,
      createdAt: new Date()

    });

    alert("Product Saved Successfully");

  }

  catch(error){

    alert(error.message);

  }

}
