(function () {
  const dataTemplate = {
    COPY: {
      dashCams: `
        <div class="copySectionContainer dashCams">
          <h1>Boost safety and accountability with fleet dash cams</h1>
          <ul class="checklists">
            <li class="checklist">
              <span>HD footage.</span> Capture clear HD footage inside and outside the
              vehicle. Low light and night vision. Automatically upload to a secure
              cloud.
            </li>
            <li class="checklist">
              <span>Driver safety.</span> Send drivers in-cab alerts for risky
              behaviors, like harsh braking or lane departures. Automate personalized
              coaching.
            </li>
            <li class="checklist">
              <span>Event capture.</span> Auto-record events, like speeding, collisions,
              sudden stops, and seatbelt violations. Search clips. Exonerate drivers not
              at fault.
            </li>
          </ul>
        </div>
      `,
      eld: `
      <div class="copySectionContainer">
        <h1>Streamline ELD compliance</h1>
        <ul class="checklists">
          <li class="checklist">
            <span>HOS reporting.</span> Auto-record driving hours & rest periods.
            Track HOS status. 100+ rulesets & exemptions for the U.S. & Canada.
          </li>
          <li class="checklist">
            <span>Log management.</span> Track unassigned logs. Send drivers alerts
            when they are near hour limits. Reminders to verify logs.
          </li>
          <li class="checklist">
            <span>Vehicle inspections.</span> Let drivers fill out DVIRs via app. Get
            notifications for vehicle defects and missed inspections.
          </li>
        </ul>
      </div>
      `,
      fleetManagement: `
        <div class="copySectionContainer">
          <h1>Track, manage, and optimize your entire fleet</h1>
          <ul class="checklists">
            <li class="checklist">
              <span>Fleet tracking software.</span> Track vehicles, fuel consumption,
              and engine health. Auto-log hours and generate ELD reports. Self-serve
              DVIRs. One platform.
            </li>
            <li class="checklist">
              <span>Driver safety.</span> Monitor driver behavior, including hard
              acceleration, braking, seatbelts, and idling. Send drivers instant alerts
              and coaching.
            </li>
            <li class="checklist">
              <span>Fleet insights.</span> Get AI recommendations based on data from 3
              million assets. Improve fuel efficiency, reduce downtime, cut costs, and
              more.
            </li>
          </ul>
        </div>
      `,
      siteWide: `
        <div class="copySectionContainer">
          <h1>Boost fleet efficiency and safety, while reducing costs</h1>
          <ul class="checklists">
            <li class="checklist">
              <span>Vehicle telematics.</span> Track driver behavior, fuel consumption,
              engine health, etc. Optimize with AI recommendations.
            </li>
            <li class="checklist">
              <span>Route optimization.</span> Auto-detect the fastest routes and
              dispatch drivers based on location. Plan multiple stops. Instant
              rerouting.
            </li>
            <li class="checklist">
              <span>Asset tracking.</span> Monitor asset locations in real time.
              Trailers, containers, generators, and more. Get maintenance reminders.
            </li>
          </ul>
        </div>
      `,
      softwarePackage: `
        <div class="copySectionContainer softwarePackage">
          <h1>Boost fleet efficiency and safety with next-gen telematics</h1>
          <ul class="checklists">
            <li class="checklist">
              <span>Vehicle telematics.</span> Track location, driver behavior, engine
              health, fuel consumption, etc. Optimize with AI fleet insights.
            </li>
            <li class="checklist">
              <span>Driver safety.</span> Detect risky driver behavior. Send in-cab
              alerts for idling, harsh breaking, seatbelt use, etc. Real-time coaching.
            </li>
            <li class="checklist">
              <span>Plug-and-play device.</span> Just plug the GO device into your
              OBD-II port. No professional installation needed.
            </li>
          </ul>
        </div>
      `,
      vehicleTracking: `
        <div class="copySectionContainer vehicleTracking">
          <h1>
            Track advanced <br />
            telematics in real-time
          </h1>
          <ul class="checklists">
            <li class="checklist">
              <span>Telematics.</span> Track vehicle locations, speed, idling, and
              mileage. Monitor vehicle health and prevent breakdowns.
            </li>
            <li class="checklist">
              <span>Safety.</span> Monitor hard acceleration, braking, seatbelts, and
              idling. Send alerts to drivers and fleet managers.
            </li>
            <li class="checklist">
              <span>Easy to Install.</span> Just plug into the ODB II port.
              Automatically sends data to fleet managers. Over-the-air updates.
            </li>
          </ul>
        </div>
      `,
    },

    TAGS: {
      dashCams: `
        <div class="tags">
          <div class="tag">HD footage</div>
          <div class="tag">Safety alerts</div>
          <div class="tag">In-vehicle coaching</div>
        </div>
      `,
      eld: `
        <div class="tags">
          <div class="tag">HOS reporting</div>
          <div class="tag">Log reminders</div>
          <div class="tag">Self-serve inspections</div>
        </div>
      `,
      fleetManagement: `
        <div class="tags">
          <div class="tag">Vehicle telematics</div>
          <div class="tag">Safety alerts</div>
          <div class="tag">Engine data reporting</div>
        </div>
      `,
      siteWide: `
        <div class="tags">
          <div class="tag">Advanced tracking</div>
          <div class="tag">Fleet dash cams</div>
          <div class="tag">ELD compliance</div>
        </div>
      `,
      softwarePackage: `
        <div class="tags">
          <div class="tag">GPS tracking</div>
          <div class="tag">Driver safety</div>
          <div class="tag">Fleet optimization</div>
        </div>
      `,
      vehicleTracking: `
        <div class="tags vehicleTracking">
          <div class="tag">Route optimization</div>
          <div class="tag">Maintenance alerts</div>
          <div class="tag">Fuel insights</div>
        </div>
      `,
    },
  };

  function getTags() {
    if (
      window.location.pathname ===
        "/fleet-management-solutions/fleet-dash-cams/" ||
      window.location.pathname ===
        "//fleet-management-solutions/fleet-dash-cams/"
    ) {
      return dataTemplate.TAGS.dashCams;
    } else if (
      window.location.pathname === "/fleet-management-solutions/eld/"
    ) {
      return dataTemplate.TAGS.eld;
    } else if (window.location.pathname === "/fleet-management-solutions/") {
      return dataTemplate.TAGS.fleetManagement;
    } else if (
      window.location.pathname === "/software-packages/" ||
      window.location.pathname === "//software-packages/"
    ) {
      return dataTemplate.TAGS.softwarePackage;
    } else if (window.location.pathname === "/vehicle-tracking-device/") {
      return dataTemplate.TAGS.vehicleTracking;
    } else {
      return dataTemplate.TAGS.siteWide;
    }
  }

  function getCopy() {
    if (
      window.location.pathname ===
        "/fleet-management-solutions/fleet-dash-cams/" ||
      window.location.pathname ===
        "//fleet-management-solutions/fleet-dash-cams/"
    ) {
      return dataTemplate.COPY.dashCams;
    } else if (
      window.location.pathname === "/fleet-management-solutions/eld/"
    ) {
      return dataTemplate.COPY.eld;
    } else if (window.location.pathname === "/fleet-management-solutions/") {
      return dataTemplate.COPY.fleetManagement;
    } else if (
      window.location.pathname === "/software-packages/" ||
      window.location.pathname === "//software-packages/"
    ) {
      return dataTemplate.COPY.softwarePackage;
    } else if (window.location.pathname === "/vehicle-tracking-device/") {
      return dataTemplate.COPY.vehicleTracking;
    } else {
      return dataTemplate.COPY.siteWide;
    }
  }

  if (window.location.pathname === "/request-demo/") {
    /*Variation 1*/
    (function () {
      var testID = "2027RD_V1",
        testClass = "spz_t" + testID;

      var initialElementInterval = setInterval(function () {
        if (
          document.querySelector("body") &&
          (document.querySelector("#NavigationBar") ||
            document.querySelector("#MobileNavigationBar"))
        ) {
          clearInterval(initialElementInterval);
          if (
            !document.body.classList.contains(testClass) &&
            window.location.pathname === "/request-demo/"
          ) {
            document.body.classList.add(testClass);
            initVarRequestDemo();
            var bodyClassInterval = setInterval(function () {
              if (
                !document.querySelector(".formLeftContent") &&
                window.location.pathname === "/request-demo/"
              ) {
                clearInterval(bodyClassInterval);
                initVarRequestDemo();
              }
            });

            setTimeout(function () {
              clearInterval(bodyClassInterval);
            }, 10000);
          }
        }
      });

      function initVarRequestDemo() {
        // For Navigation CTA
        var elementInterval = setInterval(function () {
          if (
            document.querySelectorAll("#root").length > 0 &&
            document.querySelectorAll('button[data-testid="submitButton"]')
              .length > 0 &&
            !document.querySelector(".logo")
          ) {
            clearInterval(elementInterval);
            // Reload the page from desktop to tablet
            let screenType = getScreenType();

            window.addEventListener("resize", function () {
              setTimeout(function () {
                checkScreenSize();
              }, 1000);
            });

            function getScreenType() {
              const width = window.innerWidth;
              if (width <= 767.98) return "mobile";
              if (width < 960) return "tablet";
              return "desktop";
            }

            function checkScreenSize() {
              const newScreenType = getScreenType();
              console.log("newScreenType", newScreenType);
              console.log("screenType", screenType);
              if (newScreenType !== screenType) {
                screenType = newScreenType;
                window.location.reload();
              }
            }

            if (!document.querySelector(".formLeftContent")) {
              document
                .querySelector('div[data-testid="callToActionBanner"]')
                .classList.add("bannerSection");
              document
                .querySelector('div[data-testid="customFormBackground"]')
                .parentElement.parentElement.parentElement.classList.add(
                  "formSection"
                );
              document
                .querySelector('div[data-testid="customFormBackground"]')
                .parentElement.parentElement.previousElementSibling.classList.add(
                  "formSectionOldContent"
                );
              document
                .querySelector('div[data-testid="customFormBackground"]')
                .parentElement.parentElement.classList.add("formWrapper");
              document
                .querySelector('div[data-testid="customFormBackground"]')
                .parentElement.classList.add("formWrapperContainer");
              document
                .querySelector('div[data-testid="callToActionBanner"]')
                .parentElement.parentElement.parentElement.classList.add(
                  "mainSection"
                );

              // Wrapping form and content in a container
              const parentElement = document.querySelector(
                ".spz_t2027RD_V1 .formSection"
              );
              const newDiv = document.createElement("div");
              newDiv.className = "customContainer";
              while (parentElement.firstChild) {
                newDiv.appendChild(parentElement.firstChild);
              }
              parentElement.appendChild(newDiv);

              formMagic();
            }
          }
        });
      }

      function addLogoToTheForm() {
        if (window.innerWidth >= 768) {
          if (
            document.querySelector(".spz_t2027RD_V1 .mainSection") &&
            !document.querySelector(".geotabLogo")
          ) {
            document
              .querySelector(".spz_t2027RD_V1 .mainSection")
              .insertAdjacentHTML(
                "afterbegin",
                `
	              <section class="geotabLogo">
	                <a class="logo" href="https://www.geotab.com/">
	                  <svg xmlns="http://www.w3.org/2000/svg" width="152" height="20" viewBox="0 0 152 20" fill="none">
	                    <path d="M150.896 16.9659C150.898 17.5349 150.703 18.0871 150.344 18.5285C149.985 18.97 149.484 19.2733 148.926 19.387C148.368 19.5007 147.789 19.4177 147.285 19.1521C146.782 18.8865 146.386 18.4547 146.166 17.9303C145.945 17.4058 145.912 16.821 146.074 16.2754C146.236 15.7298 146.582 15.2571 147.053 14.9377C147.524 14.6183 148.091 14.472 148.657 14.5236C149.224 14.5752 149.755 14.8215 150.161 15.2207C150.397 15.4456 150.584 15.7166 150.71 16.0168C150.836 16.3171 150.9 16.6401 150.896 16.9659ZM150.561 16.9659C150.559 16.6918 150.503 16.4208 150.396 16.1686C150.289 15.9164 150.132 15.6878 149.936 15.4962C149.543 15.0971 149.006 14.8706 148.446 14.8664C147.885 14.8623 147.345 15.0809 146.946 15.4742L146.924 15.4962C146.524 15.8983 146.299 16.4426 146.299 17.01C146.299 17.5773 146.524 18.1216 146.924 18.5237C147.318 18.9229 147.854 19.1494 148.415 19.1535C148.975 19.1576 149.515 18.939 149.914 18.5457L149.936 18.5237C150.141 18.3235 150.303 18.0831 150.41 17.8175C150.518 17.5519 150.569 17.267 150.561 16.9806V16.9659ZM150.014 18.2334H149.374L148.434 17.223H147.975V18.2334H147.493V15.6175H148.382C148.528 15.6084 148.674 15.6084 148.82 15.6175C148.939 15.6337 149.055 15.671 149.161 15.7277C149.268 15.7825 149.358 15.865 149.422 15.9665C149.481 16.0731 149.509 16.194 149.503 16.3156C149.508 16.4834 149.45 16.6471 149.341 16.7748C149.219 16.9063 149.066 17.006 148.897 17.065L150.014 18.2334ZM149.011 16.3706C149.013 16.3072 149.001 16.2441 148.974 16.1865C148.945 16.1297 148.898 16.0834 148.842 16.0542C148.784 16.024 148.722 16.0041 148.657 15.9957H147.981V16.8774H148.349C148.45 16.888 148.552 16.888 148.654 16.8774C148.729 16.8646 148.801 16.8344 148.863 16.7892C148.917 16.7491 148.96 16.696 148.988 16.6349C149.021 16.547 149.031 16.4522 149.017 16.3593L149.011 16.3706Z" fill="white"></path>
	                    <path d="M28.082 19.4278H46.6551V17.5283H31.4371V10.6348H46.0252V8.73032H31.4371V2.45668H46.6551V0.552246H28.082V19.4278Z" fill="white"></path>
	                    <path d="M71.6431 1.92595C70.2892 0.88946 66.8424 0.36377 61.4242 0.36377C56.7375 0.36377 53.4891 0.825025 51.7706 1.73507C50.0521 2.64511 49.1571 4.38829 49.1571 6.89281L49.1152 8.67574V9.99247C49.1152 14.3047 49.7922 17.0026 51.1188 18.0639C52.4454 19.1253 55.9222 19.6361 61.4245 19.6361C66.9269 19.6361 70.4383 19.0905 71.7302 18.049C73.0222 17.0075 73.7338 14.203 73.7338 9.74695C73.7062 5.60586 72.9921 2.97239 71.6431 1.92595ZM70.4875 9.98251C70.4875 13.8235 70.1081 16.0975 69.3518 16.7422C68.5955 17.3869 65.9174 17.7192 61.3895 17.7192C56.8615 17.7192 54.1983 17.3894 53.4544 16.7422C52.7105 16.095 52.3186 13.8236 52.3186 9.9826C52.3186 6.14159 52.7104 3.88218 53.4642 3.23783C54.218 2.59348 56.8936 2.26084 61.3993 2.26084C65.3246 2.26084 67.8465 2.54101 68.9103 3.09155C69.9741 3.6421 70.4875 4.95615 70.4875 6.98737V9.98251Z" fill="white"></path>
	                    <path d="M97.0181 0.552246H75.0156V2.63517H84.3791V19.4278H87.7391V2.63517H97.0181V0.552246Z" fill="white"></path>
	                    <path d="M108.876 0.552246H104.261L93.6729 19.4278H97.2391L99.4482 15.4603H113.932L116.164 19.4278H119.67L108.891 0.599359L108.876 0.552246ZM100.445 13.7468L106.644 2.45919L112.923 13.7419L100.445 13.7468Z" fill="white"></path>
	                    <path d="M140.44 9.53133C142.793 8.95601 143.991 7.62446 143.991 5.56379C143.991 3.50312 143.441 2.14672 142.332 1.50948C141.224 0.872246 138.908 0.552246 135.389 0.552246H122.611V19.4278H136.745C139.721 19.4278 141.834 19.0162 143.039 18.2102C144.244 17.4043 144.861 15.9785 144.861 13.9699C144.876 11.5349 143.384 10.0418 140.44 9.53133ZM125.976 2.45668H135.325C137.618 2.45668 139.121 2.64262 139.788 3.00714C140.455 3.37166 140.78 4.17509 140.78 5.40999C140.78 6.83827 140.401 7.76823 139.644 8.17484C138.888 8.58145 137.14 8.79969 134.437 8.79969H125.976V2.45668ZM140.549 16.8936C139.805 17.3052 138.176 17.5086 135.726 17.5086H125.976V10.7042H134.266C137.665 10.7042 139.773 10.8952 140.534 11.2696C141.296 11.644 141.66 12.6558 141.66 14.3047C141.665 15.6189 141.291 16.4918 140.549 16.8936Z" fill="white"></path>
	                    <path d="M12.4936 9.9826V11.8845H21.7977V12.9756V13.045C21.7977 15.1428 21.3811 16.4593 20.595 16.9505C19.8089 17.4418 17.6367 17.7121 14.1949 17.7121C9.68675 17.7121 6.88943 17.4418 5.85805 16.9061C4.82667 16.3705 4.32809 14.9396 4.32809 12.6162V9.93841L4.36031 7.43632C4.36031 5.1426 4.8265 3.68946 5.74148 3.11917C6.65646 2.54887 9.02223 2.25097 12.7591 2.25097C16.7663 2.25097 19.313 2.43197 20.2702 2.79155C21.2273 3.15113 21.6317 4.10318 21.6317 5.60586V6.10185H24.9098V5.34034C24.9098 3.24745 24.1833 1.86871 22.7475 1.26862C21.3117 0.668539 18.1575 0.36377 13.2898 0.36377C8.42207 0.36377 5.15638 0.827452 3.54951 1.74494C1.94265 2.66243 1.10449 4.54954 1.10449 7.33423V11.7605C1.10449 15.0759 1.84843 17.2384 3.29905 18.1904C4.74968 19.1423 8.04023 19.6286 13.0939 19.6286C18.4427 19.6286 21.7977 19.2219 23.0698 18.4161C24.342 17.6102 24.9123 15.7331 24.9916 12.7127V9.98469L12.4936 9.9826Z" fill="white"></path>
	                  </svg>
	                </a>
	               </section>
	              `
              );
          }
        } else {
          if (
            document.querySelector(
              ".spz_t2027RD_V1 .formSection .formWrapper .formWrapperContainer"
            ) &&
            !document.querySelector(".geotabLogo")
          ) {
            document
              .querySelector(
                ".spz_t2027RD_V1 .formSection .formWrapper .formWrapperContainer"
              )
              .insertAdjacentHTML(
                "afterbegin",
                `
	              <section class="geotabLogo">
	                <a class="logo" href="https://www.geotab.com/">
	                    <svg width="280" height="50" viewBox="0 0 280 50" fill="none" xmlns="http://www.w3.org/2000/svg">
	                    <path d="M262 1L230.489 41.3162C226.699 46.1658 220.887 49 214.731 49L65.2685 49C59.1134 49 53.3011 46.1658 49.5106 41.3162L18 0.99999" stroke="url(#paint0_linear_24995_9996)" stroke-opacity="0.12"></path>
	                    <g clip-path="url(#clip0_24995_9996)">
	                    <path d="M200.168 30.5725C200.169 31.0278 200.013 31.4696 199.726 31.8227C199.439 32.1758 199.038 32.4185 198.592 32.5094C198.146 32.6004 197.682 32.534 197.279 32.3215C196.877 32.109 196.56 31.7636 196.383 31.3441C196.207 30.9245 196.181 30.4567 196.31 30.0202C196.44 29.5837 196.716 29.2056 197.093 28.95C197.47 28.6945 197.923 28.5774 198.377 28.6187C198.83 28.66 199.255 28.857 199.58 29.1764C199.768 29.3563 199.918 29.5731 200.019 29.8133C200.12 30.0535 200.171 30.3119 200.168 30.5725ZM199.9 30.5725C199.898 30.3533 199.853 30.1365 199.767 29.9347C199.682 29.7329 199.557 29.5501 199.4 29.3968C199.085 29.0775 198.656 28.8963 198.207 28.893C197.759 28.8897 197.327 29.0646 197.008 29.3792L196.99 29.3968C196.67 29.7185 196.49 30.1539 196.49 30.6078C196.49 31.0617 196.67 31.4971 196.99 31.8188C197.305 32.1381 197.734 32.3194 198.183 32.3227C198.631 32.326 199.063 32.1511 199.382 31.8364L199.4 31.8188C199.564 31.6587 199.693 31.4663 199.779 31.2538C199.865 31.0414 199.906 30.8134 199.9 30.5843V30.5725ZM199.462 31.5866H198.95L198.198 30.7783H197.831V31.5866H197.445V29.4939H198.157C198.273 29.4866 198.39 29.4866 198.507 29.4939C198.602 29.5068 198.695 29.5367 198.78 29.582C198.865 29.6258 198.937 29.6918 198.989 29.7731C199.036 29.8583 199.058 29.955 199.053 30.0523C199.057 30.1866 199.011 30.3176 198.924 30.4197C198.826 30.5249 198.704 30.6046 198.568 30.6519L199.462 31.5866ZM198.659 30.0964C198.661 30.0456 198.651 29.9952 198.63 29.9491C198.607 29.9036 198.57 29.8666 198.524 29.8432C198.478 29.819 198.428 29.8031 198.377 29.7964H197.836V30.5018H198.13C198.211 30.5102 198.293 30.5102 198.374 30.5018C198.434 30.4915 198.492 30.4674 198.541 30.4312C198.584 30.3991 198.619 30.3567 198.641 30.3078C198.668 30.2375 198.676 30.1616 198.665 30.0873L198.659 30.0964Z" fill="#25477B"></path>
	                    <path d="M101.916 32.5423H116.774V31.0227H104.6V25.5079H116.271V23.9844H104.6V18.9654H116.774V17.4419H101.916V32.5423Z" fill="#25477B"></path>
	                    <path d="M136.765 18.5408C135.682 17.7116 132.924 17.291 128.59 17.291C124.84 17.291 122.242 17.66 120.867 18.3881C119.492 19.1161 118.776 20.5106 118.776 22.5142L118.743 23.9406V24.994C118.743 28.4438 119.284 30.6021 120.346 31.4512C121.407 32.3002 124.188 32.7089 128.59 32.7089C132.992 32.7089 135.801 32.2724 136.835 31.4392C137.868 30.606 138.438 28.3624 138.438 24.7976C138.415 21.4847 137.844 19.3779 136.765 18.5408ZM135.841 24.986C135.841 28.0588 135.537 29.878 134.932 30.3937C134.327 30.9095 132.184 31.1753 128.562 31.1753C124.94 31.1753 122.809 30.9115 122.214 30.3937C121.619 29.876 121.305 28.0589 121.305 24.9861C121.305 21.9133 121.619 20.1057 122.222 19.5903C122.825 19.0748 124.965 18.8087 128.57 18.8087C131.71 18.8087 133.728 19.0328 134.579 19.4732C135.43 19.9137 135.841 20.9649 135.841 22.5899V24.986Z" fill="#25477B"></path>
	                    <path d="M157.065 17.4419H139.463V19.1082H146.954V32.5423H149.642V19.1082H157.065V17.4419Z" fill="#25477B"></path>
	                    <path d="M166.551 17.4419H162.859L154.389 32.5423H157.242L159.009 29.3683H170.596L172.382 32.5423H175.187L166.563 17.4796L166.551 17.4419ZM159.806 27.9975L164.766 18.9675L169.789 27.9936L159.806 27.9975Z" fill="#25477B"></path>
	                    <path d="M191.803 24.6252C193.685 24.1649 194.643 23.0997 194.643 21.4511C194.643 19.8026 194.203 18.7175 193.316 18.2077C192.43 17.6979 190.577 17.4419 187.762 17.4419H177.54V32.5423H188.847C191.227 32.5423 192.917 32.213 193.881 31.5683C194.846 30.9235 195.34 29.7829 195.34 28.176C195.352 26.228 194.157 25.0335 191.803 24.6252ZM180.231 18.9654H187.71C189.545 18.9654 190.747 19.1142 191.281 19.4058C191.815 19.6974 192.074 20.3402 192.074 21.3281C192.074 22.4707 191.771 23.2147 191.166 23.54C190.561 23.8653 189.162 24.0399 187 24.0399H180.231V18.9654ZM191.89 30.515C191.295 30.8443 189.992 31.0069 188.032 31.0069H180.231V25.5635H186.863C189.583 25.5635 191.269 25.7162 191.878 26.0158C192.487 26.3153 192.779 27.1247 192.779 28.4439C192.783 29.4952 192.483 30.1936 191.89 30.515Z" fill="#25477B"></path>
	                    <path d="M89.4463 24.9861V26.5076H96.8895V27.3805V27.436C96.8895 29.1143 96.5563 30.1674 95.9274 30.5604C95.2985 30.9535 93.5607 31.1696 90.8073 31.1696C87.2008 31.1696 84.9629 30.9534 84.1378 30.5249C83.3127 30.0964 82.9138 28.9517 82.9138 27.093V24.9507L82.9396 22.9491C82.9396 21.1141 83.3126 19.9516 84.0446 19.4953C84.7765 19.0391 86.6692 18.8008 89.6587 18.8008C92.8644 18.8008 94.9018 18.9456 95.6675 19.2332C96.4332 19.5209 96.7567 20.2825 96.7567 21.4847V21.8815H99.3792V21.2723C99.3792 19.598 98.798 18.495 97.6494 18.0149C96.5007 17.5348 93.9773 17.291 90.0832 17.291C86.189 17.291 83.5765 17.662 82.291 18.396C81.0055 19.1299 80.335 20.6396 80.335 22.8674V26.4084C80.335 29.0607 80.9301 30.7907 82.0906 31.5523C83.2511 32.3139 85.8835 32.7029 89.9265 32.7029C94.2055 32.7029 96.8895 32.3775 97.9072 31.7329C98.925 31.0882 99.3812 29.5864 99.4447 27.1702V24.9878L89.4463 24.9861Z" fill="#25477B"></path>
	                    </g>
	                    <defs>
	                    <linearGradient id="paint0_linear_24995_9996" x1="188.348" y1="49" x2="188.348" y2="1" gradientUnits="userSpaceOnUse">
	                    <stop stop-color="#041C3C"></stop>
	                    <stop offset="1" stop-color="#041C3C" stop-opacity="0"></stop>
	                    </linearGradient>
	                    <clipPath id="clip0_24995_9996">
	                    <rect width="120.502" height="16" fill="white" transform="translate(80 17)"></rect>
	                    </clipPath>
	                    </defs>
	                    </svg>
	                    </a>
	                </section>
	              `
              );
          }
        }
      }

      function formMagic() {
        var waitelement = setInterval(function () {
          if (
            document.querySelectorAll(".MuiInputBase-root .MuiInputBase-input")
              .length > 0 &&
            document.querySelector(
              '.formSection .formWrapper label[for="first_name"]'
            ) &&
            document.querySelectorAll('button[type="submit"]').length > 0
          ) {
            clearInterval(waitelement);

            addLogoToTheForm();

            if (!document.querySelector(".continueButton")) {
              function createSteps(activeStep) {
                const stepsContainer = document.querySelector(
                  " .firstfieldsWrapper h2"
                );

                const stepColors = [
                  "#00AEFF", // Active step color
                  "#EFF2F7", // Inactive step color
                ];

                const stepsHTML = Array.from(
                  { length: 2 },
                  (_, index) => `
						        <div class="step${index + 1 === activeStep ? " active" : ""}">
						            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
						                <circle cx="4" cy="4" r="4" fill="${
                              stepColors[index + 1 <= activeStep ? 0 : 1]
                            }"></circle>
						            </svg>
						        </div>
						    `
                ).join("");

                return `<div class="steps">${stepsHTML}</div>`;
              }

              document
                .querySelector(".spz_t2027RD_V1 .formSection .formWrapper h2")
                .parentElement.classList.add("headingWrapper");
              document.querySelector(
                ".spz_t2027RD_V1 .formSection .formWrapper h2"
              ).innerText = "Get a demo";

              if (!document.querySelector(".steps")) {
                document
                  .querySelector(".spz_t2027RD_V1 .formSection .headingWrapper")
                  .insertAdjacentHTML("beforebegin", createSteps(1));
              }

              if (!document.querySelector(".headingWrapper .tags")) {
                if (
                  document.querySelector(
                    ".spz_t2027RD_V1 .formSection .formWrapper .headingWrapper h2"
                  )
                ) {
                  document
                    .querySelector(
                      ".spz_t2027RD_V1 .formSection .formWrapper .headingWrapper h2"
                    )
                    .insertAdjacentHTML(
                      "afterend",
                      `
                                           ${getTags()}
                                      `
                    );
                }
              }

              // Adding inital classes in the elements
              document
                .querySelectorAll(
                  '.formSection .formWrapper div[data-testid="childContainer"] input.MuiOutlinedInput-input, .formSection .formWrapper div[data-testid="childContainer"] div[aria-haspopup="listbox"], .formSection .formWrapper .MuiNativeSelect-select'
                )
                .forEach(function (element) {
                  element.setAttribute("placeholder", "");
                  element.parentElement.classList.add("form-field__wrapper2");
                  element.parentElement.parentElement.classList.add(
                    "form-field__wrapper1"
                  );
                  var inputWrapper =
                    element.parentElement.parentElement.parentElement;
                  inputWrapper.classList.add("form-field");
                  inputWrapper.parentElement.classList.add("fieldsWrapper");
                  var elementId = inputWrapper
                    .querySelector("label")
                    .getAttribute("for");
                  inputWrapper.parentElement.classList.add(elementId);

                  if (element.getAttribute("aria-haspopup") == "listbox") {
                    inputWrapper.parentElement.classList.add("selectField");
                  }
                  if (element.classList.contains("MuiNativeSelect-select")) {
                    // element.querySelector('option:first-child').innerText = ""
                    element
                      .querySelector("option:first-child")
                      .insertAdjacentHTML(
                        "beforebegin",
                        `<option disabled></option>`
                      );
                    element.selectedIndex = 1;
                    element.setAttribute("placeholder", "");
                    element.value = "";
                    inputWrapper.parentElement.classList.add("selectField");
                  }
                });

              if (
                !document.querySelector(
                  ".How_Did_You_Hear_About_Geotab__select"
                )
              ) {
                document
                  .querySelector(
                    ".fieldsWrapper.How_Did_You_Hear_About_Geotab__c"
                  )
                  .insertAdjacentHTML(
                    "afterend",
                    `
							<div class=".MuiGrid-root MuiGridLegacy-item MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-12 fieldsWrapper How_Did_You_Hear_About_Geotab__select selectField form-field active">
							<div class="MuiFormControl-root MuiFormControl-fullWidth form-field">
							<label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined" data-shrink="false" for="How_Did_You_Hear_About_Geotab__c">How did you hear about us?</label>
								<div required class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl">
									<select required class="MuiInputBase-input MuiOutlinedInput-input" id="How_Did_You_Hear_About_Geotab__select" placeholder="Enter how you heard about Geotab…" tabindex="0">
									  <option value="" disabled></option>
									  <option value="Search engine" selected>Search engine</option>
									  <option value="Ad">Ad</option>
									  <option value="LinkedIn">LinkedIn</option>
									  <option value="Social media">Social media</option>
									  <option value="Recommended by a colleague">Recommended by a colleague</option>
									  <option value="Blog or publication">Blog or publication</option>
									  <option value="Other">Other</option>
									</select>
									<svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="MuiSelect-icon MuiSelect-iconOutlined"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.51792 6.57893L9.08633 14.4736C9.49241 15.1754 10.5076 15.1754 10.9137 14.4736L15.4821 6.57893C15.8882 5.87718 15.3806 4.99999 14.5684 4.99999H5.4316C4.61944 4.99999 4.11184 5.87718 4.51792 6.57893Z" fill="#3C5164"></path></svg>
									<fieldset aria-hidden="true" class="MuiOutlinedInput-notchedOutline"><legend><span>How did you hear about us?*</span></legend></fieldset>
									</div>
								</div>
							</div>`
                  );
              }

              if (
                document.querySelectorAll("#How_Did_You_Hear_About_Geotab__c")
                  .length > 0
              ) {
                document
                  .querySelector(
                    ".MuiInputBase-root #How_Did_You_Hear_About_Geotab__c"
                  )
                  .closest(".MuiGrid-root").style.display = "none";
                var elm = document.querySelector(
                  "#How_Did_You_Hear_About_Geotab__c"
                );
                const capitalizeAndDispatch = function (e) {
                  // Remove the event listener to prevent infinite loop
                  elm.removeEventListener("input", capitalizeAndDispatch);
                  // Capitalize value
                  let capitalized =
                    e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1);
                  // Update the value using the native setter
                  if (elm) {
                    setNativeValue(elm, "Search engine");
                  }
                  // Dispatch the React-friendly 'input' event
                  elm.dispatchEvent(new Event("input", { bubbles: true }));
                  // Re-attach the event listener
                  elm.addEventListener("input", capitalizeAndDispatch);
                };
                elm.addEventListener("input", capitalizeAndDispatch);
                const el = document.querySelector(
                  "#How_Did_You_Hear_About_Geotab__c"
                );
                el.value = "New Value";
                el.dispatchEvent(new Event("input", { bubbles: true }));
              }

              // Changing Labels
              if (
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="first_name"]'
                )
              ) {
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="first_name"]'
                ).innerHTML = "First name";
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="last_name"]'
                ).innerHTML = "Last name";
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="Title__c"]'
                ).innerHTML = "Job title";
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="email"]'
                ).innerHTML = "Email";
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="phone"]'
                ).innerHTML = "Phone";
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="How_Did_You_Hear_About_Geotab__c"]'
                ).innerHTML = "How did you hear about us?";
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="company"]'
                ).innerHTML = "Company name";
                if (
                  document.querySelector(
                    '.spz_t2027RD_V1 .formSection .formWrapper label[for="industry"]'
                  )
                ) {
                  document.querySelector(
                    '.spz_t2027RD_V1 .formSection .formWrapper label[for="industry"]'
                  ).innerHTML = "Industry";
                }
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="multiple_region_select__c"]'
                ).innerHTML =
                  "Does your company operate in multiple regions? <span>(Optional)</span>";
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="fleet_size"]'
                ).innerHTML = "Fleet size";
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="country"]'
                ).innerHTML = "Country";
                document.querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper label[for="city"]'
                ).innerHTML = "City";
              }

              document
                .querySelector(".formWrapperContainer")
                .insertAdjacentHTML(
                  "afterbegin",
                  `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/geotab/3002/Logo.svg" alt="logo" class="logo">`
                );

              // Repositioning fields
              document
                .querySelector(".formSection .formWrapper .fieldsWrapper.email")
                .after(
                  document.querySelector(
                    ".formSection .formWrapper .fieldsWrapper.phone"
                  )
                );
              document
                .querySelector(".formSection .formWrapper .fieldsWrapper.phone")
                .after(
                  document.querySelector(
                    ".formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                  )
                );

              // Adding step 1 CTA
              document
                .querySelector(
                  ".formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                )
                .insertAdjacentHTML(
                  "afterend",
                  `
								<button class="continueButton" type="button">Continue <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M11.4721 5L16.3332 10M16.3332 10L11.4721 15M16.3332 10L4.6665 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
							`
                );
              document
                .querySelector(
                  ".spz_t2027RD_V1 .formSection .formWrapper .continueButton"
                )
                .addEventListener("click", function () {
                  var checkfields = document.querySelectorAll(
                    ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper:not(.hiddenFieldStep2) input:not(#AB_name__c):not(#AB_treatment__c):not(#How_Did_You_Hear_About_Geotab__c), .spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper:not(.hiddenFieldStep2) select:not(#Interest_Segment__c)"
                  );
                  var allFieldsFilled = 0;
                  var emptyFields = [];
                  checkfields.forEach((checkfield) => {
                    if (checkfield.value === "") {
                      emptyFields.push(checkfield);
                    } else if (checkfield.getAttribute("id") === "email") {
                      // Check if the field is the email field
                      if (isValidEmail(checkfield.value)) {
                        allFieldsFilled += 1;
                      } else {
                        emptyFields.push(checkfield);
                      }
                    } else {
                      allFieldsFilled += 1;
                    }
                  });
                  if (allFieldsFilled === checkfields.length) {
                    var emailInput = document.querySelector(
                      ".formSection .formWrapper input#email"
                    );
                    var email = emailInput.value.trim();

                    if (isValidEmail(email)) {
                      const value = document.querySelectorAll(
                        ".formWrapper .hiddenFieldStep2"
                      );
                      document
                        .querySelectorAll(".formWrapper .hiddenFieldStep2")
                        .forEach((step2HiddenField) => {
                          step2HiddenField.classList.remove("hiddenFieldStep2");
                          step2HiddenField.classList.add("visibleFieldStep2");
                        });
                      document
                        .querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .continueButton"
                        )
                        .classList.add("hiddenFieldStep2");
                      document
                        .querySelectorAll(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper:not(.visibleFieldStep2) input, .spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper:not(.visibleFieldStep2) select"
                        )
                        .forEach((checkfield) => {
                          checkfield
                            .closest(".fieldsWrapper")
                            .classList.add("hiddenFieldStep2");
                        });

                      // Changing heading and steps
                      document.querySelector(
                        ".formSection .formWrapper .headingWrapper h2"
                      ).innerHTML = "Company details";
                      document
                        .querySelector(".formSection .formWrapper .steps")
                        .remove();
                      document
                        .querySelector(
                          ".spz_t2027RD_V1 .formSection .headingWrapper"
                        )
                        .insertAdjacentHTML("beforebegin", createSteps(2));
                    } else {
                      emailInput
                        .closest(".form-field")
                        .classList.add("error", "typing");
                    }
                  } else {
                    // Focus on the first empty field
                    if (emptyFields.length > 0) {
                      var isSelect =
                        emptyFields[0].parentElement.parentElement.parentElement
                          .parentElement;
                      if (window.outerWidth >= 960) {
                        if (
                          isSelect.classList.contains("Title__c") ||
                          isSelect.classList.contains("fleet_size")
                        ) {
                          isSelect.classList.add("active", "typing");
                        }
                      }
                      emptyFields[0].focus();
                      emptyFields[0]
                        .closest(".MuiGrid-root")
                        .classList.add("error");
                    }
                  }
                });

              // Repositioning Fields for step 2
              if (
                document.querySelector(
                  ".formSection .formWrapper .fieldsWrapper.industry"
                )
              ) {
                document
                  .querySelector(".formSection .formWrapper .continueButton")
                  .after(
                    document.querySelector(
                      ".formSection .formWrapper .fieldsWrapper.industry"
                    )
                  );
              }
              // document
              //   .querySelector(".formSection .formWrapper .fieldsWrapper.city")
              //   .after(
              //     document.querySelector(
              //       ".formSection .formWrapper .fieldsWrapper.phone"
              //     )
              //   );

              // Making city full width
              document
                .querySelector(".formSection .formWrapper .fieldsWrapper.city")
                .classList.add("fullWidth");
              document
                .querySelector(".formSection .formWrapper .fieldsWrapper.city")
                .classList.add("hiddenField");

              // Adding classes in optIn and CTA
              if (document.querySelector("label#opt_in-form-label")) {
                document
                  .querySelector("label#opt_in-form-label")
                  .parentElement.parentElement.classList.add(
                    "optInWrapper",
                    "optInWrapperCase2"
                  );
                document
                  .querySelectorAll(
                    ".formSection .formWrapper label.MuiFormControlLabel-labelPlacementEnd .MuiTypography-root"
                  )
                  .forEach((extraLabel) => {
                    extraLabel.style.display = "none";
                  });
                document.querySelector(
                  ".formSection .formWrapper label.MuiFormControlLabel-labelPlacementEnd:nth-child(2)"
                ).style.display = "none";
                document
                  .querySelector(
                    ".formSection .formWrapper label#opt_in-form-label"
                  )
                  .setAttribute("for", "opt_in");

                document
                  .querySelector(
                    ".spz_t2027RD_V1 .formSection .formWrapper .optInWrapperCase2 > div"
                  )
                  .addEventListener("click", function (event) {
                    // Get the element under the cursor
                    var elementUnderCursor = document.elementFromPoint(
                      event.clientX,
                      event.clientY
                    );

                    // Check if the element under the cursor is the one you want to exclude
                    if (
                      elementUnderCursor.closest(
                        ".spz_t2027RD_V1 .formSection .formWrapper .optInWrapper a"
                      )
                    ) {
                      // If the cursor is over the excluded element, do nothing
                      return;
                    }

                    // Otherwise, run the logic
                    if (
                      document
                        .querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .optInWrapperCase2 label.MuiFormControlLabel-labelPlacementEnd span.MuiButtonBase-root"
                        )
                        .classList.contains("Mui-checked")
                    ) {
                      document
                        .querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .optInWrapperCase2 label.MuiFormControlLabel-labelPlacementEnd:nth-child(2) input"
                        )
                        .click();
                    } else {
                      document
                        .querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .optInWrapperCase2 label.MuiFormControlLabel-labelPlacementEnd:first-child input"
                        )
                        .click();
                    }
                  });
              } else {
                document
                  .querySelector("label.MuiFormControlLabel-labelPlacementEnd")
                  .parentElement.classList.add("optInWrapper");
              }
              document
                .querySelector('button[type="submit"]')
                .parentElement.classList.add("stepCTAWrapper");

              // Hiding fields for step 2
              if (
                document.querySelector(
                  ".formSection .formWrapper .fieldsWrapper.industry"
                )
              ) {
                document
                  .querySelector(
                    ".formSection .formWrapper .fieldsWrapper.industry"
                  )
                  .classList.add("hiddenFieldStep2");
              }
              if (
                document.querySelector(
                  ".formSection .formWrapper .fieldsWrapper.Interest_Segment__c"
                )
              ) {
                document
                  .querySelector(
                    ".formSection .formWrapper .fieldsWrapper.Interest_Segment__c"
                  )
                  .classList.add("hiddenFieldStep2");
              }
              document
                .querySelector(
                  ".formSection .formWrapper .fieldsWrapper.country"
                )
                .classList.add("hiddenFieldStep2");
              document
                .querySelector(".formSection .formWrapper .fieldsWrapper.city")
                .classList.add("hiddenFieldStep2");
              document
                .querySelector(
                  ".formSection .formWrapper .fieldsWrapper.fieldsWrapper.company"
                )
                .classList.add("hiddenFieldStep2");

              document
                .querySelector(
                  ".formSection .formWrapper .fieldsWrapper.fieldsWrapper.fleet_size "
                )
                .classList.add("hiddenFieldStep2");
              document
                .querySelector(
                  ".formSection .formWrapper .fieldsWrapper.multiple_region_select__c"
                )
                .classList.add("hiddenFieldStep2");
              document
                .querySelector(".formSection .formWrapper .optInWrapper")
                .classList.add("hiddenFieldStep2");
              document
                .querySelector(".formSection .formWrapper .stepCTAWrapper")
                .classList.add("hiddenFieldStep2");

              // Opt In Changes
              document.querySelector(
                ".formSection .formWrapper .optInWrapper p"
              ).innerHTML = `Receive marketing communications regarding products, services, and events. <a href="https://docs.google.com/document/d/e/2PACX-1vR5H-O69C-Uf4CDNQP2v1meGzV-6AmKnnbxz4PLEMqBTlvW82Eeklo12cvxmYy-6eUn2pdQJP-ZdHUk/pub">Privacy policy</a>.`;

              // Detect change in country field
              function observeElementChanges(selector, changeType, callback) {
                var targetElement = document.querySelector(selector);
                var observer = new MutationObserver(function (mutations) {
                  mutations.forEach(function (mutation) {
                    callback(mutation);
                  });
                });

                var config = {
                  childList: true,
                  subtree: true,
                  characterData: true,
                };

                observer.observe(targetElement, config);
              }

              // Function to check if all visible fields are filled
              function checkVisibleFields() {
                let allFilled = true;

                // Check if all visible fields are filled
                visibleFields.forEach((f) => {
                  if (f.value.trim() === "") {
                    allFilled = false;
                  }
                });

                // If all visible fields are filled, remove the hidden class from the hidden fields
                if (allFilled) {
                  hiddenFields.forEach((hidden) => {
                    hidden.classList.remove("hiddenField"); // Show the hidden fields
                  });
                }
                // else {
                //   hiddenFields.forEach((hidden) => {
                //     hidden.classList.add("hiddenField"); // Keep the hidden fields hidden
                //   });
                // }
              }

              // Initialize hidden fields with hiddenField class
              var hiddenFields = document.querySelectorAll(
                `
              .spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.phone,
              .spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select
            `
              );
              hiddenFields.forEach((field) => {
                field.classList.add("hiddenField");
              });

              // Get all visible fields
              var visibleFields = document.querySelectorAll(
                `
            .spz_t2027RD_V1 .fieldsWrapper.first_name input,
            .spz_t2027RD_V1 .fieldsWrapper.last_name input,
            .spz_t2027RD_V1 .fieldsWrapper.email input,
            .spz_t2027RD_V1 .fieldsWrapper.Title__c input,
            .spz_t2027RD_V1 .fieldsWrapper.Title__c select
          `
              );
              // Perform the check on page load
              checkVisibleFields();
              // Listen for input changes in visible fields and update the state
              visibleFields.forEach((field) => {
                field.addEventListener("input", function () {
                  checkVisibleFields();
                }); // Trigger on user input
                field.addEventListener("change", function () {
                  checkVisibleFields();
                }); // Trigger on user input
              });

              // Add states classes in input fields
              document
                .querySelectorAll(
                  'div[data-testid="childContainer"] input.MuiOutlinedInput-input, div[data-testid="childContainer"] div[aria-haspopup="listbox"], .MuiNativeSelect-select, Select'
                )
                .forEach(function (element) {
                  fieldsStatesLogic(element);
                });

              function fieldsStatesLogic(element) {
                var inputWrapper = element.closest(".MuiGrid-root");

                // Add click event listener
                element.addEventListener("focus", function () {
                  inputWrapper.classList.add("active");
                  inputWrapper.classList.add("typing");
                });
                element.addEventListener("change", function () {
                  inputWrapper.classList.add("active");
                  inputWrapper.classList.add("typing");
                });
                element.addEventListener("input", function () {
                  inputWrapper.classList.remove("error");
                  if (element.getAttribute("id") === "email") {
                    var email = element.value.trim();

                    if (!isValidEmail(email)) {
                      element
                        .closest(".MuiGrid-root")
                        .classList.add("error", "typing");
                    }
                  }
                });

                // Add blur event listener
                element.addEventListener("blur", function () {
                  inputWrapper.classList.remove("typing", "error");
                  if (element.id == "How_Did_You_Hear_About_Geotab__select") {
                    if (
                      document.querySelector(
                        "#How_Did_You_Hear_About_Geotab__c"
                      )
                    ) {
                      document
                        .querySelector(
                          ".MuiInputBase-root #How_Did_You_Hear_About_Geotab__c"
                        )
                        .closest(".MuiGrid-root").style.display = "none";
                      var elm = document.querySelector(
                        "#How_Did_You_Hear_About_Geotab__c"
                      );
                      const capitalizeAndDispatch = function (e) {
                        // Remove the event listener to prevent infinite loop
                        elm.removeEventListener("input", capitalizeAndDispatch);
                        // Capitalize value
                        let capitalized =
                          e.target.value.charAt(0).toUpperCase() +
                          e.target.value.slice(1);
                        // Update the value using the native setter
                        setNativeValue(elm, element.value);
                        // Dispatch the React-friendly 'input' event
                        elm.dispatchEvent(
                          new Event("input", { bubbles: true })
                        );
                        // Re-attach the event listener
                        elm.addEventListener("input", capitalizeAndDispatch);
                      };
                      elm.addEventListener("input", capitalizeAndDispatch);
                      const el = document.querySelector(
                        "#How_Did_You_Hear_About_Geotab__c"
                      );
                      el.value = "New Value";
                      el.dispatchEvent(new Event("input", { bubbles: true }));
                    }
                  }

                  if (element.value && element.value.trim() !== "") {
                    inputWrapper.classList.add("active");
                  } else {
                    inputWrapper.classList.remove("active");
                  }
                  inputWrapper.classList.remove("error");

                  if (element.getAttribute("aria-haspopup") == "listbox") {
                    element = element.nextElementSibling;
                  }

                  // Add check for existing value on page load
                  if (element.value && element.value.trim() !== "") {
                    inputWrapper.classList.add("active");
                  }
                });
              }

              // Detecting changes in country field
              if (
                document.querySelectorAll(
                  ".fieldsWrapper.country div[aria-haspopup]"
                ).length > 0
              ) {
                observeElementChanges(
                  ".fieldsWrapper.country div[aria-haspopup]",
                  "childList",
                  function (mutation) {
                    if (
                      document.querySelectorAll(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.subIndustry"
                      ).length > 0
                    ) {
                      document.querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                      ).style.gridColumn = "span 1";
                      document.querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                      ).style.gridColumn = "span 1";
                    }
                    if (
                      mutation.target.textContent == "United States" ||
                      mutation.target.textContent == "Canada"
                    ) {
                      countrySubFieldCorrection(
                        document.querySelector(
                          ".formWrapper  label#state-input-label"
                        ),
                        mutation.target.textContent
                      );
                      setTimeout(function () {
                        controlDesktopDropdownActiveStates();
                        adjustDesktopAutofillValues();
                      }, 100);
                      if (
                        document.querySelectorAll(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.subIndustry"
                        ).length > 0
                      ) {
                        document.querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                        ).style.gridColumn = "span 2";
                        document.querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.country"
                        ).style.gridColumn = "span 1";
                        document.querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                        ).style.gridColumn = "span 2";
                      }
                    } else {
                      document
                        .querySelector(
                          ".formSection .formWrapper .fieldsWrapper.city"
                        )
                        .classList.remove("hiddenField");
                      document
                        .querySelector(
                          ".formSection .formWrapper .fieldsWrapper.city"
                        )
                        .classList.add("fullWidth");

                      if (
                        document.querySelector(
                          ".formSection .formWrapper .fieldsWrapper.subIndustry"
                        )
                      ) {
                        document.querySelector(
                          ".formSection .formWrapper .fieldsWrapper.country"
                        ).style.gridColumn = "span 1";
                        document.querySelector(
                          ".formSection .formWrapper .fieldsWrapper.city"
                        ).style.gridColumn = "span 1";
                      }
                    }
                  }
                );

                function countrySubFieldCorrection(targetElement, type) {
                  var fieldWrapper =
                    targetElement.parentElement.parentElement.parentElement;
                  fieldWrapper.classList.add(
                    "fieldsWrapper",
                    "fieldsWrapper",
                    "state",
                    "selectField",
                    "visibleFieldStep2"
                  );
                  targetElement.parentElement.classList.add("form-field");
                  var elementForStates = fieldWrapper.querySelector(
                    'div[aria-haspopup="listbox"]'
                  );
                  fieldsStatesLogic(elementForStates);
                  if (
                    document
                      .querySelector(
                        ".formSection .formWrapper .fieldsWrapper.state"
                      )
                      .classList.contains("active")
                  ) {
                    ddocument
                      .querySelector(
                        ".formSection .formWrapper .fieldsWrapper.state"
                      )
                      .classList.remove("active");
                  }
                  document
                    .querySelector(
                      ".formSection .formWrapper .fieldsWrapper.city"
                    )
                    .classList.remove("hiddenField");
                  document
                    .querySelector(
                      ".formSection .formWrapper .fieldsWrapper.city"
                    )
                    .classList.remove("fullWidth");

                  if (type == "United States") {
                    targetElement.innerText = "State";
                    handleDesktopSelectClasses(
                      fieldWrapper.querySelectorAll(
                        'div[aria-haspopup="listbox"]'
                      )
                    );
                  } else if (type == "Canada") {
                    targetElement.innerText = "Province";
                    handleDesktopSelectClasses(
                      fieldWrapper.querySelectorAll(
                        'div[aria-haspopup="listbox"]'
                      )
                    );
                  } else {
                    document
                      .querySelector(
                        ".formSection .formWrapper .fieldsWrapper.city"
                      )
                      .classList.remove("hiddenField");
                    document
                      .querySelector(
                        ".formSection .formWrapper .fieldsWrapper.city"
                      )
                      .classList.add("fullWidth");
                  }
                }
              }

              // Detect Industry Field Changes
              function detectIndustryFieldChanges() {
                if (
                  document.querySelectorAll(
                    ".fieldsWrapper.industry div[aria-haspopup]"
                  ).length > 0
                ) {
                  observeElementChanges(
                    ".fieldsWrapper.industry div[aria-haspopup]",
                    "childList",
                    function (mutation) {
                      document
                        .querySelector(".MuiInputBase-root #Sub_Industry__c")
                        .closest(".MuiGrid-root")
                        .classList.add(
                          "fieldsWrapper",
                          "selectField",
                          "form-field",
                          "subIndustry",
                          "selectFieldActual"
                        );
                      document
                        .querySelector(".form-field.subIndustry > div")
                        .classList.add("form-field");
                      document
                        .querySelector(
                          "form .MuiInputBase-root .MuiInputBase-input#industry"
                        )
                        .closest(".MuiGrid-root")
                        .classList.add("active");
                      if (document.querySelectorAll(".none").length > 0) {
                        document
                          .querySelector(".MuiInputBase-root #Sub_Industry__c")
                          .closest(".MuiGrid-root")
                          .classList.add("none");
                      }
                      // document.querySelector('#Sub_Industry__c').tabIndex = '6';

                      document
                        .querySelector("label#Sub_Industry__c-input-label")
                        .parentElement.classList.add("form-label");
                      document.querySelector(
                        "label#Sub_Industry__c-input-label"
                      ).textContent = "Sub-industry";

                      document
                        .querySelector("label#Sub_Industry__c-input-label")
                        .parentElement.parentElement.querySelector(
                          'div[aria-haspopup="listbox"] span'
                        ).innerHTML = "";

                      var selectFieldIndustry = document.querySelector(
                        '.form-field.subIndustry div[aria-haspopup="listbox"]'
                      );
                      handleDesktopSelectClasses(
                        document.querySelectorAll(
                          '.form-field.subIndustry div[aria-haspopup="listbox"]'
                        )
                      );
                      fieldsStatesLogic(selectFieldIndustry);

                      document
                        .querySelector(".form-field.subIndustry")
                        .addEventListener("click", function () {
                          var formField =
                            selectFieldIndustry.closest(".MuiGrid-root");
                          var isExpanded =
                            selectFieldIndustry.getAttribute("aria-expanded");
                          if (isExpanded) {
                            formField.classList.add("active", "typing");
                          }
                        });
                      document
                        .querySelector(".fieldsWrapper.industry")
                        .insertAdjacentElement(
                          "afterend",
                          document.querySelector(".form-field.subIndustry")
                        );
                      if (
                        document.querySelectorAll(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.state"
                        ).length > 0
                      ) {
                        document.querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                        ).style.gridColumn = "span 2";
                        document.querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                        ).style.gridColumn = "span 2";
                      } else if (
                        !document
                          .querySelector(
                            ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                          )
                          .classList.contains("hiddenField")
                      ) {
                        document.querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                        ).style.gridColumn = "span 1";
                        document.querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                        ).style.gridColumn = "span 1";
                      } else {
                        document.querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                        ).style.gridColumn = "span 2";
                        document.querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.country"
                        ).style.gridColumn = "span 2";
                      }

                      adjustDesktopAutofillValues();
                      controlDesktopDropdownActiveStates();
                    }
                  );
                }
              }

              // After new control changes check for fields parent Element for any removal or new injection
              observeElementChanges(
                ".formWrapper .MuiGrid-root",
                "childList",
                function (mutation) {
                  if (
                    document.querySelector(
                      "form .MuiInputBase-root .MuiInputBase-input#industry"
                    ) &&
                    document.querySelectorAll(
                      "form .form-field.industry div[aria-haspopup]"
                    ).length < 1 &&
                    window.innerWidth >= 960
                  ) {
                    document
                      .querySelector(
                        "form .MuiInputBase-root .MuiInputBase-input#industry"
                      )
                      .closest(".MuiGrid-root")
                      .classList.add(
                        "industry",
                        "form-field",
                        "selectField",
                        "fieldsWrapper"
                      );
                    document
                      .querySelector(
                        "form .form-field.industry > div:first-child"
                      )
                      .classList.add("form-field");
                    document.querySelector(
                      "form .form-field.industry label"
                    ).innerText = "Industry";
                    fieldsStatesLogic(
                      document.querySelector(
                        ".formWrapper .MuiGrid-root div#industry"
                      )
                    );
                    handleDesktopSelectClasses(
                      document.querySelectorAll(
                        ".formWrapper .MuiGrid-root div#industry"
                      )
                    );
                    if (
                      document.querySelectorAll("hiddenFieldStep2").length <
                        1 &&
                      document.querySelector(
                        ".formSection .formWrapper .fieldsWrapper.industry"
                      )
                    ) {
                      document
                        .querySelector(
                          ".formSection .formWrapper .continueButton"
                        )
                        .after(
                          document.querySelector(
                            ".formSection .formWrapper .fieldsWrapper.industry"
                          )
                        );
                    }

                    detectIndustryFieldChanges();
                  }

                  if (
                    document.querySelector(
                      "form .MuiInputBase-root select#industry"
                    ) &&
                    document.querySelectorAll(
                      ".formWrapper form .form-field.industry"
                    ).length < 1 &&
                    window.innerWidth < 960
                  ) {
                    document
                      .querySelector("form .MuiInputBase-root select#industry")
                      .closest(".MuiGrid-root")
                      .classList.add(
                        "industry",
                        "form-field",
                        "selectField",
                        "fieldsWrapper"
                      );
                    document
                      .querySelector(
                        "form .form-field.industry > div:first-child"
                      )
                      .classList.add("form-field");
                    document.querySelector(
                      "form .form-field.industry label"
                    ).innerText = "Industry";
                    fieldsStatesLogic(
                      document.querySelector(
                        ".formWrapper .MuiGrid-root select#industry"
                      )
                    );
                    if (
                      document.querySelector(
                        ".formSection .formWrapper .fieldsWrapper.industry"
                      )
                    ) {
                      document
                        .querySelector(
                          ".formSection .formWrapper .continueButton"
                        )
                        .after(
                          document.querySelector(
                            ".formSection .formWrapper .fieldsWrapper.industry"
                          )
                        );
                    }
                    initialIndustryTabletOnChange();
                  }
                }
              );

              // Detecting changes in title field
              if (
                document.querySelectorAll(
                  ".fieldsWrapper.Title__c div[aria-haspopup]"
                ).length > 0
              ) {
                observeElementChanges(
                  ".fieldsWrapper.Title__c div[aria-haspopup]",
                  "childList",
                  function (mutation) {
                    if (mutation.target.textContent == "Other") {
                      setTimeout(function () {
                        var otherField =
                          document.querySelector("#custom_field_id");
                        var otherField2 = document.querySelector("#Title");
                        if (otherField) {
                          var inputElement = otherField.querySelector("input");
                          // Your wait for element logic here
                          if (document.querySelector("#custom_field_id")) {
                            document
                              .querySelector(
                                ".MuiInputBase-root #custom_field_id"
                              )
                              .closest(".MuiGrid-root").style.display = "none";
                            var elm =
                              document.querySelector("#custom_field_id");
                            elm
                              .closest(".MuiGrid-root")
                              .classList.add("customTitleField");
                            const capitalizeAndDispatch = function (e) {
                              // Remove the event listener to prevent infinite loop
                              elm.removeEventListener(
                                "input",
                                capitalizeAndDispatch
                              );
                              // Capitalize value
                              let capitalized =
                                e.target.value.charAt(0).toUpperCase() +
                                e.target.value.slice(1);
                              // Update the value using the native setter
                              setNativeValue(elm, "Other");
                              // Dispatch the React-friendly 'input' event
                              elm.dispatchEvent(
                                new Event("input", { bubbles: true })
                              );
                              // Re-attach the event listener
                              elm.addEventListener(
                                "input",
                                capitalizeAndDispatch
                              );
                            };
                            elm.addEventListener(
                              "input",
                              capitalizeAndDispatch
                            );
                            const el =
                              document.querySelector("#custom_field_id");
                            el.value = "New Value";
                            el.dispatchEvent(
                              new Event("input", { bubbles: true })
                            );
                          }
                        }
                        if (otherField2) {
                          var inputElement = otherField2.querySelector("input");
                          // Your wait for element logic here
                          if (document.querySelector("#Title")) {
                            document
                              .querySelector(".MuiInputBase-root #Title")
                              .closest(".MuiGrid-root").style.display = "none";
                            var elm = document.querySelector("#Title");
                            elm
                              .closest(".MuiGrid-root")
                              .classList.add("customTitleField");
                            const capitalizeAndDispatch = function (e) {
                              // Remove the event listener to prevent infinite loop
                              elm.removeEventListener(
                                "input",
                                capitalizeAndDispatch
                              );
                              // Capitalize value
                              let capitalized =
                                e.target.value.charAt(0).toUpperCase() +
                                e.target.value.slice(1);
                              // Update the value using the native setter
                              setNativeValue(elm, "Other");
                              // Dispatch the React-friendly 'input' event
                              elm.dispatchEvent(
                                new Event("input", { bubbles: true })
                              );
                              // Re-attach the event listener
                              elm.addEventListener(
                                "input",
                                capitalizeAndDispatch
                              );
                            };
                            elm.addEventListener(
                              "input",
                              capitalizeAndDispatch
                            );
                            const el = document.querySelector("#Title");
                            el.value = "New Value";
                            el.dispatchEvent(
                              new Event("input", { bubbles: true })
                            );
                          }
                        }
                      }, 100);
                    }
                    checkVisibleFields();
                  }
                );
              }

              function setNativeValue(element, value) {
                if (element) {
                  const valueSetter = Object.getOwnPropertyDescriptor(
                    element,
                    "value"
                  )?.set;
                  const prototype = Object.getPrototypeOf(element);
                  const prototypeValueSetter = Object.getOwnPropertyDescriptor(
                    prototype,
                    "value"
                  ).set;
                  if (valueSetter && valueSetter !== prototypeValueSetter) {
                    prototypeValueSetter.call(element, value);
                  } else {
                    valueSetter?.call(element, value);
                  }
                }
              }

              // Checking when all input fields aria-expanded will be changed to handle active typing classes
              var targetElements = document.querySelectorAll(
                'div[aria-haspopup="listbox"]'
              );
              if (targetElements) {
                handleDesktopSelectClasses(targetElements);
              }

              function handleDesktopSelectClasses(targetElements) {
                targetElements.forEach(function (targetElement) {
                  var observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                      if (mutation.attributeName === "aria-expanded") {
                        if (
                          targetElement.getAttribute("aria-expanded") == "true"
                        ) {
                          targetElement
                            .closest(".MuiGrid-root")
                            .classList.add("active", "typing");
                        } else {
                          targetElement
                            .closest(".MuiGrid-root")
                            .classList.remove("active", "typing");
                          if (
                            targetElement.getAttribute("aria-haspopup") ==
                            "listbox"
                          ) {
                            if (
                              targetElement.nextElementSibling.value != "" &&
                              targetElement.nextElementSibling.value.trim() !==
                                ""
                            ) {
                              targetElement
                                .closest(".MuiGrid-root")
                                .classList.add("active");
                            }
                          }
                          targetElement.blur();
                        }
                      }
                    });
                  });
                  var config = {
                    attributes: true,
                    attributeFilter: ["aria-expanded"],
                  };
                  observer.observe(targetElement, config);
                });
              }

              // Handling country dropdown select from tablet
              var countrySelect = document.querySelector(
                ".formSection .formWrapper .fieldsWrapper select#country"
              );
              if (countrySelect) {
                countrySelect.addEventListener("change", function (event) {
                  if (
                    document.querySelectorAll(
                      ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.subIndustry"
                    ).length > 0
                  ) {
                    document.querySelector(
                      ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                    ).style.gridColumn = "span 1";
                    document.querySelector(
                      ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                    ).style.gridColumn = "span 1";
                  }
                  if (event.target.value == "US") {
                    changeSelectOnCountryChange("State");
                    document
                      .querySelector(
                        ".formSection .formWrapper .fieldsWrapper.city"
                      )
                      .classList.remove("hiddenField");
                    handleCityFullWidth();
                    if (
                      document.querySelectorAll(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.subIndustry"
                      ).length > 0
                    ) {
                      document.querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                      ).style.gridColumn = "span 2";
                      document.querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.country"
                      ).style.gridColumn = "span 1";
                      document.querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                      ).style.gridColumn = "span 2";
                    }
                  } else if (event.target.value == "CA") {
                    changeSelectOnCountryChange("Province");
                    document
                      .querySelector(
                        ".formSection .formWrapper .fieldsWrapper.city"
                      )
                      .classList.remove("hiddenField");
                    handleCityFullWidth();
                    if (
                      document.querySelectorAll(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.subIndustry"
                      ).length > 0
                    ) {
                      document.querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                      ).style.gridColumn = "span 2";
                      document.querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.country"
                      ).style.gridColumn = "span 1";
                      document.querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                      ).style.gridColumn = "span 2";
                    }
                  } else {
                    document
                      .querySelector(
                        ".formSection .formWrapper .fieldsWrapper.city"
                      )
                      .classList.remove("hiddenField");
                    document
                      .querySelector(
                        ".formSection .formWrapper .fieldsWrapper.city"
                      )
                      .classList.add("fullWidth");
                    if (
                      document.querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.subIndustry"
                      )
                    ) {
                      document.querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.country"
                      ).style.gridColumn = "span 1";
                      document.querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                      ).style.gridColumn = "span 1";
                    }
                  }
                });
              }

              function handleCityFullWidth() {
                document
                  .querySelector(
                    ".formSection .formWrapper .fieldsWrapper.city"
                  )
                  .classList.remove("fullWidth");
              }

              function changeSelectOnCountryChange(title) {
                var stateInterval = setInterval(function () {
                  if (document.querySelector(".formSection select#state")) {
                    clearInterval(stateInterval);
                    var elements = document.querySelector(
                      ".formSection select#state"
                    );
                    if (!document.querySelector(".toShowTitle")) {
                      elements
                        .querySelector("option:first-child")
                        .insertAdjacentHTML(
                          "beforebegin",
                          `<option class="toShowTitle" disabled></option>`
                        );
                    }
                    elements.selectedIndex = 1;
                    elements.setAttribute("placeholder", "");
                    elements.value = "";
                    elements.parentElement.parentElement.parentElement.parentElement.classList.remove(
                      "active"
                    );
                    var label =
                      elements.parentElement.parentElement.parentElement.querySelector(
                        "label"
                      );
                    label.innerHTML = title;
                    if (
                      document
                        .querySelector(
                          ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.country"
                        )
                        .classList.contains("visibleFieldStep2")
                    ) {
                      elements.parentElement.parentElement.parentElement.parentElement.classList.add(
                        "fieldsWrapper",
                        "state",
                        "selectField",
                        "visibleFieldStep2"
                      );
                    } else {
                      elements.parentElement.parentElement.parentElement.parentElement.classList.add(
                        "fieldsWrapper",
                        "state",
                        "selectField",
                        "hiddenFieldStep2"
                      );
                    }
                    label.parentElement.classList.add("form-field");

                    fieldsStatesLogic(elements);
                  }
                });
              }

              function initialIndustryTabletOnChange() {
                var industrySelect = document.querySelector("select#industry");
                if (industrySelect) {
                  industrySelect.addEventListener("change", function () {
                    setTimeout(function () {
                      if (document.querySelector("select#Sub_Industry__c")) {
                        document
                          .querySelector(
                            "form .MuiInputBase-root select#industry"
                          )
                          .closest(".MuiGrid-root")
                          .classList.add("active");
                        var industrySelectTablet = document.querySelector(
                          "select#Sub_Industry__c"
                        );
                        fieldsStatesLogic(industrySelectTablet);
                        document
                          .querySelector(".MuiInputBase-root #Sub_Industry__c")
                          .closest(".MuiGrid-root")
                          .classList.add(
                            "fieldsWrapper",
                            "selectField",
                            "form-field",
                            "subIndustry",
                            "selectFieldActual"
                          );
                        document
                          .querySelector(".form-field.subIndustry > div")
                          .classList.add("form-field");

                        document
                          .querySelector("label#Sub_Industry__c-input-label")
                          .parentElement.classList.add("form-label");
                        document.querySelector(
                          "label#Sub_Industry__c-input-label"
                        ).textContent = "Sub-industry";

                        document
                          .querySelector(".fieldsWrapper.industry")
                          .insertAdjacentElement(
                            "afterend",
                            document.querySelector(".form-field.subIndustry")
                          );
                        if (
                          document.querySelectorAll(
                            ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.state"
                          ).length > 0
                        ) {
                          document.querySelector(
                            ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                          ).style.gridColumn = "span 2";
                          document.querySelector(
                            ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                          ).style.gridColumn = "span 2";
                        } else if (
                          !document
                            .querySelector(
                              ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                            )
                            .classList.contains("hiddenField")
                        ) {
                          document.querySelector(
                            ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                          ).style.gridColumn = "span 1";
                          document.querySelector(
                            ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.city"
                          ).style.gridColumn = "span 1";
                        } else {
                          document.querySelector(
                            ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.How_Did_You_Hear_About_Geotab__select"
                          ).style.gridColumn = "span 2";
                          document.querySelector(
                            ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.country"
                          ).style.gridColumn = "span 2";
                        }
                      }
                    }, 100);
                  });
                }
              }
              initialIndustryTabletOnChange();

              // test 2025 test update changes
              const formContainer = document.querySelector(
                ".spz_t2027RD_V1 .formWrapper .formWrapperContainer"
              );
              if (
                formContainer &&
                !document.querySelector(
                  ".spz_t2027RD_V1 .formWrapper .formWrapperContainer .copySection"
                )
              ) {
                const copySectionElement = document.createElement("div");
                copySectionElement.className = "copySection";
                copySectionElement.innerHTML = getCopy();
                formContainer.insertAdjacentElement(
                  "afterend",
                  copySectionElement
                );
              }

              if (window.innerWidth <= 959) {
                // Title tablet field
                var tabletTitle = document.querySelector(
                  ".formSection .formWrapper .fieldsWrapper.Title__c select"
                );
                if (tabletTitle) {
                  tabletTitle.addEventListener("change", function (event) {
                    if (event.target.value == "Other") {
                      var waitForElement = setInterval(() => {
                        if (
                          document.querySelector(
                            ".formSection .formWrapper input#custom_field_id"
                          )
                        ) {
                          clearInterval(waitForElement);
                          var elm = document.querySelector(
                            ".formSection .formWrapper input#custom_field_id"
                          );
                          elm.closest(".MuiGrid-root").style.display = "none";
                          const capitalizeAndDispatch = function (e) {
                            // Remove the event listener to prevent infinite loop
                            elm.removeEventListener(
                              "input",
                              capitalizeAndDispatch
                            );
                            // Capitalize value
                            let capitalized =
                              e.target.value.charAt(0).toUpperCase() +
                              e.target.value.slice(1);
                            // Update the value using the native setter
                            setNativeValue(elm, "Other");
                            // Dispatch the React-friendly 'input' event
                            elm.dispatchEvent(
                              new Event("input", { bubbles: true })
                            );
                            // Re-attach the event listener
                            elm.addEventListener(
                              "input",
                              capitalizeAndDispatch
                            );
                          };
                          elm.addEventListener("input", capitalizeAndDispatch);
                          const el = document.querySelector(
                            ".formSection .formWrapper input#custom_field_id"
                          );
                          el.value = "New Value";
                          el.dispatchEvent(
                            new Event("input", { bubbles: true })
                          );
                        } else if (
                          document.querySelector(
                            ".formSection .formWrapper input#Title"
                          )
                        ) {
                          clearInterval(waitForElement);
                          var elm = document.querySelector(
                            ".formSection .formWrapper input#Title"
                          );
                          elm.closest(".MuiGrid-root").style.display = "none";
                          const capitalizeAndDispatch = function (e) {
                            // Remove the event listener to prevent infinite loop
                            elm.removeEventListener(
                              "input",
                              capitalizeAndDispatch
                            );
                            // Capitalize value
                            let capitalized =
                              e.target.value.charAt(0).toUpperCase() +
                              e.target.value.slice(1);
                            // Update the value using the native setter
                            setNativeValue(elm, "Other");
                            // Dispatch the React-friendly 'input' event
                            elm.dispatchEvent(
                              new Event("input", { bubbles: true })
                            );
                            // Re-attach the event listener
                            elm.addEventListener(
                              "input",
                              capitalizeAndDispatch
                            );
                          };
                          elm.addEventListener("input", capitalizeAndDispatch);
                          const el = document.querySelector(
                            ".formSection .formWrapper input#Title"
                          );
                          el.value = "New Value";
                          el.dispatchEvent(
                            new Event("input", { bubbles: true })
                          );
                        }
                      });
                    }
                  });
                }

                // Multi select for tablet logic
                // Select the elements
                if (
                  document.querySelectorAll(
                    ".formSection select#multiple_region_select__c"
                  ).length > 0
                ) {
                  document
                    .querySelector(
                      ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.multiple_region_select__c"
                    )
                    .classList.add("multiSelectField");
                  const multipleRegionSelect = document.querySelector(
                    ".formSection .formWrapper .fieldsWrapper select#multiple_region_select__c"
                  );
                  const options = multipleRegionSelect.options;

                  // Create an array of checkbox elements based on the options
                  const checkboxes = Array.from(options)
                    .map(
                      (option) => `
                    <li>
                      <label>
                        <input type="checkbox" value="${option.value}" name="city" />
                        <p>${option.text}</p>
                      </label>
                    </li>
                  `
                    )
                    .join("");

                  // Insert the generated checkboxes after the form-field__wrapper1
                  document
                    .querySelector(
                      ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.multiple_region_select__c .form-field__wrapper1 .form-field__wrapper2"
                    )
                    .insertAdjacentHTML(
                      "afterend",
                      `
							        <div class="activated form-field__wrapper1">
					            <div class="checkbox-dropdown">
					                <input class="optionsSelected">
					                <ul class="checkbox-dropdown-list">
					                    ${checkboxes}
					                </ul>
					            </div>
				            </div>
					          `
                    );

                  const checkboxDropdown = document.querySelector(
                    ".formSection .checkbox-dropdown"
                  );
                  const dropdownList = document.querySelector(
                    ".formSection .checkbox-dropdown ul"
                  );

                  // Add click event listener to checkbox-dropdown
                  checkboxDropdown.addEventListener("click", function (event) {
                    if (!this.classList.contains("is-active")) {
                      this.classList.add("is-active");
                      this.parentElement.parentElement.parentElement.parentElement.classList.add(
                        "active",
                        "typing"
                      );
                    } else {
                      this.classList.remove("is-active");
                    }
                    event.stopPropagation(); // Prevent the click event from reaching the document
                  });

                  // Add a click event listener to the document to close the dropdown when clicking outside
                  document.addEventListener("click", function (event) {
                    const isClickInsideDropdown = checkboxDropdown.contains(
                      event.target
                    );
                    if (!isClickInsideDropdown) {
                      checkboxDropdown.classList.remove("is-active");
                      if (
                        document.querySelectorAll(
                          ".fieldsWrapper.multiple_region_select__c .checkbox-dropdown input.optionsSelected"
                        ).length > 0
                      ) {
                        if (
                          document.querySelector(
                            ".fieldsWrapper.multiple_region_select__c .checkbox-dropdown input.optionsSelected"
                          ).value != ""
                        ) {
                          checkboxDropdown.parentElement.parentElement.parentElement.parentElement.classList.remove(
                            "typing",
                            "error"
                          );
                        } else {
                          checkboxDropdown.parentElement.parentElement.parentElement.parentElement.classList.remove(
                            "active",
                            "typing",
                            "error"
                          );
                        }
                      }
                    }
                  });

                  // Add click event listener to dropdown list
                  dropdownList.addEventListener("click", function (e) {
                    e.stopPropagation();
                  });

                  // Add a change event listener to the checkbox dropdown
                  checkboxDropdown.addEventListener("change", function (event) {
                    const checkboxes = checkboxDropdown.querySelectorAll(
                      'input[type="checkbox"]:checked'
                    );

                    // Clear existing selections in the select box
                    multipleRegionSelect.selectedIndex = -1;

                    // Select the corresponding options in the select box based on checked checkboxes
                    checkboxes.forEach((checkbox) => {
                      const option = Array.from(
                        multipleRegionSelect.options
                      ).find((opt) => opt.value === checkbox.value);
                      if (option) {
                        option.selected = true;
                      }
                    });

                    // Create a change event to simulate the actual select box change
                    const changeEvent = new Event("change", { bubbles: true });
                    multipleRegionSelect.dispatchEvent(changeEvent);

                    // Update optionsSelected text
                    const selectedOptionsText = Array.from(
                      multipleRegionSelect.selectedOptions
                    )
                      .map((opt) => opt.text)
                      .join(", ");

                    // Reference the paragraph element and update its content
                    const optionsSelectedParagraph = document.querySelector(
                      ".fieldsWrapper.multiple_region_select__c .checkbox-dropdown input.optionsSelected"
                    );
                    if (optionsSelectedParagraph) {
                      optionsSelectedParagraph.value = selectedOptionsText;
                    }
                  });
                }

                if (
                  document.querySelectorAll(
                    ".formSection select#Interest_Segment__c"
                  ).length > 0
                ) {
                  document
                    .querySelector(
                      ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.Interest_Segment__c"
                    )
                    .classList.add("multiSelectField");
                  const multipleRegionSelect = document.querySelector(
                    ".formSection .formWrapper .fieldsWrapper select#Interest_Segment__c"
                  );
                  const options = multipleRegionSelect.options;

                  // Create an array of checkbox elements based on the options
                  const checkboxes = Array.from(options)
                    // .filter(option => option.value.trim() !== '')
                    .map(
                      (option) => `
                        <li>
                          <label>
                            <input type="checkbox" value="${option.value}" name="interest" />
                            <p>${option.text}</p>
                          </label>
                        </li>
                      `
                    )
                    .join("");

                  // Insert the generated checkboxes after the form-field__wrapper1
                  document
                    .querySelector(
                      ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.Interest_Segment__c .form-field__wrapper1 .form-field__wrapper2"
                    )
                    .insertAdjacentHTML(
                      "afterend",
                      `
                        <div class="activated form-field__wrapper1">
                                <div class="checkbox-dropdown">
                                    <input class="optionsSelected">
                                    <ul class="checkbox-dropdown-list">
                                        ${checkboxes}
                                    </ul>
                                </div>
                              </div>
                        `
                    );

                  const checkboxDropdown = document.querySelector(
                    ".formSection .fieldsWrapper.Interest_Segment__c .checkbox-dropdown"
                  );
                  const dropdownList = document.querySelector(
                    ".formSection .fieldsWrapper.Interest_Segment__c .checkbox-dropdown ul"
                  );

                  // Add click event listener to checkbox-dropdown
                  checkboxDropdown.addEventListener("click", function (event) {
                    if (!this.classList.contains("is-active")) {
                      this.classList.add("is-active");
                      this.parentElement.parentElement.parentElement.parentElement.classList.add(
                        "active",
                        "typing"
                      );
                    } else {
                      this.classList.remove("is-active");
                    }
                    event.stopPropagation(); // Prevent the click event from reaching the document
                  });

                  // Add a click event listener to the document to close the dropdown when clicking outside
                  document.addEventListener("click", function (event) {
                    const isClickInsideDropdown = checkboxDropdown.contains(
                      event.target
                    );
                    if (!isClickInsideDropdown) {
                      checkboxDropdown.classList.remove("is-active");
                      if (
                        document.querySelectorAll(
                          ".fieldsWrapper.Interest_Segment__c .checkbox-dropdown input.optionsSelected"
                        ).length > 0
                      ) {
                        if (
                          document.querySelector(
                            ".fieldsWrapper.Interest_Segment__c .checkbox-dropdown input.optionsSelected"
                          ).value != ""
                        ) {
                          checkboxDropdown.parentElement.parentElement.parentElement.parentElement.classList.remove(
                            "typing",
                            "error"
                          );
                        } else {
                          checkboxDropdown.parentElement.parentElement.parentElement.parentElement.classList.remove(
                            "active",
                            "typing",
                            "error"
                          );
                        }
                      }
                    }
                  });

                  // Add click event listener to dropdown list
                  dropdownList.addEventListener("click", function (e) {
                    e.stopPropagation();
                  });

                  // Adding extra list item
                  document
                    .querySelector(
                      ".fieldsWrapper.Interest_Segment__c ul li:nth-child(1)"
                    )
                    .insertAdjacentHTML(
                      "afterend",
                      `
                      <li></li>
                      `
                    );

                  // Add a change event listener to the checkbox dropdown
                  checkboxDropdown.addEventListener("change", function (event) {
                    document
                      .querySelector(
                        ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.Interest_Segment__c .checkbox-dropdown"
                      )
                      .closest(".MuiGrid-root")
                      .classList.remove("error");
                    const checkboxes = checkboxDropdown.querySelectorAll(
                      'input[type="checkbox"]:checked'
                    );

                    // Clear existing selections in the select box
                    multipleRegionSelect.selectedIndex = -1;

                    // Select the corresponding options in the select box based on checked checkboxes
                    checkboxes.forEach((checkbox) => {
                      const option = Array.from(
                        multipleRegionSelect.options
                      ).find((opt) => opt.value === checkbox.value);
                      if (option) {
                        option.selected = true;
                      }
                    });

                    // Create a change event to simulate the actual select box change
                    const changeEvent = new Event("change", { bubbles: true });
                    multipleRegionSelect.dispatchEvent(changeEvent);

                    // Update optionsSelected text
                    const selectedOptionsText = Array.from(
                      multipleRegionSelect.selectedOptions
                    )
                      .map((opt) => opt.text)
                      .join(", ");

                    // Reference the paragraph element and update its content
                    const optionsSelectedParagraph = document.querySelector(
                      ".fieldsWrapper.Interest_Segment__c .checkbox-dropdown input.optionsSelected"
                    );
                    if (optionsSelectedParagraph) {
                      optionsSelectedParagraph.value = selectedOptionsText;
                    }
                  });
                }
              }

              // Downfunnel Main Code
              function spiralyze_conversion_tag() {
                var checkHiddenField = setInterval(function () {
                  var hiddenField = document.querySelector("input#AB_name__c");
                  if (hiddenField) {
                    clearInterval(checkHiddenField);
                    var conversionTag = getCookie(
                      "spiralyze_conversion_tag_demo"
                    );
                    if (conversionTag) {
                      const nativeInputValueSetter =
                        Object.getOwnPropertyDescriptor(
                          window.HTMLInputElement.prototype,
                          "value"
                        ).set;
                      nativeInputValueSetter.call(hiddenField, conversionTag);
                      const event = new Event("input", { bubbles: true });
                      hiddenField.dispatchEvent(event);
                      // hiddenField.value = conversionTag;
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
                document.cookie =
                  name + "=" + (value || "") + expires + "; path=/";
              }
              function getCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                  var c = ca[i];
                  while (c.charAt(0) == " ") c = c.substring(1, c.length);
                  if (c.indexOf(nameEQ) == 0)
                    return c.substring(nameEQ.length, c.length);
                }
                return null;
              }
              function hiddenValue(cookieName, cookieValue) {
                var spzConversionTag = getCookie(cookieName);
                if (!spzConversionTag) {
                  setCookie(cookieName, cookieValue, 1);
                } else if (
                  spzConversionTag &&
                  !spzConversionTag.includes(cookieValue)
                ) {
                  setCookie(
                    cookieName,
                    spzConversionTag + "," + cookieValue,
                    1
                  );
                }
              }
              hiddenValue("spiralyze_conversion_tag_demo", "2027_V1");
              spiralyze_conversion_tag();

              window.addEventListener("pageshow", function (event) {
                if (event.persisted) {
                  window.location.reload();
                }
              });

              // Changing steps logic
              function isValidEmail(email) {
                // Regular expression pattern for basic email validation
                var pattern =
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

                // Check if the provided email matches the pattern
                return pattern.test(email);
              }

              // Submit CTA fields focus logic
              document
                .querySelector(
                  '.spz_t2027RD_V1 .formSection .formWrapper .stepCTAWrapper button[type="submit"]'
                )
                .addEventListener("click", function (event) {
                  var checkfields;
                  if (window.innerWidth >= 960) {
                    checkfields = document.querySelectorAll(
                      '.fieldsWrapper.phone input, .fieldsWrapper.company input, .fieldsWrapper.industry input, .fieldsWrapper.industry select, .fieldsWrapper.fleet_size input, .fieldsWrapper.fleet_size select, .fieldsWrapper.fleet-size input, .fieldsWrapper.fleet-size select, .fieldsWrapper.country input, .fieldsWrapper.country select, .fieldsWrapper.city input, .fieldsWrapper.city select, .fieldsWrapper.state input, .fieldsWrapper.state select, .fieldsWrapper.subIndustry input, .fieldsWrapper.subIndustry select, .fieldsWrapper.Interest_Segment__c input:not([name="interest"]):not(.optionsSelected), .fieldsWrapper.Interest_Segment__c select'
                    );
                  } else {
                    checkfields = document.querySelectorAll(
                      '.fieldsWrapper.phone input, .fieldsWrapper.industry input, .fieldsWrapper.industry select, .fieldsWrapper.fleet_size input, .fieldsWrapper.fleet_size select, .fieldsWrapper.fleet-size input, .fieldsWrapper.fleet-size select, .fieldsWrapper.country input, .fieldsWrapper.country select, .fieldsWrapper.city input, .fieldsWrapper.city select, .fieldsWrapper.state input, .fieldsWrapper.state select, .fieldsWrapper.subIndustry input, .fieldsWrapper.subIndustry select, .fieldsWrapper.Interest_Segment__c input:not([name="interest"]), .fieldsWrapper.Interest_Segment__c select'
                    );
                  }
                  var allFieldsFilled = 0;
                  var emptyFields = [];

                  checkfields.forEach((checkfield) => {
                    if (checkfield.value === "") {
                      emptyFields.push(checkfield);
                    } else {
                      allFieldsFilled += 1;
                    }
                  });

                  if (allFieldsFilled === checkfields.length) {
                  } else {
                    event.preventDefault();
                    // Focus on the first empty field
                    if (emptyFields.length > 0) {
                      if (
                        emptyFields[0].previousElementSibling?.getAttribute(
                          "id"
                        ) == "industry" ||
                        emptyFields[0].previousElementSibling?.getAttribute(
                          "id"
                        ) == "Sub_Industry__c" ||
                        emptyFields[0].previousElementSibling?.getAttribute(
                          "id"
                        ) == "country" ||
                        emptyFields[0].previousElementSibling?.getAttribute(
                          "id"
                        ) == "state" ||
                        emptyFields[0].previousElementSibling?.getAttribute(
                          "id"
                        ) == "fleet-size" ||
                        emptyFields[0].previousElementSibling?.getAttribute(
                          "id"
                        ) == "fleet_size" ||
                        (emptyFields[0].previousElementSibling?.getAttribute(
                          "id"
                        ) == "Interest_Segment__c" &&
                          window.outerWidth >= 960)
                      ) {
                        emptyFields[0]
                          .closest(".MuiGrid-root")
                          .classList.add("active", "typing");
                      }
                      emptyFields[0].focus();
                      emptyFields[0]
                        .closest(".MuiGrid-root")
                        .classList.add("active", "typing");
                      emptyFields[0]
                        .closest(".MuiGrid-root.fieldsWrapper")
                        .classList.add("error", "active", "typing");

                      if (
                        emptyFields[0].getAttribute("id") ==
                          "Interest_Segment__c" &&
                        window.innerWidth < 960
                      ) {
                        setTimeout(function () {
                          emptyFields[0]
                            .closest(".MuiGrid-root.fieldsWrapper")
                            .classList.remove("error", "active", "typing");
                          document
                            .querySelector(
                              ".spz_t2027RD_V1 .formSection .formWrapper .fieldsWrapper.Interest_Segment__c .checkbox-dropdown"
                            )
                            .closest(".MuiGrid-root")
                            .classList.add("error", "active", "typing");
                        }, 100);
                      }
                    }
                  }
                });

              function controlDesktopDropdownActiveStates() {
                if (window.outerWidth >= 960) {
                  var inputsToCheck = document.querySelectorAll(
                    ".formSection .formWrapper .fieldsWrapper.selectField input"
                  );

                  inputsToCheck = Array.from(inputsToCheck);

                  function clickEventListener(event) {
                    var continueButton = document.querySelector(
                      ".spz_t2027RD_V1 .formSection .formWrapper .continueButton"
                    );
                    var submitButton = document.querySelector(
                      '.spz_t2027RD_V1 .formSection .formWrapper .stepCTAWrapper button[type="submit"]'
                    );
                    if (
                      !event.target.classList.contains("spz_t2027RD_V1") &&
                      !event.target.closest(".continueButton") &&
                      !event.target.closest(
                        '.stepCTAWrapper button[type="submit"]'
                      ) &&
                      !event.target.getAttribute("aria-selected")
                    ) {
                      inputsToCheck.forEach(function (input) {
                        if (input.value.trim() === "") {
                          input.parentElement.parentElement.parentElement.parentElement.classList.remove(
                            "active",
                            "typing",
                            "error"
                          );
                        }
                      });
                    }
                  }
                  document.body.removeEventListener(
                    "click",
                    clickEventListener
                  );
                  document.body.addEventListener("click", clickEventListener);
                }
              }
              controlDesktopDropdownActiveStates();

              function adjustDesktopAutofillValues() {
                if (window.outerWidth >= 960) {
                  document
                    .querySelectorAll(
                      '.spz_t2027RD_V1 .form-field div[aria-haspopup="listbox"] + input'
                    )
                    .forEach((desktopField) => {
                      let previousValue = desktopField.value; // Store the initial value

                      desktopField.addEventListener("change", function () {
                        if (desktopField.value !== previousValue) {
                          desktopField.parentElement.parentElement.parentElement.parentElement.classList.remove(
                            "typing",
                            "error"
                          );
                          desktopField.parentElement.parentElement.parentElement.parentElement.classList.add(
                            "active"
                          );
                        }

                        // Update the previous value after each change
                        previousValue = desktopField.value;
                      });
                    });
                }
              }
              adjustDesktopAutofillValues();
            }
          }
        });
      }
    })();
  } else {
    (function () {
      var testID = "2027_V1",
        testClass = "spz_t" + testID;

      if (!document.body.classList.contains(testClass)) {
        document.body.classList.add(testClass);
        initVar();
      }

      function initVar() {
        // if (!document.getElementById("generic-lead-form")) {
        //   updateModal();
        // }
        // Downfunnel Main Code
        function spiralyze_conversion_tag() {
          console.log("Executed");
          var checkHiddenField = setInterval(function () {
            var hiddenField = document.querySelector(
              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form input#ab-name`
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
            if (c.indexOf(nameEQ) == 0)
              return c.substring(nameEQ.length, c.length);
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
                var oldTestValue = spzConversionTag
                  .split(",")
                  .find(function (tag) {
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
                    "Duplicate test #" +
                      newTestNumber +
                      " detected. Updated value."
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
        hiddenValue("spiralyze_conversion_tag_demo", "2027_V1");
        spiralyze_conversion_tag();

        // For Navigation CTA
        var ctaInterval2 = setInterval(function () {
          // console.log("Here0")
          if (window.innerWidth >= 960) {
            // console.log("Here1")
            if (
              document.querySelectorAll("div#NavigationBar").length > 0 &&
              document.querySelectorAll(
                'button[aria-label="Open Schedule a Demo popout"]'
              ).length > 0
            ) {
              clearInterval(ctaInterval2);
              // console.log("Here2");
              setTimeout(() => {
                document
                  .querySelector(
                    'button[aria-label="Open Schedule a Demo popout"]'
                  )
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
                  .addEventListener("click", function (e) {
                    let modalSelectorIntervalTries = 0;
                    const modalSelectorInterval = setInterval(() => {
                      const modalSelector = document.querySelector(
                        'div.MuiModal-root.MuiDialog-root[role="presentation"]'
                      );
                      if (modalSelectorIntervalTries === 220) {
                        clearInterval(modalSelectorInterval);
                      }
                      modalSelectorIntervalTries++;
                      console.log("modalSelector", modalSelector);
                      if (modalSelector) {
                        clearInterval(modalSelectorInterval);
                        setTimeout(() => {
                          modalSelector.classList.add("formPopup");
                          updateModal(e);
                          spiralyze_conversion_tag();
                        });
                      }
                    }, 200);
                  });
              }, 500);
            }
          } else {
            // if (document.querySelectorAll('button[aria-label="Open Schedule a Demo popout"]').length > 0 && document.querySelectorAll('div[data-testid="mobile-banner-container-test-id"] button').length > 0) {
            // console.log("Here 3");
            if (
              document.querySelectorAll(
                'button[aria-label="Open Schedule a Demo popout"]'
              ).length > 0
            ) {
              clearInterval(ctaInterval2);
              // console.log("Here 4");
              setTimeout(() => {
                document
                  .querySelector(
                    'button[aria-label="Open Schedule a Demo popout"]'
                  )
                  .classList.add("getADemoCTA");
                document.querySelector(".getADemoCTA");
                //.nextElementSibling.style.display = "none";
                document.querySelector(".getADemoCTA").innerText = "Get a Demo";
                document
                  .querySelector(
                    'button[aria-label="Open Schedule a Demo popout"]'
                  )
                  .addEventListener("click", function (e) {
                    let modalSelectorIntervalTries = 0;
                    const modalSelectorInterval = setInterval(() => {
                      const modalSelector = document.querySelector(
                        'div.MuiModal-root.MuiDialog-root[role="presentation"]'
                      );
                      if (modalSelectorIntervalTries === 220) {
                        clearInterval(modalSelectorInterval);
                      }
                      modalSelectorIntervalTries++;
                      console.log("modalSelector", modalSelector);
                      if (modalSelector) {
                        clearInterval(modalSelectorInterval);
                        setTimeout(() => {
                          modalSelector.classList.add("formPopup");
                          updateModal(e);
                          spiralyze_conversion_tag();
                        });
                      }
                    }, 200);
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
              let modalSelectorIntervalTries = 0;
              const modalSelectorInterval = setInterval(() => {
                const modalSelector = document.querySelector(
                  'div.MuiModal-root.MuiDialog-root[role="presentation"]'
                );
                if (modalSelectorIntervalTries === 220) {
                  clearInterval(modalSelectorInterval);
                }
                modalSelectorIntervalTries++;
                console.log("modalSelector", modalSelector);
                if (modalSelector) {
                  clearInterval(modalSelectorInterval);
                  modalSelector.classList.add("formPopup");
                  updateModal(e);
                  spiralyze_conversion_tag();
                }
              }, 200);
            });

            if (
              window.location.pathname === "/software-packages/" ||
              window.location.pathname === "//software-packages/"
            ) {
              if (button.innerText.toLocaleLowerCase() === "get prices") {
                button.classList.add("spz_2025_cta");
              }
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
                .addEventListener("click", function (e) {
                  let modalSelectorIntervalTries = 0;
                  const modalSelectorInterval = setInterval(() => {
                    const modalSelector = document.querySelector(
                      'div.MuiModal-root.MuiDialog-root[role="presentation"]'
                    );
                    if (modalSelectorIntervalTries === 220) {
                      clearInterval(modalSelectorInterval);
                    }
                    modalSelectorIntervalTries++;
                    console.log("modalSelector", modalSelector);
                    if (modalSelector) {
                      clearInterval(modalSelectorInterval);
                      setTimeout(() => {
                        modalSelector.classList.add("formPopup");
                        updateModal(e);
                        spiralyze_conversion_tag();
                      });
                    }
                  }, 200);
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
                .addEventListener("click", function (e) {
                  let modalSelectorIntervalTries = 0;
                  const modalSelectorInterval = setInterval(() => {
                    const modalSelector = document.querySelector(
                      'div.MuiModal-root.MuiDialog-root[role="presentation"]'
                    );
                    if (modalSelectorIntervalTries === 220) {
                      clearInterval(modalSelectorInterval);
                    }
                    modalSelectorIntervalTries++;
                    console.log("modalSelector", modalSelector);
                    if (modalSelector) {
                      clearInterval(modalSelectorInterval);
                      setTimeout(() => {
                        modalSelector.classList.add("formPopup");
                        updateModal();
                        spiralyze_conversion_tag();
                        document.body.classList.remove("modalOpen");
                      });
                    }
                  }, 200);
                });
            }, 500);
          } else if (
            document.querySelector('div[data-testid="gridContainer"] button')
          ) {
            clearInterval(heroCTAInterval);
            setTimeout(() => {
              document
                .querySelector('div[data-testid="gridContainer"] button')
                .addEventListener("click", function (e) {
                  let modalSelectorIntervalTries = 0;
                  const modalSelectorInterval = setInterval(() => {
                    const modalSelector = document.querySelector(
                      'div.MuiModal-root.MuiDialog-root[role="presentation"]'
                    );
                    if (modalSelectorIntervalTries === 220) {
                      clearInterval(modalSelectorInterval);
                    }
                    modalSelectorIntervalTries++;
                    console.log("modalSelector", modalSelector);
                    if (modalSelector) {
                      clearInterval(modalSelectorInterval);
                      setTimeout(() => {
                        modalSelector.classList.add("formPopup");
                        updateModal();
                        spiralyze_conversion_tag();
                        document.body.classList.remove("modalOpen");
                      });
                    }
                  }, 200);
                });
            }, 500);
          }
        });

        // Reload the page from desktop to tablet
        let screenType = getScreenType();

        window.addEventListener("resize", function () {
          setTimeout(function () {
            checkScreenSize();
          }, 1000);
        });

        function getScreenType() {
          const width = document.body.offsetWidth;
          if (width <= 767.98) return "mobile";
          if (width < 960) return "tablet";
          return "desktop";
        }

        function checkScreenSize() {
          const newScreenType = getScreenType();
          if (newScreenType !== screenType) {
            screenType = newScreenType;
            window.location.reload();
          }
        }
      }

      // Add Closing icon
      function addCloseIconFormModal() {
        // Move closeIconElement variable inside the function scope
        const getCloseIcon = setInterval(() => {
          const closeIconElement = document.querySelector(
            `.spz_t2027_V1 .formPopup[role="presentation"] .closeIconWrapper button`
          );
          if (closeIconElement) {
            clearInterval(getCloseIcon);
            const newCloseIconElement = document.createElement("div");
            newCloseIconElement.className = "newCloseIconWrapper";
            newCloseIconElement.innerHTML = `
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g opacity="0.7">
                        <path d="M2.57528 1.72324L7.99768 7.14164L13.3625 1.77764C13.7281 1.45204 14.1065 1.64644 14.2577 1.80964C14.3547 1.92783 14.4047 2.07761 14.3982 2.23036C14.3917 2.38311 14.3291 2.52811 14.2225 2.63764L8.85688 8.00084L14.2225 13.3624C14.4609 13.5624 14.4609 13.9544 14.2697 14.1736C14.0777 14.392 13.7257 14.5184 13.3937 14.2592L7.99768 8.86004L2.59528 14.2616C2.35848 14.4736 1.96808 14.4304 1.77528 14.22C1.58168 14.0088 1.50808 13.644 1.75528 13.3864L7.13848 8.00084L1.77768 2.63764C1.58168 2.42164 1.51368 2.02644 1.77768 1.77764C2.04168 1.52884 2.43528 1.56324 2.57528 1.72324Z" fill="#66788C"></path>
                    </g>
                </svg>
            </button>
        `;

            if (
              closeIconElement &&
              !document.querySelector(
                `.spz_t2027_V1 .formPopup[role="presentation"] .newCloseIconWrapper`
              )
            ) {
              const stepsElement = document.querySelector(
                `.spz_t2027_V1 .formPopup[role="presentation"] #generic-lead-form .steps`
              );

              if (stepsElement) {
                stepsElement.insertAdjacentElement(
                  "afterbegin",
                  newCloseIconElement
                );
                newCloseIconElement.addEventListener("click", (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  closeIconElement.click();
                });
              }
            }
          }
        }, 200);
      }

      function addLogoToTheForm() {
        if (window.innerWidth >= 768) {
          if (
            document.querySelector(
              `.spz_t2027_V1 .formPopup[role="presentation"] #generic-lead-form`
            ) &&
            !document.querySelector(".geotabLogo")
          ) {
            document
              .querySelector(
                `.spz_t2027_V1 .formPopup[role="presentation"] #generic-lead-form`
              )
              .insertAdjacentHTML(
                "beforebegin",
                `
              <section class="geotabLogo">
                <a class="logo" href="https://www.geotab.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="152" height="20" viewBox="0 0 152 20" fill="none">
                      <path d="M150.896 16.9659C150.898 17.5349 150.703 18.0871 150.344 18.5285C149.985 18.97 149.484 19.2733 148.926 19.387C148.368 19.5007 147.789 19.4177 147.285 19.1521C146.782 18.8865 146.386 18.4547 146.166 17.9303C145.945 17.4058 145.912 16.821 146.074 16.2754C146.236 15.7298 146.582 15.2571 147.053 14.9377C147.524 14.6183 148.091 14.472 148.657 14.5236C149.224 14.5752 149.755 14.8215 150.161 15.2207C150.397 15.4456 150.584 15.7166 150.71 16.0168C150.836 16.3171 150.9 16.6401 150.896 16.9659ZM150.561 16.9659C150.559 16.6918 150.503 16.4208 150.396 16.1686C150.289 15.9164 150.132 15.6878 149.936 15.4962C149.543 15.0971 149.006 14.8706 148.446 14.8664C147.885 14.8623 147.345 15.0809 146.946 15.4742L146.924 15.4962C146.524 15.8983 146.299 16.4426 146.299 17.01C146.299 17.5773 146.524 18.1216 146.924 18.5237C147.318 18.9229 147.854 19.1494 148.415 19.1535C148.975 19.1576 149.515 18.939 149.914 18.5457L149.936 18.5237C150.141 18.3235 150.303 18.0831 150.41 17.8175C150.518 17.5519 150.569 17.267 150.561 16.9806V16.9659ZM150.014 18.2334H149.374L148.434 17.223H147.975V18.2334H147.493V15.6175H148.382C148.528 15.6084 148.674 15.6084 148.82 15.6175C148.939 15.6337 149.055 15.671 149.161 15.7277C149.268 15.7825 149.358 15.865 149.422 15.9665C149.481 16.0731 149.509 16.194 149.503 16.3156C149.508 16.4834 149.45 16.6471 149.341 16.7748C149.219 16.9063 149.066 17.006 148.897 17.065L150.014 18.2334ZM149.011 16.3706C149.013 16.3072 149.001 16.2441 148.974 16.1865C148.945 16.1297 148.898 16.0834 148.842 16.0542C148.784 16.024 148.722 16.0041 148.657 15.9957H147.981V16.8774H148.349C148.45 16.888 148.552 16.888 148.654 16.8774C148.729 16.8646 148.801 16.8344 148.863 16.7892C148.917 16.7491 148.96 16.696 148.988 16.6349C149.021 16.547 149.031 16.4522 149.017 16.3593L149.011 16.3706Z" fill="white"></path>
                      <path d="M28.082 19.4278H46.6551V17.5283H31.4371V10.6348H46.0252V8.73032H31.4371V2.45668H46.6551V0.552246H28.082V19.4278Z" fill="white"></path>
                      <path d="M71.6431 1.92595C70.2892 0.88946 66.8424 0.36377 61.4242 0.36377C56.7375 0.36377 53.4891 0.825025 51.7706 1.73507C50.0521 2.64511 49.1571 4.38829 49.1571 6.89281L49.1152 8.67574V9.99247C49.1152 14.3047 49.7922 17.0026 51.1188 18.0639C52.4454 19.1253 55.9222 19.6361 61.4245 19.6361C66.9269 19.6361 70.4383 19.0905 71.7302 18.049C73.0222 17.0075 73.7338 14.203 73.7338 9.74695C73.7062 5.60586 72.9921 2.97239 71.6431 1.92595ZM70.4875 9.98251C70.4875 13.8235 70.1081 16.0975 69.3518 16.7422C68.5955 17.3869 65.9174 17.7192 61.3895 17.7192C56.8615 17.7192 54.1983 17.3894 53.4544 16.7422C52.7105 16.095 52.3186 13.8236 52.3186 9.9826C52.3186 6.14159 52.7104 3.88218 53.4642 3.23783C54.218 2.59348 56.8936 2.26084 61.3993 2.26084C65.3246 2.26084 67.8465 2.54101 68.9103 3.09155C69.9741 3.6421 70.4875 4.95615 70.4875 6.98737V9.98251Z" fill="white"></path>
                      <path d="M97.0181 0.552246H75.0156V2.63517H84.3791V19.4278H87.7391V2.63517H97.0181V0.552246Z" fill="white"></path>
                      <path d="M108.876 0.552246H104.261L93.6729 19.4278H97.2391L99.4482 15.4603H113.932L116.164 19.4278H119.67L108.891 0.599359L108.876 0.552246ZM100.445 13.7468L106.644 2.45919L112.923 13.7419L100.445 13.7468Z" fill="white"></path>
                      <path d="M140.44 9.53133C142.793 8.95601 143.991 7.62446 143.991 5.56379C143.991 3.50312 143.441 2.14672 142.332 1.50948C141.224 0.872246 138.908 0.552246 135.389 0.552246H122.611V19.4278H136.745C139.721 19.4278 141.834 19.0162 143.039 18.2102C144.244 17.4043 144.861 15.9785 144.861 13.9699C144.876 11.5349 143.384 10.0418 140.44 9.53133ZM125.976 2.45668H135.325C137.618 2.45668 139.121 2.64262 139.788 3.00714C140.455 3.37166 140.78 4.17509 140.78 5.40999C140.78 6.83827 140.401 7.76823 139.644 8.17484C138.888 8.58145 137.14 8.79969 134.437 8.79969H125.976V2.45668ZM140.549 16.8936C139.805 17.3052 138.176 17.5086 135.726 17.5086H125.976V10.7042H134.266C137.665 10.7042 139.773 10.8952 140.534 11.2696C141.296 11.644 141.66 12.6558 141.66 14.3047C141.665 15.6189 141.291 16.4918 140.549 16.8936Z" fill="white"></path>
                      <path d="M12.4936 9.9826V11.8845H21.7977V12.9756V13.045C21.7977 15.1428 21.3811 16.4593 20.595 16.9505C19.8089 17.4418 17.6367 17.7121 14.1949 17.7121C9.68675 17.7121 6.88943 17.4418 5.85805 16.9061C4.82667 16.3705 4.32809 14.9396 4.32809 12.6162V9.93841L4.36031 7.43632C4.36031 5.1426 4.8265 3.68946 5.74148 3.11917C6.65646 2.54887 9.02223 2.25097 12.7591 2.25097C16.7663 2.25097 19.313 2.43197 20.2702 2.79155C21.2273 3.15113 21.6317 4.10318 21.6317 5.60586V6.10185H24.9098V5.34034C24.9098 3.24745 24.1833 1.86871 22.7475 1.26862C21.3117 0.668539 18.1575 0.36377 13.2898 0.36377C8.42207 0.36377 5.15638 0.827452 3.54951 1.74494C1.94265 2.66243 1.10449 4.54954 1.10449 7.33423V11.7605C1.10449 15.0759 1.84843 17.2384 3.29905 18.1904C4.74968 19.1423 8.04023 19.6286 13.0939 19.6286C18.4427 19.6286 21.7977 19.2219 23.0698 18.4161C24.342 17.6102 24.9123 15.7331 24.9916 12.7127V9.98469L12.4936 9.9826Z" fill="white"></path>
                    </svg>
                    </a>
              </section>
              `
              );
          }
        } else {
          if (
            document.querySelector(
              `.spz_t2027_V1 .formPopup[role="presentation"] #generic-lead-form`
            ) &&
            !document.querySelector(".geotabLogo")
          ) {
            document
              .querySelector(
                `.spz_t2027_V1 .formPopup[role="presentation"] #generic-lead-form .mobile.logo`
              )
              .insertAdjacentHTML(
                "beforebegin",
                `
              <section class="geotabLogo">
                <a class="logo" href="https://www.geotab.com/">
                    <svg width="280" height="50" viewBox="0 0 280 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M262 1L230.489 41.3162C226.699 46.1658 220.887 49 214.731 49L65.2685 49C59.1134 49 53.3011 46.1658 49.5106 41.3162L18 0.99999" stroke="url(#paint0_linear_24995_9996)" stroke-opacity="0.12"></path>
                    <g clip-path="url(#clip0_24995_9996)">
                    <path d="M200.168 30.5725C200.169 31.0278 200.013 31.4696 199.726 31.8227C199.439 32.1758 199.038 32.4185 198.592 32.5094C198.146 32.6004 197.682 32.534 197.279 32.3215C196.877 32.109 196.56 31.7636 196.383 31.3441C196.207 30.9245 196.181 30.4567 196.31 30.0202C196.44 29.5837 196.716 29.2056 197.093 28.95C197.47 28.6945 197.923 28.5774 198.377 28.6187C198.83 28.66 199.255 28.857 199.58 29.1764C199.768 29.3563 199.918 29.5731 200.019 29.8133C200.12 30.0535 200.171 30.3119 200.168 30.5725ZM199.9 30.5725C199.898 30.3533 199.853 30.1365 199.767 29.9347C199.682 29.7329 199.557 29.5501 199.4 29.3968C199.085 29.0775 198.656 28.8963 198.207 28.893C197.759 28.8897 197.327 29.0646 197.008 29.3792L196.99 29.3968C196.67 29.7185 196.49 30.1539 196.49 30.6078C196.49 31.0617 196.67 31.4971 196.99 31.8188C197.305 32.1381 197.734 32.3194 198.183 32.3227C198.631 32.326 199.063 32.1511 199.382 31.8364L199.4 31.8188C199.564 31.6587 199.693 31.4663 199.779 31.2538C199.865 31.0414 199.906 30.8134 199.9 30.5843V30.5725ZM199.462 31.5866H198.95L198.198 30.7783H197.831V31.5866H197.445V29.4939H198.157C198.273 29.4866 198.39 29.4866 198.507 29.4939C198.602 29.5068 198.695 29.5367 198.78 29.582C198.865 29.6258 198.937 29.6918 198.989 29.7731C199.036 29.8583 199.058 29.955 199.053 30.0523C199.057 30.1866 199.011 30.3176 198.924 30.4197C198.826 30.5249 198.704 30.6046 198.568 30.6519L199.462 31.5866ZM198.659 30.0964C198.661 30.0456 198.651 29.9952 198.63 29.9491C198.607 29.9036 198.57 29.8666 198.524 29.8432C198.478 29.819 198.428 29.8031 198.377 29.7964H197.836V30.5018H198.13C198.211 30.5102 198.293 30.5102 198.374 30.5018C198.434 30.4915 198.492 30.4674 198.541 30.4312C198.584 30.3991 198.619 30.3567 198.641 30.3078C198.668 30.2375 198.676 30.1616 198.665 30.0873L198.659 30.0964Z" fill="#25477B"></path>
                    <path d="M101.916 32.5423H116.774V31.0227H104.6V25.5079H116.271V23.9844H104.6V18.9654H116.774V17.4419H101.916V32.5423Z" fill="#25477B"></path>
                    <path d="M136.765 18.5408C135.682 17.7116 132.924 17.291 128.59 17.291C124.84 17.291 122.242 17.66 120.867 18.3881C119.492 19.1161 118.776 20.5106 118.776 22.5142L118.743 23.9406V24.994C118.743 28.4438 119.284 30.6021 120.346 31.4512C121.407 32.3002 124.188 32.7089 128.59 32.7089C132.992 32.7089 135.801 32.2724 136.835 31.4392C137.868 30.606 138.438 28.3624 138.438 24.7976C138.415 21.4847 137.844 19.3779 136.765 18.5408ZM135.841 24.986C135.841 28.0588 135.537 29.878 134.932 30.3937C134.327 30.9095 132.184 31.1753 128.562 31.1753C124.94 31.1753 122.809 30.9115 122.214 30.3937C121.619 29.876 121.305 28.0589 121.305 24.9861C121.305 21.9133 121.619 20.1057 122.222 19.5903C122.825 19.0748 124.965 18.8087 128.57 18.8087C131.71 18.8087 133.728 19.0328 134.579 19.4732C135.43 19.9137 135.841 20.9649 135.841 22.5899V24.986Z" fill="#25477B"></path>
                    <path d="M157.065 17.4419H139.463V19.1082H146.954V32.5423H149.642V19.1082H157.065V17.4419Z" fill="#25477B"></path>
                    <path d="M166.551 17.4419H162.859L154.389 32.5423H157.242L159.009 29.3683H170.596L172.382 32.5423H175.187L166.563 17.4796L166.551 17.4419ZM159.806 27.9975L164.766 18.9675L169.789 27.9936L159.806 27.9975Z" fill="#25477B"></path>
                    <path d="M191.803 24.6252C193.685 24.1649 194.643 23.0997 194.643 21.4511C194.643 19.8026 194.203 18.7175 193.316 18.2077C192.43 17.6979 190.577 17.4419 187.762 17.4419H177.54V32.5423H188.847C191.227 32.5423 192.917 32.213 193.881 31.5683C194.846 30.9235 195.34 29.7829 195.34 28.176C195.352 26.228 194.157 25.0335 191.803 24.6252ZM180.231 18.9654H187.71C189.545 18.9654 190.747 19.1142 191.281 19.4058C191.815 19.6974 192.074 20.3402 192.074 21.3281C192.074 22.4707 191.771 23.2147 191.166 23.54C190.561 23.8653 189.162 24.0399 187 24.0399H180.231V18.9654ZM191.89 30.515C191.295 30.8443 189.992 31.0069 188.032 31.0069H180.231V25.5635H186.863C189.583 25.5635 191.269 25.7162 191.878 26.0158C192.487 26.3153 192.779 27.1247 192.779 28.4439C192.783 29.4952 192.483 30.1936 191.89 30.515Z" fill="#25477B"></path>
                    <path d="M89.4463 24.9861V26.5076H96.8895V27.3805V27.436C96.8895 29.1143 96.5563 30.1674 95.9274 30.5604C95.2985 30.9535 93.5607 31.1696 90.8073 31.1696C87.2008 31.1696 84.9629 30.9534 84.1378 30.5249C83.3127 30.0964 82.9138 28.9517 82.9138 27.093V24.9507L82.9396 22.9491C82.9396 21.1141 83.3126 19.9516 84.0446 19.4953C84.7765 19.0391 86.6692 18.8008 89.6587 18.8008C92.8644 18.8008 94.9018 18.9456 95.6675 19.2332C96.4332 19.5209 96.7567 20.2825 96.7567 21.4847V21.8815H99.3792V21.2723C99.3792 19.598 98.798 18.495 97.6494 18.0149C96.5007 17.5348 93.9773 17.291 90.0832 17.291C86.189 17.291 83.5765 17.662 82.291 18.396C81.0055 19.1299 80.335 20.6396 80.335 22.8674V26.4084C80.335 29.0607 80.9301 30.7907 82.0906 31.5523C83.2511 32.3139 85.8835 32.7029 89.9265 32.7029C94.2055 32.7029 96.8895 32.3775 97.9072 31.7329C98.925 31.0882 99.3812 29.5864 99.4447 27.1702V24.9878L89.4463 24.9861Z" fill="#25477B"></path>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_24995_9996" x1="188.348" y1="49" x2="188.348" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#041C3C"></stop>
                    <stop offset="1" stop-color="#041C3C" stop-opacity="0"></stop>
                    </linearGradient>
                    <clipPath id="clip0_24995_9996">
                    <rect width="120.502" height="16" fill="white" transform="translate(80 17)"></rect>
                    </clipPath>
                    </defs>
                    </svg>
                    </a>
                    </section>
              `
              );
          }
        }
      }

      function updateModal(event) {
        var waitelement = setInterval(function () {
          if (
            document.querySelectorAll(".MuiInputBase-root .MuiInputBase-input")
              .length > 0 &&
            (document.querySelector(
              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form label[for="first-name"]`
            ) ||
              document.querySelector(
                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form label[for="company"]`
              )) &&
            document.querySelector(
              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1)`
            ) &&
            document.querySelector(
              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(2)`
            )
          ) {
            clearInterval(waitelement);
            // addingParent  class
            const leadForm = document.querySelector(
              'div[role="presentation"] #generic-lead-form'
            );
            if (leadForm) {
              leadForm.parentElement.classList.add("genericLeadFormParent");
              const parentElement = document.querySelector(
                ".genericLeadFormParent"
              );
            }
            // Changing Headings
            if (!document.querySelector(".headingWrapper")) {
              function OnetimeChanges() {
                var waitForFormPopup = setInterval(() => {
                  if (document.querySelector(".formPopup .formWrapper")) {
                    clearInterval(waitForFormPopup);
                    // Changing closing icon
                    if (
                      document.querySelector(
                        'div[aria-labelledby="popout-button-title"] button[aria-label="Exit form"]'
                      )
                    ) {
                      document
                        .querySelector(
                          'div[aria-labelledby="popout-button-title"] button[aria-label="Exit form"]'
                        )
                        .parentElement.classList.add("closeIconWrapper");
                    } else if (
                      document.querySelector(
                        'div[aria-labelledby="popout-button-title"] button[aria-label="Close dialog"]'
                      )
                    ) {
                      document
                        .querySelector(
                          'div[aria-labelledby="popout-button-title"] button[aria-label="Close dialog"]'
                        )
                        .parentElement.classList.add("closeIconWrapper");
                    }

                    if (document.querySelector(".closeIconWrapper")) {
                      document.querySelector(
                        ".closeIconWrapper button"
                      ).style.display = "none";
                    }

                    // Test 2007 Changes
                    if (
                      document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] .closeIconWrapper + .MuiGrid-root`
                      )
                    ) {
                      document
                        .querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] .closeIconWrapper + .MuiGrid-root`
                        )
                        .classList.add("formContainer");
                    }
                  }
                });
              }
              OnetimeChanges();

              function bothFormsInitialSetup() {
                var waitForHeading = setInterval(() => {
                  if (
                    document.querySelectorAll(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form h2`
                    ).length > 0 &&
                    document.querySelectorAll(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form div[aria-haspopup="listbox"],
                       .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form input.MuiInputBase-input:not(#ab-name):not(#ab-treatment),
                       .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form select`
                    ).length > 0
                  ) {
                    clearInterval(waitForHeading);
                    document
                      .querySelector(
                        'div[aria-labelledby="popout-button-title"]'
                      )
                      .parentElement.classList.add("formWrapper");

                    // Adding classes in form heading Wrappers
                    var headingContainers = document.querySelectorAll(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form h2`
                    );
                    headingContainers.forEach((headingWrapper) => {
                      headingWrapper.parentElement.classList.add(
                        "headingWrapper"
                      );
                      headingWrapper.parentElement.parentElement.classList.add(
                        "subFormsWrapper"
                      );
                    });

                    // Adding classes in form fields
                    document
                      .querySelectorAll(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form div[aria-haspopup="listbox"],
                         .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form input.MuiInputBase-input:not(#ab-name):not(#ab-treatment),
                         .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form select`
                      )
                      .forEach(function (element) {
                        element.setAttribute("placeholder", "");
                        element.parentElement.classList.add(
                          "form-field__wrapper2"
                        );
                        element.parentElement.parentElement.classList.add(
                          "form-field__wrapper1"
                        );
                        var inputWrapper =
                          element.parentElement.parentElement.parentElement;
                        inputWrapper.classList.add("fieldContainer");
                        inputWrapper.parentElement.parentElement.classList.add(
                          "fieldsWrapper"
                        );
                        inputWrapper.parentElement.classList.add("form-field");
                        inputWrapper.parentElement.parentElement.nextElementSibling.classList.add(
                          "stepCTAWrapper"
                        );
                        var elementLabel = inputWrapper.querySelector("label");
                        var elementId = elementLabel.getAttribute("for");
                        inputWrapper.parentElement.classList.add(elementId);

                        if (
                          element.getAttribute("aria-haspopup") == "listbox"
                        ) {
                          inputWrapper.parentElement.classList.add(
                            "selectField"
                          );
                        }
                        if (
                          element.classList.contains("MuiNativeSelect-select")
                        ) {
                          // element.querySelector('option:first-child').innerText = ""
                          // if(!element.querySelector('.customDisabled')){
                          //     element.querySelector('option:first-child').insertAdjacentHTML('beforebegin', `<option class="customDisabled" disabled></option>`)
                          // }
                          element.selectedIndex = 1;
                          element.setAttribute("placeholder", "");
                          element.value = "";
                          inputWrapper.parentElement.classList.add(
                            "selectFieldActual"
                          );
                        }
                      });

                    if (
                      document.querySelector('input[name="australia-asia"]')
                    ) {
                      document
                        .querySelector('input[name="australia-asia"]')
                        .parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
                          "form-field",
                          "multiple_region",
                          "selectField"
                        );
                    }

                    // Adding classes in main wrappers to avoid nth child
                    document
                      .querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1)`
                      )
                      .classList.add("firstfieldsWrapper");
                    document
                      .querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(2)`
                      )
                      .classList.add("secondfieldsWrapper");

                    // Select fields logic
                    var selectFields = document.querySelectorAll(
                      '.form-field .form-field__wrapper1 div[aria-haspopup="listbox"]'
                    );
                    if (selectFields) {
                      selectFields.forEach((selectField) => {
                        if (selectField.querySelector("em")) {
                          selectField.querySelector("em").innerHTML = "";
                        }
                        selectField.addEventListener("click", function () {
                          var formField =
                            selectField.parentElement.parentElement
                              .parentElement.parentElement;
                          var isExpanded =
                            selectField.getAttribute("aria-expanded");
                          if (isExpanded) {
                            formField.classList.add("active", "typing");
                          }
                        });
                      });
                    }

                    // Add states classes in input fields
                    document
                      .querySelectorAll(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form div[aria-haspopup="listbox"],
                         .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form input.MuiInputBase-input:not(#ab-name):not(#ab-treatment),
                          form#generic-lead-form select`
                      )
                      .forEach(function (element) {
                        fieldsStatesLogic(element);
                      });

                    // Checking when all input fields aria-expanded will be changed to hangle active typing classes
                    var targetElements = document.querySelectorAll(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field .form-field__wrapper1 div[aria-haspopup="listbox"]'
                    );
                    if (targetElements) {
                      handleDesktopSelectClasses(targetElements);
                    }

                    controlDesktopDropdownActiveStates();
                    adjustDesktopAutofillValues();
                  }
                });
                setTimeout(() => {
                  addLogoToTheForm();
                  addCloseIconFormModal();
                }, 50);
              }
              setTimeout(() => {
                bothFormsInitialSetup();
              }, 500);

              function Step1Changes() {
                var step2Interval = setInterval(() => {
                  if (
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form label[for="first-name"]'
                    )
                  ) {
                    clearInterval(step2Interval);

                    // Repositioning fields
                    document
                      .querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.title`
                      )
                      .after(
                        document.querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.email`
                        )
                      );
                    document
                      .querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.email`
                      )
                      .after(
                        document.querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.phone-number`
                        )
                      );
                    document
                      .querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.phone-number`
                      )
                      .after(
                        document.querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.self-attribution`
                        )
                      );

                    document.querySelector(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) h2`
                    ).innerText = "Get a demo";

                    if (
                      !document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) .steps`
                      )
                    ) {
                      document
                        .querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) h2`
                        )
                        .insertAdjacentHTML(
                          "beforebegin",
                          `
                                              <div class="steps">
                                                  <div class="step active"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="4" fill="#00AEFF"></circle></svg></div>
                                                  <div class="step"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="4" fill="#EFF2F7"></circle></svg></div>
                                              </div>
                                          `
                        );
                    }

                    // Adding mobile logos
                    if (
                      !document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) .logo.mobile`
                      )
                    ) {
                      document
                        .querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) .steps`
                        )
                        .insertAdjacentHTML(
                          "beforebegin",
                          `<div class="logo mobile"><img draggable="false" src="//res.cloudinary.com/spiralyze/image/upload/v1707992068/geotab/2001/main_logo_1.svg" alt="Geotab"></div>`
                        );
                    }

                    // Changing Labels
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="first-name"]'
                    ).innerHTML = "First name";
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="last-name"]'
                    ).innerHTML = "Last name";
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="title"]'
                    ).innerHTML = "Job title";
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="email"]'
                    ).innerHTML = "Email";
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="phone-number"]'
                    ).innerHTML = "Phone";
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="self-attribution"]'
                    ).innerHTML = "How did you hear about us?";

                    // Updated Header of Form
                    setTimeout(() => {
                      if (
                        window.location.pathname === "/software-packages/" ||
                        window.location.pathname === "//software-packages/"
                      ) {
                        const demoButtonInnerText =
                          event.target.innerText === "Get prices"
                            ? "Get prices"
                            : "Get a demo";
                        document.querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) h2`
                        ).innerText = demoButtonInnerText;
                      }
                    });

                    // adding custom Continue Buttons
                    // if(!document.querySelector('form#generic-lead-form > div:nth-child(1) button.continue')){
                    // 	document.querySelector('form#generic-lead-form > div:nth-child(1) .stepCTAWrapper').insertAdjacentHTML('beforeend', `<button type="button" class="continue">Continue <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M11.4721 5L16.3332 10M16.3332 10L11.4721 15M16.3332 10L4.6665 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`)
                    // }
                    if (
                      !document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) button.continue`
                      )
                    ) {
                      document
                        .querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) button`
                        )
                        .removeAttribute("disabled");
                      document
                        .querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) button`
                        )
                        .classList.add("continue");
                      document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) button`
                      ).innerHTML = `Continue <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M11.4721 5L16.3332 10M16.3332 10L11.4721 15M16.3332 10L4.6665 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
                    }

                    document
                      .querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) .stepCTAWrapper button.continue`
                      )
                      .addEventListener("click", function () {
                        var allFieldsFilled = 0;
                        var checkfields = document.querySelectorAll(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) input:not(#self-attribution):not([id="ab-name"]):not([id="ab-treatment"]),
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(1) select`
                        );
                        var emptyFields = [];

                        checkfields.forEach((checkfield) => {
                          if (checkfield.value === "") {
                            emptyFields.push(checkfield);
                          } else if (
                            checkfield.getAttribute("id") === "email"
                          ) {
                            // Check if the field is the email field
                            if (isValidEmail(checkfield.value)) {
                              allFieldsFilled += 1;
                            } else {
                              emptyFields.push(checkfield);
                            }
                          } else {
                            allFieldsFilled += 1;
                          }
                        });

                        if (allFieldsFilled === checkfields.length) {
                          var emailInput = document.querySelector(
                            `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form input#email`
                          );
                          var email;

                          if (emailInput) {
                            email = emailInput.value.trim();
                          }

                          if (isValidEmail(email)) {
                            // document.querySelector('form#generic-lead-form > div:nth-child(1)').style.display = "none"
                            // document.querySelector('form#generic-lead-form > div:nth-child(2)').style.display = "flex"
                            // document.querySelector('form#generic-lead-form > div:nth-child(1)').classList.add('hiddenField');
                            // document.querySelector('form#generic-lead-form > div:nth-child(2)').classList.remove('hiddenField');
                            // document.querySelector('form#generic-lead-form .fourthfieldsWrapper').classList.remove('hiddenField');
                            // document.querySelector('form#generic-lead-form .fifthfieldsWrapper').classList.remove('hiddenField');

                            document
                              .querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper > div:first-child button`
                              )
                              .click();
                            setTimeout(() => {
                              bothFormsInitialSetup();
                              Step2Changes();
                            }, 500);
                          } else {
                            if (emailInput) {
                              emailInput
                                .closest(".form-field")
                                .classList.add("error", "typing");
                            }
                          }
                        } else {
                          // Focus on the first empty field
                          if (emptyFields.length > 0) {
                            if (
                              (emptyFields[0].getAttribute("name") ==
                                "Title__c" ||
                                emptyFields[0].getAttribute("name") ==
                                  "How_Did_You_Hear_About_Geotab__c") &&
                              window.outerWidth >= 961
                            ) {
                              emptyFields[0].parentElement.parentElement.parentElement.parentElement.classList.add(
                                "active",
                                "typing"
                              );
                            }
                            emptyFields[0].focus();
                            emptyFields[0]
                              .closest(".form-field")
                              .classList.add("error");
                          }
                        }
                      });

                    // Detecting changes in title field
                    if (
                      document.querySelectorAll(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.title div[aria-haspopup]`
                      ).length > 0
                    ) {
                      observeElementChanges(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.title div[aria-haspopup]`,
                        "childList",
                        function (mutation) {
                          if (mutation.target.textContent == "Other") {
                            setTimeout(function () {
                              var otherField = document.querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.title + div`
                              );
                              if (otherField) {
                                otherField.style.display = "none";
                                var inputElement =
                                  otherField.querySelector("input");
                                if (
                                  document.querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form  #user_title`
                                  )
                                ) {
                                  var elm =
                                    document.querySelector("#user_title");
                                  const capitalizeAndDispatch = function (e) {
                                    elm.removeEventListener(
                                      "input",
                                      capitalizeAndDispatch
                                    );
                                    let capitalized =
                                      e.target.value.charAt(0).toUpperCase() +
                                      e.target.value.slice(1);
                                    setNativeValue(elm, "Other");
                                    elm.dispatchEvent(
                                      new Event("input", { bubbles: true })
                                    );
                                    elm.addEventListener(
                                      "input",
                                      capitalizeAndDispatch
                                    );
                                  };
                                  elm.addEventListener(
                                    "input",
                                    capitalizeAndDispatch
                                  );
                                  const el = document.querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form #user_title`
                                  );
                                  el.value = "New Value";
                                  el.dispatchEvent(
                                    new Event("input", { bubbles: true })
                                  );
                                }
                              }
                            }, 500);
                          }
                        }
                      );
                    }

                    // Title tablet field
                    var tabletTitle = document.querySelector(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.title select`
                    );
                    if (tabletTitle) {
                      tabletTitle.addEventListener("change", function (event) {
                        if (event.target.value == "Other") {
                          var waitForElement = setInterval(() => {
                            if (
                              document.querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form #user_title`
                              )
                            ) {
                              clearInterval(waitForElement);
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form #user_title`
                                )
                                .closest(".MuiGrid-root").style.display =
                                "none";
                              var elm = document.querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form #user_title`
                              );
                              const capitalizeAndDispatch = function (e) {
                                elm.removeEventListener(
                                  "input",
                                  capitalizeAndDispatch
                                );
                                let capitalized =
                                  e.target.value.charAt(0).toUpperCase() +
                                  e.target.value.slice(1);
                                setNativeValue(elm, "Other");
                                elm.dispatchEvent(
                                  new Event("input", { bubbles: true })
                                );
                                elm.addEventListener(
                                  "input",
                                  capitalizeAndDispatch
                                );
                              };
                              elm.addEventListener(
                                "input",
                                capitalizeAndDispatch
                              );
                              const el = document.querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form #user_title`
                              );
                              el.value = "New Value";
                              el.dispatchEvent(
                                new Event("input", { bubbles: true })
                              );
                            }
                          });
                        }
                      });
                    }

                    // Progressive Logic
                    var hiddenFields = document.querySelectorAll(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.phone-number, .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.self-attribution`
                    );
                    hiddenFields.forEach((field) => {
                      field.classList.add("hiddenField");
                    });
                    var visibleFields = document.querySelectorAll(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.first-name input, .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.last-name input, .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.email input, .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.title input, .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.title select`
                    );

                    visibleFields.forEach((field) => {
                      if (field.value.trim() != "") {
                        var allFilled = true;
                        visibleFields.forEach((f) => {
                          if (f.value.trim() === "") {
                            allFilled = false;
                          }
                        });

                        if (allFilled) {
                          hiddenFields.forEach((hidden) => {
                            hidden.classList.remove("hiddenField");
                          });
                        }
                      } else {
                        field.addEventListener("input", function () {
                          var allFilled = true;

                          visibleFields.forEach((f) => {
                            if (f.value.trim() === "") {
                              allFilled = false;
                            }
                          });

                          if (allFilled) {
                            hiddenFields.forEach((hidden) => {
                              hidden.classList.remove("hiddenField");
                            });
                          }
                        });
                      }
                    });

                    if (!document.querySelector(".firstfieldsWrapper .tags")) {
                      if (
                        document.querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .firstfieldsWrapper h2`
                        )
                      ) {
                        document
                          .querySelector(
                            `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .firstfieldsWrapper h2`
                          )
                          .insertAdjacentHTML(
                            "afterend",
                            `
                                                   ${getTags()}
                                              `
                          );
                      }
                    }
                  }
                });
              }
              setTimeout(() => {
                Step1Changes();
              }, 500);

              function Step2Changes() {
                var step2Interval = setInterval(() => {
                  if (
                    document.querySelector(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form label[for="company"]`
                    ) &&
                    document.querySelector(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(2) .fieldsWrapper`
                    )
                  ) {
                    clearInterval(step2Interval);
                    document.querySelector(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(2) h2`
                    ).innerText = "Company details";

                    if (
                      !document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(2) .steps`
                      )
                    ) {
                      document
                        .querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(2) h2`
                        )
                        .insertAdjacentHTML(
                          "beforebegin",
                          `
                                              <div class="steps">
                                                  <div class="step"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="4" fill="#00AEFF"></circle></svg></div>
                                                  <div class="step active"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="4" fill="#00AEFF"></circle></svg></div>
                                              </div>
                                          `
                        );
                    }

                    if (
                      !document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(2) .logo.mobile`
                      )
                    ) {
                      document
                        .querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(2) .steps`
                        )
                        .insertAdjacentHTML(
                          "beforebegin",
                          `<div class="logo mobile"><img draggable="false" src="//res.cloudinary.com/spiralyze/image/upload/v1707992068/geotab/2001/main_logo_1.svg" alt="Geotab"></div>`
                        );
                    }

                    // Chaning step2 fields
                    // Select the parent element
                    var parentElement = document.querySelector(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(2) .fieldsWrapper`
                    );
                    parentElement.prepend(
                      document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                      )
                    );
                    parentElement.prepend(
                      document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.country`
                      )
                    );
                    parentElement.prepend(
                      document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.fleet-size`
                      )
                    );
                    parentElement.prepend(
                      document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.industry`
                      )
                    );
                    parentElement.prepend(
                      document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.company`
                      )
                    );
                    document
                      .querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                      )
                      .classList.add("hiddenField");

                    // Regions Feild
                    var cityField2 = document.querySelector(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                    );
                    var regionField = document.querySelector(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.multiple_region`
                    );
                    if (cityField2 && regionField) {
                      regionField.classList.add("fullWidth");
                      regionField.parentElement.classList.add("fullWidth");
                    }

                    // Changing Labels
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="company"]'
                    ).innerHTML = "Company name";
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="industry"]'
                    ).innerHTML = "Industry";
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="fleet-size"]'
                    ).innerHTML = "Fleet size";
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="country"]'
                    ).innerHTML = "Country";
                    document.querySelector(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="city"]'
                    ).innerHTML = "City";
                    document.querySelector(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper label[for="multiple_region"]`
                    ).innerHTML = `Does your company operate in multiple regions?<span>(Optional)</span>`;

                    // Privacy Policy Checkbox
                    if (!document.querySelector("checkboxPrivacy")) {
                      var containerInterval = setInterval(function () {
                        if (
                          document.querySelector(
                            `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(2) .fieldsWrapper > .stepCTAWrapper label > span:first-child`
                          )
                        ) {
                          clearInterval(containerInterval);
                          document
                            .querySelector(
                              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form > div:nth-child(2) .fieldsWrapper > .stepCTAWrapper label > span:first-child`
                            )
                            .insertAdjacentHTML(
                              "beforeend",
                              `<div class="checkboxPrivacy"></div>`
                            );
                        }
                      });
                    }

                    if (
                      document.querySelectorAll(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.country div[aria-haspopup]`
                      ).length > 0
                    ) {
                      observeElementChanges(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.country div[aria-haspopup]`,
                        "childList",
                        function (mutation) {
                          if (
                            mutation.target.textContent == "United States" ||
                            mutation.target.textContent == "Brazil" ||
                            mutation.target.textContent == "Canada"
                          ) {
                            var stateInterval = setInterval(function () {
                              if (
                                document.querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form  label#state-input-label`
                                )
                              ) {
                                clearInterval(stateInterval);

                                setTimeout(function () {
                                  document
                                    .querySelector(
                                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form label#country-input-label`
                                    )
                                    .parentElement.parentElement.parentElement.classList.add(
                                      "form-field",
                                      "country",
                                      "selectField",
                                      "active"
                                    );
                                  countrySubFieldCorrection(
                                    document.querySelector(
                                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form  label#state-input-label`
                                    ),
                                    mutation.target.textContent
                                  );
                                  if (
                                    document.querySelector(
                                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.subIndustry`
                                    )
                                  ) {
                                    document
                                      .querySelector(
                                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.country`
                                      )
                                      .classList.remove("fullWidth");
                                    document
                                      .querySelector(
                                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                                      )
                                      .classList.add("fullWidth");
                                  }

                                  if (
                                    document.querySelector(
                                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                                    )
                                  ) {
                                    document.querySelector(
                                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                                    ).style.display = "block";
                                  }
                                  document
                                    .querySelector(
                                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.country`
                                    )
                                    .after(
                                      document.querySelector(
                                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                                      )
                                    );
                                  controlDesktopDropdownActiveStates();
                                  adjustDesktopAutofillValues();
                                }, 500);
                              }
                            });
                          } else {
                            if (
                              document.querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                              )
                            ) {
                              var countryLabelInterval = setInterval(
                                function () {
                                  if (
                                    document.querySelector(
                                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form label#country-input-label`
                                    )
                                  ) {
                                    clearInterval(countryLabelInterval);
                                    document
                                      .querySelector(
                                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form label#country-input-label`
                                      )
                                      .parentElement.parentElement.parentElement.classList.add(
                                        "form-field",
                                        "country",
                                        "selectField",
                                        "active"
                                      );
                                    if (
                                      document.querySelector(
                                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                                      )
                                    ) {
                                      document.querySelector(
                                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                                      ).style.display = "none";
                                    }
                                  }
                                }
                              );
                              document
                                .querySelector(
                                  "form#generic-lead-form .fieldsWrapper .form-field.city"
                                )
                                .classList.remove("hiddenField");
                              if (
                                document.querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.subIndustry`
                                )
                              ) {
                                document
                                  .querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.country`
                                  )
                                  .classList.remove("fullWidth");
                                document
                                  .querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                                  )
                                  .classList.remove("fullWidth");
                              } else {
                                document
                                  .querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                                  )
                                  .classList.add("fullWidth");
                              }
                            }
                          }
                        }
                      );

                      function countrySubFieldCorrection(targetElement, type) {
                        var fieldWrapper =
                          targetElement.parentElement.parentElement
                            .parentElement;
                        fieldWrapper.classList.add(
                          "form-field",
                          "state",
                          "selectField"
                        );
                        targetElement.parentElement.parentElement.classList.add(
                          "fieldContainer"
                        );
                        var elementForStates = fieldWrapper.querySelector(
                          'div[aria-haspopup="listbox"]'
                        );
                        fieldsStatesLogic(elementForStates);
                        targetElement.parentElement.classList.add("stateLabel");
                        if (
                          document
                            .querySelector(
                              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                            )
                            .classList.contains("active")
                        ) {
                          document
                            .querySelector(
                              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                            )
                            .classList.remove("active");
                        }
                        document
                          .querySelector(
                            `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                          )
                          .classList.remove("hiddenField");

                        if (type == "United States") {
                          handleDesktopSelectClasses(
                            fieldWrapper.querySelectorAll(
                              'div[aria-haspopup="listbox"]'
                            )
                          );
                          handleCityFullWidth();
                        } else if (type == "Canada") {
                          handleDesktopSelectClasses(
                            fieldWrapper.querySelectorAll(
                              'div[aria-haspopup="listbox"]'
                            )
                          );
                          handleCityFullWidth();
                        } else if (type == "Brazil") {
                          handleDesktopSelectClasses(
                            fieldWrapper.querySelectorAll(
                              'div[aria-haspopup="listbox"]'
                            )
                          );
                          handleCityFullWidth();
                        } else {
                          document
                            .querySelector(
                              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                            )
                            .classList.remove("hiddenField");
                          document
                            .querySelector(
                              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                            )
                            .classList.add("fullWidth");
                        }
                      }
                    }

                    // Detect Industry Field Changes
                    if (
                      document.querySelectorAll(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.industry div[aria-haspopup]`
                      ).length > 0
                    ) {
                      observeElementChanges(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.industry div[aria-haspopup]`,
                        "childList",
                        function (mutation) {
                          var subindustryInterval = setInterval(function () {
                            if (
                              document.querySelector(
                                ".MuiInputBase-root #subindustry"
                              )
                            ) {
                              clearInterval(subindustryInterval);
                              document
                                .querySelector(
                                  ".MuiInputBase-root #subindustry"
                                )
                                .closest(".MuiFormControl-root")
                                .parentElement.parentElement.classList.add(
                                  "selectField",
                                  "form-field",
                                  "subIndustry"
                                );
                              document
                                .querySelector(
                                  ".MuiInputBase-root #subindustry"
                                )
                                .closest(".MuiFormControl-root")
                                .parentElement.classList.add("fieldContainer");
                              if (
                                document.querySelectorAll(".none").length > 0
                              ) {
                                document
                                  .querySelector(
                                    ".MuiInputBase-root #subindustry"
                                  )
                                  .closest(".MuiGrid-root")
                                  .classList.add("none");
                              }

                              document.querySelector(
                                "label#subindustry-input-label"
                              ).textContent = "Sub-industry";

                              var selectFieldIndustry = document.querySelector(
                                '.form-field.subIndustry div[aria-haspopup="listbox"]'
                              );
                              handleDesktopSelectClasses(
                                document.querySelectorAll(
                                  '.form-field.subIndustry div[aria-haspopup="listbox"]'
                                )
                              );
                              fieldsStatesLogic(selectFieldIndustry);
                              document
                                .querySelector(".form-field.subIndustry")
                                .addEventListener("click", function () {
                                  var formField =
                                    selectFieldIndustry.closest(
                                      ".MuiGrid-root"
                                    );
                                  var isExpanded =
                                    selectFieldIndustry.getAttribute(
                                      "aria-expanded"
                                    );
                                  if (isExpanded) {
                                    formField.classList.add("active", "typing");
                                    progressform();
                                  }
                                });
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.industry`
                                )
                                .insertAdjacentElement(
                                  "afterend",
                                  document.querySelector(
                                    ".form-field.subIndustry"
                                  )
                                );

                              if (
                                !document
                                  .querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                                  )
                                  .classList.contains("hiddenField") &&
                                document.querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.state .MuiFormControl-root`
                                )
                              ) {
                                document
                                  .querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                                  )
                                  .classList.add("fullWidth");
                              } else if (
                                !document
                                  .querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                                  )
                                  .classList.contains("hiddenField") &&
                                !document.querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.state .MuiFormControl-root`
                                )
                              ) {
                                document
                                  .querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                                  )
                                  .classList.remove("fullWidth");
                              } else if (
                                document
                                  .querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                                  )
                                  .classList.contains("hiddenField")
                              ) {
                                document
                                  .querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.country`
                                  )
                                  .classList.add("fullWidth");
                              } else {
                                document.querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.country`
                                ).style.maxWidth = "100%";
                              }
                              adjustDesktopAutofillValues();
                              controlDesktopDropdownActiveStates();
                            }
                          });
                        }
                      );
                    }

                    // Handling country dropdown select from tablet
                    var countrySelect = document.querySelector(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.country select#country`
                    );
                    if (countrySelect) {
                      countrySelect.addEventListener(
                        "change",
                        function (event) {
                          if (event.target.value == "US") {
                            setTimeout(() => {
                              changeSelectOnCountryChange("State");
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                                )
                                .classList.remove("hiddenField");
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.country`
                                )
                                .classList.remove("fullWidth");
                              handleCityFullWidth();
                              if (
                                document.querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.subIndustry`
                                )
                              ) {
                                var stateInterval = setInterval(function () {
                                  if (
                                    document.querySelector(
                                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                                    )
                                  ) {
                                    clearInterval(stateInterval);
                                  }
                                });
                              }
                            }, 100);
                          } else if (event.target.value == "CA") {
                            setTimeout(() => {
                              changeSelectOnCountryChange("Province");
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                                )
                                .classList.remove("hiddenField");
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.country`
                                )
                                .classList.remove("fullWidth");
                              handleCityFullWidth();
                              if (
                                document.querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.subIndustry`
                                )
                              ) {
                                var stateInterval = setInterval(function () {
                                  if (
                                    document.querySelector(
                                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                                    )
                                  ) {
                                    clearInterval(stateInterval);
                                  }
                                });
                              }
                            }, 100);
                          } else if (event.target.value == "BR") {
                            setTimeout(() => {
                              changeSelectOnCountryChange("Province");
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                                )
                                .classList.remove("hiddenField");
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.country`
                                )
                                .classList.remove("fullWidth");
                              handleCityFullWidth();
                              if (
                                document.querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.subIndustry`
                                )
                              ) {
                                var stateInterval = setInterval(function () {
                                  if (
                                    document.querySelector(
                                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                                    )
                                  ) {
                                    clearInterval(stateInterval);
                                  }
                                });
                              }
                            }, 100);
                          } else {
                            document
                              .querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                              )
                              .classList.remove("hiddenField");
                            document
                              .querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                              )
                              .classList.add("fullWidth");
                            if (
                              document.querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                              )
                            ) {
                              document.querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                              ).style.display = "none";
                            }
                            setTimeout(function () {
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form label#country-input-label`
                                )
                                .parentElement.parentElement.parentElement.classList.add(
                                  "form-field",
                                  "country",
                                  "selectFieldActual",
                                  "active"
                                );
                              if (
                                document.querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.subIndustry`
                                )
                              ) {
                                document
                                  .querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.country`
                                  )
                                  .classList.remove("fullWidth");
                                document
                                  .querySelector(
                                    `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                                  )
                                  .classList.remove("fullWidth");
                              }
                            }, 100);
                          }
                        }
                      );
                    }

                    function handleCityFullWidth() {
                      document
                        .querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                        )
                        .classList.remove("fullWidth");
                    }

                    function changeSelectOnCountryChange(title) {
                      setTimeout(function () {
                        var elements = document.querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form select#state`
                        );
                        // if(!document.querySelector('.toShowTitle')){
                        //     elements.querySelector('option:first-child').insertAdjacentHTML('beforebegin', `<option class="toShowTitle" disabled></option>`)
                        // }
                        elements.selectedIndex = 1;
                        elements.setAttribute("placeholder", "");
                        elements.value = "";
                        elements.parentElement.parentElement.parentElement.parentElement.classList.remove(
                          "active"
                        );
                        var label =
                          elements.parentElement.parentElement.parentElement.querySelector(
                            "label"
                          );
                        elements.parentElement.parentElement.parentElement.parentElement.classList.add(
                          "form-field",
                          "state",
                          "selectFieldActual"
                        );
                        elements.parentElement.parentElement.parentElement.classList.add(
                          "fieldContainer"
                        );
                        elements.parentElement.parentElement.classList.add(
                          "form-field__wrapper1"
                        );
                        elements.querySelector("option:first-child").innerHTML =
                          "";

                        document.querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                        ).style.display = "block";
                        document
                          .querySelector(
                            `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form label#country-input-label`
                          )
                          .parentElement.parentElement.parentElement.classList.add(
                            "form-field",
                            "country",
                            "selectFieldActual",
                            "active"
                          );

                        fieldsStatesLogic(elements);

                        document
                          .querySelector(
                            `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.country`
                          )
                          .after(
                            document.querySelector(
                              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.state`
                            )
                          );

                        if (
                          document.querySelector(
                            `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.subIndustry`
                          )
                        ) {
                          document
                            .querySelector(
                              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.city`
                            )
                            .classList.add("fullWidth");
                        }
                      }, 100);
                    }

                    // Handling industry dropdown select from tablet
                    var industrySelect = document.querySelector(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form select#industry`
                    );
                    if (industrySelect) {
                      industrySelect.addEventListener("change", function () {
                        var subIndustryInterval = setInterval(function () {
                          if (document.querySelector("select#subindustry")) {
                            clearInterval(subIndustryInterval);
                            var industrySelectTablet =
                              document.querySelector("select#subindustry");
                            industrySelectTablet.setAttribute(
                              "placeholder",
                              ""
                            );
                            industrySelectTablet.querySelector(
                              "option:first-child"
                            ).innerHTML = "";
                            document
                              .querySelector(".MuiInputBase-root #subindustry")
                              .closest(".MuiFormControl-root")
                              .parentElement.parentElement.classList.add(
                                "form-field",
                                "subIndustry",
                                "selectFieldActual"
                              );
                            document
                              .querySelector(".form-field.subIndustry > div")
                              .classList.add("form-field__wrapper1");
                            document.querySelector(
                              "label#subindustry-input-label"
                            ).textContent = "Sub-industry";

                            fieldsStatesLogic(industrySelectTablet);

                            document
                              .querySelector(".form-field.industry")
                              .insertAdjacentElement(
                                "afterend",
                                document.querySelector(
                                  ".form-field.subIndustry"
                                )
                              );

                            setTimeout(function () {
                              if (
                                document
                                  .querySelector(".form-field.subIndustry")
                                  .classList.contains("active")
                              ) {
                                document
                                  .querySelector(".form-field.subIndustry")
                                  .classList.remove("active");
                              }
                            }, 100);

                            if (
                              !document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                                )
                                .classList.contains("hiddenField") &&
                              document.querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.state .MuiFormControl-root`
                              )
                            ) {
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                                )
                                .classList.add("fullWidth");
                            } else if (
                              !document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                                )
                                .classList.contains("hiddenField") &&
                              !document.querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.state .MuiFormControl-root`
                              )
                            ) {
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                                )
                                .classList.remove("fullWidth");
                            } else if (
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city`
                                )
                                .classList.contains("hiddenField")
                            ) {
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.country`
                                )
                                .classList.add("fullWidth");
                            } else {
                              document.querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.country`
                              ).style.maxWidth = "100%";
                            }
                          }
                        });
                      });
                    }

                    // Multi select for tablet logic

                    // Select the elements
                    const multipleRegionSelect = document.querySelectorAll(
                      `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.multiple_region label input`
                    );

                    if (multipleRegionSelect.length > 0) {
                      // Create an array of checkbox elements based on the options
                      const checkboxes = Array.from(
                        document.querySelectorAll(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.multiple_region label`
                        )
                      )
                        .map(
                          (option) => `
                                                  <li>
                                                      <label>
                                                          <input type="checkbox" value="${option
                                                            .querySelector(
                                                              "input"
                                                            )
                                                            .getAttribute(
                                                              "name"
                                                            )}" name="region" />
                                                          <p>${
                                                            option.querySelector(
                                                              "p"
                                                            ).innerText
                                                          }</p>
                                                      </label>
                                                  </li>
                                              `
                        )
                        .join("");

                      // Insert the generated checkboxes after the form-field__wrapper1
                      document
                        .querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.multiple_region  > .MuiGrid2-root`
                        )
                        .insertAdjacentHTML(
                          "beforebegin",
                          `
                                              <div class="activated form-field__wrapper1">
                                                  <label>Does your company operate in multiple regions? <span>(Optional)</span></label>
                                                  <div>
                                                      <div class="checkbox-dropdown">
                                                          <input class="optionsSelected" readonly>
                                                          <ul class="checkbox-dropdown-list">
                                                              ${checkboxes}
                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                          `
                        );

                      const checkboxDropdown = document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .checkbox-dropdown`
                      );
                      const dropdownList = document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .checkbox-dropdown ul`
                      );

                      // Add click event listener to checkbox-dropdown
                      checkboxDropdown.addEventListener(
                        "click",
                        function (event) {
                          this.classList.toggle("is-active");
                          this.parentElement.parentElement.parentElement.classList.add(
                            "active",
                            "typing"
                          );
                          event.stopPropagation();
                        }
                      );

                      // Add a click event listener to the document to close the dropdown when clicking outside
                      document.addEventListener("click", function (event) {
                        const excludedElements = document.querySelectorAll(
                          ".MuiFormControlLabel-root, .PrivateSwitchBase-input"
                        );

                        for (let element of excludedElements) {
                          if (element.contains(event.target)) {
                            return;
                          }
                        }

                        // Continue with the dropdown close logic if the click target is not an excluded element
                        if (
                          !checkboxDropdown.contains(event.target) &&
                          document.querySelector(
                            `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .optionsSelected`
                          )
                        ) {
                          checkboxDropdown.classList.remove("is-active");
                          if (
                            document.querySelector(
                              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .optionsSelected`
                            ).value !== ""
                          ) {
                            checkboxDropdown.parentElement.parentElement.parentElement.classList.remove(
                              "typing"
                            );
                          } else {
                            checkboxDropdown.parentElement.parentElement.parentElement.classList.remove(
                              "active",
                              "typing"
                            );
                          }
                        }
                      });

                      // Add a click event listener to dropdown list
                      dropdownList.addEventListener("click", function (e) {
                        e.stopPropagation();
                      });

                      // Uncheck all options on initial load
                      const uncheckAllMUIOptions = () => {
                        const multipleRegionSelect = document.querySelectorAll(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.multiple_region label input`
                        );

                        if (multipleRegionSelect.length > 0) {
                          const checkboxDropdown = document.querySelector(
                            `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .checkbox-dropdown`
                          );
                          const uncheckedCheckboxes =
                            checkboxDropdown.querySelectorAll(
                              'input[type="checkbox"]:not(:checked)'
                            );

                          // Sync unchecked checkboxes with MUI checkboxes
                          uncheckedCheckboxes.forEach((checkbox) => {
                            const option = Array.from(
                              multipleRegionSelect
                            ).find(
                              (opt) =>
                                opt.getAttribute("name") === checkbox.value
                            );
                            if (option && option.checked) {
                              option.closest("label").click();
                            }
                          });
                        }
                      };

                      // Example usage: You can call this function wherever you want to uncheck all MUI checkboxes
                      uncheckAllMUIOptions();

                      // Add a change event listener to the checkbox dropdown
                      checkboxDropdown.addEventListener(
                        "change",
                        function (event) {
                          setTimeout(function () {
                            const checkedCheckboxes =
                              checkboxDropdown.querySelectorAll(
                                'input[type="checkbox"]:checked'
                              );
                            const uncheckedCheckboxes =
                              checkboxDropdown.querySelectorAll(
                                'input[type="checkbox"]:not(:checked)'
                              );

                            // Sync checked checkboxes with MUI checkboxes
                            checkedCheckboxes.forEach((checkbox) => {
                              const option = Array.from(
                                multipleRegionSelect
                              ).find(
                                (opt) =>
                                  opt.getAttribute("name") === checkbox.value
                              );
                              if (option && !option.checked) {
                                option.closest("label").click();
                              }
                            });

                            // Sync unchecked checkboxes with MUI checkboxes
                            uncheckedCheckboxes.forEach((checkbox) => {
                              const option = Array.from(
                                multipleRegionSelect
                              ).find(
                                (opt) =>
                                  opt.getAttribute("name") === checkbox.value
                              );
                              if (option && option.checked) {
                                option.closest("label").click();
                              }
                            });

                            // Update optionsSelected text
                            var selectedOptionsText = Array.from(
                              checkedCheckboxes
                            )
                              .map((opt) =>
                                opt.closest("label").textContent.trim()
                              )
                              .join(", ");

                            // Reference the paragraph element and update its content
                            const optionsSelectedParagraph =
                              document.querySelector(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .optionsSelected`
                              );
                            if (optionsSelectedParagraph) {
                              optionsSelectedParagraph.value =
                                selectedOptionsText;
                            }
                          }, 100);
                        }
                      );

                      fieldsStatesLogic(
                        document.querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .optionsSelected`
                        )
                      );
                    }

                    // Back Button logic
                    document
                      .querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper > div:first-child button`
                      )
                      .addEventListener("click", function () {
                        bothFormsInitialSetup();
                        setTimeout(() => {
                          Step1Changes();
                        }, 500);
                      });

                    // Submit CTA fields focus logic
                    document
                      .querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper button[type=submit]`
                      )
                      .removeAttribute("disabled");
                    document
                      .querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper button[type="submit"]`
                      )
                      .addEventListener("click", function (event) {
                        var checkfields = document.querySelectorAll(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.company input,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.industry input,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.industry select,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.fleet-size input,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.fleet-size select,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.country input,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.country select,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city input,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.city select,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.state input,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.state select,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.subIndustry input,
                           .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field.subIndustry select`
                        );
                        var allFieldsFilled = 0;
                        var emptyFields = [];

                        checkfields.forEach((checkfield) => {
                          if (checkfield.value === "") {
                            emptyFields.push(checkfield);
                          } else {
                            allFieldsFilled += 1;
                          }
                        });

                        if (
                          allFieldsFilled === checkfields.length &&
                          !document.querySelector(
                            `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field p.MuiFormHelperText-root`
                          )
                        ) {
                        } else {
                          event.preventDefault();
                          // Focus on the first empty field
                          if (emptyFields.length > 0) {
                            if (
                              emptyFields[0].getAttribute("name") ==
                                "industry" ||
                              emptyFields[0].getAttribute("name") ==
                                "fleet_size" ||
                              emptyFields[0].getAttribute("name") ==
                                "country" ||
                              emptyFields[0].getAttribute("name") ==
                                "Sub_Industry__c" ||
                              (emptyFields[0].getAttribute("name") == "state" &&
                                window.outerWidth >= 961)
                            ) {
                              emptyFields[0].parentElement.parentElement.parentElement.parentElement.classList.add(
                                "active",
                                "typing"
                              );
                            }
                            emptyFields[0].focus();
                            emptyFields[0]
                              .closest(".form-field")
                              .classList.add("error");
                          }
                          if (
                            document.querySelector(
                              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field p.MuiFormHelperText-root`
                            )
                          ) {
                            setTimeout(function () {
                              document
                                .querySelector(
                                  `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.multiple_region`
                                )
                                .classList.add("active", "typing");
                            }, 100);
                          }
                        }
                      });

                    if (
                      !document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper > div:first-child button.back`
                      )
                    ) {
                      document
                        .querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper > div:first-child button`
                        )
                        .removeAttribute("disabled");
                      document
                        .querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper > div:first-child button`
                        )
                        .classList.add("back");
                      document.querySelector(
                        `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper > div:first-child button`
                      ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M11.4721 5L16.3332 10M16.3332 10L11.4721 15M16.3332 10L4.6665 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> Back`;
                    }

                    if (!document.querySelector(".secondfieldsWrapper .tags")) {
                      if (
                        document.querySelector(
                          `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .secondfieldsWrapper h2`
                        )
                      ) {
                        document
                          .querySelector(
                            `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .secondfieldsWrapper h2`
                          )
                          .insertAdjacentHTML(
                            "afterend",
                            `
                                                  ${getTags()}
                                              `
                          );
                      }
                    }
                  }
                });
              }
              setTimeout(() => {
                Step2Changes();
              }, 500);

              // General Global Code Below
              function fieldsStatesLogic(element) {
                var inputWrapper = element.closest(".form-field");

                if (inputWrapper) {
                  // Add click event listener
                  element.addEventListener("focus", function () {
                    inputWrapper.classList.add("active");
                    inputWrapper.classList.add("typing");
                  });
                  element.addEventListener("change", function () {
                    inputWrapper.classList.add("active");
                    inputWrapper.classList.add("typing");
                  });
                  element.addEventListener("input", function () {
                    inputWrapper.classList.remove("error");
                    if (element.getAttribute("id") === "email") {
                      var email = element.value.trim();

                      if (!isValidEmail(email)) {
                        element
                          .closest(".form-field")
                          .classList.add("error", "typing");
                      }
                    }
                    if (
                      document.querySelector(
                        '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper button[type="button"]:first-child'
                      )
                    ) {
                      document
                        .querySelector(
                          '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper button[type="button"]:first-child'
                        )
                        .removeAttribute("disabled");
                    }
                  });

                  // Add blur event listener
                  element.addEventListener("blur", function () {
                    inputWrapper.classList.remove("typing");
                    if (element.id == "How_Did_You_Hear_About_Geotab__select") {
                      changeHowDidYouHearAboutOption();
                    }
                    if (element.value && element.value.trim() !== "") {
                      inputWrapper.classList.add("active");
                    } else {
                      inputWrapper.classList.remove("active");
                    }
                    inputWrapper.classList.remove("error");

                    if (
                      document.querySelector(
                        '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper button[type="button"]:first-child'
                      )
                    ) {
                      document
                        .querySelector(
                          '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .stepCTAWrapper button[type="button"]:first-child'
                        )
                        .removeAttribute("disabled");
                    }
                  });

                  if (element.getAttribute("aria-haspopup") == "listbox") {
                    element.addEventListener("click", function () {
                      inputWrapper.parentElement.classList.add("active");
                    });
                    element = element.nextElementSibling;
                  }
                  // Add check for existing value on page load
                  if (element.value && element.value.trim() !== "") {
                    inputWrapper.classList.add("active");
                  }
                }
              }
              function isValidEmail(email) {
                // Regular expression pattern for basic email validation
                var pattern =
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                // Check if the provided email matches the pattern
                return pattern.test(email);
              }
              function observeElementChanges(selector, changeType, callback) {
                var targetElement = document.querySelector(selector);
                var observer = new MutationObserver(function (mutations) {
                  mutations.forEach(function (mutation) {
                    callback(mutation);
                  });
                });

                var config = {
                  childList: true,
                  subtree: true,
                  characterData: true,
                };

                observer.observe(targetElement, config);
              }
              function setNativeValue(element, value) {
                const valueSetter = Object.getOwnPropertyDescriptor(
                  element,
                  "value"
                ).set;
                const prototype = Object.getPrototypeOf(element);
                const prototypeValueSetter = Object.getOwnPropertyDescriptor(
                  prototype,
                  "value"
                ).set;
                if (valueSetter && valueSetter !== prototypeValueSetter) {
                  prototypeValueSetter.call(element, value);
                } else {
                  valueSetter.call(element, value);
                }
              }
              function handleDesktopSelectClasses(targetElements) {
                targetElements.forEach(function (targetElement) {
                  var observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                      if (mutation.attributeName === "aria-expanded") {
                        var newValue =
                          targetElement.getAttribute("aria-expanded");

                        if (
                          targetElement.getAttribute("aria-expanded") == "true"
                        ) {
                          targetElement.parentElement.parentElement.parentElement.parentElement.classList.add(
                            "active",
                            "typing"
                          );
                        } else {
                          if (targetElement.nextElementSibling.value == "") {
                            targetElement.parentElement.parentElement.parentElement.parentElement.classList.remove(
                              "active",
                              "typing"
                            );
                          } else {
                            targetElement.parentElement.parentElement.parentElement.parentElement.classList.remove(
                              "typing"
                            );
                          }
                        }

                        if (
                          targetElement.getAttribute("id") == "title" &&
                          targetElement.innerText != ""
                        ) {
                          var othersFilled = true;
                          document
                            .querySelectorAll(
                              `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.first-name input,
                               .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.last-name input,
                               .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.email input,
                               .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.title input`
                            )
                            .forEach((visible) => {
                              if (visible.value == "") {
                                othersFilled = false;
                              }
                            });
                          if (othersFilled) {
                            document
                              .querySelectorAll(
                                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.phone-number,
                                 .spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.self-attribution`
                              )
                              .forEach((hidden) => {
                                hidden.classList.remove("hiddenField");
                              });
                          }
                        }
                      }
                    });
                  });
                  var config = {
                    attributes: true,
                    attributeFilter: ["aria-expanded"],
                  };
                  observer.observe(targetElement, config);
                });
              }
              const form = document.querySelector(
                `.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form`
              );
              if (form) {
                form.addEventListener("submit", (e) => {
                  console.log("Form is actually submitting");
                  // Push data to the dataLayer
                  window.dataLayer = window.dataLayer || [];
                  dataLayer.push({
                    event: "custom_form_submit",
                    form_name: "demo_form",
                  });
                });
              }

              function controlDesktopDropdownActiveStates() {
                if (window.outerWidth >= 961) {
                  var inputsToCheck = document.querySelectorAll(
                    '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .fieldsWrapper .form-field.selectField input.MuiSelect-nativeInput:not([name="multiple_region_select__c"])'
                  );

                  inputsToCheck = Array.from(inputsToCheck);

                  function clickEventListener(event) {
                    if (
                      !event.target.classList.contains("spz_t2027_V1") &&
                      !event.target.closest("button") &&
                      !event.target.closest(
                        '.stepCTAWrapper button[type="submit"]'
                      )
                    ) {
                      inputsToCheck.forEach(function (input) {
                        if (
                          input &&
                          input.value.trim() === "" &&
                          input.parentElement.parentElement.parentElement
                            .parentElement
                        ) {
                          input.parentElement.parentElement.parentElement.parentElement.classList.remove(
                            "active",
                            "typing",
                            "error"
                          );
                        }
                      });
                    }
                  }
                  document.body.removeEventListener(
                    "click",
                    clickEventListener
                  );
                  document.body.addEventListener("click", clickEventListener);
                }
              }
              function adjustDesktopAutofillValues() {
                if (window.outerWidth >= 961) {
                  document
                    .querySelectorAll(
                      '.spz_t2027_V1 .formPopup[role="presentation"] form#generic-lead-form .form-field div[aria-haspopup="listbox"] + input'
                    )
                    .forEach((desktopField) => {
                      let previousValue = desktopField.value;

                      desktopField.addEventListener("change", function () {
                        if (desktopField.value !== previousValue) {
                          desktopField.parentElement.parentElement.parentElement.parentElement.classList.remove(
                            "typing",
                            "error"
                          );
                          desktopField.parentElement.parentElement.parentElement.parentElement.classList.add(
                            "active"
                          );
                        }

                        // Update the previous value after each change
                        previousValue = desktopField.value;
                      });
                    });
                }
              }

              window.addEventListener("pageshow", function (event) {
                if (event.persisted) {
                  window.location.reload();
                }
              });

              // test 2025 test update changes

              let formContainerTries = 0;
              const formContainerInterval = setInterval(() => {
                const formContainer = document.querySelector(
                  '.spz_t2027_V1 .formPopup[role="presentation"] [data-testid="SiteWideDemoFormTestID"]'
                );
                if (formContainerTries === 70) {
                  clearInterval(formContainerInterval);
                }
                formContainerTries++;
                if (
                  formContainer &&
                  !document.querySelector(
                    '.spz_t2027_V1 .formPopup[role="presentation"] [data-testid="SiteWideDemoFormTestID"] .copySection'
                  )
                ) {
                  clearInterval(formContainerInterval);
                  const copySectionElement = document.createElement("div");
                  copySectionElement.className = "copySection";
                  copySectionElement.innerHTML = getCopy();
                  formContainer.insertAdjacentElement(
                    "beforeend",
                    copySectionElement
                  );
                }
              }, 400);
            }
          }
        });
      }
    })();
  }
})();
