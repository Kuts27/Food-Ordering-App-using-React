import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import resList from "../utils/mockdata"
import useOnlineStatus from "../utils/useOnlineStatus"


//  let resLists = [
//     {
    
//         "info": {
//           "id": "765152",
//           "name": "Pizza Hut",
//           "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
//           "locality": "Pimpri chinchwad",
//           "areaName": "Punawale",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Pizzas"
//           ],
//           "avgRating": 3.9,
//           "parentId": "721",
//           "avgRatingString": "3.9",
//           "totalRatingsString": "500+",
//           "sla": {
//             "deliveryTime": 36,
//             "lastMileTravel": 3.7,
//             "serviceability": "SERVICEABLE",
//             "slaString": "35-40 mins",
//             "lastMileTravelString": "3.7 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-04-18 00:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
  
//               },
//               "textExtendedBadges": {
  
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹179"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
  
//               },
//               "video": {
  
//               }
//             }
//           },
//           "reviewsSummary": {
  
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
  
//           }
//         },
//         "analytics": {
  
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/pizza-hut-pimpri-chinchwad-punawale-pune-765152",
//           "type": "WEBLINK"
//         },
        
      
// },
// {
//     "info": {
//       "id": "772299",
//       "name": "McDonald's",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/49774730-6b2a-4bee-ac6e-aa98dc47a584_772299.jpg",
//       "locality": "W Biz",
//       "areaName": "Wakad",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Beverages",
//         "Cafe",
//         "Desserts"
//       ],
//       "avgRating": 4.4,
//       "parentId": "630",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "500+",
//       "sla": {
//         "deliveryTime": 37,
//         "lastMileTravel": 4.8,
//         "serviceability": "SERVICEABLE",
//         "slaString": "35-40 mins",
//         "lastMileTravelString": "4.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-17 23:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Burger.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Burger.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {

//           },
//           "textExtendedBadges": {

//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "40% OFF",
//         "subHeader": "UPTO ₹80"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {

//           },
//           "video": {

//           }
//         }
//       },
//       "reviewsSummary": {

//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {

//       }
//     },
//     "analytics": {

//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/mcdonalds-w-biz-wakad-pune-772299",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "323526",
//       "name": "Chinese Wok",
//       "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//       "locality": "Chinchwad",
//       "areaName": "Chinchwad",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Chinese",
//         "Asian",
//         "Tibetan",
//         "Desserts"
//       ],
//       "avgRating": 3.9,
//       "parentId": "61955",
//       "avgRatingString": "3.9",
//       "totalRatingsString": "5K+",
//       "sla": {
//         "deliveryTime": 54,
//         "lastMileTravel": 8.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "8.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-17 23:00:00",
//         "opened": true
//       },
//       "badges": {

//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {

//           },
//           "textBased": {

//           },
//           "textExtendedBadges": {

//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹149"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {

//           },
//           "video": {

//           }
//         }
//       },
//       "reviewsSummary": {

//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {

//       }
//     },
//     "analytics": {

//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/chinese-wok-chinchwad-pune-323526",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "752535",
//       "name": "KFC",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5d0c595a-dfb2-472b-8ca0-f4701adaa38d_752535.JPG",
//       "locality": "Dattwadi",
//       "areaName": "Puna wale",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Biryani",
//         "American",
//         "Snacks",
//         "Fast Food"
//       ],
//       "avgRating": 4.2,
//       "parentId": "547",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "500+",
//       "sla": {
//         "deliveryTime": 27,
//         "lastMileTravel": 3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "25-30 mins",
//         "lastMileTravelString": "3.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-18 02:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Burger.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Burger.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {

//           },
//           "textExtendedBadges": {

//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {

//           },
//           "video": {

//           }
//         }
//       },
//       "reviewsSummary": {

//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {

//       }
//     },
//     "analytics": {

