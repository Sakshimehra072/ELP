import axios from "axios"

// initiate payment
export const initiatePaymentApi = async (courseId: string) => {
  const response = await axios.post("/payment/initiate", { courseId });
  return response.data;
};