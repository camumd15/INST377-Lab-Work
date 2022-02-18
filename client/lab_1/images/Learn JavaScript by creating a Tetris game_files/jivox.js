
// function initiate() {
var animation = new TimelineMax();
var $slider = $(".slider");
var $slides = $slider.find(".product");
var $navPrev = $(".prev");
var $navNext = $(".next");
var $dot = $(".dot");
var slidesNum = $slides.length;
var prevSlideID = null;
var currentSlideID = 0;
var isAnimating = false;
var isAutoPlay = false;

if(typeof dynamicData["AT_US"] != "undefined") {
	if(dynamicData["AT_US"][0]["PromoID"] != 502 && dynamicData["AT_US"][0]["PromoID"] != 505 && dynamicData["AT_US"][0]["PromoID"] != 507){
		document.getElementById("copy1").innerHTML = dynamicData["AT_US"][0]["Text1"];
		while(document.getElementById("copy").scrollWidth > document.getElementById("copy").clientWidth || document.getElementById("copy").scrollHeight > document.getElementById("copy").clientHeight){
		    $("#copy1").css('font-size', (parseInt($("#copy1").css('font-size').slice(0, -2)) - 1) + 'px');
		}
	}else{
		document.getElementById("copy1").innerHTML = dynamicData["AT_US"][0]["Text1_300x600"];
	}
	document.getElementById("copy2").innerText = dynamicData["AT_US"][0]["Text2"];
	document.getElementById("legal").innerHTML = dynamicData["AT_US"][0]["Channel"] +" "+dynamicData["AT_US"][0]["LegalText"];
}else{
	console.error("AT_US Main DB not found");
}


