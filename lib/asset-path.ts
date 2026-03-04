export function assetPath(relativePath: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/DemoSiteConfeitaria";
  const normalizedBase = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  const path = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
  return `${normalizedBase}${path}`;
}
