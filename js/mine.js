
var pNameInput = document.getElementById("pName");
var pPriceInput = document.getElementById("pPrice");
var pCatInput = document.getElementById("pCat");
var pDescInput = document.getElementById("pDesc");

var allProducts = [];
DisplayProduct()

function addProduct()
{
    var pName = pNameInput.value;
    var pPrice = pPriceInput.value;
    var pCat = pCatInput.value;
    var pDesc = pDescInput.value;

    // <!=========Product=========!> 
    var oneProduct =
    {
        name : pName,
        price : pPrice,
        cat : pCat,
        Desc : pDesc 
    }

    // <!=========push Product=========!> 
    allProducts.push(oneProduct);

    StoreProduct()
    // <!=========clear Data=========!> 
    Clearproduct()
    DisplayProduct()
}

            // <!====================================fucntions===============================!> 

// <!=========clear Data=========!> 
function Clearproduct()
{
    pName.value = "";
    pPrice.value = "";
    pCat.value = "";
    pDesc.value = "";
}
// <!=========Display Product=========!> 
function DisplayProduct()
{
    if (localStorage.getItem("MyStorage") != null )
    {
        allProducts=JSON.parse(localStorage.getItem("MyStorage"))
    }
    // ======================================================================
    var collector = ``;
    for (var i = 0 ; i < allProducts.length ; i ++)
    {
        collector = collector +`
        <tr>
            <td>` + allProducts[i].name + `</td>
            <td>` + allProducts[i].price + `</td>
            <td>` + allProducts[i].cat + `</td>
            <td>` + allProducts[i].Desc + `</td>
            <td> <button onclick="UpdateProduct(`+i+`)"  class="btn btn-warning">UPdate</button> </td>
            <td> <button onclick="DeleteProduct(`+i+`)"  class="btn btn-danger">Delete</button>  </td>
        </tr>`
    }
    document.getElementById("tbody").innerHTML = collector;
}

// <!=========store Data=========!> 
function StoreProduct()
{
    localStorage.setItem("MyStorage",JSON.stringify(allProducts))
}

// <!=========Delete Product=========!> 
function DeleteProduct(i)
{
    allProducts.splice(i,1)
    StoreProduct()
    DisplayProduct()
}

// <!=========search Product=========!> 
function SearchProduct(Psearch)
{
    var collector = ``;
    for (var i = 0 ; i < allProducts.length ; i++)
    {
        if(allProducts[i].name.toLowerCase().includes(Psearch.toLowerCase()))
        
        collector = collector +`
        <tr>
            <td>` + allProducts[i].name + `</td>
            <td>` + allProducts[i].price + `</td>
            <td>` + allProducts[i].cat + `</td>
            <td>` + allProducts[i].Desc + `</td>
            <td> <button class="btn btn-warning">UPdate</button> </td>
            <td> <button onclick="DeleteProduct(`+i+`)" class="btn btn-danger">Delete</button>  </td>
        </tr>`
    }
    document.getElementById("tbody").innerHTML = collector;
}

// <!=========UPdate Product=========!> 
function UpdateProduct(i)
{
    pNameInput.value = allProducts[i].name
    pPriceInput.value = allProducts[i].price
    pCatInput.value = allProducts[i].cat
    pDescInput.value = allProducts[i].Desc

    document.getElementById("addBtn").innerHTML="Update Product"
    document.getElementById("addBtn").className="btn btn-warning mt-3"
    document.getElementById("addBtn").setAttribute("onclick",'UpdateData('+i+')')

}

function UpdateData(i)
{
    var pName = pNameInput.value;
    var pPrice = pPriceInput.value;
    var pCat = pCatInput.value;
    var pDesc = pDescInput.value;

    // <!=========Product=========!> 
    var oneProduct =
    {
        name : pName,
        price : pPrice,
        cat : pCat,
        Desc : pDesc 
    }

    allProducts[i] = oneProduct
    StoreProduct()

    document.getElementById("addBtn").innerHTML="Add Product"
    document.getElementById("addBtn").className="btn btn-primary mt-3"
    document.getElementById("addBtn").setAttribute("onclick",'addProduct()')
    
    DisplayProduct()
    Clearproduct()
}