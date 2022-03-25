import { toast } from "react-toastify";

/**
 *
 * @param {string} message Takes a message
 * @returns Alerts the user about the message without blocking the whole screen
 */
const notifyDefault = (message) => toast(message);
const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);
const notifyInfo = (message) => toast.info(message);

export { notifyDefault, notifySuccess, notifyError, notifyInfo };