//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/kfc-dattwadi-puna-wale-pune-752535",
//       "type": "WEBLINK"
//     }
//   },
//   {
//       "info": {
//         "id": "36014",
//         "name": "Subway",
//         "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
//         "locality": "KAILASH HOTEL",
//         "areaName": "Tathawade",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Healthy Food",
//           "Salads",
//           "Snacks",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 3.9,
//         "parentId": "2",
//         "avgRatingString": "3.9",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 46,
//           "lastMileTravel": 4,
//           "serviceability": "SERVICEABLE",
//           "slaString": "45-50 mins",
//           "lastMileTravelString": "4.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:59:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/subway-kailash-hotel-tathawade-pune-36014",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "575285",
//         "name": "Wendy's",
//         "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
//         "locality": "Bhatewara nagar",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Burgers",
//           "American",
//           "Fast Food",
//           "Snacks",
//           "Beverages"
//         ],
//         "avgRating": 4.3,
//         "parentId": "972",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 35,
//           "lastMileTravel": 3.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "3.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:59:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹149"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/wendys-bhatewara-nagar-hinjawadi-pune-575285",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "622197",
//         "name": "MOJO Pizza - 2X Toppings",
//         "cloudinaryImageId": "59b64f9bb67234987652437f21d379c2",
//         "locality": "Infotech Park",
//         "areaName": "Hinjewadi",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Pizzas",
//           "Italian",
//           "Fast Food",
//           "Desserts"
//         ],
//         "avgRating": 4.5,
//         "parentId": "11329",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "100+",
//         "sla": {
//           "deliveryTime": 30,
//           "lastMileTravel": 1.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-35 mins",
//           "lastMileTravelString": "1.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-18 02:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-infotech-park-hinjewadi-pune-622197",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "331881",
//         "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
//         "cloudinaryImageId": "r5sejrrfsn2pqdo0yokj",
//         "locality": "Marunji",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Desserts",
//           "Ice Cream",
//           "Ice Cream Cakes"
//         ],
//         "avgRating": 4.7,
//         "veg": true,
//         "parentId": "582",
//         "avgRatingString": "4.7",
//         "totalRatingsString": "100+",
//         "sla": {
//           "deliveryTime": 25,
//           "lastMileTravel": 1.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "1.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 22:50:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-marunji-hinjawadi-pune-331881",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "427774",
//         "name": "Chaayos Chai+Snacks=Relax",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_427774.JPG",
//         "locality": "Maan Road",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Bakery",
//           "Beverages",
//           "Chaat",
//           "Desserts",
//           "Home Food",
//           "Italian",
//           "Maharashtrian",
//           "Snacks",
//           "Street Food",
//           "Sweets"
//         ],
//         "avgRating": 4.4,
//         "veg": true,
//         "parentId": "281782",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 31,
//           "lastMileTravel": 4.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "4.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ],
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-maan-road-hinjawadi-pune-427774",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "41800",
//         "name": "Faasos - Wraps, Rolls & Shawarma",
//         "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
//         "locality": "Maan Road Om plaza 2nd floor",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Kebabs",
//           "Fast Food",
//           "Snacks",
//           "American",
//           "Healthy Food",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.2,
//         "parentId": "21809",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 34,
//           "lastMileTravel": 4.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "4.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Rolls.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Rolls.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹125 OFF",
//           "subHeader": "ABOVE ₹199",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-maan-road-om-plaza-2nd-floor-hinjawadi-pune-41800",
//         "type": "WEBLINK"
//       }
//     }
//  ]

