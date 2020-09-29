var k = 0;

// adding data to local storage
const addtoCartBtn = document.getElementsByClassName("addcart");

let items = [];

for (let i = 0; i < addtoCartBtn.length; i++) {
  console.log(addtoCartBtn[i]);
  addtoCartBtn[i].addEventListener("click", function (e) {

    if (typeof Storage !== "undefined") {
      let item = {
        id: i + 1,
        name: e.target.parentElement.children[1].textContent,
        price: e.target.parentElement.children[2].children[0].textContent,
        no: 1,
      };

      if (JSON.parse(localStorage.getItem("items") === null)) {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      } else {
        const localItem = JSON.parse(localStorage.getItem("items"));
        localItem.map(data =>{
            if(item.id == data.id){
                item.no = data.no + 1;
                console.log(item);
            }else{
                items.push(data);
            }      
        });

        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      }
    } else {
      console.log("storage is not working");
    }
  });

  const itemCount = document.querySelector('#count');
  let no = 0;
  JSON.parse(localStorage.getItem('items')).map(data=>{
      no = no+data.no;
  });
  itemCount.innerHTML = no;

}
