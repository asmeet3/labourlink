import React from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const DisplayRazopay = async (amount, onPaymentSuccess) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Failed to load payment!");
    return;
  }

  const options = {
    key: "rzp_test_bj4RGD5pPxGljN",
    currency: "INR",
    amount: amount * 100,
    name: "Labour Service Charge",
    description: "Hiring finished!",
    handler: function (response) {
      onPaymentSuccess(response.razon_payment_id);
    },
    prefill: {
      name: "Labour Link",
    },

    // if(response.razor_payment_id)
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const sendEmailToLabour = async (
  toEmail,
  toName,
  userName,
  userPhone,
  userAddress,
  userCity,
  userState
) => {
  await emailjs
    .send(
      "service_h4fwbhe",
      "template_ry2968n",
      {
        to_email: toEmail,
        to_name: toName,
        user_name: userName,
        user_phone: userPhone,
        user_location: `${userAddress}, ${userCity}, ${userState}`,
      },
      "v7pt3-_zDfaVn6JoN"
    )
    .then((result) => {
      console.log(`Email sent`, result.text);
    })
    .catch((err) => {
      console.log(err.text);
    });
};

const sendEmailToUser = async (
  toEmail,
  toName,
  labourName,
  labourCharge,
  labourDesignation,
  labourAadhar,
  paymentId
) => {
  await emailjs
    .send(
      "service_h4fwbhe",
      "template_irdvxv9",
      {
        to_email: toEmail,
        to_name: toName,
        labour_name: labourName,
        labour_charge: labourCharge,
        labour_designation: labourDesignation,
        labour_aadhar: labourAadhar,
        payment_id: paymentId,
      },
      "v7pt3-_zDfaVn6JoN"
    )
    .then((result) => {
      console.log(`Email sent`, result.text);
    })
    .catch((err) => {
      console.log(err.text);
    });
};

const Labour = (data) => {
  const { user } = useFirebase();
  const navigate = useNavigate();

  const paymentHandle = () => {
    if (!user) {
      console.log("no user");
      navigate("/login");
    } else {
      console.log("user exists, proceding to payment....");
      const onPaymentSuccess = async (paymentId) => {
        sendEmailToUser(
          user.email,
          user.name,
          data.data.name,
          data.data.charge,
          data.data.designation,
          data.data.aadhaar,
          paymentId
        );

        sendEmailToLabour(
          data.data.email,
          data.data.name,
          user.name,
          user.phone,
          user.address,
          user.city,
          user.state
        );
        // Send Email From here
      };
      DisplayRazopay(data.data.charge, onPaymentSuccess);
    }
    // Send Message here
  };

  return (
    <div className="rectangle1">

      <div class="labourcard">
        <div class="labourphoto">
          <div className="eclipse-1">
            <img src={data.data.imageUrl ?? "./assets/person-circle.svg"}></img>
          </div>
        </div>
        <div class="labourcardtext">
          <div className="labourdetails">
            <p style={{ display: "flex", gap: "1rem", fontFamily: "Montserrat" }}>
              Name: {data.data.name}
            </p>
            <p style={{ display: "flex", gap: "1rem", fontFamily: "Montserrat" }}>
              Designation: {data.data.designation}
            </p>
            <p style={{ display: "flex", gap: "1rem", fontFamily: "Montserrat" }}>
              Wages: ₹ {data.data.charge}
            </p>

            <button onClick={paymentHandle} className="rectangle2">
              Queue
            </button>
          </div>
        </div>
      </div>





    </div>
  );
};

export default Labour;
