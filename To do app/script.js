// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
   let span = document.createElement("SPAN");
   let txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
   let trigger = close[i];
   let div = this.parentElement;
   const toggleDisplay = (div, trigger) => {
      if (!div || !trigger) return;
      let defaultDisplay = window
         .getComputedStyle(div)
         .getPropertyValue("display");
      trigger.addEventListener("click", (e) => {
         div.style.display =
            div.style.display == "none" ? defaultDisplay : "none";
      });
   };
}

// Add a "checked" symbol when clicking on a list item
let list = document.getElementById("myUL");

list.addEventListener("click", clickMe, false);
function clickMe(ev) {
   if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
   }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
   let li = document.createElement("li");
   let inputValue = document.getElementById("myInput").value;
   let t = document.createTextNode(inputValue);
   li.appendChild(t);

   if (inputValue === "") {
      alert("You must write something!");
   } else {
      document.getElementById("myUL").appendChild(li);
   }
   document.getElementById("myInput").value = "";

   let span = document.createElement("SPAN");
   let txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);

   for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
         let div = this.parentElement;
         div.style.display = "none";
      };
   }
}
