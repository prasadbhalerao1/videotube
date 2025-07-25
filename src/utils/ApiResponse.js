class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400; // Assuming 2xx and 3xx are success codes
  }
}

export { ApiResponse };

// This is to make the API response consistent across the application.