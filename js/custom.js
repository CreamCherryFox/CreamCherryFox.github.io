

// PRELOADER JS
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


// jQuery to collapse the navbar on scroll //
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();


  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  // NIVO LIGHTBOX
  $('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',

    });



  // HOME BACKGROUND SLIDESHOW
  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
       "images/home-bg-slideshow1.jpg", 
       "images/home-bg-slideshow2.jpg",
        ],  {duration: 2000, fade: 750});
    });
  })

});

// ********************************************************************
//
//  custom project show
//
// ********************************************************************
var projectData =
[
  {
    "projectNum": "1",
    "projectName": "Quinn",
    "projectWork": "APP UI / Graphic Design",
    "projectSliderPicTotal": 5,
    "projectFirstImage": "images/quinnPic01.png",
    "sliderPicArray": ['images/quinnPic01.png', 'images/quinnPic02.png', 'images/quinnPic03.png', 'images/quinnPic04.png', 'images/quinnPic05.png'],
    "projectDescription": "Quinn is an iBeacon technical app. It is born to redefine the way how people bid for a restaurants table. In this project, I need to design UI, draw the special restaurant icon ,design the logo, and also need to think about all the situation UX flow by loacation base.",
    "porjectSkill": "Skill: Hand Draw, Illustrator, Photoshop, HTML5, CSS3, Javascript, React.js",
    "onlineLink": "Online: ",
    "onlineLinkTitle": "iOS",
    "linkDomain": "https://itunes.apple.com/us/app/quinn/id988342827",
    "onlineLinkTitle02": "Android",
    "linkDomain02": "https://play.google.com/store/apps/details?id=tw.kklabs.quinn"
  },
  {
    "projectNum": "2",
    "projectName": "Museo",
    "projectWork": "APP UI / Web Design",
    "projectSliderPicTotal": 4,
    "projectFirstImage": "images/museoPic01.png",
    "sliderPicArray": ['images/museoPic01.png', 'images/museoPic02.png', 'images/museoPic03.png', 'images/museoPic04.png'],
    "projectDescription": "In this project, I design the museum tour APP UI and the website. It a recommended system, from ticket's sell to tour by iBeacon.",
    "porjectSkill": "Skill: Illustrator, Photoshop, HTML5, CSS3, Javascript",
    "onlineLink": "",
    "onlineLinkTitle": "",
    "linkDomain": "",
    "onlineLinkTitle02": "",
    "linkDomain02": ""
  },
  {
    "projectNum": "3",
    "projectName": "Silvereye",
    "projectWork": "LOGO / Web Design",
    "projectSliderPicTotal": 5,
    "projectFirstImage": "images/silverLogoPic01.png",
    "sliderPicArray": ['images/silverLogoPic01.png', 'images/silverLogoPic02.png', 'images/silverLogoPic03.png', 'images/silverLogoPic04.png', 'images/silverLogoPic05.png'],
    "projectDescription": "This is a tracker service web. I need to layout and use css animation to finish the visual effects. And also other service API connect. In this project, I also need to design the logo. Beacuse it's a tracker, and solution platform. So I design this logo by a mechanical bird concept. Also meets the name: SilverEye. I put a play button in this logo's negative space. Means play it, the mechanical bird will start to track.",
    "porjectSkill": "Skill: HTML5, CSS3, Javascript, Hand Draw, Illustrator",
    "onlineLink": "Online: ",
    "onlineLinkTitle": "SilverEye.io",
    "linkDomain": "http://www.silvereye.io",
    "onlineLinkTitle02": "",
    "linkDomain02": ""
  },
  {
    "projectNum": "4",
    "projectName": "SPOT",
    "projectWork": "Web Design / IoT Platform Features / Cardboard VR",
    "projectSliderPicTotal": 5,
    "projectFirstImage": "images/SPOTPic01.png",
    "sliderPicArray": ['images/SPOTPic01.png', 'images/SPOTPic02.png', 'images/SPOTPic03.png', 'images/SPOTPic04.png', 'images/SPOTPic05.png'],
    "projectDescription": "This is a online contest web. I need to edit this web very carefully and let people vote in this site when contest is continuing.",
    "porjectSkill": "Skill: ",
    "onlineLink": "Online: ",
    "onlineLinkTitle": "SPOT Contest 2015",
    "linkDomain": "https://event.spot.ms/spotContest2015",
    "onlineLinkTitle02": "",
    "linkDomain02": ""
  },
  {
    "projectNum": "5",
    "projectName": "Tinan Smart City",
    "projectWork": "Web Design / Iot Game UI / Map Graphic Design",
    "projectSliderPicTotal": 5,
    "projectFirstImage": "images/tinanSpotPic01.png",
    "sliderPicArray": ['images/tinanSpotPic01.png', 'images/tinanSpotPic02.png', 'images/tinanSpotPic03.png', 'images/tinanSpotPic04.png', 'images/tinanSpotPic05.png'],
    "projectDescription": "This project is to make a landing page, map design, and create fun mobile application with the iBeacon platform. The landing page is the platform introduction. I need to design a new Tinan City map, and layout for RWD. In this case, just for fun, I draw a small image by CSS. Please click the web and See the buliding and the trees. I also design many kind of application in iBeacon techonology.",
    "porjectSkill": "Skill: Illustrator, Photoshop, HTML5, CSS3, Javascript",
    "onlineLink": "Online: ",
    "onlineLinkTitle": "Tainan Smart City Web",
    "linkDomain": "http://tainan.spot.ms",
    "onlineLinkTitle02": "",
    "linkDomain02": ""
  },
  {
    "projectNum": "6",
    "projectName": "URS",
    "projectWork": "APP UI / IoT Gam",
    "projectSliderPicTotal": 5,
    "projectFirstImage": "images/URSPic01.png",
    "sliderPicArray": ['images/URSPic01.png', 'images/URSPic02.png', 'images/URSPic03.png', 'images/URSPic04.png', 'images/URSPic05.png'],
    "projectDescription": "",
    "porjectSkill": "Skill: ",
    "onlineLink": "",
    "onlineLinkTitle": "",
    "linkDomain": "",
    "onlineLinkTitle02": "",
    "linkDomain02": ""
  },
  {
    "projectNum": "7",
    "projectName": "Kishu An",
    "projectWork": "Web E-book",
    "projectSliderPicTotal": 5,
    "projectFirstImage": "images/ksBookPic01.png",
    "sliderPicArray": ['images/ksBookPic01.png', 'images/ksBookPic02.png', 'images/ksBookPic03.png', 'images/ksBookPic04.png', 'images/ksBookPic05.png'],
    "projectDescription": "This E-Book is designed from paper book. I need to code the RWD with no media query, so it's only one CSS for all the devices. And there's a small collection game in this E-Book. Try read it, play it, and remember to turn on the sound.",
    "porjectSkill": "Skill: HTML5, CSS3, Javascript",
    "onlineLink": "Online: ",
    "onlineLinkTitle": "Kishu An E-Book",
    "linkDomain": "http://www.kklabs.tw/ebook/ks01",
    "onlineLinkTitle02": "",
    "linkDomain02": ""
  },
{
    "projectNum": "8",
    "projectName": "Cabin Day",
    "projectWork": "WebVR",
    "projectSliderPicTotal": 5,
    "projectFirstImage": "images/myVRGamePic01.png",
    "sliderPicArray": ['images/myVRGamePic01.png', 'images/myVRGamePic02.png', 'images/myVRGamePic03.png', 'images/myVRGamePic04.png', 'images/myVRGamePic05.png'],
    "projectDescription": "This a web VR Game ,coding with mozillaVR's framework A-frame. In this project, I need to PS the background image to be a 360° image, and also need to put the 3D object in the correct position. I am still updateing this game. Try it in the google cardboard.",
    "porjectSkill": "Skill: Illustrator, Photoshop, HTML5, CSS3, Javascript, A-frame",
    "onlineLink": "Online: ",
    "onlineLinkTitle": "Cabin Day",
    "linkDomain": "https://event.spot.ms/sybiltest/VRGame01/index.html",
    "onlineLinkTitle02": "",
    "linkDomain02": ""
  }
]

