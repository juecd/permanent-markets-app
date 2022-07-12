This is a sample app made for Permanent.

## Technologies used
- Next.js / React / Javascript
- GraphQL / Apollo
- Vercel
- ES6

## Key Features
- Flexible grid with definable number of items per row

## Technical choices
- Next.js: per our conversation that Permanent's clients should be search engine optimized, benefit from caching, and support fast development (built-in router support, strong community developmentetc)
- CSS Modules: due to the lightweight styles of the requested application, I opted to use built-in CSS modules, which benefits from ease of use and file structure, while avoiding pure CSS pitfalls, like unwieldy stylesheets
- Statically hosted for fast deployment and client retrieval
- react-grid-system library: for simple, responsive grid management; I chose this due to our lightweight UI needs, but a larger framework like MaterialUI might be more suitable for GUI-heavy functionality


## Future improvements
### Technical
- Switch to different methods of styling—such as CSS-in-JS as styling becomes more complex and dynamic
- Build out state management, especially if using / manipulating fetched data
- Switch <img> elements to Next's <Image> component to take advantage of lazy loading, image sizing optimization
- Rewrite in Typescript to benefit from compiler bug catching
- Headless browser testing
- Props declarations and validations
- Unit tests and integration tests

### Functional
- CRUD operations
- Sorting
- Filtering
- Set row breakpoints based on media queries
- Optimize fetching limits in light of low bandwidth use cases
- Pagination or infinite scroll
- Client-facing error and empty states