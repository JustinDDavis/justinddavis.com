# Hi there

It looks like you found the code to the webpage I use to host my resume. (justinddavis.com)

I've used this as a way to work on a few technologies that I don't get to use very often: 
  - Gatsby
  - React
  - CircleCi
  - AWS
    - Cloudfront
    - S3

It's not the most beautiful page in the land, but it is mine. 

## Running local
  1. gatsby build
  2. gatsby serve
     1. Runing this alone will only give you a blank page. 
OR
  1. gatsby develop 


## General Component Structure
  - Index.js (index.js)
    - Layout (layout.js)
      - Header (header.js)
        - Container
          - Row
            - Col
              - Link
            - Col
              - JustinImage (justin_headshot.js)
      - Injected: (index.js)
        - SEO (seo.js)
        - Row
          - Col
            - Text
        - Container
          - Row
            - Col
              - Resume (resume.js)
                - ResumeRole (resume_role.js)
            - Col
              - Social (social.js)
      - Footer