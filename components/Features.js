import {MdFastfood} from 'react-icons/md'
import {GiGuitar, GiKidSlide} from 'react-icons/gi'

export default function Features(){
    const Feature = ({heading, text, icon, learnMore = false}) => {
        return (
            <div class="text-center">
            <div class="flex justify-center mb-6">
                <div class="w-20 py-6 flex justify-center bg-green-50 bg-opacity-30 text-green-700 rounded-xl text-4xl">
                    {icon}
                </div>
            </div>

            <h4 class="font-semibold text-lg md:text-2xl text-gray-900 mb-6">{heading}</h4>

            <p class="font-light text-gray-500 text-md md:text-xl mb-6">{text}</p>

            {learnMore && <div class="flex justify-center">
                <a href="#" class="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-info hover:text-white transition ease-linear duration-500">
                    Learn more 
                    <i data-feather="chevron-right"></i>
                </a>
            </div>}
        </div>
        );
    }
    return (
    <section class="bg-white py-16 md:mt-10">
        <div class="container max-w-screen-xl mx-auto px-4">
            <div class="text-center"><p class="font-light text-black px-4 py-2 rounded-full text-lg md:text-xl text-center uppercase mb-6 bg-yellow-400 inline-block mx-auto">EVENT DETAILS</p></div>
            <h1 class="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-10">Join us on 24th of September <br /> Fawkner Sports Hall</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <Feature heading={'Live Music'} text={'Enjoy live music from local bands of Melbourne.'} icon={<GiGuitar />} />
            <Feature heading={'Street Food'} text={'Your favourite street food is available in the event.'} icon={<MdFastfood />} />
            <Feature heading={'Kids Games'} text={'Brings your kids along, make it a day for them too.'} icon={<GiKidSlide />} />
            </div>
            <div class="text-center">
            <a class="px-6 py-4 mt-4  inline bg-info font-semibold text-white text-lg rounded-xl bg-green-500 hover:bg-green-600 transition ease-in-out duration-500" href="https://goo.gl/maps/NHqvJvzfDU48GjAV7" target="_blank">
                Get directions
            </a>
          </div>
        </div> 
    </section>
    );
}