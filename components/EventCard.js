export default function EventCard() {
  return (
    <div class="lg:flex shadow rounded-lg border  border-gray-400">
      <div class="bg-yellow-50 py-6 px-4 block h-full shadow-inner rounded-l-lg">
        <div class="text-center tracking-wide">
          <div class="text-black font-bold text-4xl ">24</div>
          <div class="text-black font-normal text-2xl">Sept</div>
        </div>
      </div>
      <div class="w-full  lg:w-11/12 xl:w-full px-1 py-5 lg:px-2 lg:py-2 tracking-wide">
        <div class="flex flex-row lg:justify-start justify-center">
          <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
            <i class="far fa-clock"></i> 🕚 11:00 AM - 5:00 PM
          </div>
        </div>
        <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
          Fawkner Community Sports Hall
        </div>

        <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
        📍 77 Jukes Road, Fawkner VIC 3060
        </div>
        <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
        🎟 Adult: $40 | Individual $15
        </div>
      </div>
      <div class="flex flex-row items-center w-full lg:w-1/3  lg:justify-end justify-center px-2 py-4 lg:px-0">
        <span class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
          UPCOMING
        </span>
      </div>
    </div>
  );
}
