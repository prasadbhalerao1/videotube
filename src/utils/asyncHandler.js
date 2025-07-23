const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch((err) => next(err));
  };
}

export default asyncHandler;

// This is to ensure that any errors in async route handlers are passed to the next middleware, allowing for centralized error handling in the application.