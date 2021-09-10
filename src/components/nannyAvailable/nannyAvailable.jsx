import React from "react";
import profileImage from '../../assets/images/profile-image.png'
import './nannyAvailable.scss';

//mock data
const profile = {
	name: 'Sarah',
	address:"North Sydney",
	img: profileImage,
	availableDays: [ 'Wednesday', 'Thursday' ,'Friday'],
	availableHours: [ '7:30', '5:30']
}

function NannyAvailable() {
  return (
	<section className="availableNanny">
		<img src={ profile.img } alt='Face of the Nanny' />
		<a href="#section" >{profile.name}’s day care available <br/> now in {profile.address}</a>
		<div>
			{profile.availableDays.map(weekday => <span key={weekday} >{ weekday } </span>)}
			{profile.availableHours.map(hours => <span key={hours} >{ hours } </span>)}
		</div>
	</section>
	)
}

export default NannyAvailable;
