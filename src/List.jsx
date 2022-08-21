import React from 'react';

const List = ({ users }) => {
	return (
		<>
			{users.map(({ id, image, age, name }) => {
				return (
					<article className="user" key={id}>
						<img src={image} alt={name} />
						<div>
							<h4>{name}</h4>
							<p>{age}</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
