const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Burger",
        price: 8.99,
        colors: [
            {
                img: "./img/burger2.png",
            },
        ],
    },
    {
        id: 2,

        title: "pizza",
        price: 12.99,
        colors: [
            {
                img:"./img/pizza2.png",
            },
        ],
    },
    {
        id: 3,
        title: "sides",
        price: 1.20,
        colors: [
            {
                img: "./img/sides2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Drinks",
        price: 1.00,
        colors: [
            {
                img: "./img/drinks2.png",
            },
        ],
    },
        ];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");



menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "£" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
       
    //assign new colors
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
        });
  });
});

