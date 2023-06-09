import React, {useEffect, useState, useCallback, useRef, useContext, Suspense} from 'react';
import AdvertItem from'../advert/advertitem';
import { PaginationContext } from "../../context/PaginationContext";
import LoadingIndicator from "../LoadingIndicator.tsx";
import axios from "axios";
import { Link } from "react-router-dom";

const Masonry  = React.lazy(
  () => import('../masonry/masonry'));
  

const advertisements =[
    {
        "_id": "647ddafb7ddf45e7a5388012",
        "pName": "Electronics",
        "pSubCat": "Drawing board",
        "pCategory": "Bed",
        "height":"450px",
        "rangi":"#0f172a",
        "pPrice": "5000",
        "pImage": [
            {
                "publicId": "e0970yfj32yfruwz6vb5",
                "url": "https://res.cloudinary.com/autoduka/image/upload/v1685969657/e0970yfj32yfruwz6vb5.jpg",
                "_id": "647ddafb7ddf45e7a5388013"
            },
            {
                "publicId": "izkqdl5hgfruoavad1vo",
                "url": "https://res.cloudinary.com/autoduka/image/upload/v1685969658/izkqdl5hgfruoavad1vo.jpg",
                "_id": "647ddafb7ddf45e7a5388014"
            }
        ],
        "pDesc":"From Ksh 300",
        "pReviews": [],
        "createdAt": "2023-06-05T12:54:19.135Z",
        "updatedAt": "2023-06-05T12:54:19.135Z",
        "__v": 0
    },
    {
        "_id": "647ddb227ddf45e7a538801a",
        "pName": "I AM A GAMER",
        "pSubCat": "Drawing board",
        "height":"250px",
        "rangi":"#e32f70",
        "pCategory": "Bed",
        "pPrice": "5000",
        "pImage": [
            {
                "publicId": "vxd1bt1v4xbzpe0korhz",
                "url": "https://res.cloudinary.com/autoduka/image/upload/v1685969697/vxd1bt1v4xbzpe0korhz.jpg",
                "_id": "647ddb227ddf45e7a538801b"
            },
            {
                "publicId": "bxlsghfwnwwoff63toy2",
                "url": "https://res.cloudinary.com/autoduka/image/upload/v1685969697/bxlsghfwnwwoff63toy2.jpg",
                "_id": "647ddb227ddf45e7a538801c"
            }
        ],
        "pDesc":"From Ksh 300",
        "pReviews": [],
        "createdAt": "2023-06-05T12:54:58.430Z",
        "updatedAt": "2023-06-05T12:54:58.430Z",
        "__v": 0
    },
    {
        "_id": "647ddb137ddf45e7a5388016",
        "pName": "Travelling",
        "height":"250px",
        "pSubCat": "Drawing board",
        "pCategory": "Bed",
        "rangi":"#0f172a",
        "pPrice": "5000",
        "pImage": [
            {
                "publicId": "jlghg72q8mpzjlgvj7sa",
                "url": "https://res.cloudinary.com/autoduka/image/upload/v1685969681/jlghg72q8mpzjlgvj7sa.jpg",
                "_id": "647ddb137ddf45e7a5388017"
            },
            {
                "publicId": "aqnheekgjhcizubcpjjw",
                "url": "https://res.cloudinary.com/autoduka/image/upload/v1685969682/aqnheekgjhcizubcpjjw.jpg",
                "_id": "647ddb137ddf45e7a5388018"
            }
        ],
        "pDesc":"From Ksh 300",
        "pReviews": [],
        "createdAt": "2023-06-05T12:54:43.660Z",
        "updatedAt": "2023-06-05T12:54:43.660Z",
        "__v": 0
    },
    {
        "_id": "647ddb2d7ddf45e7a538801e",
        "pName": "Music & SOUND",
        "pSubCat": "Drawing board",
        "height":"450px",
        "rangi":"#0055d6",
        "pCategory": "Bed",
        "pPrice": "5000",
        "pImage": [
            {
                "publicId": "ed4ogsuiqk75ute3mras",
                "url": "https://res.cloudinary.com/autoduka/image/upload/v1685969708/ed4ogsuiqk75ute3mras.jpg",
                "_id": "647ddb2d7ddf45e7a538801f"
            },
            {
                "publicId": "nz4p6c2ppeebhkuo7qoz",
                "url": "https://res.cloudinary.com/autoduka/image/upload/v1685969706/nz4p6c2ppeebhkuo7qoz.jpg",
                "_id": "647ddb2d7ddf45e7a5388020"
            }
        ],
        "pDesc":"From Ksh 300",
        "pReviews": [],
        "createdAt": "2023-06-05T12:55:09.222Z",
        "updatedAt": "2023-06-05T12:55:09.222Z",
        "__v": 0
    }
];

