import React from 'react'
import { useUser } from './store/user'

const mapStateUser = state => state.user
const UserInfo = () => {
	const user = useUser(mapStateUser)
	return (
		<div>
			{
				user && (
					<div>
						<span>{user.name}</span>
					</div>
				)
			}
		</div>
	)
}

export default UserInfo
