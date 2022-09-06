export default function LogoCloud(){
    return (
        <div class="py-16 ">
        <div class="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
            <div class="m-auto text-center lg:w-7/12">
                <h2 class="text-2xl text-gray-800 font-bold md:text-4xl">Supported by</h2>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
                <div class="p-4">
                    <img src="images/salamfest.png" class="w-40 mx-auto" alt="" />
                </div>
                <div class="p-4">
                    <img src="images/sindhisangat.png" class="w-40  mx-auto" alt="" />
                </div>
                <div class="p-4">
                    <img src="images/paa.png" class="w-40  mx-auto" alt="" />
                </div>
            </div>
        </div>

        <div class="text-center mt-6">
            <a class="px-6 py-4 bg-info inline font-semibold text-green-500 border-green-500 border text-lg rounded-xl  hover:bg-green-600 hover:text-white transition ease-in-out duration-500" href="mailto:samar.ansari@gmail.com">
                Become a sponsor
            </a>
          </div>
    </div>
    );
}