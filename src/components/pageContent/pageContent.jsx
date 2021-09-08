import React from "react";
import './pageContent.scss'

//https://create-react-app.dev/docs/using-the-public-folder
function PageContent({ props }) {
	return (
		<section className="content">
			{props.image
				? <img src={`/assets/images/${props.image}`} alt={props.alt} />
				: ''
			}
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
			<hr/>
		</section>
	)
}

export default PageContent;