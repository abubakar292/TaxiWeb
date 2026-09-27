/* =====================================================
   KHYBER-E-TAXI JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


mobileMenuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});


/* =====================================================
   BOOKING FORM
===================================================== */

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Get form values */

    const pickup =
        document.getElementById("pickup").value.trim();

    const destination =
        document.getElementById("destination").value.trim();

    const date =
        document.getElementById("rideDate").value;

    const time =
        document.getElementById("rideTime").value;

    const customerName =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();


    /* Check required information */

    if (
        !pickup ||
        !destination ||
        !date ||
        !time ||
        !customerName ||
        !phone
    ) {

        alert("Please fill in all booking details.");

        return;

    }


    /* Format date */

    const formattedDate =
        new Date(date + "T00:00:00")
            .toLocaleDateString("en-PK", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });


    /* Create WhatsApp message */

    const message =

`🚕 *NEW KHYYBER-E-TAXI RIDE REQUEST*

👤 *Customer:* ${customerName}

📞 *Phone:* ${phone}

📍 *Pickup:* ${pickup}

🏁 *Destination:* ${destination}

📅 *Date:* ${formattedDate}

⏰ *Time:* ${time}

Please confirm my ride.

Thank you.
Khyber-E-Taxi`;


    /*
       IMPORTANT:

       Replace this number with your
       actual WhatsApp number.

       Country code:
       Pakistan = 92

       Example:
       0300-1234567

       becomes:

       923001234567
    */

    const whatsappNumber =
        "923338268708";


    /* Create WhatsApp URL */

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    /* Open WhatsApp */

    window.open(
        whatsappURL,
        "_blank"
    );

});


/* =====================================================
   SET MINIMUM DATE
===================================================== */

const dateInput =
    document.getElementById("rideDate");


const today =
    new Date();


const year =
    today.getFullYear();


const month =
    String(today.getMonth() + 1)
        .padStart(2, "0");


const day =
    String(today.getDate())
        .padStart(2, "0");


dateInput.min =
    `${year}-${month}-${day}`;


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("currentYear")
    .textContent =
    new Date().getFullYear();


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document.querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });
Displaying