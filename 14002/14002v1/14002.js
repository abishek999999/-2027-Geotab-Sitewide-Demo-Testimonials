//5004 referred
(function () {
  var testID = "14002",
    testClass = "spz_t" + testID;

  if (!document.body.classList.contains(testClass)) {
    document.body.classList.add(testClass);
    setTimeout(function () {
      initVar();
    }, 1000);
  }

  function initVar() {
    // updateModal();
    // Downfunnel Main Code
    function spiralyze_conversion_tag() {
      console.log("Executed");
      var checkHiddenField = setInterval(function () {
        var hiddenField = document.querySelector(
          "form#generic-lead-form input#ab-name"
        );
        if (hiddenField) {
          clearInterval(checkHiddenField);
          console.log("Found the field");
          var conversionTag = getCookie("spiralyze_conversion_tag_demo");
          console.log(conversionTag);
          if (conversionTag) {
            console.log("Found the cookie");
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "value"
            ).set;
            nativeInputValueSetter.call(hiddenField, conversionTag);
            const event = new Event("input", { bubbles: true });
            hiddenField.dispatchEvent(event);
          }
        }
      }, 100);
    }
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    function hiddenValue(cookieName, newValue) {
      var spzConversionTag = getCookie(cookieName);
      var testPattern = /\d{4}/;

      if (!spzConversionTag) {
        setCookie(cookieName, newValue, 1);
      } else {
        var newTestNumberMatch = newValue.match(testPattern);
        if (newTestNumberMatch) {
          var newTestNumber = newTestNumberMatch[0];
          if (!spzConversionTag.includes(newValue)) {
            var oldTestValue = spzConversionTag.split(",").find(function (tag) {
              return tag.includes(newTestNumber);
            });

            if (oldTestValue) {
              var updatedValue = spzConversionTag.replace(
                oldTestValue,
                newValue
              );
              setCookie(cookieName, updatedValue, 1);

              if (window.mutiny && window.mutiny.client) {
                window.mutiny.client.trackConversion({
                  name:
                    newTestNumber +
                    "_duplicate : " +
                    newValue +
                    "-" +
                    oldTestValue,
                });
              }
              console.log(
                "Duplicate test #" + newTestNumber + " detected. Updated value."
              );
            } else {
              setCookie(cookieName, spzConversionTag + "," + newValue, 1);
            }
          } else {
            console.log(
              "The value " + newValue + " already exists. No action taken."
            );
          }
        }
      }
    }
    hiddenValue("spiralyze_conversion_tag_demo", "14002_V1");
    spiralyze_conversion_tag();

    // For Navigation CTA
    var ctaInterval2 = setInterval(function () {
      if (window.innerWidth >= 960) {
        if (
          document.querySelectorAll("div#NavigationBar").length > 0 &&
          document.querySelectorAll(
            'button[aria-label="Open Schedule a Demo popout"]'
          ).length > 0
        ) {
          clearInterval(ctaInterval2);
          setTimeout(() => {
            document
              .querySelector('button[aria-label="Open Schedule a Demo popout"]')
              .classList.add("getADemoCTA");
            document.querySelector(".getADemoCTA");
            //.nextElementSibling.style.display = "none";
            document
              .querySelector(".getADemoCTA")
              .parentNode.classList.add("CTAWrappers");
            document
              .querySelector("button#searchButton")
              .parentNode.parentNode.classList.add("searchWrapper");
            document.querySelector(".getADemoCTA").innerText = "Get a Demo";
            document
              .querySelector(".getADemoCTA")
              .addEventListener("click", function () {
                // updateModal();
                spiralyze_conversion_tag();
              });
          }, 500);
        }
      } else {
        // if (document.querySelectorAll('button[aria-label="Open Schedule a Demo popout"]').length > 0 && document.querySelectorAll('div[data-testid="mobile-banner-container-test-id"] button').length > 0) {
        if (
          document.querySelectorAll(
            'button[aria-label="Open Schedule a Demo popout"]'
          ).length > 0
        ) {
          clearInterval(ctaInterval2);
          setTimeout(() => {
            document
              .querySelector('button[aria-label="Open Schedule a Demo popout"]')
              .classList.add("getADemoCTA");
            document.querySelector(".getADemoCTA");
            //.nextElementSibling.style.display = "none";
            document.querySelector(".getADemoCTA").innerText = "Get a Demo";
            document
              .querySelector('button[aria-label="Open Schedule a Demo popout"]')
              .addEventListener("click", function () {
                // updateModal();
                spiralyze_conversion_tag();
              });
          }, 500);
        }
      }
    });

    // For body CTAs
    document.querySelectorAll("button").forEach((button) => {
      if (
        button.innerText.toLocaleLowerCase() == "get a demo" ||
        button.innerText.toLocaleLowerCase() == "schedule a demo" ||
        button.innerText.toLocaleLowerCase() == "get a demo today" ||
        button.innerText.toLocaleLowerCase() == "get started today" ||
        button.innerText.toLocaleLowerCase() == "schedule a demo" ||
        button.innerText.toLocaleLowerCase() == "30 day free trial" ||
        button.innerText.toLocaleLowerCase() == "book a demo" ||
        button.innerText.toLocaleLowerCase() == "request a demo" ||
        button.innerText.toLocaleLowerCase() == "get prices"
      ) {
        button.addEventListener("click", function (e) {
          // updateModal(e);
          spiralyze_conversion_tag();
        });

        if (button.innerText.toLocaleLowerCase() == "get prices") {
          button.classList.add("spz_14001_cta");
        }
      }
    });
    // var ctaInterval = setInterval(function () {
    //     if (document.querySelectorAll('button.MuiButtonBase-root.MuiButton-containedSecondary').length > 0) {
    //         clearInterval(ctaInterval);
    //         setTimeout(() => {
    //             document.querySelectorAll('button.MuiButtonBase-root.MuiButton-containedSecondary').forEach(function(element) {
    //                 element.addEventListener('click', function() {
    //                     updateModal();
    //                     spiralyze_conversion_tag()
    //                 });
    //             });
    //         }, 500);
    //     }
    // });

    var stickyCTAInterval = setInterval(function () {
      if (
        document.querySelector(
          'div[data-testid="mobile-banner-container-test-id"] button'
        )
      ) {
        clearInterval(stickyCTAInterval);
        setTimeout(() => {
          document
            .querySelector(
              'div[data-testid="mobile-banner-container-test-id"] button'
            )
            .addEventListener("click", function () {
              // updateModal();
              spiralyze_conversion_tag();
            });
        }, 500);
      }
    });
    setTimeout(() => {
      clearInterval(stickyCTAInterval);
    }, 40000);

    var heroCTAInterval = setInterval(function () {
      if (
        document.querySelector('div[data-testid="banner-container"] button')
      ) {
        clearInterval(heroCTAInterval);
        setTimeout(() => {
          document
            .querySelector('div[data-testid="banner-container"] button')
            .addEventListener("click", function () {
              console.log("Clicked2");
              // updateModal();
              spiralyze_conversion_tag();
              document.body.classList.remove("modalOpen");
            });
        }, 500);
      } else if (
        document.querySelector('div[data-testid="gridContainer"] button')
      ) {
        clearInterval(heroCTAInterval);
        setTimeout(() => {
          document
            .querySelector('div[data-testid="gridContainer"] button')
            .addEventListener("click", function () {
              console.log("Clicked3");
              // updateModal();
              spiralyze_conversion_tag();
              document.body.classList.remove("modalOpen");
            });
        }, 500);
      }
    });

    document
      .querySelector("h1")
      .parentElement.parentElement.parentElement.parentElement.classList.add(
        "bannerSection"
      );

    document.querySelector(".bannerSection").innerHTML = `
            <div class="formSection" >
		      <div class="formsec-container">
		      	<div class="formLeftContent">
                    <h3>Geotab GO</h3>
		      		<h2>Boost fleet efficiency and safety with next-gen telematics</h2>
		      		<ul>
		      			<li><b>Vehicle telematics.</b> Track location, driver behavior, engine health, fuel consumption, etc. Optimize with AI fleet insights.</li>
		      			<li><b>Driver safety.</b> Detect risky driver behavior. Send in-cab alerts for idling, harsh breaking, seatbelt use, etc. Real-time coaching.</li>
		      			<li><b>Plug-and-play device.</b> Just plug the GO device into your OBD-II port. No professional installation needed.</li>
		      		</ul>
		      		<div class="banner-button">
		        		<button class="schedule-demo-btn spz_14002_hero_demo">Get Prices</button>
		        		<a href="https://www.geotab.com/contact-us/sales-inquiry/" class="contact-btn spz_14002_hero_contact_us">Contact Sales</a>
		        	</div>
		      	</div>
		      	<div class="formRightContent">
                    <picture>
                        <source media="(max-width:600px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/geotab/14002/product_imagery_mobile_2.webp">
                        <source media="(max-width:1229px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/geotab/14002/product_imagery_tablet.webp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/geotab/14002/product_imagery.webp" alt="software packages" title="software packages">
                    </picture>
		      	</div>
		      </div>
	        </div>
        `;
    // Adding client Reviews
    document.querySelector(".formSection").insertAdjacentHTML(
      "afterend",
      `
            <div class="clientReviewsContainer">
                <div class="clientReviewsWrapper">
                    <div class="clientLogo">
                        <picture>
                            <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1747667151/geotab/14002/capterra-mobile.svg">
                            <source media="(max-width:1229px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1747667133/geotab/14002/capterra-tablet.svg">
                            <img class="capterra-logo" src="//res.cloudinary.com/spiralyze/image/upload/v1747667116/geotab/14002/capterra-desktop.svg" alt="Capterra Logo">
                        </picture>
                        <!--<div class="rating">
                            <picture>
                                <source media="(max-width:1229px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1726579937/geotab/5004/stars_3.svg">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579937/geotab/5004/stars_3.svg" alt="Rating">
                            </picture>
                            <p>4.5 </p>
                        </div>-->
                        <!--<picture>
                            <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1719233506/geotab/7002/capterra_logo_mobile.svg">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719233402/geotab/7002/capterra-desktop.svg" alt="Capterra Rating">
                        </picture>-->
                        <div class="custom-pagination"></div>
                    </div>
                    <div class="clientReviews hero_reviews splide" role="group">
                        <div class="splide__track">
                            <ul class="splide__list">
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">With Geotab, we’ve seen a 13% decrease in severe alerts for speeding and stop light infractions.</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>Dave Edgarton, AVP of Environmental Health and Safety</h2>
                                        <p class="designation">Custom‐Tailored and Logistical Solutions</p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">Whether tracking day-to-day dispatch or managing HOS, this software checks all the boxes.</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>Taylor, Operations and Tech Integration</h2>
                                        <p class="designation">Business Supplies & Equipment</p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">Joyful experience! Huge time and money saver for the company.</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>LeAnn, DOT Compliance Lead</h2>
                                        <p class="designation">Oil & Energy</p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">A great way to track fleet vehicles. You can easily see where each employee and detailed driving history.</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>Tim H, Branch Manager</h2>
                                        <p class="designation">Enterprise (>1,000 employees)</p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">Captures and aggregates real-world data like no other system we've ever seen. Transformative.</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>Scott, Vice President</h2>
                                        <p class="designation">Transportation/Trucking/Railroad</p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">Loaded with features to better track fuel consumption. High refresh rate for tracking, easy installation process, and instantly synchronizes engine data.</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>Kyle, Senior Safety Officer</h2>
                                        <p class="designation"></p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">The best telematics solution. Reliable, user friendly, and intuitive.</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>David, Regional Accounts Manager</h2>
                                        <p class="designation">Automotive</p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">We stopped speeding and extreme idling on the first day we used the program!</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>Tom, President</h2>
                                        <p class="designation">Construction</p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">Ideal for understanding and improving driver habits! GPS tracking and engine measurements are easy to understand.</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>Luis, Customer Service & Support</h2>
                                        <p class="designation">Electrical/Electronic Manufacturing</p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">It’s superb. Easily integrates with company software. We track our fuel and drivers to suit the needs of our business.</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>Mathias, Technical Support</h2>
                                        <p class="designation">Information Technology & Services</p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">Great for compliance verification. One of our departments forgot to log trips, and we easily printed a report to help them fill in the blanks! A lifesaver!</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>Terri, Executive Director</h2>
                                        <p class="designation">Individual & Family Services</p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">Incredibly helpful. You can see drivers in real time and reroute on the fly!</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>Tom H.</h2>
                                        <p class="designation">Transportation/Trucking/Railroad</p>
                                    </div>
                                </li>
                                <li class="clientReview splide__slide">
                                    <div class="contentTop">
                                        <div class="splide__slide__container">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726579897/geotab/5004/stars_2.svg" alt="Review Ratings">
                                        </div>
                                        <p class="reviewContent">A simple and user friendly telematics application. It’s so easy to organize vehicles and find specific units. Tracking mileage is a breeze!</p>
                                    </div>
                                    <div class="contentBottom">
                                        <h2>Berkley V. W., Lease and Rental Manager </h2>
                                        <p class="designation">Transportation/Trucking/Railroad</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button class="splide__toggle" type="button" style="display:none;">
                    <span class="splide__toggle__play">Play</span>
                    <span class="splide__toggle__pause">Pause</span>
                </button>
                    </div>
                </div>
            </div>
        `
    );

    function movePagination() {
      console.log("Move");
      if (window.outerWidth < 1230) {
        console.log("Move 1");
        if (
          document.querySelector(
            ".spz_t14002 .clientReviewsWrapper .clientLogo .custom-pagination"
          )
        ) {
          console.log("Move 11");
          document
            .querySelector(".spz_t14002 .clientReviews")
            .insertAdjacentElement(
              "afterend",
              document.querySelector(
                ".spz_t14002 .clientReviewsWrapper .clientLogo .custom-pagination"
              )
            );
        }
      } else {
        console.log("Move 2");
        if (
          document.querySelector(
            ".spz_t14002 .clientReviews + .custom-pagination"
          )
        ) {
          console.log("Move 22");
          document
            .querySelector(".spz_t14002 .clientReviewsWrapper .clientLogo")
            .insertAdjacentElement(
              "beforeend",
              document.querySelector(
                ".spz_t14002 .clientReviews + .custom-pagination"
              )
            );
        }
      }
    }
    movePagination();
    window.addEventListener("resize", movePagination);

    document.querySelector(
      ".spz_t14002 .formSection .formLeftContent .banner-button button.schedule-demo-btn"
    ).onclick = function () {
      if (
        document.querySelector(
          'button[aria-label="Open Schedule a Demo popout"]'
        )
      ) {
        const getPricesButton = document.querySelector(
          'main button[aria-label="Open Get prices popout"]'
        );
        if (getPricesButton) {
          getPricesButton.click();
        } else {
          document
            .querySelector('button[aria-label="Open Schedule a Demo popout"]')
            .click();
        }
      }
    };

    var swiperLoaded = false;

    var script = document.createElement("script");
    script.innerHTML = `
	function wt(n,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var n,t;n=this,t=function(){"use strict";var m="splide",a="data-"+m,n={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,DESTROYED:5},D=10;function _(n){n.length=0}function W(n){return!u(n)&&"object"==typeof n}function r(n){return Array.isArray(n)}function P(n){return"string"==typeof n}function M(n){return void 0===n}function u(n){return null===n}function C(n){return n instanceof HTMLElement}function y(n){return r(n)?n:[n]}function w(n,t){y(n).forEach(t)}function b(n,t){return-1<n.indexOf(t)}function x(n,t){return n.push.apply(n,y(t)),n}var o=Array.prototype;function s(n,t,i){return o.slice.call(n,t,i)}function k(t,n,i){t&&w(n,function(n){n&&t.classList[i?"add":"remove"](n)})}function A(n,t){k(n,P(t)?t.split(" "):t,!0)}function L(n,t){w(t,n.appendChild.bind(n))}function E(n,i){w(n,function(n){var t=i.parentNode;t&&t.insertBefore(n,i)})}function N(n,t){return(n.msMatchesSelector||n.matches).call(n,t)}function z(n,t){return n?s(n.children).filter(function(n){return N(n,t)}):[]}function S(n,t){return t?z(n,t)[0]:n.firstElementChild}function e(n,t,i){if(n)for(var r=Object.keys(n),r=i?r.reverse():r,u=0;u<r.length;u++){var o=r[u];if("__proto__"!==o&&!1===t(n[o],o))break}return n}function R(r){return s(arguments,1).forEach(function(i){e(i,function(n,t){r[t]=i[t]})}),r}function l(i,n){return e(n,function(n,t){r(n)?i[t]=n.slice():W(n)?i[t]=l(W(i[t])?i[t]:{},n):i[t]=n}),i}function O(t,n){t&&w(n,function(n){t.removeAttribute(n)})}function T(i,n,t){W(n)?e(n,function(n,t){T(i,t,n)}):u(t)?O(i,n):i.setAttribute(n,String(t))}function F(n,t,i){n=document.createElement(n);return t&&(P(t)?A:T)(n,t),i&&L(i,n),n}function I(n,t,i){if(M(i))return getComputedStyle(n)[t];u(i)||(n=n.style)[t]!==(i=""+i)&&(n[t]=i)}function j(n,t){I(n,"display",t)}function X(n,t){return n.getAttribute(t)}function B(n,t){return n&&n.classList.contains(t)}function G(n){return n.getBoundingClientRect()}function H(n){w(n,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function Y(n){return S((new DOMParser).parseFromString(n,"text/html").body)}function U(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function q(n,t){return n&&n.querySelector(t)}function J(n,t){return s(n.querySelectorAll(t))}function K(n,t){k(n,t,!1)}function V(n){return P(n)?n:n?n+"px":""}function Q(n,t){if(void 0===t&&(t=""),!n)throw new Error("["+m+"] "+t)}function c(n){setTimeout(n)}function Z(){}function v(n){return requestAnimationFrame(n)}var $=Math.min,nn=Math.max,tn=Math.floor,rn=Math.ceil,un=Math.abs;function on(n,t,i,r){var u=$(t,i),i=nn(t,i);return r?u<n&&n<i:u<=n&&n<=i}function en(n,t,i){var r=$(t,i),i=nn(t,i);return $(nn(r,n),i)}function cn(n){return(0<n)-(n<0)}function fn(t,n){return w(n,function(n){t=t.replace("%s",""+n)}),t}function an(n){return n<10?"0"+n:""+n}var sn={};function f(){var o={};function r(n,r){t(n,function(n,t){var i=o[n];o[n]=i&&i.filter(function(n){return n.n?n.n!==r:r||n.t!==t})})}function t(n,t){y(n).join(" ").split(" ").forEach(function(n){n=n.split(".");t(n[0],n[1])})}return{on:function(n,i,r,u){void 0===u&&(u=D),t(n,function(n,t){o[n]=o[n]||[],x(o[n],{i:n,r:i,t:t,u:u,n:r}).sort(function(n,t){return n.u-t.u})})},off:r,offBy:function(i){e(o,function(n,t){r(t,i)})},emit:function(n){var t=arguments;(o[n]||[]).forEach(function(n){n.r.apply(n,s(t,1))})},destroy:function(){o={}}}}var ln="mounted",dn="move",vn="moved",hn="click",pn="active",gn="inactive",mn="visible",yn="hidden",wn="slide:keydown",_n="refresh",bn="updated",xn="resize",kn="resized",An="repositioned",Ln="scrolled",d="destroy",p="lazyload:loaded";function En(n){var r=n.event,u={},o=[];function t(n,t,r){e(n,t,function(t,i){o=o.filter(function(n){return!!(n[0]!==t||n[1]!==i||r&&n[2]!==r)||(t.removeEventListener(i,n[2],n[3]),!1)})})}function e(n,t,i){w(n,function(n){n&&t.split(" ").forEach(i.bind(null,n))})}function i(){o=o.filter(function(n){return t(n[0],n[1])}),r.offBy(u)}return r.on(d,i,u),{on:function(n,t,i){r.on(n,t,u,i)},off:function(n){r.off(n,u)},emit:r.emit,bind:function(n,t,i,r){e(n,t,function(n,t){o.push([n,t,i,r]),n.addEventListener(t,i,r)})},unbind:t,destroy:i}}function zn(t,i,r,u){var o,n,e=Date.now,c=0,f=!0,a=0;function s(){if(!f){var n=e()-o;if(t<=n?(c=1,o=e()):c=n/t,r&&r(c),1===c&&(i(),u&&++a>=u))return l();v(s)}}function l(){f=!0}function d(){cancelAnimationFrame(n),f=!(n=c=0)}return{start:function(n){n||d(),o=e()-(n?c*t:0),f=!1,v(s)},rewind:function(){o=e(),c=0,r&&r(c)},pause:l,cancel:d,isPaused:function(){return f}}}function h(n){var t=n;return{set:function(n){t=n},is:function(n){return b(y(n),t)}}}function Sn(i,r){var u;return function(){var n=arguments,t=this;u||(u=zn(r||0,function(){i.apply(t,n),u=null},null,1)).start()}}var g={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};var Rn=m,Dn=m+"__slider",Pn=m+"__track",Mn=m+"__list",On=m+"__slide",Tn=On+"--clone",Fn=On+"__container",In=m+"__arrows",t=m+"__arrow",jn=t+"--prev",Wn=t+"--next",i=m+"__pagination",Cn=m+"__progress",Nn=Cn+"__bar",Xn=m+"__autoplay",Bn=m+"__play",Gn=m+"__pause",Hn="is-active",Yn="is-prev",Un="is-next",qn="is-visible",Jn="is-loading",Kn=[Hn,qn,Yn,Un,Jn];var Vn="role",Qn="aria-controls",Zn="aria-current",$n="aria-label",nt="aria-hidden",tt="tabindex",it="aria-orientation",rt=[Vn,Qn,Zn,$n,nt,it,tt,"disabled"],ut="slide",ot="loop",et="fade";function ct(u,r,i,o){var e,n=En(u),c=n.on,f=n.emit,a=n.bind,t=n.destroy,s=u.Components,l=u.root,d=u.options,v=d.isNavigation,h=d.updateOnMove,p=s.Direction.resolve,g=X(o,"style"),m=-1<i,y=S(o,"."+Fn),w=d.focusableNodes&&J(o,d.focusableNodes);function _(){var n;e||(n=u.index,b.call(this,x()),function(n){var t=!n&&!x();T(o,nt,t||null),T(o,tt,!t&&d.slideFocus?0:null),w&&w.forEach(function(n){T(n,tt,t?-1:null)});n!==B(o,qn)&&(k(o,qn,n),f(n?mn:yn,this))}.call(this,function(){if(u.is(et))return x();var n=G(s.Elements.track),t=G(o),i=p("left"),r=p("right");return tn(n[i])<=rn(t[i])&&tn(t[r])<=rn(n[r])}()),k(o,Yn,r===n-1),k(o,Un,r===n+1))}function b(n){n!==B(o,Hn)&&(k(o,Hn,n),v&&T(o,Zn,n||null),f(n?pn:gn,this))}function x(){return u.index===r}return{index:r,slideIndex:i,slide:o,container:y,isClone:m,mount:function(){var t=this;!function(){m||(o.id=l.id+"-slide"+an(r+1));{var n,t;v&&(t=m?i:r,n=fn(d.i18n.slideX,t+1),t=u.splides.map(function(n){return n.root.id}).join(" "),T(o,$n,n),T(o,Qn,t),T(o,Vn,"menuitem"))}}(),a(o,"click keydown",function(n){f("click"===n.type?hn:wn,t,n)}),c([_n,An,vn,Ln],_.bind(this)),h&&c(dn,function(n,t,i){e||(_.call(this),i===r&&b.call(this,!0))}.bind(this))},destroy:function(){e=!0,t(),K(o,Kn),O(o,rt),T(o,"style",g)},style:function(n,t,i){I(i&&y||o,n,t)},isWithin:function(n,t){return n=un(n-r),(n=!m&&(d.rewind||u.is(ot))?$(n,u.length-n):n)<=t}}}var ft="touchmove mousemove",at="touchend touchcancel mouseup";var st=["Left","Right","Up","Down"];var lt=a+"-lazy",dt=lt+"-srcset",vt="["+lt+"], ["+dt+"]";var ht=[" ","Enter","Spacebar"];var pt=Object.freeze({__proto__:null,Options:function(t,n,r){var u,o,i,e=Sn(f);function c(n){n&&removeEventListener("resize",e)}function f(){var n,n=(n=function(n){return n[1].matches},s(o).filter(n)[0]||[]);n[0]!==i&&function(n){n=r.breakpoints[n]||u;n.destroy?(t.options=u,t.destroy("completely"===n.destroy)):(t.state.is(5)&&(c(!0),t.mount()),t.options=n)}(i=n[0])}return{setup:function(){try{l(r,JSON.parse(X(t.root,a)))}catch(n){Q(!1,n.message)}u=l({},r);var i,n=r.breakpoints;n&&(i="min"===r.mediaQuery,o=Object.keys(n).sort(function(n,t){return i?+t-+n:+n-+t}).map(function(n){return[n,matchMedia("("+(i?"min":"max")+"-width:"+n+"px)")]}),f())},mount:function(){o&&addEventListener("resize",e)},destroy:c}},Direction:function(n,t,r){return{resolve:function(n,t){var i=r.direction;return g[n]["rtl"!==i||t?"ttb"===i?0:-1:1]||n},orient:function(n){return n*("rtl"===r.direction?1:-1)}}},Elements:function(n,t,i){var r,u,o,e,c=En(n).on,f=n.root,a={},s=[];function l(){var n;!function(){u=S(f,"."+Dn),o=q(f,"."+Pn),e=S(o,"."+Mn),Q(o&&e,"A track/list element is missing."),x(s,z(e,"."+On+":not(."+Tn+")"));var n=p("."+Xn),t=p("."+In);R(a,{root:f,slider:u,track:o,list:e,slides:s,arrows:t,autoplay:n,prev:q(t,"."+jn),next:q(t,"."+Wn),bar:q(p("."+Cn),"."+Nn),play:q(n,"."+Bn),pause:q(n,"."+Gn)})}(),n=f.id||function(n){return""+n+an(sn[n]=(sn[n]||0)+1)}(m),f.id=n,o.id=o.id||n+"-track",e.id=e.id||n+"-list",A(f,r=g())}function d(){[f,o,e].forEach(function(n){O(n,"style")}),_(s),K(f,r)}function v(){d(),l()}function h(){K(f,r),A(f,r=g())}function p(n){return S(f,n)||S(u,n)}function g(){return[Rn+"--"+i.type,Rn+"--"+i.direction,i.drag&&Rn+"--draggable",i.isNavigation&&Rn+"--nav",Hn]}return R(a,{setup:l,mount:function(){c(_n,v,D-2),c(bn,h)},destroy:d})},Slides:function(r,u,o){var n=En(r),t=n.on,e=n.emit,c=n.bind,f=(n=u.Elements).slides,a=n.list,s=[];function i(){f.forEach(function(n,t){v(n,t,-1)})}function l(){p(function(n){n.destroy()}),_(s)}function d(){l(),i()}function v(n,t,i){n=ct(r,t,i,n);n.mount(),s.push(n)}function h(n){return n?g(function(n){return!n.isClone}):s}function p(n,t){h(t).forEach(n)}function g(t){return s.filter("function"==typeof t?t:function(n){return P(t)?N(n.slide,t):b(y(t),n.index)})}return{mount:function(){i(),t(_n,d),t([ln,_n],function(){s.sort(function(n,t){return n.index-t.index})})},destroy:l,register:v,get:h,getIn:function(n){var t=u.Controller,i=t.toIndex(n),r=t.hasFocus()?1:o.perPage;return g(function(n){return on(n.index,i,i+r-1)})},getAt:function(n){return g(n)[0]},add:function(n,u){w(n,function(n){var t,i,r;C(n=P(n)?Y(n):n)&&((t=f[u])?E(n,t):L(a,n),A(n,o.classes.slide),n=n,i=e.bind(null,xn),n=J(n,"img"),(r=n.length)?n.forEach(function(n){c(n,"load error",function(){--r||i()})}):i())}),e(_n)},remove:function(n){H(g(n).map(function(n){return n.slide})),e(_n)},forEach:p,filter:g,style:function(t,i,r){p(function(n){n.style(t,i,r)})},getLength:function(n){return(n?f:s).length},isEnough:function(){return s.length>o.perPage}}},Layout:function(n,t,i){var r,u,o=En(n),e=o.on,c=o.bind,f=o.emit,a=t.Slides,s=t.Direction.resolve,l=(t=t.Elements).root,d=t.track,v=t.list,h=a.getAt;function p(){u=null,r="ttb"===i.direction,I(l,"maxWidth",V(i.width)),I(d,s("paddingLeft"),m(!1)),I(d,s("paddingRight"),m(!0)),g()}function g(){var n=G(l);u&&u.width===n.width&&u.height===n.height||(I(d,"height",function(){var n="";r&&(Q(n=y(),"height or heightRatio is missing."),n="calc("+n+" - "+m(!1)+" - "+m(!0)+")");return n}()),a.style(s("marginRight"),V(i.gap)),a.style("width",(i.autoWidth?"":V(i.fixedWidth)||(r?"":w()))||null),a.style("height",V(i.fixedHeight)||(r?i.autoHeight?"":w():y())||null,!0),u=n,f(kn))}function m(n){var t=i.padding,n=s(n?"right":"left");return t&&V(t[n]||(W(t)?0:t))||"0px"}function y(){return V(i.height||G(v).width*i.heightRatio)}function w(){var n=V(i.gap);return"calc((100%"+(n&&" + "+n)+")/"+(i.perPage||1)+(n&&" - "+n)+")"}function _(n,t){var i=h(n);if(i){n=G(i.slide)[s("right")],i=G(v)[s("left")];return un(n-i)+(t?0:b())}return 0}function b(){var n=h(0);return n&&parseFloat(I(n.slide,s("marginRight")))||0}return{mount:function(){p(),c(window,"resize load",Sn(f.bind(this,xn))),e([bn,_n],p),e(xn,g)},listSize:function(){return G(v)[s("width")]},slideSize:function(n,t){return(n=h(n||0))?G(n.slide)[s("width")]+(t?0:b()):0},sliderSize:function(){return _(n.length-1,!0)-_(-1,!0)},totalSize:_,getPadding:function(n){return parseFloat(I(d,s("padding"+(n?"Right":"Left"))))||0}}},Clones:function(c,n,f){var t,i=En(c),r=i.on,u=i.emit,a=n.Elements,s=n.Slides,o=n.Direction.resolve,l=[];function e(){(t=p())&&(function(u){var o=s.get().slice(),e=o.length;if(e){for(;o.length<u;)x(o,o);x(o.slice(-u),o.slice(0,u)).forEach(function(n,t){var i=t<u,r=function(n,t){n=n.cloneNode(!0);return A(n,f.classes.clone),n.id=c.root.id+"-clone"+an(t+1),n}(n.slide,t);i?E(r,o[0].slide):L(a.list,r),x(l,r),s.register(r,t-u+(i?0:e),n.index)})}}(t),u(xn))}function d(){H(l),_(l)}function v(){d(),e()}function h(){t<p()&&u(_n)}function p(){var n,t,i=f.clones;return c.is(ot)?i||(n=a.list,P(t=f[o("fixedWidth")])&&(t=G(n=F("div",{style:"width: "+t+"; position: absolute;"},n)).width,H(n)),i=((t=t)&&rn(G(a.track)[o("width")]/t)||f[o("autoWidth")]&&c.length||f.perPage)*(f.drag?(f.flickMaxPages||1)+1:2)):i=0,i}return{mount:function(){e(),r(_n,v),r([bn,xn],h)},destroy:d}},Move:function(c,f,a){var s,n=En(c),t=n.on,l=n.emit,r=(n=f.Layout).slideSize,i=n.getPadding,u=n.totalSize,o=n.listSize,e=n.sliderSize,d=(n=f.Direction).resolve,v=n.orient,h=(n=f.Elements).list,p=n.track;function g(){s||(f.Scroll.cancel(),m(c.index),l(An))}function m(n){y(_(n,!0))}function y(n,t){c.is(et)||(h.style.transform="translate"+d("X")+"("+(t?n:function(n){{var t,i;!s&&c.is(ot)&&(i=v(n-b()),t=A(!1,n)&&i<0,i=A(!0,n)&&0<i,(t||i)&&(n=w(n,i)))}return n}(n))+"px)")}function w(n,t){var i=n-x(t),t=e();return n-=cn(i)*t*rn(un(i)/t)}function _(n,t){var i,i=v(u(n-1)-(i=n,"center"===(n=a.focus)?(o()-r(i,!0))/2:+n*r(i)||0));return t?function(n){a.trimSpace&&c.is(ut)&&(n=en(n,0,v(e()-o())));return n}(i):i}function b(){var n=d("left");return G(h)[n]-G(p)[n]+v(i(!1))}function x(n){return _(n?f.Controller.getEnd():0,!!a.trimSpace)}function k(){return!!s}function A(n,t){t=M(t)?b():t;var i=!0!==n&&v(t)<v(x(!1)),t=!1!==n&&v(t)>v(x(!0));return i||t}return{mount:function(){t([ln,kn,bn,_n],g)},destroy:function(){O(h,"style")},move:function(n,t,i,r){var u,o,e;s||(u=c.state.set,o=b(),s=(e=n!==t)||a.waitForTransition,u(4),l(dn,t,i,n),f.Transition.start(n,function(){e&&m(t),s=!1,u(3),l(vn,t,i,n),"move"===a.trimSpace&&n!==i&&o===b()?f.Controller.go(i<n?">":"<",!1,r):r&&r()}))},jump:m,translate:y,shift:w,cancel:function(){s=!1,y(b()),f.Transition.cancel()},toIndex:function(n){for(var t=f.Slides.get(),i=0,r=1/0,u=0;u<t.length;u++){var o=t[u].index,e=un(_(o,!0)-n);if(!(e<=r))break;r=e,i=o}return i},toPosition:_,getPosition:b,getLimit:x,isBusy:k,exceededLimit:A}},Controller:function(n,e,u){var o,c,f,t=En(n).on,a=e.Move,s=a.getPosition,l=a.getLimit,i=e.Slides,d=i.isEnough,r=i.getLength,v=n.is(ot),h=n.is(ut),p=u.start||0,g=p;function m(){o=r(!0),c=u.perMove,f=u.perPage,p=en(p,0,o-1)}function y(n,t,i,r,u){var o=t?n:z(n);e.Scroll.scroll(t||i?a.toPosition(o,!0):n,r,function(){S(a.toIndex(a.getPosition())),u&&u()})}function w(n){return b(!1,n)}function _(n){return b(!0,n)}function b(n,t){var i,r,u=c||(R()?1:f),o=x(p+u*(n?-1:1),p);return-1!==o||!h||(i=s(),r=l(!n),u=1,un(i-r)<u)?t?o:A(o):n?0:k()}function x(n,t,i){var r;return d()?(r=k(),n<0||r<n?n=on(0,n,t,!0)||on(r,t,n,!0)?L(E(n)):v?c?n:n<0?-(o%f||f):o:u.rewind?n<0?r:0:-1:v||i||n===t||(n=c?n:L(E(t)+(n<t?-1:1)))):n=-1,n}function k(){var n=o-f;return(R()||v&&c)&&(n=o-1),nn(n,0)}function A(n){return v?d()?n%o+(n<0?o:0):-1:n}function L(n){return en(R()?n:f*n,0,k())}function E(n){return R()||(n=on(n,o-f,o-1)?o-1:n,n=tn(n/f)),n}function z(n){n=a.toIndex(n);return h?en(n,0,k()):n}function S(n){n!==p&&(g=p,p=n)}function R(){return!M(u.focus)||u.isNavigation}return{mount:function(){m(),t([bn,_n],m,D-1)},go:function(n,t,i){var r=function(n){var t=p;{var i,r;P(n)?(r=n.match(/([+\-<>])(\d+)?/)||[],i=r[1],r=r[2],"+"===i||"-"===i?t=x(p+ +(""+i+(+r||1)),p,!0):">"===i?t=r?L(+r):w(!0):"<"===i&&(t=_(!0))):t=v?en(n,-f,o+f-1):en(n,0,k())}return t}(n);u.useScroll?y(r,!0,!0,u.speed,i):-1<(n=A(r))&&!a.isBusy()&&(t||n!==p)&&(S(n),a.move(r,n,g,i))},scroll:y,getNext:w,getPrev:_,getEnd:k,setIndex:S,getIndex:function(n){return n?g:p},toIndex:L,toPage:E,toDest:z,hasFocus:R}},Arrows:function(u,n,i){var r,t=En(u),o=t.on,e=t.bind,c=t.emit,f=i.classes,a=i.i18n,s=n.Elements,l=n.Controller,d=s.arrows,v=s.prev,h=s.next,p={};function g(){var n,t;i.arrows&&(v&&h||(d=F("div",f.arrows),v=m(!0),h=m(!1),r=!0,L(d,[v,h]),E(d,S("slider"===i.arrows&&s.slider||u.root)))),v&&h&&(p.prev?j(d,!1===i.arrows?"none":""):(n=s.track.id,T(v,Qn,n),T(h,Qn,n),p.prev=v,p.next=h,t=l.go,o([ln,vn,bn,_n,Ln],y),e(h,"click",function(){t(">",!0)}),e(v,"click",function(){t("<",!0)}),c("arrows:mounted",v,h)))}function m(n){return Y('<button class="'+f.arrow+" "+(n?f.prev:f.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="'+(i.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" ></path>')}function y(){var n=u.index,t=l.getPrev(),i=l.getNext(),r=-1<t&&n<t?a.last:a.prev,n=-1<i&&i<n?a.first:a.next;v.disabled=t<0,h.disabled=i<0,T(v,$n,r),T(h,$n,n),c("arrows:updated",v,h,t,i)}return{arrows:p,mount:function(){g(),o(bn,g)},destroy:function(){r?H(d):(O(v,rt),O(h,rt))}}},Autoplay:function(n,t,r){var i,u,o,e=En(n),c=e.on,f=e.bind,a=e.emit,s=t.Elements,l=zn(r.interval,n.go.bind(n,">"),function(n){var t=s.bar;t&&I(t,"width",100*n+"%");a("autoplay:playing",n)}),d=l.isPaused;function v(n){var t=n?"pause":"play",i=s[t];i&&(T(i,Qn,s.track.id),T(i,$n,r.i18n[t]),f(i,"click",n?p:h))}function h(){d()&&t.Slides.isEnough()&&(l.start(!r.resetProgress),u=i=o=!1,a("autoplay:play"))}function p(n){void 0===n&&(n=!0),d()||(l.pause(),a("autoplay:pause")),o=n}function g(){o||(i||u?p(!1):h())}return{mount:function(){var n=r.autoplay;n&&(v(!0),v(!1),function(){var n=s.root;r.pauseOnHover&&f(n,"mouseenter mouseleave",function(n){i="mouseenter"===n.type,g()});r.pauseOnFocus&&f(n,"focusin focusout",function(n){u="focusin"===n.type,g()});c([dn,"scroll",_n],l.rewind)}(),"pause"!==n&&h())},destroy:l.cancel,play:h,pause:p,isPaused:d}},Cover:function(n,t,i){var r=En(n).on;function u(i){t.Slides.forEach(function(n){var t=S(n.container||n.slide,"img");t&&t.src&&o(i,t,n)})}function o(n,t,i){i.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),j(t,n?"none":"")}return{mount:function(){i.cover&&(r(p,function(n,t){o(!0,n,t)}),r([ln,bn,_n],u.bind(null,!0)))},destroy:function(){u(!1)}}},Scroll:function(c,n,f){var a,s,t=En(c),i=t.on,l=t.emit,d=n.Move,v=d.getPosition,h=d.getLimit,p=d.exceededLimit;function g(r,n,t,u){var i,o=v(),e=1;n=n||(i=un(r-o),nn(i/1.5,800)),s=t,y(),a=zn(n,m,function(n){var t=v(),i=(o+(r-o)*(i=n,(n=f.easingFunc)?n(i):1-Math.pow(1-i,4))-v())*e;d.translate(t+i),c.is(ut)&&!u&&p()&&(e*=.6,un(i)<10&&(i=p(!1),g(h(!i),600,null,!0)))},1),l("scroll"),a.start()}function m(){var n=v(),t=d.toIndex(n);on(t,0,c.length-1)||d.translate(d.shift(n,0<t),!0),s&&s(),l(Ln)}function y(){a&&a.cancel()}function r(){a&&!a.isPaused()&&(y(),m())}return{mount:function(){i(dn,y),i([bn,_n],r)},destroy:y,scroll:g,cancel:r}},Drag:function(u,r,o){var e,c,f,a,s,l,d,v,h,n=En(u),t=n.on,p=n.emit,g=n.bind,m=n.unbind,y=r.Move,w=r.Scroll,_=r.Controller,b=r.Elements.track,i=(n=r.Direction).resolve,x=n.orient,k=y.getPosition,A=y.exceededLimit,L={passive:!1,capture:!0},E=!1;function z(){var n=o.drag;j(!n),s="free"===n}function S(n){var t,i;v||(t=o.noDrag,i=I(n),!(!t||C(n.target)&&!N(n.target,t))||!i&&n.button||(y.isBusy()?U(n,!0):(h=i?b:window,a=f=null,d=!1,g(h,ft,R,L),g(h,at,D,L),y.cancel(),w.cancel(),P(n))))}function R(n){var t,i,r;a||p("drag"),(a=n).cancelable&&(t=T(n)-T(c),l?(y.translate(e+t/(E&&u.is(ut)?5:1)),i=200<F(n)-F(c),r=E!==(E=A()),(i||r)&&P(n),p("dragging"),d=!0,U(n)):(r=W(r=o.dragMinThreshold)?r:{mouse:0,touch:+r||10},l=un(t)>(I(n)?r.touch:r.mouse),O()&&U(n)))}function D(n){var t,i;m(h,ft,R),m(h,at,D),a&&((l||n.cancelable&&O())&&(t=function(n){if(u.is(ot)||!E){var t=c===a&&f||c,i=T(a)-T(t),t=F(n)-F(t),n=F(n)-F(a)<200;if(t&&n)return i/t}return 0}(n),i=t,i=k()+cn(i)*$(un(i)*(o.flickPower||600),s?1/0:r.Layout.listSize()*(o.flickMaxPages||1)),s?_.scroll(i):u.is(et)?_.go(u.index+x(cn(t))):_.go(_.toDest(i),!0),U(n)),p("dragged")),l=!1}function P(n){f=c,c=n,e=k()}function M(n){!v&&d&&U(n,!0)}function O(){var n=un(T(a)-T(c));return un(T(a,!0)-T(c,!0))<n}function T(n,t){return(I(n)?n.touches[0]:n)["page"+i(t?"Y":"X")]}function F(n){return n.timeStamp}function I(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function j(n){v=n}return{mount:function(){g(b,ft,Z,L),g(b,at,Z,L),g(b,"touchstart mousedown",S,L),g(b,"click",M,{capture:!0}),g(b,"dragstart",U),t([ln,bn],z)},disable:j,isDragging:function(){return l}}},Keyboard:function(t,n,i){var r,u=En(t),o=u.on,e=u.bind,c=u.unbind,f=n.Elements.root,a=n.Direction.resolve;function s(){var n=i.keyboard,n=void 0===n?"global":n;n&&("focused"===n?T(r=f,tt,0):r=window,e(r,"keydown",d))}function l(){c(r,"keydown"),C(r)&&O(r,tt)}function d(n){n=n.key,n=b(st,n)?"Arrow"+n:n;n===a("ArrowLeft")?t.go("<"):n===a("ArrowRight")&&t.go(">")}return{mount:function(){s(),o(bn,function(){l(),s()})},destroy:l}},LazyLoad:function(i,n,o){var t=En(i),r=t.on,u=t.off,e=t.bind,c=t.emit,f="sequential"===o.lazyLoad,a=[],s=0;function l(){s=0,a=[]}function d(){(a=a.filter(function(n){var t=o.perPage*((o.preloadPages||1)+1)-1;return!n.o.isWithin(i.index,t)||v(n)})).length||u(vn)}function v(t){var i=t.e;A(t.o.slide,Jn),e(i,"load error",function(n){!function(n,t){var i=n.o;K(i.slide,Jn),t||(H(n.c),j(n.e,""),c(p,n.e,i),c(xn));f&&h()}(t,"error"===n.type)}),["src","srcset"].forEach(function(n){t[n]&&(T(i,n,t[n]),O(i,"src"===n?lt:dt))})}function h(){s<a.length&&v(a[s++])}return{mount:function(){o.lazyLoad&&(r([ln,_n],function(){l(),n.Slides.forEach(function(u){J(u.slide,vt).forEach(function(n){var t,i=X(n,lt),r=X(n,dt);i===n.src&&r===n.srcset||(T(t=F("span",o.classes.spinner,n.parentElement),Vn,"presentation"),a.push({e:n,o:u,src:i,srcset:r,c:t}),n.src||j(n,"none"))})}),f&&h()}),f||r([ln,_n,vn],d))},destroy:l}},Pagination:function(l,n,d){var v,t=En(l),i=t.on,r=t.emit,h=t.bind,u=t.unbind,p=n.Slides,g=n.Elements,o=n.Controller,m=o.hasFocus,e=o.getIndex,y=[];function c(){f(),d.pagination&&p.isEnough()&&(function(){var n=l.length,t=d.classes,i=d.i18n,r=d.perPage,u="slider"===d.pagination&&g.slider||g.root,o=m()?n:rn(n/r);v=F("ul",t.pagination,u);for(var e=0;e<o;e++){var c=F("li",null,v),f=F("button",{class:t.page,type:"button"},c),a=p.getIn(e).map(function(n){return n.slide.id}),s=!m()&&1<r?i.pageX:i.slideX;h(f,"click",w.bind(null,e)),T(f,Qn,a.join(" ")),T(f,$n,fn(s,e+1)),y.push({li:c,button:f,page:e})}}(),r("pagination:mounted",{list:v,items:y},a(l.index)),s())}function f(){v&&(H(v),y.forEach(function(n){u(n.button,"click")}),_(y),v=null)}function w(t){o.go(">"+t,!0,function(){var n=p.getAt(o.toIndex(t));n&&((n=n.slide).setActive&&n.setActive()||n.focus({preventScroll:!0}))})}function a(n){return y[o.toPage(n)]}function s(){var n=a(e(!0)),t=a(e());n&&(K(n.button,Hn),O(n.button,Zn)),t&&(A(t.button,Hn),T(t.button,Zn,!0)),r("pagination:updated",{list:v,items:y},n,t)}return{items:y,mount:function(){c(),i([bn,_n],c),i([dn,Ln],s)},destroy:f,getAt:a}},Sync:function(i,n,r){var u=i.splides,e=n.Elements.list;function c(){T(e,it,"ttb"!==r.direction?"horizontal":null)}function f(n){i.go(n.index)}function a(n,t){b(ht,t.key)&&(f(n),U(t))}return{mount:function(){var o,n,t;r.isNavigation?(n=En(i),t=n.on,n=n.emit,t(hn,f),t(wn,a),t([ln,bn],c),T(e,Vn,"menu"),n("navigation:mounted",i.splides)):(o=[],u.concat(i).forEach(function(r,n,u){En(r).on(dn,function(t,n,i){u.forEach(function(n){n===r||b(o,r)||(o.push(n),n.go(n.is(ot)?i:t))}),_(o)})}))},destroy:function(){O(e,rt)}}},Wheel:function(i,n,t){var r=En(i).bind;function u(n){var t=n.deltaY;t&&(i.go(t<0?"<":">"),U(n))}return{mount:function(){t.wheel&&r(n.Elements.track,"wheel",u,{passive:!1,capture:!0})}}}}),gt={type:"slide",speed:400,waitForTransition:!0,perPage:1,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:{slide:On,clone:Tn,arrows:In,arrow:t,prev:jn,next:Wn,pagination:i,page:i+"__page",spinner:m+"__spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}};function mt(n,r,t){var i=En(n).on;return{mount:function(){i([ln,_n],function(){c(function(){r.Slides.style("transition","opacity "+t.speed+"ms "+t.easing)})})},start:function(n,t){var i=r.Elements.track;I(i,"height",V(G(i).height)),c(function(){t(),I(i,"height","")})},cancel:Z}}function yt(o,n,e){var c,t=En(o).bind,f=n.Move,a=n.Controller,i=n.Elements.list;function r(){s("")}function s(n){I(i,"transition",n)}return{mount:function(){t(i,"transitionend",function(n){n.target===i&&c&&(r(),c())})},start:function(n,t){var i=f.toPosition(n,!0),r=f.getPosition(),u=function(n){var t=e.rewindSpeed;if(o.is(ut)&&t){var i=a.getIndex(!0),r=a.getEnd();if(0===i&&r<=n||r<=i&&0===n)return t}return e.speed}(n);1<=un(i-r)&&1<=u?(s("transform "+u+"ms "+e.easing),f.translate(i,!0),c=t):(f.jump(n),t())},cancel:r}}i=function(){function i(n,t){this.event=f(),this.Components={},this.state=h(1),this.splides=[],this.f={},this.a={};n=P(n)?q(document,n):n;Q(n,n+" is invalid."),this.root=n,l(gt,i.defaults),l(l(this.f,gt),t||{})}var n,t,r=i.prototype;return r.mount=function(n,t){var i=this,r=this.state,u=this.Components;return Q(r.is([1,5]),"Already mounted!"),r.set(1),this.s=u,this.l=t||this.l||(this.is(et)?mt:yt),this.a=n||this.a,e(R({},pt,this.a,{Transition:this.l}),function(n,t){n=n(i,u,i.f);(u[t]=n).setup&&n.setup()}),e(u,function(n){n.mount&&n.mount()}),this.emit(ln),A(this.root,"is-initialized"),r.set(3),this.emit("ready"),this},r.sync=function(n){return this.splides.push(n),n.splides.push(this),this},r.go=function(n){return this.s.Controller.go(n),this},r.on=function(n,t){return this.event.on(n,t,null,20),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(s(arguments,1))),this},r.add=function(n,t){return this.s.Slides.add(n,t),this},r.remove=function(n){return this.s.Slides.remove(n),this},r.is=function(n){return this.f.type===n},r.refresh=function(){return this.emit(_n),this},r.destroy=function(t){void 0===t&&(t=!0);var n=this.event,i=this.state;return i.is(1)?n.on("ready",this.destroy.bind(this,t),this):(e(this.s,function(n){n.destroy&&n.destroy(t)},!0),n.emit(d),n.destroy(),t&&_(this.splides),i.set(5)),this},n=i,(r=[{key:"options",get:function(){return this.f},set:function(n){var t=this.f;l(t,n),this.state.is(1)||this.emit(bn,t)}},{key:"length",get:function(){return this.s.Slides.getLength(!0)}},{key:"index",get:function(){return this.s.Controller.getIndex()}}])&&wt(n.prototype,r),t&&wt(n,t),i}();return i.defaults={},i.STATES=n,i},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).Splide=t();
	`;
    document.head.appendChild(script);

    var splide = new Splide(".hero_reviews", {
      perPage: 3,
      autoplay: true,
      type: "loop",
      //perMove: 3,
      //perGroup: 3,
      pauseOnHover: true,
      pagination: false,
      gap: 32,
      breakpoints: {
        1229: {
          perPage: 2,
          perMove: 2,
          pagination: true,
          gap: 36,
        },
        767: {
          perPage: 1,
          pagination: true,
          perMove: 1,
          gap: 10,
        },
      },
    });

    splide.mount();

    splide.refresh();

    function updatePagination() {
      var paginationContainer = document.querySelector(
        ".clientReviewsContainer .custom-pagination"
      );
      if (paginationContainer) {
        var totalSlides = splide.Components.Elements.slides.length;
        var perPage = splide.options.perPage;
        var totalPages = Math.ceil(totalSlides / perPage);
        paginationContainer.innerHTML = "";

        for (var i = 1; i <= totalPages; i++) {
          var paginationItem = document.createElement("span");
          paginationItem.classList.add("pagination-item");
          paginationItem.textContent = i;

          paginationItem.addEventListener("click", function () {
            var pageIndex = parseInt(this.textContent) - 1;
            var slideIndex = pageIndex * perPage;
            splide.go(slideIndex);
          });

          paginationContainer.appendChild(paginationItem);
        }

        paginationContainer
          .querySelector(".pagination-item")
          .classList.add("active");
      }
    }
    updatePagination();

    window.addEventListener("resize", function () {
      setTimeout(function () {
        updatePagination();
      }, 200);
    });

    window.addEventListener("orientationchange", function () {
      setTimeout(function () {
        updatePagination();
      }, 200);
    });

    function updateActivePagination(newIndex) {
      var paginationItems = document.querySelectorAll(
        ".clientReviewsContainer .pagination-item"
      );
      var perPage = splide.options.perPage;
      var totalSlides = splide.Components.Elements.slides.length;
      var totalPages = Math.ceil(totalSlides / perPage);
      var activeIndex = Math.floor(newIndex / perPage) % totalPages;

      paginationItems.forEach(function (item, index) {
        if (index === activeIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }

    splide.on("move", function (newIndex) {
      updateActivePagination(newIndex);
    });

    splide.on("autoplay:playing", function () {
      updateActivePagination(splide.index);
    });

    splide.on("mounted", function () {
      splide.go(0); // Start from the first slide
      updateActivePagination(0); // Set the first pagination item active at the start
    });

    splide.on("loop", function () {
      // Force the slider to start from the beginning when looping
      setTimeout(function () {
        if (
          splide.index >=
          splide.Components.Slides.length - splide.options.perPage
        ) {
          splide.go(0); // Force starting from the first slide
        }
      }, 100); // Adjust delay if necessary
    });

    document.querySelectorAll(".splide__slide").forEach(function (slide) {
      slide.addEventListener("click", function () {
        const toggleButton = document.querySelector("button.splide__toggle");
        if (toggleButton) {
          toggleButton.click();
        }
      });
    });

    // function updateModal(e) {
    //   var waitelement = setInterval(function () {
    //     if (
    //       document.querySelectorAll(".MuiInputBase-root .MuiInputBase-input")
    //         .length > 0 &&
    //       (document.querySelector(
    //         'form#generic-lead-form label[for="first-name"]'
    //       ) ||
    //         document.querySelector(
    //           'form#generic-lead-form label[for="company"]'
    //         )) &&
    //       document.querySelector("form#generic-lead-form > div:nth-child(1)") &&
    //       document.querySelector("form#generic-lead-form > div:nth-child(2)")
    //     ) {
    //       clearInterval(waitelement);
    //       // Changing Headings
    //       if (!document.querySelector(".headingWrapper")) {
    //         function OnetimeChanges() {
    //           var waitForFormPopup = setInterval(() => {
    //             if (document.querySelector(".formPopup .formWrapper")) {
    //               clearInterval(waitForFormPopup);
    //               // Changing closing icon
    //               if (
    //                 document.querySelector(
    //                   'div[aria-labelledby="popout-button-title"] button[aria-label="Exit form"]'
    //                 )
    //               ) {
    //                 document
    //                   .querySelector(
    //                     'div[aria-labelledby="popout-button-title"] button[aria-label="Exit form"]'
    //                   )
    //                   .parentElement.classList.add("closeIconWrapper");
    //               } else if (
    //                 document.querySelector(
    //                   'div[aria-labelledby="popout-button-title"] button[aria-label="Close dialog"]'
    //                 )
    //               ) {
    //                 document
    //                   .querySelector(
    //                     'div[aria-labelledby="popout-button-title"] button[aria-label="Close dialog"]'
    //                   )
    //                   .parentElement.classList.add("closeIconWrapper");
    //               }

    //               if (document.querySelector(".closeIconWrapper")) {
    //                 document.querySelector(
    //                   ".closeIconWrapper button"
    //                 ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g opacity="0.7"><path d="M2.57528 1.72324L7.99768 7.14164L13.3625 1.77764C13.7281 1.45204 14.1065 1.64644 14.2577 1.80964C14.3547 1.92783 14.4047 2.07761 14.3982 2.23036C14.3917 2.38311 14.3291 2.52811 14.2225 2.63764L8.85688 8.00084L14.2225 13.3624C14.4609 13.5624 14.4609 13.9544 14.2697 14.1736C14.0777 14.392 13.7257 14.5184 13.3937 14.2592L7.99768 8.86004L2.59528 14.2616C2.35848 14.4736 1.96808 14.4304 1.77528 14.22C1.58168 14.0088 1.50808 13.644 1.75528 13.3864L7.13848 8.00084L1.77768 2.63764C1.58168 2.42164 1.51368 2.02644 1.77768 1.77764C2.04168 1.52884 2.43528 1.56324 2.57528 1.72324Z" fill="#66788C"></path></g></svg>`;
    //               }

    //               // Test 2007 Changes
    //               if (
    //                 document.querySelector(
    //                   ".spz_t14002 .formPopup .closeIconWrapper + .MuiGrid-root"
    //                 )
    //               ) {
    //                 document
    //                   .querySelector(
    //                     ".spz_t14002 .formPopup .closeIconWrapper + .MuiGrid-root"
    //                   )
    //                   .classList.add("formContainer");
    //               }
    //               // Adding Logo
    //               if (
    //                 document.querySelector(
    //                   ".spz_t14002 .formPopup .closeIconWrapper"
    //                 ) &&
    //                 !document.querySelector(".geotabLogo")
    //               ) {
    //                 document
    //                   .querySelector(".spz_t14002 .formPopup .closeIconWrapper")
    //                   .insertAdjacentHTML(
    //                     "afterend",
    //                     `
    //                                             <a class="logo" href="https://www.geotab.com/">
    //                                                 <picture class="geotabLogo">
    //                                                     <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1727694505/geotab/1007/logoMobile.svg">
    //                                                     <img class="tab-only" src="//res.cloudinary.com/spiralyze/image/upload/v1727692763/geotab/1007/logo.svg" alt="Geotab">
    //                                                 </picture>
    //                                             </a>
    //                                         `
    //                   );
    //               }
    //               if (!document.querySelector(".details")) {
    //                 document
    //                   .querySelector(".spz_t14002 .formPopup .formWrapper")
    //                   .insertAdjacentHTML(
    //                     "afterend",
    //                     `
    //                                             <div class="details">
    //                                                 <div class="container">
    //                                                     <picture>
    //                                                         <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/geotab/2016/ui_image_mobile.webp">
    //                                                         <img class="display" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/geotab/2016/ui_image_desktop.webp" alt="UI image" title="UI image">
    //                                                     </picture>
    //                                                     <div class="clientReviewsContainer">
    //                                                         <div class="clientReviewsWrapper">
    //                                                             <div class="clientLogo">
    //                                                                 <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571199/geotab/1007/capterra.svg" alt="Capterra Logo">
    //                                                                 <div class="capterraRating">
    //                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1740394557/geotab/2013/stars_1.svg" alt="Star Rating">
    //                                                                     <p>4.4</p>
    //                                                                 </div>
    //                                                             </div>
    //                                                             <div class="clientReviews splide" role="group">
    //                                                                 <div class="splide__track">
    //                                                                     <ul class="splide__list">
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">With Geotab, we’ve seen a 13% decrease in severe alerts for speeding and stop light infractions.</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>Dave Edgarton, AVP of Environmental Health and Safety</h2>
    //                                                                                 <p class="designation">Custom‐Tailored and Logistical Solutions</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">Whether tracking day-to-day dispatch or managing HOS, this software checks all the boxes.</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>Taylor, Operations and Tech Integration</h2>
    //                                                                                 <p class="designation">Business Supplies & Equipment</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">Joyful experience! Huge time and money saver for the company.</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>LeAnn, DOT Compliance Lead</h2>
    //                                                                                 <p class="designation">Oil & Energy</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">A great way to track fleet vehicles. You can easily see where each employee and detailed driving history.</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>Tim H, Branch Manager</h2>
    //                                                                                 <p class="designation">Enterprise (>1,000 employees)</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">Captures and aggregates real-world data like no other system we've ever seen. Transformative.</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>Scott, Vice President</h2>
    //                                                                                 <p class="designation">Transportation/Trucking/Railroad</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">Loaded with features to better track fuel consumption. High refresh rate for tracking, easy installation process, and instantly synchronizes engine data.</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>Kyle, Senior Safety Officer</h2>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">The best telematics solution. Reliable, user friendly, and intuitive.</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>David, Regional Accounts Manager</h2>
    //                                                                                 <p class="designation">Automotive</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">We stopped speeding and extreme idling on the first day we used the program!</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>Tom, President</h2>
    //                                                                                 <p class="designation">Construction</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">Ideal for understanding and improving driver habits! GPS tracking and engine measurements are easy to understand.</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>Luis, Customer Service & Support</h2>
    //                                                                                 <p class="designation">Electrical/Electronic Manufacturing</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">It’s superb. Easily integrates with company software. We track our fuel and drivers to suit the needs of our business.</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>Mathias, Technical Support</h2>
    //                                                                                 <p class="designation">Information Technology & Services</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">Great for compliance verification. One of our departments forgot to log trips, and we easily printed a report to help them fill in the blanks! A lifesaver!</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>Terri, Executive Director</h2>
    //                                                                                 <p class="designation">Individual & Family Services</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">Incredibly helpful. You can see drivers in real time and reroute on the fly!</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>Tom H.</h2>
    //                                                                                 <p class="designation">Transportation/Trucking/Railroad</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                         <li class="clientReview splide__slide">
    //                                                                             <div class="contentTop">
    //                                                                                 <div class="splide__slide__container">
    //                                                                                     <img src="//res.cloudinary.com/spiralyze/image/upload/v1726571228/geotab/1007/stars_1.svg" alt="Review Ratings">
    //                                                                                 </div>
    //                                                                                 <p class="reviewContent">A simple and user friendly telematics application. It’s so easy to organize vehicles and find specific units. Tracking mileage is a breeze!</p>
    //                                                                             </div>
    //                                                                             <div class="contentBottom">
    //                                                                                 <h2>Berkley V. W., Lease and Rental Manager </h2>
    //                                                                                 <p class="designation">Transportation/Trucking/Railroad</p>
    //                                                                             </div>
    //                                                                         </li>
    //                                                                     </ul>
    //                                                                 </div>
    //                                                                 <div class="custom-pagination"></div>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         `
    //                   );

    //                 // Create a link element for the CSS file and append it to the head
    //                 var swiperLoaded = false;
    //                 // Create a script element for JavaScript
    //                 var script = document.createElement("script");
    //                 script.innerHTML = `
    //                                         function wt(n,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var n,t;n=this,t=function(){"use strict";var m="splide",a="data-"+m,n={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,DESTROYED:5},D=10;function _(n){n.length=0}function W(n){return!u(n)&&"object"==typeof n}function r(n){return Array.isArray(n)}function P(n){return"string"==typeof n}function M(n){return void 0===n}function u(n){return null===n}function C(n){return n instanceof HTMLElement}function y(n){return r(n)?n:[n]}function w(n,t){y(n).forEach(t)}function b(n,t){return-1<n.indexOf(t)}function x(n,t){return n.push.apply(n,y(t)),n}var o=Array.prototype;function s(n,t,i){return o.slice.call(n,t,i)}function k(t,n,i){t&&w(n,function(n){n&&t.classList[i?"add":"remove"](n)})}function A(n,t){k(n,P(t)?t.split(" "):t,!0)}function L(n,t){w(t,n.appendChild.bind(n))}function E(n,i){w(n,function(n){var t=i.parentNode;t&&t.insertBefore(n,i)})}function N(n,t){return(n.msMatchesSelector||n.matches).call(n,t)}function z(n,t){return n?s(n.children).filter(function(n){return N(n,t)}):[]}function S(n,t){return t?z(n,t)[0]:n.firstElementChild}function e(n,t,i){if(n)for(var r=Object.keys(n),r=i?r.reverse():r,u=0;u<r.length;u++){var o=r[u];if("__proto__"!==o&&!1===t(n[o],o))break}return n}function R(r){return s(arguments,1).forEach(function(i){e(i,function(n,t){r[t]=i[t]})}),r}function l(i,n){return e(n,function(n,t){r(n)?i[t]=n.slice():W(n)?i[t]=l(W(i[t])?i[t]:{},n):i[t]=n}),i}function O(t,n){t&&w(n,function(n){t.removeAttribute(n)})}function T(i,n,t){W(n)?e(n,function(n,t){T(i,t,n)}):u(t)?O(i,n):i.setAttribute(n,String(t))}function F(n,t,i){n=document.createElement(n);return t&&(P(t)?A:T)(n,t),i&&L(i,n),n}function I(n,t,i){if(M(i))return getComputedStyle(n)[t];u(i)||(n=n.style)[t]!==(i=""+i)&&(n[t]=i)}function j(n,t){I(n,"display",t)}function X(n,t){return n.getAttribute(t)}function B(n,t){return n&&n.classList.contains(t)}function G(n){return n.getBoundingClientRect()}function H(n){w(n,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function Y(n){return S((new DOMParser).parseFromString(n,"text/html").body)}function U(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function q(n,t){return n&&n.querySelector(t)}function J(n,t){return s(n.querySelectorAll(t))}function K(n,t){k(n,t,!1)}function V(n){return P(n)?n:n?n+"px":""}function Q(n,t){if(void 0===t&&(t=""),!n)throw new Error("["+m+"] "+t)}function c(n){setTimeout(n)}function Z(){}function v(n){return requestAnimationFrame(n)}var $=Math.min,nn=Math.max,tn=Math.floor,rn=Math.ceil,un=Math.abs;function on(n,t,i,r){var u=$(t,i),i=nn(t,i);return r?u<n&&n<i:u<=n&&n<=i}function en(n,t,i){var r=$(t,i),i=nn(t,i);return $(nn(r,n),i)}function cn(n){return(0<n)-(n<0)}function fn(t,n){return w(n,function(n){t=t.replace("%s",""+n)}),t}function an(n){return n<10?"0"+n:""+n}var sn={};function f(){var o={};function r(n,r){t(n,function(n,t){var i=o[n];o[n]=i&&i.filter(function(n){return n.n?n.n!==r:r||n.t!==t})})}function t(n,t){y(n).join(" ").split(" ").forEach(function(n){n=n.split(".");t(n[0],n[1])})}return{on:function(n,i,r,u){void 0===u&&(u=D),t(n,function(n,t){o[n]=o[n]||[],x(o[n],{i:n,r:i,t:t,u:u,n:r}).sort(function(n,t){return n.u-t.u})})},off:r,offBy:function(i){e(o,function(n,t){r(t,i)})},emit:function(n){var t=arguments;(o[n]||[]).forEach(function(n){n.r.apply(n,s(t,1))})},destroy:function(){o={}}}}var ln="mounted",dn="move",vn="moved",hn="click",pn="active",gn="inactive",mn="visible",yn="hidden",wn="slide:keydown",_n="refresh",bn="updated",xn="resize",kn="resized",An="repositioned",Ln="scrolled",d="destroy",p="lazyload:loaded";function En(n){var r=n.event,u={},o=[];function t(n,t,r){e(n,t,function(t,i){o=o.filter(function(n){return!!(n[0]!==t||n[1]!==i||r&&n[2]!==r)||(t.removeEventListener(i,n[2],n[3]),!1)})})}function e(n,t,i){w(n,function(n){n&&t.split(" ").forEach(i.bind(null,n))})}function i(){o=o.filter(function(n){return t(n[0],n[1])}),r.offBy(u)}return r.on(d,i,u),{on:function(n,t,i){r.on(n,t,u,i)},off:function(n){r.off(n,u)},emit:r.emit,bind:function(n,t,i,r){e(n,t,function(n,t){o.push([n,t,i,r]),n.addEventListener(t,i,r)})},unbind:t,destroy:i}}function zn(t,i,r,u){var o,n,e=Date.now,c=0,f=!0,a=0;function s(){if(!f){var n=e()-o;if(t<=n?(c=1,o=e()):c=n/t,r&&r(c),1===c&&(i(),u&&++a>=u))return l();v(s)}}function l(){f=!0}function d(){cancelAnimationFrame(n),f=!(n=c=0)}return{start:function(n){n||d(),o=e()-(n?c*t:0),f=!1,v(s)},rewind:function(){o=e(),c=0,r&&r(c)},pause:l,cancel:d,isPaused:function(){return f}}}function h(n){var t=n;return{set:function(n){t=n},is:function(n){return b(y(n),t)}}}function Sn(i,r){var u;return function(){var n=arguments,t=this;u||(u=zn(r||0,function(){i.apply(t,n),u=null},null,1)).start()}}var g={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};var Rn=m,Dn=m+"__slider",Pn=m+"__track",Mn=m+"__list",On=m+"__slide",Tn=On+"--clone",Fn=On+"__container",In=m+"__arrows",t=m+"__arrow",jn=t+"--prev",Wn=t+"--next",i=m+"__pagination",Cn=m+"__progress",Nn=Cn+"__bar",Xn=m+"__autoplay",Bn=m+"__play",Gn=m+"__pause",Hn="is-active",Yn="is-prev",Un="is-next",qn="is-visible",Jn="is-loading",Kn=[Hn,qn,Yn,Un,Jn];var Vn="role",Qn="aria-controls",Zn="aria-current",$n="aria-label",nt="aria-hidden",tt="tabindex",it="aria-orientation",rt=[Vn,Qn,Zn,$n,nt,it,tt,"disabled"],ut="slide",ot="loop",et="fade";function ct(u,r,i,o){var e,n=En(u),c=n.on,f=n.emit,a=n.bind,t=n.destroy,s=u.Components,l=u.root,d=u.options,v=d.isNavigation,h=d.updateOnMove,p=s.Direction.resolve,g=X(o,"style"),m=-1<i,y=S(o,"."+Fn),w=d.focusableNodes&&J(o,d.focusableNodes);function _(){var n;e||(n=u.index,b.call(this,x()),function(n){var t=!n&&!x();T(o,nt,t||null),T(o,tt,!t&&d.slideFocus?0:null),w&&w.forEach(function(n){T(n,tt,t?-1:null)});n!==B(o,qn)&&(k(o,qn,n),f(n?mn:yn,this))}.call(this,function(){if(u.is(et))return x();var n=G(s.Elements.track),t=G(o),i=p("left"),r=p("right");return tn(n[i])<=rn(t[i])&&tn(t[r])<=rn(n[r])}()),k(o,Yn,r===n-1),k(o,Un,r===n+1))}function b(n){n!==B(o,Hn)&&(k(o,Hn,n),v&&T(o,Zn,n||null),f(n?pn:gn,this))}function x(){return u.index===r}return{index:r,slideIndex:i,slide:o,container:y,isClone:m,mount:function(){var t=this;!function(){m||(o.id=l.id+"-slide"+an(r+1));{var n,t;v&&(t=m?i:r,n=fn(d.i18n.slideX,t+1),t=u.splides.map(function(n){return n.root.id}).join(" "),T(o,$n,n),T(o,Qn,t),T(o,Vn,"menuitem"))}}(),a(o,"click keydown",function(n){f("click"===n.type?hn:wn,t,n)}),c([_n,An,vn,Ln],_.bind(this)),h&&c(dn,function(n,t,i){e||(_.call(this),i===r&&b.call(this,!0))}.bind(this))},destroy:function(){e=!0,t(),K(o,Kn),O(o,rt),T(o,"style",g)},style:function(n,t,i){I(i&&y||o,n,t)},isWithin:function(n,t){return n=un(n-r),(n=!m&&(d.rewind||u.is(ot))?$(n,u.length-n):n)<=t}}}var ft="touchmove mousemove",at="touchend touchcancel mouseup";var st=["Left","Right","Up","Down"];var lt=a+"-lazy",dt=lt+"-srcset",vt="["+lt+"], ["+dt+"]";var ht=[" ","Enter","Spacebar"];var pt=Object.freeze({__proto__:null,Options:function(t,n,r){var u,o,i,e=Sn(f);function c(n){n&&removeEventListener("resize",e)}function f(){var n,n=(n=function(n){return n[1].matches},s(o).filter(n)[0]||[]);n[0]!==i&&function(n){n=r.breakpoints[n]||u;n.destroy?(t.options=u,t.destroy("completely"===n.destroy)):(t.state.is(5)&&(c(!0),t.mount()),t.options=n)}(i=n[0])}return{setup:function(){try{l(r,JSON.parse(X(t.root,a)))}catch(n){Q(!1,n.message)}u=l({},r);var i,n=r.breakpoints;n&&(i="min"===r.mediaQuery,o=Object.keys(n).sort(function(n,t){return i?+t-+n:+n-+t}).map(function(n){return[n,matchMedia("("+(i?"min":"max")+"-width:"+n+"px)")]}),f())},mount:function(){o&&addEventListener("resize",e)},destroy:c}},Direction:function(n,t,r){return{resolve:function(n,t){var i=r.direction;return g[n]["rtl"!==i||t?"ttb"===i?0:-1:1]||n},orient:function(n){return n*("rtl"===r.direction?1:-1)}}},Elements:function(n,t,i){var r,u,o,e,c=En(n).on,f=n.root,a={},s=[];function l(){var n;!function(){u=S(f,"."+Dn),o=q(f,"."+Pn),e=S(o,"."+Mn),Q(o&&e,"A track/list element is missing."),x(s,z(e,"."+On+":not(."+Tn+")"));var n=p("."+Xn),t=p("."+In);R(a,{root:f,slider:u,track:o,list:e,slides:s,arrows:t,autoplay:n,prev:q(t,"."+jn),next:q(t,"."+Wn),bar:q(p("."+Cn),"."+Nn),play:q(n,"."+Bn),pause:q(n,"."+Gn)})}(),n=f.id||function(n){return""+n+an(sn[n]=(sn[n]||0)+1)}(m),f.id=n,o.id=o.id||n+"-track",e.id=e.id||n+"-list",A(f,r=g())}function d(){[f,o,e].forEach(function(n){O(n,"style")}),_(s),K(f,r)}function v(){d(),l()}function h(){K(f,r),A(f,r=g())}function p(n){return S(f,n)||S(u,n)}function g(){return[Rn+"--"+i.type,Rn+"--"+i.direction,i.drag&&Rn+"--draggable",i.isNavigation&&Rn+"--nav",Hn]}return R(a,{setup:l,mount:function(){c(_n,v,D-2),c(bn,h)},destroy:d})},Slides:function(r,u,o){var n=En(r),t=n.on,e=n.emit,c=n.bind,f=(n=u.Elements).slides,a=n.list,s=[];function i(){f.forEach(function(n,t){v(n,t,-1)})}function l(){p(function(n){n.destroy()}),_(s)}function d(){l(),i()}function v(n,t,i){n=ct(r,t,i,n);n.mount(),s.push(n)}function h(n){return n?g(function(n){return!n.isClone}):s}function p(n,t){h(t).forEach(n)}function g(t){return s.filter("function"==typeof t?t:function(n){return P(t)?N(n.slide,t):b(y(t),n.index)})}return{mount:function(){i(),t(_n,d),t([ln,_n],function(){s.sort(function(n,t){return n.index-t.index})})},destroy:l,register:v,get:h,getIn:function(n){var t=u.Controller,i=t.toIndex(n),r=t.hasFocus()?1:o.perPage;return g(function(n){return on(n.index,i,i+r-1)})},getAt:function(n){return g(n)[0]},add:function(n,u){w(n,function(n){var t,i,r;C(n=P(n)?Y(n):n)&&((t=f[u])?E(n,t):L(a,n),A(n,o.classes.slide),n=n,i=e.bind(null,xn),n=J(n,"img"),(r=n.length)?n.forEach(function(n){c(n,"load error",function(){--r||i()})}):i())}),e(_n)},remove:function(n){H(g(n).map(function(n){return n.slide})),e(_n)},forEach:p,filter:g,style:function(t,i,r){p(function(n){n.style(t,i,r)})},getLength:function(n){return(n?f:s).length},isEnough:function(){return s.length>o.perPage}}},Layout:function(n,t,i){var r,u,o=En(n),e=o.on,c=o.bind,f=o.emit,a=t.Slides,s=t.Direction.resolve,l=(t=t.Elements).root,d=t.track,v=t.list,h=a.getAt;function p(){u=null,r="ttb"===i.direction,I(l,"maxWidth",V(i.width)),I(d,s("paddingLeft"),m(!1)),I(d,s("paddingRight"),m(!0)),g()}function g(){var n=G(l);u&&u.width===n.width&&u.height===n.height||(I(d,"height",function(){var n="";r&&(Q(n=y(),"height or heightRatio is missing."),n="calc("+n+" - "+m(!1)+" - "+m(!0)+")");return n}()),a.style(s("marginRight"),V(i.gap)),a.style("width",(i.autoWidth?"":V(i.fixedWidth)||(r?"":w()))||null),a.style("height",V(i.fixedHeight)||(r?i.autoHeight?"":w():y())||null,!0),u=n,f(kn))}function m(n){var t=i.padding,n=s(n?"right":"left");return t&&V(t[n]||(W(t)?0:t))||"0px"}function y(){return V(i.height||G(v).width*i.heightRatio)}function w(){var n=V(i.gap);return"calc((100%"+(n&&" + "+n)+")/"+(i.perPage||1)+(n&&" - "+n)+")"}function _(n,t){var i=h(n);if(i){n=G(i.slide)[s("right")],i=G(v)[s("left")];return un(n-i)+(t?0:b())}return 0}function b(){var n=h(0);return n&&parseFloat(I(n.slide,s("marginRight")))||0}return{mount:function(){p(),c(window,"resize load",Sn(f.bind(this,xn))),e([bn,_n],p),e(xn,g)},listSize:function(){return G(v)[s("width")]},slideSize:function(n,t){return(n=h(n||0))?G(n.slide)[s("width")]+(t?0:b()):0},sliderSize:function(){return _(n.length-1,!0)-_(-1,!0)},totalSize:_,getPadding:function(n){return parseFloat(I(d,s("padding"+(n?"Right":"Left"))))||0}}},Clones:function(c,n,f){var t,i=En(c),r=i.on,u=i.emit,a=n.Elements,s=n.Slides,o=n.Direction.resolve,l=[];function e(){(t=p())&&(function(u){var o=s.get().slice(),e=o.length;if(e){for(;o.length<u;)x(o,o);x(o.slice(-u),o.slice(0,u)).forEach(function(n,t){var i=t<u,r=function(n,t){n=n.cloneNode(!0);return A(n,f.classes.clone),n.id=c.root.id+"-clone"+an(t+1),n}(n.slide,t);i?E(r,o[0].slide):L(a.list,r),x(l,r),s.register(r,t-u+(i?0:e),n.index)})}}(t),u(xn))}function d(){H(l),_(l)}function v(){d(),e()}function h(){t<p()&&u(_n)}function p(){var n,t,i=f.clones;return c.is(ot)?i||(n=a.list,P(t=f[o("fixedWidth")])&&(t=G(n=F("div",{style:"width: "+t+"; position: absolute;"},n)).width,H(n)),i=((t=t)&&rn(G(a.track)[o("width")]/t)||f[o("autoWidth")]&&c.length||f.perPage)*(f.drag?(f.flickMaxPages||1)+1:2)):i=0,i}return{mount:function(){e(),r(_n,v),r([bn,xn],h)},destroy:d}},Move:function(c,f,a){var s,n=En(c),t=n.on,l=n.emit,r=(n=f.Layout).slideSize,i=n.getPadding,u=n.totalSize,o=n.listSize,e=n.sliderSize,d=(n=f.Direction).resolve,v=n.orient,h=(n=f.Elements).list,p=n.track;function g(){s||(f.Scroll.cancel(),m(c.index),l(An))}function m(n){y(_(n,!0))}function y(n,t){c.is(et)||(h.style.transform="translate"+d("X")+"("+(t?n:function(n){{var t,i;!s&&c.is(ot)&&(i=v(n-b()),t=A(!1,n)&&i<0,i=A(!0,n)&&0<i,(t||i)&&(n=w(n,i)))}return n}(n))+"px)")}function w(n,t){var i=n-x(t),t=e();return n-=cn(i)*t*rn(un(i)/t)}function _(n,t){var i,i=v(u(n-1)-(i=n,"center"===(n=a.focus)?(o()-r(i,!0))/2:+n*r(i)||0));return t?function(n){a.trimSpace&&c.is(ut)&&(n=en(n,0,v(e()-o())));return n}(i):i}function b(){var n=d("left");return G(h)[n]-G(p)[n]+v(i(!1))}function x(n){return _(n?f.Controller.getEnd():0,!!a.trimSpace)}function k(){return!!s}function A(n,t){t=M(t)?b():t;var i=!0!==n&&v(t)<v(x(!1)),t=!1!==n&&v(t)>v(x(!0));return i||t}return{mount:function(){t([ln,kn,bn,_n],g)},destroy:function(){O(h,"style")},move:function(n,t,i,r){var u,o,e;s||(u=c.state.set,o=b(),s=(e=n!==t)||a.waitForTransition,u(4),l(dn,t,i,n),f.Transition.start(n,function(){e&&m(t),s=!1,u(3),l(vn,t,i,n),"move"===a.trimSpace&&n!==i&&o===b()?f.Controller.go(i<n?">":"<",!1,r):r&&r()}))},jump:m,translate:y,shift:w,cancel:function(){s=!1,y(b()),f.Transition.cancel()},toIndex:function(n){for(var t=f.Slides.get(),i=0,r=1/0,u=0;u<t.length;u++){var o=t[u].index,e=un(_(o,!0)-n);if(!(e<=r))break;r=e,i=o}return i},toPosition:_,getPosition:b,getLimit:x,isBusy:k,exceededLimit:A}},Controller:function(n,e,u){var o,c,f,t=En(n).on,a=e.Move,s=a.getPosition,l=a.getLimit,i=e.Slides,d=i.isEnough,r=i.getLength,v=n.is(ot),h=n.is(ut),p=u.start||0,g=p;function m(){o=r(!0),c=u.perMove,f=u.perPage,p=en(p,0,o-1)}function y(n,t,i,r,u){var o=t?n:z(n);e.Scroll.scroll(t||i?a.toPosition(o,!0):n,r,function(){S(a.toIndex(a.getPosition())),u&&u()})}function w(n){return b(!1,n)}function _(n){return b(!0,n)}function b(n,t){var i,r,u=c||(R()?1:f),o=x(p+u*(n?-1:1),p);return-1!==o||!h||(i=s(),r=l(!n),u=1,un(i-r)<u)?t?o:A(o):n?0:k()}function x(n,t,i){var r;return d()?(r=k(),n<0||r<n?n=on(0,n,t,!0)||on(r,t,n,!0)?L(E(n)):v?c?n:n<0?-(o%f||f):o:u.rewind?n<0?r:0:-1:v||i||n===t||(n=c?n:L(E(t)+(n<t?-1:1)))):n=-1,n}function k(){var n=o-f;return(R()||v&&c)&&(n=o-1),nn(n,0)}function A(n){return v?d()?n%o+(n<0?o:0):-1:n}function L(n){return en(R()?n:f*n,0,k())}function E(n){return R()||(n=on(n,o-f,o-1)?o-1:n,n=tn(n/f)),n}function z(n){n=a.toIndex(n);return h?en(n,0,k()):n}function S(n){n!==p&&(g=p,p=n)}function R(){return!M(u.focus)||u.isNavigation}return{mount:function(){m(),t([bn,_n],m,D-1)},go:function(n,t,i){var r=function(n){var t=p;{var i,r;P(n)?(r=n.match(/([+\-<>])(\d+)?/)||[],i=r[1],r=r[2],"+"===i||"-"===i?t=x(p+ +(""+i+(+r||1)),p,!0):">"===i?t=r?L(+r):w(!0):"<"===i&&(t=_(!0))):t=v?en(n,-f,o+f-1):en(n,0,k())}return t}(n);u.useScroll?y(r,!0,!0,u.speed,i):-1<(n=A(r))&&!a.isBusy()&&(t||n!==p)&&(S(n),a.move(r,n,g,i))},scroll:y,getNext:w,getPrev:_,getEnd:k,setIndex:S,getIndex:function(n){return n?g:p},toIndex:L,toPage:E,toDest:z,hasFocus:R}},Arrows:function(u,n,i){var r,t=En(u),o=t.on,e=t.bind,c=t.emit,f=i.classes,a=i.i18n,s=n.Elements,l=n.Controller,d=s.arrows,v=s.prev,h=s.next,p={};function g(){var n,t;i.arrows&&(v&&h||(d=F("div",f.arrows),v=m(!0),h=m(!1),r=!0,L(d,[v,h]),E(d,S("slider"===i.arrows&&s.slider||u.root)))),v&&h&&(p.prev?j(d,!1===i.arrows?"none":""):(n=s.track.id,T(v,Qn,n),T(h,Qn,n),p.prev=v,p.next=h,t=l.go,o([ln,vn,bn,_n,Ln],y),e(h,"click",function(){t(">",!0)}),e(v,"click",function(){t("<",!0)}),c("arrows:mounted",v,h)))}function m(n){return Y('<button class="'+f.arrow+" "+(n?f.prev:f.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="'+(i.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" ></path>')}function y(){var n=u.index,t=l.getPrev(),i=l.getNext(),r=-1<t&&n<t?a.last:a.prev,n=-1<i&&i<n?a.first:a.next;v.disabled=t<0,h.disabled=i<0,T(v,$n,r),T(h,$n,n),c("arrows:updated",v,h,t,i)}return{arrows:p,mount:function(){g(),o(bn,g)},destroy:function(){r?H(d):(O(v,rt),O(h,rt))}}},Autoplay:function(n,t,r){var i,u,o,e=En(n),c=e.on,f=e.bind,a=e.emit,s=t.Elements,l=zn(r.interval,n.go.bind(n,">"),function(n){var t=s.bar;t&&I(t,"width",100*n+"%");a("autoplay:playing",n)}),d=l.isPaused;function v(n){var t=n?"pause":"play",i=s[t];i&&(T(i,Qn,s.track.id),T(i,$n,r.i18n[t]),f(i,"click",n?p:h))}function h(){d()&&t.Slides.isEnough()&&(l.start(!r.resetProgress),u=i=o=!1,a("autoplay:play"))}function p(n){void 0===n&&(n=!0),d()||(l.pause(),a("autoplay:pause")),o=n}function g(){o||(i||u?p(!1):h())}return{mount:function(){var n=r.autoplay;n&&(v(!0),v(!1),function(){var n=s.root;r.pauseOnHover&&f(n,"mouseenter mouseleave",function(n){i="mouseenter"===n.type,g()});r.pauseOnFocus&&f(n,"focusin focusout",function(n){u="focusin"===n.type,g()});c([dn,"scroll",_n],l.rewind)}(),"pause"!==n&&h())},destroy:l.cancel,play:h,pause:p,isPaused:d}},Cover:function(n,t,i){var r=En(n).on;function u(i){t.Slides.forEach(function(n){var t=S(n.container||n.slide,"img");t&&t.src&&o(i,t,n)})}function o(n,t,i){i.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),j(t,n?"none":"")}return{mount:function(){i.cover&&(r(p,function(n,t){o(!0,n,t)}),r([ln,bn,_n],u.bind(null,!0)))},destroy:function(){u(!1)}}},Scroll:function(c,n,f){var a,s,t=En(c),i=t.on,l=t.emit,d=n.Move,v=d.getPosition,h=d.getLimit,p=d.exceededLimit;function g(r,n,t,u){var i,o=v(),e=1;n=n||(i=un(r-o),nn(i/1.5,800)),s=t,y(),a=zn(n,m,function(n){var t=v(),i=(o+(r-o)*(i=n,(n=f.easingFunc)?n(i):1-Math.pow(1-i,4))-v())*e;d.translate(t+i),c.is(ut)&&!u&&p()&&(e*=.6,un(i)<10&&(i=p(!1),g(h(!i),600,null,!0)))},1),l("scroll"),a.start()}function m(){var n=v(),t=d.toIndex(n);on(t,0,c.length-1)||d.translate(d.shift(n,0<t),!0),s&&s(),l(Ln)}function y(){a&&a.cancel()}function r(){a&&!a.isPaused()&&(y(),m())}return{mount:function(){i(dn,y),i([bn,_n],r)},destroy:y,scroll:g,cancel:r}},Drag:function(u,r,o){var e,c,f,a,s,l,d,v,h,n=En(u),t=n.on,p=n.emit,g=n.bind,m=n.unbind,y=r.Move,w=r.Scroll,_=r.Controller,b=r.Elements.track,i=(n=r.Direction).resolve,x=n.orient,k=y.getPosition,A=y.exceededLimit,L={passive:!1,capture:!0},E=!1;function z(){var n=o.drag;j(!n),s="free"===n}function S(n){var t,i;v||(t=o.noDrag,i=I(n),!(!t||C(n.target)&&!N(n.target,t))||!i&&n.button||(y.isBusy()?U(n,!0):(h=i?b:window,a=f=null,d=!1,g(h,ft,R,L),g(h,at,D,L),y.cancel(),w.cancel(),P(n))))}function R(n){var t,i,r;a||p("drag"),(a=n).cancelable&&(t=T(n)-T(c),l?(y.translate(e+t/(E&&u.is(ut)?5:1)),i=200<F(n)-F(c),r=E!==(E=A()),(i||r)&&P(n),p("dragging"),d=!0,U(n)):(r=W(r=o.dragMinThreshold)?r:{mouse:0,touch:+r||10},l=un(t)>(I(n)?r.touch:r.mouse),O()&&U(n)))}function D(n){var t,i;m(h,ft,R),m(h,at,D),a&&((l||n.cancelable&&O())&&(t=function(n){if(u.is(ot)||!E){var t=c===a&&f||c,i=T(a)-T(t),t=F(n)-F(t),n=F(n)-F(a)<200;if(t&&n)return i/t}return 0}(n),i=t,i=k()+cn(i)*$(un(i)*(o.flickPower||600),s?1/0:r.Layout.listSize()*(o.flickMaxPages||1)),s?_.scroll(i):u.is(et)?_.go(u.index+x(cn(t))):_.go(_.toDest(i),!0),U(n)),p("dragged")),l=!1}function P(n){f=c,c=n,e=k()}function M(n){!v&&d&&U(n,!0)}function O(){var n=un(T(a)-T(c));return un(T(a,!0)-T(c,!0))<n}function T(n,t){return(I(n)?n.touches[0]:n)["page"+i(t?"Y":"X")]}function F(n){return n.timeStamp}function I(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function j(n){v=n}return{mount:function(){g(b,ft,Z,L),g(b,at,Z,L),g(b,"touchstart mousedown",S,L),g(b,"click",M,{capture:!0}),g(b,"dragstart",U),t([ln,bn],z)},disable:j,isDragging:function(){return l}}},Keyboard:function(t,n,i){var r,u=En(t),o=u.on,e=u.bind,c=u.unbind,f=n.Elements.root,a=n.Direction.resolve;function s(){var n=i.keyboard,n=void 0===n?"global":n;n&&("focused"===n?T(r=f,tt,0):r=window,e(r,"keydown",d))}function l(){c(r,"keydown"),C(r)&&O(r,tt)}function d(n){n=n.key,n=b(st,n)?"Arrow"+n:n;n===a("ArrowLeft")?t.go("<"):n===a("ArrowRight")&&t.go(">")}return{mount:function(){s(),o(bn,function(){l(),s()})},destroy:l}},LazyLoad:function(i,n,o){var t=En(i),r=t.on,u=t.off,e=t.bind,c=t.emit,f="sequential"===o.lazyLoad,a=[],s=0;function l(){s=0,a=[]}function d(){(a=a.filter(function(n){var t=o.perPage*((o.preloadPages||1)+1)-1;return!n.o.isWithin(i.index,t)||v(n)})).length||u(vn)}function v(t){var i=t.e;A(t.o.slide,Jn),e(i,"load error",function(n){!function(n,t){var i=n.o;K(i.slide,Jn),t||(H(n.c),j(n.e,""),c(p,n.e,i),c(xn));f&&h()}(t,"error"===n.type)}),["src","srcset"].forEach(function(n){t[n]&&(T(i,n,t[n]),O(i,"src"===n?lt:dt))})}function h(){s<a.length&&v(a[s++])}return{mount:function(){o.lazyLoad&&(r([ln,_n],function(){l(),n.Slides.forEach(function(u){J(u.slide,vt).forEach(function(n){var t,i=X(n,lt),r=X(n,dt);i===n.src&&r===n.srcset||(T(t=F("span",o.classes.spinner,n.parentElement),Vn,"presentation"),a.push({e:n,o:u,src:i,srcset:r,c:t}),n.src||j(n,"none"))})}),f&&h()}),f||r([ln,_n,vn],d))},destroy:l}},Pagination:function(l,n,d){var v,t=En(l),i=t.on,r=t.emit,h=t.bind,u=t.unbind,p=n.Slides,g=n.Elements,o=n.Controller,m=o.hasFocus,e=o.getIndex,y=[];function c(){f(),d.pagination&&p.isEnough()&&(function(){var n=l.length,t=d.classes,i=d.i18n,r=d.perPage,u="slider"===d.pagination&&g.slider||g.root,o=m()?n:rn(n/r);v=F("ul",t.pagination,u);for(var e=0;e<o;e++){var c=F("li",null,v),f=F("button",{class:t.page,type:"button"},c),a=p.getIn(e).map(function(n){return n.slide.id}),s=!m()&&1<r?i.pageX:i.slideX;h(f,"click",w.bind(null,e)),T(f,Qn,a.join(" ")),T(f,$n,fn(s,e+1)),y.push({li:c,button:f,page:e})}}(),r("pagination:mounted",{list:v,items:y},a(l.index)),s())}function f(){v&&(H(v),y.forEach(function(n){u(n.button,"click")}),_(y),v=null)}function w(t){o.go(">"+t,!0,function(){var n=p.getAt(o.toIndex(t));n&&((n=n.slide).setActive&&n.setActive()||n.focus({preventScroll:!0}))})}function a(n){return y[o.toPage(n)]}function s(){var n=a(e(!0)),t=a(e());n&&(K(n.button,Hn),O(n.button,Zn)),t&&(A(t.button,Hn),T(t.button,Zn,!0)),r("pagination:updated",{list:v,items:y},n,t)}return{items:y,mount:function(){c(),i([bn,_n],c),i([dn,Ln],s)},destroy:f,getAt:a}},Sync:function(i,n,r){var u=i.splides,e=n.Elements.list;function c(){T(e,it,"ttb"!==r.direction?"horizontal":null)}function f(n){i.go(n.index)}function a(n,t){b(ht,t.key)&&(f(n),U(t))}return{mount:function(){var o,n,t;r.isNavigation?(n=En(i),t=n.on,n=n.emit,t(hn,f),t(wn,a),t([ln,bn],c),T(e,Vn,"menu"),n("navigation:mounted",i.splides)):(o=[],u.concat(i).forEach(function(r,n,u){En(r).on(dn,function(t,n,i){u.forEach(function(n){n===r||b(o,r)||(o.push(n),n.go(n.is(ot)?i:t))}),_(o)})}))},destroy:function(){O(e,rt)}}},Wheel:function(i,n,t){var r=En(i).bind;function u(n){var t=n.deltaY;t&&(i.go(t<0?"<":">"),U(n))}return{mount:function(){t.wheel&&r(n.Elements.track,"wheel",u,{passive:!1,capture:!0})}}}}),gt={type:"slide",speed:400,waitForTransition:!0,perPage:1,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:{slide:On,clone:Tn,arrows:In,arrow:t,prev:jn,next:Wn,pagination:i,page:i+"__page",spinner:m+"__spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}};function mt(n,r,t){var i=En(n).on;return{mount:function(){i([ln,_n],function(){c(function(){r.Slides.style("transition","opacity "+t.speed+"ms "+t.easing)})})},start:function(n,t){var i=r.Elements.track;I(i,"height",V(G(i).height)),c(function(){t(),I(i,"height","")})},cancel:Z}}function yt(o,n,e){var c,t=En(o).bind,f=n.Move,a=n.Controller,i=n.Elements.list;function r(){s("")}function s(n){I(i,"transition",n)}return{mount:function(){t(i,"transitionend",function(n){n.target===i&&c&&(r(),c())})},start:function(n,t){var i=f.toPosition(n,!0),r=f.getPosition(),u=function(n){var t=e.rewindSpeed;if(o.is(ut)&&t){var i=a.getIndex(!0),r=a.getEnd();if(0===i&&r<=n||r<=i&&0===n)return t}return e.speed}(n);1<=un(i-r)&&1<=u?(s("transform "+u+"ms "+e.easing),f.translate(i,!0),c=t):(f.jump(n),t())},cancel:r}}i=function(){function i(n,t){this.event=f(),this.Components={},this.state=h(1),this.splides=[],this.f={},this.a={};n=P(n)?q(document,n):n;Q(n,n+" is invalid."),this.root=n,l(gt,i.defaults),l(l(this.f,gt),t||{})}var n,t,r=i.prototype;return r.mount=function(n,t){var i=this,r=this.state,u=this.Components;return Q(r.is([1,5]),"Already mounted!"),r.set(1),this.s=u,this.l=t||this.l||(this.is(et)?mt:yt),this.a=n||this.a,e(R({},pt,this.a,{Transition:this.l}),function(n,t){n=n(i,u,i.f);(u[t]=n).setup&&n.setup()}),e(u,function(n){n.mount&&n.mount()}),this.emit(ln),A(this.root,"is-initialized"),r.set(3),this.emit("ready"),this},r.sync=function(n){return this.splides.push(n),n.splides.push(this),this},r.go=function(n){return this.s.Controller.go(n),this},r.on=function(n,t){return this.event.on(n,t,null,20),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(s(arguments,1))),this},r.add=function(n,t){return this.s.Slides.add(n,t),this},r.remove=function(n){return this.s.Slides.remove(n),this},r.is=function(n){return this.f.type===n},r.refresh=function(){return this.emit(_n),this},r.destroy=function(t){void 0===t&&(t=!0);var n=this.event,i=this.state;return i.is(1)?n.on("ready",this.destroy.bind(this,t),this):(e(this.s,function(n){n.destroy&&n.destroy(t)},!0),n.emit(d),n.destroy(),t&&_(this.splides),i.set(5)),this},n=i,(r=[{key:"options",get:function(){return this.f},set:function(n){var t=this.f;l(t,n),this.state.is(1)||this.emit(bn,t)}},{key:"length",get:function(){return this.s.Slides.getLength(!0)}},{key:"index",get:function(){return this.s.Controller.getIndex()}}])&&wt(n.prototype,r),t&&wt(n,t),i}();return i.defaults={},i.STATES=n,i},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).Splide=t();
    //                                         `;
    //                 document.head.appendChild(script);
    //                 var splide = new Splide(".details .clientReviews", {
    //                   autoplay: true,
    //                   type: "loop",
    //                   perPage: 2,
    //                   pagination: false,
    //                   gap: 20,
    //                   breakpoints: {
    //                     767: {
    //                       perPage: 1,
    //                       perMove: 1,
    //                       gap: 20,
    //                     },
    //                   },
    //                 });

    //                 splide.mount();

    //                 // Function to update pagination based on perPage option
    //                 function updatePagination() {
    //                   var totalSlides = splide.length;
    //                   var perPage = splide.options.perPage;
    //                   var totalPages = Math.ceil(totalSlides / perPage); // Ensure last page counts, even if it has 1 slide.

    //                   var paginationContainer =
    //                     document.querySelector(".custom-pagination");
    //                   paginationContainer.innerHTML = ""; // Clear existing pagination items

    //                   for (var i = 1; i <= totalPages; i++) {
    //                     var paginationItem = document.createElement("span");
    //                     paginationItem.classList.add("paginationItem");
    //                     paginationItem.textContent = i;

    //                     paginationItem.addEventListener("click", function () {
    //                       var pageIndex = parseInt(this.textContent) - 1;
    //                       var slideIndex = pageIndex * perPage;
    //                       splide.go(slideIndex);
    //                     });

    //                     paginationContainer.appendChild(paginationItem);
    //                   }

    //                   // Set the active class to the initial pagination item
    //                   paginationContainer
    //                     .querySelector(".paginationItem")
    //                     .classList.add("active");
    //                 }

    //                 // Initial pagination setup
    //                 updatePagination();

    //                 // Function to handle resize and orientation change events
    //                 function handleResize() {
    //                   // Debounce the update to avoid excessive recalculations
    //                   clearTimeout(window.resizeTimer);
    //                   window.resizeTimer = setTimeout(function () {
    //                     updatePagination();
    //                   }, 200);
    //                 }

    //                 // Listen for resize events to handle breakpoints
    //                 window.addEventListener("resize", handleResize);

    //                 // Listen for orientation change events
    //                 window.addEventListener("orientationchange", handleResize);

    //                 // Listen for Splide "move" event to update active pagination item
    //                 splide.on("move", function (newIndex) {
    //                   var paginationItems =
    //                     document.querySelectorAll(".paginationItem");
    //                   var activeIndex = Math.floor(
    //                     newIndex / splide.options.perPage
    //                   );

    //                   paginationItems.forEach(function (item, index) {
    //                     if (index === activeIndex) {
    //                       item.classList.add("active");
    //                     } else {
    //                       item.classList.remove("active");
    //                     }
    //                   });

    //                   // If we're on the last slide and it doesn't fill the page fully, make sure the last pagination is active.
    //                   if (newIndex >= splide.length - splide.options.perPage) {
    //                     paginationItems.forEach(function (item, index) {
    //                       if (index === paginationItems.length - 1) {
    //                         item.classList.add("active");
    //                       } else {
    //                         item.classList.remove("active");
    //                       }
    //                     });
    //                   }
    //                 });
    //               }

    //               function moveDetailsSectionInside() {
    //                 if (
    //                   document.querySelector(
    //                     ".spz_t14002 .formPopup .formWrapper + .details"
    //                   )
    //                 ) {
    //                   document
    //                     .querySelector(".spz_t14002 .formPopup .formWrapper")
    //                     .insertAdjacentElement(
    //                       "beforeend",
    //                       document.querySelector(
    //                         ".spz_t14002 .formPopup .details"
    //                       )
    //                     );
    //                 }
    //               }
    //               function moveDetailsSectionOutside() {
    //                 if (
    //                   document.querySelector(
    //                     ".spz_t14002 .formPopup .formWrapper .details"
    //                   )
    //                 ) {
    //                   document
    //                     .querySelector(".spz_t14002 .formPopup .formWrapper")
    //                     .insertAdjacentElement(
    //                       "afterend",
    //                       document.querySelector(
    //                         ".spz_t14002 .formPopup .details"
    //                       )
    //                     );
    //                 }
    //               }

    //               function handleResize() {
    //                 if (window.innerWidth > 1299) {
    //                   moveDetailsSectionOutside();
    //                 } else {
    //                   moveDetailsSectionInside();
    //                 }
    //               }
    //               window.addEventListener("resize", handleResize);
    //               handleResize();
    //             }
    //           });
    //         }
    //         OnetimeChanges();

    //         function bothFormsInitialSetup() {
    //           var waitForHeading = setInterval(() => {
    //             if (
    //               document.querySelectorAll("form#generic-lead-form h2")
    //                 .length > 0 &&
    //               document.querySelectorAll(
    //                 'form#generic-lead-form div[aria-haspopup="listbox"], form#generic-lead-form input.MuiInputBase-input:not(#ab-name):not(#ab-treatment), form#generic-lead-form select'
    //               ).length > 0
    //             ) {
    //               console.log("bothFormsInitialSetup");
    //               clearInterval(waitForHeading);
    //               document
    //                 .querySelector('div[aria-labelledby="popout-button-title"]')
    //                 .parentElement.classList.add("formWrapper");
    //               document
    //                 .querySelector('div[aria-labelledby="popout-button-title"]')
    //                 .parentElement.parentElement.classList.add("formPopup");

    //               // Adding classes in form heading Wrappers
    //               var headingContainers = document.querySelectorAll(
    //                 "form#generic-lead-form h2"
    //               );
    //               headingContainers.forEach((headingWrapper) => {
    //                 headingWrapper.parentElement.classList.add(
    //                   "headingWrapper"
    //                 );
    //                 headingWrapper.parentElement.parentElement.classList.add(
    //                   "subFormsWrapper"
    //                 );
    //               });

    //               // Adding classes in form fields
    //               document
    //                 .querySelectorAll(
    //                   'form#generic-lead-form div[aria-haspopup="listbox"], form#generic-lead-form input.MuiInputBase-input:not(#ab-name):not(#ab-treatment), form#generic-lead-form select'
    //                 )
    //                 .forEach(function (element) {
    //                   element.setAttribute("placeholder", "");
    //                   element.parentElement.classList.add(
    //                     "form-field__wrapper2"
    //                   );
    //                   element.parentElement.parentElement.classList.add(
    //                     "form-field__wrapper1"
    //                   );
    //                   var inputWrapper =
    //                     element.parentElement.parentElement.parentElement;
    //                   inputWrapper.classList.add("fieldContainer");
    //                   inputWrapper.parentElement.parentElement.classList.add(
    //                     "fieldsWrapper"
    //                   );
    //                   inputWrapper.parentElement.classList.add("form-field");
    //                   inputWrapper.parentElement.parentElement.nextElementSibling.classList.add(
    //                     "stepCTAWrapper"
    //                   );
    //                   var elementLabel = inputWrapper.querySelector("label");
    //                   var elementId = elementLabel.getAttribute("for");
    //                   inputWrapper.parentElement.classList.add(elementId);

    //                   if (element.getAttribute("aria-haspopup") == "listbox") {
    //                     inputWrapper.parentElement.classList.add("selectField");
    //                   }
    //                   if (
    //                     element.classList.contains("MuiNativeSelect-select")
    //                   ) {
    //                     // element.querySelector('option:first-child').innerText = ""
    //                     // if(!element.querySelector('.customDisabled')){
    //                     //     element.querySelector('option:first-child').insertAdjacentHTML('beforebegin', `<option class="customDisabled" disabled></option>`)
    //                     // }
    //                     element.selectedIndex = 1;
    //                     element.setAttribute("placeholder", "");
    //                     element.value = "";
    //                     inputWrapper.parentElement.classList.add(
    //                       "selectFieldActual"
    //                     );
    //                   }
    //                 });

    //               if (document.querySelector('input[name="australia-asia"]')) {
    //                 document
    //                   .querySelector('input[name="australia-asia"]')
    //                   .parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
    //                     "form-field",
    //                     "multiple_region",
    //                     "selectField"
    //                   );
    //               }

    //               // Adding classes in main wrappers to avoid nth child
    //               document
    //                 .querySelector(
    //                   ".spz_t14002 .formPopup form#generic-lead-form > div:nth-child(1)"
    //                 )
    //                 .classList.add("firstfieldsWrapper");
    //               document
    //                 .querySelector(
    //                   ".spz_t14002 .formPopup form#generic-lead-form > div:nth-child(2)"
    //                 )
    //                 .classList.add("secondfieldsWrapper");

    //               // Select fields logic
    //               var selectFields = document.querySelectorAll(
    //                 '.form-field .form-field__wrapper1 div[aria-haspopup="listbox"]'
    //               );
    //               if (selectFields) {
    //                 selectFields.forEach((selectField) => {
    //                   if (selectField.querySelector("em")) {
    //                     selectField.querySelector("em").innerHTML = "";
    //                   }
    //                   selectField.addEventListener("click", function () {
    //                     var formField =
    //                       selectField.parentElement.parentElement.parentElement
    //                         .parentElement;
    //                     var isExpanded =
    //                       selectField.getAttribute("aria-expanded");
    //                     if (isExpanded) {
    //                       formField.classList.add("active", "typing");
    //                     }
    //                   });
    //                 });
    //               }

    //               // Add states classes in input fields
    //               document
    //                 .querySelectorAll(
    //                   'form#generic-lead-form div[aria-haspopup="listbox"], form#generic-lead-form input.MuiInputBase-input:not(#ab-name):not(#ab-treatment), form#generic-lead-form select'
    //                 )
    //                 .forEach(function (element) {
    //                   fieldsStatesLogic(element);
    //                 });

    //               // Checking when all input fields aria-expanded will be changed to hangle active typing classes
    //               var targetElements = document.querySelectorAll(
    //                 '.spz_t14002 form#generic-lead-form .form-field .form-field__wrapper1 div[aria-haspopup="listbox"]'
    //               );
    //               if (targetElements) {
    //                 handleDesktopSelectClasses(targetElements);
    //               }

    //               controlDesktopDropdownActiveStates();
    //               adjustDesktopAutofillValues();
    //             }
    //           });
    //         }
    //         setTimeout(() => {
    //           bothFormsInitialSetup();
    //         }, 500);

    //         function Step1Changes() {
    //           var step2Interval = setInterval(() => {
    //             if (
    //               document.querySelector(
    //                 'form#generic-lead-form label[for="first-name"]'
    //               )
    //             ) {
    //               clearInterval(step2Interval);

    //               // Repositioning fields
    //               document
    //                 .querySelector(
    //                   "form#generic-lead-form .fieldsWrapper .form-field.title"
    //                 )
    //                 .after(
    //                   document.querySelector(
    //                     "form#generic-lead-form .form-field.email"
    //                   )
    //                 );
    //               document
    //                 .querySelector("form#generic-lead-form .form-field.email")
    //                 .after(
    //                   document.querySelector(
    //                     "form#generic-lead-form .form-field.phone-number"
    //                   )
    //                 );
    //               document
    //                 .querySelector(
    //                   "form#generic-lead-form .form-field.phone-number"
    //                 )
    //                 .after(
    //                   document.querySelector(
    //                     "form#generic-lead-form .form-field.self-attribution"
    //                   )
    //                 );
    //               setTimeout(() => {
    //                 document.querySelector(
    //                   ".spz_t14002 .formPopup form#generic-lead-form h2"
    //                 ).innerText = "Get prices";
    //               });

    //               if (
    //                 !document.querySelector(
    //                   "form#generic-lead-form > div:nth-child(1) .steps"
    //                 )
    //               ) {
    //                 document
    //                   .querySelector(
    //                     "form#generic-lead-form > div:nth-child(1) h2"
    //                   )
    //                   .insertAdjacentHTML(
    //                     "beforebegin",
    //                     `
    //                                             <div class="steps">
    //                                                 <div class="step active"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="4" fill="#00AEFF"></circle></svg></div>
    //                                                 <div class="step"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="4" fill="#EFF2F7"></circle></svg></div>
    //                                             </div>
    //                                         `
    //                   );
    //               }

    //               // Adding mobile logos
    //               if (
    //                 !document.querySelector(
    //                   "form#generic-lead-form > div:nth-child(1) .logo.mobile"
    //                 )
    //               ) {
    //                 document
    //                   .querySelector(
    //                     "form#generic-lead-form > div:nth-child(1) .steps"
    //                   )
    //                   .insertAdjacentHTML(
    //                     "beforebegin",
    //                     `<div class="logo mobile"><img src="//res.cloudinary.com/spiralyze/image/upload/v1707992068/geotab/2001/main_logo_1.svg" alt="Geotab"></div>`
    //                   );
    //               }

    //               // Changing Labels
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="first-name"]'
    //               ).innerHTML = "First name";
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="last-name"]'
    //               ).innerHTML = "Last name";
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="title"]'
    //               ).innerHTML = "Job title";
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="email"]'
    //               ).innerHTML = "Email";
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="phone-number"]'
    //               ).innerHTML = "Phone";
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="self-attribution"]'
    //               ).innerHTML = "How did you hear about us?";

    //               // adding custom Continue Buttons
    //               // if(!document.querySelector('form#generic-lead-form > div:nth-child(1) button.continue')){
    //               // 	document.querySelector('form#generic-lead-form > div:nth-child(1) .stepCTAWrapper').insertAdjacentHTML('beforeend', `<button type="button" class="continue">Continue <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M11.4721 5L16.3332 10M16.3332 10L11.4721 15M16.3332 10L4.6665 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`)
    //               // }
    //               if (
    //                 !document.querySelector(
    //                   "form#generic-lead-form > div:nth-child(1) button.continue"
    //                 )
    //               ) {
    //                 document
    //                   .querySelector(
    //                     "form#generic-lead-form > div:nth-child(1) button"
    //                   )
    //                   .removeAttribute("disabled");
    //                 document
    //                   .querySelector(
    //                     "form#generic-lead-form > div:nth-child(1) button"
    //                   )
    //                   .classList.add("continue");
    //                 document.querySelector(
    //                   "form#generic-lead-form > div:nth-child(1) button"
    //                 ).innerHTML = `Continue <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M11.4721 5L16.3332 10M16.3332 10L11.4721 15M16.3332 10L4.6665 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
    //               }

    //               document
    //                 .querySelector(
    //                   "form#generic-lead-form > div:nth-child(1) .stepCTAWrapper button.continue"
    //                 )
    //                 .addEventListener("click", function () {
    //                   var allFieldsFilled = 0;
    //                   var checkfields = document.querySelectorAll(
    //                     'form#generic-lead-form > div:nth-child(1) input:not(#self-attribution):not([id="ab-name"]):not([id="ab-treatment"]), form#generic-lead-form > div:nth-child(1) select'
    //                   );
    //                   var emptyFields = [];

    //                   checkfields.forEach((checkfield) => {
    //                     if (checkfield.value === "") {
    //                       emptyFields.push(checkfield);
    //                     } else if (checkfield.getAttribute("id") === "email") {
    //                       // Check if the field is the email field
    //                       if (isValidEmail(checkfield.value)) {
    //                         allFieldsFilled += 1;
    //                       } else {
    //                         emptyFields.push(checkfield);
    //                       }
    //                     } else {
    //                       allFieldsFilled += 1;
    //                     }
    //                   });

    //                   if (allFieldsFilled === checkfields.length) {
    //                     var emailInput = document.querySelector(
    //                       "form#generic-lead-form input#email"
    //                     );
    //                     var email;

    //                     if (emailInput) {
    //                       email = emailInput.value.trim();
    //                     }

    //                     if (isValidEmail(email)) {
    //                       // document.querySelector('form#generic-lead-form > div:nth-child(1)').style.display = "none"
    //                       // document.querySelector('form#generic-lead-form > div:nth-child(2)').style.display = "flex"
    //                       // document.querySelector('form#generic-lead-form > div:nth-child(1)').classList.add('hiddenField');
    //                       // document.querySelector('form#generic-lead-form > div:nth-child(2)').classList.remove('hiddenField');
    //                       // document.querySelector('form#generic-lead-form .fourthfieldsWrapper').classList.remove('hiddenField');
    //                       // document.querySelector('form#generic-lead-form .fifthfieldsWrapper').classList.remove('hiddenField');

    //                       document
    //                         .querySelector(
    //                           ".spz_t14002 .formPopup form#generic-lead-form .stepCTAWrapper > div:first-child button"
    //                         )
    //                         .click();
    //                       setTimeout(() => {
    //                         bothFormsInitialSetup();
    //                         Step2Changes();
    //                       }, 500);
    //                     } else {
    //                       if (emailInput) {
    //                         emailInput
    //                           .closest(".form-field")
    //                           .classList.add("error", "typing");
    //                       }
    //                     }
    //                   } else {
    //                     // Focus on the first empty field
    //                     if (emptyFields.length > 0) {
    //                       if (
    //                         (emptyFields[0].getAttribute("name") ==
    //                           "Title__c" ||
    //                           emptyFields[0].getAttribute("name") ==
    //                             "How_Did_You_Hear_About_Geotab__c") &&
    //                         window.outerWidth >= 961
    //                       ) {
    //                         emptyFields[0].parentElement.parentElement.parentElement.parentElement.classList.add(
    //                           "active",
    //                           "typing"
    //                         );
    //                       }
    //                       emptyFields[0].focus();
    //                       emptyFields[0]
    //                         .closest(".form-field")
    //                         .classList.add("error");
    //                     }
    //                   }
    //                 });

    //               // Detecting changes in title field
    //               if (
    //                 document.querySelectorAll(
    //                   "form#generic-lead-form .fieldsWrapper .form-field.title div[aria-haspopup]"
    //                 ).length > 0
    //               ) {
    //                 observeElementChanges(
    //                   "form#generic-lead-form .fieldsWrapper .form-field.title div[aria-haspopup]",
    //                   "childList",
    //                   function (mutation) {
    //                     if (mutation.target.textContent == "Other") {
    //                       setTimeout(function () {
    //                         var otherField = document.querySelector(
    //                           ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.title + div"
    //                         );
    //                         if (otherField) {
    //                           otherField.style.display = "none";
    //                           var inputElement =
    //                             otherField.querySelector("input");
    //                           if (
    //                             document.querySelector(
    //                               "form#generic-lead-form  #user_title"
    //                             )
    //                           ) {
    //                             var elm = document.querySelector("#user_title");
    //                             const capitalizeAndDispatch = function (e) {
    //                               elm.removeEventListener(
    //                                 "input",
    //                                 capitalizeAndDispatch
    //                               );
    //                               let capitalized =
    //                                 e.target.value.charAt(0).toUpperCase() +
    //                                 e.target.value.slice(1);
    //                               setNativeValue(elm, "Other");
    //                               elm.dispatchEvent(
    //                                 new Event("input", { bubbles: true })
    //                               );
    //                               elm.addEventListener(
    //                                 "input",
    //                                 capitalizeAndDispatch
    //                               );
    //                             };
    //                             elm.addEventListener(
    //                               "input",
    //                               capitalizeAndDispatch
    //                             );
    //                             const el = document.querySelector(
    //                               "form#generic-lead-form #user_title"
    //                             );
    //                             el.value = "New Value";
    //                             el.dispatchEvent(
    //                               new Event("input", { bubbles: true })
    //                             );
    //                           }
    //                         }
    //                       }, 500);
    //                     }
    //                   }
    //                 );
    //               }

    //               // Title tablet field
    //               var tabletTitle = document.querySelector(
    //                 "form#generic-lead-form .fieldsWrapper .form-field.title select"
    //               );
    //               if (tabletTitle) {
    //                 tabletTitle.addEventListener("change", function (event) {
    //                   if (event.target.value == "Other") {
    //                     var waitForElement = setInterval(() => {
    //                       if (
    //                         document.querySelector(
    //                           "form#generic-lead-form #user_title"
    //                         )
    //                       ) {
    //                         clearInterval(waitForElement);
    //                         document
    //                           .querySelector(
    //                             "form#generic-lead-form #user_title"
    //                           )
    //                           .closest(".MuiGrid2-root").style.display = "none";
    //                         var elm = document.querySelector(
    //                           "form#generic-lead-form #user_title"
    //                         );
    //                         const capitalizeAndDispatch = function (e) {
    //                           elm.removeEventListener(
    //                             "input",
    //                             capitalizeAndDispatch
    //                           );
    //                           let capitalized =
    //                             e.target.value.charAt(0).toUpperCase() +
    //                             e.target.value.slice(1);
    //                           setNativeValue(elm, "Other");
    //                           elm.dispatchEvent(
    //                             new Event("input", { bubbles: true })
    //                           );
    //                           elm.addEventListener(
    //                             "input",
    //                             capitalizeAndDispatch
    //                           );
    //                         };
    //                         elm.addEventListener(
    //                           "input",
    //                           capitalizeAndDispatch
    //                         );
    //                         const el = document.querySelector(
    //                           "form#generic-lead-form #user_title"
    //                         );
    //                         el.value = "New Value";
    //                         el.dispatchEvent(
    //                           new Event("input", { bubbles: true })
    //                         );
    //                       }
    //                     });
    //                   }
    //                 });
    //               }

    //               // Progressive Logic
    //               var hiddenFields = document.querySelectorAll(
    //                 ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.phone-number, .spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.self-attribution"
    //               );
    //               hiddenFields.forEach((field) => {
    //                 field.classList.add("hiddenField");
    //               });
    //               var visibleFields = document.querySelectorAll(
    //                 ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.first-name input, .spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.last-name input, .spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.email input, .spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.title input, .spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.title select"
    //               );

    //               visibleFields.forEach((field) => {
    //                 if (field.value.trim() != "") {
    //                   var allFilled = true;
    //                   visibleFields.forEach((f) => {
    //                     if (f.value.trim() === "") {
    //                       allFilled = false;
    //                     }
    //                   });

    //                   if (allFilled) {
    //                     hiddenFields.forEach((hidden) => {
    //                       hidden.classList.remove("hiddenField");
    //                     });
    //                   }
    //                 } else {
    //                   field.addEventListener("input", function () {
    //                     var allFilled = true;

    //                     visibleFields.forEach((f) => {
    //                       if (f.value.trim() === "") {
    //                         allFilled = false;
    //                       }
    //                     });

    //                     if (allFilled) {
    //                       hiddenFields.forEach((hidden) => {
    //                         hidden.classList.remove("hiddenField");
    //                       });
    //                     }
    //                   });
    //                 }
    //               });

    //               if (!document.querySelector(".firstfieldsWrapper .tags")) {
    //                 if (
    //                   document.querySelector(
    //                     ".spz_t14002 .formPopup form#generic-lead-form .firstfieldsWrapper h2"
    //                   )
    //                 ) {
    //                   document
    //                     .querySelector(
    //                       ".spz_t14002 .formPopup form#generic-lead-form .firstfieldsWrapper h2"
    //                     )
    //                     .insertAdjacentHTML(
    //                       "afterend",
    //                       `
    //                                                 <div class="tags">
    //                                                     <div class="tag">Advanced tracking</div>
    //                                                     <div class="tag">Fleet dash cams</div>
    //                                                     <div class="tag">ELD compliance</div>
    //                                                 </div>
    //                                             `
    //                     );
    //                 }
    //               }
    //             }
    //           });
    //         }
    //         setTimeout(() => {
    //           Step1Changes();
    //         }, 500);

    //         function Step2Changes() {
    //           var step2Interval = setInterval(() => {
    //             if (
    //               document.querySelector(
    //                 'form#generic-lead-form label[for="company"]'
    //               ) &&
    //               document.querySelector(
    //                 "form#generic-lead-form > div:nth-child(2) .fieldsWrapper"
    //               )
    //             ) {
    //               clearInterval(step2Interval);
    //               document.querySelector(
    //                 "form#generic-lead-form > div:nth-child(2) h2"
    //               ).innerText = "Company details";

    //               if (
    //                 !document.querySelector(
    //                   "form#generic-lead-form > div:nth-child(2) .steps"
    //                 )
    //               ) {
    //                 document
    //                   .querySelector(
    //                     "form#generic-lead-form > div:nth-child(2) h2"
    //                   )
    //                   .insertAdjacentHTML(
    //                     "beforebegin",
    //                     `
    //                                             <div class="steps">
    //                                                 <div class="step"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="4" fill="#00AEFF"></circle></svg></div>
    //                                                 <div class="step active"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="4" fill="#00AEFF"></circle></svg></div>
    //                                             </div>
    //                                         `
    //                   );
    //               }

    //               if (
    //                 !document.querySelector(
    //                   "form#generic-lead-form > div:nth-child(2) .logo.mobile"
    //                 )
    //               ) {
    //                 document
    //                   .querySelector(
    //                     "form#generic-lead-form > div:nth-child(2) .steps"
    //                   )
    //                   .insertAdjacentHTML(
    //                     "beforebegin",
    //                     `<div class="logo mobile"><img src="//res.cloudinary.com/spiralyze/image/upload/v1707992068/geotab/2001/main_logo_1.svg" alt="Geotab"></div>`
    //                   );
    //               }

    //               // Chaning step2 fields
    //               // Select the parent element
    //               var parentElement = document.querySelector(
    //                 "form#generic-lead-form > div:nth-child(2) .fieldsWrapper"
    //               );
    //               parentElement.prepend(
    //                 document.querySelector(
    //                   "form#generic-lead-form .form-field.city"
    //                 )
    //               );
    //               parentElement.prepend(
    //                 document.querySelector(
    //                   "form#generic-lead-form .form-field.country"
    //                 )
    //               );
    //               parentElement.prepend(
    //                 document.querySelector(
    //                   "form#generic-lead-form .form-field.fleet-size"
    //                 )
    //               );
    //               parentElement.prepend(
    //                 document.querySelector(
    //                   "form#generic-lead-form .form-field.industry"
    //                 )
    //               );
    //               parentElement.prepend(
    //                 document.querySelector(
    //                   "form#generic-lead-form .form-field.company"
    //                 )
    //               );
    //               document
    //                 .querySelector("form#generic-lead-form .form-field.city")
    //                 .classList.add("hiddenField");

    //               // Regions Feild
    //               var cityField2 = document.querySelector(
    //                 "form#generic-lead-form .form-field.city"
    //               );
    //               var regionField = document.querySelector(
    //                 "form#generic-lead-form .form-field.multiple_region"
    //               );
    //               if (cityField2 && regionField) {
    //                 regionField.classList.add("fullWidth");
    //                 regionField.parentElement.classList.add("fullWidth");
    //               }

    //               // Changing Labels
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="company"]'
    //               ).innerHTML = "Company name";
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="industry"]'
    //               ).innerHTML = "Industry";
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="fleet-size"]'
    //               ).innerHTML = "Fleet size";
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="country"]'
    //               ).innerHTML = "Country";
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="city"]'
    //               ).innerHTML = "City";
    //               document.querySelector(
    //                 '.spz_t14002 form#generic-lead-form .fieldsWrapper label[for="multiple_region"]'
    //               ).innerHTML = `Does your company operate in multiple regions?<span>(Optional)</span>`;

    //               // Privacy Policy Checkbox
    //               if (!document.querySelector("checkboxPrivacy")) {
    //                 var containerInterval = setInterval(function () {
    //                   if (
    //                     document.querySelector(
    //                       ".spz_t14002 .formPopup form#generic-lead-form > div:nth-child(2) .fieldsWrapper > .stepCTAWrapper label > span:first-child"
    //                     )
    //                   ) {
    //                     clearInterval(containerInterval);
    //                     document
    //                       .querySelector(
    //                         ".spz_t14002 .formPopup form#generic-lead-form > div:nth-child(2) .fieldsWrapper > .stepCTAWrapper label > span:first-child"
    //                       )
    //                       .insertAdjacentHTML(
    //                         "beforeend",
    //                         `<div class="checkboxPrivacy"></div>`
    //                       );
    //                   }
    //                 });
    //               }

    //               if (
    //                 document.querySelectorAll(
    //                   ".spz_t14002 form#generic-lead-form .fieldsWrapper .form-field.country div[aria-haspopup]"
    //                 ).length > 0
    //               ) {
    //                 observeElementChanges(
    //                   ".spz_t14002 form#generic-lead-form .fieldsWrapper .form-field.country div[aria-haspopup]",
    //                   "childList",
    //                   function (mutation) {
    //                     if (
    //                       mutation.target.textContent == "United States" ||
    //                       mutation.target.textContent == "Canada"
    //                     ) {
    //                       var stateInterval = setInterval(function () {
    //                         if (
    //                           document.querySelector(
    //                             "form#generic-lead-form  label#state-input-label"
    //                           )
    //                         ) {
    //                           clearInterval(stateInterval);

    //                           setTimeout(function () {
    //                             document
    //                               .querySelector(
    //                                 "form#generic-lead-form label#country-input-label"
    //                               )
    //                               .parentElement.parentElement.parentElement.classList.add(
    //                                 "form-field",
    //                                 "country",
    //                                 "selectField",
    //                                 "active"
    //                               );
    //                             countrySubFieldCorrection(
    //                               document.querySelector(
    //                                 "form#generic-lead-form  label#state-input-label"
    //                               ),
    //                               mutation.target.textContent
    //                             );
    //                             if (
    //                               document.querySelector(
    //                                 ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.subIndustry"
    //                               )
    //                             ) {
    //                               document
    //                                 .querySelector(
    //                                   ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.country"
    //                                 )
    //                                 .classList.remove("fullWidth");
    //                               document
    //                                 .querySelector(
    //                                   ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.city"
    //                                 )
    //                                 .classList.add("fullWidth");
    //                             }

    //                             if (
    //                               document.querySelector(
    //                                 ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.state"
    //                               )
    //                             ) {
    //                               document.querySelector(
    //                                 ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.state"
    //                               ).style.display = "block";
    //                             }
    //                             document
    //                               .querySelector(
    //                                 ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.country"
    //                               )
    //                               .after(
    //                                 document.querySelector(
    //                                   ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.state"
    //                                 )
    //                               );
    //                             controlDesktopDropdownActiveStates();
    //                             adjustDesktopAutofillValues();
    //                           }, 500);
    //                         }
    //                       });
    //                     } else {
    //                       if (
    //                         document.querySelector(
    //                           "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                         )
    //                       ) {
    //                         var countryLabelInterval = setInterval(function () {
    //                           if (
    //                             document.querySelector(
    //                               ".spz_t14002 form#generic-lead-form label#country-input-label"
    //                             )
    //                           ) {
    //                             clearInterval(countryLabelInterval);
    //                             document
    //                               .querySelector(
    //                                 ".spz_t14002 form#generic-lead-form label#country-input-label"
    //                               )
    //                               .parentElement.parentElement.parentElement.classList.add(
    //                                 "form-field",
    //                                 "country",
    //                                 "selectField",
    //                                 "active"
    //                               );
    //                             if (
    //                               document.querySelector(
    //                                 ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.state"
    //                               )
    //                             ) {
    //                               document.querySelector(
    //                                 ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.state"
    //                               ).style.display = "none";
    //                             }
    //                           }
    //                         });
    //                         document
    //                           .querySelector(
    //                             "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                           )
    //                           .classList.remove("hiddenField");
    //                         if (
    //                           document.querySelector(
    //                             ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.subIndustry"
    //                           )
    //                         ) {
    //                           document
    //                             .querySelector(
    //                               "form#generic-lead-form .fieldsWrapper .form-field.country"
    //                             )
    //                             .classList.remove("fullWidth");
    //                           document
    //                             .querySelector(
    //                               "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                             )
    //                             .classList.remove("fullWidth");
    //                         } else {
    //                           document
    //                             .querySelector(
    //                               "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                             )
    //                             .classList.add("fullWidth");
    //                         }
    //                       }
    //                     }
    //                   }
    //                 );

    //                 function countrySubFieldCorrection(targetElement, type) {
    //                   var fieldWrapper =
    //                     targetElement.parentElement.parentElement.parentElement;
    //                   fieldWrapper.classList.add(
    //                     "form-field",
    //                     "state",
    //                     "selectField"
    //                   );
    //                   targetElement.parentElement.parentElement.classList.add(
    //                     "fieldContainer"
    //                   );
    //                   var elementForStates = fieldWrapper.querySelector(
    //                     'div[aria-haspopup="listbox"]'
    //                   );
    //                   fieldsStatesLogic(elementForStates);
    //                   targetElement.parentElement.classList.add("stateLabel");
    //                   if (
    //                     document
    //                       .querySelector(
    //                         "form#generic-lead-form .fieldsWrapper .form-field.state"
    //                       )
    //                       .classList.contains("active")
    //                   ) {
    //                     document
    //                       .querySelector(
    //                         "form#generic-lead-form .fieldsWrapper .form-field.state"
    //                       )
    //                       .classList.remove("active");
    //                   }
    //                   document
    //                     .querySelector(
    //                       "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                     )
    //                     .classList.remove("hiddenField");

    //                   if (type == "United States") {
    //                     handleDesktopSelectClasses(
    //                       fieldWrapper.querySelectorAll(
    //                         'div[aria-haspopup="listbox"]'
    //                       )
    //                     );
    //                     handleCityFullWidth();
    //                   } else if (type == "Canada") {
    //                     handleDesktopSelectClasses(
    //                       fieldWrapper.querySelectorAll(
    //                         'div[aria-haspopup="listbox"]'
    //                       )
    //                     );
    //                     handleCityFullWidth();
    //                   } else {
    //                     document
    //                       .querySelector(
    //                         "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                       )
    //                       .classList.remove("hiddenField");
    //                     document
    //                       .querySelector(
    //                         "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                       )
    //                       .classList.add("fullWidth");
    //                   }
    //                 }
    //               }

    //               // Detect Industry Field Changes
    //               if (
    //                 document.querySelectorAll(
    //                   "form#generic-lead-form .form-field.industry div[aria-haspopup]"
    //                 ).length > 0
    //               ) {
    //                 observeElementChanges(
    //                   "form#generic-lead-form .form-field.industry div[aria-haspopup]",
    //                   "childList",
    //                   function (mutation) {
    //                     var subindustryInterval = setInterval(function () {
    //                       if (
    //                         document.querySelector(
    //                           ".MuiInputBase-root #subindustry"
    //                         )
    //                       ) {
    //                         clearInterval(subindustryInterval);
    //                         document
    //                           .querySelector(".MuiInputBase-root #subindustry")
    //                           .closest(".MuiFormControl-root")
    //                           .parentElement.parentElement.classList.add(
    //                             "selectField",
    //                             "form-field",
    //                             "subIndustry"
    //                           );
    //                         document
    //                           .querySelector(".MuiInputBase-root #subindustry")
    //                           .closest(".MuiFormControl-root")
    //                           .parentElement.classList.add("fieldContainer");
    //                         if (document.querySelectorAll(".none").length > 0) {
    //                           document
    //                             .querySelector(
    //                               ".MuiInputBase-root #subindustry"
    //                             )
    //                             .closest(".MuiGrid-root")
    //                             .classList.add("none");
    //                         }

    //                         document.querySelector(
    //                           "label#subindustry-input-label"
    //                         ).textContent = "Sub-industry";

    //                         var selectFieldIndustry = document.querySelector(
    //                           '.form-field.subIndustry div[aria-haspopup="listbox"]'
    //                         );
    //                         handleDesktopSelectClasses(
    //                           document.querySelectorAll(
    //                             '.form-field.subIndustry div[aria-haspopup="listbox"]'
    //                           )
    //                         );
    //                         fieldsStatesLogic(selectFieldIndustry);
    //                         document
    //                           .querySelector(".form-field.subIndustry")
    //                           .addEventListener("click", function () {
    //                             var formField =
    //                               selectFieldIndustry.closest(".MuiGrid-root");
    //                             var isExpanded =
    //                               selectFieldIndustry.getAttribute(
    //                                 "aria-expanded"
    //                               );
    //                             if (isExpanded) {
    //                               formField.classList.add("active", "typing");
    //                               progressform();
    //                             }
    //                           });
    //                         document
    //                           .querySelector(
    //                             "form#generic-lead-form .form-field.industry"
    //                           )
    //                           .insertAdjacentElement(
    //                             "afterend",
    //                             document.querySelector(
    //                               ".form-field.subIndustry"
    //                             )
    //                           );

    //                         if (
    //                           !document
    //                             .querySelector(
    //                               "form#generic-lead-form .form-field.city"
    //                             )
    //                             .classList.contains("hiddenField") &&
    //                           document.querySelector(
    //                             "form#generic-lead-form .form-field.state .MuiFormControl-root"
    //                           )
    //                         ) {
    //                           document
    //                             .querySelector(
    //                               "form#generic-lead-form .form-field.city"
    //                             )
    //                             .classList.add("fullWidth");
    //                         } else if (
    //                           !document
    //                             .querySelector(
    //                               "form#generic-lead-form .form-field.city"
    //                             )
    //                             .classList.contains("hiddenField") &&
    //                           !document.querySelector(
    //                             "form#generic-lead-form .form-field.state .MuiFormControl-root"
    //                           )
    //                         ) {
    //                           document
    //                             .querySelector(
    //                               "form#generic-lead-form .form-field.city"
    //                             )
    //                             .classList.remove("fullWidth");
    //                         } else if (
    //                           document
    //                             .querySelector(
    //                               "form#generic-lead-form .form-field.city"
    //                             )
    //                             .classList.contains("hiddenField")
    //                         ) {
    //                           document
    //                             .querySelector(
    //                               "form#generic-lead-form .form-field.country"
    //                             )
    //                             .classList.add("fullWidth");
    //                         } else {
    //                           document.querySelector(
    //                             "form#generic-lead-form .form-field.country"
    //                           ).style.maxWidth = "100%";
    //                         }
    //                         adjustDesktopAutofillValues();
    //                         controlDesktopDropdownActiveStates();
    //                       }
    //                     });
    //                   }
    //                 );
    //               }

    //               // Handling country dropdown select from tablet
    //               var countrySelect = document.querySelector(
    //                 "form#generic-lead-form .fieldsWrapper .form-field.country select#country"
    //               );
    //               if (countrySelect) {
    //                 countrySelect.addEventListener("change", function (event) {
    //                   if (event.target.value == "US") {
    //                     setTimeout(() => {
    //                       changeSelectOnCountryChange("State");
    //                       document
    //                         .querySelector(
    //                           "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                         )
    //                         .classList.remove("hiddenField");
    //                       document
    //                         .querySelector(
    //                           "form#generic-lead-form .fieldsWrapper .form-field.country"
    //                         )
    //                         .classList.remove("fullWidth");
    //                       handleCityFullWidth();
    //                       if (
    //                         document.querySelector(
    //                           ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.subIndustry"
    //                         )
    //                       ) {
    //                         var stateInterval = setInterval(function () {
    //                           if (
    //                             document.querySelector(
    //                               ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.state"
    //                             )
    //                           ) {
    //                             clearInterval(stateInterval);
    //                           }
    //                         });
    //                       }
    //                     }, 100);
    //                   } else if (event.target.value == "CA") {
    //                     setTimeout(() => {
    //                       changeSelectOnCountryChange("Province");
    //                       document
    //                         .querySelector(
    //                           "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                         )
    //                         .classList.remove("hiddenField");
    //                       document
    //                         .querySelector(
    //                           "form#generic-lead-form .fieldsWrapper .form-field.country"
    //                         )
    //                         .classList.remove("fullWidth");
    //                       handleCityFullWidth();
    //                       if (
    //                         document.querySelector(
    //                           ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.subIndustry"
    //                         )
    //                       ) {
    //                         var stateInterval = setInterval(function () {
    //                           if (
    //                             document.querySelector(
    //                               ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.state"
    //                             )
    //                           ) {
    //                             clearInterval(stateInterval);
    //                           }
    //                         });
    //                       }
    //                     }, 100);
    //                   } else {
    //                     document
    //                       .querySelector(
    //                         "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                       )
    //                       .classList.remove("hiddenField");
    //                     document
    //                       .querySelector(
    //                         "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                       )
    //                       .classList.add("fullWidth");
    //                     if (
    //                       document.querySelector(
    //                         ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.state"
    //                       )
    //                     ) {
    //                       document.querySelector(
    //                         ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.state"
    //                       ).style.display = "none";
    //                     }
    //                     setTimeout(function () {
    //                       document
    //                         .querySelector(
    //                           "form#generic-lead-form label#country-input-label"
    //                         )
    //                         .parentElement.parentElement.parentElement.classList.add(
    //                           "form-field",
    //                           "country",
    //                           "selectFieldActual",
    //                           "active"
    //                         );
    //                       if (
    //                         document.querySelector(
    //                           ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.subIndustry"
    //                         )
    //                       ) {
    //                         document
    //                           .querySelector(
    //                             ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.country"
    //                           )
    //                           .classList.remove("fullWidth");
    //                         document
    //                           .querySelector(
    //                             ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.city"
    //                           )
    //                           .classList.remove("fullWidth");
    //                       }
    //                     }, 100);
    //                   }
    //                 });
    //               }

    //               function handleCityFullWidth() {
    //                 document
    //                   .querySelector(
    //                     "form#generic-lead-form .fieldsWrapper .form-field.city"
    //                   )
    //                   .classList.remove("fullWidth");
    //               }

    //               function changeSelectOnCountryChange(title) {
    //                 setTimeout(function () {
    //                   var elements = document.querySelector(
    //                     "form#generic-lead-form select#state"
    //                   );
    //                   // if(!document.querySelector('.toShowTitle')){
    //                   //     elements.querySelector('option:first-child').insertAdjacentHTML('beforebegin', `<option class="toShowTitle" disabled></option>`)
    //                   // }
    //                   elements.selectedIndex = 1;
    //                   elements.setAttribute("placeholder", "");
    //                   elements.value = "";
    //                   elements.parentElement.parentElement.parentElement.parentElement.classList.remove(
    //                     "active"
    //                   );
    //                   var label =
    //                     elements.parentElement.parentElement.parentElement.querySelector(
    //                       "label"
    //                     );
    //                   elements.parentElement.parentElement.parentElement.parentElement.classList.add(
    //                     "form-field",
    //                     "state",
    //                     "selectFieldActual"
    //                   );
    //                   elements.parentElement.parentElement.parentElement.classList.add(
    //                     "fieldContainer"
    //                   );
    //                   elements.parentElement.parentElement.classList.add(
    //                     "form-field__wrapper1"
    //                   );
    //                   elements.querySelector("option:first-child").innerHTML =
    //                     "";

    //                   document.querySelector(
    //                     ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.state"
    //                   ).style.display = "block";
    //                   document
    //                     .querySelector(
    //                       "form#generic-lead-form label#country-input-label"
    //                     )
    //                     .parentElement.parentElement.parentElement.classList.add(
    //                       "form-field",
    //                       "country",
    //                       "selectFieldActual",
    //                       "active"
    //                     );

    //                   fieldsStatesLogic(elements);

    //                   document
    //                     .querySelector(
    //                       ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.country"
    //                     )
    //                     .after(
    //                       document.querySelector(
    //                         ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.state"
    //                       )
    //                     );

    //                   if (
    //                     document.querySelector(
    //                       ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.subIndustry"
    //                     )
    //                   ) {
    //                     document
    //                       .querySelector(
    //                         ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.city"
    //                       )
    //                       .classList.add("fullWidth");
    //                   }
    //                 }, 100);
    //               }

    //               // Handling industry dropdown select from tablet
    //               var industrySelect = document.querySelector(
    //                 "form#generic-lead-form select#industry"
    //               );
    //               if (industrySelect) {
    //                 industrySelect.addEventListener("change", function () {
    //                   var subIndustryInterval = setInterval(function () {
    //                     if (document.querySelector("select#subindustry")) {
    //                       clearInterval(subIndustryInterval);
    //                       var industrySelectTablet =
    //                         document.querySelector("select#subindustry");
    //                       industrySelectTablet.setAttribute("placeholder", "");
    //                       industrySelectTablet.querySelector(
    //                         "option:first-child"
    //                       ).innerHTML = "";
    //                       document
    //                         .querySelector(".MuiInputBase-root #subindustry")
    //                         .closest(".MuiFormControl-root")
    //                         .parentElement.parentElement.classList.add(
    //                           "form-field",
    //                           "subIndustry",
    //                           "selectFieldActual"
    //                         );
    //                       document
    //                         .querySelector(".form-field.subIndustry > div")
    //                         .classList.add("form-field__wrapper1");
    //                       document.querySelector(
    //                         "label#subindustry-input-label"
    //                       ).textContent = "Sub-industry";

    //                       fieldsStatesLogic(industrySelectTablet);

    //                       document
    //                         .querySelector(".form-field.industry")
    //                         .insertAdjacentElement(
    //                           "afterend",
    //                           document.querySelector(".form-field.subIndustry")
    //                         );

    //                       setTimeout(function () {
    //                         if (
    //                           document
    //                             .querySelector(".form-field.subIndustry")
    //                             .classList.contains("active")
    //                         ) {
    //                           document
    //                             .querySelector(".form-field.subIndustry")
    //                             .classList.remove("active");
    //                         }
    //                       }, 100);

    //                       if (
    //                         !document
    //                           .querySelector(
    //                             "form#generic-lead-form .form-field.city"
    //                           )
    //                           .classList.contains("hiddenField") &&
    //                         document.querySelector(
    //                           "form#generic-lead-form .form-field.state .MuiFormControl-root"
    //                         )
    //                       ) {
    //                         document
    //                           .querySelector(
    //                             "form#generic-lead-form .form-field.city"
    //                           )
    //                           .classList.add("fullWidth");
    //                       } else if (
    //                         !document
    //                           .querySelector(
    //                             "form#generic-lead-form .form-field.city"
    //                           )
    //                           .classList.contains("hiddenField") &&
    //                         !document.querySelector(
    //                           "form#generic-lead-form .form-field.state .MuiFormControl-root"
    //                         )
    //                       ) {
    //                         document
    //                           .querySelector(
    //                             "form#generic-lead-form .form-field.city"
    //                           )
    //                           .classList.remove("fullWidth");
    //                       } else if (
    //                         document
    //                           .querySelector(
    //                             "form#generic-lead-form .form-field.city"
    //                           )
    //                           .classList.contains("hiddenField")
    //                       ) {
    //                         document
    //                           .querySelector(
    //                             "form#generic-lead-form .form-field.country"
    //                           )
    //                           .classList.add("fullWidth");
    //                       } else {
    //                         document.querySelector(
    //                           "form#generic-lead-form .form-field.country"
    //                         ).style.maxWidth = "100%";
    //                       }
    //                     }
    //                   });
    //                 });
    //               }

    //               // Multi select for tablet logic

    //               // Select the elements
    //               const multipleRegionSelect = document.querySelectorAll(
    //                 ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.multiple_region label input"
    //               );

    //               if (multipleRegionSelect.length > 0) {
    //                 // Create an array of checkbox elements based on the options
    //                 const checkboxes = Array.from(
    //                   document.querySelectorAll(
    //                     ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.multiple_region label"
    //                   )
    //                 )
    //                   .map(
    //                     (option) => `
    //                                                 <li>
    //                                                     <label>
    //                                                         <input type="checkbox" value="${option
    //                                                           .querySelector(
    //                                                             "input"
    //                                                           )
    //                                                           .getAttribute(
    //                                                             "name"
    //                                                           )}" name="region" />
    //                                                         <p>${
    //                                                           option.querySelector(
    //                                                             "p"
    //                                                           ).innerText
    //                                                         }</p>
    //                                                     </label>
    //                                                 </li>
    //                                             `
    //                   )
    //                   .join("");

    //                 // Insert the generated checkboxes after the form-field__wrapper1
    //                 document
    //                   .querySelector(
    //                     "form#generic-lead-form .fieldsWrapper .form-field.multiple_region  > .MuiGrid2-root"
    //                   )
    //                   .insertAdjacentHTML(
    //                     "beforebegin",
    //                     `
    //                                             <div class="activated form-field__wrapper1">
    //                                                 <label>Does your company operate in multiple regions? <span>(Optional)</span></label>
    //                                                 <div>
    //                                                     <div class="checkbox-dropdown">
    //                                                         <input class="optionsSelected" readonly>
    //                                                         <ul class="checkbox-dropdown-list">
    //                                                             ${checkboxes}
    //                                                         </ul>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         `
    //                   );

    //                 const checkboxDropdown = document.querySelector(
    //                   "form#generic-lead-form .checkbox-dropdown"
    //                 );
    //                 const dropdownList = document.querySelector(
    //                   "form#generic-lead-form .checkbox-dropdown ul"
    //                 );

    //                 // Add click event listener to checkbox-dropdown
    //                 checkboxDropdown.addEventListener(
    //                   "click",
    //                   function (event) {
    //                     this.classList.toggle("is-active");
    //                     this.parentElement.parentElement.parentElement.classList.add(
    //                       "active",
    //                       "typing"
    //                     );
    //                     event.stopPropagation();
    //                   }
    //                 );

    //                 // Add a click event listener to the document to close the dropdown when clicking outside
    //                 document.addEventListener("click", function (event) {
    //                   const excludedElements = document.querySelectorAll(
    //                     ".MuiFormControlLabel-root, .PrivateSwitchBase-input"
    //                   );

    //                   for (let element of excludedElements) {
    //                     if (element.contains(event.target)) {
    //                       return;
    //                     }
    //                   }

    //                   // Continue with the dropdown close logic if the click target is not an excluded element
    //                   if (
    //                     !checkboxDropdown.contains(event.target) &&
    //                     document.querySelector(
    //                       "form#generic-lead-form .optionsSelected"
    //                     )
    //                   ) {
    //                     checkboxDropdown.classList.remove("is-active");
    //                     if (
    //                       document.querySelector(
    //                         "form#generic-lead-form .optionsSelected"
    //                       ).value !== ""
    //                     ) {
    //                       checkboxDropdown.parentElement.parentElement.parentElement.classList.remove(
    //                         "typing"
    //                       );
    //                     } else {
    //                       checkboxDropdown.parentElement.parentElement.parentElement.classList.remove(
    //                         "active",
    //                         "typing"
    //                       );
    //                     }
    //                   }
    //                 });

    //                 // Add a click event listener to dropdown list
    //                 dropdownList.addEventListener("click", function (e) {
    //                   e.stopPropagation();
    //                 });

    //                 // Uncheck all options on initial load
    //                 const uncheckAllMUIOptions = () => {
    //                   const multipleRegionSelect = document.querySelectorAll(
    //                     ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.multiple_region label input"
    //                   );

    //                   if (multipleRegionSelect.length > 0) {
    //                     const checkboxDropdown = document.querySelector(
    //                       "form#generic-lead-form .checkbox-dropdown"
    //                     );
    //                     const uncheckedCheckboxes =
    //                       checkboxDropdown.querySelectorAll(
    //                         'input[type="checkbox"]:not(:checked)'
    //                       );

    //                     // Sync unchecked checkboxes with MUI checkboxes
    //                     uncheckedCheckboxes.forEach((checkbox) => {
    //                       const option = Array.from(multipleRegionSelect).find(
    //                         (opt) => opt.getAttribute("name") === checkbox.value
    //                       );
    //                       if (option && option.checked) {
    //                         option.closest("label").click();
    //                       }
    //                     });
    //                   }
    //                 };

    //                 // Example usage: You can call this function wherever you want to uncheck all MUI checkboxes
    //                 uncheckAllMUIOptions();

    //                 // Add a change event listener to the checkbox dropdown
    //                 checkboxDropdown.addEventListener(
    //                   "change",
    //                   function (event) {
    //                     setTimeout(function () {
    //                       const checkedCheckboxes =
    //                         checkboxDropdown.querySelectorAll(
    //                           'input[type="checkbox"]:checked'
    //                         );
    //                       const uncheckedCheckboxes =
    //                         checkboxDropdown.querySelectorAll(
    //                           'input[type="checkbox"]:not(:checked)'
    //                         );

    //                       // Sync checked checkboxes with MUI checkboxes
    //                       checkedCheckboxes.forEach((checkbox) => {
    //                         const option = Array.from(
    //                           multipleRegionSelect
    //                         ).find(
    //                           (opt) =>
    //                             opt.getAttribute("name") === checkbox.value
    //                         );
    //                         if (option && !option.checked) {
    //                           option.closest("label").click();
    //                         }
    //                       });

    //                       // Sync unchecked checkboxes with MUI checkboxes
    //                       uncheckedCheckboxes.forEach((checkbox) => {
    //                         const option = Array.from(
    //                           multipleRegionSelect
    //                         ).find(
    //                           (opt) =>
    //                             opt.getAttribute("name") === checkbox.value
    //                         );
    //                         if (option && option.checked) {
    //                           option.closest("label").click();
    //                         }
    //                       });

    //                       // Update optionsSelected text
    //                       var selectedOptionsText = Array.from(
    //                         checkedCheckboxes
    //                       )
    //                         .map((opt) =>
    //                           opt.closest("label").textContent.trim()
    //                         )
    //                         .join(", ");

    //                       // Reference the paragraph element and update its content
    //                       const optionsSelectedParagraph =
    //                         document.querySelector(
    //                           "form#generic-lead-form .optionsSelected"
    //                         );
    //                       if (optionsSelectedParagraph) {
    //                         optionsSelectedParagraph.value =
    //                           selectedOptionsText;
    //                       }
    //                     }, 100);
    //                   }
    //                 );

    //                 fieldsStatesLogic(
    //                   document.querySelector(
    //                     "form#generic-lead-form .optionsSelected"
    //                   )
    //                 );
    //               }

    //               // Back Button logic
    //               document
    //                 .querySelector(
    //                   ".spz_t14002 .formPopup form#generic-lead-form .stepCTAWrapper > div:first-child button"
    //                 )
    //                 .addEventListener("click", function () {
    //                   bothFormsInitialSetup();
    //                   setTimeout(() => {
    //                     Step1Changes();
    //                   }, 500);
    //                 });

    //               // Submit CTA fields focus logic
    //               document
    //                 .querySelector(
    //                   ".spz_t14002 .formPopup form#generic-lead-form .stepCTAWrapper button[type=submit]"
    //                 )
    //                 .removeAttribute("disabled");
    //               document
    //                 .querySelector(
    //                   '.spz_t14002 .formPopup form#generic-lead-form .stepCTAWrapper button[type="submit"]'
    //                 )
    //                 .addEventListener("click", function (event) {
    //                   var checkfields = document.querySelectorAll(
    //                     "form#generic-lead-form .form-field.company input, form#generic-lead-form .form-field.industry input, form#generic-lead-form .form-field.industry select, form#generic-lead-form .form-field.fleet-size input, form#generic-lead-form .form-field.fleet-size select, form#generic-lead-form .form-field.country input, form#generic-lead-form .form-field.country select, form#generic-lead-form .form-field.city input, form#generic-lead-form .form-field.city select, form#generic-lead-form .form-field.state input, form#generic-lead-form .form-field.state select, form#generic-lead-form .form-field.subIndustry input, form#generic-lead-form .form-field.subIndustry select"
    //                   );
    //                   var allFieldsFilled = 0;
    //                   var emptyFields = [];

    //                   checkfields.forEach((checkfield) => {
    //                     if (checkfield.value === "") {
    //                       emptyFields.push(checkfield);
    //                     } else {
    //                       allFieldsFilled += 1;
    //                     }
    //                   });

    //                   if (
    //                     allFieldsFilled === checkfields.length &&
    //                     !document.querySelector(
    //                       ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field p.MuiFormHelperText-root"
    //                     )
    //                   ) {
    //                   } else {
    //                     event.preventDefault();
    //                     // Focus on the first empty field
    //                     if (emptyFields.length > 0) {
    //                       if (
    //                         emptyFields[0].getAttribute("name") == "industry" ||
    //                         emptyFields[0].getAttribute("name") ==
    //                           "fleet_size" ||
    //                         emptyFields[0].getAttribute("name") == "country" ||
    //                         emptyFields[0].getAttribute("name") ==
    //                           "Sub_Industry__c" ||
    //                         (emptyFields[0].getAttribute("name") == "state" &&
    //                           window.outerWidth >= 961)
    //                       ) {
    //                         emptyFields[0].parentElement.parentElement.parentElement.parentElement.classList.add(
    //                           "active",
    //                           "typing"
    //                         );
    //                       }
    //                       emptyFields[0].focus();
    //                       emptyFields[0]
    //                         .closest(".form-field")
    //                         .classList.add("error");
    //                     }
    //                     if (
    //                       document.querySelector(
    //                         ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field p.MuiFormHelperText-root"
    //                       )
    //                     ) {
    //                       setTimeout(function () {
    //                         document
    //                           .querySelector(
    //                             ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.multiple_region"
    //                           )
    //                           .classList.add("active", "typing");
    //                       }, 100);
    //                     }
    //                   }
    //                 });

    //               if (
    //                 !document.querySelector(
    //                   "form#generic-lead-form .stepCTAWrapper > div:first-child button.back"
    //                 )
    //               ) {
    //                 document
    //                   .querySelector(
    //                     "form#generic-lead-form .stepCTAWrapper > div:first-child button"
    //                   )
    //                   .removeAttribute("disabled");
    //                 document
    //                   .querySelector(
    //                     "form#generic-lead-form .stepCTAWrapper > div:first-child button"
    //                   )
    //                   .classList.add("back");
    //                 document.querySelector(
    //                   "form#generic-lead-form .stepCTAWrapper > div:first-child button"
    //                 ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M11.4721 5L16.3332 10M16.3332 10L11.4721 15M16.3332 10L4.6665 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> Back`;
    //               }

    //               if (!document.querySelector(".secondfieldsWrapper .tags")) {
    //                 if (
    //                   document.querySelector(
    //                     ".spz_t14002 .formPopup form#generic-lead-form .secondfieldsWrapper h2"
    //                   )
    //                 ) {
    //                   document
    //                     .querySelector(
    //                       ".spz_t14002 .formPopup form#generic-lead-form .secondfieldsWrapper h2"
    //                     )
    //                     .insertAdjacentHTML(
    //                       "afterend",
    //                       `
    //                                                 <div class="tags">
    //                                                     <div class="tag">Advanced tracking</div>
    //                                                     <div class="tag">Fleet dash cams</div>
    //                                                     <div class="tag">ELD compliance</div>
    //                                                 </div>
    //                                             `
    //                     );
    //                 }
    //               }
    //             }
    //           });
    //         }
    //         setTimeout(() => {
    //           Step2Changes();
    //         }, 500);

    //         // General Global Code Below
    //         function fieldsStatesLogic(element) {
    //           var inputWrapper = element.closest(".form-field");

    //           if (inputWrapper) {
    //             // Add click event listener
    //             element.addEventListener("focus", function () {
    //               inputWrapper.classList.add("active");
    //               inputWrapper.classList.add("typing");
    //             });
    //             element.addEventListener("change", function () {
    //               inputWrapper.classList.add("active");
    //               inputWrapper.classList.add("typing");
    //             });
    //             element.addEventListener("input", function () {
    //               inputWrapper.classList.remove("error");
    //               if (element.getAttribute("id") === "email") {
    //                 var email = element.value.trim();

    //                 if (!isValidEmail(email)) {
    //                   element
    //                     .closest(".form-field")
    //                     .classList.add("error", "typing");
    //                 }
    //               }
    //               if (
    //                 document.querySelector(
    //                   '.spz_t14002 .formPopup form#generic-lead-form .stepCTAWrapper button[type="button"]:first-child'
    //                 )
    //               ) {
    //                 document
    //                   .querySelector(
    //                     '.spz_t14002 .formPopup form#generic-lead-form .stepCTAWrapper button[type="button"]:first-child'
    //                   )
    //                   .removeAttribute("disabled");
    //               }
    //             });

    //             // Add blur event listener
    //             element.addEventListener("blur", function () {
    //               inputWrapper.classList.remove("typing");
    //               if (element.id == "How_Did_You_Hear_About_Geotab__select") {
    //                 changeHowDidYouHearAboutOption();
    //               }
    //               if (element.value && element.value.trim() !== "") {
    //                 inputWrapper.classList.add("active");
    //               } else {
    //                 inputWrapper.classList.remove("active");
    //               }
    //               inputWrapper.classList.remove("error");

    //               if (
    //                 document.querySelector(
    //                   '.spz_t14002 .formPopup form#generic-lead-form .stepCTAWrapper button[type="button"]:first-child'
    //                 )
    //               ) {
    //                 document
    //                   .querySelector(
    //                     '.spz_t14002 .formPopup form#generic-lead-form .stepCTAWrapper button[type="button"]:first-child'
    //                   )
    //                   .removeAttribute("disabled");
    //               }
    //             });

    //             if (element.getAttribute("aria-haspopup") == "listbox") {
    //               element.addEventListener("click", function () {
    //                 inputWrapper.parentElement.classList.add("active");
    //               });
    //               element = element.nextElementSibling;
    //             }
    //             // Add check for existing value on page load
    //             if (element.value && element.value.trim() !== "") {
    //               inputWrapper.classList.add("active");
    //             }
    //           }
    //         }
    //         function isValidEmail(email) {
    //           // Regular expression pattern for basic email validation
    //           var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //           // Check if the provided email matches the pattern
    //           return pattern.test(email);
    //         }
    //         function observeElementChanges(selector, changeType, callback) {
    //           var targetElement = document.querySelector(selector);
    //           var observer = new MutationObserver(function (mutations) {
    //             mutations.forEach(function (mutation) {
    //               callback(mutation);
    //             });
    //           });

    //           var config = {
    //             childList: true,
    //             subtree: true,
    //             characterData: true,
    //           };

    //           observer.observe(targetElement, config);
    //         }
    //         function setNativeValue(element, value) {
    //           const valueSetter = Object.getOwnPropertyDescriptor(
    //             element,
    //             "value"
    //           ).set;
    //           const prototype = Object.getPrototypeOf(element);
    //           const prototypeValueSetter = Object.getOwnPropertyDescriptor(
    //             prototype,
    //             "value"
    //           ).set;
    //           if (valueSetter && valueSetter !== prototypeValueSetter) {
    //             prototypeValueSetter.call(element, value);
    //           } else {
    //             valueSetter.call(element, value);
    //           }
    //         }
    //         function handleDesktopSelectClasses(targetElements) {
    //           targetElements.forEach(function (targetElement) {
    //             var observer = new MutationObserver(function (mutations) {
    //               mutations.forEach(function (mutation) {
    //                 if (mutation.attributeName === "aria-expanded") {
    //                   var newValue =
    //                     targetElement.getAttribute("aria-expanded");

    //                   if (
    //                     targetElement.getAttribute("aria-expanded") == "true"
    //                   ) {
    //                     targetElement.parentElement.parentElement.parentElement.parentElement.classList.add(
    //                       "active",
    //                       "typing"
    //                     );
    //                   } else {
    //                     if (targetElement.nextElementSibling.value == "") {
    //                       targetElement.parentElement.parentElement.parentElement.parentElement.classList.remove(
    //                         "active",
    //                         "typing"
    //                       );
    //                     } else {
    //                       targetElement.parentElement.parentElement.parentElement.parentElement.classList.remove(
    //                         "typing"
    //                       );
    //                     }
    //                   }

    //                   if (
    //                     targetElement.getAttribute("id") == "title" &&
    //                     targetElement.innerText != ""
    //                   ) {
    //                     var othersFilled = true;
    //                     document
    //                       .querySelectorAll(
    //                         ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.first-name input, .spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.last-name input, .spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.email input, .spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.title input"
    //                       )
    //                       .forEach((visible) => {
    //                         if (visible.value == "") {
    //                           othersFilled = false;
    //                         }
    //                       });
    //                     if (othersFilled) {
    //                       document
    //                         .querySelectorAll(
    //                           ".spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.phone-number, .spz_t14002 .formPopup form#generic-lead-form .fieldsWrapper .form-field.self-attribution"
    //                         )
    //                         .forEach((hidden) => {
    //                           hidden.classList.remove("hiddenField");
    //                         });
    //                     }
    //                   }
    //                 }
    //               });
    //             });
    //             var config = {
    //               attributes: true,
    //               attributeFilter: ["aria-expanded"],
    //             };
    //             observer.observe(targetElement, config);
    //           });
    //         }
    //         const form = document.querySelector(
    //           ".spz_t14002 .formPopup form#generic-lead-form"
    //         );
    //         if (form) {
    //           form.addEventListener("submit", (e) => {
    //             console.log("Form is actually submitting");
    //             // Push data to the dataLayer
    //             window.dataLayer = window.dataLayer || [];
    //             dataLayer.push({
    //               event: "custom_form_submit",
    //               form_name: "demo_form",
    //             });
    //           });
    //         }

    //         function controlDesktopDropdownActiveStates() {
    //           if (window.outerWidth >= 961) {
    //             var inputsToCheck = document.querySelectorAll(
    //               'form#generic-lead-form .fieldsWrapper .form-field.selectField input.MuiSelect-nativeInput:not([name="multiple_region_select__c"])'
    //             );

    //             inputsToCheck = Array.from(inputsToCheck);

    //             function clickEventListener(event) {
    //               if (
    //                 !event.target.classList.contains("spz_t14002") &&
    //                 !event.target.closest("button") &&
    //                 !event.target.closest(
    //                   '.stepCTAWrapper button[type="submit"]'
    //                 )
    //               ) {
    //                 inputsToCheck.forEach(function (input) {
    //                   if (
    //                     input &&
    //                     input.value.trim() === "" &&
    //                     input.parentElement.parentElement.parentElement
    //                       .parentElement
    //                   ) {
    //                     input.parentElement.parentElement.parentElement.parentElement.classList.remove(
    //                       "active",
    //                       "typing",
    //                       "error"
    //                     );
    //                   }
    //                 });
    //               }
    //             }
    //             document.body.removeEventListener("click", clickEventListener);
    //             document.body.addEventListener("click", clickEventListener);
    //           }
    //         }
    //         function adjustDesktopAutofillValues() {
    //           if (window.outerWidth >= 961) {
    //             document
    //               .querySelectorAll(
    //                 '.spz_t14002 .formPopup form#generic-lead-form .form-field div[aria-haspopup="listbox"] + input'
    //               )
    //               .forEach((desktopField) => {
    //                 let previousValue = desktopField.value;

    //                 desktopField.addEventListener("change", function () {
    //                   if (desktopField.value !== previousValue) {
    //                     desktopField.parentElement.parentElement.parentElement.parentElement.classList.remove(
    //                       "typing",
    //                       "error"
    //                     );
    //                     desktopField.parentElement.parentElement.parentElement.parentElement.classList.add(
    //                       "active"
    //                     );
    //                   }

    //                   // Update the previous value after each change
    //                   previousValue = desktopField.value;
    //                 });
    //               });
    //           }
    //         }

    //         window.addEventListener("pageshow", function (event) {
    //           if (event.persisted) {
    //             window.location.reload();
    //           }
    //         });
    //       }
    //     }
    //   });
    // }
  }
})();
