export const config = {
  worldAppId: process.env.NEXT_PUBLIC_APP_ID as `app_${string}`,
  worldSecret: process.env.NEXT_PUBLIC_WLD_CLIENT_SECRET as string,
  nextAuthRedirectUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL as string,
  dynamicEnvId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID as string,
};
