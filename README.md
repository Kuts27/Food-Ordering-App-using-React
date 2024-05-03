#Namaste React
     

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- It uses File Watching Algorithm - written in C++
- Faster builds due to caching
- Image optimisation
- Minification of our file in production build
- Bundling
- Compress the files
- Consistent Hashing
- Code splitting
- Differential bundling - to support older browsers
- HTTPS
- Tree shaking algorithm (parcel will remove unused code for you)
- different dev and prod bundle

parcel is using all other libraries. cant do all on its own


/**
  Header 
    -Logo
    -Nav Bar items
  Body
    -Search
    - RestaurantContainer
        --RestaurantCard
            -img
            -Name of Res, star rating, cuisine, delivery time
    - Copyright
    - Links
    - Address
    - Contact
 **/

 two types of Export/Import

1. Default export/import
Export default component
import component from "path"

2. Named export/import
export const component
import {component} from "path"

# React Hooks
(Normal JS utility functions)
useState() = superpowerful state variables

# Routing in webapps
- Client side routing
- Server side routing

# Redux Toolkit
- Install @reduxjs/toolkit and @react-redux
- Build our store
- connect our store to our app
- slice (cart slice)
- dispatch (action)
- Selector

"redux": "^5.0.1"