const generateSTYLES = () => {
    return `<style>
    @import url(https://fonts.googleapis.com/css?family=opensans:500);
    #img{
        background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
        background-repeat:no-repeat;
        height: 400px;
        background-position: center;
        }
        #content{
            align-items: center;
            align-content: center;
            text-align: center;
        
        }
        
        #content h1,p.#error{ 
            padding:15px 0; 
            background:#fff;
             font-family: 'Arvo', serif;
        }
        p{
            font-size: 33px;
        }
        h1{
            font-size: 43px;
        }
        .text-center{
            text-align: center;
        }
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
     
    <div id = "img">
    <div class="error">
			<h1 class="text-center ">404</h1>
		</div>
    </div>
    <div id = "content">
        <h1>Don't be Distracted your Success is on the way </h1>
        <p> Get Back to Work</p>
    </div>
     `;
  };
  
  switch (window.location.hostname) {
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YOUTUBE");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.netflix.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("NETFLIX");
      break;
    case "www.roblox.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("ROBLOX");
      break;
    case "discord.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("DISCORD");
      break;
    case "www.linkedin.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("LINKEDIN");
      break;
    case "www.twitter.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("TWITTER");
      break;
    case "www.tiktok.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("tiktok");
        break;
    case "www.instagram.com":
        document.head.innerHTML = generateSTYLES();
       document.body.innerHTML = generateHTML("instagram");
        break; 
    case "in.pinterest.com":
         document.head.innerHTML = generateSTYLES();
         document.body.innerHTML = generateHTML("pinterest");
         break;
    case "www.snapchat.com":
            document.head.innerHTML = generateSTYLES();
            document.body.innerHTML = generateHTML("snapchat");
            break;  
    case "www.snapchat.com":
            document.head.innerHTML = generateSTYLES();
            document.body.innerHTML = generateHTML("snapchat");
            break; 
    case "web.whatsapp.com":
              document.head.innerHTML = generateSTYLES();
              document.body.innerHTML = generateHTML("whatsapp");
             break;  
     case "www.primevideo.com":
        document.head.innerHTML = generateSTYLES();
         document.body.innerHTML = generateHTML("amazonprime");
            break;
     case "www.mxplayer.in":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("mxplayer");
            break;
     case "www.hotstar.com":
        document.head.innerHTML = generateSTYLES();
         document.body.innerHTML = generateHTML("hostar");
                 break;
     case "www.hulu.com":
             document.head.innerHTML = generateSTYLES();
            document.body.innerHTML = generateHTML("hulu");
                     break;
  }