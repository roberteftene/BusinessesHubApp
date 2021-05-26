import axios from "axios";
const API_URL = process.env.REACT_APP_API_BASE_URL;

class BookingService {
  addBooking(serviceId, token, reqBody) {
    return axios.post(`${API_URL}bookings/${serviceId}`, reqBody, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default new BookingService();
