const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");


const products = [
    {
        id : 1,
        title : "Air Force",
        price : 119,
        colors : [
            {
                code : "black",
                img : "./img/air.png",
            },
            {
                code : "dark blue",
                img : "./img/air2.png",
            },

        ],
    },

    {
        id : 2,
        title : "Air Jordan",
        price : 149,
        colors : [
            {
                code : "lightgray",
                img : "./img/jordan.png",

            },
            {
                code : "green",
                img : "./img/jordan2.png",
            },
        ]
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
          {
            code: "lightgray",
            img: "./img/blazer.png",
          },
          {
            code: "green",
            img: "./img/blazer2.png",
          },
        ],
      },
      {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
          {
            code: "black",
            img: "./img/crater.png",
          },
          {
            code: "lightgray",
            img: "./img/crater2.png",
          },
        ],
      },
      {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
          {
            code: "gray",
            img: "./img/hippie.png",
          },
          {
            code: "black",
            img: "./img/hippie2.png",
          },
        ],
      },
]

let productChosen = products[0];

const currentProductImage = document.querySelector(".productImage");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItem.forEach((item , index) => {
    item.addEventListener("click", () =>
     {
         wrapper.style.transform = `translateX(${-100 * index}vw)`;
         
         // changing the index of the chosenproduct
          productChosen = products[index];
         
         // changing the texts of the chosenproduct
            currentProductTitle.textContent = productChosen.title;
          currentProductPrice.textContent = "$" + productChosen.price;
            currentProductImage.src = productChosen.colors[0].img;
         
        // assigning colors for the products 

        currentProductColors.forEach((color,index) =>{
          color.style.backgroundColor = productChosen.colors[index].code;          

        });
         
        });
    });

    // changing the product images when we click the color 
    

    currentProductColors.forEach((color,index) =>
    {
           color.addEventListener("click", ()=>
           {
                  currentProductImage.src = productChosen.colors[index].img;
           });
    });

    currentProductSizes.forEach((size , index) =>
    {
          size.addEventListener("click" , () => 
          {
            currentProductSizes.forEach((size) =>
            {
                size.style.backgroundColor = "white";
                size.style.color = "black";
              });
              
              size.style.backgroundColor = "black";
              size.style.color = "white";
          });
    });

    const productBtn = document.querySelector(".productBtn");
    const payment = document.querySelector(".payment");
    productBtn.addEventListener("click" , ()=>
    {
         payment.style.display = "flex";      
    });

    const closebtn = document.querySelector(".close");

    closebtn.addEventListener("click" , ()=>
    { 
         payment.style.display = "none";
    });