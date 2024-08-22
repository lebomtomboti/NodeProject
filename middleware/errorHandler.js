function errorHandling(err, req, res, next) {
    if (err) {
      const statusCode = err.statusCode || err.status || 500;
      const message = err.message || 'An error occurred. Please try again later.';
      res.status(statusCode).json({
        status: statusCode,
        msg: message
      });
      console.error(err); 
    } else if (res.statusCode >= 400) {
      res.json({
        status: res.statusCode,
        msg: 'An error occurred. Please try again later.'
      });
    } else {
      next();
    }
  }
  
  export {
    errorHandling
  }