import { useContext } from "react";
import ProductsCategoryArea from'../../components/advertsarea/advertsarea';
import { CartContext } from "../../context/CartContext";

const Home = () => {
  

  return  <>          

            {/* Hero Section  */}
            <section className='hero'>
                {/* flex container  */}
                <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
                {/* left item  */}
                <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                    <h1 className='max-w-full text-4xl font-bold text-center md:text-7xl md:text-left'>
                    Make life different.
                    <br/>
                    Your life --- a ride.
                    </h1>
                    <p className='max-w-full text-center text-darkGrayishBlue md:text-left'>
                    whether your walking, driving, cycling, or taking public transit, watches makes it easy every step of the way
                    </p>
                    <div className='max-w-full justify-center md:justify-left'>
                    <a  href='/' className=' py-3 px-8 pt-2 text-white rounded-md bg-brightBlue baseline hover:bg-brightRedLight '>Buy $99.89</a>
                    </div>
                </div>

                {/* Image  */}
                <div className='md:w-1/2'>
                    <img src='/img/core-img/watch.jpg' className=' items-center justify-center' alt='placeholder'/>
                </div>
                </div>
            </section>
            
            <ProductsCategoryArea/>

            {/* ALL CATEGORIES  */}
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="grid gap-8 row-gap-5 md:grid-cols-2">
                    <div class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                    <div class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    <div class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                    <div class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    <div class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                    <div class="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                        <div class="mb-6 mr-6 lg:mb-0">
                            <div class="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                                <svg class="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between flex-grow">
                        <div>
                            <h6 class="mb-2 font-semibold leading-5">
                            The quick, brown fox jumps over a very lazy dog
                            </h6>
                            <p class="mb-2 text-sm text-gray-900">
                            Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut.
                            </p>
                        </div>
                        <a href="/" aria-label="" class="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                        </div>
                    </div>
                    </div>
                    <div class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                    <div class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    <div class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                    <div class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    <div class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                    <div class="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                        
                        <div class="flex flex-col justify-between flex-grow">
                        <div>
                            <h6 class="mb-2 font-semibold leading-5">
                                Disrupt inspire and think tank, social
                            </h6>
                            <p class="mb-2 text-sm text-gray-900">
                                A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear. We never had the chance to.
                            </p>
                        </div>
                        <a href="/" aria-label="" class="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                        </div>
                        <div class="mb-6 mr-6 lg:mb-0">
                        <div class="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                            <svg class="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>            

            {/* Featured Products Section Start  */}
            <div class="container px-4 mx-auto mt-20 space-y-12 md:space-y-0 md:flex-row">
                <h2 class="text-4xl font-bold mb-10 tracking-tight text-gray-900">Featured Products</h2>

                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                       
                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>
                            
                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>

                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>

                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>

                </div>
            </div>
            
            {/* Special Offer Banner */}
            <section class="py-24 lg:py-32 overflow-hidden">
                        <div class="container px-4 mx-auto">
                            <div class="overflow-hidden rounded-xl">
                             <div class="flex flex-wrap ">
                                <div class="flex-auto md:w-1/3 ">
                                    <div className={` p-8 mt-4 rounded-md bg-[#1e293b] flex flex-col ease-linear duration-300 md:flex-row-reverse`} style={{height: `450px`}}>
                                        <div className="flex flex-col h-full w-full mr-2 rounded-2xl items-center justify-center">
                                            <h1 className="m-2 text-3xl font-bold text-white">
                                                Special Offer
                                            </h1>

                                            <div className="flex flex-col justify-around flex-wrap">
                                                <div className="flex flex-row items-center m-2">
                                                    <h1 className="text-[#c3bfbf]">New Apple Iphone 13 Pro Blue</h1>
                                                </div>
                                            </div>

                                            <div className="flex flex-row items-center text-[#c3bfbf]">
                                                <div className="items-center justify-center md:m-2 m-auto">
                                                    <button className="mt-8 shadow-md shadow-[#93c5fd]  pt-2 pb-2 pl-4 pr-4 rounded-md flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                                                        <h1 className="justify-center text-white text-xl font-semibold ">
                                                            09
                                                        </h1>
                                                    </button>
                                                    hours
                                                </div>
                                            :
                                                <div className="items-center justify-center text-[#c3bfbf] md:m-2 m-auto">
                                                    <button className=" mt-8 shadow-md shadow-[#93c5fd]  pt-2 pb-2 pl-4 pr-4 rounded-md flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                                                        <h1 className="justify-center text-white text-xl font-semibold ">
                                                            44
                                                        </h1>
                                                    </button>
                                                    minutes
                                                </div>
                                            :
                                                <div className="items-center justify-center text-[#c3bfbf] md:m-2 m-auto">
                                                    <button className="mt-8 shadow-md shadow-[#93c5fd]  pt-2 pb-2 pl-4 pr-4 rounded-md flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                                                        <h1 className="justify-center text-white text-xl font-semibold ">
                                                            12
                                                        </h1>
                                                    </button>
                                                    seconds
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-around flex-wrap">
                                                <div className="flex flex-row items-center">
                                                    <h1 className="text-[#c3bfbf]">Online Shop Only</h1>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="flex-auto md:w-2/3">
                                        <div className={`pr-0 pb-0 mt-4 md:ml-4 rounded-md bg-[#f1f5f9] h-full flex flex-col ease-linear duration-300 md:flex-row-reverse`} style={{height: `450px`}}>
                                            <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
                                                <div className="h-full w-full relative ">
                                                <img
                                                    src={'https://res.cloudinary.com/autoduka/image/upload/v1685969657/e0970yfj32yfruwz6vb5.jpg'}
                                                    alt="thumbnail"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className='h-full w-full rounded-md'
                                                />
                                                </div>
                                            </div>

                                            <div className="flex flex-col h-full w-full mr-2  bg-gray-100 rounded-2xl items-left justify-center">
                                                <h1 className="m-2 text-3xl font-bold dark:text-white">
                                                    Apple Iphone 13
                                                </h1>

                                                <div className="flex flex-col justify-around flex-wrap">
                                                    <div className="flex flex-row items-center m-2">
                                                        <h1 className="dark:text-[#c3bfbf]">The most advanced duel camera system ever. Lightning-fast A15 Bionic Chip</h1>
                                                    </div>
                                                </div>

                                                <div className="flex flex-row">
                                                    <div className="items-center justify-center">
                                                        <button className="md:m-2 m-auto mt-8 shadow-md shadow-[#93c5fd]  pt-2 pb-2 pl-4 pr-4 rounded-md flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                                                            <h1 className="justify-center dark:text-white text-xl font-semibold ">
                                                                128
                                                            </h1>
                                                        </button>
                                                    </div>
                                                
                                                    <div className="items-center justify-center">
                                                        <button className="md:m-2 m-auto mt-8 shadow-md shadow-[#93c5fd]  pt-2 pb-2 pl-4 pr-4 rounded-md flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                                                            <h1 className="justify-center dark:text-white text-xl font-semibold ">
                                                                256
                                                            </h1>
                                                        </button>
                                                    </div>
                                                
                                                    <div className="items-center justify-center">
                                                        <button className="md:m-2 m-auto mt-8 shadow-md shadow-[#93c5fd]  pt-2 pb-2 pl-4 pr-4 rounded-md flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                                                            <h1 className="justify-center dark:text-white text-xl font-semibold ">
                                                                512
                                                            </h1>
                                                        </button>
                                                    </div>

                                                    <div className="items-center justify-center">
                                                        <button className="md:m-2 m-auto mt-8 shadow-md shadow-[#93c5fd]  pt-2 pb-2 pl-4 pr-4 rounded-md flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                                                            <h1 className="justify-center dark:text-white text-xl font-semibold ">
                                                                1TB
                                                            </h1>
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                                <div className='max-w-full justify-center md:justify-left m-2'>
                                                        <a  href='/' className=' py-3 px-8 pt-2 text-white rounded-md bg-brightBlue baseline hover:bg-brightRedLight '>Buy $99.89</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>

            {/* Special Offer Prodcuts */}
            <div class="container px-4 mx-auto mt-20 space-y-12 md:space-y-0 md:flex-row">
                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">                       
                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>
                            
                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>

                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>

                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>

                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>
                            
                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>

                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>

                            <div class="group relative">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                </div>
                                <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                    <a href="/">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">Black</p>
                                </div>
                                <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>

                </div>
            </div>

            {/* Reviews Section End  */}  
            <section class="bg-white">
                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <h2 class="text-left text-4xl font-bold tracking-tight sm:text-5xl">
                        Popular Reviews
                    </h2>

                    <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                        <blockquote  class="flex h-full flex-col justify-between rounded-lg bg-gray-100 p-8" >
                            <div>
                                <div class="flex gap-0.5 text-green-500">
                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <div class="mt-4">
                                    <p class="text-md font-bold text-gray-600 sm:text-3xl">
                                        Stayin' Alive
                                    </p>

                                    <p class="mt-4 leading-relaxed text-gray-500">
                                        No, Rose, they are not breathing. And they have no arms or
                                        legs … Where are they? You know what? If we come across
                                        somebody with no arms or legs, do we bother resuscitating
                                        them? I mean, what quality of life do we have there?
                                    </p>
                                </div>
                            </div>

                            <footer class="mt-8 text-sm text-gray-500">&mdash; Michael Scott </footer>
                        </blockquote>

                        <blockquote  class="flex h-full flex-col justify-between rounded-lg bg-gray-100 p-8" >
                            <div>
                                <div class="flex gap-0.5 text-green-500">
                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <div class="mt-4">
                                    <p class="text-md font-bold text-gray-600 sm:text-3xl">
                                        Stayin' Alive
                                    </p>

                                    <p class="mt-4 leading-relaxed text-gray-500">
                                    No, Rose, they are not breathing. And they have no arms or
                                    legs … Where are they? You know what? If we come across
                                    somebody with no arms or legs, do we bother resuscitating
                                    them? I mean, what quality of life do we have there?
                                    </p>
                                </div>
                            </div>

                            <footer class="mt-8 text-sm text-gray-500">   &mdash; Michael Scott          </footer>
                        </blockquote>

                        <blockquote  class="flex h-full flex-col justify-between rounded-lg bg-gray-100 p-8" >
                            <div>
                                <div class="flex gap-0.5 text-green-500">
                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>

                                    <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <div class="mt-4">
                                    <p class="text-md font-bold text-gray-600 sm:text-3xl">
                                        Stayin' Alive
                                    </p>

                                    <p class="mt-4 leading-relaxed text-gray-500">
                                        No, Rose, they are not breathing. And they have no arms or
                                        legs … Where are they? You know what? If we come across
                                        somebody with no arms or legs, do we bother resuscitating
                                        them? I mean, what quality of life do we have there?
                                    </p>
                                </div>
                            </div>

                            <footer class="mt-8 text-sm text-gray-500">&mdash; Michael Scott </footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            <section>
                <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                            <div class="grid p-6 bg-blue-500 rounded place-content-center sm:p-8">
                                <div class="max-w-md mx-auto text-center lg:text-left">
                                    <header>
                                        <h2 class="text-xl font-bold text-white sm:text-3xl">Warranty</h2>

                                        <p class="mt-4 text-white">
                                            The store guarantee gives you one year standard warranty cover from the purchase date of your device Contact support for more information!
                                        </p>
                                    </header>
                                </div>
                            </div>

                            <div class="lg:col-span-2 lg:py-8 bg-gray-100">
                                <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
                                    <div className="flex flex-col items-center max-w-2xl md:px-8">
                                        <div className="max-w-xl mb-10 md:mx-auto sm:text-left lg:max-w-2xl md:mb-12">
                                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                                Sign up to receive special offers, news and great events.
                                            </h2>
                                        </div>
                                        <form className="flex flex-col items-center w-full mb-4 md:flex-row">
                                            <input
                                                    placeholder="Name"
                                                    required=""
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                />
                                            <input
                                                    placeholder="Email"
                                                    required=""
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                />
                                            <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                >
                                                Subscribe
                                            </button>
                                        </form>
                                        <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-left">
                                            I agree to the privacy policy, terms and conditions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>


            
        
        </>
};

export default Home;
