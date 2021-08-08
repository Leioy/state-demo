import React, { useState } from 'react'
import { Button, Input, message } from 'antd'
import { inject, observer } from 'mobx-react'

const UpdateUser = observer(({userStore}) => {
	const {getUser,updateUser} = userStore
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
})
export default inject('userStore')(UpdateUser)
