import React from "react";
import './pageContent.scss'

// I'm not sure about use Public folder to put images.
//In this case I used because I needed dynamically import when renders the component. 
//How can see in the last topic in the link below
//https://create-react-app.dev/docs/using-the-public-folder
function PageContent({ content, separator, contentflux }) {
	return (
		<section className="container">
			<div className={`container__contentflux${contentflux} container__content`}>
				<div className="container__content__image">
					{content.image
						? <img src={`/assets/images/${content.image}`} alt={content.alt} />
						: ''
					}
				</div>
				<div className="container__content__text" >
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
				</div>
			</div>
			{
        (separator)
          ? <hr/>
          : ''
			}
		</section>
	)
}

export default PageContent;