export const getAuthHeader = (jwt: string) => ({
  Authorization: `Bearer ${jwt}`,
});

export const getContentTypeHeader = () => ({
  'Content-Type': 'application/json',
});
