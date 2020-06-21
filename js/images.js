var imgnames = [
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/0.png"
    },
    
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/3.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/4.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/9.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/10.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/14.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/15.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/16.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/17.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/20.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/23.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/27.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/28.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/29.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/31.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/34.jpg"
    },
    {
        name : "https://github.com/ZeelShah513/ZeelShah513.github.io/blob/master/images/graphics/38.jpg"
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