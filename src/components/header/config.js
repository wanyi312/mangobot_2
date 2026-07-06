export const ROUTE_LABEL_KEY_MAP = {
  "/": "headerMenuHome",
  "/products": "headerMenuProducts",
  "/product/a2": "product.a2.completeTitle",
  "/product/x2": "product.x2.completeTitle",
  "/product/d1": "product.d1.completeTitle",
  "/product/d1max": "product.d1max.completeTitle",
  "/product/d1promax": "product.d1promax.completeTitle",
  "/product/g1": "product.g1.completeTitle",
  "/events": "headerMenuEvents",
  "/partnerships": "headerMenuPartnerships",
  "/aboutus": "headerMenuAbout",
  "/contactus": "headerContactUs",
  "/blog": "headerMenuBlog",
  "/privacyPolicy": "privacyTitle",
  "/termsConditions": "termsTitle",
};

// export const ROUTE_DESC_KEY_MAP = {
//   // "/": "homeDesc",
//   // "/products": "productsDesc",
//   // "/product/a2": "product.a2.completeTitle",
//   // "/product/x2": "product.x2.completeTitle",
//   // "/product/d1": "product.d1.completeTitle",
//   // "/product/d1max": "product.d1max.completeTitle",
//   // "/product/d1promax": "product.d1promax.completeTitle",
//   // "/product/g1": "product.g1.completeTitle",
//   // "/events": "headerMenuEvents",
//   // "/partnerships": "headerMenuPartnerships",
//   // "/aboutus": "headerMenuAbout",
//   // "/contactus": "headerContactUs",
//   // "/blog": "headerMenuBlog",
//   // "/privacyPolicy": "privacyTitle",
//   // "/termsConditions": "termsTitle",
// };

export const SEARCH_DROPDOWN_MAX = 14;
export const SEARCH_HIGHLIGHT_QUERY_KEY = "highlight";

export function mapTextKeyToRoute(keyPath) {
  if (!keyPath) return "";
  if (keyPath.startsWith("home")) return "/";
  // if (keyPath.startsWith("productsA2")) return "/product/a2";
  // if (keyPath.startsWith("productsX2")) return "/product/x2";
  // if (keyPath.startsWith("productsD1Ultra")) return "/product/d1";
  // if (keyPath.startsWith("productsD1MaxPro")) return "/product/d1promax";
  // if (keyPath.startsWith("productsD1Max")) return "/product/d1max";
  // if (keyPath.startsWith("productsG1")) return "/product/g1";
  if (keyPath.startsWith("products")) return "/products";
  if (keyPath.startsWith("privacy")) return "/privacyPolicy";
  if (keyPath.startsWith("terms")) return "/termsConditions";
  if (keyPath.startsWith("footerLinksAboutUs") || keyPath.startsWith("headerMenuAbout")) return "/aboutus";
  if (keyPath.startsWith("footerLinksPartnerships") || keyPath.startsWith("headerMenuPartnerships")) return "/partnerships";
  if (keyPath.startsWith("footerLinksEvents") || keyPath.startsWith("headerMenuEvents")) return "/events";
  if (keyPath.startsWith("footerLinksBlog") || keyPath.startsWith("headerMenuBlog")) return "/blog";
  if (keyPath.startsWith("headerContactUs")) return "/contactus";
  if (keyPath.startsWith("product.about")) return "/aboutus";
  if (keyPath.startsWith("product.partnerships")) return "/partnerships";
  if (keyPath.startsWith("product.events")) return "/events";
  if (keyPath.startsWith("product.blog")) return "/blog";
  if (keyPath.startsWith("product.contact")) return "/contactus";
  if (keyPath.startsWith("product.common")) return ["/product/a2", "/product/x2", "/product/d1", "/product/d1max", "/product/d1promax", "/product/g1"];
  if (keyPath.startsWith("product.a2")) return "/product/a2";
  if (keyPath.startsWith("product.x2")) return "/product/x2";
  if (keyPath.startsWith("product.d1promax")) return "/product/d1promax";
  if (keyPath.startsWith("product.d1max")) return "/product/d1max";
  if (keyPath.startsWith("product.d1")) return "/product/d1";
  if (keyPath.startsWith("product.g1")) return "/product/g1";
  return "";
}