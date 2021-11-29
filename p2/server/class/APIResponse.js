class APIResponse extends Object {
  constructor(data = {}, statusCode) {
    super(data);
    this.statusCode = statusCode;
  }
}

module.exports = APIResponse;