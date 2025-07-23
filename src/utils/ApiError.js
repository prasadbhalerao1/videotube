class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    error = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false; // Assuming any error is a failure
    this.error = error;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

// This is to create a standardized error handling mechanism for the application, allowing for consistent error responses.
// Reason we used extends Error is to use the built-in error handling features of JavaScript, while also adding custom properties for status code, data, and success status.