var picNum=null; // picNum is about the number of picture's png file name , not the array count number.

function projectPicNext(k) {
  console.log("click btn next");
  console.log("print currentSlider="+currentSlider);

  var k=currentSlider;
  var a=projectData[currentSlider].projectSliderPicTotal;
  console.log("print a="+a);

  if(picNum==null)
  {
    $(".imgProjectRWD").css("background-image","url("+projectData[k].sliderPicArray[1]+")");
    picNum=2;
  }
  else if(picNum!=null)
  { 
    if(picNum<a)
    {
      $(".imgProjectRWD").css("background-image","url("+projectData[k].sliderPicArray[picNum]+")");
      picNum=picNum+1;
    }
    else if(picNum==a)
    {
      $(".imgProjectRWD").css("background-image","url("+projectData[k].sliderPicArray[0]+")");
      picNum=1;
    }
  }

  console.log("END click Print picNum="+picNum);

}

function projectPicPrev(k) {
  console.log("click btn previous");
  console.log("print currentSlider="+currentSlider);

  var k=currentSlider;
  var a=projectData[currentSlider].projectSliderPicTotal;

  if(picNum==null)
  { 
    $(".imgProjectRWD").css("background-image","url("+projectData[k].sliderPicArray[a-1]+")");
    picNum=a;
  }
  else if(picNum!=null) 
  {
    if(picNum==1)
    {
      $(".imgProjectRWD").css("background-image","url("+projectData[k].sliderPicArray[a-1]+")");
      picNum=a;
    }
    else if(picNum>1 && picNum<=a)
    {
      $(".imgProjectRWD").css("background-image","url("+projectData[k].sliderPicArray[picNum-2]+")");
      picNum=picNum-1;
    }
  }

  console.log("END click Print picNum="+picNum);

}

