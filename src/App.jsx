import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
	const [users, setUsers] = useState(data);

	return (
		<main>
			<div className="container">
				<h3> {users.length} Birthday List</h3>
				<List users={users} />
				<button onClick={() => setUsers([])}>Clear All</button>
			</div>
		</main>
	);
}

export default App;
