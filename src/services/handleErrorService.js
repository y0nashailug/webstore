class AuthenticationError extends Error {
    constructor(errorCode, message) {
      super(message);
      this.name = this.constructor.name;
      this.message = message;
      this.errorCode = errorCode;
    }
  }
  
  export function helper(errors) {
    if (typeof errors === 'string') return errors
    if (typeof errors === 'object') {
      return errors.details
    }
    return
  }
  
  export function handleError(error) {
    const localError = error;
  
    if (localError.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      const message = localError.response.status ? helper(localError.response.data.errors): ''
      throw new AuthenticationError(localError.response.status, message);
    } else if (localError.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      throw new AuthenticationError(0, 'Error has occurred.');
    } else {
      // Something happened in setting up the request and triggered an Error
      throw new AuthenticationError(0, 'Error has occurred.. Please try again later.');
    }
  }
  