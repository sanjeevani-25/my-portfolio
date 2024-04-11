import React, { useRef, useState } from "react";
import ContactMeSVG from "../assets/contact-me.svg";
import emailjs from "@emailjs/browser";

function Contact() {
  let textboxclass = "flex flex-col gap-2";
  let inputboxclass =
    "h-8 bg-bggrey/3 border border-bggrey/50 text-txtblack/80 text-sm rounded-md focus:ring-bggrey/20 focus:border-bgblack/80 block";
  // let inputboxclass = " border-solid border-radius-8";

  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_60xpmwj", "template_g5u5d5k", form.current, {
        publicKey: "PFXH-9zBCAn9d2T63",
      })
      .then(
        () => {
          form.current.reset();
          console.log("SUCCESS!");
          setIsSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      class=" w-full min-h-screen max-h-fit overflow-visible flex flex-col items-center px-12 pt-24"
    >
      <h1 class="text-center text-4xl font-bold text-txtblack">
        Let's Connect
      </h1>
      <div class="w-full flex items-center justify-center m-auto">
        <div class="md:w-1/2 hidden md:block">
          <img src={ContactMeSVG} alt="" class="m-auto w-3/4 lg:w-1/2" />
        </div>
        <div class="w-1/2 flex justify-center">
          <form
            ref={form}
            className="flex flex-col gap-4 justify-center"
            onSubmit={sendEmail}
          >
            <div class={textboxclass}>
              <label htmlFor="name">Full Name</label>
              <input
                name="user_name"
                class={inputboxclass}
                type="text"
                id="name"
                required
              />
            </div>
            <div class={textboxclass}>
              <label htmlFor="email">Email</label>
              <input
                name="user_email"
                class={inputboxclass}
                type="email"
                id="email"
                required
              />
            </div>
            <div class={textboxclass}>
              <label htmlFor="email-subject">Subject</label>
              <input
                name="user_subject"
                class={inputboxclass}
                type="text"
                id="email-subject"
                required
              />
            </div>
            <div class={textboxclass}>
              <label htmlFor="msg">Leave your message here.</label>
              <textarea
                name="message"
                class="bg-bggrey/3 border border-bggrey/50 text-txtblack/80 text-sm rounded-md focus:ring-bggrey/20 focus:border-bgblack/80 block"
                id="msg"
                rows="4"
                cols="40"
              />
            </div>
            <button
              type="submit"
              value="Send"
              className="w-fit h-fit bg-bgblack text-txtwhite rounded-md px-4 py-2 m-auto"
            >
              Submit
            </button>
            {isSuccess && (
              <p class="text-green-500 text-md text-center">
                Form submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
