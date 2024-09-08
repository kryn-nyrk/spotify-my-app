'use client';

import React from 'react';

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onOk: () => void;
  onCancel: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  onOk,
  onCancel,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="m-10 bg-gray-100 p-6 rounded-md shadow-lg"
        onClick={onClose}
      >
        <h2 className="text-xl text-center font-semibold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={onOk}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
