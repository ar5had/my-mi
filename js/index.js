var btn = document.querySelector(".prebook");
var storage = document.querySelector("#storage");
var color = document.querySelector("#color");
var colFlag, storFlag, color, storageS;


storage.addEventListener("change", function() {

  storFlag = true;
  storage.options[0].selected = false;
  storageS = storage.options[storage.selectedIndex].value;
  if(storFlag && colFlag){
    btn.className = "prebook";
    btn.disabled = false;
  }

});


color.addEventListener("change", function() {

  colFlag = true;
  color.options[0].selected = false;
  colorS =
    color.options[color.selectedIndex].value;
  if(storFlag && colFlag){
    btn.className = "prebook";
    btn.disabled = false;
  }

});

btn.addEventListener("click", function() {
  var id = "";
  if(storageS === "16 GB") {
    if(colorS === "Grey")
      id = "4163100005";
    else if(colorS === "Silver")
      id = "4163100004";
    else if(colorS === "Gold")
      id = "4163100003";
  }
  else if(storageS === "32 GB") {
    if(colorS === "Grey")
      id = "4163100002";
    else if(colorS === "Silver")
      id = "4163100001";
    else if(colorS === "Gold")
      id = "4163000007";
  }
  id = "http://buy.mi.com/in/cart/add/"+id;
  window.open(id);
});
