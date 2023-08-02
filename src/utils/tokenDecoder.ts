const decodeToken = (token: string) => JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());

export default decodeToken;