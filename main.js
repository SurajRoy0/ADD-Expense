const tableBody = document.querySelector('#tableBody');
const mainTable = document.querySelector('#main-table');
const form = document.querySelector("form")
var keys = 1;




    form.addEventListener('submit', addExpense)
    function addExpense(e){
    e.preventDefault()

    //assigning the input value in variables
    const tableBody = document.querySelector('#tableBody');
    const ammount = document.querySelector('#ammount').value;
    const ProductName = document.querySelector('#ProductName').value;
    const category = document.querySelector('#category').value;
    const invoice = document.querySelector('#invoiceNumber').value;

    
    // checking the inputs value
   if(ammount === "" || ProductName === "" || category === "" || invoice ===""){
         alert("Please Fill All credentials");
   }
   else{
    
    //Creating Object 
    var inputData = {
        slNoInput: invoice,
        ammountInput : ammount,
        reasonInput : ProductName,
        categoryInput: category
    }
   
    
    //Adding data As an object into the localstorage
    //let slNo = tableBody.firstElementChild.textContent;
    localStorage.setItem(invoice,JSON.stringify(inputData));

    //creating new Tr
    let newTr = document.createElement('tr');

    //creating new TD, Text And Appending
    let invoiceTD = document.createElement('td');
    invoiceTD.className = 'invoice';
    
    let invoiceText = document.createTextNode(invoice);
    invoiceTD.appendChild(invoiceText)

    newTr.appendChild(invoiceTD);

    let ammountTD = document.createElement('td');
    ammountTD.className = 'Ammount';
    
    let ammountText = document.createTextNode(ammount);
    ammountTD.appendChild(ammountText)

    newTr.appendChild(ammountTD)

    let ProductNameTD = document.createElement('TD');
    ProductNameTD.className = 'pName';
    
    let ProductNameText = document.createTextNode(ProductName);
    ProductNameTD.appendChild(ProductNameText)

    newTr.appendChild(ProductNameTD)

    let categoryTD = document.createElement('TD');
    categoryTD.className =  'Category';
    
    let categoryText = document.createTextNode(category);
    categoryTD.appendChild(categoryText)

    newTr.appendChild(categoryTD);

    let btnTD = document.createElement('TD');
    btnTD.className =  'BTN';
    
    let delBTN = document.createElement('button');
    delBTN.className='btn delete bg-danger delBTN'
    let delText = document.createTextNode('Delete');
    delBTN.appendChild(delText)

    btnTD.appendChild(delBTN);

    let editBTN = document.createElement('button');
    editBTN.className='btn edit bg-success editBTN'
    let editText = document.createTextNode('Edit');
    editBTN.appendChild(editText)

    btnTD.appendChild(editBTN);
     
    newTr.appendChild(btnTD);

    //Appending to Table
    tableBody.appendChild(newTr);

   }
   // Clearing The Inputs afer Submit
   document.querySelector('#ammount').value = "";
   document.querySelector('#ProductName').value = "";
   document.querySelector('#category').value = "";
   document.querySelector('#invoiceNumber').value = "";

}

//Delete And Edit Event
mainTable.addEventListener('click',editAndDelete);

function editAndDelete(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are You Sure?")){

            //Revoming the Elements
            let delElement = e.target.parentElement.parentElement;
            tableBody.removeChild(delElement);

            //clearing The Local Storage
            let delKey = e.target.parentElement.parentElement.firstElementChild.textContent;
            localStorage.removeItem(delKey);

            //Also Clearing the Inputs
            document.querySelector('#ammount').value = "";
            document.querySelector('#ProductName').value = "";
            document.querySelector('#category').value = "";
            document.querySelector('#invoiceNumber').value = "";

        }

    }

    if(e.target.classList.contains('edit')){

         
        document.querySelector('#ammount').value = document.querySelector(".Ammount").textContent;
        document.querySelector('#ProductName').value = document.querySelector(".pName").textContent;
        document.querySelector('#category').value = document.querySelector(".Category").textContent;
        document.querySelector('#invoiceNumber').value = document.querySelector(".invoice").textContent;

       // Removing The Element
        let delElement = e.target.parentElement.parentElement;
        tableBody.removeChild(delElement);

        // Filling inputs to edit
        let delKey = e.target.parentElement.parentElement.firstElementChild.textContent;
        localStorage.removeItem(delKey);
    }
}


