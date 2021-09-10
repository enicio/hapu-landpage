import React from "react";
import './pageContent.scss'

//https://create-react-app.dev/docs/using-the-public-folder
function PageContent({ content, separator }) {
	return (
    <>
		<section className="content">
			{content.image
				? <img src={`/assets/images/${content.image}`} alt={content.alt} />
				: ''
			}
			<h2>
				{content.title}
			</h2>
			<p>
				{content.content}
			</p>
			{content.link
				?<a href="#section">{content.link}</a>
				: ''
			}
			{
        (separator)
          ? <hr/>
          : ''
			}
		</section>
    </>
	)
}

export default PageContent;