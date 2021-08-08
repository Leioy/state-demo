import UserInfo from './UserInfo'
import React, { useEffect } from 'react'
import { Provider } from 'mobx-react'
import { userStore } from './store/user'
import UpdateUser from './UpdateUser'

const MobxDemo = () => {
	const {getUser} = userStore
	useEffect(() => {
		getUser()
	},[])
	return (
		<Provider userStore={userStore}>
			<div style={{border:'1px solid hotpink'}}>
				<UserInfo />
				<UpdateUser/>
			</div>
		</Provider>
	)
}
export default MobxDemo
