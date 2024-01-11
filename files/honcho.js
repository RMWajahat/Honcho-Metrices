// cursor 

const customcursor = document.getElementById("cursorcustom");
document.addEventListener('mousemove',(e)=>{
    customcursor.style.left = e.pageX + "px";
    customcursor.style.top = e.pageY + "px";
});

var dots = document.querySelectorAll("#dots a");

dots.forEach((dot)=>{
    if(dot.classList.contains("activelink")){
    }
    dot.addEventListener("click",()=>{
        dots.forEach((elem)=>{elem.classList.remove("activelink")})
        dot.classList.add("activelink");
    })
})


var bars = document.querySelectorAll(".bars");
var loadin = document.getElementById("honchoload");
var loadinScreen = document.getElementById("startupanimation");
var alltextspans = document.querySelectorAll(".animationspan");

function loading() {
    loadin.classList.add("loadanime");
    alltextspans.forEach((spann)=>{
        spann.classList.add("spantoleft");
    })


    setTimeout(() => {
        loadin.classList.remove("loadanime");
        loadinScreen.style.display = "none";
        
        Array.from(bars).forEach((bar) => {
            bar.classList.add("barsanimate");
        });
    }, 3300);
    
}

var light = document.getElementById("light");
var body = document.querySelector("body");
light.addEventListener("click", () => {
    body.classList.toggle("rootchange");
})




var menupop = document.getElementById("menupage");
var contactpop = document.getElementById("contactpoup");

var contactbtns = document.querySelectorAll(".contactbtn");
var menubtns = document.querySelectorAll(".menubtn");

var exitcontact = document.getElementById("exitcontact");
var exitmenu = document.getElementById("exitmenu");



exitcontact.addEventListener("click",()=>{
    contactpop.style.right = "-110vw";
})

exitmenu.addEventListener("click",()=>{
    menupop.style.left = "-110vw";
})



Array.from(menubtns).forEach((btn)=>{
    btn.addEventListener("click",()=>{
        menupop.style.left = "0";
    })
})


Array.from(contactbtns).forEach((btn)=>{
    btn.addEventListener("click",()=>{
        contactpop.style.right = "0";
    })
})




// this.scroll top    calclate height
let AllCenterSlides = document.querySelectorAll(".center");


// animations part -----------------------------------------------------------
let Animateblock = document.querySelector("#slides");

// client col slide 
let clientSlide = document.getElementById("ourallclients_slide");
let ourclientsTag = document.getElementById("ourclients");
let companyrow1 = document.querySelector(".companyrow1");
let companyrow2 = document.querySelector(".companyrow2");
let companyrow1box = document.querySelector(".companyrow1 img:nth-child(2)");
let companyrow2box = document.querySelector(".companyrow2 img:nth-child(4)");

// what we do slide 
let WeDoBlock = document.querySelector(".whatwedo");
let whatwedoslideleft = document.querySelector(".whatwedoslideleft");
let whatwedoslideright = document.querySelector(".whatwedoslideright");
let whatwedogetcall = document.querySelector(".whatwedogetcall");


// about section 
let aboutusslide = document.getElementById("aboutusslide");
let aboutleft = document.querySelector(".aboutleft p");
let aboutright = document.querySelector(".aboutright");
let aboutviewmore = document.querySelector(".aboutview");
let aboutTag = document.getElementById("aboutustagline");


// projects slide 
let ourprojectsslide = document.getElementById("ourprojectsslide");
let projects = document.querySelectorAll(".proj");


// satisfiedclientslide slide 
let satisfiedclientslide = document.getElementById("satisfiedclientslide");
let happyclient = document.querySelector(".happyclient");

// send_us_a_messageslide slide 
let sendUsAmessageslide = document.getElementById("send_us_a_messageslide");
let contactrightside = document.querySelector(".contactrightside");
let contactleftside = document.querySelector(".contactleftside");
let sendsms = document.querySelector(".sendsms");

let hero = document.getElementById("herobar");

