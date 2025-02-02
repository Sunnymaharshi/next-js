/*
NextJS
    fullstack framework built on React
        frontend + backend in same project
    file based routing 
        routes configure via filesystem
        no extra configuration is needed 
    Server-side Rendering 
        by default, NextJS renders all pages on server 
    Reserved filenames
        only Reserved when created inside app/ folder
        page.js 
            creates new page 
        layout.js
            creates layout that wraps siblings and nested pages 
            project neeeds atleast 1 root layout.js file 
        not-found.js 
            Fallback page for not found errors 
        error.js 
            Fallback page for other errors 
        loading.js 
            Fallback page shown while sibling or nested pages or layouts
            are fetching data 
        route.js 
            allow to create an API route 
            page which returns data like JSON instead of JSX  
    metadata 
        special exported variable for polutating metadata in page 
        like title, description etc
    Routing Approaches
        App Router 
            new recommended Approach
        Pages Router 
            old Approach
            supports modern NextJS & React features 
            fullstack applications 
    route 
        create folder and page.js file in it 
        ex: app/home/page.js 
    Dynamic route 
        create folder with square brackets [] and page.js 
        ex: app/[username]/page.js
        params prop
            all dynamic params are stored in key/value pair 
            
            
        



*/