var ruleName = parent.dynamicJSONData['selected-rule'],
    productsCookie = dynamicData['cookieData:cookieData.jvxdynsl_group2'],
	carts = dynamicData["Women_Cart"],
	products = dynamicData["Women_Product"],
	category = dynamicData["RecoCatWomenDB"],
	bestSeller = dynamicData["RecoTopProdWomenDB"],
	productsArray = [],
	productsID = [],
	findGroup = [],
	galleryProducts = 6;

        if(dynamicData["AT_US"][0]["PromoID"] == '507'){
	    bestSeller = dynamicData["Women_BestSellers"];
            category = dynamicData["Women_Category"];
	}
	

	if (ruleName.indexOf("cart_abandoners") > -1) {
		if(carts.length > 0){
			carts.reverse();
			for(let i=0; i< carts.length; i++){
				productsArray.push(carts[i]);
				productsID.push(carts[i]["_assetKey"]);
				findGroup.push(carts[i]["item_group_id"]);
			}
		}
		if(typeof products != "undefined" && products.length > 0 && productsArray.length < galleryProducts) {
			for(let i=0; i< products.length && productsID.length < galleryProducts; i++){
			   if(productsID.indexOf(products[i]["id"]) == -1 && findGroup.indexOf(products[i]["_assetKey"]) == -1){
				   productsArray.push(products[i]);
				   productsID.push(products[i]["id"]);
				   findGroup.push(products[i]["_assetKey"]);
			   }
			}
		}
		if(typeof category != "undefined" && category.length > 0 && productsArray.length < galleryProducts){
			for(let i=0; i< category.length && productsID.length < galleryProducts; i++){
			   if(productsID.indexOf(category[i]["_assetKey"]) == -1 && findGroup.indexOf(category[i]["item_group_id"]) == -1){
				   productsArray.push(category[i]);
				   productsID.push(category[i]["_assetKey"]);
				   findGroup.push(category[i]["item_group_id"]);
			   }
			}
		}
		if(typeof bestSeller != "undefined" && bestSeller.length > 0 && productsArray.length < galleryProducts){
			for(let i=0; i< bestSeller.length && productsID.length < galleryProducts; i++){
			   if(productsID.indexOf(bestSeller[i]["_assetKey"]) == -1 && findGroup.indexOf(bestSeller[i]["item_group_id"]) == -1){
				   productsArray.push(bestSeller[i]);
				   productsID.push(bestSeller[i]["_assetKey"]);
				   findGroup.push(bestSeller[i]["item_group_id"]);
			   }
			}
		}
	}else if (ruleName.indexOf("product_viewed") > -1) {
		if(typeof products != "undefined") {
			if(products.length > 0){
			   for(let i=0; i< products.length; i++){
				   productsArray.push(products[i]);
				   productsID.push(products[i]["id"]);
				   findGroup.push(products[i]["_assetKey"]);
			   }
			}
		}
		if(typeof category != "undefined" && category.length > 0 && productsArray.length < galleryProducts){
			for(let i=0; i< category.length && productsID.length < galleryProducts; i++){
			   if(productsID.indexOf(category[i]["_assetKey"]) == -1 && findGroup.indexOf(category[i]["item_group_id"]) == -1){
				   productsArray.push(category[i]);
				   productsID.push(category[i]["_assetKey"]);
				   findGroup.push(category[i]["item_group_id"]);
			   }
			}
		}
		if(typeof bestSeller != "undefined" && bestSeller.length > 0 && productsArray.length < galleryProducts){
			for(let i=0; i< bestSeller.length && productsID.length < galleryProducts; i++){
			   if(productsID.indexOf(bestSeller[i]["_assetKey"]) == -1 && findGroup.indexOf(bestSeller[i]["item_group_id"]) == -1){
				   productsArray.push(bestSeller[i]);
				   productsID.push(bestSeller[i]["_assetKey"]);
				   findGroup.push(bestSeller[i]["item_group_id"]);
			   }
			}
		}
	}else if (ruleName.indexOf("category_viewed") > -1) {
		if(typeof category != "undefined" && category.length > 0 && productsArray.length < galleryProducts){
			for(let i=0; i< category.length && productsID.length < galleryProducts; i++){
			   if(productsID.indexOf(category[i]["_assetKey"]) == -1 && findGroup.indexOf(category[i]["item_group_id"]) == -1){
				   productsArray.push(category[i]);
				   productsID.push(category[i]["_assetKey"]);
				   findGroup.push(category[i]["item_group_id"]);
			   }
			}
		}
		if(typeof bestSeller != "undefined" && bestSeller.length > 0 && productsArray.length < galleryProducts){
			for(let i=0; i< bestSeller.length && productsID.length < galleryProducts; i++){
			   if(productsID.indexOf(bestSeller[i]["_assetKey"]) == -1 && findGroup.indexOf(bestSeller[i]["item_group_id"]) == -1){
				   productsArray.push(bestSeller[i]);
				   productsID.push(bestSeller[i]["_assetKey"]);
				   findGroup.push(bestSeller[i]["item_group_id"]);
			   }
			}
		}
	}else if (ruleName.indexOf("best_sellers") > -1 || ruleName.indexOf("new_user") > -1 || ruleName.indexOf("default") > -1 ||ruleName.indexOf("Acq_Women") > -1 || ruleName.indexOf("Acq_Girl") > -1 || ruleName.indexOf("Acq_Women_320x50") > -1 ||ruleName.indexOf("Acq_Girl_320x50") > -1 || ruleName.indexOf("Acq_Women_Default") > -1 || ruleName.indexOf("Acq_Girl_Default") > -1 || dynamicData["AT_US"][0]["Campaign_Status"] == "Preview") {
	   if(typeof bestSeller != "undefined" && bestSeller.length > 0 && productsArray.length < galleryProducts){
			for(let i=0; i< bestSeller.length && productsID.length < galleryProducts; i++){
			   if(productsID.indexOf(bestSeller[i]["_assetKey"]) == -1 && findGroup.indexOf(bestSeller[i]["item_group_id"]) == -1){
				   productsArray.push(bestSeller[i]);
				   productsID.push(bestSeller[i]["_assetKey"]);
				   findGroup.push(bestSeller[i]["item_group_id"]);
			   }
			}
		}
	}else {
		console.error("No rules found");
	}

console.log("productsArray", productsArray);
console.log("productsIDArray", productsID);

let reportImp = productsID.slice(0, galleryProducts).join("_"); 
jvxAd.recordAssetVariation("impression", reportImp);


document.getElementById("slide1").src = productsArray[0]["image_link"];
document.getElementById("slide2").src = productsArray[1]["image_link"];
document.getElementById("slide3").src = productsArray[2]["image_link"];
document.getElementById("slide4").src = productsArray[3]["image_link"];

function init() {
    TweenLite.set($slides, {
        opacity: "0"
    });
    /*$navPrev.on("click", gotoPrevSlide);
    $navNext.on("click", gotoNextSlide);*/
    startAutoPlay(true);
    gotoSlide(0, 0);
}

/*function gotoPrevSlide() {
    var slideToGo = currentSlideID - 1;
    if (slideToGo <= -1) {
        slideToGo = slidesNum - 1;
    }
    stopAutoPlay();
    gotoSlide(slideToGo, 1, "prev");
}*/

