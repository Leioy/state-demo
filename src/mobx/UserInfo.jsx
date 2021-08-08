import React from 'react'
import { inject, observer } from 'mobx-react'

const UserInfo = observer(({userStore}) => {
	const {user} = userStore
	return <div>
			{
				user && (
					<div>
						<span>{user.name}</span>
					</div>
				)
			}
		</div>
})

export default inject('userStore')(UserInfo)
