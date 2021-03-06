import React from 'react'
import PropTypes from "prop-types"
import Pagination from "../../components/blog/pagination"
import BlogPostGrid from "../../components/blog/blogPostGrid"
import MenuTag from "../../components/blog/menuTag"
import MenuTagSlide from "../../components/blog/menuTagSlide"

const blogLayout = ({ allMdx, pageContext, pageType, handleTagMenu, tagMenu }) => {

	return (
    <div className="flex flex-wrap-reverse">
      <div className="w-full">
        <BlogPostGrid allMdx = {allMdx} />
        <Pagination numPages = {pageContext.numPages} currentPage = {pageContext.currentPage} pageType = {pageType} />
      </div>

      <MenuTag pageContext = {pageContext} handleTagMenu={handleTagMenu} tagMenu={tagMenu} />
      <MenuTagSlide pageContext = {pageContext} handleTagMenu={handleTagMenu} tagMenu={tagMenu} />
    </div>
	)
}

export default blogLayout

blogLayout.propTypes = {
		pageContext: PropTypes.any,
		data: PropTypes.any
	}