Animateblock.addEventListener("scroll",()=>{
    
    // hero section 
    if((Animateblock.scrollTop+20>hero.offsetTop)){
        
        dots.forEach((dot)=>{
            if(dot.classList.contains("activelink")){
                dot.classList.remove("activelink")
            }})
        
            document.querySelector("#dots a:nth-child(1)").classList.add("activelink");

                bars[0].style.transform = "translateY( -" + (((Animateblock.scrollTop) * 2.3)) + "px)";
                bars[1].style.transform = "translateY( -" + (((Animateblock.scrollTop) * 2)) + "px)";
                bars[2].style.transform = "translateY( -" + (((Animateblock.scrollTop))) + "px)";
                bars[2].style.zIndex = "8";
                bars[3].style.transform = "translateY( -" + (((Animateblock.scrollTop) * 2)) + "px)";
                bars[4].style.transform = "translateY( -" + (((Animateblock.scrollTop) * 2.3)) + "px)";
    }






    // CLIENT COL  section 
    if((Animateblock.scrollTop-400>clientSlide.offsetTop)){
            // alert(Animateblock.scrollTop);

        dots.forEach((dot)=>{
            if(dot.classList.contains("activelink")){
                dot.classList.remove("activelink")
            }})
        
        document.querySelector("#dots a:nth-child(2)").classList.add("activelink");

        
        if((Animateblock.scrollTop>=300) && (Animateblock.scrollTop<=600)){
            ourclientsTag.classList.add("ourclientsTxt");
        }else{
            ourclientsTag.classList.remove("ourclientsTxt");
        }
        

        if((Animateblock.scrollTop>=530) && (Animateblock.scrollTop<=800)){
            companyrow1.style.transform = "translateX("+(((Animateblock.scrollTop)/10000))+"px)";
            companyrow2.style.transform = "translateX("+(((Animateblock.scrollTop)/10000))+"px)";
        }else{
            companyrow1.style.transform = "translateX(-1000px)";
            companyrow2.style.transform = "translateX(1000px)";
            // ............................
        }
        
        if((Animateblock.scrollTop>610) && (Animateblock.scrollTop<=800)){
            companyrow1box.style.opacity = 1;
            companyrow2box.style.opacity = 1;
        }else{
            companyrow1box.style.opacity = 0;
            companyrow2box.style.opacity = 0;
        }


        if((Animateblock.scrollTop>670) && (Animateblock.scrollTop<850)){
            companyrow1box.style.opacity = 1;
            companyrow2box.style.opacity = 1;
            companyrow1box.style.transform= "rotate(40deg) translateY(-38px) translateX(-30px)";
            companyrow2box.style.transform= "translateY(0px)";
        }
        else{
            companyrow1box.style.opacity = 0;
            companyrow2box.style.opacity = 0;
            companyrow1box.style.transform= "rotate(140deg) translateY(-200px) translateX(-100px)";
            companyrow2box.style.transform= "translateY(-215px)";
        }
        
    }

    // what we do section 
    if((Animateblock.scrollTop+200>WeDoBlock.offsetTop)){
        dots.forEach((dot)=>{
            if(dot.classList.contains("activelink")){
                dot.classList.remove("activelink")
            }})
        
        
            document.querySelector("#dots a:nth-child(3)").classList.add("activelink");
      
      if((Animateblock.scrollTop>=1080) && (Animateblock.scrollTop<=1440)){
        whatwedoslideleft.style.opacity = 0.7+ (Animateblock.scrollTop/10000);
        whatwedoslideright.style.opacity = 0.7+ (Animateblock.scrollTop/10000);
        whatwedogetcall.style.opacity = 0.7+ (Animateblock.scrollTop/10000);
        whatwedogetcall.style.transform = "translate(50px, -"+(((Animateblock.scrollTop*4)/100))+"px)";
      }
      else{
        whatwedoslideleft.style.opacity = 0.1;
        whatwedoslideright.style.opacity = 0.1;
        whatwedogetcall.style.opacity = 0.1;
        whatwedogetcall.style.transform = "translate(50px, 0px)";
      }
    }


    // about section 
    if((Animateblock.scrollTop+200>aboutusslide.offsetTop)){
        dots.forEach((dot)=>{
            if(dot.classList.contains("activelink")){
                dot.classList.remove("activelink")
            }})
        
            document.querySelector("#dots a:nth-child(4)").classList.add("activelink");
        if(Animateblock.scrollTop>1700 && Animateblock.scrollTop<1900){
            aboutTag.style.transform = "translate(calc(900px - " + (Animateblock.scrollTop*0.35) + "px),-500px)";
            
        }
        else{
            aboutTag.style.transform = "translate(0,0)";
        }
       if(Animateblock.scrollTop>1850 && Animateblock.scrollTop<2000){
        aboutleft.style.opacity = 0.7+ (Animateblock.scrollTop/10000);
       aboutright.style.opacity = 0.7+ (Animateblock.scrollTop/10000);
       aboutviewmore.style.transform = "translate(-5vw, -"+(((Animateblock.scrollTop*0.2)/100))+"vw)";
       }else{
        aboutleft.style.opacity = 0.1;
        aboutright.style.opacity = 0.1;
        aboutviewmore.style.transform = "translate(-5vw, "+(((Animateblock.scrollTop*0.2)/100))+"vw)";
       }
    }
    
    // projects section 
    if((Animateblock.scrollTop+200>ourprojectsslide.offsetTop)){
       
        dots.forEach((dot)=>{
            if(dot.classList.contains("activelink")){
                dot.classList.remove("activelink")
            }})
        
            document.querySelector("#dots a:nth-child(5)").classList.add("activelink");


        projects.forEach((project)=>{
            if(Animateblock.scrollTop<2480){
                project.style.transform=  "rotateY(90deg) translateZ(60px)";
            }
            else if(Animateblock.scrollTop<2500){
                project.style.transform=  "rotateY(35deg) translateZ(30px)";
            }
            else{
                project.style.transform=  "rotateY(0) translateZ(0)";
            }
        })
    }


    // satisfied client section 
    if((Animateblock.scrollTop+200>satisfiedclientslide.offsetTop)){
       
        dots.forEach((dot)=>{
            if(dot.classList.contains("activelink")){
                dot.classList.remove("activelink")
            }})
        
            document.querySelector("#dots a:nth-child(6)").classList.add("activelink");


            if(Animateblock.scrollTop>3050 && Animateblock.scrollTop<3300){
                satisfiedclientslide.style.opacity = 0.7+ (Animateblock.scrollTop/10000);
            }
            else if(Animateblock.scrollTop>3300 && Animateblock.scrollTop<3400){
                satisfiedclientslide.style.opacity = 0.8;
            }
            else{
                satisfiedclientslide.style.opacity = 0.5;
            }
        
        

         if(Animateblock.scrollTop>3050 && Animateblock.scrollTop<3100){
            happyclient.style.transform = "translate(-10px, 50px)";
         }else if(Animateblock.scrollTop>3200){
            happyclient.style.transform = "translate(-10px, 0px)";
         }else{
            happyclient.style.transform = "translate(-10px, 100px)";
         }
        
    }


    // Contact Section section 
    if((Animateblock.scrollTop+200>sendUsAmessageslide.offsetTop)){
        dots.forEach((dot)=>{
            if(dot.classList.contains("activelink")){
                dot.classList.remove("activelink")
            }})
        
            document.querySelector("#dots a:nth-child(7)").classList.add("activelink");


        if((Animateblock.scrollTop<3800)){
            contactleftside.style.transform = "translateX(-600px)";
            contactleftside.style.opacity = "0";
            contactrightside.style.opacity = "0";
            sendsms.style.left = "120%";
            }
        else{
            contactleftside.style.transform = "translateX(0px)";
            contactleftside.style = "border-bottom-right-radius:30%;border-top-right-radius:30%;"
            contactleftside.style.opacity = "1";
            sendsms.style.left = "40%";
            contactrightside.style.opacity = 0.7+ (Animateblock.scrollTop*0.4/10000);
        }

        

        
    }




       
    

    })