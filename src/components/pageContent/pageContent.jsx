import React from "react";
import './pageContent.scss'

function PageContent({ props }) {
	return (
		<section className="content">
			<h2>
				{props.title}
			</h2>
			<p>
				{props.content}
			</p>
			{props.link
				?<a href="#section">{props.link}</a>
				: ''
			}
		</section>
	)
}

export default PageContent;