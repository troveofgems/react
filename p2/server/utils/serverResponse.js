const _sendResponse = (res, status, data) => res.status(status).json({ ...data });

module.exports.sendAPIResponse = _sendResponse;
module.exports.sendErrorResponse = _sendResponse;