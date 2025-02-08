/*
NextJS
    fullstack framework built on React
        frontend + backend in same project
        SSR components are good for SEO
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
            applicable for all sibling and nested components 
            notFound() can be called to invoke not found page 
            it is from next/navigation
        error.js 
            Fallback page for other errors 
            applicable for all sibling and nested components 
        loading.js 
            Fallback page shown while sibling or nested pages or layouts
            are fetching data 
            applicable for all sibling and nested components 
            React Suspense 
                can be used for defining loading for specific component
        route.js 
            allow to create an API route 
            page which returns data like JSON instead of JSX  
    metadata 
        special exported variable for polutating metadata in page 
        like title, description etc
        for dynamic pages 
            generateMetaData() is used
            gets same props as page 
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
            
    Optimizations
        <Image />
            automatically optimizes images 
            from next/Image
    Server components 
        components that rendered only on server 
        can use async for components
        great for SEO
        default component type 
    Client components
        components pre-rendered on server but then also 
        potentially on client
        add "use client"; directive at top 
        try to use this only on deepest component
        so we can leverage most out of SSR components
        great for client side interactivity
    Server Actions
        "use server"; in function 
            turns function into a server action
            can't be defined inside client components
        "use server"; in file top
            makes all code inside as server actions
            can be imported in client component
        must add async 
        
        usecase: form action 
        nextjs internally creates a request and send to the nextjs server 
    Hooks 
        usePathname() Hook 
            give current url path 
    NextJS in Production builds 
        caching
            nextjs does aggressive caching 
            pre-renders all non-dynamic pages 
        public folder 
            there won't be any public folder in prod build 
            all resources in it will be moved to .next folder at build time 
            public folder must contain only static resources
    Trigger Cache Revalidations
        removes caches related to certain page
        revalidatePath()
            takes path, "page"/"layout" 
            page
                default
                to revalidate the page of path given
                nested paths won't be revalidated
            layout 
                to revalidate page and all nested pages 
        

        



*/