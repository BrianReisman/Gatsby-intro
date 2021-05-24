import React from 'react';
import { Global, css } from '@emotion/core';

//
const Layout = ({ children }) => {
  //children comes from React
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            //the lobatomized owl. Every sibling selector will get this style.
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            font-size: 18px;
            line-height: 1.4;

            /* remote margin for the main div that Gatsby mounts into. Since all Gatsby is wrapped into a div */
            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1; //shorter line heights

              + * {
                //anything that comes after heading is going to have a smaller margin-top. Places heading closer to the content it heads.
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `}
      >
        test from layout.js
      </Global>
    </>
  );
};

export default Layout;