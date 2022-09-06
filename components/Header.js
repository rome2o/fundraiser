import React from "react";
import cx from "classnames";
export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header class="fixed top-0 z-50 w-full bg-green-500 py-4">
      <div class="container max-w-screen-xl mx-auto px-4  left-auto right-auto">
        <nav class="flex-wrap lg:flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="images/logo.png"
              class="max-w-xs"
              style={{ maxWidth: "300px" }}
              alt="Logo"
            />

            <button
              class="lg:hidden w-10 h-10 ml-auto flex items-center justify-center border border-blue-500 text-blue-500 rounded-md"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i data-feather="menu"></i>
            </button>
          </div>

          {/* <ul
            class={cx(
              { hidden: !navbarOpen, flex: navbarOpen },
              "lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-14"
            )}
          >
            <li class="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Home</a>
            </li>
            <li class="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Charities</a>
            </li>
            <li class="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Membership</a>
            </li>
            <li class="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">About us</a>
            </li>
          </ul> */}

          <div
            class={cx(
              "lg:flex flex-col md:flex-row md:items-center text-center md:space-x-6",
              { hidden: !navbarOpen, flex: navbarOpen }
            )}
          >
            <a
              href="#"
              class="px-6 py-4  text-yellow-400 border-yellow-400 border font-semibold text-lg rounded-xl hover:bg-yellow-400 hover:text-black transition ease-in-out duration-500 mb-5 md:mb-0"
            >
              Join community
            </a>
            <a
              href="https://www.eventbrite.com.au/e/pakistan-floods-fund-raising-fawkner-community-sports-hall-tickets-414411625327"
              target="_blank"
              class="px-6 py-4 bg-yellow-400 text-black font-semibold text-lg rounded-xl hover:bg-yellow-500 transition ease-in-out duration-500 mb-5 md:mb-0"
            >
              Buy tickets
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
