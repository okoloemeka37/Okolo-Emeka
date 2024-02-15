//sticky nav bar

window.onscroll=function(){
    ruled()
        }
            
    let nav=document.querySelector(".nav");
    let sticky=nav.offsetTop;
    
    
    
    function ruled() {
    
    
        if (window.scrollX >=sticky) {
       
            nav.classList.add("sticky");
            nav.classList.remove("nav");
      } else {
        nav.classList.remove("sticky");
        
      }
    }
     
    //movable navbar
    
    //home

    
    let f=document.querySelectorAll(".f");
    f.forEach(ele => {
        ele.addEventListener('click',()=>{
            if (!ele.classList.contains("bg-blue")) {
                f.forEach(rt => {rt.classList.remove("bg-blue")
                let id="."+rt.id;
                document.querySelector(id).style.display="none";

                document.querySelector(id).classList.remove("spt")
                document.querySelector(id).classList.remove("rev")
            })
                ele.classList.add("bg-blue");
                let id="."+ele.id;
                document.querySelector(id).style.display="block";
                
                document.querySelector(id).classList.add("spt")

                setTimeout(() => {
                    document.querySelector(id).classList.add("rev")
                }, 100);
               
            }
        })
    });
    
    
    
    const the_animation = document.querySelectorAll('.ell')
    
    console.log(the_animation)
    
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

             
                     
                let attr="."+entry.target.getAttribute("type");
                let vcs=document.querySelectorAll(".vc")
                vcs.forEach(v=> {
                    v.classList.remove("bad")
                });
                document.querySelector(attr).classList.add("bad")
              if (entry.target.classList.contains("hat")) {
                
              }    else{
                entry.target.classList.add('animate');    
              }
            }
               else {
                    entry.target.classList.remove('animate')
               }
            
        })
    },
       { threshold: 0
       });
    //
      for (let i = 0; i < the_animation.length; i++) {
       const elements = the_animation[i];
    
        observer.observe(elements);
      } 
    
    let vcs=document.querySelectorAll(".vc")
    vcs.forEach(vc => {
        vc.addEventListener("click",()=>{
            
            vcs.forEach(v=> {
                v.classList.remove("bad")
            });
            vc.classList.add("bad")
        })
    });


    //typewriter effect

    function we() {
        document.querySelector(".tag").innerHTML =''
        let check=0;
        let counter=0;
        let words=["Web Developer        ","Web Tutor    ","An Amazing Drummer      "];
        setInterval(() => {
    let word=words[check]
            document.querySelector(".tag").innerHTML +=word[counter];
            counter++;
            if (counter===(word.length)) {
            counter=0;
            check++;
            if (check ===3) {
                check=0;
            }
            document.querySelector(".tag").innerHTML =''
            }         
        },250);
       
    }
    we()


    //bar

    let bar=document.querySelector("#bar");
    bar.addEventListener('click',function (params) {
        document.querySelector(".agt").classList.toggle("on")
       // document.querySelector(".sticky").style.flexDirection="column";
    })

    let cases=document.querySelectorAll(".case");
    cases.forEach(cae => {
        cae.addEventListener("click",()=>{
            document.querySelector(".agt").classList.toggle("on")
        })
    });