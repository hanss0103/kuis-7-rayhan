const products = [

    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
    {
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",
        desc :[
            "WARNA",
            "BAGUS",
            "MANTAPPP"
        ]
    }, 
]


function card(product) {
    let content = document.querySelector('.content');
    let figure = document.createElement('figure');
    let figcaption = document.createElement("figcaption");
    let img = document.createElement('img');
    img.src = product.image;
    let h1 = document.createElement('h1');
    h1.textContent = product.name;
    let h2 = document.createElement('h2');
    h2.textContent = product.price;
    let ul = document.createElement('ul');
    let like = document.createElement('button');
    like.textContent = 'like';
    like.addEventListener('click',()=> alert('Anda menyukai product ini'));
    let buy = document.createElement('button');
    buy.textContent = 'Beli Sekarang';
    buy.addEventListener('click',()=> confirm('Apakah anda yakin membeli produk ini?'));
    let com = document.createElement('button');
    com.textContent = 'Komentar';
    com.addEventListener('click',()=> prompt('Tambahkan komentar'))
    product.desc.map((d) =>{
        let li = document.createElement('li');
        li.textContent = d;
        ul.appendChild(li);
    })
    figcaption.appendChild(h1);
    figcaption.appendChild(ul);
    figcaption.appendChild(h2);
    figcaption.appendChild(like);
    figcaption.appendChild(buy);
    figcaption.appendChild(com);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    content.appendChild(figure);
}
products.map((product)=>{
    card(product);
});
