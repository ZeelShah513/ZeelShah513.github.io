var imgnames = [
    {
        name : "images/graphics/0.png"
    },
    
    {
        name : "images/graphics/3.jpg"
    },
    {
        name : "images/graphics/4.jpg"
    },
    {
        name : "images/graphics/9.jpg"
    },
    {
        name : "images/graphics/10.jpg"
    },
    {
        name : "images/graphics/14.jpg"
    },
    {
        name : "images/graphics/15.jpg"
    },
    {
        name : "images/graphics/16.jpg"
    },
    {
        name : "images/graphics/17.jpg"
    },
    {
        name : "images/graphics/20.jpg"
    },
    {
        name : "images/graphics/23.jpg"
    },
    {
        name : "images/graphics/27.jpg"
    },
    {
        name : "images/graphics/28.jpg"
    },
    {
        name : "images/graphics/29.jpg"
    },
    {
        name : "images/graphics/31.jpg"
    },
    {
        name : "images/graphics/34.jpg"
    },
    {
        name : "images/graphics/38.jpg"
    }
]

for (let i in imgnames){
    var textd = 
    '<div class="col-md-3 col-sm-6 ftco-animate"> <div class="blog-entry">' +
     '<a href="'+ imgnames[i].name + 
     '" class="block-20 image-link"style="background-image: url('+ imgnames[i].name
     + ');"> </a> </div></div>';
     $('#imgtag').append(textd);
}