function gotoNextSlide() {
    var slideToGo = currentSlideID + 1;
    if (slideToGo >= slidesNum) {
        slideToGo = 0;
    }
    stopAutoPlay();
    gotoSlide(slideToGo, 1, "next");
}
parent.jQuery("#dot1,#dot2,#dot3,#dot4",document).on({
    click : function(e){
e.stopPropagation();
        var TweenLiteSlider = new TimelineMax();
        var value = this.id.split("dot")[1];
        stopAutoPlay();
        gotoSlide((value-1),1,"next");
    }
});
function gotoSlide(slideID, _time, _direction) {
    if (!isAnimating) {
        isAnimating = true;
        prevSlideID = currentSlideID;
        currentSlideID = slideID;
        var $prevSlide = $slides.eq(prevSlideID);
        var $currentSlide = $slides.eq(currentSlideID);
        var elems = document.querySelector(".active");
        if(elems != null) {
             elems.classList.remove("active");
			for (var i = 1;i <= document.getElementsByClassName("product").length; i++) {
    			$("#slide"+i)[0].style.zIndex = "999";
    		}
            $("#dot"+(currentSlideID+1)).addClass("active");
            $("#slide"+(currentSlideID+1))[0].style.zIndex = "9999";
        }
        var time = 1;
        if (_time !== null) {
            time = _time;
        }
        var direction = "next";
        if (_direction != null) {
            direction = _direction;
        }
        TweenLite.to($prevSlide, 0.35, {
           opacity: "0",ease: Power0.easeNone
        },'=0');
        TweenLite.fromTo($currentSlide, 0.35, {
            opacity: "0"
        }, {
            opacity: "1",ease: Power0.easeNone
        },'=2');
        TweenLite.delayedCall(time, function() {
            isAnimating = false;
        });

    }
}

function play(){
  gotoNextSlide();
  TweenLite.delayedCall(2, play);
}

function startAutoPlay(immediate) {
    if (immediate != null) {
        immediate = false;
    }
    if (immediate) {
        gotoNextSlide();
    }
    TweenLite.delayedCall(2, play);
}
function stopAutoPlay() {
  isAutoPlay = false;
  gsap.killTweensOf(play);
}

setTimeout(function(){stopAutoPlay() }, 28000);
parent.jQuery("#slide1,#slide2,#slide3,#slide4",document).on({
  click : function(e){
        e.stopPropagation();
        slideNumber = this.id.match(/[0-9]+/g)[0];
        jvxAd.recordAssetVariation("click",productsID[(slideNumber-1)]);
       if ((typeof dynamicData["AT_US_Placement"] != "undefined") && (typeof dynamicData["AT_US"] != "undefined")) {
			if (dynamicData["AT_US_Placement"][0]["Site"] == "DCM") {
				var tempURL = productsArray[(slideNumber - 1)]["link"] + "&tid=" + dynamicData["AT_US_Placement"][0]["Omniture_TID"] + "&epid=" + ap_DataSignal8 + "&ecid=" + ap_DataSignal9;
			} else {
				var tempURL = productsArray[(slideNumber - 1)]["link"] + "&tid=" + dynamicData["AT_US_Placement"][0]["Omniture_TID"] + "&epid=" + dynamicData["AT_US_Placement"][0]["DCM_Placement"] + "&ecid=" + dynamicData["AT_US_Placement"][0]["Creative_ID"];
			}
			jvxAd.openClickThrough(tempURL);
		} else {
			if (dynamicData["AT_US_Placement"][0]["Site"] == "DCM") {
				var tempURL = productsArray[(slideNumber - 1)]["link"] + "&tid=" + dynamicData["AT_US_Placement"][0]["Omniture_TID"] + "&epid=" + ap_DataSignal8 + "&ecid=" + ap_DataSignal9;
				jvxAd.openClickThrough(tempURL);
			} else {
				jvxAd.openClickThrough(dynamicData["AT_US_Placement"][0]["CTURL"]);
			}
		}
      }
});
parent.jQuery("#maincontainer",document).on({
    click : function(e){
        e.stopPropagation();
        jvxAd.recordAssetVariation("click", "BG click");
     if (dynamicData["AT_US_Placement"][0]["Site"] == "DCM") {
			var tempURL = "https://athleta.gap.com/browse/category.do?cid=1023728&tid=" + dynamicData["AT_US_Placement"][0]["Omniture_TID"] + "&epid=" + ap_DataSignal8 + "&ecid=" + ap_DataSignal9;
			jvxAd.openClickThrough(tempURL);
		  } else {
			jvxAd.openClickThrough(dynamicData["AT_US_Placement"][0]["CTURL"]);
		  }
    }
});
init();
/*while(document.getElementById("copy").scrollWidth > document.getElementById("copy").clientWidth || document.getElementById("copy").scrollHeight > document.getElementById("copy").clientHeight){
    for (var i = 1; i < 2; i++) {
      $("#copy"+i).css('font-size', (parseInt($("#copy"+i).css('font-size').slice(0, -2)) - 1) + 'px');
    }
  }*/