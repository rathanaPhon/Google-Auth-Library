<!DOCTYPE html>
<html>
  <head> 
    <title>map</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script type="module" src="./index.js"></script>
    <style type="text/css">
      html, body, #mapDiv {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="mapDiv">Google maps</div>
    
    <div>
       <iframe src="http://rathanaphon.github.io/webpage/sitemap.xml"/ style="width="210px" height="120px" </iframe>
    </div>
   <script>
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "435480fb15ed43ff",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
</script> 
    <script nonce="AXxwr14OjNQH-mKo9IbL4w">
      function onEmbedLoad() {
        initEmbed([null,null,null,null,null,null,null,["en","kh"],[null,null,null,"/maps/api/js/ApplicationService.GetEntityDetails","/maps/embed/upgrade204",null,"/maps/embed/record204"],null,null,null,null,null,null,null,null,null,null,null,null,[[[15638.20223692719,104.8804897,11.5123092],[0,0,0],null,13.10000038146973],null,0],null,null,null,0,null,null,null,null,null,null,[1]]);
      }
      function onApiLoad() {
        var embed = document.createElement('script');
        embed.src = "https://maps.gstatic.com/maps-api-v3/embed/js/56/4/init_embed.js";
        document.body.appendChild(embed);
      }
    </script>
    <link rel="preload" href="https://maps.gstatic.com/maps-api-v3/embed/js/56/4/init_embed.js" nonce="AXxwr14OjNQH-mKo9IbL4w" as="script" />
    <script src="https://maps.googleapis.com/maps/api/js?client=google-maps-embed&paint_origin=&libraries=geometry,search&v=weekly&loading=async&language=en&region=kh&callback=onApiLoad" nonce="AXxwr14OjNQH-mKo9IbL4w" async defer>
    </script>
     <script type="text/JavaScript">
      let map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
initMap();
  </script>
    <script type="text/JavaScript">
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 37.7893719,
      lng: -122.3942,
    },
    zoom: 16,
    heading: 320,
    tilt: 47.5,
    mapId: "90f87356969d889c",
  });
  const buttons = [
    ["Rotate Left", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER],
    ["Rotate Right", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER],
    ["Tilt Down", "tilt", 20, google.maps.ControlPosition.TOP_CENTER],
    ["Tilt Up", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER],
  ];

  buttons.forEach(([text, mode, amount, position]) => {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("button");

    controlUI.classList.add("ui-button");
    controlUI.innerText = `${text}`;
    controlUI.addEventListener("click", () => {
      adjustMap(mode, amount);
    });
    controlDiv.appendChild(controlUI);
    map.controls[position].push(controlDiv);
  });

  const adjustMap = function (mode, amount) {
    switch (mode) {
      case "tilt":
        map.setTilt(map.getTilt() + amount);
        break;
      case "rotate":
        map.setHeading(map.getHeading() + amount);
        break;
      default:
        break;
    }
  };
}

window.initMap = initMap;
   </script>
  </body>
</html>
  
