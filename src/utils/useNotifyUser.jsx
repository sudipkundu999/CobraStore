import { toast } from "react-toastify";

/**
 *
 * @param {string} message Takes a message
 * @returns Alerts the user about the message without blocking the whole screen
 */
const notifyDefault = (message) => toast(message, { autoClose: 3000 });
const notifySuccess = (message) => toast.success(message, { autoClose: 3000 });
const notifyError = (message) => toast.error(message, { autoClose: 3000 });
const notifyInfo = (message) => toast.info(message, { autoClose: 3000 });

export { notifyDefault, notifySuccess, notifyError, notifyInfo };
