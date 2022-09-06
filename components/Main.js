import SimpleSlider from "./Slider";
import EventCard from "./EventCard";

export default function Main() {
  return (
    <div class="container max-w-screen-xl mx-auto px-4  items-center mt-28 py-20 border-b-2 border-dashed border-gray-300 ">
      <div class="flex flex-col lg:flex-row justify-between lg:space-x-20 items-center">
        <div class="text-center lg:text-left">
          <h1 class="font-semibold text-gray-900 text-3xl md:text-6xl leading-normal mb-6">
            Support <strong>flood victims</strong> in Pakistan
          </h1>

          <p class="font-medium text-gray-700 text-lg md:text-2xl leading-normal mb-12">
            Join our hands at the moment of need to help <br />{" "}
            flood affectees in Pakistan. 100% of profit goes to donation.
          </p>
          <EventCard />
          <a 
          href="https://www.eventbrite.com.au/e/pakistan-floods-fund-raising-fawkner-community-sports-hall-tickets-414411625327"
          target="_blank"
          class="mt-4 px-6 py-4 bg-info block text-center w-full font-semibold text-white text-lg rounded-xl bg-green-500 hover:bg-green-600 transition ease-in-out duration-500">
            Grab your tickets
          </a>
        </div>

        <div class="max-w-xl hidden lg:block">
        <SimpleSlider />
        </div>
        
      </div>
      
    </div>
  );
}
