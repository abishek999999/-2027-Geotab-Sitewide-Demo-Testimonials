(function () {
  var testID = "1014",
    testClass = "spz_t" + testID;
  // observer binding
  if (window.location.pathname == "/contact-us/sales-inquiry/") {
    var waitforclass = setInterval(function () {
      if (document.body && !document.body.classList.contains(testClass)) {
        clearInterval(waitforclass);
        document.body.classList.add(testClass);
        initVar();

        // Reload the page from desktop to tablet
        var isDesk = window.innerWidth >= 960;
        var isTable = !isDesk;

        window.addEventListener("resize", function () {
          setTimeout(function () {
            checkScreenSize();
          }, 1000);
        });

        function checkScreenSize() {
          const newWindowWidth = window.innerWidth;
          if (newWindowWidth >= 960 && !isDesk) {
            isDesk = true;
            isTable = false;
            window.location.reload();
          }

          if (newWindowWidth < 960 && !isTable) {
            isDesk = false;
            isTable = true;
            window.location.reload();
          }
        }
      }
    }, 100);
  }

  function initVar() {
    var submitCTAInterval = setInterval(async function () {
      if (
        document.querySelectorAll("#root").length > 0 &&
        document.querySelectorAll('button[data-testid="submitButton"]').length >
          0
      ) {
        clearInterval(submitCTAInterval);

        document
          .querySelector("main#mainContent section:last-child")
          .classList.add("formSection");
        document
          .querySelector(
            '.formSection div[data-testid="customFormSectionContainer"]'
          )
          .classList.add("formWrapper");
        document
          .querySelector(".formSection .formWrapper")
          .firstChild.classList.add("formcontainer");
        document
          .querySelector(".formWrapper h2")
          .parentNode.classList.add("formHeading");
        document
          .querySelector(".formWrapper p")
          .parentNode.classList.add("formPara");

        // Adding Logo
        document
          .querySelector(".spz_t1014 .formWrapper .formcontainer")
          .insertAdjacentHTML(
            "afterbegin",
            `<picture>
        <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/geotab/1001/mobile-logo.svg">
        <img class="logo tab-only" src="//res.cloudinary.com/spiralyze/image/upload/geotab/1001/tab-logo.svg" alt="Geotab"></picture>`
          );

        // Adding Logo
        document
          .querySelector(".spz_t1014 .formWrapper .formcontainer")
          .insertAdjacentHTML(
            "afterbegin",
            `
            <div class="banner"></div>
        `
          );

        // ADding steps
        if (!document.querySelector(".spz_t1014 .formWrapper .steps")) {
          document
            .querySelector(".spz_t1014 .formWrapper h2")
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
        document
          .querySelectorAll(".MuiInputBase-root .MuiInputBase-input")
          .forEach(function (element) {
            if (element.id.trim() === "") {
              // Check if the element's ID is empty or only whitespace
              return; // Skip if the ID is empty
            }
            element
              .closest(".MuiGridLegacy-root")
              .classList.add(element.id, "form-field");
          });
        // Updating the label for the multiple region select field
        document.querySelector(
          ".spz_t1014 .formWrapper .form-field.multiple_region_select__c label"
        ).innerHTML = `Does your company operate in multiple regions? <span>(Optional)</span>`;
        // test changes 1014
        const copysectionTemplate = `
          <div class="copySectionContainer">
            <div class="copyAvatar">
              <img
                class="avatar"
                src="//res.cloudinary.com/spiralyze/image/upload/f_auto/geotab/1014/avatar_2.webp"
                alt="Jeremy Estes"
              />
              <img
                class="stars"
                src="//res.cloudinary.com/spiralyze/image/upload/v1746537325/geotab/1014/stars.svg"
                alt="stars"
              />
            </div>
            <h4>50% reduction in idling costs</h4>
            <p>
             We can track all of our assets with a click. Idling costs were extremely high, but we’ve been able to cut them in half.
            </p>
            <div class="copySectionContact">
              <h5>Jeremy Estes</h5>
              <p>Fleet Manager</p>
              <p>City of Lehi</p>
            </div>
          </div>
        `;
        const formContainer = document.querySelector(
          ".spz_t1014 .formWrapper .formcontainer"
        );
        if (formContainer) {
          const copySectionElement = document.createElement("div");
          copySectionElement.className = "copySection";
          copySectionElement.innerHTML = copysectionTemplate;
          formContainer.insertAdjacentElement("afterend", copySectionElement);
        }
        // Comment field logic
        // document.querySelector('.formWrapper .comments').classList.add('hidden')
        document.querySelector(".formWrapper .comments").insertAdjacentHTML(
          "beforebegin",
          `<div class="showComment"><svg class="plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.99984 4.16675V15.8334M4.1665 10.0001H15.8332" stroke="#0078D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg class="minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5.76001 12H18.24" stroke="#0078D3"></path>
        </svg>Questions/comments<span>&nbsp(Optional)</span></div>`
        );

        document
          .querySelector(".formWrapper .showComment")
          .addEventListener("click", function () {
            document.querySelector("body").classList.toggle("commentvisible");
          });

        // Changing Fields positions
        document
          .querySelector(".last_name")
          .insertAdjacentElement(
            "afterend",
            document.querySelector(".company")
          );
        document
          .querySelector(".company")
          .insertAdjacentElement(
            "afterend",
            document.querySelector(".Title__c")
          );
        document
          .querySelector(".email")
          .insertAdjacentElement(
            "afterend",
            document.querySelector(".industry")
          );
        document
          .querySelector(".city")
          .insertAdjacentElement("afterend", document.querySelector(".phone"));
        document.querySelector(".phone").insertAdjacentHTML(
          "afterend",
          `
          <div class="MuiGridLegacy-root MuiGridLegacy-item MuiGridLegacy-grid-sm-12 MuiGridLegacy-grid-md-6 MuiGridLegacy-grid-lg-12 css-1m090re How_Did_You_Hear_About_Geotab__select form-field">
          <div class="MuiFormControl-root MuiFormControl-fullWidth css-1bgh9rs">
          <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-6zglxn" data-shrink="false" for="How_Did_You_Hear_About_Geotab__select">How did you hear about us?</label>
            <div required class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-gw8dj3">
              <select required class="MuiInputBase-input MuiOutlinedInput-input css-13ny0hi" id="How_Did_You_Hear_About_Geotab__select" placeholder="Enter how you heard about Geotab…" tabindex="12">
                <option value="Search engine">Search engine</option>
                <option value="Ad">Ad</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Social media">Social media</option>
                <option value="Recommended by a colleague">Recommended by a colleague</option>
                <option value="Blog or publication">Blog or publication</option>
                <option value="Other">Other</option>
              </select>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="MuiSelect-icon MuiSelect-iconOutlined css-w1zj6k"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.51792 6.57893L9.08633 14.4736C9.49241 15.1754 10.5076 15.1754 10.9137 14.4736L15.4821 6.57893C15.8882 5.87718 15.3806 4.99999 14.5684 4.99999H5.4316C4.61944 4.99999 4.11184 5.87718 4.51792 6.57893Z" fill="#3C5164"></path></svg>
              <fieldset aria-hidden="true" class="MuiOutlinedInput-notchedOutline css-igs3ac"><legend class="css-yjsfm1"><span>How did you hear about us? *</span></legend></fieldset>
              </div>
            </div>
          </div>
        `
        );

        // changing placeholders
        document.querySelector(
          '.form-field label[for="first_name"]'
        ).innerHTML = "First name";
        document.querySelector('.form-field label[for="last_name"]').innerHTML =
          "Last name";
        document.querySelector('.form-field label[for="company"]').innerHTML =
          "Company name";
        document.querySelector('.form-field label[for="Title__c"]').innerHTML =
          "Job title";
        document.querySelector('.form-field label[for="industry"]').innerHTML =
          "Industry";
        document.querySelector('.form-field label[for="email"]').innerHTML =
          "Email";
        document.querySelector(
          '.form-field label[for="fleet_size"]'
        ).innerHTML = "Fleet size";
        document.querySelector('.form-field label[for="country"]').innerHTML =
          "Country";
        // document.querySelector('.form-field label[for="multiple_region_select__c"]').innerHTML = "State"
        document.querySelector('.form-field label[for="city"]').innerHTML =
          "City";
        document.querySelector('.form-field label[for="phone"]').innerHTML =
          "Phone";
        document.querySelector(
          '.form-field label[for="How_Did_You_Hear_About_Geotab__c"]'
        ).innerHTML = "How did you hear about us?";

        // Positioning Privacy policy text under the CTA
        document
          .querySelector('button[data-testid="submitButton"]')
          .parentNode.classList.add("submitWrapper");
        document
          .querySelector(".AB_name__c")
          .previousElementSibling.classList.add("privacyPolicy");
        document.querySelector(
          ".privacyPolicy p"
        ).innerHTML = `Receive marketing communications regarding products, services, and events. <a href="https://docs.google.com/document/d/e/2PACX-1vR5H-O69C-Uf4CDNQP2v1meGzV-6AmKnnbxz4PLEMqBTlvW82Eeklo12cvxmYy-6eUn2pdQJP-ZdHUk/pub">Privacy policy</a>`;

        // adding custom Continue Buttons
        document
          .querySelector(".How_Did_You_Hear_About_Geotab__select")
          .insertAdjacentHTML(
            "afterend",
            `<button class="continue" type="button" tabIndex='7'>Continue <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M11.4721 5L16.3332 10M16.3332 10L11.4721 15M16.3332 10L4.6665 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`
          );

        // Adding step 1 classes
        document
          .querySelectorAll(
            `.spz_t1014 .formWrapper .MuiGridLegacy-item.first_name,
              .spz_t1014 .formWrapper .MuiGridLegacy-item.last_name,
              .spz_t1014 .formWrapper .MuiGridLegacy-item.company,
              .spz_t1014 .formWrapper .MuiGridLegacy-item.Title__c,
              .spz_t1014 .formWrapper .MuiGridLegacy-item.email,
              .spz_t1014 .formWrapper .MuiGridLegacy-item.industry,
              .spz_t1014 .formWrapper .continue`
          )
          .forEach(function (step1Field) {
            step1Field.classList.add("step1Field");
          });

        // Adding step 2 classes
        document
          .querySelectorAll(
            `.spz_t1014 .formWrapper .MuiGridLegacy-item.multiple_region_select__c,
            .spz_t1014 .formWrapper .MuiGridLegacy-item.fleet_size,
            .spz_t1014 .formWrapper .MuiGridLegacy-item.country,
            .spz_t1014 .formWrapper .MuiGridLegacy-item.city,
            .spz_t1014 .formWrapper .MuiGridLegacy-item.state,
            .spz_t1014 .formWrapper .showComment,
            .spz_t1014 .formWrapper .privacyPolicy,
            .spz_t1014 .formWrapper .MuiGridLegacy-item.phone,
            .How_Did_You_Hear_About_Geotab__select,
            .spz_t1014 .formWrapper .submitWrapper
            `
          )
          .forEach(function (step2Field) {
            step2Field.classList.add("step2Field");
          });

        function isValidEmail(email) {
          // Regular expression pattern for basic email validation
          var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

          // Check if the provided email matches the pattern
          return pattern.test(email);
        }

        const fields = [
          "#first_name",
          "#last_name",
          "#company",
          "#Title__c",
          "#email",
          "#industry",
          ".MuiInputBase-root > div#Sub_Industry__c",
          "#fleet_size",
          "#country",
          "#state",
          "#city",
          "#phone",
          "#How_Did_You_Hear_About_Geotab__select",
          "#multiple_region_select__c",
        ];

        fields.forEach((field, index) => {
          const element = document.querySelector(".spz_t1014 " + field);
          if (element) {
            element.tabIndex = index + 1;
          }
        });

        document
          .querySelector(".spz_t1014 .formWrapper .continue")
          .addEventListener("click", function () {
            var allFieldsFilled = 0;
            var checkfields = document.querySelectorAll(
              ".spz_t1014 .formWrapper .step1Field input, .spz_t1014 .formWrapper .step1Field select"
            );
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
                ".spz_t1014 .formWrapper .MuiGridLegacy-item.email input"
              );
              var email = emailInput.value.trim();
              if (isValidEmail(email)) {
                document
                  .querySelectorAll(".spz_t1014 .formWrapper .step1Field")
                  .forEach(function (step1Field) {
                    step1Field.style.display = "none";
                  });
                document
                  .querySelector(
                    ".spz_t1014 .formWrapper .MuiGridLegacy-container"
                  )
                  .classList.add("step1Filled");
                step2Visible();

                document.querySelector(
                  ".spz_t1014 .formWrapper .steps"
                ).innerHTML = `
                <div class="step"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="4" fill="#00AEFF"></circle></svg></div>
                <div class="step active"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="4" fill="#00AEFF"></circle></svg></div>
                `;
              } else {
                emailInput
                  .closest(".form-field")
                  .classList.add("error", "typing");
              }
            } else {
              // Focus on the first empty field
              if (emptyFields.length > 0) {
                if (
                  emptyFields[0] ==
                    document.querySelector("#Title__c + input") ||
                  emptyFields[0].closest(".industry") ||
                  emptyFields[0].closest(".subIndustry")
                ) {
                  emptyFields[0]
                    .closest(".MuiGridLegacy-root")
                    .classList.add("active", "typing");
                }
                emptyFields[0].focus();
                emptyFields[0].closest(".form-field").classList.add("error");
              }
            }
          });

        // Make step2 Fields visible
        function step2Visible() {
          if (
            document.querySelector(
              ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
            )
          ) {
            document
              .querySelectorAll(
                ".spz_t1014 .formWrapper .step2Field:not(.city)"
              )
              .forEach(function (step2Field) {
                step2Field.style.display = "block";
              });

            var tabletCountryValue = document.querySelector(
              ".spz_t1014 .formWrapper form .form-field.country select"
            );
            if (
              tabletCountryValue?.value !== "" &&
              document.querySelector(
                ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
              ) &&
              window.innerWidth < 960
            ) {
              document.querySelector(
                ".spz_t1014 .formWrapper form .form-field.city"
              ).style.display = "block";
            }

            var desktopCountryValue = document.querySelector(
              ".spz_t1014 .formWrapper form .form-field.country #country"
            );
            if (
              !desktopCountryValue.querySelector("span") &&
              document.querySelector(
                ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
              ) &&
              window.innerWidth >= 960
            ) {
              document.querySelector(
                ".spz_t1014 .formWrapper form .form-field.city"
              ).style.display = "block";
            }

            var step1FieldStyle = window.getComputedStyle(
              document.querySelectorAll(".step1Field")[0]
            );
            if (step1FieldStyle.display != "none") {
              document.querySelector(
                ".spz_t1014 .formWrapper form .form-field.city"
              ).style.display = "none";
            }
          }
        }

        // Select fields logic
        function desktopSelectOnClickActive() {
          var selectFields = document.querySelectorAll(
            '.form-field div[aria-haspopup="listbox"]'
          );
          if (selectFields) {
            selectFields.forEach((selectField) => {
              selectField.querySelector("span").innerHTML = "";
              selectField.addEventListener("click", function () {
                var formField = selectField.closest(".MuiGridLegacy-root");
                var isExpanded = selectField.getAttribute("aria-expanded");
                if (isExpanded) {
                  formField.classList.add("active", "typing");
                }
              });
            });
          }
        }
        desktopSelectOnClickActive();

        function observeElementChanges(selector, changeType, callback) {
          var targetElement = document.querySelector(selector);
          var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              callback(mutation);
              document
                .querySelector(".MuiInputBase-root #Title")
                ?.closest(".MuiGridLegacy-root")
                .classList.add("Title");
              document
                .querySelector(".MuiInputBase-root #state")
                ?.closest(".MuiGridLegacy-root")
                .classList.add("state");
              document
                .querySelector(".MuiInputBase-root #Sub_Industry__c")
                ?.closest(".MuiGridLegacy-root")
                .classList.add("subIndustry", "form-field", "step1Field");
              step2Visible();
            });
          });

          var config = { childList: true, subtree: true, characterData: true };

          observer.observe(targetElement, config);
        }

        // Detect change in country field
        function observeElementChanges(selector, changeType, callback) {
          var targetElement = document.querySelector(selector);
          var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              callback(mutation);
            });
          });

          var config = { childList: true, subtree: true, characterData: true };

          observer.observe(targetElement, config);
        }

        // Detecting changes in country field
        if (
          document.querySelectorAll(
            "form .form-field.country div[aria-haspopup]"
          ).length > 0
        ) {
          observeElementChanges(
            "form .form-field.country div[aria-haspopup]",
            "childList",
            function (mutation) {
              if (
                mutation.target.textContent == "United States" ||
                mutation.target.textContent == "Canada"
              ) {
                document
                  .querySelector(".MuiInputBase-root #state")
                  .closest(".MuiGridLegacy-root")
                  .classList.add("form-field", "state", "selectFieldActual");

                countrySubFieldCorrection(
                  document.querySelector("label#state-input-label"),
                  mutation.target.textContent
                );
                // Updating Tab Index
                fields.forEach((field, index) => {
                  const element = document.querySelector(".spz_t1014 " + field);
                  if (element) {
                    element.tabIndex = index + 1;
                  }
                });
                if (
                  document.querySelector(
                    ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
                  )
                ) {
                  if (
                    document.querySelector(
                      ".spz_t1014 .formWrapper .MuiGridLegacy-item.subIndustry"
                    )
                  ) {
                    document.querySelector(
                      ".spz_t1014 .formWrapper form .form-field.city"
                    ).style.display = "block";
                    document.querySelector(
                      ".spz_t1014 .formWrapper form .form-field.city"
                    ).style.maxWidth = "calc(50% - 10px)";
                    document.querySelector(
                      ".spz_t1014 .formWrapper form .form-field.city"
                    ).style.flexBasis = "calc(50% - 10px)";
                    document.querySelector(
                      ".spz_t1014 .formWrapper form .form-field.country"
                    ).style.maxWidth = "calc(50% - 10px)";
                    document.querySelector(
                      ".spz_t1014 .formWrapper form .form-field.country"
                    ).style.flexBasis = "calc(50% - 10px)";
                  }
                }

                step2Visible();
              } else {
                if (
                  document.querySelector(
                    ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
                  )
                ) {
                  if (
                    document.querySelector(
                      ".spz_t1014 .formWrapper .MuiGridLegacy-item.subIndustry"
                    )
                  ) {
                    document.querySelector(
                      ".spz_t1014 .formWrapper form .form-field.city"
                    ).style.display = "block";
                    document.querySelector(
                      ".spz_t1014 .formWrapper form .form-field.city"
                    ).style.maxWidth = "calc(100%)";
                    document.querySelector(
                      ".spz_t1014 .formWrapper form .form-field.city"
                    ).style.flexBasis = "calc(100%)";
                    document.querySelector(
                      ".spz_t1014 .formWrapper form .form-field.country"
                    ).style.maxWidth = "calc(50% - 10px)";
                    document.querySelector(
                      ".spz_t1014 .formWrapper form .form-field.country"
                    ).style.flexBasis = "calc(50% - 10px)";
                  } else {
                    if (
                      document.querySelector(
                        ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
                      )
                    ) {
                      document.querySelector(
                        ".spz_t1014 .formWrapper form .form-field.city"
                      ).style.display = "block";
                      document.querySelector(
                        ".spz_t1014 .formWrapper form .form-field.city"
                      ).style.maxWidth = "calc(100%)";
                      document.querySelector(
                        ".spz_t1014 .formWrapper form .form-field.city"
                      ).style.flexBasis = "calc(100%)";
                    }
                  }
                }
              }
              document.querySelector(
                ".spz_t1014 .How_Did_You_Hear_About_Geotab__select"
              ).style.maxWidth = "calc(50% - 10px)";
              document.querySelector(
                ".spz_t1014 .How_Did_You_Hear_About_Geotab__select"
              ).style.flexBasis = "calc(50% - 10px)";
            }
          );

          function countrySubFieldCorrection(targetElement, type) {
            var fieldWrapper = targetElement.parentElement.parentElement;
            document
              .querySelector(".MuiInputBase-root #state")
              .closest(".MuiGridLegacy-root")
              .classList.add(
                "form-field",
                "state",
                "selectFieldActual",
                "step2Field"
              );
            targetElement.parentElement.classList.add("form-label");
            fieldWrapper.querySelector(
              'div[aria-haspopup="listbox"] span'
            ).innerHTML = "";
            step2Visible();
            var elementForStates = fieldWrapper.querySelector(
              'div[aria-haspopup="listbox"]'
            );
            fieldsStatesLogic(elementForStates);
            if (
              document
                .querySelector(".form-field.state")
                .classList.contains("active")
            ) {
              document
                .querySelector(".form-field.state")
                .classList.remove("active");
            }

            if (type == "United States") {
              targetElement.innerText = "State";
              handleDesktopSelectClasses(
                fieldWrapper.querySelectorAll('div[aria-haspopup="listbox"]')
              );
              document
                .querySelector(".MuiInputBase-root #state")
                .closest(".MuiGridLegacy-root")
                .classList.add(
                  "form-field",
                  "state",
                  "selectFieldActual",
                  "step2Field"
                );
              step2Visible();
            } else if (type == "Canada") {
              targetElement.innerText = "Province";
              handleDesktopSelectClasses(
                fieldWrapper.querySelectorAll('div[aria-haspopup="listbox"]')
              );
              document
                .querySelector(".MuiInputBase-root #state")
                .closest(".MuiGridLegacy-root")
                .classList.add(
                  "form-field",
                  "state",
                  "selectFieldActual",
                  "step2Field"
                );
              step2Visible();
            }
          }
        }

        function detectIndustryFieldChanges() {
          if (
            document.querySelectorAll(
              "form .form-field.industry div[aria-haspopup]"
            ).length > 0 &&
            window.innerWidth >= 960
          ) {
            observeElementChanges(
              "form .form-field.industry div[aria-haspopup]",
              "childList",
              function (mutation) {
                document
                  .querySelector(".MuiInputBase-root #Sub_Industry__c")
                  .closest(".MuiGridLegacy-root")
                  .classList.add(
                    "form-field",
                    "subIndustry",
                    "selectFieldActual",
                    "step1Field"
                  );
                step2Visible();

                // Updating Tab Index
                fields.forEach((field, index) => {
                  const element = document.querySelector(".spz_t1014 " + field);
                  if (element) {
                    element.tabIndex = index + 1;
                  }
                });

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

                document
                  .querySelector(".spz_t1014 .formWrapper .industry")
                  .after(
                    document.querySelector(
                      ".spz_t1014 .formWrapper .subIndustry"
                    )
                  );

                var styleCity = window.getComputedStyle(
                  document.querySelector(
                    ".spz_t1014 .formWrapper form .form-field.city"
                  )
                );

                if (
                  document.querySelector(
                    ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
                  )
                ) {
                  if (
                    document.querySelectorAll("form .form-field.state").length >
                    0
                  ) {
                  } else {
                    document.querySelector(
                      "form .form-field.country"
                    ).style.maxWidth = "100%";
                    document.querySelector(
                      "form .form-field.country"
                    ).style.flexBasis = "100%";
                  }
                }

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
                    var formField = selectFieldIndustry.closest(
                      ".MuiGridLegacy-root"
                    );
                    var isExpanded =
                      selectFieldIndustry.getAttribute("aria-expanded");
                    if (isExpanded) {
                      formField.classList.add("active", "typing");
                    }
                  });
              }
            );
          }
        }
        detectIndustryFieldChanges();

        // After new control changes check for fields parent Element for any removal or new injection
        observeElementChanges(
          ".spz_t1014 .formWrapper .MuiGridLegacy-container",
          "childList",
          function (mutation) {
            if (
              document.querySelectorAll(
                "form .form-field.industry div[aria-haspopup]"
              ).length < 1 &&
              window.innerWidth >= 960
            ) {
              document
                .querySelector(
                  "form .MuiInputBase-root .MuiInputBase-input#industry"
                )
                .closest(".MuiGridLegacy-root")
                .classList.add("industry", "form-field");
              document.querySelector(
                "form .form-field.industry label"
              ).innerText = "Industry";
              fieldsStatesLogic(
                document.querySelector(
                  ".formWrapper .MuiGridLegacy-item div#industry"
                )
              );
              handleDesktopSelectClasses(
                document.querySelectorAll(
                  ".formWrapper .MuiGridLegacy-item div#industry"
                )
              );

              detectIndustryFieldChanges();
            }

            if (
              document.querySelectorAll(
                ".spz_t1014 .formWrapper form .form-field.industry"
              ).length < 1 &&
              window.innerWidth < 960
            ) {
              document
                .querySelector("form .MuiInputBase-root select#industry")
                .closest(".MuiGridLegacy-root")
                .classList.add("industry", "form-field");
              document.querySelector(
                "form .form-field.industry label"
              ).innerText = "Industry";
              fieldsStatesLogic(
                document.querySelector(
                  ".formWrapper .MuiGridLegacy-item select#industry"
                )
              );
              initialIndustryTabletOnChange();
            }
          }
        );

        // Detecting changes in title field
        if (
          document.querySelectorAll(".form-field.Title__c div[aria-haspopup]")
            .length > 0
        ) {
          observeElementChanges(
            ".form-field.Title__c div[aria-haspopup]",
            "childList",
            function (mutation) {
              if (mutation.target.textContent == "Other") {
                var titleInterval = setInterval(function () {
                  // Your wait for element logic here
                  if (document.querySelector("#Title")) {
                    clearInterval(titleInterval);
                    document
                      .querySelector(".MuiInputBase-root #Title")
                      .closest(".MuiGridLegacy-root").style.display = "none";
                    var elm = document.querySelector("#Title");
                    const capitalizeAndDispatch = function (e) {
                      // Remove the event listener to prevent infinite loop
                      elm.removeEventListener("input", capitalizeAndDispatch);
                      // Capitalize value
                      let capitalized =
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1);
                      // Update the value using the native setter
                      setNativeValue(elm, "Other");
                      // Dispatch the React-friendly 'input' event
                      elm.dispatchEvent(new Event("input", { bubbles: true }));
                      // Re-attach the event listener
                      elm.addEventListener("input", capitalizeAndDispatch);
                    };
                    elm.addEventListener("input", capitalizeAndDispatch);
                    const el = document.querySelector("#Title");
                    el.value = "New Value";
                    el.dispatchEvent(new Event("input", { bubbles: true }));
                  }
                });
              }
            }
          );
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

        // Add states classes in input fields
        document
          .querySelectorAll(
            'div[data-testid="childContainer"] input.MuiOutlinedInput-input, div[data-testid="childContainer"] div[aria-haspopup="listbox"], .MuiNativeSelect-select, Select'
          )
          .forEach(function (element) {
            fieldsStatesLogic(element);
          });

        function fieldsStatesLogic(element) {
          // var inputWrapper = element.closest('.MuiGridLegacy-root')
          var inputWrapper = element.closest(".MuiGridLegacy-root");

          // Add click event listener
          element.addEventListener("focus", function () {
            inputWrapper.classList.add("active");
            inputWrapper.classList.add("typing");
          });
          element.addEventListener("change", function () {
            inputWrapper.classList.add("active");
            inputWrapper.classList.add("typing");
          });
          element.addEventListener("input", function () {});

          // Add blur event listener
          element.addEventListener("blur", function () {
            inputWrapper.classList.remove("typing");
            if (element.id == "How_Did_You_Hear_About_Geotab__select") {
              document.querySelector(
                "#How_Did_You_Hear_About_Geotab__c"
              ).value = element.value;
            }
            if (element.value && element.value.trim() !== "") {
              if (element.id == "country" && element.value.trim() !== "") {
                document
                  .querySelector(".submitWrapper")
                  .closest(".MuiGridLegacy-root")
                  .classList.add("state");
              }
              inputWrapper.classList.add("active");
            } else {
              inputWrapper.classList.remove("active");
            }
            inputWrapper.classList.remove("error");
          });

          if (element.getAttribute("aria-haspopup") == "listbox") {
            element = element.nextElementSibling;
          }

          // Add check for existing value on page load
          if (element.value && element.value.trim() !== "") {
            inputWrapper.classList.add("active");
          }
        }

        // Checking when all input fields aria-expanded will be changed to hangle active typing classes

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
                  var newValue = targetElement.getAttribute("aria-expanded");

                  if (targetElement.getAttribute("aria-expanded") == "true") {
                    targetElement
                      .closest(".MuiGridLegacy-root")
                      .classList.add("active", "typing");
                  } else {
                    targetElement
                      .closest(".MuiGridLegacy-root")
                      .classList.remove("active", "typing");
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
          ".form-field.country select#country"
        );
        if (countrySelect) {
          countrySelect.addEventListener("change", function (event) {
            if (event.target.value == "US") {
              changeSelectOnCountryChange("State");
              document.querySelector(
                ".spz_t1014 .formWrapper form .form-field.city"
              ).style.display = "block";
              document
                .querySelector(".spz_t1014 .formWrapper form .form-field.city")
                .classList.add("active");
              document.querySelector(
                ".spz_t1014 .formWrapper form .form-field.city #city"
              ).value = "";

              var stateInterval = setInterval(function () {
                if (document.querySelector(".MuiInputBase-root #state")) {
                  clearInterval(stateInterval);
                  document
                    .querySelector(".MuiInputBase-root #state")
                    .closest(".MuiGridLegacy-root")
                    .classList.add(
                      "form-field",
                      "state",
                      "selectFieldActual",
                      "step2Field"
                    );
                  if (
                    document.querySelector(
                      ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
                    )
                  ) {
                    if (
                      document.querySelector(
                        ".spz_t1014 .formWrapper .MuiGridLegacy-item.subIndustry"
                      )
                    ) {
                      document.querySelector(
                        ".spz_t1014 .formWrapper form .form-field.country"
                      ).style.maxWidth = "calc(50% - 10px)";
                      document.querySelector(
                        ".spz_t1014 .formWrapper form .form-field.country"
                      ).style.flexBasis = "calc(50% - 10px)";
                    }
                  }
                  step2Visible();
                }
              });
            } else if (event.target.value == "CA") {
              changeSelectOnCountryChange("Province");
              document.querySelector(
                ".spz_t1014 .formWrapper form .form-field.city"
              ).style.display = "block";
              document
                .querySelector(".spz_t1014 .formWrapper form .form-field.city")
                .classList.add("active");
              document.querySelector(
                ".spz_t1014 .formWrapper form .form-field.city #city"
              ).value = "";

              var stateInterval = setInterval(function () {
                if (document.querySelector(".MuiInputBase-root #state")) {
                  clearInterval(stateInterval);
                  document
                    .querySelector(".MuiInputBase-root #state")
                    .closest(".MuiGridLegacy-root")
                    .classList.add(
                      "form-field",
                      "state",
                      "selectFieldActual",
                      "step2Field"
                    );
                  if (
                    document.querySelector(
                      ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
                    )
                  ) {
                    if (
                      document.querySelector(
                        ".spz_t1014 .formWrapper .MuiGridLegacy-item.subIndustry"
                      )
                    ) {
                      document.querySelector(
                        ".spz_t1014 .formWrapper form .form-field.country"
                      ).style.maxWidth = "calc(50% - 10px)";
                      document.querySelector(
                        ".spz_t1014 .formWrapper form .form-field.country"
                      ).style.flexBasis = "calc(50% - 10px)";
                    }
                  }
                  step2Visible();
                }
              });
            } else {
              if (
                document.querySelector(
                  ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
                )
              ) {
                if (
                  document.querySelector(
                    ".spz_t1014 .formWrapper .MuiGridLegacy-item.subIndustry"
                  )
                ) {
                  document.querySelector(
                    ".spz_t1014 .formWrapper form .form-field.city"
                  ).style.display = "block";
                  document.querySelector(
                    ".spz_t1014 .formWrapper form .form-field.country"
                  ).style.maxWidth = "calc(50% - 10px)";
                  document.querySelector(
                    ".spz_t1014 .formWrapper form .form-field.country"
                  ).style.flexBasis = "calc(50% - 10px)";
                }
              }
            }

            if (
              !document.querySelector(
                ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
              )
            ) {
              var stateInterval3 = setInterval(function () {
                if (document.querySelector("#state")) {
                  clearInterval(stateInterval3);
                  document
                    .querySelector("#state")
                    .closest(".MuiGridLegacy-root").style.display = "none";
                }
              });
              document.querySelector(
                ".spz_t1014 .formWrapper form .form-field.city"
              ).style.display = "none";
            }

            document.querySelector(
              ".spz_t1014 .How_Did_You_Hear_About_Geotab__select"
            ).style.maxWidth = "calc(50% - 10px)";
            document.querySelector(
              ".spz_t1014 .How_Did_You_Hear_About_Geotab__select"
            ).style.flexBasis = "calc(50% - 10px)";
          });
        }

        function changeSelectOnCountryChange(title) {
          setTimeout(function () {
            var elements = document.querySelector("#state");
            var label =
              elements.parentElement.parentElement.parentElement.querySelector(
                "label"
              );
            label.innerHTML = title;
            document
              .querySelector(".MuiInputBase-root #state")
              .closest(".MuiGridLegacy-root")
              .classList.add(
                "form-field",
                "state",
                "selectFieldActual",
                "step2Field"
              );
            label.parentElement.classList.add("form-label");
            elements.parentElement.parentElement.classList.add(
              "form-field__wrapper1"
            );
            // elements.querySelector("option:first-child").innerHTML = "";
            fieldsStatesLogic(elements);
            step2Visible();
          }, 200);
        }

        function initialIndustryTabletOnChange() {
          var industrySelect = document.querySelector("select#industry");
          if (industrySelect) {
            industrySelect.addEventListener("change", function () {
              var subIndustryInterval = setInterval(function () {
                if (
                  document
                    .querySelector("select#Sub_Industry__c")
                    .closest(".MuiGridLegacy-root")
                ) {
                  clearInterval(subIndustryInterval);
                  var industrySelectTablet = document.querySelector(
                    "select#Sub_Industry__c"
                  );
                  fieldsStatesLogic(industrySelectTablet);
                  industrySelectTablet
                    .closest(".MuiGridLegacy-root")
                    .classList.add("subIndustry", "form-field", "step1Field");
                  step2Visible();

                  document
                    .querySelector(
                      ".spz_t1014 .formWrapper .MuiGridLegacy-item.industry"
                    )
                    .after(
                      document.querySelector(
                        ".spz_t1014 .formWrapper .MuiGridLegacy-item.subIndustry"
                      )
                    );
                  industrySelectTablet
                    .closest(".MuiGridLegacy-root")
                    .querySelector("label").textContent = "Sub-industry";

                  var styleCity = window.getComputedStyle(
                    document.querySelector(
                      ".spz_t1014 .formWrapper form .form-field.city"
                    )
                  );

                  if (
                    document.querySelector(
                      ".spz_t1014 .formWrapper .MuiGridLegacy-container.step1Filled"
                    )
                  ) {
                    if (
                      document.querySelectorAll("form .form-field.state")
                        .length > 0
                    ) {
                    } else {
                      document.querySelector(
                        "form .form-field.country"
                      ).style.maxWidth = "100%";
                      document.querySelector(
                        "form .form-field.country"
                      ).style.flexBasis = "100%";
                    }
                  }
                }
              });
            });
          }
        }
        initialIndustryTabletOnChange();

        document
          .querySelector(".spz_t1014 .formWrapper .submitWrapper button")
          .addEventListener("click", function () {
            document.querySelector("#How_Did_You_Hear_About_Geotab__c").value =
              document.querySelector(
                ".spz_t1014 .How_Did_You_Hear_About_Geotab__select .MuiInputBase-input"
              ).value;
          });

        // Multi select for tablet logic
        // Select the elements
        function multipleRegionSelect() {
          if (
            window.innerWidth < 960 &&
            document.querySelectorAll(
              ".spz_t1014 .formWrapper select#multiple_region_select__c"
            ).length > 0 &&
            document.querySelectorAll(".activated.form-field__wrapper1")
              .length == 0
          ) {
            const multipleRegionSelect = document.querySelector(
              ".spz_t1014 .formWrapper select#multiple_region_select__c"
            );
            const options = multipleRegionSelect.options;

            // Create an array of checkbox elements based on the options
            const checkboxes = Array.from(options)
              .map(
                (option) => `
            <li>
              <label class="regionDropdownLabels">
                <input type="checkbox" value="${option.value}" name="city" />
                <p>${option.text}</p>
              </label>
            </li>
          `
              )
              .join("");

            // Insert the generated checkboxes after the form-field__wrapper1
            if (
              document.querySelectorAll(".activated.form-field__wrapper1")
                .length == 0
            ) {
              document
                .querySelector(
                  ".spz_t1014 .formWrapper .form-field.multiple_region_select__c .MuiInputBase-root"
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
            }

            const checkboxDropdown = document.querySelector(
              ".spz_t1014 .formWrapper .checkbox-dropdown"
            );
            const dropdownList = document.querySelector(
              ".spz_t1014 .formWrapper .checkbox-dropdown ul"
            );

            // Add click event listener to checkbox-dropdown
            checkboxDropdown.addEventListener("click", function (event) {
              if (!this.classList.contains("is-active")) {
                this.classList.add("is-active");
                this.closest(".MuiGridLegacy-root").classList.add(
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
                    ".spz_t1014 .formWrapper .optionsSelected"
                  ).length > 0
                ) {
                  if (
                    document.querySelector(
                      ".spz_t1014 .formWrapper .optionsSelected"
                    ).value !== ""
                  ) {
                    checkboxDropdown
                      .closest(".MuiGridLegacy-root")
                      .classList.remove("typing");
                  } else {
                    checkboxDropdown
                      .closest(".MuiGridLegacy-root")
                      .classList.remove("active", "typing");
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
                const option = Array.from(multipleRegionSelect.options).find(
                  (opt) => opt.value === checkbox.value
                );
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
                ".spz_t1014 .formWrapper .optionsSelected"
              );
              if (optionsSelectedParagraph) {
                optionsSelectedParagraph.value = selectedOptionsText;
              }
            });
          }
        }
        multipleRegionSelect();

        document
          .querySelector(
            '.spz_t1014 .formSection .formWrapper button[type="submit"]'
          )
          .addEventListener("click", function () {
            var allFieldsFilled = 0;
            var checkfields = document.querySelectorAll(
              '.spz_t1014 .formWrapper .step2Field input.MuiSelect-nativeInput:not([placeholder="Select at least two options"]), .spz_t1014 .formWrapper .step2Field input.MuiInputBase-input, .spz_t1014 .formWrapper .step2Field select:not(#multiple_region_select__c)'
            );
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
                  emptyFields[0].closest(".company") ||
                  emptyFields[0].closest(".fleet_size") ||
                  emptyFields[0].closest(".country") ||
                  emptyFields[0].closest(".city") ||
                  (emptyFields[0].closest(".state") && window.outerWidth >= 960)
                ) {
                  emptyFields[0]
                    .closest(".MuiGridLegacy-root")
                    .classList.add("active", "typing");
                }
                emptyFields[0].focus();
                emptyFields[0].closest(".form-field").classList.add("error");
              }
            }
          });

        function controlDesktopDropdownActiveStates() {
          if (window.outerWidth >= 960) {
            function clickEventListener(event) {
              var inputsToCheck = document.querySelectorAll(
                ".spz_t1014 form .MuiInputBase-root .MuiSelect-select + input"
              );
              inputsToCheck = Array.from(inputsToCheck);
              if (
                !event.target.classList.contains("spz_t1014") &&
                !event.target.closest(".continue") &&
                !event.target.closest('button[type="submit"]') &&
                !event.target.closest(
                  'ul[aria-labelledby="multiple_region_select__c-input-label"]'
                )
              ) {
                console.log(event.target);
                inputsToCheck.forEach(function (input) {
                  if (input.value.trim() === "") {
                    console.log("Hola");
                    input
                      .closest(".MuiGridLegacy-root")
                      .classList.remove("active", "typing", "error");
                  }
                });
              }
            }
            document.body.removeEventListener("click", clickEventListener);
            document.body.addEventListener("click", clickEventListener);
          }
        }
        controlDesktopDropdownActiveStates();

        // Title tablet field
        var tabletTitle = document.querySelector("#Title__c");
        if (tabletTitle) {
          tabletTitle.addEventListener("change", function (event) {
            if (event.target.value == "Other") {
              var waitForElement = setInterval(() => {
                if (document.querySelector("#Title")) {
                  clearInterval(waitForElement);
                  document
                    .querySelector("#Title")
                    .closest(".MuiGridLegacy-root")
                    .classList.add("subTitleField");
                  var elm = document.querySelector("#Title");
                  const capitalizeAndDispatch = function (e) {
                    // Remove the event listener to prevent infinite loop
                    elm.removeEventListener("input", capitalizeAndDispatch);
                    // Capitalize value
                    let capitalized =
                      e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1);
                    // Update the value using the native setter
                    setNativeValue(elm, "Other");
                    // Dispatch the React-friendly 'input' event
                    elm.dispatchEvent(new Event("input", { bubbles: true }));
                    // Re-attach the event listener
                    elm.addEventListener("input", capitalizeAndDispatch);
                  };
                  elm.addEventListener("input", capitalizeAndDispatch);
                  const el = document.querySelector("#Title");
                  el.value = "New Value";
                  el.dispatchEvent(new Event("input", { bubbles: true }));

                  document
                    .querySelector(".MuiInputBase-root #Title")
                    .closest(".MuiGridLegacy-root").style.display = "none";
                }
              });
            }
          });
        }

        // Downfunnel Main Code
        function spiralyze_conversion_tag() {
          var checkHiddenField = setInterval(function () {
            var hiddenField = document.querySelector("input#AB_name__c");
            if (hiddenField) {
              clearInterval(checkHiddenField);
              var conversionTag = getCookie("spiralyze_conversion_tag_demo");
              console.log(conversionTag);
              if (conversionTag) {
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
        hiddenValue("spiralyze_conversion_tag_demo", "1014_V2");
        spiralyze_conversion_tag();
      }

      // Privacy Policy Checkbox
      if (!document.querySelector("checkboxPrivacy")) {
        var containerInterval = setInterval(function () {
          if (
            document.querySelector(
              ".spz_t1014 .formWrapper .privacyPolicy .MuiCheckbox-root"
            )
          ) {
            clearInterval(containerInterval);
            document
              .querySelector(
                ".spz_t1014 .formWrapper .privacyPolicy .MuiCheckbox-root"
              )
              .insertAdjacentHTML(
                "beforeend",
                `<div class="checkboxPrivacy"></div>`
              );
          }
        });
      }

      // Test issue resolve
      document
        .querySelector(
          ".spz_t1014 .formWrapper .MuiGridLegacy-item.How_Did_You_Hear_About_Geotab__select label"
        )
        ?.classList.add("css-1mca1sr", "css-3i3knw");
    }, 1000);
  }
})();
