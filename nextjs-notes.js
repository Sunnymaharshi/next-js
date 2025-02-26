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
    reserved variables  
        metadata 
            for polutating metadata in page 
            like title, description etc
            for dynamic pages 
                generateMetaData() is used
                gets same props as page 
        revalidate 
            number of seconds should cache data is used 
            after that it will be revalidated 
        dynamic
            force-dynamic 
                won't store data in Data Cache 
                disables Full Route Cache also
            force-static 
                always stores data in Data Cache 
             

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
    Server components 
        components that rendered only on server 
        can use async for components for fetching data directly in server
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
        react feature but unlocked by NextJS
        must be async functions
        "use server"; in function 
            turns function into a server action
        "use server"; in file top
            makes all code inside as server actions
            can be imported in client component                
        usecase: data mutation form action, takes a function and passes form data object
        nextjs internally creates a request and send to the nextjs server 
    server-only package 
        import it in a module/file
        to make a module to run only on server 
        if any of server-only module imported to client components
        it will throw an error 
    Hooks 
        usePathname() Hook 
            give current url path 
        useActionState() Hook - react
            to get the status of form submit
        useOptimistic() Hook - react 
            lets u optimistically update the UI 
        useActionState - react
            allows you to update state based on the result of a form action.
            returns a state that can be passed to action in form
            server action must receive prevState and then formData in 2nd argument
    NextJS in Production builds 
        caching
            nextjs does aggressive caching in production
            pre-renders all non-dynamic pages 
        public folder 
            there won't be any public folder in prod build 
            all resources in it will be moved to .next folder at build time 
            public folder must contain only static resources
    Aggressive Caching 
        Request Memoization
            in Server
            data: Return values of functions
            stores data requests with same configuration
            Re-use data in a React Component tree
            revalidation
                revalidatePath()
            caching custom data source 
                cache() from react
        Data Cache 
            in Server
            data: Data
            Store data across user requests and deployments
            persists until it is revalidated 
            revalidation 
                passing object with cache: 'no-store' to fetch()
                passing object with next: {revalidate:3} to fetch()
                revalidatePath()
                revalidate, dynamic variables
            caching custom data source 
                cache() from next/cache
        Full Route Cache
            in Server
            data: HTML and RSC payload
            Reduce rendering cost and improve performance
            persists until it is revalidated
        Router Cache
            in Client 
            data: RSC payload
            Reduce server requests on navigation
            User session or time-based

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
        revalidateTag()
            takes tag
            can give tags to requests by passing { next: {tags: ["a","b"]}}
            to fetch functions 
    NextJS App Optimizations
        <Image />
            automatically optimizes images 
            size optimization 
            prevents layout shifts 
            loaded only when they enter viewport 
            Asset flexibility
                ondemand image resizing even for images stored on remote server 
            priority attribute
                removes lazyloading attribute to image 
                adds fetchpriority="high"
            fill property
                for loading unknown images 
                must config hostname for remote images in next.config.mjs 
        SEO Optmization (metadata)
            static metadata
                metadata variable in page or layout file
            dynamic metadata
                async generateMetaData() 
    NextJS Deployment 
        standard build 
            regular build 
            requires nodejs server
            cmd: next build 
        full static build 
            produces static app 
            No nodejs server required
            cmd: next export


    Pages Router (old way & stable)
        reserved file names 
            index.js 
                component for root path for a route 
                ex: pages/product/index.js => /product
            404.js 
                not found page 
        Routing
            /pages folder is for root route
            index.js 
                component for root path for a route
            nested routes 
                defined by file or folder & index.js for deeply nested routes 
                /pages/about.js => /about 
                /pages/about/index.js => /about
            dynamic routes 
                /pages/product/[id].js => /product/123
                useRouter Hook (next/router)
                    returns router obj 
                    pathname property
                        folder structure path 
                    query property
                        object with all dynamic values for that path 
            nested dynamic routes 
                /pages/[id]/overview => /123/overview
            Catch-All route
                /pages/blog/[...slug] => /blog/123/23/view 
                slug value => ['123','23','view']
        Data fetching 
            getStaticProps() 
                reserved function which returns an object
                passed to component as props 
                used to generate props dynamically  
                executed when page is statically generated in build
            Incremental static generation (ISR)
                re-generate page on every request 
                at most every X seconds
                add revalidate: 10 property to return object of getStaticProps()
            getStaticPaths() 
                for generating dynamic pages
                statically pre-render all the paths specified
            getServerSideProps()
                runs for every request 
                access to params, req, res objects
*/