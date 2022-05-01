let getData = async(url)=> {
    try{
        let res = await fetch(url)

        let data = await res.json();

    // console.log(data)
    return data;
    }
    catch(err){
        console.log(err)
    }
}

let append = (data,container)=>{
    // console.log(data)
    container.innerHTML = null

    data.forEach(({strMealThumb,strTags,strYoutube,strInstructions})=>{
        
        // console.log(strMealThumb,strTags,strYoutube)
        let box = document.createElement("div")

         let div = document.createElement("div");

         let img = document.createElement("img");
         img.src = strMealThumb;

        let  div1 = document.createElement("div");


         let p = document.createElement("h3");
         p.innerText = strTags;

         let p2 = document.createElement("p");
         p2.innerText = strInstructions

         let p1 = document.createElement("a");
         p1.href =strYoutube;
         p1.innerText="Watch Receipe "
        //  console.log(img,p,p1)

         div.append(img)
         div1.append(p,p1,p2);
        //  console.log(div)

        box.append(div,div1)

         container.append(box);
        //  console.log(container)
        
    })
}

export {getData,append} ;