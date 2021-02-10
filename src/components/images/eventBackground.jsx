import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const EventBackground = ({className, children}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "events/chair.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
        className={className}
        fluid={imageData}
        style={{backgroundAttachment: 'fixed'}}
        >
        {children}
        </BackgroundImage>
      )
    }}
  />
)

EventBackground.propTypes = {
  className: PropTypes.any,
  children: PropTypes.node,
  style: PropTypes.any,
}

export default EventBackground