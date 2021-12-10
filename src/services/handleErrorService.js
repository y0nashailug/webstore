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
      const message = localError.response.status ? helper(localError.response.data.errors): ''
      throw new AuthenticationError(localError.response.status, message);
    } else if (localError.request) {
      throw new AuthenticationError(0, 'Error has occurred.');
    } else {
      throw new AuthenticationError(0, 'Error has occurred.. Please try again later.');
    }
  }
  