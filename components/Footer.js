import {BsFacebook} from 'react-icons/bs'
import {SiEventbrite} from 'react-icons/si'
export default function Footer() {
  return (
    <footer class="bg-gray-50 py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
        <div class="flex flex-col lg:flex-row  items-center justify-center">
            <div class="space-y-7 mb-10 lg:mb-0">
                <div class="flex justify-center lg:justify-start">
                    <img src="images/logo.png" className="max-w-xs" alt="Image" />
                </div>
                <p class="font-light text-gray-400 text-md md:text-lg text-center ">Join our hands to raise the funds <br /> by common people, for common people.</p>
                <div class="flex items-center justify-center  space-x-5">
                    <a href="#" class="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-info hover:text-white transition ease-in-out duration-500">
                        <BsFacebook />
                    </a>
                    <a href="#" class="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-info hover:text-white transition ease-in-out duration-500">
                        <SiEventbrite />
                    </a>
                </div>
            </div>

            {/* <div class="text-center lg:text-left space-y-3 mb-10 lg:mb-0">
                <h4 class="font-semibold text-gray-900 text-lg md:text-2xl">Quick links</h4>
                <a href="#" class="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300">Facebook event</a>
                <a href="https://www.eventbrite.com.au/e/pakistan-floods-fund-raising-fawkner-community-sports-hall-tickets-414411625327" target="_blank" class="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300">Eventbrite</a>
                <a href="https://wa.me/61421819627" target="_blank" class="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300">Chat on Whatsapp</a>
            </div> */}

        </div>
    </div> 

</footer>
  );
}
