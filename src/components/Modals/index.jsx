import React from 'react'
import { Modal, Button } from 'antd'

export default function App (props) {
  const { visible, handleCancel } = props
  const handleOk = e => {
    
  }

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}
