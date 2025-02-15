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
            must be client component
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
    Routing
        route 
            create folder and page.js file in it 
            ex: app/home/page.js 
        Dynamic route 
            create folder with square brackets [] and page.js 
            ex: app/[username]/page.js
            params prop
                all dynamic params are stored in key/value pair 
        Parallel Routes 
            multiple route pages shown in same page at same time
            layout.js file on parent path 
                have props for each parallel route 
                instead of single children prop 
                ex: {latest, trending}
            parallel route folder name starts with @
            nested routes for parallel routes
                default.js file should be added in all parallel routes 
                to show it as Fallback if nested route for that parallel route 
                is not defined 
                you have just default.js without page.js if parallel route 
                does not have a sub routes 
            ex: app/home/@latest app/home/@trending   
            Catch-All Routes 
                /meals/[[...something]]
                page inside this folder is visible for meals nested routes 
                can't have page.js in /meals/
                param.something is array 
        Intercepting Route 
            load a new route within the current layout while masking the browser
            URL, useful for advanced routing patterns such as modals.
            ex: (.)image  -> . for current folder, image is path u want to intercept
            usage: load image modal route without changing url in browser 
        Navigating Programatically
            useRouter() Hook 
                back()
                push() etc
        Route Groups 
            can setup dedicated layout for routes inside it 
            changes root layout also
            ex: (content)
        Route Handlers 
            route.js reserved file name 
            used to create APIs 
            ex: app/api/route.js
        Middleware 
            reserved name outside app folder: middleware.js
            used to create middleware for incoming requests including for assets
            can filter the requests
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