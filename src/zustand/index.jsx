import React from 'react'
import UserInfo from './UserInfo'
import UpdateUser from './UpdateUser'
import { useUser } from './store/user'
import { useMount } from 'ahooks'
const mapActions = state => state.actions
const ZustandDemo = () => {
	const {getUser} = useUser(mapActions)
	useMount(() => {
		getUser()
	})
	return (
		<div style={{border: '1px solid green'}}>
			<UserInfo />
			<UpdateUser />
		</div>
	)
}
export default ZustandDemo
