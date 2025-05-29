import React from 'react';
import { Modal } from 'antd';
import { useNavigate } from 'react-router';


interface logoutModalInterface {
    setIsModalOpen : React.Dispatch<React.SetStateAction<boolean>>;
    isModalOpen : boolean;
};

export const LogoutModal: React.FC<logoutModalInterface> = ({
    setIsModalOpen,
    isModalOpen
}) => {
  const navigate = useNavigate();

  const handleOk = () => {
    // redirect to home page after clearing the token
    setIsModalOpen(false);
navigate('/log-in');
    console.log("user logged out successfully");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="User logout"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure, you wanted to logout. All your unsaved data will be lost ?.</p>
      </Modal>
    </>
  );
};