var currentSlider=null;

function projectShow(k) {
  console.log("project show");

  currentSlider=k;

  $(".maskProjectShow").css("display","block");
  $(".projectShowSection").css("display","block");
  
 
  $(".imgProjectRWD").show();
  $(".imgProjectRWD").css("background-image","url("+projectData[currentSlider].projectFirstImage+")");
  
  openDesArea();

  $(".projectTitleText").html(projectData[currentSlider].projectName);
  $(".projectWorkText").html(projectData[currentSlider].projectWork);
  $(".descriptionParagraph").html(projectData[currentSlider].projectDescription);
  $(".projectSkillText").html(projectData[currentSlider].porjectSkill);

  $(".onlineLinkText").html(projectData[currentSlider].onlineLink);
  $(".linkText").html(projectData[currentSlider].onlineLinkTitle);
  $(".linkText02").html(projectData[currentSlider].onlineLinkTitle02);

}

function openProjectOnlineTab(url) {
  console.log("open project online tab");

  var win = window.open(projectData[currentSlider].linkDomain);

}

function openProjectOnlineTab02(url) {
  console.log("open project online tab 02");

  var win = window.open(projectData[currentSlider].linkDomain02);

}


function closeProjectShow() {
  console.log("close project show");
  console.log("print currentSlider="+currentSlider);

  $(".maskProjectShow").css("display","none");
  $(".projectShowSection").css("display","none");
  
  $(".imgProjectRWD").hide();

  // $(".linkTextArea").css("display","none");

  currentSlider=null;
  picNum=null;

}

function closeDesArea() {
  $(".projectDescriptionArea").animate({
    bottom: '-560px'
  },"fast");

  $("#closeDownBtn").css("display","none");
  $("#openUpBtn").css("display","block");
}

function openDesArea() {
  
  $(".projectDescriptionArea").animate({
    bottom: '-50px'
  },"slow");

  $("#closeDownBtn").css("display","block");
  $("#openUpBtn").css("display","none");
}