const ProductsCategoryArea = () => {
  
  var {perPage, currentPage , pagesToShow,updateValue } = useContext(PaginationContext);
  
  const [products, setProducts] = useState([]);

  const [adverts, setAdverts] = useState(advertisements);

  const [currntPage, setCurrentPage] = useState(currentPage);

  const [pageViewSize, setPageViewSize] = useState(perPage);

  const [pageCount, setPageCount] = useState(0);

  const [totalProductCount, setTotalProductCount] = useState(0);

  const axiosInstance = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
 });

  const mounted = useRef(true);

  const handleChange = (e) => {
    if(e.target.id === "viewProduct"){
        setPageViewSize(e.target.value);
    }
    // if (e.target.type === 'checkbox') {
        // setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.checked }));
    // } else {
        // setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // }
  };

  useEffect(() => {
    mounted.current = true;
    axiosInstance.get(`/products?pageNumber=${currntPage}&pageViewSize=${pageViewSize}`)
    .then(async (res) => {
        if(mounted.current){

          let prds = await res.data;
          
          setProducts(prds.products);
          setCurrentPage(prds.page);
          setTotalProductCount(prds.count);
          setPageCount(prds.pages);
          
        }
      });
      return () => mounted.current = false;
  }, [currntPage, pageViewSize]);

  const settingColumns = useCallback(() => {
    if(window.innerWidth >= 700) return 2
    return 1
  }, []);


  const [column, setColumn] = useState(() => settingColumns());  


  useEffect(() => {
    window.addEventListener('resize', () => setColumn(() => settingColumns()));
    return window.removeEventListener('resize', () => setColumn(() => settingColumns()));
  }, [setColumn, settingColumns]);

  
  return    (
            // Product Catagories Area Start 
            <div className='relative container'>
                <Suspense fallback={<LoadingIndicator />}>
                {/* <!-- component --> */}
                        <div class="flex justify-center items-center">
                        {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
                        <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6  sm:w-auto">
                            <div role="main" class="flex flex-col items-center justify-center">
                                <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50"></h1>
                                <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12"></p>
                            </div>
                            <div class="lg:flex items-stretch md:mt-12 mt-8">
                            <div class="lg:w-1/2">                                
                    
                                

                                <div class="relative">
                                    <div>
                                        <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2022</p>
                                        <div class="absolute bottom-0 left-0 md:p-10 p-6">
                                        <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                                        <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <a href="/" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                        </div>
                                    </div>
                                    <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" class="w-full hidden sm:block" />
                                    <img class="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
                                </div>


                                <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 mt-8 md:mt-6 ">
                                    <div class="sm:w-full relative">
                                        <div>
                                            <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                            <div class="absolute bottom-0 left-0 p-6">
                                                <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                                                <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                                <a href="/" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                                                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <img src="https://i.ibb.co/DYxtCJq/img-1.png" class="w-full h-80" alt="chair" />
                                    </div>
                                </div>

                            </div>
                            <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                                
                                <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 ">
                                
                                <div class="relative w-full sm:mt-0 mt-4">
                                    <div>
                                    <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                    <div class="absolute bottom-0 left-0 p-6">
                                        <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                                        <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <a href="/" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                                        <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        </a>
                                    </div>
                                    </div>
                                    <img src="https://i.ibb.co/gDdnJb5/img-6.png" class="w-full h-80" alt="wall design" />
                                </div>
                                </div>

                                <div class="relative">
                                <div>
                                    <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                    <div class="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                                    <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                    <a href="/" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                                        <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" class="w-full sm:block mt-8 md:mt-6 hidden" />
                                <img class="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                </Suspense>
            </div>
        );
  };

export default ProductsCategoryArea;