import {
  buildEumetsatWmsUrl,
  getEumetsatProduct,
  getEumetsatProducts,
  getEumetsatRegion,
} from "@/lib/eumetsat";

describe("eumetsat catalog", () => {
  it("lists viewable products with WMS layers", () => {
    const products = getEumetsatProducts();
    expect(products.length).toBeGreaterThan(3);
    expect(products.every((product) => product.layer.includes(":"))).toBe(true);
  });

  it("builds a WMS GetMap URL for a known product and region", () => {
    const product = getEumetsatProduct("natural");
    const region = getEumetsatRegion("europe");
    expect(product).toBeDefined();
    expect(region).toBeDefined();

    const url = buildEumetsatWmsUrl(product!, region!);
    expect(url).toContain("view.eumetsat.int/geoserver/wms");
    expect(url).toContain("LAYERS=msg_fes%3Argb_natural");
    expect(url).toContain("BBOX=30%2C-25%2C72%2C45");
  });

  it("rejects unknown catalog ids", () => {
    expect(getEumetsatProduct("missing")).toBeUndefined();
    expect(getEumetsatRegion("moon")).toBeUndefined();
  });
});
