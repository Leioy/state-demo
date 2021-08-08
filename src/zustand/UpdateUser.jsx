import { useUser } from './store/user'
import React, { useState } from 'react'
import { Button, Input, message } from 'antd'

const mapActions = state => state.actions
const UpdateUser = () => {
	const {updateUser, getUser} = useUser(mapActions)
	const [username, setUsername] = useState('')
	const [loading, setLoading] = useState(false)
	const onClick = async () => {
		if (!username) return
		try {
			setLoading(true)
			await updateUser(username)
			message.success('Update Successful')
			await getUser()
		} finally {
			setLoading(false)
		}
	}
	return (
		<div>
			<Input value={username} onChange={e => setUsername(e.target.value)} />
			<Button onClick={onClick} loading={loading}>update username</Button>
		</div>
	)
}
export default UpdateUser