const Body = () => {
  // local state variable = Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [searchText, setSearchText] = useState("")
  // whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)


  useEffect(()=>{
    fetchData();
    console.log("useEffect called")}, [])

      const fetchData = async () => {
      //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
      const json = await data.json()

      console.log(json)
      // optioal chaining
      setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(listOfRestaurants)
    }

    // conditional rendering
    // if(listOfRestaurants.length == 0){
    //     return <Shimmer />
    // }

  // const [listOfRestaurants, setListOfRestaurant] = useState([
  //   {
    
  //       "info": {
  //         "id": "765152",
  //         "name": "Pizza Hut",
  //         "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
  //         "locality": "Pimpri chinchwad",
  //         "areaName": "Punawale",
  //         "costForTwo": "₹350 for two",
  //         "cuisines": [
  //           "Pizzas"
  //         ],
  //         "avgRating": 3.9,
  //         "parentId": "721",
  //         "avgRatingString": "3.9",
  //         "totalRatingsString": "500+",
  //         "sla": {
  //           "deliveryTime": 36,
  //           "lastMileTravel": 3.7,
  //           "serviceability": "SERVICEABLE",
  //           "slaString": "35-40 mins",
  //           "lastMileTravelString": "3.7 km",
  //           "iconType": "ICON_TYPE_EMPTY"
  //         },
  //         "availability": {
  //           "nextCloseTime": "2024-04-18 00:00:00",
  //           "opened": true
  //         },
  //         "badges": {
  //           "imageBadges": [
  //             {
  //               "imageId": "Rxawards/_CATEGORY-Pizza.png",
  //               "description": "Delivery!"
  //             }
  //           ]
  //         },
  //         "isOpen": true,
  //         "type": "F",
  //         "badgesV2": {
  //           "entityBadges": {
  //             "imageBased": {
  //               "badgeObject": [
  //                 {
  //                   "attributes": {
  //                     "description": "Delivery!",
  //                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
  //                   }
  //                 }
  //               ]
  //             },
  //             "textBased": {
  
  //             },
  //             "textExtendedBadges": {
  
  //             }
  //           }
  //         },
  //         "aggregatedDiscountInfoV3": {
  //           "header": "ITEMS",
  //           "subHeader": "AT ₹179"
  //         },
  //         "differentiatedUi": {
  //           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           "differentiatedUiMediaDetails": {
  //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //             "lottie": {
  
  //             },
  //             "video": {
  
  //             }
  //           }
  //         },
  //         "reviewsSummary": {
  
  //         },
  //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         "restaurantOfferPresentationInfo": {
  
  //         }
  //       },
  //       "analytics": {
  
  //       },
  //       "cta": {
  //         "link": "https://www.swiggy.com/restaurants/pizza-hut-pimpri-chinchwad-punawale-pune-765152",
  //         "type": "WEBLINK"
  //       },
        
      
  // },
  // {
  //   "info": {
  //     "id": "772299",
  //     "name": "McDonald's",
  //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/49774730-6b2a-4bee-ac6e-aa98dc47a584_772299.jpg",
  //     "locality": "W Biz",
  //     "areaName": "Wakad",
  //     "costForTwo": "₹400 for two",
  //     "cuisines": [
  //       "Burgers",
  //       "Beverages",
  //       "Cafe",
  //       "Desserts"
  //     ],
  //     "avgRating": 4.4,
  //     "parentId": "630",
  //     "avgRatingString": "4.4",
  //     "totalRatingsString": "500+",
  //     "sla": {
  //       "deliveryTime": 37,
  //       "lastMileTravel": 4.8,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "35-40 mins",
  //       "lastMileTravelString": "4.8 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2024-04-17 23:00:00",
  //       "opened": true
  //     },
  //     "badges": {
  //       "imageBadges": [
  //         {
  //           "imageId": "Rxawards/_CATEGORY-Burger.png",
  //           "description": "Delivery!"
  //         }
  //       ]
  //     },
  //     "isOpen": true,
  //     "type": "F",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {
  //           "badgeObject": [
  //             {
  //               "attributes": {
  //                 "description": "Delivery!",
  //                 "imageId": "Rxawards/_CATEGORY-Burger.png"
  //               }
  //             }
  //           ]
  //         },
  //         "textBased": {
  
  //         },
  //         "textExtendedBadges": {
  
  //         }
  //       }
  //     },
  //     "aggregatedDiscountInfoV3": {
  //       "header": "40% OFF",
  //       "subHeader": "UPTO ₹80"
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {
  
  //         },
  //         "video": {
  
  //         }
  //       }
  //     },
  //     "reviewsSummary": {
  
  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {
  
  //     }
  //   },
  //   "analytics": {
  
  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/mcdonalds-w-biz-wakad-pune-772299",
  //     "type": "WEBLINK"
  //   }
  // },
  // {
  //   "info": {
  //     "id": "323526",
  //     "name": "Chinese Wok",
  //     "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
  //     "locality": "Chinchwad",
  //     "areaName": "Chinchwad",
  //     "costForTwo": "₹300 for two",
  //     "cuisines": [
  //       "Chinese",
  //       "Asian",
  //       "Tibetan",
  //       "Desserts"
  //     ],
  //     "avgRating": 3.9,
  //     "parentId": "61955",
  //     "avgRatingString": "3.9",
  //     "totalRatingsString": "5K+",
  //     "sla": {
  //       "deliveryTime": 54,
  //       "lastMileTravel": 8.7,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "50-55 mins",
  //       "lastMileTravelString": "8.7 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2024-04-17 23:00:00",
  //       "opened": true
  //     },
  //     "badges": {
  
  //     },
  //     "isOpen": true,
  //     "type": "F",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {
  
  //         },
  //         "textBased": {
  
  //         },
  //         "textExtendedBadges": {
  
  //         }
  //       }
  //     },
  //     "aggregatedDiscountInfoV3": {
  //       "header": "ITEMS",
  //       "subHeader": "AT ₹149"
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {
  
  //         },
  //         "video": {
  
  //         }
  //       }
  //     },
  //     "reviewsSummary": {
  
  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {
  
  //     }
  //   },
  //   "analytics": {
  
  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/chinese-wok-chinchwad-pune-323526",
  //     "type": "WEBLINK"
  //   }
  // },
  // {
  //   "info": {
  //     "id": "752535",
  //     "name": "KFC",
  //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5d0c595a-dfb2-472b-8ca0-f4701adaa38d_752535.JPG",
  //     "locality": "Dattwadi",
  //     "areaName": "Puna wale",
  //     "costForTwo": "₹400 for two",
  //     "cuisines": [
  //       "Burgers",
  //       "Biryani",
  //       "American",
  //       "Snacks",
  //       "Fast Food"
  //     ],
  //     "avgRating": 4.2,
  //     "parentId": "547",
  //     "avgRatingString": "4.2",
  //     "totalRatingsString": "500+",
  //     "sla": {
  //       "deliveryTime": 27,
  //       "lastMileTravel": 3,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "25-30 mins",
  //       "lastMileTravelString": "3.0 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2024-04-18 02:00:00",
  //       "opened": true
  //     },
  //     "badges": {
  //       "imageBadges": [
  //         {
  //           "imageId": "Rxawards/_CATEGORY-Burger.png",
  //           "description": "Delivery!"
  //         }
  //       ]
  //     },
  //     "isOpen": true,
  //     "type": "F",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {
  //           "badgeObject": [
  //             {
  //               "attributes": {
  //                 "description": "Delivery!",
  //                 "imageId": "Rxawards/_CATEGORY-Burger.png"
  //               }
  //             }
  //           ]
  //         },
  //         "textBased": {
  
  //         },
  //         "textExtendedBadges": {
  
  //         }
  //       }
  //     },
  //     "aggregatedDiscountInfoV3": {
  //       "header": "20% OFF",
  //       "subHeader": "UPTO ₹50"
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {
  
  //         },
  //         "video": {
  
  //         }
  //       }
  //     },
  //     "reviewsSummary": {
  
  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {
  
  //     }
  //   },
  //   "analytics": {
  
  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/kfc-dattwadi-puna-wale-pune-752535",
  //     "type": "WEBLINK"
  //   }
  // },
  // {
  //     "info": {
  //       "id": "36014",
  //       "name": "Subway",
  //       "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
  //       "locality": "KAILASH HOTEL",
  //       "areaName": "Tathawade",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Healthy Food",
  //         "Salads",
  //         "Snacks",
  //         "Desserts",
  //         "Beverages"
  //       ],
  //       "avgRating": 3.9,
  //       "parentId": "2",
  //       "avgRatingString": "3.9",
  //       "totalRatingsString": "10K+",
  //       "sla": {
  //         "deliveryTime": 46,
  //         "lastMileTravel": 4,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "45-50 mins",
  //         "lastMileTravelString": "4.0 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2024-04-17 23:59:00",
  //         "opened": true
  //       },
  //       "badges": {
  
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  
  //           },
  //           "textBased": {
  
  //           },
  //           "textExtendedBadges": {
  
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "60% OFF",
  //         "subHeader": "UPTO ₹120"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
  
  //           },
  //           "video": {
  
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
  
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
  
  //       }
  //     },
  //     "analytics": {
  
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/restaurants/subway-kailash-hotel-tathawade-pune-36014",
  //       "type": "WEBLINK"
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "575285",
  //       "name": "Wendy's",
  //       "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
  //       "locality": "Bhatewara nagar",
  //       "areaName": "Hinjawadi",
  //       "costForTwo": "₹200 for two",
  //       "cuisines": [
  //         "Burgers",
  //         "American",
  //         "Fast Food",
  //         "Snacks",
  //         "Beverages"
  //       ],
  //       "avgRating": 4.3,
  //       "parentId": "972",
  //       "avgRatingString": "4.3",
  //       "totalRatingsString": "1K+",
  //       "sla": {
  //         "deliveryTime": 35,
  //         "lastMileTravel": 3.7,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "30-35 mins",
  //         "lastMileTravelString": "3.7 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2024-04-17 23:59:00",
  //         "opened": true
  //       },
  //       "badges": {
  
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  
  //           },
  //           "textBased": {
  
  //           },
  //           "textExtendedBadges": {
  
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "ITEMS",
  //         "subHeader": "AT ₹149"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
  
  //           },
  //           "video": {
  
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
  
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
  
  //       }
  //     },
  //     "analytics": {
  
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/restaurants/wendys-bhatewara-nagar-hinjawadi-pune-575285",
  //       "type": "WEBLINK"
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "622197",
  //       "name": "MOJO Pizza - 2X Toppings",
  //       "cloudinaryImageId": "59b64f9bb67234987652437f21d379c2",
  //       "locality": "Infotech Park",
  //       "areaName": "Hinjewadi",
  //       "costForTwo": "₹250 for two",
  //       "cuisines": [
  //         "Pizzas",
  //         "Italian",
  //         "Fast Food",
  //         "Desserts"
  //       ],
  //       "avgRating": 4.5,
  //       "parentId": "11329",
  //       "avgRatingString": "4.5",
  //       "totalRatingsString": "100+",
  //       "sla": {
  //         "deliveryTime": 30,
  //         "lastMileTravel": 1.7,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "25-35 mins",
  //         "lastMileTravelString": "1.7 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2024-04-18 02:00:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "textExtendedBadges": [
  //           {
  //             "iconId": "guiltfree/GF_Logo_android_3x",
  //             "shortDescription": "options available",
  //             "fontColor": "#7E808C"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  
  //           },
  //           "textBased": {
  
  //           },
  //           "textExtendedBadges": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "",
  //                   "fontColor": "#7E808C",
  //                   "iconId": "guiltfree/GF_Logo_android_3x",
  //                   "shortDescription": "options available"
  //                 }
  //               }
  //             ]
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "50% OFF",
  //         "subHeader": "UPTO ₹100"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
  
  //           },
  //           "video": {
  
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
  
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
  
  //       }
  //     },
  //     "analytics": {
  
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-infotech-park-hinjewadi-pune-622197",
  //       "type": "WEBLINK"
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "331881",
  //       "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
  //       "cloudinaryImageId": "r5sejrrfsn2pqdo0yokj",
  //       "locality": "Marunji",
  //       "areaName": "Hinjawadi",
  //       "costForTwo": "₹300 for two",
  //       "cuisines": [
  //         "Desserts",
  //         "Ice Cream",
  //         "Ice Cream Cakes"
  //       ],
  //       "avgRating": 4.7,
  //       "veg": true,
  //       "parentId": "582",
  //       "avgRatingString": "4.7",
  //       "totalRatingsString": "100+",
  //       "sla": {
  //         "deliveryTime": 25,
  //         "lastMileTravel": 1.7,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "20-25 mins",
  //         "lastMileTravelString": "1.7 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2024-04-17 22:50:00",
  //         "opened": true
  //       },
  //       "badges": {
  
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  
  //           },
  //           "textBased": {
  
  //           },
  //           "textExtendedBadges": {
  
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "50% OFF",
  //         "subHeader": "UPTO ₹100"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
  
  //           },
  //           "video": {
  
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
  
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
  
  //       }
  //     },
  //     "analytics": {
  
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-marunji-hinjawadi-pune-331881",
  //       "type": "WEBLINK"
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "427774",
  //       "name": "Chaayos Chai+Snacks=Relax",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_427774.JPG",
  //       "locality": "Maan Road",
  //       "areaName": "Hinjawadi",
  //       "costForTwo": "₹250 for two",
  //       "cuisines": [
  //         "Bakery",
  //         "Beverages",
  //         "Chaat",
  //         "Desserts",
  //         "Home Food",
  //         "Italian",
  //         "Maharashtrian",
  //         "Snacks",
  //         "Street Food",
  //         "Sweets"
  //       ],
  //       "avgRating": 4.4,
  //       "veg": true,
  //       "parentId": "281782",
  //       "avgRatingString": "4.4",
  //       "totalRatingsString": "1K+",
  //       "sla": {
  //         "deliveryTime": 31,
  //         "lastMileTravel": 4.6,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "30-35 mins",
  //         "lastMileTravelString": "4.6 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2024-04-17 23:00:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "v1695133679/badges/Pure_Veg111.png",
  //             "description": "pureveg"
  //           }
  //         ],
  //         "textExtendedBadges": [
  //           {
  //             "iconId": "guiltfree/GF_Logo_android_3x",
  //             "shortDescription": "options available",
  //             "fontColor": "#7E808C"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "pureveg",
  //                   "imageId": "v1695133679/badges/Pure_Veg111.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {
  
  //           },
  //           "textExtendedBadges": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "",
  //                   "fontColor": "#7E808C",
  //                   "iconId": "guiltfree/GF_Logo_android_3x",
  //                   "shortDescription": "options available"
  //                 }
  //               }
  //             ]
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "50% OFF",
  //         "subHeader": "UPTO ₹100"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
  
  //           },
  //           "video": {
  
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
  
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
  
  //       }
  //     },
  //     "analytics": {
  
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-maan-road-hinjawadi-pune-427774",
  //       "type": "WEBLINK"
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "41800",
  //       "name": "Faasos - Wraps, Rolls & Shawarma",
  //       "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
  //       "locality": "Maan Road Om plaza 2nd floor",
  //       "areaName": "Hinjawadi",
  //       "costForTwo": "₹200 for two",
  //       "cuisines": [
  //         "Kebabs",
  //         "Fast Food",
  //         "Snacks",
  //         "American",
  //         "Healthy Food",
  //         "Desserts",
  //         "Beverages"
  //       ],
  //       "avgRating": 4.2,
  //       "parentId": "21809",
  //       "avgRatingString": "4.2",
  //       "totalRatingsString": "10K+",
  //       "sla": {
  //         "deliveryTime": 34,
  //         "lastMileTravel": 4.6,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "30-35 mins",
  //         "lastMileTravelString": "4.6 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2024-04-17 23:59:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "Rxawards/_CATEGORY-Rolls.png",
  //             "description": "Delivery!"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "Delivery!",
  //                   "imageId": "Rxawards/_CATEGORY-Rolls.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {
  
  //           },
  //           "textExtendedBadges": {
  
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "₹125 OFF",
  //         "subHeader": "ABOVE ₹199",
  //         "discountTag": "FLAT DEAL"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
  
  //           },
  //           "video": {
  
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
  
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
  
  //       }
  //     },
  //     "analytics": {
  
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-maan-road-om-plaza-2nd-floor-hinjawadi-pune-41800",
  //       "type": "WEBLINK"
  //     }
  //   }
  // ])
    const onlineStatus = useOnlineStatus()
    if(onlineStatus == false) return <h1>You are Offline!! Please check internet connection</h1>

    return listOfRestaurants.length==0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex items-center justify-between"> 
                <div className="search m-4 p-4 gap-1 flex">
                  <input type="text" className="search-box border border-solid border-black"
                   value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                  <button className="px-4 py-1 bg-green-200 rounded-lg" onClick={()=>{
                    const filteredRestaurant = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  )
                 // setListOfRestaurant(filteredRestaurant)
                    setFilteredRestaurant(filteredRestaurant)
                    //console.log(searchText)
                  } }>Search</button>
                </div>

                <button className="filter-btn bg-green-200 w-56 h-10 px-2 rounded-lg" onClick={() => {
                  //const filteredList = listOfRestaurants.filter((res) =>res.info.avgRating>4)
                  //setListOfRestaurant(filteredList)
                  const filteredList = filteredRestaurant.filter((res) =>res.info.avgRating>=4)
                  setFilteredRestaurant(filteredList)
                  
                  //console.log(listOfRestaurants)
                } }> Top Rated Restauants </button>
            </div>
            <div className="res-container flex flex-wrap gap-14 m-4 p-4 ">
            {/* {
                //listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                filteredRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
            }   */}
             {
                //listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                filteredRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard resData={restaurant}/> </Link>))
            }                 
            </div>
        </div>
    )
}

// const Body = () => {
//     return(
//         <div className="body">
//             <div className="filter">
//                 <button className="filter-btn" onClick={() => { console.log("Button Clicked")}}>Top Rated Restaurants</button>
//             </div>
//             <div className="res-container">
//                 <RestaurantCard resName="Meghana Foods" cusine="Punjabi, Rajasthani, Kokani, Biryani"/>
//                 <RestaurantCard resName="KFC" cusine="Chicken, Rolls, Burger"/>
                
//             </div>
//         </div>
//     )
// }

export default Body