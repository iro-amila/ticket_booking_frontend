import { message } from "antd";

export const useMessageFunctions = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const successMessage = (msg) => {
    messageApi.open({
      type: 'success',
      content: msg,
    });
  };

  const errorMessage = (msg) => {
    messageApi.open({
      type: 'error',
      content: msg,
    });
  };

  const warningMessage = (msg) => {
    messageApi.open({
      type: 'warning',
      content: msg,
    });
  };

  return { successMessage, errorMessage, warningMessage ,contextHolder};
};